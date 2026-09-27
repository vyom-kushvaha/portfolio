import { useCallback, useEffect, useRef, useState } from "react";

// Native document scrolling supplies the sticky runway. Only wheel gestures inside
// the pinned region are stepped; keyboard/touch/scrollbar navigation stays native.
export function useProjectScroll(sectionRef, count) {
  const [active, setActive] = useState(0);
  const [pinnedMode, setPinnedMode] = useState(false);
  const activeRef = useRef(0);
  const step = () => window.innerHeight * 0.65;
  const choose = useCallback(
    (index) => {
      activeRef.current = index;
      setActive(index);
      if (
        window.matchMedia(
          "(min-width: 1100px) and (min-height: 620px) and (prefers-reduced-motion: no-preference)",
        ).matches
      ) {
        const top =
          sectionRef.current.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: top + index * step(), behavior: "instant" });
      }
    },
    [sectionRef],
  );
  useEffect(() => {
    const media = window.matchMedia(
      "(min-width: 1100px) and (min-height: 620px) and (prefers-reduced-motion: no-preference)",
    );
    let frame,
      amount = 0,
      direction = 0,
      lastWheel = 0,
      lockedUntil = 0,
      gestureConsumed = false;
    function syncMode() {
      setPinnedMode(media.matches);
      onScroll();
    }
    function update() {
      frame = undefined;
      if (!media.matches) return;
      const offset = -sectionRef.current.getBoundingClientRect().top;
      const next = Math.max(
        0,
        Math.min(count - 1, Math.floor((offset + step() * 0.12) / step())),
      );
      activeRef.current = next;
      setActive(next);
    }
    function onScroll() {
      if (!frame) frame = requestAnimationFrame(update);
    }
    function wheel(event) {
      if (
        !media.matches ||
        event.ctrlKey ||
        Math.abs(event.deltaX) > Math.abs(event.deltaY) ||
        event.target.closest("dialog")
      )
        return;
      const bounds = sectionRef.current.getBoundingClientRect();
      if (bounds.top > 1 || bounds.bottom < window.innerHeight - 1) return;
      const now = performance.now();
      const nextDirection = Math.sign(event.deltaY);
      if (!nextDirection) return;
      const idle = now - lastWheel > 180;
      lastWheel = now;
      if (idle || nextDirection !== direction) {
        amount = 0;
        gestureConsumed = false;
      }
      direction = nextDirection;
      // Swallow momentum from the gesture that selected the final item too.
      if (now < lockedUntil || gestureConsumed) {
        event.preventDefault();
        return;
      }
      if (
        (activeRef.current === 0 && direction < 0) ||
        (activeRef.current === count - 1 && direction > 0)
      )
        return;
      event.preventDefault();
      amount +=
        event.deltaY *
        (event.deltaMode === 1
          ? 16
          : event.deltaMode === 2
            ? window.innerHeight
            : 1);
      if (Math.abs(amount) < 65) return;
      const next = Math.max(
        0,
        Math.min(count - 1, activeRef.current + direction),
      );
      choose(next);
      gestureConsumed = true;
      amount = 0;
      lockedUntil = now + 650;
    }
    syncMode();
    update();
    media.addEventListener("change", syncMode);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("wheel", wheel, { passive: false });
    return () => {
      cancelAnimationFrame(frame);
      media.removeEventListener("change", syncMode);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("wheel", wheel);
    };
  }, [count, choose, sectionRef]);
  return { active, choose, pinnedMode };
}

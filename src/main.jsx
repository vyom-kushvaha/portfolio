import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import wordmark from "./assets/vyom-kushvaha.svg";
import crown from "./assets/crown.svg";
import crownRim from "./assets/crown-rim.svg";
import Projects from "./projects/Projects.jsx";
import About from "./About.jsx";
import Skills from "./Skills.jsx";

// Add real destinations here as the rest of the portfolio is built.
const links = {
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  contact: "mailto:hello@example.com",
  resume: "https://example.com/resume.pdf",
  projects: "#projects",
  about: "#about",
  skills: "#skills",
};

function PortfolioLink({ destination, children, className = "", ...props }) {
  const href = links[destination];
  return href ? (
    <a href={href} className={className} {...props}>
      {children}
    </a>
  ) : (
    <button
      type="button"
      className={className}
      aria-disabled="true"
      title="Link coming soon"
      {...props}
    >
      {children}
    </button>
  );
}

function Icon({ type }) {
  return type === "github" ? (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .8a11.3 11.3 0 0 0-3.57 22.02c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.34-3.8-1.34-.51-1.3-1.25-1.64-1.25-1.64-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.72-1.51-2.51-.29-5.15-1.26-5.15-5.59 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.11 1.16a10.8 10.8 0 0 1 5.66 0c2.16-1.46 3.11-1.16 3.11-1.16.61 1.55.23 2.69.11 2.98.72.79 1.16 1.8 1.16 3.03 0 4.34-2.65 5.3-5.17 5.58.41.35.77 1.04.77 2.09v3.09c0 .3.2.65.78.54A11.3 11.3 0 0 0 12 .8Z" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.5 1h-17A2.5 2.5 0 0 0 1 3.5v17A2.5 2.5 0 0 0 3.5 23h17a2.5 2.5 0 0 0 2.5-2.5v-17A2.5 2.5 0 0 0 20.5 1ZM7.6 19H4.4V9h3.2ZM6 7.6a1.85 1.85 0 1 1 0-3.7 1.85 1.85 0 0 1 0 3.7ZM19.6 19h-3.2v-4.9c0-1.17-.02-2.68-1.63-2.68-1.64 0-1.89 1.28-1.89 2.59V19H9.7V9h3.05v1.37h.04a3.34 3.34 0 0 1 3-1.65c3.2 0 3.81 2.1 3.81 4.82Z" />
    </svg>
  );
}

function Header() {
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      }
    }, { rootMargin: "-10% 0px -60% 0px", threshold: 0 });
    document.querySelectorAll("#home > section[id], #home > .hero").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return (
    <header className="header">
      <a className="brand" href="#home" aria-label="Vyom Kushvaha home">
        VK
      </a>
      <span className="brand-line" />
      <span className="motto">
        IDEAS <i>/</i> CODE <i>/</i> PROGRESS
      </span>
      <nav aria-label="Main navigation">
        {["About", "Projects", "Skills", "Contact"].map((item) => (
          <PortfolioLink key={item} destination={item.toLowerCase()} aria-current={activeSection === item.toLowerCase() ? "location" : undefined}>
            {item}
          </PortfolioLink>
        ))}
        <span className="nav-line" />
        <PortfolioLink destination="resume" className="resume">
          Resume <span>↗</span>
        </PortfolioLink>
      </nav>
    </header>
  );
}

function SocialCard({ type, title, subtitle }) {
  return (
    <PortfolioLink destination={type} className={`social-card ${type}`}>
      <Icon type={type} />
      <span>
        <strong>{title}</strong>
        <small>{subtitle}</small>
      </span>
    </PortfolioLink>
  );
}

function Doodles() {
  return (
    <svg
      className="doodles"
      viewBox="0 0 1024 698"
      fill="none"
      aria-hidden="true"
    >
      <g
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M149 95C185 72 220 98 236 120m-1-7 1 7-7-3" />
        <path d="m810 66 10 12m-25 8 13 4" />
        <path d="M905 157c-10 27-13 75-7 119m4-100c-8 28-8 62-5 91m9-25c-3-33 5-79-1-65-7 22-6 58-6 85" />
        <path d="m782 258 40-11m22 14 18-3" />
        <path d="M177 272c-9 3-18-4-14 16l5 80c0 16-5 14 10 11m-20-106 7 69-4 36m-2-50c-12 12-3 13-3 5" />
        <path d="M950 326c21 4 39 15 47 30m-3-1 3 1-1-4" />
        <path d="M860 521c-26 7-42-1-60-15m1 6-1-6 6 1" />
        <path d="m80 533 23-7" />
      </g>
    </svg>
  );
}

function Hero() {
  const hero = useRef(null);
  useEffect(() => {
    const element = hero.current;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame;
    function move(event) {
      if (reduced.matches || event.pointerType === "touch") return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bounds = element.getBoundingClientRect();
        element.style.setProperty(
          "--mx",
          `${((event.clientX - bounds.left) / bounds.width - 0.5) * 7}px`,
        );
        element.style.setProperty(
          "--my",
          `${((event.clientY - bounds.top) / bounds.height - 0.5) * 7}px`,
        );
      });
    }
    function reset() {
      element.style.setProperty("--mx", "0px");
      element.style.setProperty("--my", "0px");
    }
    function scroll() {
      if (!reduced.matches)
        element.style.setProperty(
          "--depart",
          Math.min(window.scrollY / 450, 1),
        );
    }
    element.addEventListener("pointermove", move);
    element.addEventListener("pointerleave", reset);
    window.addEventListener("scroll", scroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      element.removeEventListener("pointermove", move);
      element.removeEventListener("pointerleave", reset);
      window.removeEventListener("scroll", scroll);
    };
  }, []);
  return (
    <main id="home">
      <section
        className="hero"
        ref={hero}
        aria-label="Introducing Vyom Kushvaha"
      >
        <div className="composition">
          <div className="floating-layer">
            <SocialCard
              type="github"
              title="GitHub"
              subtitle="EXPLORE MY WORK"
            />
            <div className="internship">
              <span>Open to Internships</span>
              <i className="pin" />
            </div>
            <div className="technical">
              <span>{">_"}</span>
              <small>
                BUILD
                <br />
                BREAK
                <br />
                LEARN
              </small>
            </div>
            <SocialCard
              type="linkedin"
              title="LinkedIn"
              subtitle="LET’S CONNECT"
            />
            <div className="handwritten">
              Better
              <br />
              <span>Ideas</span>
              <br />
              <span>Through</span>
              <br />
              <span>Code</span>
            </div>
            <Doodles />
          </div>
          <div className="hero-content">
            <p className="eyebrow">
              <span />
              CURIOUS MINDS BUILD BRIGHTER TOMORROWS
              <span />
            </p>
            <h1 className="name" aria-label="Vyom Kushvaha">
              <img
                className="wordmark"
                src={wordmark}
                alt=""
                width="1460"
                height="615"
                draggable="false"
              />
              <img
                className="wordmark-crown wordmark-crown--back"
                src={crown}
                alt=""
                aria-hidden="true"
                width="160"
                height="140"
                draggable="false"
              />
              <img
                className="wordmark-crown wordmark-crown--front"
                src={crownRim}
                alt=""
                aria-hidden="true"
                width="160"
                height="140"
                draggable="false"
              />
            </h1>
            <p className="role">
              FULL-STACK DEVELOPER
              <span />
            </p>
            <div className="cta-panel">
              <PortfolioLink className="cta primary" destination="projects">
                VIEW PROJECTS <span>→</span>
              </PortfolioLink>
              <PortfolioLink className="cta secondary" destination="contact">
                LET’S CONNECT
              </PortfolioLink>
            </div>
            <div className="mobile-links">
              <PortfolioLink destination="github">GitHub ↗</PortfolioLink>
              <PortfolioLink destination="linkedin">LinkedIn ↗</PortfolioLink>
              <PortfolioLink destination="resume">Resume ↗</PortfolioLink>
            </div>
          </div>
          <div className="scroll-cue">
            SCROLL TO EXPLORE
            <span />
          </div>
        </div>
      </section>
      <Projects />
      <About />
      <Skills />
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Hero />
  </React.StrictMode>,
);

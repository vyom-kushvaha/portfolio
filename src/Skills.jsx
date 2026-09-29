import React, { useEffect, useRef } from "react";
import scene from "./assets/skills/workbench-scene.webp";
import "./skills.css";

const toolkit = [
  "HTML / CSS",
  "JavaScript",
  "Node.js + Express.js",
  "REST APIs",
  "C / C++",
  "SQL / Relational Databases",
];
const focus = [
  ["C++ + DSA", "Problem solving"],
  ["Backend / Full-stack", "Building deeper"],
  ["DBMS", "Strengthening foundations"],
  ["Cybersecurity", "Learning & exploring"],
];
const practice = [
  ["Arrays", "practising"],
  ["Stacks", "practising"],
  ["Queues", "practising"],
  ["Linked Lists", "improving"],
  ["Trees / BST", "learning"],
  ["Graphs", "next"],
];
const database = [
  "Keys & relationships",
  "SQL queries & joins",
  "Normalization",
  "Transactions / ACID",
  "Indexing",
  "Database design",
  "Query optimization → next",
];
function Tree() {
  return (
    <svg
      className="bench-tree"
      viewBox="0 0 180 80"
      aria-hidden="true"
      fill="none"
    >
      <path d="m90 10-45 25m45-25 45 25M45 35 20 65m25-30 25 30m65-30-25 30m25-30 25 30" />
      {[
        [90, 10],
        [45, 35],
        [135, 35],
        [20, 65],
        [70, 65],
        [110, 65],
        [160, 65],
      ].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="7" />
      ))}
    </svg>
  );
}
export default function Skills() {
  const section = useRef(null);
  const dialog = useRef(null);
  const notesTrigger = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.current.classList.add("bench-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    observer.observe(section.current);
    const frame =
      location.hash === "#skills"
        ? requestAnimationFrame(() =>
            section.current.scrollIntoView({ block: "start" }),
          )
        : null;
    return () => {
      observer.disconnect();
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);
  function openNotes() {
    dialog.current.showModal();
  }
  function closeNotes() {
    dialog.current.close();
  }
  return (
    <section
      className="bench"
      id="skills"
      ref={section}
      aria-labelledby="skills-title"
    >
      <div className="bench-stage" style={{ "--scene": `url(${scene})` }}>
        <img
          className="bench-art"
          src={scene}
          width="1536"
          height="1024"
          alt=""
          loading="lazy"
          decoding="async"
        />
        <header className="bench-intro">
          <p className="bench-label">
            03 / SKILLS <span aria-hidden="true" />
          </p>
          <h2 id="skills-title">
            Inside the
            <br />
            <em>Workbench.</em>
          </h2>
          <p className="bench-description">
            The tools I use, the concepts I explore,
            <br />
            and the skills I’m building —<br />
            one problem at a time.
          </p>
          <p className="bench-hand">
            Always learning.
            <br />
            Always building.
          </p>
          <svg
            className="bench-arrow"
            viewBox="0 0 100 50"
            fill="none"
            aria-hidden="true"
          >
            <path d="M5 4c5 30 47 4 71 34m-13-4 14 5-3-14" />
          </svg>
        </header>

        <article className="bench-laptop" aria-labelledby="focus-heading">
          <div className="bench-editor" aria-hidden="true">
            <span>main.cpp</span>
            <pre>
              <span>// solve one problem at a time</span>
              {"\n\n"}int main() &#123;{"\n"} int sum = 0;{"\n"} for (int n :
              &#123;1, 2, 3&#125;){"\n"} sum += n;{"\n\n"} // dry run: 1 → 3 → 6
              {"\n"} return 0;{"\n"}&#125;
            </pre>
            <p>
              ❯ g++ main.cpp
              <br />❯ ./a.out <i className="bench-cursor" />
            </p>
          </div>
          <div className="bench-focus">
            <p className="bench-label">PRACTISING / STRENGTHENING</p>
            <h3 id="focus-heading">Current focus</h3>
            <ol>
              {focus.map(([name, state], i) => (
                <li key={name}>
                  <span>0{i + 1}</span>
                  <div>
                    <h4>{name}</h4>
                    <p>{state}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </article>

        <article className="bench-build" aria-labelledby="build-heading">
          <h3 className="bench-label" id="build-heading">
            TOOLS I BUILD WITH
          </h3>
          <ul>
            {toolkit.map((name, i) => (
              <li key={name} style={{ "--spine": i }}>
                <span>{name}</span>
              </li>
            ))}
          </ul>
          <p className="bench-network-book">
            + Computer Networking <small>fundamentals</small>
          </p>
        </article>

        <article className="bench-notebook" aria-labelledby="practice-heading">
          <div className="bench-practice">
            <h3 id="practice-heading">Practice notes</h3>
            <p className="bench-label">DSA / A WORK IN PROGRESS</p>
            <ul>
              {practice.map(([name, state]) => (
                <li key={name}>
                  <span>{name}</span>
                  <span>
                    {state} {state === "next" ? "⇢" : "·"}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bench-scratch">
            <p className="bench-hand">why does this work?</p>
            <div className="bench-array" aria-label="Example array: 1, 3, 5, 7">
              {[1, 3, 5, 7].map((n) => (
                <span key={n}>{n}</span>
              ))}
            </div>
            <Tree />
            <p className="bench-complexity">O(1) / O(n) / O(log n)</p>
            <p className="bench-hand bench-attempt">
              <s>code first</s> → dry run
            </p>
            <svg
              className="bench-crown"
              viewBox="0 0 50 30"
              fill="none"
              aria-hidden="true"
            >
              <path d="m7 24-3-17 13 8 8-12 8 12 13-8-3 17Z" />
            </svg>
          </div>
        </article>

        <article className="bench-db" aria-labelledby="db-heading">
          <p className="bench-label">STRENGTHENING / DBMS</p>
          <h3 id="db-heading">Beneath the query.</h3>
          <ol>
            {database.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
          <p className="bench-hand">connecting the dots…</p>
        </article>

        <article className="bench-security" aria-labelledby="security-heading">
          <p className="bench-label">EXPLORING</p>
          <h3 id="security-heading">Cybersecurity</h3>
          <p className="bench-security-sub">A security mindset.</p>
          <p className="bench-label">FOUNDATIONS</p>
          <p>
            Networking · Linux
            <br />
            Web & OS basics · CIA Triad
          </p>
          <p className="bench-label">MOVING TOWARD</p>
          <p>
            OWASP · Web security
            <br />
            Auth & sessions · Burp Suite
          </p>
          <button
            ref={notesTrigger}
            type="button"
            onClick={openNotes}
            aria-haspopup="dialog"
          >
            Open my learning notes <span aria-hidden="true">↗</span>
          </button>
        </article>

        <aside className="bench-kit" aria-label="Everyday tools">
          <p className="bench-label">THE EVERYDAY KIT</p>
          <ul>
            {[
              "Git",
              "GitHub",
              "VS Code",
              "Postman",
              "Linux Terminal / CLI",
              "npm",
            ].map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </aside>
        <aside
          className="bench-network"
          aria-label="Networking and system foundations"
        >
          <p className="bench-label">SYSTEM FOUNDATIONS</p>
          <p className="bench-connection">
            Client <span>→</span> HTTP <span>→</span> Server
          </p>
          <p>
            IP · DNS · ports · protocols
            <br />
            Routing · files & permissions
            <br />
            Processes · OS basics
          </p>
        </aside>
      </div>
      <dialog
        className="bench-dialog"
        ref={dialog}
        aria-labelledby="learning-notes-title"
        onClose={() => notesTrigger.current?.focus()}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeNotes();
        }}
      >
        <div className="bench-dialog-content">
          <button
            type="button"
            className="bench-close"
            onClick={closeNotes}
            aria-label="Close learning notes"
          >
            ×
          </button>
          <p className="bench-label">CYBERSECURITY / FIELD NOTES</p>
          <h3 id="learning-notes-title">
            A curious mind.
            <br />
            <em>A long way to go.</em>
          </h3>
          <div className="bench-notes-columns">
            <div>
              <h4>Foundations I understand</h4>
              <ul>
                {[
                  "CIA Triad",
                  "Hacker types & common attack types",
                  "Threat / vulnerability / risk",
                  "Reconnaissance basics",
                  "Computer networking fundamentals",
                  "Linux & operating systems basics",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Moving toward / exploring</h4>
              <ul>
                {[
                  "Web application security & OWASP concepts",
                  "HTTP in depth · authentication & sessions",
                  "Burp Suite & VAPT methodology",
                  "Linux for security & network security",
                  "Deeper recon methodology",
                  "Vulnerability assessment & security testing",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="bench-hand">
            Building foundations, one question at a time.
          </p>
        </div>
      </dialog>
    </section>
  );
}

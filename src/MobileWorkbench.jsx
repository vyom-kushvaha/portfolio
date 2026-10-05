import React from "react";
import laptop from "./assets/skills/mobile-laptop.webp";
import lamp from "./assets/skills/mobile-lamp.webp";
import "./mobile-workbench.css";

const focus = [
  ["◎", "C++ + DSA", "Problem Solving"],
  ["⌘", "Backend / Full-stack", "Building deeper"],
  ["▤", "DBMS", "Strengthening foundations"],
  ["◇", "Cybersecurity", "Learning & exploring"],
];
const books = [
  "HTML / CSS",
  "JavaScript",
  "Node.js + Express.js",
  "REST APIs",
  "C / C++",
  "SQL / Relational Databases",
];
const database = [
  "Keys & Relationships",
  "SQL Queries & Joins",
  "Normalization",
  "Transactions / ACID",
  "Indexing",
  "Database Design",
  "Query Optimization",
];
const kit = [
  "Git",
  "GitHub",
  "VS Code",
  "Postman",
  "Linux Terminal / CLI",
  "npm",
];

function ToolIcon({ tool }) {
  const paths = {
    Git: (
      <>
        <path fill="currentColor" d="M12 1 23 12 12 23 1 12Z" />
        <path d="m8 7 8 8M10 9v8" stroke="#171916" strokeWidth="2" />
        <g fill="#171916">
          <circle cx="8" cy="7" r="2" />
          <circle cx="16" cy="15" r="2" />
          <circle cx="10" cy="17" r="2" />
        </g>
      </>
    ),
    GitHub: (
      <path
        fill="currentColor"
        d="M12 1a11 11 0 0 0-3.5 21.4v-2.6c-3 .6-3.7-1.3-3.7-1.3-.5-1.3-1.2-1.6-1.2-1.6-1-.7 0-.7 0-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.2.9.1-.8.4-1.3.7-1.6-2.5-.3-5-1.2-5-5.5 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 1.1a10.4 10.4 0 0 1 5.5 0c2.1-1.4 3-1.1 3-1.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.8 1.1 3 0 4.3-2.5 5.2-5 5.5.4.3.8 1 .8 2v3.7A11 11 0 0 0 12 1Z"
      />
    ),
    "VS Code": (
      <path
        fill="currentColor"
        d="m18 1 5 2v18l-5 2-10-8-5 4-3-2 6-5-6-5 3-2 5 4ZM18 6l-7 6 7 6Z"
      />
    ),
    Postman: (
      <>
        <circle cx="12" cy="12" r="11" fill="currentColor" />
        <path
          d="m6 18 9-12 3 3-12 9Zm9-12 2-2 3 3-2 2"
          fill="none"
          stroke="#fff"
          strokeWidth="1.3"
        />
      </>
    ),
    "Linux Terminal / CLI": (
      <>
        <rect
          x="1"
          y="3"
          width="22"
          height="18"
          rx="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="m5 8 4 4-4 4m7 0h6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </>
    ),
    npm: (
      <>
        <path d="M1 5h22v14H1Z" fill="currentColor" />
        <path
          d="M5 9v7m0-6h4v6m3 1V9h6v5h-4m2-5v5"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
        />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {paths[tool]}
    </svg>
  );
}

function Label({ children, id }) {
  return (
    <h3 className="mw-label" id={id}>
      {children}
      <span aria-hidden="true" />
    </h3>
  );
}

// Separate DOM and namespace keep the approved desktop scene completely intact.
// All learning states remain visible on touch; no hover or pointer effects.
export default function MobileWorkbench({ openNotes }) {
  return (
    <div className="mobile-workbench">
      <header className="mw-intro">
        <img
          className="mw-lamp"
          src={lamp}
          width="256"
          height="340"
          alt=""
          loading="lazy"
          decoding="async"
        />
        <Label>03 / SKILLS</Label>
        <h2>
          Inside the
          <br />
          <em>Workbench.</em>
        </h2>
        <p className="mw-description">
          The tools I use, the concepts I explore,
          <br />
          and the skills I’m building —<br />
          one problem at a time.
        </p>
        <p className="mw-hand mw-always">
          Always learning.
          <br />
          Always building. <span aria-hidden="true">⤵</span>
        </p>
      </header>

      <article className="mw-laptop" aria-labelledby="mw-focus-heading">
        <img
          src={laptop}
          width="645"
          height="431"
          alt=""
          loading="lazy"
          decoding="async"
        />
        <div className="mw-screen">
          <h3 id="mw-focus-heading">Current focus</h3>
          <ol>
            {focus.map(([icon, name, state]) => (
              <li key={name}>
                <span aria-hidden="true">{icon}</span>
                <div>
                  <h4>{name}</h4>
                  <p>{state}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </article>

      <article className="mw-build" aria-labelledby="mw-build-heading">
        <Label id="mw-build-heading">TOOLS I BUILD WITH</Label>
        <ul className="mw-books">
          {books.map((name, i) => (
            <li key={name}>
              <span
                className={`mw-book-icon mw-book-icon-${i}`}
                aria-hidden="true"
              >
                {["5", "JS", "⬡", "⚙", "C⁺", "▤"][i]}
              </span>
              <span>{name}</span>
            </li>
          ))}
        </ul>
        <p className="mw-network-book">
          <span aria-hidden="true">♧</span> Computer Networking
        </p>
        <p className="mw-hand mw-tools-note">
          Same curiosity. Different tools.
        </p>
      </article>

      <article className="mw-practice" aria-labelledby="mw-practice-heading">
        <Label id="mw-practice-heading">PRACTICE NOTES</Label>
        <div className="mw-notebook">
          <div className="mw-notebook-left">
            <p className="mw-paper-label">DSA / A WORK IN PROGRESS</p>
            <ul>
              {[
                "Arrays",
                "Stacks",
                "Queues",
                "Linked Lists",
                "Trees / BST",
                "Graphs",
              ].map((name, i) => (
                <li key={name}>
                  <span aria-hidden="true">{i < 3 ? "☑" : "□"}</span>
                  {name}
                </li>
              ))}
            </ul>
            <p className="mw-hand">
              practice &gt; memorise.
              <br />
              try again.
            </p>
          </div>
          <div className="mw-notebook-right">
            <p className="mw-hand">why does this work?</p>
            <div className="mw-array" aria-label="Example array: 1, 3, 5, 7">
              {[1, 3, 5, 7].map((n) => (
                <span key={n}>{n}</span>
              ))}
            </div>
            <svg
              className="mw-tree"
              viewBox="0 0 180 100"
              fill="none"
              aria-label="Binary tree diagram"
              role="img"
            >
              <path d="M90 12 48 45M90 12l42 33M48 45 24 82M48 45l24 37M132 45l-24 37M132 45l24 37" />
              {[
                [90, 12],
                [48, 45],
                [132, 45],
                [24, 82],
                [72, 82],
                [108, 82],
                [156, 82],
              ].map(([x, y]) => (
                <circle key={`${x}-${y}`} cx={x} cy={y} r="7" />
              ))}
            </svg>
            <p className="mw-complexity">
              O(n)
              <br />
              O(log n)
            </p>
            <p className="mw-hand">dry run → understand</p>
          </div>
        </div>
      </article>

      <div className="mw-papers">
        <article className="mw-db mw-paper" aria-labelledby="mw-db-heading">
          <p className="mw-paper-label">STRENGTHENING / DBMS</p>
          <h3 id="mw-db-heading">Beneath the query.</h3>
          <ul>
            {database.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mw-hand">connecting the dots…</p>
        </article>
        <article
          className="mw-security mw-paper"
          aria-labelledby="mw-security-heading"
        >
          <p className="mw-paper-label">EXPLORING</p>
          <h3 id="mw-security-heading">Cybersecurity</h3>
          <p className="mw-hand">A security mindset.</p>
          <h4>FOUNDATIONS</h4>
          <ul>
            {[
              "Networking fundamentals",
              "Linux / CLI",
              "Web & OS basics",
              "CIA Triad",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h4>MOVING TOWARD</h4>
          <ul>
            {[
              "Web Security",
              "OWASP",
              "Authentication & Sessions",
              "Burp Suite",
              "VAPT basics",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <button type="button" aria-haspopup="dialog" onClick={openNotes}>
            Open my learning notes <span aria-hidden="true">↗</span>
          </button>
        </article>
      </div>

      <aside className="mw-kit" aria-labelledby="mw-kit-heading">
        <Label id="mw-kit-heading">THE EVERYDAY KIT</Label>
        <ul>
          {kit.map((name) => (
            <li key={name}>
              <span>
                <ToolIcon tool={name} />
              </span>
              {name}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

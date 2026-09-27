import React from "react";

function Campus() {
  return (
    <svg className="campus-art" viewBox="0 0 600 360" aria-hidden="true">
      <rect width="600" height="360" fill="#202c39" />
      <path
        d="M0 190 80 149 147 180 220 133 330 184 420 128 600 172V360H0Z"
        fill="#162324"
      />
      <path d="M348 92 430 63 472 95V292H348Z" fill="#423e38" />
      <path d="M430 63 472 95V292H430Z" fill="#292d2d" />
      <path d="M359 102 422 80V276H359Z" fill="#343b3f" />
      {Array.from({ length: 7 }, (_, row) =>
        Array.from({ length: 4 }, (_, col) => (
          <rect
            key={`${row}-${col}`}
            x={365 + col * 15}
            y={108 + row * 23 - col * 5}
            width="7"
            height="11"
            fill={(row + col) % 5 === 0 ? "#b08a50" : "#17242b"}
          />
        )),
      )}
      <path
        d="M0 259c74-26 156-8 222-34s143 31 197 4 119-12 181 16v115H0Z"
        fill="#111d18"
      />
      {[35, 94, 163, 253, 504, 565].map((x, i) => (
        <g key={x}>
          <path d={`M${x} 315v-124`} stroke="#17211a" strokeWidth="9" />
          <circle
            cx={x}
            cy={180 + (i % 3) * 14}
            r={40 + (i % 2) * 11}
            fill="#15251e"
          />
          <circle cx={x + 13} cy={152 + (i % 3) * 14} r="30" fill="#172820" />
        </g>
      ))}
      <path d="M280 360 379 262h28l68 98" fill="#36382f" />
      <path d="M492 242v70" stroke="#bcb092" strokeWidth="2" />
      <circle cx="492" cy="241" r="5" fill="#edb472" />
    </svg>
  );
}

export default function ProjectPreview({ project }) {
  return (
    <div
      className={`project-art project-art--${project.theme}`}
      aria-label={`Illustrative interface preview for ${project.title}`}
      role="img"
    >
      <span className="featured-sticker">Featured Project</span>
      <span className="art-note art-note-left">
        From
        <br />
        Ideas to
        <br />
        Impact
      </span>
      <div className="laptop">
        <div className="laptop-screen">
          {project.theme === "safety" && (
            <div className="safety-app">
              <aside>
                <b>◈ R.A.K.S.H.A.K.</b>
                {[
                  "⌂  Home",
                  "♧  Alerts",
                  "♧  Safe Journey",
                  "♧  Community",
                  "▥  Analytics",
                  "⚙  Settings",
                ].map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </aside>
              <div className="safety-main">
                <Campus />
                <div className="safety-copy">
                  <strong>R.A.K.S.H.A.K.</strong>
                  <p>
                    Safer Campuses.
                    <br />
                    Stronger Tomorrows.
                  </p>
                  <div>
                    <i>Get Help</i>
                    <i>Learn More</i>
                  </div>
                </div>
                <small>◇ &nbsp; Security · Awareness · Community</small>
              </div>
            </div>
          )}
          {project.theme === "furniture" && (
            <div className="furniture-app">
              <header>
                URBAN<span>Collection &nbsp; Spaces &nbsp; About</span>
              </header>
              <div className="furniture-copy">
                <small>MADE FOR EVERYDAY LIVING</small>
                <strong>
                  Good design.
                  <br />
                  Better living.
                </strong>
                <p>A place to make your own.</p>
                <i>Explore the collection ↗</i>
              </div>
              <div className="chair">
                <div className="chair-back" />
                <div className="chair-seat" />
                <span />
                <span />
              </div>
              <footer>01 — THE EVERYDAY COLLECTION</footer>
            </div>
          )}
          {project.theme === "agriculture" && (
            <div className="agriculture-app">
              <header>
                ✳ GreenForce<span>SmartKrishi / Overview</span>
              </header>
              <div className="farm-body">
                <aside>
                  Overview
                  <br />
                  <br />
                  My fields
                  <br />
                  <br />
                  Insights
                  <br />
                  <br />
                  Weather
                </aside>
                <div>
                  <small>YOUR FARM, AT A GLANCE</small>
                  <h4>Growing with insight.</h4>
                  <div className="farm-stats">
                    <span>
                      Soil health<b>Healthy</b>
                    </span>
                    <span>
                      Weather<b>26°C</b>
                    </span>
                    <span>
                      Crop stage<b>Growing</b>
                    </span>
                  </div>
                  <div className="farm-chart">
                    <span>FIELD CONDITIONS</span>
                    <svg viewBox="0 0 400 90">
                      <path
                        d="M0 80 35 66 65 70 100 41 135 50 180 34 220 44 270 15 310 26 355 9 400 14"
                        fill="none"
                        stroke="#98b58d"
                        strokeWidth="3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}
          {project.theme === "terminal" && (
            <div className="terminal-app">
              <header>
                <span>● ● ●</span> student_manager.cpp
              </header>
              <div>
                <small>C++ / STUDENT MANAGEMENT SYSTEM</small>
                <p>
                  <em>❯</em> ./student_manager
                </p>
                <h4>Student Management System</h4>
                <pre>
                  {
                    "  [1]  Add student\n  [2]  View records\n  [3]  Search student\n  [4]  Update record\n  [5]  Exit"
                  }
                </pre>
                <p>
                  <em>❯</em> Select an option{" "}
                  <span className="terminal-cursor">▌</span>
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="laptop-base" />
      </div>
      <span className="art-note art-note-right">
        Real problems.
        <br />
        Real solutions.
      </span>
      <span className="illustrative-label">ILLUSTRATIVE PREVIEW</span>
    </div>
  );
}

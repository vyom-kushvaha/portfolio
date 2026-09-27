import React, { useEffect, useRef, useState } from "react";
import { projects, featuredProjects } from "./projects";
import ProjectPreview from "./ProjectPreview";
import { useProjectScroll } from "./useProjectScroll";
import "./projects.css";

const number = (index) => String(index + 1).padStart(2, "0");

function ProjectArchive({ open, onClose, onSelect }) {
  const dialog = useRef(null);
  useEffect(() => {
    if (open && !dialog.current.open) dialog.current.showModal();
    if (!open && dialog.current.open) dialog.current.close();
  }, [open]);
  return (
    <dialog
      ref={dialog}
      className="project-archive"
      aria-labelledby="archive-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialog.current) onClose();
      }}
    >
      <div className="archive-heading">
        <div>
          <span className="project-label">THE COLLECTION</span>
          <h2 id="archive-title">All projects</h2>
        </div>
        <button autoFocus onClick={onClose} aria-label="Close project archive">
          ×
        </button>
      </div>
      <p>A growing collection of ideas, experiments and work.</p>
      <div className="archive-list">
        {projects.map((project, index) => (
          <button key={project.id} onClick={() => onSelect(project)}>
            <span>{number(index)}</span>
            <div>
              <strong>{project.title}</strong>
              <small>{project.context}</small>
            </div>
            <span>↗</span>
          </button>
        ))}
      </div>
    </dialog>
  );
}

export default function Projects() {
  const section = useRef(null);
  const { active, choose, pinnedMode } = useProjectScroll(
    section,
    featuredProjects.length,
  );
  const [archiveOpen, setArchiveOpen] = useState(
    window.location.hash === "#project-archive",
  );
  const project = featuredProjects[active];
  useEffect(() => {
    const onHash = () =>
      setArchiveOpen(window.location.hash === "#project-archive");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  function closeArchive() {
    setArchiveOpen(false);
    if (window.location.hash === "#project-archive")
      history.replaceState(null, "", "#projects");
  }
  function keyboard(event) {
    const keys = {
      ArrowDown: Math.min(active + 1, featuredProjects.length - 1),
      ArrowUp: Math.max(active - 1, 0),
      Home: 0,
      End: featuredProjects.length - 1,
    };
    if (keys[event.key] === undefined) return;
    event.preventDefault();
    choose(keys[event.key]);
    section.current
      .querySelector(`#project-tab-${featuredProjects[keys[event.key]].id}`)
      .focus({ preventScroll: true });
  }
  return (
    <section
      id="projects"
      ref={section}
      className={`projects-section ${pinnedMode ? "is-pinned" : ""}`}
      style={{ "--project-count": featuredProjects.length }}
      aria-labelledby="projects-title"
    >
      <div className="projects-sticky">
        <div className="projects-layout">
          <div className="projects-index">
            <div className="projects-intro">
              <p className="project-label">
                PROJECTS <span />
              </p>
              <h2 id="projects-title">
                Selected
                <br />
                Works
                <span className="heading-marks" aria-hidden="true">
                  ╱
                </span>
              </h2>
              <span className="index-note" aria-hidden="true">
                Click
                <br />
                Explore
                <br />
                Discover
              </span>
            </div>
            <div
              className="project-tabs"
              role="tablist"
              aria-label="Featured projects"
              aria-orientation="vertical"
              onKeyDown={keyboard}
            >
              {featuredProjects.map((item, index) => (
                <button
                  key={item.id}
                  id={`project-tab-${item.id}`}
                  type="button"
                  role="tab"
                  aria-selected={active === index}
                  aria-controls="project-details"
                  tabIndex={active === index ? 0 : -1}
                  className={`project-tab ${active === index ? "is-active" : ""}`}
                  onClick={() => choose(index)}
                >
                  <span className="project-tab-number">{number(index)}</span>
                  <span className="project-tab-copy">
                    <strong>{item.title}</strong>
                    <small>{item.context}</small>
                  </span>
                  <span className="project-tab-arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M4 12h16m-6-6 6 6-6 6" />
                    </svg>
                  </span>
                </button>
              ))}
            </div>
            <a
              className="archive-link"
              href="#project-archive"
              onClick={() => setArchiveOpen(true)}
            >
              VIEW ALL PROJECTS <span>↗</span>
            </a>
            <p className="index-footnote">
              {pinnedMode ? "SCROLL TO EXPLORE" : "SELECT A PROJECT"}{" "}
              <span>
                {number(active)} /{" "}
                {String(featuredProjects.length).padStart(2, "0")}
              </span>
            </p>
          </div>
          <div
            id="project-details"
            role="tabpanel"
            aria-labelledby={`project-tab-${project.id}`}
            className="project-details"
            tabIndex={0}
          >
            <div key={project.id} className="project-panel-content">
              <ProjectPreview project={project} />
              <div className="project-information">
                <p className="project-counter">
                  {number(active)}{" "}
                  <span>
                    / {String(featuredProjects.length).padStart(2, "0")}
                  </span>
                </p>
                <h3>{project.title}</h3>
                <p className="project-context">{project.context}</p>
                <p className="project-description">{project.description}</p>
                <div className="project-meta">
                  <div>
                    <span className="project-label">MY ROLE</span>
                    <p>{project.role || "Details coming soon"}</p>
                  </div>
                  <div>
                    <span className="project-label">TECH STACK</span>
                    <div className="tech-tags">
                      {project.stack.length ? (
                        project.stack.map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))
                      ) : (
                        <span>To be added</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="project-actions">
                  <a
                    className="project-primary"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    VIEW PROJECT <span>→</span>
                  </a>
                  <a
                    className="project-secondary"
                    href={project.demo || project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.demo ? "LIVE DEMO" : "GITHUB"} <span>↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="sr-only" role="status" aria-live="polite">
          Project {active + 1} of {featuredProjects.length}: {project.title}
        </p>
      </div>
      <ProjectArchive
        open={archiveOpen}
        onClose={closeArchive}
        onSelect={(item) => {
          closeArchive();
          const index = featuredProjects.findIndex((p) => p.id === item.id);
          if (index >= 0) choose(index);
          else window.open(item.link, "_blank", "noopener,noreferrer");
        }}
      />
    </section>
  );
}

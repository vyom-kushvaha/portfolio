import React from "react";
import "./skills.css";

const groups = [
  ["Languages", [["C", "C", "#397ab1"], ["C++", "C++", "#2474a2"], ["JavaScript", "JS", "#af8619"]]],
  ["Frontend", [["HTML", "5", "#cc5933"], ["CSS", "3", "#396ec0"], ["JavaScript", "JS", "#af8619"]]],
  ["Backend", [["Node.js", "N", "#4c7542"], ["Express.js", "ex", "#38382f"]]],
  ["Data", [["PostgreSQL", "PG", "#397599"], ["SQL", "SQL", "#397599"]]],
  ["Development", [["Git", "git", "#c2563d"], ["GitHub", "GH", "#292b27"], ["Linux", "LX", "#716649"]]],
];
const systems = ["Data Structures", "Object-oriented Programming", "Database Management Systems", "Operating Systems", "Computer Networks", "Cybersecurity Fundamentals"];
const exploring = ["DSA & Problem Solving", "Backend & Systems", "Networking & Security", "Cybersecurity"];
function SketchIcon({ index }) {
  const paths = ["M12 3v6M5 15v-4h14v4M9 2h6v5H9ZM2 16h6v5H2Zm14 0h6v5h-6Z", "m12 2 9 5v10l-9 5-9-5V7Zm-9 5 9 5 9-5m-9 5v10", "M3 6c0-5 18-5 18 0s-18 5-18 0Zm0 0v12c0 5 18 5 18 0V6M3 12c0 5 18 5 18 0", "M2 3h20v14H2Zm6 19h8m-4-5v5", "M9 9h6v6H9Zm3-7v7m0 6v7M2 12h7m6 0h7M5 5l4 4m6 6 4 4m0-14-4 4m-6 6-4 4", "m12 2 9 4v6c0 6-9 10-9 10S3 18 3 12V6Zm-5 9 3 3 7-7"];
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={paths[index % paths.length]} /></svg>;
}
export default function Skills() {
  return <section id="skills" className="skills-section" aria-labelledby="skills-title">
    <div className="skills-layout">
      <header className="skills-intro">
        <p className="skills-eyebrow">SKILLS</p>
        <h2 id="skills-title">Tools.<br />Systems.<br />Curiosity.</h2>
        <svg className="skills-underline" viewBox="0 0 230 20" aria-hidden="true"><path d="M2 14Q115 1 226 5M18 18 181 9" /></svg>
        <p className="skills-summary">What I use. What I understand.<br />What I’m exploring.</p>
        <svg className="skills-star" viewBox="0 0 60 70" fill="none" aria-hidden="true"><path d="M30 2v65M4 35h52M19 23l22 24m0-24L19 47m11-22 3 10-3 10-3-10Z" /></svg>
        <p className="skills-handwritten">Same curiosity.<br /><span>Different paths.</span></p>
      </header>
      <article className="skill-paper skill-paper--tools">
        <span className="skill-number">01</span><h3>Tools.</h3><p className="skill-subtitle">What I use to build.</p>
        {groups.map(([label, items]) => <div className="skill-group" key={label}><h4>{label}</h4><ul className="tool-list">{items.map(([name, short, color]) => <li key={name}><svg viewBox="0 0 44 44" aria-hidden="true" style={{color}}><path d="m22 2 18 10v20L22 42 4 32V12Z" fill="currentColor"/><text x="22" y="27" textAnchor="middle" fill="#fff9ec" fontSize={short.length > 2 ? 12 : 16} fontWeight="600">{short}</text></svg><span>{name}</span></li>)}</ul></div>)}
      </article>
      <article className="skill-paper skill-paper--systems">
        <span className="skill-number">02</span><h3>Systems.</h3><p className="skill-subtitle">What I understand.</p>
        <ul className="concept-list">{systems.map((name,index) => <li key={name}><SketchIcon index={index}/><span>{name}</span></li>)}</ul>
        <p className="paper-note">Beyond syntax—<br />understanding what<br />happens underneath.</p>
      </article>
      <article className="skill-paper skill-paper--curiosity">
        <span className="skill-number">03</span><h3>Curiosity.</h3><p className="skill-subtitle">What I’m exploring.</p>
        <ul className="concept-list">{exploring.map((name,index) => <li key={name}><SketchIcon index={[0,3,4,5][index]}/><span>{name}</span></li>)}</ul>
        <p className="paper-note">Keep exploring.<br />Keep learning.</p>
      </article>
      <nav className="skill-profile-strip" aria-label="Temporary profile links">
        <span className="profile-caption">FIND ME EXPLORING</span>
        {[["GitHub","https://github.com/"],["LeetCode","https://leetcode.com/"],["CodeChef","https://www.codechef.com/"],["LinkedIn","https://www.linkedin.com/"]].map(([name,url]) => <a key={name} href={url} target="_blank" rel="noreferrer" title={`${name} — temporary link`}>{name}<span aria-hidden="true">↗</span></a>)}
      </nav>
    </div>
  </section>;
}

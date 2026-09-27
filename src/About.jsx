import React from "react";
import "./about.css";
import portrait from "./assets/vyom-portrait-editorial.png";

const interests = [
  ["Full-stack development", "From an idea to something you can use. I enjoy bringing interfaces and the systems behind them together.", "code"],
  ["Mathematics", "Finding patterns, following the logic, and asking why things work the way they do.", "math"],
  ["Networking", "Meeting curious people, sharing ideas, and learning from different perspectives.", "people"],
  ["Cybersecurity", "Exploring how systems break—and how thoughtful design can make them stronger.", "shield"],
  ["Technical events", "Building alongside others at hackathons, exchanging ideas, and being part of the community.", "calendar"],
  ["Problem solving", "Taking a complicated question and working towards a simple, meaningful solution.", "bulb"],
];

function InterestIcon({ type }) {
  const paths = {
    code: "m9 7-5 5 5 5m6-10 5 5-5 5m-2-14-2 18",
    math: "M4 7h16M9 7 7 20M16 7v11q0 3 4 1M4 7q1-3 4-3",
    people: "M16 21v-3a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v3Zm-2-14a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm4-3a4 4 0 0 1 0 8m1 3a4 4 0 0 1 3 4v2",
    shield: "M12 3 3 7v5c0 5 9 10 9 10s9-5 9-10V7Zm-5 9 3 3 7-7",
    calendar: "M5 5h14a2 2 0 0 1 2 2v13H3V7a2 2 0 0 1 2-2Zm2-3v6m10-6v6M3 11h18M7 15h1m4 0h1m4 0h1M7 18h1m4 0h1",
    bulb: "M9 18h6m-6 3h6M8 15a7 7 0 1 1 8 0l-1 3H9ZM12 1V0M2 5 0 3m22 2 2-2M1 12H0m24 0h-1",
  };
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={paths[type]} /></svg>;
}

function InterestCard({ item, index }) {
  return (
    <article className={`interest-card interest-card--${item[2]}`}
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse") return;
        const bounds = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty("--light-x", `${event.clientX - bounds.left}px`);
        event.currentTarget.style.setProperty("--light-y", `${event.clientY - bounds.top}px`);
      }}>
      <svg className="card-engraving" viewBox="0 0 360 210" preserveAspectRatio="none" fill="none" aria-hidden="true">
        <path className="engraving-outline" pathLength="1" d="M35 9H321L351 39V176L329 201H17L9 189V34Z" />
        <path d="M36 15h53M15 43v32M345 146v28l-20 21h-39M299 15h20l25 26" />
        <path className="engraving-fold" d="m321 9-2 33 32-3" />
        <circle cx="20" cy="186" r="2" /><path d="M27 186h25m-25 4h15" />
      </svg>
      <span className="card-category" aria-hidden="true">{["BUILD / 01", "THINK / 02", "CONNECT / 03", "PROTECT / 04", "EXPLORE / 05", "SOLVE / 06"][index]}</span>
      <svg className="interest-arrow" viewBox="0 0 100 65" fill="none" aria-hidden="true">
        <path d={index % 2 === 0 ? "M5 10C48 5 20 55 88 46m-12-9 13 9-15 6" : "M7 50C22 9 64 5 88 22m-5-13 6 14-16-1"} />
      </svg>
      <span className="interest-number">{String(index + 1).padStart(2, "0")}</span>
      <div className="interest-icon"><InterestIcon type={item[2]} /></div>
      <svg className="card-scribble" viewBox="0 0 70 22" fill="none" aria-hidden="true"><path d="M3 13Q30 4 66 7M14 18Q39 10 60 12" /></svg>
      <div><h3>{item[0]}</h3><span className="interest-rule" /><p>{item[1]}</p></div>
    </article>
  );
}

export default function About() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="about-inner">
        <header className="about-heading">
          <div><p className="about-eyebrow">A LITTLE ABOUT ME</p><h2 id="about-title">Many interests.<br /><em>One curious mind.</em></h2></div>
          <p className="about-note">Always learning.<br />Always building.<span aria-hidden="true">↙</span></p>
        </header>
        <div className="about-map">
          <svg className="about-connections" viewBox="0 0 1200 600" preserveAspectRatio="none" fill="none" aria-hidden="true">
            <g stroke="#d5b5a4" strokeWidth="1.2" opacity=".75">
              <path d="M330 96C404 96 393 152 443 159M330 300C395 300 391 271 412 270M330 504C402 504 393 408 449 411M870 96C796 96 807 152 757 159M870 300C805 300 809 271 788 270M870 504C798 504 807 408 751 411" />
            </g>
            <g fill="#ff897d">{[[330,96],[443,159],[330,300],[412,270],[330,504],[449,411],[870,96],[757,159],[870,300],[788,270],[870,504],[751,411]].map(([x,y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="4" />)}</g>
          </svg>
          <div className="interest-column interest-column--left">
            {interests.slice(0, 3).map((item, index) => <InterestCard key={item[2]} item={item} index={index} />)}
          </div>
          <div className="about-identity">
            <div className="identity-portrait" aria-hidden="true">
              <span className="photo-tape" />
              <img src={portrait} alt="" width="1024" height="1536" />
              <span className="portrait-label">Curious Builder ☺</span>
            </div>
            <p className="identity-title">Curious<span>Builder</span></p>
            <p className="identity-name">VYOM KUSHVAHA</p>
            <p className="identity-education">B.Tech IT · GCET, CVM University · 2025–2029</p>
            <svg className="education-sketch" viewBox="0 0 180 40" fill="none" aria-hidden="true">
              <path d="M9 22q26-5 52 0m58 0q25-5 52 0M71 15l19-9 19 9-19 9-19-9Zm7 5v9q12 8 24 0v-9m7-5v15m-2 0h4" />
              <path d="m88 36 4-1" />
            </svg>
          </div>
          <div className="interest-column interest-column--right">
            {interests.slice(3).map((item, index) => <InterestCard key={item[2]} item={item} index={index + 3} />)}
          </div>
        </div>
        <footer className="about-footer">
          <span>FULL-STACK DEVELOPER</span><i aria-hidden="true" /><span>CURIOUS BY NATURE</span><i aria-hidden="true" /><span>ALWAYS A WORK IN PROGRESS</span>
        </footer>
        <p className="about-signoff">Different questions. Same curiosity.</p>
      </div>
    </section>
  );
}

import Reveal from "./Reveal";
import Counter from "./Counter";
import { profile, stats } from "../data";

const details = [
  { label: "Based in", value: profile.location },
  { label: "Born", value: profile.dob },
  { label: "Languages", value: profile.languages.join(" · ") },
  { label: "Nationality", value: profile.nationality },
  { label: "Focus", value: "MERN stack / interfaces" },
  { label: "Status", value: profile.availability },
];

export default function About() {
  return (
    <section id="about" className="about section" data-nav="paper">
      <div className="container">
        <div className="about-grid">
          <Reveal className="about-figure">
            <div className="about-frame">
              <span className="frame-bg" aria-hidden="true" />
              <img
                src={profile.portrait}
                alt={`${profile.name} portrait`}
                className="frame-dots"
              />
              <img
                src={profile.photoCut}
                alt=""
                aria-hidden="true"
                className="frame-real"
              />
              <div className="about-stamp">
                About
                <br />
                Me
                <small>Est. 2008 · PK</small>
              </div>
            </div>
            <div className="figure-caption">
              <span>Fig. 01 — {profile.name}</span>
              <span>Pasni, Balochistan</span>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="about-copy">
            <span className="eyebrow">02 — About</span>
            <h2 className="display about-title">
              A developer who
              <br />
              cares about the <em>details</em>
            </h2>

            <p className="about-lead">{profile.intro}</p>
            <p className="about-body">{profile.about}</p>

            <div className="detail-grid">
              {details.map((d) => (
                <div className="detail" key={d.label}>
                  <span>{d.label}</span>
                  <strong>{d.value}</strong>
                </div>
              ))}
            </div>

            <div className="about-actions">
              <a className="btn btn--ink" href="#contact">
                <span>Work with me</span>
              </a>
              <a
                className="arrow-link"
                href="/cv/ahmad-rehan-cv.html"
                target="_blank"
                rel="noopener"
              >
                Download CV ↗
              </a>
            </div>
          </Reveal>
        </div>

        <div className="stats-strip">
          {stats.map((s, i) => (
            <Reveal className="stat-cell" key={s.label} delay={i * 0.07}>
              <b>
                <Counter to={s.value} suffix={s.suffix} />
              </b>
              <span>{s.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

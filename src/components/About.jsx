import { FaDownload } from "react-icons/fa";
import Reveal from "./Reveal";
import Counter from "./Counter";
import { profile, stats, personalDetails } from "../data";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <Reveal>
          <div className="about-photo">
            <img src={profile.photo} alt={profile.name} loading="lazy" />
          </div>
        </Reveal>

        <Reveal delay={0.15} className="about-content">
          <div className="section-head align-left" style={{ marginBottom: "1.5rem" }}>
            <h2 className="section-title">
              <span className="thin">About</span> <strong>Me</strong>
            </h2>
          </div>

          <p>
            I am a passionate <strong>Full Stack Web Developer</strong>{" "}
            dedicated to building modern, responsive, and high-performance web
            applications. I enjoy transforming creative ideas into functional
            digital experiences that are both visually appealing and
            user-friendly.
          </p>
          <p>{profile.intro}</p>

          <div className="about-details">
            {personalDetails.map((d) => (
              <div className="about-detail" key={d.label}>
                <strong>{d.label}:</strong>
                <span>{d.value}</span>
              </div>
            ))}
          </div>

          <div className="about-stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <Counter to={s.value} suffix={s.suffix} />
                <span>{s.label}</span>
              </div>
            ))}
          </div>

          <div className="about-buttons">
            <a href="#contact" className="btn btn-primary">
              Hire Me
            </a>
            <a
              href="/cv/ahmad-rehan-cv.html"
              target="_blank"
              rel="noopener"
              className="btn btn-ghost"
            >
              <FaDownload /> Download CV
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

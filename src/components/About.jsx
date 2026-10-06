import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaBriefcase,
  FaProjectDiagram,
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaLanguage,
  FaFlag,
  FaMusic,
  FaEnvelope,
} from "react-icons/fa";
import Reveal from "./Reveal";
import Tilt from "./Tilt";

const details = [
  { icon: <FaBirthdayCake />, label: "Date of Birth", value: "20 October 2008" },
  {
    icon: <FaLanguage />,
    label: "Spoken Languages",
    value: "English · Urdu · Balochi · Brahvi",
  },
  { icon: <FaFlag />, label: "Nationality", value: "Pakistani" },
  { icon: <FaMusic />, label: "Interests", value: "Music · Reading · Traveling" },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "Pasni, Balochistan, Pakistan",
  },
  { icon: <FaEnvelope />, label: "Email", value: "ahmadrehan3838@gmail.com" },
];

const infoCards = [
  {
    icon: <FaBriefcase />,
    title: "Experience",
    text: "Frontend & Full Stack Development with React, Node.js and Firebase.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Projects",
    text: "Portfolios, AI apps, business websites & full-stack clones.",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    text: "Pakistan — available for remote work worldwide.",
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-tag">Who I Am</span>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-sub">
            Get to know the person behind the code — my background, my skills and
            what drives me.
          </p>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-left" delay={0.1}>
            <h3 className="block-title">Personal Details</h3>
            <p className="about-text">
              I am a passionate <strong>Full Stack Web Developer</strong>{" "}
              dedicated to building modern, responsive, and high-performance web
              applications. I enjoy transforming creative ideas into functional
              digital experiences that are both visually appealing and
              user-friendly.
            </p>

            <div className="social-row about-socials">
              <a href="#" aria-label="GitHub" title="GitHub">
                <FaGithub />
              </a>
              <a href="#" aria-label="LinkedIn" title="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="#" aria-label="Instagram" title="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Facebook" title="Facebook">
                <FaFacebookF />
              </a>
            </div>

            <div className="details-grid">
              {details.map((d) => (
                <div className="detail-row" key={d.label}>
                  <span className="detail-icon">{d.icon}</span>
                  <div>
                    <span className="detail-label">{d.label}</span>
                    <span className="detail-value">{d.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="about-right">
            {infoCards.map((c, i) => (
              <Reveal key={c.title} delay={0.15 + i * 0.12}>
                <Tilt className="info-card" max={7}>
                  <span className="info-icon">{c.icon}</span>
                  <div>
                    <h4>{c.title}</h4>
                    <p>{c.text}</p>
                  </div>
                </Tilt>
              </Reveal>
            ))}

            <Reveal delay={0.5}>
              <div className="quote-card">
                <span className="quote-mark">&ldquo;</span>
                <p>
                  Great software is built where <strong>creativity</strong> meets{" "}
                  <strong>clean code</strong> — that&apos;s exactly where I love
                  to work.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

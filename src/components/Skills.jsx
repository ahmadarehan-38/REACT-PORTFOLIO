import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { skills, tools } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal className="section-head">
          <h2 className="section-title">
            <span className="thin">Skills &amp;</span>{" "}
            <strong>Technologies</strong>
          </h2>
          <p className="section-sub">
            The technologies I use to turn ideas into fast, reliable and
            beautiful web applications.
          </p>
        </Reveal>

        <div className="skills-grid">
          <Reveal className="skills-bars" delay={0.1}>
            <h3 className="block-title">Core Proficiency</h3>
            {skills.map((s, i) => (
              <div className="skill" key={s.name}>
                <div className="skill-meta">
                  <span>{s.name}</span>
                  <span className="skill-pct">{s.level}%</span>
                </div>
                <div className="skill-track">
                  <motion.span
                    className="skill-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 1.1,
                      delay: 0.1 + i * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal className="skills-side" delay={0.2}>
            <div className="tools-card">
              <h3>Technologies I work with</h3>
              <div className="tools-grid">
                {tools.map((t) => (
                  <div className="tool-chip" key={t.name}>
                    <span className="tool-icon" style={{ color: t.color }}>
                      {t.icon}
                    </span>
                    <span>{t.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="learning-card">
              <span className="learning-badge">
                <span className="pulse-dot" /> Currently Learning
              </span>
              <h4>Advanced MERN Stack &amp; Next.js</h4>
              <p>
                Deepening my knowledge of full-stack architecture, REST APIs,
                authentication and deploying production applications.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

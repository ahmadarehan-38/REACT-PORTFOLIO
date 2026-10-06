import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { skills, tools } from "../data";

export default function Skills() {
  return (
    <>
      <PageHero
        tag="My Toolbox"
        title="Skills & Technologies"
        subtitle="The technologies I use to turn ideas into fast, reliable and beautiful web applications — from pixel-perfect interfaces to production backends."
      />

      <section className="section">
        <div className="container skills-grid">
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
                      delay: 0.15 + i * 0.08,
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

        {/* Approach strip */}
        <div className="container approach-strip">
          {[
            { n: "01", t: "Plan", d: "Understand goals, users and scope before writing a line of code." },
            { n: "02", t: "Design", d: "Clean, modern interfaces that feel intuitive on every device." },
            { n: "03", t: "Build", d: "Modular, maintainable code with React, Node.js and modern APIs." },
            { n: "04", t: "Ship", d: "Optimize, deploy and iterate based on real feedback." },
          ].map((a, i) => (
            <Reveal key={a.n} delay={i * 0.1} className="approach-card">
              <span className="approach-num">{a.n}</span>
              <h4>{a.t}</h4>
              <p>{a.d}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="center-cta" delay={0.1}>
          <Link to="/projects" className="arrow-link">
            See these skills in action <span className="arrow-link-icon"><FaArrowRight /></span>
          </Link>
        </Reveal>
      </section>
    </>
  );
}

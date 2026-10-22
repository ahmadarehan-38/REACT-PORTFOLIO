import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { archive, journey, skills, tools } from "../data";

export default function Archive() {
  return (
    <section id="archive" className="archive section" data-nav="paper">
      <span className="ghost-word" aria-hidden="true">
        Archive
      </span>

      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">03 — Archive</span>
            <h2 className="display work-title" style={{ fontSize: "clamp(2.2rem, 7vw, 5.4rem)" }}>
              Where I&apos;ve
              <br />
              <span className="outline-text">Been</span>
            </h2>
          </div>
          <p style={{ maxWidth: "42ch", fontSize: 14, lineHeight: 1.7, opacity: 0.7 }}>
            A record of the rooms I&apos;ve studied in, the teams I&apos;ve built
            with and the projects that taught me something. Experience and
            education, in one ledger.
          </p>
        </div>

        <div className="archive-rows">
          {archive.map((item, i) => (
            <Reveal key={`${item.kind}-${item.title}`} delay={i * 0.05} y={18}>
              <a className="archive-row" href="#contact">
                <span className="archive-year">{item.year}</span>
                <div>
                  <h3 className="archive-title">{item.title}</h3>
                  <p className="archive-text">{item.text}</p>
                </div>
                <div className="arc-tags">
                  {item.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <span className="arc-kind">{item.kind}</span>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Field notes */}
        <div className="section-head" style={{ marginTop: "clamp(56px, 8vw, 104px)" }}>
          <div>
            <span className="eyebrow">Field notes</span>
            <h3
              className="display"
              style={{ fontSize: "clamp(1.5rem, 3.4vw, 2.6rem)", marginTop: 14 }}
            >
              How I got here
            </h3>
          </div>
          <span className="mono" style={{ opacity: 0.5 }}>
            2022 — 2026
          </span>
        </div>

        <div className="notes">
          {journey.map((n, i) => (
            <Reveal key={n.step} delay={i * 0.06} className="note">
              <span className="note-step">({n.step})</span>
              <h3>{n.title}</h3>
              <p>{n.text}</p>
            </Reveal>
          ))}
        </div>

        {/* Toolkit */}
        <div className="skills" id="skills" style={{ padding: 0, marginTop: "clamp(56px, 8vw, 104px)" }}>
          <div className="section-head">
            <div>
              <span className="eyebrow">Toolkit</span>
              <h3
                className="display"
                style={{ fontSize: "clamp(1.5rem, 3.4vw, 2.6rem)", marginTop: 14 }}
              >
                What I build with
              </h3>
            </div>
          </div>

          <div className="skills-grid">
            <div>
              {skills.map((s, i) => (
                <div className="skill-row" key={s.name}>
                  <span>{s.name}</span>
                  <b>{s.level}%</b>
                  <span className="skill-bar">
                    <motion.i
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: s.level / 100 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{
                        duration: 1.1,
                        delay: 0.08 * i,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      style={{ transformOrigin: "left" }}
                    />
                  </span>
                </div>
              ))}
            </div>

            <div>
              <p style={{ fontSize: 14, lineHeight: 1.75, opacity: 0.72 }}>
                Fifteen tools, one goal: shipping interfaces that load fast and
                feel considered. I pick the smallest stack that solves the
                problem, then learn the next thing.
              </p>
              <div className="tool-cloud">
                {tools.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

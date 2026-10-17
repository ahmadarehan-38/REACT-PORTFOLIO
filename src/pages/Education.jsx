import { Link } from "react-router-dom";
import { FaGraduationCap, FaBriefcase, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { education, experience } from "../data";

function TimelineColumn({ icon, title, items, accent }) {
  return (
    <div className="resume-column">
      <Reveal className="column-title">
        <span className="column-icon" style={{ color: accent }}>
          {icon}
        </span>
        <h3>{title}</h3>
      </Reveal>

      <div className="timeline">
        <motion.span
          className="timeline-line"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
        {items.map((item, i) => (
          <Reveal key={item.title} delay={0.15 * i} className="timeline-item">
            <span className="timeline-dot" style={{ borderColor: accent }} />
            <div className="timeline-content">
              <span className="year">{item.year}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
              {item.tags.length > 0 && (
                <div className="skills">
                  {item.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <>
      <PageHero
        tag="My Journey"
        title="Education & Experience"
        subtitle="My academic background and practical experience that have shaped me into a passionate Full Stack Web Developer."
      />

      <section className="section">
        <div className="container resume-grid">
          <TimelineColumn
            icon={<FaGraduationCap />}
            title="Education"
            items={education}
            accent="var(--timeline-1)"
          />
          <TimelineColumn
            icon={<FaBriefcase />}
            title="Experience"
            items={experience}
            accent="var(--timeline-2)"
          />
        </div>

        <div className="container">
          <Reveal>
            <div className="cta-banner">
              <div className="cta-blob c1" />
              <div className="cta-blob c2" />
              <h2>I&apos;m always learning — and ready to contribute.</h2>
              <p>
                Looking for a motivated developer for an internship, freelance work
                or your next project?
              </p>
              <div className="cta-actions">
                <Link to="/contact" className="btn btn-primary">
                  Get In Touch <FaArrowRight />
                </Link>
                <a
                  href="/cv/ahmad-rehan-cv.html"
                  target="_blank"
                  rel="noopener"
                  className="btn btn-ghost cta-ghost"
                >
                  Download Full CV
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

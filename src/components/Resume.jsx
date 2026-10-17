import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import Reveal from "./Reveal";
import { education, experience } from "../data";

function ResumeColumn({ icon, title, items, accent }) {
  return (
    <div className="resume-column">
      <Reveal className="column-title">
        <span className="column-icon" style={{ color: accent }}>
          {icon}
        </span>
        <h3>{title}</h3>
      </Reveal>

      <div className="resume-list">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={0.12 * i}>
            <div className="resume-card">
              <span className="resume-date">{item.year}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
              {item.tags.length > 0 && (
                <div className="resume-tags">
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

export default function Resume() {
  return (
    <section id="resume" className="section section-alt">
      <div className="container">
        <Reveal className="section-head">
          <h2 className="section-title">
            <span className="thin">My</span> <strong>Resume</strong>
          </h2>
          <p className="section-sub">
            My academic background and practical experience that have shaped me
            into a passionate Full Stack Web Developer.
          </p>
        </Reveal>

        <div className="resume-grid">
          <ResumeColumn
            icon={<FaGraduationCap />}
            title="Education"
            items={education}
            accent="var(--timeline-1)"
          />
          <ResumeColumn
            icon={<FaBriefcase />}
            title="Experience"
            items={experience}
            accent="var(--timeline-2)"
          />
        </div>
      </div>
    </section>
  );
}

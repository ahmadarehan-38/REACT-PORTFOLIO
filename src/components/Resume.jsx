import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const education = [
  {
    year: "2025 — Present",
    title: "SMIT — Full Stack Web Development",
    text: "Learning MERN Stack, React.js, JavaScript, Firebase, Node.js, Express, MongoDB and modern web development.",
    tags: ["MERN", "React", "Firebase"],
  },
  {
    year: "2024 — 2026",
    title: "Intermediate — Computer Science",
    text: "Completing Intermediate with Computer Science while building strong programming fundamentals.",
    tags: ["Computer Science"],
  },
  {
    year: "2022 — 2024",
    title: "Matriculation",
    text: "Completed Secondary Education with excellent academic performance.",
    tags: [],
  },
];

const experience = [
  {
    year: "2025 — Present",
    title: "Frontend Developer",
    text: "Developing responsive React applications and modern UI/UX designs with HTML, CSS, JavaScript and React.",
    tags: ["React", "JavaScript", "CSS", "HTML"],
  },
  {
    year: "2025 — Present",
    title: "Freelance Projects",
    text: "Built portfolio websites, landing pages and CRUD applications using React and Firebase.",
    tags: ["Firebase", "React", "Node.js"],
  },
];

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

export default function Resume() {
  return (
    <section id="resume" className="section section-alt">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-tag">My Journey</span>
          <h2 className="section-title">
            Education &amp; <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-sub">
            My academic background and practical experience that have shaped me
            into a passionate Full Stack Web Developer.
          </p>
        </Reveal>

        <div className="resume-grid">
          <TimelineColumn
            icon={<FaGraduationCap />}
            title="Education"
            items={education}
            accent="#7c5cff"
          />
          <TimelineColumn
            icon={<FaBriefcase />}
            title="Experience"
            items={experience}
            accent="#00d4ff"
          />
        </div>
      </div>
    </section>
  );
}

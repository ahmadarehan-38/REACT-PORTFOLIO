import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiGithub,
  SiVite,
  SiNpm,
  SiFigma,
} from "react-icons/si";
import { FaCss3Alt, FaGraduationCap } from "react-icons/fa";
import Reveal from "./Reveal";

const skills = [
  { name: "React.js", level: 85 },
  { name: "JavaScript (ES6+)", level: 82 },
  { name: "HTML5", level: 92 },
  { name: "CSS3 & Responsive Design", level: 88 },
  { name: "Node.js & Express", level: 72 },
  { name: "MongoDB", level: 70 },
  { name: "Firebase", level: 78 },
  { name: "Git & GitHub", level: 74 },
];

const tools = [
  { icon: <SiReact />, name: "React" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <SiHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <SiGit />, name: "Git" },
  { icon: <SiGithub />, name: "GitHub" },
  { icon: <SiVite />, name: "Vite" },
  { icon: <SiNpm />, name: "npm" },
  { icon: <SiFigma />, name: "Figma" },
  { icon: <FaGraduationCap />, name: "Always Learning" },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-tag">My Toolbox</span>
          <h2 className="section-title">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-sub">
            The technologies I use to turn ideas into fast, reliable and
            beautiful web applications.
          </p>
        </Reveal>

        <div className="skills-grid">
          <Reveal className="skills-bars" delay={0.1}>
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
                    <span className="tool-icon">{t.icon}</span>
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

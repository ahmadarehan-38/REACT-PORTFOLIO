import { useRef } from "react";
import { motion } from "framer-motion";
import {
  FaArrowDown,
  FaCss3Alt,
  FaDownload,
} from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiJavascript,
} from "react-icons/si";

import Counter from "./Counter";
import { socials } from "../data";

const line1 = ["Turning", "Ideas", "Into"];
const line2 = ["Powerful", "Digital", "Solutions"];

const wordVariant = {
  hidden: { opacity: 0, y: 60, rotateX: -60 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { delay: 0.15 + i * 0.09, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

const chips = [
  { icon: <SiReact />, label: "React", pos: "chip-1", color: "#61dafb" },
  { icon: <SiNodedotjs />, label: "Node.js", pos: "chip-2", color: "#7ccf29" },
  { icon: <SiMongodb />, label: "MongoDB", pos: "chip-3", color: "#4fbd54" },
  { icon: <SiFirebase />, label: "Firebase", pos: "chip-4", color: "#ffca28" },
  { icon: <SiJavascript />, label: "JavaScript", pos: "chip-5", color: "#f7df1e" },
  { icon: <FaCss3Alt />, label: "CSS3", pos: "chip-6", color: "#38bdf8" },
];

export default function Hero() {
  const sceneRef = useRef(null);

  const onMouseMove = (e) => {
    const scene = sceneRef.current;
    if (!scene) return;
    const r = scene.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    scene.style.transform = `rotateY(${px * 16}deg) rotateX(${-py * 16}deg)`;
  };

  const onMouseLeave = () => {
    if (sceneRef.current)
      sceneRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
  };

  return (
    <section id="home" className="hero section">
      <div className="bg-grid" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-left">
          <motion.span
            className="hero-tag"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="pulse-dot" />
            Available for Freelance &amp; Internship Opportunities
          </motion.span>

          <h1 className="hero-title">
            <span className="title-line">
              {line1.map((w, i) => (
                <motion.span
                  key={w}
                  className="title-word"
                  custom={i}
                  variants={wordVariant}
                  initial="hidden"
                  animate="show"
                >
                  {w}
                </motion.span>
              ))}
            </span>
            <span className="title-line">
              {line2.map((w, i) => (
                <motion.span
                  key={w}
                  className="title-word gradient-text"
                  custom={i + 3}
                  variants={wordVariant}
                  initial="hidden"
                  animate="show"
                >
                  {w}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            I&apos;m <strong>Ahmad Rehan</strong> — a Full Stack Web Developer
            crafting modern, high-performance web applications with clean code,
            stunning interfaces and seamless user experiences that leave a
            lasting impact.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7 }}
          >
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
            <a href="#projects" className="btn btn-ghost">
              View My Work
            </a>
            <a href="/cv/ahmad-rehan-cv.html" target="_blank" rel="noopener" className="btn btn-ghost cv-btn">
              <FaDownload /> Download CV
            </a>
          </motion.div>

          <motion.div
            className="hero-social"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
          >
            <span className="social-label">Find me on</span>
            <div className="social-row">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  title={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div>
              <Counter to={1} suffix="+" />
              <span>Years Coding</span>
            </div>
            <div>
              <Counter to={10} suffix="+" />
              <span>Technologies</span>
            </div>
            <div>
              <Counter to={5} suffix="+" />
              <span>Projects Shipped</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-visual" onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
            <div className="scene" ref={sceneRef}>
              {/* orbit rings */}
              <div className="ring ring-1">
                <span className="ring-dot" style={{ background: "#c9a86a" }} />
              </div>
              <div className="ring ring-2">
                <span className="ring-dot" style={{ background: "#a62142" }} />
              </div>
              <div className="ring ring-3">
                <span className="ring-dot" style={{ background: "#e9cd8f" }} />
              </div>

              {/* center card */}
              <div className="orbit-card">
                <div className="orbit-glow" />
                <div className="orbit-avatar">
                  <span>AR</span>
                </div>
                <h3>Ahmad Rehan</h3>
                <p>Full Stack Developer</p>
                <div className="orbit-badge">
                  <span className="pulse-dot" /> MERN · React · Firebase
                </div>
              </div>

              {/* floating tech chips */}
              {chips.map((c) => (
                <div
                  key={c.label}
                  className={`float-chip ${c.pos}`}
                  style={{ "--chip-color": c.color }}
                >
                  <span className="chip-icon">{c.icon}</span>
                  <span className="chip-label">{c.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <a href="#about" className="scroll-hint" aria-label="Scroll down">
        <span className="mouse">
          <span className="wheel" />
        </span>
        <FaArrowDown className="scroll-arrow" />
      </a>
    </section>
  );
}

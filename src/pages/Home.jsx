import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowDown, FaDownload } from "react-icons/fa";
import PhotoFrame from "../components/PhotoFrame";
import Marquee from "../components/Marquee";
import Counter from "../components/Counter";
import Reveal from "../components/Reveal";
import Tilt from "../components/Tilt";
import ProjectCard from "../components/ProjectCard";
import {
  profile,
  socials,
  stats,
  services,
  projects,
  personalDetails,
} from "../data";

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

function HomeHero() {
  return (
    <section id="top" className="hero section">
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
            I&apos;m <strong>{profile.name}</strong> — a {profile.role}.{" "}
            {profile.intro}
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7 }}
          >
            <Link to="/contact" className="btn btn-primary">
              Get In Touch
            </Link>
            <Link to="/projects" className="btn btn-ghost">
              View My Work
            </Link>
            <a
              href="/cv/ahmad-rehan-cv.html"
              target="_blank"
              rel="noopener"
              className="btn btn-ghost cv-btn"
            >
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
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} title={s.label}>
                  {s.icon}
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
            {stats.map((s) => (
              <div key={s.label}>
                <Counter to={s.value} suffix={s.suffix} />
                <span>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <PhotoFrame />
        </motion.div>
      </div>

      <motion.a
        href="#home-teasers"
        className="scroll-hint"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("home-teasers")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="mouse">
          <span className="wheel" />
        </span>
        <FaArrowDown className="scroll-arrow" />
      </motion.a>
    </section>
  );
}

function ArrowLink({ to, children }) {
  return (
    <Link to={to} className="arrow-link">
      {children}
      <span className="arrow-link-icon">
        <FaArrowRight />
      </span>
    </Link>
  );
}

export default function Home() {
  return (
    <>
      <HomeHero />
      <Marquee />

      {/* ---- About teaser ---- */}
      <section id="home-teasers" className="section teaser-section">
        <div className="container teaser-grid">
          <Reveal>
            <div className="teaser-photo">
              <img src={profile.photo} alt={profile.name} />
              <span className="teaser-ring" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="teaser-content">
              <span className="section-tag">Who I Am</span>
              <h2 className="section-title" style={{ textAlign: "left" }}>
                A developer who turns{" "}
                <span className="gradient-text">ideas into reality</span>
              </h2>
              <p className="section-sub" style={{ textAlign: "left", marginBottom: "1.2rem" }}>
                {profile.about}
              </p>
              <div className="teaser-details">
                {personalDetails.slice(3).map((d) => (
                  <div className="teaser-detail" key={d.label}>
                    <span className="detail-icon">{d.icon}</span>
                    <div>
                      <span className="detail-label">{d.label}</span>
                      <span className="detail-value">{d.value}</span>
                    </div>
                  </div>
                ))}
              </div>
              <ArrowLink to="/about">More about me</ArrowLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- Services ---- */}
      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-head">
            <span className="section-tag">What I Do</span>
            <h2 className="section-title">
              My <span className="gradient-text">Services</span>
            </h2>
            <p className="section-sub">
              Modern web development solutions focused on performance,
              responsiveness and user experience.
            </p>
          </Reveal>

          <div className="services-grid">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={0.08 * i}>
                <Tilt className="service-card" max={10}>
                  <span className="service-icon">{s.icon}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <span className="service-number">0{i + 1}</span>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Projects preview ---- */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="section-tag">My Work</span>
            <h2 className="section-title">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-sub">
              Live web projects built with React and the MERN stack, plus
              Pasni Fish, an offline desktop dashboard made with React and Electron.
            </p>
          </Reveal>

          <div className="projects-grid">
            {projects.map((p, i) => (
              <Reveal key={p.key} delay={0.1 * i}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>

          <Reveal className="center-cta">
            <ArrowLink to="/projects">View all projects</ArrowLink>
          </Reveal>
        </div>
      </section>

      {/* ---- CTA banner ---- */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="cta-banner">
              <div className="cta-blob c1" />
              <div className="cta-blob c2" />
              <h2>Have a project in mind?</h2>
              <p>
                Let&apos;s collaborate and build something fast, beautiful and
                functional together.
              </p>
              <div className="cta-actions">
                <Link to="/contact" className="btn btn-primary">
                  Start a Conversation <FaArrowRight />
                </Link>
                <Link to="/skills" className="btn btn-ghost cta-ghost">
                  Explore my skills
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

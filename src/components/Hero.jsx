import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { profile, socials } from "../data";

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const [firstName, ...rest] = profile.name.split(" ");

  return (
    <section id="home" className="hero">
      <img
        className="hero-bg"
        src={profile.photo}
        alt=""
        aria-hidden="true"
      />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="container hero-content">
        <motion.span className="hero-pill" {...fadeUp(0.1)}>
          <span className="pulse-dot" />
          Available for Freelance &amp; Internship Opportunities
        </motion.span>

        <motion.span className="hero-hello" {...fadeUp(0.25)}>
          Hello, I&apos;m
        </motion.span>

        <motion.h1 className="hero-name" {...fadeUp(0.4)}>
          {firstName} <span className="accent">{rest.join(" ")}</span>
        </motion.h1>

        <motion.p className="hero-role" {...fadeUp(0.55)}>
          {profile.role}
        </motion.p>

        <motion.p className="hero-tagline" {...fadeUp(0.7)}>
          {profile.tagline}. {profile.intro}
        </motion.p>

        <motion.div className="hero-buttons" {...fadeUp(0.85)}>
          <a href="#contact" className="btn btn-primary">
            Hire Me
          </a>
          <a href="#portfolio" className="btn btn-ghost-light">
            View My Work
          </a>
          <a
            href="/cv/ahmad-rehan-cv.html"
            target="_blank"
            rel="noopener"
            className="btn btn-ghost-light"
          >
            <FaDownload /> Download CV
          </a>
        </motion.div>

        <motion.div className="hero-social" {...fadeUp(1)}>
          <div className="social-row on-dark">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                title={s.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <a href="#portfolio" className="scroll-hint" aria-label="Scroll down">
        <span className="mouse">
          <span className="wheel" />
        </span>
        Scroll
      </a>
    </section>
  );
}

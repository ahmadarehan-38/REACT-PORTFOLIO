import { motion } from "framer-motion";
import { profile } from "../data";
import Marquee from "./Marquee";

const line = {
  hidden: {},
  show: { transition: { staggerChildren: 0.075, delayChildren: 0.15 } },
};

const word = {
  hidden: { y: "115%" },
  show: {
    y: 0,
    transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
  },
};

function Line({ children, className = "" }) {
  return (
    <span className={`line ${className}`}>
      <motion.span
        className="reveal-line"
        variants={line}
        initial="hidden"
        animate="show"
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="top" className="hero" data-nav="ink">
      <div className="hero-bg" aria-hidden="true" />

      <div className="hero-topbar">
        <div className="tags">
          <span>Portfolio — Vol. 01</span>
          <span>Pasni, Pakistan</span>
          <span>GMT +05:00</span>
        </div>
        <span>{profile.role}</span>
        <span>© 2026</span>
      </div>

      <div className="hero-stage">
        <div className="hero-corner tl">
          <strong>Est. 2022</strong>
          Self-taught, still curious
        </div>
        <div className="hero-corner tr">
          <strong>Currently</strong>
          Building for the web
          <br />
          Available for work
        </div>
        <div className="hero-corner bl">
          <strong>Stack</strong>
          React · Node · Express
          <br />
          MongoDB · Firebase
        </div>
        <div className="hero-corner br">
          <strong>Scroll</strong>
          To view the archive
        </div>

        <motion.p
          className="hero-kicker"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.9 }}
        >
          Ahmad Rehan — Full Stack Web Developer
        </motion.p>

        <h1 className="hero-title">
          <Line>
            <motion.span className="word" variants={word}>
              EXPLORE&nbsp;
            </motion.span>
            <motion.span className="word" variants={word}>
              MY
            </motion.span>
          </Line>

          <Line className="line--outline">
            <motion.span className="word" variants={word}>
              PORTFOLIO
            </motion.span>
          </Line>
        </h1>

        <motion.div
          className="hero-portrait"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.55, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={profile.portrait} alt={`${profile.name} — dithered portrait`} />
        </motion.div>
      </div>

      <a className="hero-scroll" href="#about">
        <span className="mouse" aria-hidden="true">
          <span className="wheel" />
        </span>
        Scroll to explore
      </a>

      <div className="hero-ticker">
        <Marquee
          items={[
            "Full Stack Developer",
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Firebase",
            "Open to work",
            "Design minded",
          ]}
        />
      </div>
    </section>
  );
}

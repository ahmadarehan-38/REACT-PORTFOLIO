import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaBriefcase,
  FaProjectDiagram,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Tilt from "../components/Tilt";
import { profile, socials, personalDetails, journey } from "../data";

const infoCards = [
  {
    icon: <FaBriefcase />,
    title: "Experience",
    text: "Frontend & Full Stack Development with React, Node.js and Firebase.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Projects",
    text: "Portfolios, AI apps, business websites & full-stack clones.",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    text: "Pakistan — available for remote work worldwide.",
  },
];

function StickyPhoto() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.96]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-4, 4]);

  return (
    <div className="sticky-photo-wrap" ref={ref}>
      <motion.div className="sticky-photo" style={{ y, scale, rotate }}>
        <div className="teaser-photo about-sticky">
          <img src={profile.photo} alt={profile.name} />
          <span className="teaser-ring" />
        </div>
        <div className="quote-card about-quote">
          <span className="quote-mark">&ldquo;</span>
          <p>
            Great software is built where <strong>creativity</strong> meets{" "}
            <strong>clean code</strong> — that&apos;s exactly where I love to
            work.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function About() {
  return (
    <>
      <PageHero
        tag="Who I Am"
        title="About Me"
        subtitle="Get to know the person behind the code — my background, my journey and what drives me every day."
      />

      {/* Intro + details */}
      <section className="section">
        <div className="container about-grid">
          <Reveal className="about-left">
            <h3 className="block-title">Personal Details</h3>
            <p className="about-text">
              {profile.about}
            </p>

            <div className="social-row about-socials">
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} title={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>

            <div className="details-grid">
              {personalDetails.map((d) => (
                <div className="detail-row" key={d.label}>
                  <span className="detail-icon">{d.icon}</span>
                  <div>
                    <span className="detail-label">{d.label}</span>
                    <span className="detail-value">{d.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="about-right">
            {infoCards.map((c, i) => (
              <Reveal key={c.title} delay={0.15 + i * 0.12}>
                <Tilt className="info-card" max={7}>
                  <span className="info-icon">{c.icon}</span>
                  <div>
                    <h4>{c.title}</h4>
                    <p>{c.text}</p>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky scroll journey */}
      <section className="section section-alt journey-section">
        <div className="container">
          <Reveal className="section-head">
            <span className="section-tag">My Journey</span>
            <h2 className="section-title">
              From first <span className="gradient-text">&lt;h1&gt;</span> to full
              stack
            </h2>
          </Reveal>

          <div className="journey-grid">
            <StickyPhoto />

            <div className="journey-steps">
              {journey.map((item, i) => (
                <Reveal key={item.step} delay={0.05} className="journey-step">
                  <div className="journey-emoji">{item.emoji}</div>
                  <div className="journey-card">
                    <span className="journey-num">{item.step}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="cta-banner">
              <div className="cta-blob c1" />
              <div className="cta-blob c2" />
              <h2>Want to know more about my work?</h2>
              <p>Check out the technologies I use and the projects I&apos;ve shipped.</p>
              <div className="cta-actions">
                <Link to="/skills" className="btn btn-primary">
                  My Skills <FaArrowRight />
                </Link>
                <Link to="/projects" className="btn btn-ghost cta-ghost">
                  See Projects
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

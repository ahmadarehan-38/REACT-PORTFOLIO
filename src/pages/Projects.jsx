import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";

const filters = ["All", "HTML · CSS · JS", "Firebase"];

export default function Projects() {
  const [active, setActive] = useState("All");

  const visible =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        tag="My Work"
        title="Featured Projects"
        subtitle="I've built websites with HTML, CSS, JavaScript and Firebase — and I'm now crafting new projects with React and the MERN stack. Here are some of my favorites."
      />

      <section className="section">
        <div className="container">
          <Reveal className="filter-bar">
            {filters.map((f) => (
              <button
                key={f}
                className={`filter-btn ${active === f ? "active" : ""}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </Reveal>

          <motion.div layout className="projects-grid">
            <AnimatePresence mode="popLayout">
              {visible.map((p, i) => (
                <motion.div
                  key={p.key}
                  layout
                  initial={{ opacity: 0, scale: 0.85, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85, y: 20 }}
                  transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProjectCard project={p} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <Reveal className="center-cta">
            <div className="cta-banner small">
              <div className="cta-blob c1" />
              <h2>Want a website like these?</h2>
              <p>Let&apos;s turn your idea into the next project in this collection.</p>
              <div className="cta-actions">
                <Link to="/contact" className="btn btn-primary">
                  Start a Project <FaArrowRight />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

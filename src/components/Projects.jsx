import { FaFacebookF, FaWhatsapp, FaYoutube, FaStore, FaArrowRight } from "react-icons/fa";
import Reveal from "./Reveal";
import Tilt from "./Tilt";

const projects = [
  {
    icon: <FaFacebookF />,
    title: "Facebook Clone",
    desc: "A social media UI clone with posts, profiles and interactive feeds.",
    tags: ["HTML", "CSS", "JavaScript"],
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #1877f2 60%, #38bdf8 100%)",
  },
  {
    icon: <FaStore />,
    title: "OLX Clone",
    desc: "A classifieds marketplace layout with product listings and categories.",
    tags: ["HTML", "CSS", "JavaScript"],
    gradient: "linear-gradient(135deg, #002f34 0%, #0f766e 55%, #ffce32 130%)",
  },
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp Clone",
    desc: "A real-time chat experience powered by Firebase authentication and database.",
    tags: ["HTML", "CSS", "Firebase", "JavaScript"],
    gradient: "linear-gradient(135deg, #064e3b 0%, #16a34a 55%, #4ade80 120%)",
  },
  {
    icon: <FaYoutube />,
    title: "YouTube Clone",
    desc: "A video streaming interface with grids, search layout and video cards.",
    tags: ["HTML", "CSS", "JavaScript"],
    gradient: "linear-gradient(135deg, #7f1d1d 0%, #dc2626 55%, #f87171 120%)",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-tag">My Work</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-sub">
            I&apos;ve built websites with HTML, CSS, JavaScript and Firebase — and
            I&apos;m now crafting new projects with React and the MERN stack.
          </p>
        </Reveal>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={0.1 * i}>
              <Tilt className="project-card" max={8}>
                <div className="project-thumb" style={{ background: p.gradient }}>
                  <span className="project-big-icon">{p.icon}</span>
                  <span className="project-ring-deco" />
                  <span className="project-ring-deco r2" />
                </div>
                <div className="project-body">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="project-tags">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <a href="#" className="project-link" onClick={(e) => e.preventDefault()}>
                    View Project <FaArrowRight />
                  </a>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

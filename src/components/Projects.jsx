import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import { projects } from "../data";

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
            Live web projects built with React and the MERN stack, plus Pasni
            Fish, an offline desktop dashboard made with React and Electron.
          </p>
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal key={project.key} delay={0.1 * index}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

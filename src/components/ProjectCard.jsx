import {
  FaArrowRight,
  FaGlobe,
} from "react-icons/fa";
import Tilt from "./Tilt";

const iconMap = {
  FaGlobe: <FaGlobe />,
};

export default function ProjectCard({ project }) {
  return (
    <Tilt className="project-card" max={8}>
      <div className={`project-thumb ${project.image ? "has-image" : ""}`} style={{ background: project.gradient }}>
        {project.image ? (
          <img className="project-image" src={project.image} alt={project.imageAlt} />
        ) : (
          <>
            <span className="project-big-icon">{iconMap[project.icon]}</span>
            <span className="project-ring-deco" />
            <span className="project-ring-deco r2" />
          </>
        )}
        <span className="project-category">{project.category}</span>
      </div>
      <div className="project-body">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        {project.url ? (
          <a
            href={project.url}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website <FaArrowRight />
          </a>
        ) : (
          <span className="project-link project-link-static">Offline desktop app</span>
        )}
      </div>
    </Tilt>
  );
}

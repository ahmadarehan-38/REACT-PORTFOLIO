import {
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
  FaStore,
  FaArrowRight,
} from "react-icons/fa";
import Tilt from "./Tilt";

const iconMap = {
  FaFacebookF: <FaFacebookF />,
  FaStore: <FaStore />,
  FaWhatsapp: <FaWhatsapp />,
  FaYoutube: <FaYoutube />,
};

export default function ProjectCard({ project }) {
  return (
    <Tilt className="project-card" max={8}>
      <div className="project-thumb" style={{ background: project.gradient }}>
        <span className="project-big-icon">{iconMap[project.icon]}</span>
        <span className="project-ring-deco" />
        <span className="project-ring-deco r2" />
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
        <a
          href="#"
          className="project-link"
          onClick={(e) => e.preventDefault()}
        >
          View Project <FaArrowRight />
        </a>
      </div>
    </Tilt>
  );
}

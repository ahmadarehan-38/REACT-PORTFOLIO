import { FaArrowRight, FaExternalLinkAlt, FaGlobe } from "react-icons/fa";

export default function ProjectCard({ project }) {
  const thumb = (
    <>
      {project.image ? (
        <img
          className="project-image"
          src={project.image}
          alt={project.imageAlt || project.name}
          loading="lazy"
        />
      ) : (
        <span className="project-fallback">
          <FaGlobe />
        </span>
      )}
      <span className="project-overlay" aria-hidden="true">
        <span className="project-view">
          <FaExternalLinkAlt />
        </span>
      </span>
      <span className="project-category">{project.category}</span>
    </>
  );

  return (
    <article className="project-card">
      <div
        className={`project-thumb ${project.image ? "has-image" : ""}`}
        style={{ background: project.gradient }}
      >
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${project.name}`}
            style={{
              position: "absolute",
              inset: 0,
              display: "grid",
              placeItems: "center",
            }}
          >
            {thumb}
          </a>
        ) : (
          thumb
        )}
      </div>

      <div className="project-body">
        <h3>{project.name}</h3>
        <span className="project-cat">{project.category}</span>
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
          <span className="project-link project-link-static">
            Offline desktop app
          </span>
        )}
      </div>
    </article>
  );
}

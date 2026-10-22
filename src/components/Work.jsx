import Reveal from "./Reveal";
import { projects } from "../data";

const featured = projects.filter((p) => p.url);

function Card({ project }) {
  const props = project.url
    ? { href: project.url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a className="work-card" {...props}>
      <div className="card-chrome">
        <i />
        <i />
        <i />
        <span className="url">
          {project.url
            ? project.url.replace(/^https?:\/\//, "")
            : `${project.key}.local`}
        </span>
      </div>

      <div className="card-visual">
        <span className="num-badge">
          {project.index} / {project.year}
        </span>
        <img src={project.image} alt={project.imageAlt} />
        <span className="scan" aria-hidden="true" />
      </div>

      <div className="card-body">
        <div className="card-kicker">
          <span>{project.category}</span>
          <span>{project.role}</span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="card-tags">
          {project.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <span className="card-link">Visit live site ↗</span>
      </div>
    </a>
  );
}

function TileContent({ project }) {
  return (
    <>
      <div className="tile-top">
        <span>{project.index}</span>
        <span>
          {project.category} / {project.year}
        </span>
      </div>

      <div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>

      <div className="tile-foot">
        <span className="tile-tag">{project.tags.slice(0, 3).join(" · ")}</span>
        {project.url ? (
          <a
            className="arrow-link"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live ↗
          </a>
        ) : (
          <span className="mono" style={{ fontSize: 9, opacity: 0.45 }}>
            Study
          </span>
        )}
      </div>

      <span className="tile-ghost" aria-hidden="true">
        {project.index}
      </span>
    </>
  );
}

export default function Work() {
  return (
    <section id="work" className="work" data-nav="ink">
      <div className="container section" style={{ paddingBottom: 0 }}>
        <div className="work-head">
          <div>
            <span className="eyebrow">04 — Selected work</span>
            <h2 className="display work-title" style={{ marginTop: 18 }}>
              Featured
              <br />
              <span className="outline-text">Works</span>
            </h2>
          </div>
          <p
            style={{
              maxWidth: "38ch",
              fontSize: 14,
              lineHeight: 1.7,
              opacity: 0.66,
            }}
          >
            Three shipped products, two studies. Interfaces built with React,
            wired to Node, Express and MongoDB — or running offline in Electron.
          </p>
        </div>
      </div>

      <div className="featured-viewport">
        <div className="featured-track">
          {featured.map((p) => (
            <Card key={p.key} project={p} />
          ))}
        </div>
      </div>

      <div className="container">
        <div className="featured-hint">
          <span>← Drag / scroll sideways →</span>
          <span>{String(featured.length).padStart(2, "0")} live projects</span>
          <span>A. Rehan — Selected work 2024/26</span>
        </div>
      </div>

      <div className="works-index">
        <div className="container">
          <div
            className="work-head"
            style={{ borderColor: "var(--line-paper)" }}
          >
            <div>
              <span className="eyebrow">Works &apos;26</span>
              <h3
                className="display"
                style={{ fontSize: "clamp(1.6rem, 4vw, 3rem)", marginTop: 14 }}
              >
                The whole index
              </h3>
            </div>
            <span className="mono" style={{ opacity: 0.5 }}>
              05 entries
            </span>
          </div>

          <div className="bento">
            {projects.map((p, i) => (
              <Reveal key={p.key} delay={i * 0.05} y={24} className="bento-cell">
                <article className="tile">
                  <TileContent project={p} />
                </article>
              </Reveal>
            ))}

            <Reveal className="bento-cell" delay={0.1} y={24}>
              <article className="tile tile-wide">
                <div>
                  <div className="tile-top">
                    <span>06</span>
                    <span>Open slot</span>
                  </div>
                  <h3 style={{ marginTop: 26 }}>Your project</h3>
                  <p>
                    Have an idea that deserves a proper interface? I&apos;m
                    taking on freelance builds for 2026.
                  </p>
                </div>
                <a className="arrow-link" href="#contact">
                  Start a project ↗
                </a>
                <span className="tile-ghost" aria-hidden="true">
                  06
                </span>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

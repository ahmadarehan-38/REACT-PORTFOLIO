import { useState } from "react";
import Reveal from "./Reveal";
import { services } from "../data";

export default function Services() {
  const [open, setOpen] = useState(0);

  return (
    <section id="services" className="services section" data-nav="paper">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">05 — Services</span>
            <h2
              className="display"
              style={{ fontSize: "clamp(2rem, 6vw, 4.6rem)", marginTop: 18 }}
            >
              The services
              <br />
              <span className="outline-text">we provide</span>
            </h2>
          </div>
          <p
            style={{
              maxWidth: "40ch",
              fontSize: 14,
              lineHeight: 1.75,
              opacity: 0.7,
            }}
          >
            From a single responsive landing page to a full MERN application —
            design, build and ship, handled by one person who cares about the
            last five percent.
          </p>
        </div>

        <div className="service-list">
          {services.map((service, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={service.num} delay={i * 0.04} y={16}>
                <div className={`service-row ${isOpen ? "is-open" : ""}`}>
                  <button
                    className="service-trigger"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="service-num">({service.num})</span>
                    <span className="service-name">{service.title}</span>
                    <span className="service-short">{service.short}</span>
                    <span className="service-plus" aria-hidden="true">
                      +
                    </span>
                  </button>

                  <div className="service-panel">
                    <div className="service-panel-inner">
                      <p>{service.text}</p>
                      <div className="tags">
                        {service.tags.map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 20,
            flexWrap: "wrap",
            marginTop: 34,
          }}
        >
          <p style={{ fontSize: 13.5, opacity: 0.62, maxWidth: "46ch" }}>
            Not sure which one you need? Send a sentence about the project and
            I&apos;ll reply with a plan.
          </p>
          <a className="btn btn--ink" href="#contact">
            <span>Book a call</span>
          </a>
        </div>
      </div>
    </section>
  );
}

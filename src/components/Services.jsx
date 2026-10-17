import { FaArrowRight } from "react-icons/fa";
import Reveal from "./Reveal";
import { services } from "../data";

export default function Services() {
  return (
    <section id="services" className="section section-alt">
      <div className="container">
        <Reveal className="section-head">
          <h2 className="section-title">
            <span className="thin">My</span> <strong>Services</strong>
          </h2>
          <p className="section-sub">
            Modern web development solutions focused on performance,
            responsiveness and user experience.
          </p>
        </Reveal>

        <div className="services-grid">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={0.08 * i}>
              <div className="service-card">
                <span className="service-icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <a href="#contact" className="service-link">
                  Learn More <FaArrowRight />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

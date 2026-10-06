import {
  FaCode,
  FaMobileAlt,
  FaServer,
  FaDatabase,
  FaPaintBrush,
  FaRocket,
} from "react-icons/fa";
import Reveal from "./Reveal";
import Tilt from "./Tilt";

const services = [
  {
    icon: <FaCode />,
    title: "Frontend Development",
    text: "Building fast, responsive and interactive websites using React, HTML, CSS and JavaScript.",
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    text: "Creating secure server-side applications with Node.js, Express and REST APIs.",
  },
  {
    icon: <FaDatabase />,
    title: "Database Integration",
    text: "Managing data efficiently with MongoDB, Firebase and Supabase.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    text: "Mobile-friendly layouts that work perfectly on phones, tablets and desktops.",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    text: "Designing clean, modern and user-friendly interfaces with a focus on great experience.",
  },
  {
    icon: <FaRocket />,
    title: "Performance & Deployment",
    text: "Optimizing speed, SEO and shipping apps to production with confidence.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section section-alt">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-tag">What I Do</span>
          <h2 className="section-title">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="section-sub">
            Modern web development solutions focused on performance,
            responsiveness and user experience.
          </p>
        </Reveal>

        <div className="services-grid">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={0.08 * i}>
              <Tilt className="service-card" max={10}>
                <span className="service-icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <span className="service-number">0{i + 1}</span>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

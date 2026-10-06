import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import Reveal from "./Reveal";

const info = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "ahmadrehan3838@gmail.com",
    href: "mailto:ahmadrehan3838@gmail.com",
  },
  {
    icon: <FaPhoneAlt />,
    label: "Phone / WhatsApp",
    value: "+92 334 0776122",
    href: "tel:+923340776122",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "Pasni, Balochistan, Pakistan",
    href: null,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = (e) => {
    e.preventDefault();
    const { name, email, subject, phone, message } = formData;
    const whatsappMessage = `*Hello! I'd like to work with you.*

*Name:* ${name}
*Email:* ${email}
*Subject:* ${subject || "—"}
*Phone:* ${phone}

*Message:*
${message}`;
    const url = `https://wa.me/923340776122?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Together</span>
          </h2>
          <p className="section-sub">
            Have a project in mind or want to work together? Send me a message and
            I&apos;ll get back to you on WhatsApp.
          </p>
        </Reveal>

        <div className="contact-grid">
          <Reveal className="contact-info" delay={0.1}>
            {info.map((c) => (
              <a
                key={c.label}
                className="contact-card"
                href={c.href || undefined}
                onClick={c.href ? undefined : (e) => e.preventDefault()}
              >
                <span className="contact-icon">{c.icon}</span>
                <div>
                  <span className="contact-label">{c.label}</span>
                  <span className="contact-value">{c.value}</span>
                </div>
              </a>
            ))}

            <div className="contact-socials">
              <span className="social-label">Follow Me</span>
              <div className="social-row">
                <a href="#" aria-label="GitHub" title="GitHub">
                  <FaGithub />
                </a>
                <a href="#" aria-label="LinkedIn" title="LinkedIn">
                  <FaLinkedinIn />
                </a>
                <a href="#" aria-label="Instagram" title="Instagram">
                  <FaInstagram />
                </a>
                <a href="#" aria-label="Facebook" title="Facebook">
                  <FaFacebookF />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <form className="contact-form" onSubmit={sendToWhatsApp}>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <textarea
                rows="6"
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit" className="btn btn-primary form-btn">
                <FaPaperPlane /> Send via WhatsApp
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

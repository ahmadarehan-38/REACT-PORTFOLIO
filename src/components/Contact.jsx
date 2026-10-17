import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import Reveal from "./Reveal";
import { socials } from "../data";

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
    const whatsappMessage = `*Hello! I'd like to work with you.*\n\n*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject || "—"}\n*Phone:* ${phone}\n\n*Message:*\n${message}`;
    const url = `https://wa.me/923340776122?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal className="section-head">
          <h2 className="section-title">
            <span className="thin">Get</span> <strong>In Touch</strong>
          </h2>
          <p className="section-sub">
            Have a project in mind or want to work together? Send me a message
            and I&apos;ll get back to you on WhatsApp.
          </p>
        </Reveal>

        <div className="contact-grid">
          <Reveal delay={0.1}>
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

          <Reveal className="contact-side" delay={0.2}>
            <div className="contact-details">
              <h3>My Contact Details</h3>
              {info.map((c) =>
                c.href ? (
                  <a key={c.label} className="contact-row" href={c.href}>
                    <span className="contact-ricon">{c.icon}</span>
                    <div>
                      <span className="contact-label">{c.label}</span>
                      <span className="contact-value">{c.value}</span>
                    </div>
                  </a>
                ) : (
                  <div key={c.label} className="contact-row">
                    <span className="contact-ricon">{c.icon}</span>
                    <div>
                      <span className="contact-label">{c.label}</span>
                      <span className="contact-value">{c.value}</span>
                    </div>
                  </div>
                )
              )}
            </div>

            <div className="contact-socials">
              <span className="social-label">Follow Me</span>
              <div className="social-row">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    title={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="contact-note">
              <span className="pulse-dot" />
              <p>
                <strong>Fastest reply:</strong> WhatsApp — I usually respond
                within a few hours.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { profile, socials } from "../data";

const info = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: <FaPhoneAlt />,
    label: "Phone / WhatsApp",
    value: profile.phone,
    href: `tel:+${profile.phoneRaw}`,
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: profile.location,
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
    const url = `https://wa.me/${profile.phoneRaw}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <PageHero
        tag="Get In Touch"
        title="Let's Build Something Together"
        subtitle="Have a project in mind or want to work together? Send me a message and I'll get back to you on WhatsApp."
      />

      <section className="section">
        <div className="container contact-grid">
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
                {socials.map((s) => (
                  <a key={s.label} href={s.href} aria-label={s.label} title={s.label}>
                    {s.icon}
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
      </section>
    </>
  );
}

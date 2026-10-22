import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile, socials } from "../data";

function useLocalTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: profile.timezone,
      }).format(new Date());
    setTime(format());
    const id = setInterval(() => setTime(format()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function Contact() {
  const time = useLocalTime();

  return (
    <section id="contact" className="contact section" data-nav="ink">
      <div className="container">
        <div className="contact-top">
          <span className="eyebrow">06 — Contact</span>
          <span className="mono" style={{ opacity: 0.6 }}>
            {profile.availability}
          </span>
        </div>

        <h2 className="contact-title">
          <motion.span
            className="sold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Let&apos;s
          </motion.span>
          <motion.span
            className="outline-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.8,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Talk
          </motion.span>
        </h2>

        <a className="contact-mail" href={`mailto:${profile.email}`}>
          {profile.email}
          <span className="arr" aria-hidden="true">
            ↗
          </span>
        </a>

        <div className="contact-grid">
          <div className="contact-cell">
            <h4>Location</h4>
            <p>{profile.location}</p>
            <p style={{ opacity: 0.6 }}>GMT +05:00 · {time} PKT</p>
          </div>

          <div className="contact-cell">
            <h4>Direct</h4>
            <p>
              <a href={`tel:${profile.phoneRaw}`}>{profile.phone}</a>
            </p>
            <p>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </p>
          </div>

          <div className="contact-cell">
            <h4>Elsewhere</h4>
            <div className="contact-socials">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label} <span>{s.short}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-cell">
            <h4>Availability</h4>
            <p>Taking on freelance projects &amp; internships for 2026.</p>
            <p style={{ opacity: 0.6 }}>Replies within 24 hours.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

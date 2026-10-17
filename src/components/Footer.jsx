import { FaArrowUp } from "react-icons/fa";
import { socials, navLinks } from "../data";

export default function Footer() {
  const scrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#home" className="logo">
          <span className="logo-mark">AR</span>
          <span className="logo-text">
            Ahmad<span>Rehan</span>
          </span>
        </a>

        <p className="footer-tag">
          Building modern web experiences with creativity, clean code and
          innovative solutions.
        </p>

        <div className="social-row">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              title={s.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.icon}
            </a>
          ))}
        </div>

        <nav className="footer-nav" aria-label="Footer">
          {navLinks.map((l) => (
            <a key={l.to} href={l.to}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="footer-copy">
          <p>© 2026 Ahmad Rehan. All Rights Reserved.</p>
          <a
            href="#home"
            className="back-top"
            aria-label="Back to top"
            title="Back to top"
            onClick={scrollTop}
          >
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaArrowUp,
} from "react-icons/fa";
import { profile, socials, navLinks } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo">
            <span className="logo-mark">AR</span>
            <span className="logo-text">
              Ahmad<span>Rehan</span>
            </span>
          </Link>
          <p>
            Building modern web experiences with creativity, clean code and
            innovative solutions.
          </p>
          <div className="social-row">
            {socials.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} title={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to}>
              {l.label}
            </Link>
          ))}
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={`tel:+${profile.phoneRaw}`}>{profile.phone}</a>
          <p>{profile.location}</p>
          <Link to="/cv/ahmad-rehan-cv.html" className="footer-cv-link">
            View / Download CV →
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2026 Ahmad Rehan. All Rights Reserved.</p>
          <a href="#top" className="back-top" aria-label="Back to top" title="Back to top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}

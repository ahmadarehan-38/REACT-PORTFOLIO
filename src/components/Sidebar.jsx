import { useEffect, useState } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { navLinks, socials } from "../data";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute("data-theme") || "dark"
  );

  useEffect(() => {
    const ids = navLinks.map((l) => l.to.slice(1));

    const onScroll = () => {
      // Scrollspy: highlight the section currently in view
      const offset = 140;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) {
          current = id;
        }
      }
      setActive(`#${current}`);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  };

  return (
    <>
      <button
        className="hamburger"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      <div
        className={`side-backdrop ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />

      <aside className={`sidebar ${open ? "open" : ""}`}>
        <a href="#home" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-mark">AR</span>
          <span className="logo-text">
            Ahmad<span>Rehan</span>
          </span>
        </a>

        <nav aria-label="Primary">
          <p className="side-label">Menu</p>
          <ul className="side-links">
            {navLinks.map((l) => (
              <li key={l.to}>
                <a
                  href={l.to}
                  className={active === l.to ? "active" : ""}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="btn btn-primary side-hire" onClick={() => setOpen(false)}>
          Hire Me
        </a>

        <div className="side-foot">
          <div className="side-theme">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle dark / light theme"
              title="Toggle theme"
            >
              <span className={`toggle-track ${theme}`}>
                <FaSun className="ico-sun" />
                <FaMoon className="ico-moon" />
              </span>
            </button>
            <span>{theme === "dark" ? "Dark" : "Light"} mode</span>
          </div>

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

          <p className="side-note">
            <span className="pulse-dot" /> Available for work
          </p>
          <p className="side-copy">
            © 2026 Ahmad Rehan.
            <br />
            All Rights Reserved.
          </p>
        </div>
      </aside>
    </>
  );
}

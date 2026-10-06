import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { navLinks } from "../data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute("data-theme") || "dark"
  );
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  };

  return (
    <nav className={`navbar ${scrolled || location.pathname !== "/" ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <Link to="/" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-mark">AR</span>
          <span className="logo-text">
            Ahmad<span>Rehan</span>
          </span>
        </Link>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          {navLinks.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.to === "/"}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
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

          <Link to="/contact" className="btn btn-primary nav-hire">
            Hire Me
          </Link>

          <button
            className="hamburger"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <div
        className={`nav-backdrop ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />
    </nav>
  );
}

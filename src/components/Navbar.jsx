import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile, navLinks, socials } from "../data";

function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: profile.timezone,
      }).format(new Date());

    setTime(format());
    const id = setInterval(() => setTime(format()), 20000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="nav-clock">
      PKT {time}
    </span>
  );
}

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [theme, setTheme] = useState("ink");
  const [active, setActive] = useState("#top");
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  /* hide / show on scroll */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 220 && y > lastY.current);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* section theme + active link */
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("[data-nav]"));
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setTheme(entry.target.dataset.nav || "ink");
          if (entry.target.id) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  /* lock scroll when the mobile menu is open (skip first run so the
     preloader keeps its own lock) */
  const firstRun = useRef(true);
  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    document.body.classList.toggle("is-locked", open);
    return () => document.body.classList.remove("is-locked");
  }, [open]);

  return (
    <>
      <header
        className={`nav ${hidden ? "nav--hidden" : ""} nav--${theme}`}
        data-open={open || undefined}
      >
        <div className="nav-inner">
          <a
            className="brand"
            href="#top"
            onClick={() => setOpen(false)}
            aria-label={`${profile.name} — home`}
          >
            <span className="brand-mark">{profile.wordmark}</span>
            <span>
              {profile.name}
              <span className="brand-sub">Full Stack Developer</span>
            </span>
          </a>

          <nav className="nav-links" aria-label="Sections">
            {navLinks.map((link) => (
              <a
                key={link.to}
                href={link.to}
                className={active === link.to ? "is-active" : ""}
                onClick={() => setOpen(false)}
              >
                {link.label} <sup>{link.num}</sup>
              </a>
            ))}
          </nav>

          <div className="nav-meta">
            <span className="nav-status">{profile.availability}</span>
            <Clock />
            <button
              className="nav-toggle"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Toggle navigation"
            >
              {open ? "Close ✕" : "Menu ☰"}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul>
              {navLinks.map((link) => (
                <li key={link.to}>
                  <a href={link.to} onClick={() => setOpen(false)}>
                    {link.label}
                    <span>{link.num}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mobile-foot">
              <span>{profile.email}</span>
              <span>
                {socials.map((s) => (
                  <a key={s.label} href={s.href} style={{ marginLeft: 12 }}>
                    {s.short}
                  </a>
                ))}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

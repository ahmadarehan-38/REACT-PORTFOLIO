import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const WORD = "ECHO.";

export default function Preloader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    document.body.classList.add("is-locked");
    const start = performance.now();
    const total = 1650;
    let raf;

    const tick = (now) => {
      const t = Math.min(1, (now - start) / total);
      setProgress(Math.round(t * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const timer = setTimeout(() => {
      setGone(true);
      document.body.classList.remove("is-locked");
      setTimeout(onDone, 850);
    }, total + 250);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      document.body.classList.remove("is-locked");
    };
  }, [onDone]);

  return (
    <AnimatePresence>
      {!gone && (
        <motion.div
          className="preloader"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="preloader-mark" aria-label="ECHO">
            {WORD.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.12 + i * 0.06,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={char === "." ? "dot" : ""}
              >
                {char}
              </motion.span>
            ))}
          </div>

          <div className="preloader-meta">
            <span>Ahmad Rehan — Portfolio / 2026</span>
            <span>{String(progress).padStart(3, "0")}%</span>
          </div>

          <div className="preloader-bar">
            <motion.span
              style={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

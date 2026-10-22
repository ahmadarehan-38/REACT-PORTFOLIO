import { useEffect, useRef, useState } from "react";

export default function Counter({ to = 0, suffix = "", duration = 1500 }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || started.current) return;
          started.current = true;

          const reduce = window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches;
          if (reduce) {
            setValue(to);
            return;
          }

          const t0 = performance.now();
          const step = (now) => {
            const t = Math.min(1, (now - t0) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setValue(Math.round(eased * to));
            if (t < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.4 }
    );

    io.observe(node);
    return () => io.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

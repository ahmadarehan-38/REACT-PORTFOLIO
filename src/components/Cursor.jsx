import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.body.classList.add("has-custom-cursor");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let hovering = false;
    let pressing = false;
    let raf;

    const paintDot = () => {
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%) scale(${
        pressing ? 0.55 : 1
      })`;
    };

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      paintDot();
    };

    const onOver = (e) => {
      hovering = !!e.target.closest("a, button, [data-cursor='hover']");
    };

    const onDown = () => {
      pressing = true;
      paintDot();
    };

    const onUp = () => {
      pressing = false;
      paintDot();
    };

    const loop = () => {
      ringX += (mouseX - ringX) * 0.14;
      ringY += (mouseY - ringY) * 0.14;
      const scale = hovering ? 1.8 : pressing ? 0.75 : 1;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%) scale(${scale})`;
      ring.style.opacity = hovering ? "1" : "0.6";
      raf = requestAnimationFrame(loop);
    };

    paintDot();
    raf = requestAnimationFrame(loop);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}

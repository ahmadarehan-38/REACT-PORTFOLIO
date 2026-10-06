import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiJavascript,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { profile } from "../data";

const chips = [
  { icon: <SiReact />, label: "React", pos: "chip-1", color: "#61dafb" },
  { icon: <SiNodedotjs />, label: "Node.js", pos: "chip-2", color: "#7ccf29" },
  { icon: <SiMongodb />, label: "MongoDB", pos: "chip-3", color: "#4fbd54" },
  { icon: <SiFirebase />, label: "Firebase", pos: "chip-4", color: "#ffca28" },
  { icon: <SiJavascript />, label: "JavaScript", pos: "chip-5", color: "#f7df1e" },
  { icon: <FaCss3Alt />, label: "CSS3", pos: "chip-6", color: "#38bdf8" },
];

export default function PhotoFrame() {
  const wrapRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start end", "end start"],
  });

  // motion.dev-style scroll parallax
  const yPhoto = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const rotate = useTransform(scrollYProgress, [0, 1], [3, -3]);
  const yChip = [
    useTransform(scrollYProgress, [0, 1], [20, -70]),
    useTransform(scrollYProgress, [0, 1], [60, -30]),
    useTransform(scrollYProgress, [0, 1], [-30, -90]),
    useTransform(scrollYProgress, [0, 1], [10, -60]),
    useTransform(scrollYProgress, [0, 1], [70, -20]),
    useTransform(scrollYProgress, [0, 1], [-20, -80]),
  ];

  const onMouseMove = (e) => {
    const el = wrapRef.current;
    if (!el || !window.matchMedia("(pointer: fine)").matches) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1100px) rotateY(${px * 8}deg) rotateX(${-py * 8}deg)`;
  };
  const onMouseLeave = () => {
    if (wrapRef.current)
      wrapRef.current.style.transform =
        "perspective(1100px) rotateY(0deg) rotateX(0deg)";
  };

  return (
    <div
      className="photo-frame-wrap"
      ref={wrapRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* orbit rings */}
      <div className="photo-ring ring-1" />
      <div className="photo-ring ring-2" />

      <motion.div
        className="photo-frame"
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{ y: yPhoto, rotate }}
      >
        <div className="photo-inner">
          <img src={profile.photo} alt={profile.name} />
        </div>
        <div className="photo-badge">
          <span className="pulse-dot" />
          Open to freelance work
        </div>
      </motion.div>

      {chips.map((c, i) => (
        <motion.div
          key={c.label}
          className={`float-chip ${c.pos}`}
          style={{ y: yChip[i], "--chip-color": c.color }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 + i * 0.12, duration: 0.5, type: "spring" }}
        >
          <span className="chip-icon">{c.icon}</span>
          <span className="chip-label">{c.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

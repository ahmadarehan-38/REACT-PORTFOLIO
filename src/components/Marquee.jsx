import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiHtml5,
  SiTailwindcss,
  SiGit,
  SiExpress,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";

const tech = [
  { icon: <SiReact />, name: "React.js" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <SiHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <SiGit />, name: "Git" },
];

export default function Marquee() {
  const row = [...tech, ...tech];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((t, i) => (
          <div className="marquee-item" key={i}>
            <span className="marquee-icon">{t.icon}</span>
            <span>{t.name}</span>
            <span className="marquee-star">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

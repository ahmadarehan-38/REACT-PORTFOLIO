import {
  FaCode,
  FaServer,
  FaDatabase,
  FaMobileAlt,
  FaPaintBrush,
  FaRocket,
  FaGithub,
  FaLinkedinIn,
  FaBirthdayCake,
  FaLanguage,
  FaFlag,
  FaMusic,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiHtml5,
  SiGit,
  SiGithub,
  SiVite,
  SiNpm,
  SiFigma,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";

export const profile = {
  name: "Ahmad Rehan",
  role: "Full Stack Web Developer",
  tagline: "Turning Ideas Into Powerful Digital Solutions",
  email: "ahmadrehan3838@gmail.com",
  phone: "+92 334 0776122",
  phoneRaw: "923340776122",
  location: "Pasni, Balochistan, Pakistan",
  dob: "20 October 2008",
  nationality: "Pakistani",
  languages: ["English", "Urdu", "Balochi", "Brahvi"],
  interests: ["Music", "Reading", "Traveling"],
  intro:
    "I design and develop modern, high-performance web applications with clean code, stunning interfaces and seamless user experiences that make a lasting impact.",
  about:
    "I am a passionate Full Stack Web Developer dedicated to building modern, responsive, and high-performance web applications. I enjoy transforming creative ideas into functional digital experiences that are both visually appealing and user-friendly.",
  photo: "/ahmad.png",
};

export const socials = [
  { icon: <FaGithub />, label: "GitHub", href: "https://github.com/ahmadarehan-38" },
  { icon: <FaLinkedinIn />, label: "LinkedIn", href: "https://www.linkedin.com/in/ahmad-rehan/" },
];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Skills", to: "/skills" },
  { label: "Projects", to: "/projects" },
  { label: "Education", to: "/education" },
  { label: "Contact", to: "/contact" },
];

export const stats = [
  { value: 1, suffix: "+", label: "Years Coding" },
  { value: 10, suffix: "+", label: "Technologies" },
  { value: 5, suffix: "+", label: "Projects Shipped" },
];

export const services = [
  {
    icon: <FaCode />,
    title: "Frontend Development",
    text: "Building fast, responsive and interactive websites using React, HTML, CSS and JavaScript.",
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    text: "Creating secure server-side applications with Node.js, Express and REST APIs.",
  },
  {
    icon: <FaDatabase />,
    title: "Database Integration",
    text: "Managing data efficiently with MongoDB, Firebase and Supabase.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    text: "Mobile-friendly layouts that work perfectly on phones, tablets and desktops.",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    text: "Designing clean, modern and user-friendly interfaces with a focus on great experience.",
  },
  {
    icon: <FaRocket />,
    title: "Performance & Deployment",
    text: "Optimizing speed, SEO and shipping apps to production with confidence.",
  },
];

export const projects = [
  {
    key: "bowan",
    name: "Bowan",
    description:
      "A modern web experience built with React, Node.js, Express.js and MongoDB, with GSAP animations and Figma-designed interfaces.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "GSAP", "Figma"],
    category: "Web App",
    url: "https://bowan.vercel.app",
    gradient: "linear-gradient(135deg, #182848 0%, #4b6cb7 60%, #77d4df 120%)",
    icon: "FaGlobe",
  },
  {
    key: "makran-blue",
    name: "Makran Blue",
    description:
      "A polished, animated website made with React, Node.js, Express.js and MongoDB, designed in Figma and brought to life with GSAP.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "GSAP", "Figma"],
    category: "Web App",
    url: "https://makran-blue.vercel.app",
    gradient: "linear-gradient(135deg, #063b5c 0%, #087eaa 55%, #61d6d1 120%)",
    icon: "FaGlobe",
  },
  {
    key: "pasni-fish",
    name: "Pasni Fish",
    description:
      "An offline dashboard desktop application for managing Pasni Fish, built with React and Electron.",
    tags: ["React", "Electron", "Offline Desktop App"],
    category: "Desktop App",
    image: "/pasni-fish-dashboard.svg",
    imageAlt: "Illustrative dashboard preview for the Pasni Fish desktop app",
    gradient: "linear-gradient(135deg, #092d3b 0%, #146f79 60%, #73d2bd 120%)",
  },
];

export const skills = [
  { name: "React.js", level: 85 },
  { name: "JavaScript (ES6+)", level: 82 },
  { name: "HTML5", level: 92 },
  { name: "CSS3 & Responsive Design", level: 88 },
  { name: "Node.js & Express", level: 72 },
  { name: "MongoDB", level: 70 },
  { name: "Firebase", level: 78 },
  { name: "Git & GitHub", level: 74 },
];

export const tools = [
  { icon: <SiReact />, name: "React", color: "#61dafb" },
  { icon: <SiJavascript />, name: "JavaScript", color: "#f7df1e" },
  { icon: <SiNodedotjs />, name: "Node.js", color: "#7ccf29" },
  { icon: <SiExpress />, name: "Express", color: "#8bd0ff" },
  { icon: <SiMongodb />, name: "MongoDB", color: "#4fbd54" },
  { icon: <SiFirebase />, name: "Firebase", color: "#ffca28" },
  { icon: <SiSupabase />, name: "Supabase", color: "#3ecf8e" },
  { icon: <SiHtml5 />, name: "HTML5", color: "#e96228" },
  { icon: <FaCss3Alt />, name: "CSS3", color: "#38bdf8" },
  { icon: <SiTailwindcss />, name: "Tailwind", color: "#38bdf8" },
  { icon: <SiGit />, name: "Git", color: "#f05033" },
  { icon: <SiGithub />, name: "GitHub", color: "#c9d1ff" },
  { icon: <SiVite />, name: "Vite", color: "#a855f7" },
  { icon: <SiNpm />, name: "npm", color: "#cb3837" },
  { icon: <SiFigma />, name: "Figma", color: "#a259ff" },
];

export const education = [
  {
    year: "2025 — Present",
    title: "SMIT — Full Stack Web Development",
    text: "Learning MERN Stack, React.js, JavaScript, Firebase, Node.js, Express, MongoDB and modern web development.",
    tags: ["MERN", "React", "Firebase"],
  },
  {
    year: "2024 — 2026",
    title: "Intermediate — Computer Science",
    text: "Completing Intermediate with Computer Science while building strong programming fundamentals.",
    tags: ["Computer Science"],
  },
  {
    year: "2022 — 2024",
    title: "Matriculation",
    text: "Completed Secondary Education with excellent academic performance.",
    tags: [],
  },
];

export const experience = [
  {
    year: "2025 — Present",
    title: "Frontend Developer",
    text: "Developing responsive React applications and modern UI/UX designs with HTML, CSS, JavaScript and React.",
    tags: ["React", "JavaScript", "CSS", "HTML"],
  },
  {
    year: "2025 — Present",
    title: "Freelance Projects",
    text: "Built portfolio websites, landing pages and CRUD applications using React and Firebase.",
    tags: ["Firebase", "React", "Node.js"],
  },
];

export const personalDetails = [
  { icon: <FaBirthdayCake />, label: "Date of Birth", value: "20 October 2008" },
  {
    icon: <FaLanguage />,
    label: "Spoken Languages",
    value: "English · Urdu · Balochi · Brahvi",
  },
  { icon: <FaFlag />, label: "Nationality", value: "Pakistani" },
  { icon: <FaMusic />, label: "Interests", value: "Music · Reading · Traveling" },
  { icon: <FaMapMarkerAlt />, label: "Location", value: "Pasni, Balochistan, Pakistan" },
  { icon: <FaEnvelope />, label: "Email", value: "ahmadrehan3838@gmail.com" },
];

export const journey = [
  {
    step: "01",
    title: "Where it started",
    text: "In 2022 I discovered how the web works and wrote my first lines of HTML. That first page that rendered in the browser — something I built from nothing — hooked me instantly.",
    emoji: "🌱",
  },
  {
    step: "02",
    title: "Building real projects",
    text: "I challenged myself by cloning platforms I use every day — Facebook, OLX, WhatsApp and YouTube — learning layouts, interactivity and real-time data with Firebase along the way.",
    emoji: "⚙️",
  },
  {
    step: "03",
    title: "Going full stack",
    text: "At SMIT I'm mastering the MERN stack: React for interfaces, Node.js and Express for servers, and MongoDB for data — turning static pages into complete applications.",
    emoji: "🚀",
  },
  {
    step: "04",
    title: "What's next",
    text: "I'm freelancing, shipping client projects and pushing toward Next.js and production-grade architecture — always learning, always building.",
    emoji: "✨",
  },
];

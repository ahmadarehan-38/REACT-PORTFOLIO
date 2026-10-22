export const profile = {
  name: "Ahmad Rehan",
  first: "Ahmad",
  last: "Rehan",
  wordmark: "AR",
  role: "Full Stack Web Developer",
  tagline: "Designing quiet interfaces. Writing loud code.",
  email: "ahmadrehan3838@gmail.com",
  phone: "+92 334 0776122",
  phoneRaw: "923340776122",
  location: "Pasni, Balochistan, PK",
  timezone: "Asia/Karachi",
  dob: "20 October 2008",
  nationality: "Pakistani",
  languages: ["English", "Urdu", "Balochi", "Brahvi"],
  interests: ["Music", "Reading", "Traveling"],
  intro:
    "I design and develop modern, high-performance web applications with clean code, considered interfaces and seamless experiences.",
  about:
    "I am a self-taught Full Stack Web Developer from Pasni, Balochistan. I build modern, responsive and fast web applications — and I care as much about how a page feels as how it works. My current playground is the MERN stack: React for the interface, Node and Express for the server, MongoDB and Firebase for the data.",
  availability: "Open for freelance & internships",
  photo: "/ahmad.png",
  portrait: "/portrait-dots.png",
  photoCut: "/ahmad-cutout.png",
};

export const socials = [
  { label: "GitHub", short: "GH", href: "https://github.com/ahmadarehan-38" },
  { label: "LinkedIn", short: "IN", href: "https://www.linkedin.com/in/ahmad-rehan/" },
  { label: "Email", short: "@", href: "mailto:ahmadrehan3838@gmail.com" },
];

export const navLinks = [
  { label: "Index", to: "#top", num: "01" },
  { label: "About", to: "#about", num: "02" },
  { label: "Work", to: "#work", num: "03" },
  { label: "Archive", to: "#archive", num: "04" },
  { label: "Services", to: "#services", num: "05" },
  { label: "Contact", to: "#contact", num: "06" },
];

export const stats = [
  { value: 1, suffix: "+", label: "Years writing code" },
  { value: 15, suffix: "", label: "Tools in the stack" },
  { value: 5, suffix: "+", label: "Projects shipped" },
  { value: 4, suffix: "", label: "Languages spoken" },
];

export const services = [
  {
    num: "01",
    title: "Frontend Development",
    short: "Interfaces",
    text: "Pixel-disciplined, accessible interfaces built with React, modern CSS and just enough motion to feel alive — not enough to get in the way.",
    tags: ["React", "JavaScript", "CSS3"],
  },
  {
    num: "02",
    title: "Backend Development",
    short: "Servers",
    text: "Secure server-side logic with Node.js and Express — REST endpoints, authentication flows and data models that hold up in production.",
    tags: ["Node.js", "Express", "REST"],
  },
  {
    num: "03",
    title: "Database Integration",
    short: "Data",
    text: "Schema design, queries and real-time sync across MongoDB, Firebase and Supabase, wired cleanly into the front end.",
    tags: ["MongoDB", "Firebase", "Supabase"],
  },
  {
    num: "04",
    title: "Responsive Design",
    short: "Every screen",
    text: "Layouts that hold together from a 320px phone to an ultrawide display — fluid type, sensible breakpoints, no horizontal scroll surprises.",
    tags: ["Mobile first", "Fluid type"],
  },
  {
    num: "05",
    title: "UI/UX Design",
    short: "Design",
    text: "Figma wireframes to finished interfaces: clear hierarchy, honest typography and interactions that explain themselves.",
    tags: ["Figma", "Design systems"],
  },
  {
    num: "06",
    title: "Performance & Deployment",
    short: "Shipping",
    text: "Image and bundle optimisation, Lighthouse passes and deployment to Vercel with SEO and metadata done properly.",
    tags: ["Vite", "Vercel", "SEO"],
  },
];

export const projects = [
  {
    key: "bowan",
    index: "01",
    name: "Bowan",
    subtitle: "Education platform",
    description:
      "A modern education web experience built with React, Node.js, Express and MongoDB, with GSAP motion and interfaces designed in Figma.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "GSAP", "Figma"],
    category: "Web App",
    year: "2025",
    role: "Design & Development",
    url: "https://bowan.vercel.app",
    image: "/Bowan Education Logo with Book and Cap.png",
    imageAlt: "Bowan education logo",
    tone: "warm",
  },
  {
    key: "makran-blue",
    index: "02",
    name: "Makran Blue",
    subtitle: "Coastal brand site",
    description:
      "A polished, animated website made with React, Node.js, Express and MongoDB, designed in Figma and brought to life with GSAP.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "GSAP", "Figma"],
    category: "Web App",
    year: "2025",
    role: "Design & Development",
    url: "https://makran-blue.vercel.app",
    image: "/icon-192.png",
    imageAlt: "Makran Blue logo",
    tone: "cold",
  },
  {
    key: "pasni-fish",
    index: "03",
    name: "Pasni Fish",
    subtitle: "Offline desktop dashboard",
    description:
      "A desktop dashboard for managing a fishing business without an internet connection, built with React and Electron.",
    tags: ["React", "Electron", "Desktop", "Offline"],
    category: "Desktop App",
    year: "2025",
    role: "Product & Development",
    url: null,
    image: "/pasni-fish-dashboard.svg",
    imageAlt: "Illustrative dashboard preview for the Pasni Fish desktop app",
    tone: "mono",
  },
  {
    key: "facebook-clone",
    index: "04",
    name: "Facebook Clone",
    subtitle: "Interface study",
    description:
      "A reconstruction of Facebook's feed, stories and reactions — built to understand layout systems, component structure and real-time updates.",
    tags: ["React", "Firebase"],
    category: "Study",
    year: "2024",
    role: "Learning project",
    url: null,
    tone: "dark",
  },
  {
    key: "olx-clone",
    index: "05",
    name: "OLX Clone",
    subtitle: "Marketplace study",
    description:
      "A classifieds marketplace with listings, filters and a posting flow, built to practise CRUD operations and Firestore queries.",
    tags: ["React", "Firebase", "CRUD"],
    category: "Study",
    year: "2024",
    role: "Learning project",
    url: null,
    tone: "light",
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
  "React.js",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Firebase",
  "Supabase",
  "HTML5",
  "CSS3",
  "Tailwind",
  "Git",
  "GitHub",
  "Vite",
  "npm",
  "Figma",
];

export const education = [
  {
    year: "2025 — Present",
    title: "SMIT — Full Stack Web Development",
    text: "MERN Stack, React.js, JavaScript, Firebase, Node.js, Express and MongoDB.",
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

export const journey = [
  {
    step: "01",
    title: "Where it started",
    text: "In 2022 I discovered how the web works and wrote my first lines of HTML. That first page that rendered in the browser — something I built from nothing — hooked me instantly.",
  },
  {
    step: "02",
    title: "Building real projects",
    text: "I challenged myself by cloning platforms I use every day — Facebook, OLX, WhatsApp and YouTube — learning layouts, interactivity and real-time data with Firebase along the way.",
  },
  {
    step: "03",
    title: "Going full stack",
    text: "At SMIT I'm mastering the MERN stack: React for interfaces, Node.js and Express for servers, and MongoDB for data — turning static pages into complete applications.",
  },
  {
    step: "04",
    title: "What's next",
    text: "I'm freelancing, shipping client projects and pushing toward Next.js and production-grade architecture — always learning, always building.",
  },
];

export const archive = [
  ...experience.map((e) => ({ kind: "Experience", ...e })),
  ...education.map((e) => ({ kind: "Education", ...e })),
];

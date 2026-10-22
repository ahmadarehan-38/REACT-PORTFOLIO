import { useState } from "react";

import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Archive from "./components/Archive";
import Work from "./components/Work";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onDone={() => setLoading(false)} />}

      <Cursor />
      <div className="grain" aria-hidden="true" />
      <div className="scanlines" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />

      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />

        <div className="band">
          <Marquee
            reverse
            items={[
              "React",
              "Node.js",
              "Express",
              "MongoDB",
              "Firebase",
              "Figma",
              "Git",
              "Vite",
            ]}
          />
        </div>

        <About />
        <Archive />
        <Work />
        <Services />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

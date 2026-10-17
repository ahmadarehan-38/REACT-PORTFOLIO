import { useEffect, useState } from "react";
import ParticleBackground from "./components/ParticleBackground";
import ScrollProgress from "./components/ScrollProgress";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CVPage from "./pages/CVPage";

const HOME_TITLE = "Ahmad Rehan — Full Stack Developer";
const CV_TITLE = "Ahmad Rehan — CV | Full Stack Web Developer";

export default function App() {
  const [isCV, setIsCV] = useState(
    () =>
      typeof window !== "undefined" && window.location.hash === "#cv"
  );

  useEffect(() => {
    const syncFromHash = () => {
      const cv = window.location.hash === "#cv";
      setIsCV(cv);
      document.title = cv ? CV_TITLE : HOME_TITLE;
      if (cv) window.scrollTo(0, 0);
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  if (isCV) {
    return <CVPage />;
  }

  return (
    <>
      <ParticleBackground />

      <div className="aurora" aria-hidden="true">
        <span className="aurora-blob b1" />
        <span className="aurora-blob b2" />
        <span className="aurora-blob b3" />
      </div>

      <ScrollProgress />
      <Sidebar />

      <main className="layout-main">
        <Hero />
        <Marquee />
        <Projects />
        <Resume />
        <About />
        <Skills />
        <Services />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

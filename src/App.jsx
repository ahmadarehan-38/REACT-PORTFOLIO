import ParticleBackground from "./components/ParticleBackground";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <ParticleBackground />

      <div className="aurora" aria-hidden="true">
        <span className="aurora-blob b1" />
        <span className="aurora-blob b2" />
        <span className="aurora-blob b3" />
      </div>

      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <Projects />
        <Resume />
        <About />
        <Skills />
        <Services />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

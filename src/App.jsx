import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero3D from "./components/Hero3D";
import About from "./components/About";
import Skills3D from "./components/Skills3D";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      className="fixed top-0 left-0 w-[3px] h-full bg-gradient-to-b from-primary via-accent to-primary-light origin-top z-[60]"
      style={{ scaleY }}
    />
  );
}

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-surface text-text-primary selection:bg-primary/20 selection:text-white">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero3D />
        <About />
        <Skills3D />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

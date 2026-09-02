import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import About from './components/About';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';
import Hero from './components/Hero';
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import Process from './components/Process';
import Projects from './components/Projects';
import ScrollProgress from './components/ScrollProgress';
import Services from './components/Services';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 950);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
      <ScrollProgress />
      <CustomCursor />
      <div className="noise-overlay" />
      <div className="mouse-glow" />
      <Navigation />
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.15 }}>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Process />
        <Skills />
        <Testimonials />
        <Achievements />
        <Contact />
      </motion.main>
      <Footer />
    </>
  );
}

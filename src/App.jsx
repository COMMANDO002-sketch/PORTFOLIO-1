import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import GridBackground from './components/GridBackground.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import BackToTop from './components/BackToTop.jsx';
import Intro from './components/Intro.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Marquee from './components/Marquee.jsx';
import ProjectDetail from './components/ProjectDetail.jsx';
import Showcase from './components/Showcase.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const params = new URLSearchParams(window.location.search);
  const [intro, setIntro] = useState(params.get('intro') !== 'false');
  const [detailOpen, setDetailOpen] = useState(false);

  const openProject = () => {
    setDetailOpen(true);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const closeProject = () => {
    setDetailOpen(false);
    setTimeout(() => {
      document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
    }, 60);
  };

  return (
    <div className="relative min-h-screen bg-bg text-text">
      <GridBackground />
      <ScrollProgress />
      {intro && <Intro onDone={() => setIntro(false)} />}

      <Navbar enabled={!intro} />

      <div className="relative z-10">
        <Hero ready={!intro} />

        {detailOpen ? (
          <AnimatePresence mode="wait">
            <ProjectDetail key="detail" onClose={closeProject} />
          </AnimatePresence>
        ) : (
          <>
            <Marquee />
            <About onOpenProject={openProject} />
            <Showcase onOpenProject={openProject} />
            <Contact />
            <Footer />
          </>
        )}
      </div>
      <BackToTop />
    </div>
  );
}
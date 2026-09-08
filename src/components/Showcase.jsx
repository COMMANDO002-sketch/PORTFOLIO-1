import { useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { showcaseCategories, projects, certificates, techStack } from '../data/config.jsx';
import techIcons from './TechIcons.jsx';
import GlowCard from './GlowCard.jsx';
import LazyImage from './LazyImage.jsx';
import { ArrowRightIcon } from './Icons.jsx';
import { fadeUp, stagger } from '../data/motion.js';

function CertificateTab() {
  const cert = certificates[0];
  return (
    <motion.div
      key="cert"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -12, transition: { duration: 0.25, ease: 'easeIn' } }}
      variants={stagger}
      className="flex justify-center"
    >
      <motion.div
        variants={fadeUp}
        className="w-full max-w-xl rounded-3xl border border-line-soft bg-card p-4"
      >
        <div className="overflow-hidden rounded-2xl border border-line bg-[#0a0a0a]">
          <LazyImage
            src="/images/certificate.svg"
            alt={cert.title}
            className="aspect-[4/3] w-full object-cover"
            skeletonClassName="aspect-[4/3]"
          />
        </div>
        <p className="mt-5 text-center font-mono text-[11px] tracking-[0.2em] text-muted">
          {cert.title}
        </p>
      </motion.div>
    </motion.div>
  );
}

function TechStackTab() {
  return (
    <motion.div
      key="tech"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -12, transition: { duration: 0.25, ease: 'easeIn' } }}
      variants={stagger}
      className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
    >
      {techStack.map((tech) => {
        const Icon = techIcons[tech.icon];
        return (
          <motion.div
            key={tech.name}
            variants={fadeUp}
            className="group"
          >
            <GlowCard className="h-full rounded-2xl">
              <div className="flex h-full flex-col items-center gap-4 rounded-2xl border border-line-soft bg-card px-4 py-7 transition-colors duration-300 hover:border-white/20">
                <span className="transition-transform duration-300 group-hover:scale-110">
                  <Icon />
                </span>
                <span className="font-mono text-[11px] tracking-wide text-muted">{tech.name}</span>
              </div>
            </GlowCard>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

function ProjectsTab({ onOpenProject }) {
  const project = projects[0];
  return (
    <motion.div
      key="projects"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -12, transition: { duration: 0.25, ease: 'easeIn' } }}
      variants={stagger}
      className="flex justify-center"
    >
      <motion.article
        variants={fadeUp}
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        className="group w-full max-w-2xl overflow-hidden rounded-3xl border border-line-soft bg-card transition-colors duration-300 hover:border-white/20"
      >
        <div className="grid md:grid-cols-[260px_1fr]">
          <div
            className="relative min-h-[200px] border-b border-line-soft md:border-b-0 md:border-r"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          >
            <div className="flex h-full flex-col justify-center px-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="mb-3 h-1.5 w-16 rounded-full bg-white/[0.07]"
              />
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="h-8 w-36 rounded-md bg-white/15"
              />
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.55, duration: 0.5 }}
                className="mt-1.5 h-8 w-24 rounded-md bg-white/[0.07]"
              />
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.5 }}
                className="mt-5 h-1.5 w-32 rounded-full bg-white/[0.05]"
              />
            </div>
          </div>
          <div className="flex flex-col p-7">
            <motion.h3
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="font-display text-2xl font-bold tracking-tight text-text"
            >
              {project.title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-3 text-sm font-light leading-relaxed text-muted"
            >
              {project.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-5 flex flex-wrap gap-2"
            >
              {project.technologies.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.35 }}
                  className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] text-faint"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
            <motion.button
              onClick={onOpenProject}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              whileHover={{ gap: '0.75rem' }}
              className="mt-6 inline-flex items-center gap-2 self-start rounded-lg border border-white/15 px-5 py-2.5 text-xs font-medium text-text transition-colors duration-300 hover:border-white/35 hover:bg-white/[0.03]"
            >
              View Project
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowRightIcon size={14} />
              </motion.span>
            </motion.button>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}

export default function Showcase({ onOpenProject }) {
  const [active, setActive] = useState('projects');
  const tabsRef = useRef([]);

  const switchBy = (dir) => {
    setActive((prev) => {
      const idx = showcaseCategories.findIndex((c) => c.id === prev);
      const next = (idx + dir + showcaseCategories.length) % showcaseCategories.length;
      tabsRef.current[next]?.focus();
      return showcaseCategories[next].id;
    });
  };

  return (
    <section id="portfolio" className="relative py-28">
      <div className="mx-auto w-full max-w-6xl px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 flex flex-col items-center text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-[40px] font-bold tracking-tight text-text md:text-[50px]"
          >
            Portfolio Showcase
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="mt-5 h-px w-40 origin-center bg-gradient-to-r from-transparent via-accent to-transparent"
          />
          <motion.p variants={fadeUp} className="mt-4 max-w-md text-sm font-light text-muted">
            Explore my journey through projects, certifications, and technical expertise.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mb-12 flex justify-center"
        >
          <div className="flex rounded-full border border-line bg-[#0b0b0b] p-1.5">
            {showcaseCategories.map((cat) => {
              const isActive = active === cat.id;
              return (
                <button
                  key={cat.id}
                  ref={(el) => (tabsRef.current[showcaseCategories.findIndex((c) => c.id === cat.id)] = el)}
                  onClick={() => setActive(cat.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowRight') switchBy(1);
                    if (e.key === 'ArrowLeft') switchBy(-1);
                  }}
                  aria-pressed={isActive}
                  className={`relative rounded-full px-7 py-2.5 font-mono text-[11px] tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent ${
                    isActive ? 'text-text' : 'text-faint hover:text-muted'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="showcase-pill"
                      className="absolute inset-0 rounded-full bg-white/[0.09] ring-1 ring-white/10"
                      transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        <div className="min-h-[360px]">
          <AnimatePresence mode="wait">
            {active === 'certificates' && <CertificateTab />}
            {active === 'techstack' && <TechStackTab />}
            {active === 'projects' && <ProjectsTab onOpenProject={onOpenProject} />}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
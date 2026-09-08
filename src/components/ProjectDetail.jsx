import { motion } from 'framer-motion';
import { projects } from '../data/config.jsx';
import { ArrowRightIcon, SearchIcon } from './Icons.jsx';
import { EASE_OUT, fadeUp, stagger } from '../data/motion.js';

function PortfolioPreview() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-[#050505]">
      <div className="flex items-center gap-2 border-b border-line-soft bg-[#0c0c0c] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/60" />
        <div className="ml-2 flex flex-1 items-center gap-1.5 rounded-md border border-line bg-[#0a0a0a] px-3 py-1 font-mono text-[9px] text-faint">
          <SearchIcon size={9} />
          www.adeniranpatrick.com
        </div>
      </div>
      <div
        className="relative h-[300px] w-full"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      >
        <div className="flex h-full flex-col justify-center px-8">
          <div className="mb-3 h-2 w-24 rounded-full bg-white/[0.06]" />
          <div className="h-7 w-44 rounded-md bg-white/15" />
          <div className="mt-1.5 h-7 w-32 rounded-md bg-white/[0.08]" />
          <div className="mt-5 h-2 w-52 rounded-full bg-white/[0.05]" />
          <div className="mt-2 h-2 w-40 rounded-full bg-white/[0.05]" />
          <div className="mt-6 flex gap-2">
            <div className="h-5 w-16 rounded-full bg-white/[0.07]" />
            <div className="h-5 w-16 rounded-full bg-white/[0.05]" />
            <div className="h-5 w-16 rounded-full bg-white/[0.05]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectDetail({ onClose }) {
  const project = projects[0];

  const infoItems = [
    { value: `${project.techCount}`, label: 'Technologies Used' },
    { value: `${project.featureCount}`, label: 'Key Features' },
  ];

  return (
    <motion.section
      className="relative min-h-screen py-28"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ...EASE_OUT }}
    >
      <div className="mx-auto w-full max-w-6xl px-8">
        <motion.button
          onClick={onClose}
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 inline-flex items-center gap-2 font-mono text-[12px] tracking-wide text-faint transition-colors duration-300 hover:text-text"
        >
          <ArrowRightIcon size={14} className="rotate-180" />
          Back
        </motion.button>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-display text-[42px] font-bold tracking-tight text-text md:text-[52px]"
        >
          {project.title}
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="mt-6 h-px origin-left bg-white/10"
        />

        <div className="mt-10 grid gap-14 md:grid-cols-[1fr_460px]">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            <motion.p
              variants={fadeUp}
              className="max-w-lg text-[15px] font-light leading-relaxed text-muted"
            >
              {project.description}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 grid w-full max-w-md grid-cols-2 gap-4">
              {infoItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-line-soft bg-card px-5 py-4"
                >
                  <p className="font-display text-xl font-bold text-text">{item.value}</p>
                  <p className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-faint">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <span
                  key={link.label}
                  className="rounded-lg border border-white/10 px-5 py-2 font-mono text-[11px] text-faint"
                >
                  {link.label}
                </span>
              ))}
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-10 font-mono text-[10px] uppercase tracking-[0.25em] text-faint"
            >
              Technologies Used
            </motion.p>
            <motion.div variants={fadeUp} className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-1.5 font-mono text-[11px] text-muted"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeUp}>
              <PortfolioPreview />
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-line-soft bg-card px-7 py-6"
            >
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-faint">
                Key Features
              </p>
              <ul className="flex flex-col gap-3">
                {project.features.map((feature, i) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 font-mono text-[12px] tracking-wide text-muted"
                  >
                    <span className="mt-0.5 text-accent">0{i + 1}</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
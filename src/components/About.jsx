import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { personalInfo } from '../data/config.jsx';
import GlowCard from './GlowCard.jsx';
import LazyImage from './LazyImage.jsx';
import Magnetic from './Magnetic.jsx';
import Tilt from './Tilt.jsx';
import CountUp from './CountUp.jsx';
import {
  ArrowRightIcon,
  ArrowDownIcon,
  AwardIcon,
  CheckCircleIcon,
  DownloadIcon,
  FolderIcon,
} from './Icons.jsx';
import { fadeUp, stagger } from '../data/motion.js';

const statIcons = {
  folder: FolderIcon,
  award: AwardIcon,
  check: CheckCircleIcon,
};

const stats = [
  { number: 1, label: 'Projects', icon: 'folder' },
  { number: 1, label: 'Certificates', icon: 'award' },
  { number: 1, label: 'Completed Works', icon: 'check' },
];

export default function About({ onOpenProject }) {
  const [cvOpen, setCvOpen] = useState(false);
  const { scrollY } = useScroll();
  const yPortrait = useTransform(scrollY, [0, 800], [0, 60]);
  return (
    <>
    <section id="about" className="relative py-28">
      <div className="mx-auto w-full max-w-6xl px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid items-start gap-16 md:grid-cols-[1fr_420px]"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="mb-5 font-mono text-[10px] tracking-[0.3em] text-faint"
            >
              {personalInfo.aboutLabel}
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="font-display text-[52px] font-bold leading-[0.98] tracking-tight text-text md:text-[64px]"
            >
              {personalInfo.name.split(' ').map((word, i) => (
                <span key={i} className="block">
                  {word}
                </span>
              ))}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-lg text-[15px] font-light leading-relaxed text-muted"
            >
              {personalInfo.aboutText}
            </motion.p>

            <motion.blockquote
              variants={fadeUp}
              className="mt-9 max-w-lg rounded-2xl border border-line-soft bg-card px-7 py-6"
            >
              <p className="text-[15px] font-light italic leading-relaxed text-muted">
                “{personalInfo.quote}”
              </p>
            </motion.blockquote>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
              <Magnetic>
                <button
                  type="button"
                  onClick={() => setCvOpen(true)}
                  className="inline-flex items-center gap-2 rounded-xl bg-text px-6 py-3 text-sm font-medium text-bg transition-all duration-300 hover:bg-white"
                >
                  <DownloadIcon size={15} />
                  Download CV
                </button>
              </Magnetic>
              <Magnetic>
                <button
                  onClick={() => onOpenProject()}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm font-medium text-text transition-all duration-300 hover:border-white/35 hover:bg-white/[0.03]"
                >
                  View Projects
                  <ArrowRightIcon size={14} />
                </button>
              </Magnetic>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="relative mx-auto hidden"
            aria-hidden="true"
          >
            <div
              className="absolute -right-10 top-16 h-px w-24 bg-gradient-to-l from-white/30 to-transparent"
              aria-hidden
            />
            <motion.div style={{ y: yPortrait }}>
              <div className="relative">
                <div
                  className="pointer-events-none absolute -inset-6 rounded-full border border-white/[0.04]"
                  aria-hidden
                />
                <Tilt max={5} className="rounded-full">
                  <div className="relative h-[380px] w-[380px] overflow-hidden rounded-full border border-white/20 bg-[#0d0d0d] shadow-[0_0_90px_rgba(255,255,255,0.06)]">
                    <LazyImage
                      src="/images/portrait.jpg"
                      alt={personalInfo.name}
                      className="h-full w-full object-cover grayscale contrast-[1.08]"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-full border border-white/5" />
                  </div>
                </Tilt>
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
                  className="float-slow absolute -bottom-2 left-6 rounded-xl border border-line-soft bg-card px-4 py-3 shadow-lg"
                >
                  <p className="font-mono text-[10px] tracking-widest text-faint">ROLE</p>
                  <p className="mt-1 font-display text-sm font-bold text-text">Frontend Dev</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {cvOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]/90 p-6 backdrop-blur-sm"
            onClick={() => setCvOpen(false)}
          >
            <div className="relative max-h-[90vh] max-w-[90vw]">
              <button
                type="button"
                onClick={() => setCvOpen(false)}
                className="absolute -top-4 -right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#0a0a0a] text-lg text-text shadow-lg transition-colors duration-300 hover:border-white/30"
                aria-label="Close CV preview"
              >
                ×
              </button>
              <img
                src="/images/image.png"
                alt="CV preview"
                className="max-h-[90vh] w-auto max-w-[90vw] rounded-2xl border border-white/10 object-contain shadow-[0_30px_100px_rgba(0,0,0,0.8)]"
              />
            </div>
          </motion.div>
        )}

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-20 grid gap-5 sm:grid-cols-3"
        >
          {stats.map((stat) => {
            const Icon = statIcons[stat.icon];
            return (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="group"
              >
                <GlowCard className="h-full rounded-2xl">
                  <div className="flex items-center gap-5 rounded-2xl border border-line-soft bg-card px-6 py-6 transition-colors duration-300 hover:border-white/20">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#141414] text-muted transition-colors duration-300 group-hover:text-text">
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className="font-display text-2xl font-bold text-text">
                        <CountUp value={stat.number} />
                      </p>
                      <p className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-faint">
                        {stat.label}
                      </p>
                    </div>
                    <ArrowDownIcon size={14} className="ml-auto -rotate-90 text-faint transition-colors duration-300 group-hover:text-muted" />
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
    </>
  );
}
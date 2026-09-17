import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { personalInfo, heroTags } from '../data/config.jsx';
import Tilt from './Tilt.jsx';
import { ArrowDownIcon } from './Icons.jsx';
import { EASE_OUT, fadeUp, stagger } from '../data/motion.js';

const roles = ['DEVELOPER', 'PROBLEM SOLVER', 'TRAININGS'];

function TypingRole() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    let timeout;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            isDeleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1)
          );
        },
        isDeleting ? 40 : 80
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <>
      <span className="text-gradient">{text}</span>
      <span className="animate-pulse text-cyan">|</span>
    </>
  );
}

export default function Hero({ ready }) {
  const { scrollY } = useScroll();
  const yPortrait = useTransform(scrollY, [0, 700], [0, 70]);
  const yText = useTransform(scrollY, [0, 700], [0, -40]);

  return (
    <section id="home" className="hero-surface relative flex min-h-screen items-center overflow-hidden pt-32 pb-24">
      <div className="hero-aura" aria-hidden="true" />
      <div className="relative z-[1] mx-auto grid w-full max-w-6xl items-center gap-6 px-8 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={ready ? 'visible' : 'hidden'}
            className="flex flex-col items-start"
            style={{ y: yText }}
          >
            <motion.p
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-electric/25 bg-navy/60 px-3.5 py-1.5 font-mono text-[10px] tracking-[0.25em] text-white/80 shadow-[0_0_24px_-8px_rgba(37,99,255,0.55)] backdrop-blur-md"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse shadow-[0_0_10px_rgba(0,217,255,0.8)]" />
              {personalInfo.status}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-display text-[64px] font-bold leading-[0.95] tracking-tight text-text md:text-[84px]"
            >
              <span className="block text-text">Frontend</span>
              <span className="block"><TypingRole /></span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-7 text-sm uppercase tracking-[0.3em] text-faint">
              {personalInfo.subtitle}
            </motion.p>

            <motion.p variants={fadeUp} className="mt-4 max-w-md text-[15px] font-light leading-relaxed text-muted">
              {personalInfo.description}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-2">
              {heroTags.map((tag) => (
                <span
                  key={tag}
                  className="badge-tech rounded-full border px-4 py-1.5 font-mono text-[11px] cursor-default"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-1.5 font-mono text-[11px] leading-relaxed text-faint">
              <span>/ {personalInfo.exploreText}</span>
              <span>/ {personalInfo.availabilityText}</span>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40, rotate: 1.2 }}
          animate={ready ? { opacity: 1, x: 0, rotate: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.45, ...EASE_OUT }}
          className="relative flex justify-center md:justify-end"
        >
          <motion.div style={{ y: yPortrait }} className="relative">
            <div
              className="absolute -top-20 right-8 h-28 w-px bg-gradient-to-b from-transparent via-cyan/50 to-white/20"
              aria-hidden
            />
            <Tilt max={6}>
              <div className="relative rounded-[27px] bg-gradient-to-tr from-electric via-cyan to-violet p-[1.5px] shadow-[0_30px_80px_rgba(0,0,0,0.6),0_0_70px_-14px_rgba(37,99,255,0.5),0_0_40px_-16px_rgba(0,217,255,0.35)]">
                <div className="relative h-[460px] w-[330px] overflow-hidden rounded-[26px] bg-[#0a0a0a]">
                  <img
                    src="/images/portrait.jpg"
                    alt={personalInfo.name}
                    className="h-full w-full object-cover grayscale contrast-[1.08]"
                    loading="eager"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-[26px] border border-white/10" />
                  <div className="pointer-events-none absolute inset-0 rounded-[26px] bg-gradient-to-t from-[#050505]/50 via-transparent to-transparent" />
                </div>
              </div>
            </Tilt>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={ready ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.2, ...EASE_OUT }}
              className="gradient-card float-slow absolute -bottom-4 -left-6 rounded-xl border border-electric/20 px-4 py-3 shadow-[0_0_24px_-10px_rgba(37,99,255,0.5)]"
            >
              <p className="font-mono text-[10px] tracking-widest text-faint">YEARS EXP</p>
              <p className="mt-1 font-display text-xl font-bold text-text">1+</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={ready ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.35, ...EASE_OUT }}
              className="gradient-card float-slower absolute -right-5 top-10 rounded-xl border border-electric/20 px-4 py-3 shadow-[0_0_24px_-10px_rgba(37,99,255,0.5)]"
            >
              <div className="flex items-center gap-2">
                <motion.span
                  className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_10px_rgba(0,217,255,0.8)]"
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                />
                <p className="font-mono text-[10px] tracking-widest text-muted">AVAILABLE</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-faint"
      >
        SCROLL
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="text-cyan"
        >
          <ArrowDownIcon size={12} />
        </motion.span>
      </motion.div>
    </section>
  );
}

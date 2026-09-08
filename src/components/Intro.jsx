import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/config.jsx';
import { CodeIcon, UserIcon, GlobeIcon } from './Icons.jsx';
import { EASE_OUT, fadeIn, fadeUp } from '../data/motion.js';

const introIcons = [
  { Icon: CodeIcon },
  { Icon: UserIcon },
  { Icon: GlobeIcon },
];

export default function Intro({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 3600);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut', delay: 2.6 }}
      onAnimationComplete={() => onDone()}
    >
      <motion.div
        className="flex items-center gap-6"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.18 } },
        }}
        initial="hidden"
        animate="visible"
      >
        {introIcons.map(({ Icon }, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, scale: 0.5, y: 20 },
              visible: {
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { duration: 0.7, ...EASE_OUT },
              },
            }}
            className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#0d0d0d] text-muted"
          >
            <Icon size={22} />
          </motion.div>
        ))}
      </motion.div>

      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.9, delay: 0.8, ...EASE_OUT }}
        className="mt-10 text-center font-display text-3xl font-semibold leading-tight tracking-tight text-text md:text-4xl"
      >
        Welcome to my
        <br />
        Portfolio Website
      </motion.h1>

      <motion.p
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.9, delay: 1.7, ...EASE_OUT }}
        className="mt-6 font-mono text-xs tracking-widest text-faint"
      >
        {personalInfo.url}
      </motion.p>
    </motion.div>
  );
}
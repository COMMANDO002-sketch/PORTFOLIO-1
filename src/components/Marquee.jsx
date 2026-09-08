import { motion } from 'framer-motion';
import { techStack } from '../data/config.jsx';
import { fadeIn } from '../data/motion.js';

function MarqueeGroup({ copyId }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={copyId === 1}>
      {techStack.map((tech) => (
        <span key={`${copyId}-${tech.name}`} className="flex items-center">
          <span className="whitespace-nowrap px-10 font-mono text-[11px] uppercase tracking-[0.35em] text-faint transition-colors duration-300 hover:text-muted">
            {tech.name}
          </span>
          <span className="text-accent/40">✦</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="relative overflow-hidden border-y border-white/[0.05] bg-white/[0.015] py-6 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]"
    >
      <div className="marquee-track">
        <MarqueeGroup copyId={0} />
        <MarqueeGroup copyId={1} />
      </div>
    </motion.div>
  );
}
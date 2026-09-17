import { motion } from 'framer-motion';
import { personalInfo } from '../data/config.jsx';
import { fadeIn } from '../data/motion.js';

export default function Footer() {
  return (
    <motion.footer
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="site-footer relative py-10"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-3 px-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-electric/30 to-transparent" />
        <p className="pt-4 text-center font-mono text-[11px] tracking-wide text-muted">
          © 2026 {personalInfo.footer} — All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
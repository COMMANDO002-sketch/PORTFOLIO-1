import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownIcon } from './Icons.jsx';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-line-soft bg-[#0a0a0a]/90 text-muted backdrop-blur-md transition-colors duration-300 hover:border-white/20 hover:text-text"
          aria-label="Back to top"
        >
          <ArrowDownIcon size={14} className="-rotate-90" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

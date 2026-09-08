import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function Magnetic({ children, strength = 0.25, className = '' }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    if (e.pointerType !== 'mouse') return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = 'translate(0, 0)';
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={className}
      style={{
        display: 'inline-block',
        transition: 'transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
        willChange: 'transform',
      }}
    >
      {children}
    </motion.div>
  );
}
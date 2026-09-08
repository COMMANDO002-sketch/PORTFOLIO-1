import { useRef, useState } from 'react';

export default function GlowCard({ children, className = '', ...props }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      <div
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 transition-opacity duration-500"
        style={{
          left: pos.x,
          top: pos.y,
          width: 280,
          height: 280,
          background: 'radial-gradient(circle, rgba(77,141,255,0.07) 0%, transparent 70%)',
          opacity: active ? 1 : 0,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, personalInfo } from '../data/config.jsx';

function MenuIcon({ open }) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {open ? (
        <>
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="6" y1="18" x2="18" y2="6" />
        </>
      ) : (
        <>
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="4" y1="12" x2="16" y2="12" />
          <line x1="4" y1="17" x2="12" y2="17" />
        </>
      )}
    </svg>
  );
}

export default function Navbar({ enabled }) {
  const [active, setActive] = useState('#home');
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = useCallback((event, href) => {
    event.preventDefault();
    setMobileOpen(false);
    const targetId = href.startsWith('#') ? href : `#${href}`;
    setActive(targetId);

    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', targetId);
      return;
    }

    window.location.hash = targetId;
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const ids = navLinks.map((l) => l.href.slice(1));
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [enabled]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileOpen) setMobileOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className={`fixed inset-x-0 top-5 z-50 flex justify-center px-6 transition-opacity duration-500 ${
          enabled ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex w-full max-w-[860px] items-center justify-between rounded-full border border-line-soft bg-[#0a0a0a]/80 py-2 pl-6 pr-2 shadow-[0_10px_40px_rgba(0,0,0,0.6)] backdrop-blur-md">
          <a href="#home" className="font-mono text-sm text-muted transition-colors duration-300 hover:text-text">
            {personalInfo.brand}
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link.href)}
                  className={`relative rounded-full px-5 py-2 font-mono text-[11px] tracking-wide transition-colors duration-300 ${
                    isActive ? 'text-text' : 'text-faint hover:text-muted'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-4 bottom-0 h-px bg-accent"
                      transition={{ type: 'spring', stiffness: 300, damping: 34 }}
                    />
                  )}
                  {link.label}
                </a>
              );
            })}
          </nav>

          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-muted transition-colors duration-300 hover:text-text md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <MenuIcon open={mobileOpen} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-lg md:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-full flex-col items-center justify-center gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              {navLinks.map((link, i) => {
                const isActive = active === link.href;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(event) => handleNavClick(event, link.href)}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className={`rounded-full px-8 py-3 font-mono text-sm tracking-wide transition-colors duration-300 ${
                      isActive ? 'text-accent' : 'text-faint hover:text-muted'
                    }`}
                  >
                    {link.label}
                  </motion.a>
                );
              })}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

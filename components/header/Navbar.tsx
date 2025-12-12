"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
  isScrolled?: boolean;
};

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar({ isScrolled = false }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [scrolled, setScrolled] = useState(isScrolled);

  useEffect(() => {
    const sections = navItems.map((item) => item.href.replace('#', ''));
    const handler = () => {
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      setActiveSection(current ?? '');
      setScrolled(window.scrollY > 50);
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const headerBg = scrolled 
    ? 'bg-primary-dark/90 backdrop-blur-md border-b border-surface-border shadow-lg' 
    : 'bg-transparent';

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${headerBg}`}>
      <div className="section-container flex items-center justify-between py-4">
        {/* Logo/Name */}
        <a 
          href="/" 
          className="text-lg font-bold text-text-primary hover:text-accent-lavender transition-colors duration-150"
        >
          Gourav Mukherjee
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6">
          {navItems.map((item, i) => (
            <motion.a
              key={item.href}
              className={`nav-link ${activeSection === item.href.replace('#', '') ? 'active text-text-primary' : ''}`}
              href={item.href}
              aria-current={activeSection === item.href.replace('#', '') ? 'page' : undefined}
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { delay: 0.05 * i, duration: 0.3 } }}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-accent-primary/40 bg-transparent px-3 py-2 text-text-secondary hover:border-accent-primary hover:text-text-primary transition-all duration-200"
          onClick={() => setMobileMenuOpen(true)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Drawer */}
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 right-0 z-50 w-80 max-w-[85vw] bg-surface-secondary border-l border-surface-border p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-lg font-semibold text-text-primary">Menu</span>
                <button 
                  type="button" 
                  className="inline-flex items-center justify-center rounded-lg p-2 text-text-secondary hover:text-text-primary hover:bg-surface-tertiary transition-all duration-200" 
                  onClick={() => setMobileMenuOpen(false)} 
                  aria-label="Close menu"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav>
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <a 
                        className="block rounded-lg px-4 py-3 text-base font-medium text-text-secondary hover:text-text-primary hover:bg-surface-tertiary transition-all duration-200" 
                        href={item.href} 
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;

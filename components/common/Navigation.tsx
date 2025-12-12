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

export function Navigation({ isScrolled = false }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  // Active section detection with Intersection Observer
  useEffect(() => {
    const sections = navItems.map((item) => item.href.replace('#', ''));
    
    const observerOptions = {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Header styling based on scroll
  const headerClasses = isScrolled 
     ? 'bg-primary/95 backdrop-blur-md border-b border-accent-white/20 shadow-lg shadow-black/20'
    : 'bg-transparent';

  const scrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${headerClasses}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between sm:h-16">
          {/* Logo/Branding Area */}
          <button 
            type="button"
            onClick={scrollToTop}
            className="group flex flex-col transition-all text-left"
          >
            <span className="text-lg font-bold leading-tight tracking-tight text-accent-white transition-colors duration-200 group-hover:text-accent-white sm:text-xl">
              Gourav Mukherjee
            </span>
            <span className="text-[0.75rem] leading-tight text-[#8b8b8b] font-normal transition-colors duration-200 group-hover:text-text-secondary">
              CS & Linguistics at SJSU
            </span>
          </button>

          {/* Desktop Navigation - Centered */}
          <nav 
            aria-label="Main navigation" 
            className="absolute left-1/2 hidden -translate-x-1/2 lg:flex lg:items-center lg:gap-8"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="group relative py-2 text-sm font-medium transition-colors duration-300 ease-in-out"
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className={`transition-colors duration-300 ease-in-out ${
                      isActive ? 'text-accent-white' : 'text-text-muted group-hover:text-accent-white'
                  }`}>
                    {item.label}
                  </span>
                  
                  {/* Underline animation - expands from center */}
                  <span 
                    className={`absolute bottom-0 left-1/2 h-0.5 bg-accent-white transition-all duration-200 ease-out origin-center -translate-x-1/2 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Mobile/Tablet Hamburger Menu Button */}
          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            className="inline-flex items-center justify-center rounded-md p-2 text-text-muted transition-colors duration-200 hover:bg-white/10 hover:text-accent-white focus:outline-none focus:ring-2 focus:ring-accent-white lg:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            {/* Hamburger Icon */}
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Slide-in Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer Panel - Slide from LEFT */}
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.25, ease: 'easeInOut' }}
              className="fixed inset-y-0 left-0 z-50 w-80 max-w-full bg-primary/95 shadow-2xl backdrop-blur-md"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b border-accent-white/20 p-6">
                <div className="flex flex-col">
                    <span className="text-lg font-bold text-accent-white">Gourav Mukherjee</span>
                    <span className="text-xs text-text-muted">Student @ SJSU</span>
                </div>
                <button
                  type="button"
                    className="rounded-md p-2 text-text-muted transition-colors duration-200 hover:bg-white/10 hover:text-accent-white focus:outline-none focus:ring-2 focus:ring-accent-white"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  {/* Close Icon (X) */}
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links - Vertical Stack */}
              <nav className="p-6">
                <ul className="space-y-1">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.href.replace('#', '');
                    return (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          className={`block rounded-md px-4 py-3 text-base font-medium transition-all duration-200 ${
                              isActive
                                ? 'bg-surface text-accent-white border-2 border-accent-white'
                                : 'text-text-secondary hover:bg-white/5 hover:text-accent-white'
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navigation;

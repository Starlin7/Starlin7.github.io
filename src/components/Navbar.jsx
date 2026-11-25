import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();

    // 1. Immediately close the mobile menu state
    setMobileOpen(false);

    // 2. Locate target element
    const target = document.querySelector(href);
    if (!target) return;

    // 3. Calculate target scroll offset (64px mobile navbar, 80px desktop)
    const isMobile = window.innerWidth < 768;
    const navOffset = isMobile ? 64 : 80;

    if (href === '#home') {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50);
      return;
    }

    const currentScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
    const elementRect = target.getBoundingClientRect();
    const targetY = Math.max(0, elementRect.top + currentScrollY - navOffset);

    // 4. Defer scrolling by 50ms so the mobile menu exit animation
    // does not cancel or interrupt the browser's smooth scroll queue
    setTimeout(() => {
      window.scrollTo({
        top: targetY,
        behavior: 'smooth',
      });
    }, 50);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-navy/95 backdrop-blur-md shadow-lg shadow-black/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#home"
            onClick={(e) => handleClick(e, '#home')}
            className="text-lg sm:text-xl font-bold text-white hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Starlin <span className="gradient-text">Pereira</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleClick(e, href)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeSection === href.slice(1)
                    ? 'text-cyan bg-white/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="md:hidden bg-navy-light/95 backdrop-blur-md border-t border-white/10 max-h-[calc(100vh-4.5rem)] overflow-y-auto overscroll-contain"
          >
            <div className="container-custom py-4 space-y-1">
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleClick(e, href)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all cursor-pointer touch-manipulation ${
                    activeSection === href.slice(1)
                      ? 'text-cyan bg-white/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5 active:bg-white/10'
                  }`}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

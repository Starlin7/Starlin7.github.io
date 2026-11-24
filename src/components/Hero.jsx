import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FolderOpen, Mail, Download } from 'lucide-react';
import HeroVisual from './HeroVisual';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-navy overflow-hidden flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-electric/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy-light/50 via-navy to-navy" />
      </div>

      <div className="container-custom relative z-10 py-20 md:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-cyan font-medium mb-4 tracking-wide"
            >
              Hello, I'm
            </motion.p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Starlin{' '}
              <span className="gradient-text">Pereira</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 font-medium">
              Data Analyst | SQL | Python | Power BI | Excel
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-lg">
              Turning Data into Insights. Building Clarity Through Analytics.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">
                <FolderOpen size={18} />
                View My Projects
              </a>
              <a href="#contact" className="btn-outline-white">
                <Mail size={18} />
                Contact Me
              </a>
              <a
                href="/assets/Starlin_Pereira_Resume.pdf"
                download="Starlin_Pereira_Resume.pdf"
                className="btn-outline-white"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="hidden lg:flex justify-center"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-cyan transition-colors"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  );
}

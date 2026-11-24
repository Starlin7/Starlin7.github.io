import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FolderOpen, Mail, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-navy overflow-hidden flex items-center pt-24 pb-16 lg:py-0">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-electric/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy-light/50 via-navy to-navy" />
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-cyan font-medium mb-3 sm:mb-4 tracking-wide"
            >
              Hello, I'm
            </motion.p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Starlin{' '}
              <span className="gradient-text">Pereira</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-5 font-medium">
              Data Analyst | SQL | Python | Power BI | Excel
            </p>
            <p className="text-gray-400 text-base sm:text-lg mb-8 leading-relaxed max-w-xl">
              Turning Data into Insights. Building Clarity Through Analytics.
            </p>

            <div className="flex flex-wrap gap-3.5 sm:gap-4">
              <a href="#projects" className="btn-primary">
                <FolderOpen size={18} />
                <span>View My Projects</span>
              </a>
              <a href="#contact" className="btn-outline-white">
                <Mail size={18} />
                <span>Contact Me</span>
              </a>
              <a
                href="/assets/Starlin_Pereira_Resume.pdf"
                download="Starlin_Pereira_Resume.pdf"
                className="btn-outline-white"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>

          {/* Right Profile Photograph */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative group max-w-xs sm:max-w-sm w-full flex justify-center">
              {/* Soft Ambient Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-electric via-cyan to-blue-500 rounded-3xl blur-2xl opacity-35 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />

              {/* Gradient Border Frame */}
              <div className="relative p-1 rounded-3xl bg-gradient-to-tr from-electric via-cyan/70 to-blue-500/50 shadow-2xl shadow-black/40">
                <div className="relative w-56 sm:w-64 md:w-72 lg:w-80 aspect-[3/4] rounded-[22px] overflow-hidden bg-navy-light">
                  <img
                    src="/assets/starlin-pereira.jpg"
                    alt="Starlin Pereira – Data Analyst"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />
                  {/* Subtle Inner Edge Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-cyan transition-colors"
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

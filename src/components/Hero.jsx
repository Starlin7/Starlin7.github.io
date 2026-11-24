import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FolderOpen, Mail, Download, BarChart3, Database } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-navy overflow-hidden flex items-center pt-28 pb-20 lg:py-0">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-10 w-72 h-72 bg-electric/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan/15 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy-light/60 via-navy to-navy" />
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 order-2 lg:order-1 text-center lg:text-left"
          >
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric/10 border border-cyan/30 text-cyan text-xs sm:text-sm font-medium mb-5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
              <span>Hello, I'm</span>
            </div>

            {/* Main Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight leading-[1.15]">
              Starlin <span className="gradient-text">Pereira</span>
            </h1>

            {/* Professional Title */}
            <p className="text-lg sm:text-xl text-gray-200 font-semibold mb-5 tracking-wide">
              Data Analyst | SQL | Python | Power BI | Excel
            </p>

            {/* Tagline */}
            <div className="mb-8 flex justify-center lg:justify-start">
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl border-l-2 border-electric/50 pl-4 text-left italic">
                "Turning Data into Insights. Building Clarity Through Analytics."
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3.5 sm:gap-4">
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

          {/* Round Profile Photograph Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center"
          >
            <div className="relative group">
              {/* Outer Ambient Glow */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-electric via-cyan to-blue-500 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />

              {/* Concentric Circular Border */}
              <div className="relative p-1.5 sm:p-2 rounded-full bg-gradient-to-tr from-electric via-cyan to-blue-500 shadow-2xl shadow-black/50">
                <div className="p-1 sm:p-1.5 rounded-full bg-navy">
                  <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 aspect-square rounded-full overflow-hidden bg-navy-light">
                    <img
                      src="/assets/starlin-pereira.jpg"
                      alt="Starlin Pereira – Data Analyst"
                      className="w-full h-full object-cover object-[center_18%] transition-transform duration-500 group-hover:scale-105"
                      loading="eager"
                    />
                    {/* Subtle bottom shadow vignette */}
                    <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Floating Analytical Badges */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -top-2 -left-2 sm:top-2 sm:-left-4 bg-navy-light/95 backdrop-blur-md border border-white/15 px-3 sm:px-3.5 py-1.5 rounded-full shadow-xl flex items-center gap-1.5 sm:gap-2 text-xs font-semibold text-white"
              >
                <BarChart3 size={14} className="text-cyan" />
                <span>Data Analytics</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-2 -right-2 sm:bottom-4 sm:-right-4 bg-navy-light/95 backdrop-blur-md border border-white/15 px-3 sm:px-3.5 py-1.5 rounded-full shadow-xl flex items-center gap-1.5 sm:gap-2 text-xs font-semibold text-white"
              >
                <Database size={14} className="text-electric" />
                <span>SQL • Python • Power BI</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
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

import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({ children, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="text-center mb-14"
    >
      <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-heading'}`}>
        {children}
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-electric to-cyan mx-auto rounded-full" />
    </motion.div>
  );
}

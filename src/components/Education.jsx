import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { education } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="section-padding bg-surface">
      <div className="container-custom">
        <SectionHeading>Education</SectionHeading>

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((item, i) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="card p-8 hover:border-electric/20 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-electric to-cyan rounded-r" />
              <div className="pl-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center shrink-0">
                    <GraduationCap size={24} className="text-electric" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-heading mb-1">{item.degree}</h3>
                    <p className="text-muted mb-3">{item.institution}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="flex items-center gap-1.5 text-muted">
                        <Calendar size={14} className="text-electric" />
                        {item.duration}
                      </span>
                      <span className="flex items-center gap-1.5 font-semibold text-electric">
                        <Award size={14} />
                        CGPA: {item.cgpa}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

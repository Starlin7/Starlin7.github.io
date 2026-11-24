import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, MapPin, Calendar, Presentation, ExternalLink } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { achievements } from '../data/achievements';

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding bg-navy">
      <div className="container-custom">
        <SectionHeading light>Achievements</SectionHeading>

        <div className="max-w-3xl mx-auto">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-navy-light border border-white/10 rounded-2xl p-8 hover:border-electric/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-electric/20 flex items-center justify-center shrink-0">
                  <Trophy size={24} className="text-cyan" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {item.event}
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-cyan" />
                      {item.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-cyan" />
                      {item.date}
                    </span>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 mb-5">
                    <div className="flex items-start gap-2">
                      <Presentation size={16} className="text-cyan mt-0.5 shrink-0" />
                      <p className="text-gray-300 text-sm italic">
                        {item.presentationTitle}
                      </p>
                    </div>
                  </div>

                  <a
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-cyan hover:text-cyan/80 transition-colors"
                  >
                    <ExternalLink size={16} />
                    View Presentation
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

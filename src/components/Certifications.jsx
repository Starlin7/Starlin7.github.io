import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, Hash } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { certifications } from '../data/certifications';

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-surface">
      <div className="container-custom">
        <SectionHeading>Certifications</SectionHeading>

        <div className="max-w-3xl mx-auto grid gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="card p-8 hover:border-electric/20"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center shrink-0">
                  <Award size={24} className="text-electric" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-heading mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-muted mb-3">{cert.provider}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-electric" />
                      {cert.date}
                    </span>
                    {cert.code && (
                      <span className="flex items-center gap-1.5">
                        <Hash size={14} className="text-electric" />
                        {cert.code}
                      </span>
                    )}
                  </div>
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-electric hover:text-blue-700 transition-colors"
                  >
                    <ExternalLink size={16} />
                    View Certificate
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

import React from 'react';
import { motion } from 'framer-motion';
import { Database, Table, BarChart3, Code2, Brain, Wrench } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { skillCategories } from '../data/skills';

const iconMap = {
  Database, Table, BarChart3, Code2, Brain, Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading>Technical Skills</SectionHeading>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon];
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card group hover:border-electric/20"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-electric/10 flex items-center justify-center group-hover:bg-electric/20 transition-colors">
                    {Icon && <Icon size={20} className="text-electric" />}
                  </div>
                  <h3 className="font-semibold text-heading">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium bg-surface text-muted rounded-lg border border-gray-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

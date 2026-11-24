import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const categoryColors = {
  sql: 'from-blue-500/20 to-indigo-500/20',
  python: 'from-green-500/20 to-emerald-500/20',
  powerbi: 'from-amber-500/20 to-yellow-500/20',
  excel: 'from-emerald-500/20 to-teal-500/20',
  tableau: 'from-orange-500/20 to-red-500/20',
  aiml: 'from-purple-500/20 to-violet-500/20',
};

const categoryIcons = {
  sql: '🗄️',
  python: '🐍',
  powerbi: '📊',
  excel: '📈',
  tableau: '📉',
  aiml: '🤖',
};

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="card group hover:border-electric/20 flex flex-col h-full"
    >
      {/* Category Visual Header */}
      <div className={`h-32 rounded-xl bg-gradient-to-br ${categoryColors[project.category]} flex items-center justify-center mb-5 overflow-hidden relative`}>
        <span className="text-5xl opacity-60 group-hover:scale-110 transition-transform duration-300">
          {categoryIcons[project.category]}
        </span>
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-heading mb-2 leading-snug">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-muted text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
        {project.description}
      </p>

      {/* Metrics */}
      {project.metrics && (
        <div className="flex flex-wrap gap-2 mb-4">
          {project.metrics.slice(0, 3).map((m) => (
            <span
              key={m}
              className="text-xs px-2 py-1 bg-electric/5 text-electric rounded-md font-medium"
            >
              {m}
            </span>
          ))}
        </div>
      )}

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.technologies.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 text-xs bg-surface text-muted rounded-md border border-gray-100"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 5 && (
          <span className="px-2.5 py-1 text-xs bg-surface text-muted rounded-md border border-gray-100">
            +{project.technologies.length - 5}
          </span>
        )}
      </div>

      {/* GitHub Link */}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-electric hover:text-blue-700 transition-colors mt-auto group/link"
      >
        <Github size={16} />
        View on GitHub
        <ExternalLink size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
      </a>
    </motion.div>
  );
}

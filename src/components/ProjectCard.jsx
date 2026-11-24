import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';

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

export default function ProjectCard({ project, index, onOpenDetails }) {
  const [showAllTags, setShowAllTags] = useState(false);

  const initialTagCount = 4;
  const hasMoreTags = project.technologies.length > initialTagCount;
  const visibleTags = showAllTags
    ? project.technologies
    : project.technologies.slice(0, initialTagCount);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="bg-card rounded-2xl shadow-sm border border-gray-100 hover:border-electric/30 hover:shadow-lg transition-all duration-300 flex flex-col h-full overflow-hidden"
    >
      {/* Category Visual Header */}
      <div
        className={`h-32 sm:h-36 bg-gradient-to-br ${
          categoryColors[project.category] || 'from-gray-500/20 to-slate-500/20'
        } flex items-center justify-center relative overflow-hidden shrink-0`}
      >
        <span className="text-5xl opacity-60 hover:scale-110 transition-transform duration-300 select-none">
          {categoryIcons[project.category] || '📁'}
        </span>
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Title (standardized min-height to align all cards) */}
        <h3 className="text-lg font-bold text-heading mb-2.5 leading-snug min-h-[3.25rem] flex items-start">
          {project.title}
        </h3>

        {/* Description & Read More */}
        <div className="mb-4">
          <p className="text-muted text-sm leading-relaxed line-clamp-3 sm:line-clamp-4">
            {project.description}
          </p>
          <button
            type="button"
            onClick={() => onOpenDetails(project)}
            className="inline-flex items-center gap-1 text-xs font-semibold text-electric hover:text-blue-700 hover:underline mt-1.5 focus:outline-none transition-colors cursor-pointer"
          >
            <span>Read More</span>
            <ChevronRight size={13} className="mt-0.5" />
          </button>
        </div>

        {/* Metrics if present */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.metrics.slice(0, 3).map((m) => (
              <span
                key={m}
                className="text-xs px-2 py-0.5 bg-electric/5 text-electric rounded-md font-medium border border-electric/10"
              >
                {m}
              </span>
            ))}
          </div>
        )}

        {/* Technology Tags */}
        <div className="mb-5">
          <div className="flex flex-wrap items-center gap-1.5">
            {visibleTags.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs bg-surface text-muted rounded-md border border-gray-100"
              >
                {tech}
              </span>
            ))}

            {hasMoreTags && (
              <button
                type="button"
                onClick={() => setShowAllTags(!showAllTags)}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md border transition-all cursor-pointer ${
                  showAllTags
                    ? 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
                    : 'bg-electric/10 text-electric border-electric/20 hover:bg-electric hover:text-white'
                }`}
                title={showAllTags ? 'Show fewer tags' : 'Click to reveal all technologies'}
                aria-label={
                  showAllTags
                    ? 'Show fewer tags'
                    : `View ${project.technologies.length - initialTagCount} more technologies`
                }
              >
                {showAllTags ? 'Show less' : `+${project.technologies.length - initialTagCount}`}
              </button>
            )}
          </div>
        </div>

        {/* Card Footer: Aligned evenly at the bottom */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => onOpenDetails(project)}
            className="text-xs font-medium text-muted hover:text-electric transition-colors cursor-pointer"
          >
            Details
          </button>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-medium text-white bg-navy hover:bg-navy-light rounded-lg transition-colors group/link shrink-0 shadow-sm"
          >
            <Github size={15} />
            <span>View on GitHub</span>
            <ExternalLink size={13} className="opacity-70 group-hover/link:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

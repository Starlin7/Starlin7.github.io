import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Github, ExternalLink, Tag, BarChart2 } from 'lucide-react';

const categoryLabels = {
  sql: 'SQL & Database',
  python: 'Python & Data Analysis',
  powerbi: 'Power BI',
  excel: 'Excel',
  tableau: 'Tableau',
  aiml: 'AI & Machine Learning',
};

const categoryBadgeColors = {
  sql: 'bg-blue-50 text-blue-700 border-blue-200',
  python: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  powerbi: 'bg-amber-50 text-amber-700 border-amber-200',
  excel: 'bg-teal-50 text-teal-700 border-teal-200',
  tableau: 'bg-orange-50 text-orange-700 border-orange-200',
  aiml: 'bg-purple-50 text-purple-700 border-purple-200',
};

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="fixed inset-0 bg-navy/70 backdrop-blur-sm"
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-100 max-h-[90vh] flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 sm:p-8 pb-4 border-b border-gray-100">
          <div className="pr-6">
            <span
              className={`inline-block px-3 py-1 text-xs font-semibold rounded-full border mb-3 ${
                categoryBadgeColors[project.category] || 'bg-gray-100 text-gray-700 border-gray-200'
              }`}
            >
              {categoryLabels[project.category] || project.category}
            </span>
            <h2
              id="modal-project-title"
              className="text-xl sm:text-2xl font-bold text-heading leading-snug"
            >
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-muted hover:text-heading hover:bg-gray-100 rounded-xl transition-colors shrink-0"
            aria-label="Close project details"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Complete Description */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider text-muted uppercase mb-2">
              Project Overview
            </h4>
            <p className="text-gray-700 text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Metrics if present */}
          {project.metrics && project.metrics.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-muted uppercase mb-3">
                <BarChart2 size={15} className="text-electric" />
                <span>Key Metrics & Scale</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {project.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-surface rounded-xl border border-gray-100 text-center"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-heading break-words">
                      {m}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Full Technologies list */}
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-muted uppercase mb-3">
              <Tag size={15} className="text-electric" />
              <span>Technologies & Tools ({project.technologies.length})</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-medium bg-surface text-heading rounded-lg border border-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 sm:p-6 bg-surface border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 text-sm font-medium text-muted hover:text-heading hover:bg-gray-200/60 rounded-lg transition-colors"
          >
            Close
          </button>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-electric text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-all shadow-md shadow-electric/25 hover:shadow-lg"
          >
            <Github size={16} />
            <span>View on GitHub</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

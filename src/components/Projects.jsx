import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projects, projectCategories } from '../data/projects';

export default function Projects() {
  const [active, setActive] = useState('sql');
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading>My Projects</SectionHeading>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
                active === cat.id
                  ? 'bg-electric text-white shadow-lg shadow-electric/25'
                  : 'bg-surface text-muted hover:bg-gray-100 hover:text-heading'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
          >
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onOpenDetails={setSelectedProject}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

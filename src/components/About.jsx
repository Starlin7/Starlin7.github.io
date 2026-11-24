import React from 'react';
import { motion } from 'framer-motion';
import { Download, MapPin, Briefcase } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="section-padding bg-surface">
      <div className="container-custom">
        <SectionHeading>About Me</SectionHeading>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="card p-8 md:p-10">
            <p className="text-muted text-lg leading-relaxed mb-8">
              As an MCA graduate with a CGPA of 9.07, I'm passionate about learning, solving problems and turning data into meaningful insights. With a strong interest in Data Analytics and Business Intelligence, I have developed hands-on skills in SQL, Python, Excel, Power BI and Tableau through practical projects. My experience also includes AI/ML-based applications, which has strengthened my problem-solving abilities and technical understanding. I'm a quick learner who enjoys taking on new challenges, approaching problems analytically and continuously improving my skills. I believe in continuous growth, both professionally and personally, and strive to become better with every experience.
            </p>

            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-2 text-muted">
                <MapPin size={18} className="text-electric" />
                <span>Kodagu, Karnataka, India</span>
              </div>
              <div className="flex items-center gap-2 text-muted">
                <Briefcase size={18} className="text-electric" />
                <span>Fresher – Data Analyst</span>
              </div>
              <a
                href="/assets/Starlin_Pereira_Resume.pdf"
                download="Starlin_Pereira_Resume.pdf"
                className="btn-primary text-sm ml-auto"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

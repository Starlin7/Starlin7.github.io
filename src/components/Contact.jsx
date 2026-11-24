import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import SectionHeading from './SectionHeading';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'starlinpereira17@gmail.com',
    href: 'mailto:starlinpereira17@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 6360982078',
    href: 'tel:+916360982078',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Kodagu, Karnataka, India',
    href: null,
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/starlinpereira',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/Starlin7',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-surface">
      <div className="container-custom">
        <SectionHeading>Let's Connect</SectionHeading>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-center text-muted text-lg mb-10 leading-relaxed">
            Interested in working together or discussing opportunities? Feel free to reach out. I'm always open to connecting with professionals and exploring opportunities in Data Analytics and Business Intelligence.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              const content = (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="card text-center p-6 hover:border-electric/20"
                >
                  <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center mx-auto mb-4">
                    <Icon size={22} className="text-electric" />
                  </div>
                  <p className="text-sm text-muted mb-1">{item.label}</p>
                  <p className="text-heading font-medium text-sm break-all">{item.value}</p>
                </motion.div>
              );

              if (item.href) {
                return (
                  <a key={item.label} href={item.href} className="block hover:no-underline">
                    {content}
                  </a>
                );
              }
              return <div key={item.label}>{content}</div>;
            })}
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-card border border-gray-100 flex items-center justify-center text-muted hover:text-electric hover:border-electric/20 hover:shadow-md transition-all duration-300"
                  aria-label={link.label}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

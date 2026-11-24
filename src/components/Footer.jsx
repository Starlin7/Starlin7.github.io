import React from 'react';
import { Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy py-8 border-t border-white/10">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 Starlin Pereira. All Rights Reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/starlinpereira"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/Starlin7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

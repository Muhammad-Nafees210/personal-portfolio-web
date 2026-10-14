import React from 'react';
import { ArrowUp, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="pt-14 pb-10 border-t border-slate-200 bg-white text-slate-500 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-100">

          {/* Brand Info */}
          <div className="text-center md:text-left">
            <a href="#home" className="flex items-center justify-center md:justify-start gap-2 text-slate-900 font-bold text-lg hover:text-cyan-600 transition-colors">

              <span>Muhammad <span className="text-cyan-600">Nafees</span></span>
            </a>
            <p className="mt-2 text-slate-500 text-xs max-w-xs">
              Frontend Developer building clean, high-performance web applications with React & Tailwind CSS.
            </p>
          </div>

          {/* Quick Page Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-cyan-600 font-medium text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-cyan-600 hover:border-cyan-300 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-cyan-600 hover:border-cyan-300 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-cyan-600 hover:border-cyan-300 transition-colors"
              aria-label="Twitter"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-cyan-500 hover:text-white border border-slate-200 flex items-center justify-center text-slate-600 transition-all cursor-pointer ml-1"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p>Designed & Developed with React & Tailwind CSS</p>
        </div>

      </div>
    </footer>
  );
}

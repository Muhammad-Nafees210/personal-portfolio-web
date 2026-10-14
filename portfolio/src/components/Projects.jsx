import React from 'react';
<<<<<<< HEAD
import { ExternalLink } from 'lucide-react';
=======
import { ExternalLink, FolderGit2 } from 'lucide-react';
>>>>>>> bc46080ee51dfe6e9add6bfe3834eb262b8fb2f2
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-cyan-600 font-semibold tracking-wider uppercase text-xs">Featured Work</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
            Selected Projects
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            A showcase of recent responsive web applications, interactive interfaces, and frontend projects.
          </p>
        </div>

        {/* Projects Grid */}
<<<<<<< HEAD
        <div className="grid md:grid-cols-2 gap-7">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white border border-slate-200/80 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-slate-200/70"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={proj.image}
                  alt={`${proj.title} project preview`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-slate-950/10" />
                <div className="absolute right-4 top-4 flex items-center gap-2">
=======
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="flex flex-col justify-between rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 p-6 sm:p-8 transition-all hover:-translate-y-1 hover:shadow-lg shadow-xs group"
            >
              <div>
                {/* Top bar with folder icon & links */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                    <FolderGit2 className="w-6 h-6" />
                  </div>
>>>>>>> bc46080ee51dfe6e9add6bfe3834eb262b8fb2f2
                  <div className="flex items-center gap-3">
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
<<<<<<< HEAD
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-white/90 text-slate-600 shadow-sm backdrop-blur transition-colors hover:bg-white hover:text-slate-950"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
=======
                      className="text-slate-400 hover:text-slate-800 p-1 transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon className="w-5 h-5" />
>>>>>>> bc46080ee51dfe6e9add6bfe3834eb262b8fb2f2
                    </a>
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
<<<<<<< HEAD
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-white/90 text-slate-600 shadow-sm backdrop-blur transition-colors hover:bg-white hover:text-cyan-700"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex-1">
                {/* Title & Description */}
                <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-cyan-700 mb-3">
=======
                      className="text-slate-400 hover:text-cyan-600 p-1 transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors mb-3">
>>>>>>> bc46080ee51dfe6e9add6bfe3834eb262b8fb2f2
                  {proj.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {proj.description}
                </p>
<<<<<<< HEAD
                </div>
=======
              </div>

              {/* Tags & Action Button */}
              <div>
>>>>>>> bc46080ee51dfe6e9add6bfe3834eb262b8fb2f2
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 mb-6">
                  {proj.tags.map((tag, idx) => (
                    <span
                      key={idx}
<<<<<<< HEAD
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-slate-50 text-slate-600 border border-slate-200"
=======
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-white text-slate-700 border border-slate-200 shadow-2xs"
>>>>>>> bc46080ee51dfe6e9add6bfe3834eb262b8fb2f2
                    >
                      {tag}
                    </span>
                  ))}
                </div>

<<<<<<< HEAD
                <div className="flex items-center justify-between gap-3">
=======
                <div className="flex items-center gap-3">
>>>>>>> bc46080ee51dfe6e9add6bfe3834eb262b8fb2f2
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
<<<<<<< HEAD
                    className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-cyan-700"
                  >
                    <span>View Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
=======
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-600 hover:text-cyan-700 transition-colors"
                  >
                    <span>View Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-slate-300">•</span>
>>>>>>> bc46080ee51dfe6e9add6bfe3834eb262b8fb2f2
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
<<<<<<< HEAD
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
=======
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors"
>>>>>>> bc46080ee51dfe6e9add6bfe3834eb262b8fb2f2
                  >
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

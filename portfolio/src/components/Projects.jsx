import React from 'react';
import { ExternalLink, FolderGit2 } from 'lucide-react';
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
                  <div className="flex items-center gap-3">
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-slate-800 p-1 transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon className="w-5 h-5" />
                    </a>
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-cyan-600 p-1 transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors mb-3">
                  {proj.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {proj.description}
                </p>
              </div>

              {/* Tags & Action Button */}
              <div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 mb-6">
                  {proj.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-white text-slate-700 border border-slate-200 shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-600 hover:text-cyan-700 transition-colors"
                  >
                    <span>View Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-slate-300">•</span>
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors"
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

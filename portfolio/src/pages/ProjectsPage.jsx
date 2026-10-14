import React, { useState } from 'react';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { projects } from '../data/portfolioData';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');

  const tags = ['All', 'React', 'Tailwind CSS', 'Vite'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase())));

  return (
    <div className="pt-28 pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-cyan-400 font-semibold tracking-wider uppercase text-xs">Portfolio Showcase</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-2">
          Projects
        </h1>
        <p className="text-slate-400 mt-3 text-sm sm:text-base">
          A collection of web apps, dashboards, and responsive websites I've engineered.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {tags.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              filter === t
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            className="flex flex-col justify-between rounded-2xl bg-slate-800/40 border border-slate-800 hover:border-slate-700/80 p-6 sm:p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/20 group"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
                  <FolderGit2 className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white p-1 transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-400 p-1 transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <h2 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-3">
                {proj.title}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {proj.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60 mb-6">
                {proj.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-900/80 text-cyan-300/90 border border-slate-800"
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
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Live Preview</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-slate-600">•</span>
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors"
                >
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

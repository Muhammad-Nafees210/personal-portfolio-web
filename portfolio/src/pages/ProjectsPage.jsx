import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
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
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-cyan-400 font-semibold tracking-wider uppercase text-xs">Portfolio Showcase</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-2">
          Projects
        </h1>
        <p className="text-slate-400 mt-3 text-sm sm:text-base">
          A collection of web apps, dashboards, and responsive websites I've engineered.
        </p>
      </div>

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

      <div className="grid md:grid-cols-2 gap-8">
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            className="group flex flex-col overflow-hidden rounded-3xl bg-slate-900/70 border border-slate-800 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-900 hover:shadow-xl hover:shadow-cyan-950/20"
          >
            <div className="relative aspect-16/10 overflow-hidden bg-slate-800">
              <img
                src={proj.image}
                alt={`${proj.title} project preview`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/45 via-transparent to-slate-950/10" />
              <div className="absolute right-4 top-4 flex items-center gap-2">
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 text-white shadow-sm backdrop-blur transition-colors hover:bg-slate-950"
                  aria-label="GitHub Repository"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 text-white shadow-sm backdrop-blur transition-colors hover:bg-slate-950 hover:text-cyan-300"
                  aria-label="Live Demo"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <div className="flex-1">
                <h2 className="text-xl font-bold text-white transition-colors group-hover:text-cyan-300 mb-3">
                  {proj.title}
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {proj.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80 mb-6">
                {proj.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-slate-800 text-cyan-200/90 border border-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between gap-3">
                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-400"
                >
                  <span>Live Preview</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-400 transition-colors hover:text-white"
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

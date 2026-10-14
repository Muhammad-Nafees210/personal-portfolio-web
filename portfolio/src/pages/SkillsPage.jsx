import React, { useState } from 'react';
import { skills } from '../data/portfolioData';
import { Code, Layout, Palette, Terminal, Wrench, Sparkles } from 'lucide-react';

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Styling', 'Design', 'Tools', 'Integration'];

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter(s => s.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="pt-28 pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-cyan-400 font-semibold tracking-wider uppercase text-xs">Capabilities</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-2">
          My Skills & Expertise
        </h1>
        <p className="text-slate-400 mt-3 text-sm sm:text-base">
          A breakdown of my technical competencies, developer tools, and workflow proficiencies.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className="p-6 rounded-2xl bg-slate-800/40 border border-slate-800 hover:border-slate-700/80 transition-all group hover:bg-slate-800/60"
          >
            <div className="flex justify-between items-center mb-3">
              <span className="font-bold text-white group-hover:text-cyan-400 transition-colors">
                {skill.name}
              </span>
              <span className="text-xs font-mono font-semibold text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 px-2 py-0.5 rounded">
                {skill.level}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-700/50 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-500 h-2.5 rounded-full transition-all duration-700 group-hover:brightness-110"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>

            <div className="mt-3 flex justify-between items-center text-xs text-slate-400">
              <span className="uppercase tracking-wider text-[11px] font-medium">{skill.category}</span>
              <span className="text-slate-500">Proficiency</span>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Frameworks & Workflow */}
      <div className="mt-16 p-8 rounded-2xl bg-slate-900/60 border border-slate-800">
        <h2 className="text-xl font-bold text-white mb-4">Core Workflow & Developer Standards</h2>
        <div className="grid sm:grid-cols-3 gap-6 text-sm text-slate-300">
          <div>
            <h3 className="font-semibold text-cyan-400 mb-1">Code Quality</h3>
            <p className="text-slate-400 text-xs leading-relaxed">Clean code conventions, reusable modular React components, and maintainable styles.</p>
          </div>
          <div>
            <h3 className="font-semibold text-cyan-400 mb-1">Responsive First</h3>
            <p className="text-slate-400 text-xs leading-relaxed">Cross-device fluidity ensuring ideal layout behavior on iPhones, Androids, tablets, & 4K screens.</p>
          </div>
          <div>
            <h3 className="font-semibold text-cyan-400 mb-1">Fast Performance</h3>
            <p className="text-slate-400 text-xs leading-relaxed">Optimized bundle sizes with Vite, efficient rendering, and quick load speeds.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

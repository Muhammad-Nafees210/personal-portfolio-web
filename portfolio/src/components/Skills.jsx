import React, { useState } from 'react';
import { skills } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Styling', 'Design', 'Tools'];

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter(s => s.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section id="skills" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-cyan-600 font-semibold tracking-wider uppercase text-xs">Technical Skills</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
            My Tech Stack & Tools
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            Proficiencies across modern web development stacks, UI engineering, and developer tooling.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-white font-bold shadow-md shadow-cyan-500/25'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
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
              className="p-5 rounded-xl bg-white border border-slate-200 hover:border-cyan-300 transition-all group hover:shadow-md shadow-xs"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-slate-800 group-hover:text-cyan-600 transition-colors">
                  {skill.name}
                </span>
                <span className="text-xs font-mono font-semibold text-cyan-700 bg-cyan-50 border border-cyan-200 px-2 py-0.5 rounded">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="mt-2 text-right">
                <span className="text-[11px] text-slate-400 uppercase tracking-wider font-medium">{skill.category}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

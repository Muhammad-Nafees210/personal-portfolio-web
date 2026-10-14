import React from 'react';
import { ArrowRight, Code, Sparkles, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import Typewriter from '../components/Typewriter';

export default function Home({ onNavigate }) {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-12 md:py-24 overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
              
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-cyan-300 text-xs sm:text-sm font-medium mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Available for new opportunities & projects
              </div>

              {/* Title & Typing Animation */}
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Hi, I Am <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                  {personalInfo.name}
                </span>
              </h1>

              {/* Typed Role */}
              <div className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-200 flex items-center gap-2 min-h-[44px]">
                <span className="text-slate-400">I'm a</span>
                <Typewriter words={personalInfo.typingRoles} />
              </div>

              {/* Subtitle */}
              <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
                {personalInfo.tagline} Building modern web interfaces with React, interactive user experiences, and responsive styling with Tailwind CSS.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => onNavigate('projects')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700/90 text-white font-medium text-sm sm:text-base border border-slate-700 transition-all hover:border-slate-600 cursor-pointer"
                >
                  <span>Contact Me</span>
                </button>
              </div>

              {/* Metrics */}
              <div className="mt-12 grid grid-cols-3 gap-6 pt-6 border-t border-slate-800/80 w-full max-w-lg text-center lg:text-left">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">{personalInfo.experienceYears}</div>
                  <div className="text-xs text-slate-400 mt-1">Experience</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">{personalInfo.completedProjects}</div>
                  <div className="text-xs text-slate-400 mt-1">Projects</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">{personalInfo.satisfiedClients}</div>
                  <div className="text-xs text-slate-400 mt-1">Clients</div>
                </div>
              </div>

            </div>

            {/* Right Side: Circular Avatar Profile */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative group">
                {/* Rotating ambient glow ring */}
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-600 rounded-full blur-xl opacity-60 group-hover:opacity-90 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

                {/* Outer Ring Border */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-88 md:h-88 rounded-full p-2 bg-gradient-to-tr from-cyan-500 via-sky-400 to-blue-600 shadow-2xl shadow-cyan-500/20">
                  {/* Inner Circular Image Container */}
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-4 border-slate-950 flex items-center justify-center relative">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                      alt="Muhammad Nafees"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient Overlay for subtle professional tint */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                </div>

                {/* Floating Tech Badges */}
                <div className="absolute -bottom-2 -left-2 sm:bottom-2 sm:left-0 bg-slate-900/90 backdrop-blur-md border border-cyan-500/30 px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                  <span className="text-xs font-semibold text-cyan-300">React.js</span>
                </div>

                <div className="absolute -top-2 -right-2 sm:top-2 sm:right-0 bg-slate-900/90 backdrop-blur-md border border-blue-500/30 px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                  <span className="text-xs font-semibold text-sky-300">Tailwind CSS</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Highlights / Quick Info Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-cyan-400 text-xs uppercase tracking-wider font-semibold">Specialization</span>
              <h2 className="text-2xl font-bold text-white mt-1">Looking for a frontend specialist?</h2>
              <p className="text-slate-300 text-sm mt-2 max-w-xl">
                I translate Figma prototypes into performant, clean React applications backed with responsive Tailwind styling and accessible HTML5 semantics.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => onNavigate('about')}
                className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium border border-slate-700 transition-colors cursor-pointer"
              >
                Read Bio
              </button>
              <button
                onClick={() => onNavigate('skills')}
                className="px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-sm font-bold transition-colors cursor-pointer"
              >
                Explore Skills
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

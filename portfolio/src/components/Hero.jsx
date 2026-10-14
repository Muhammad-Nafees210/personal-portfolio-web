import React from 'react';
import { ArrowRight, Download, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import Typewriter from './Typewriter';
import nafeesPic from '../assets/image/nafesspic.jfif';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-100/70 via-slate-50 to-white">
      {/* Ambient decorative glows */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-200/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left: Text & Typed Content */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">

            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-cyan-700 text-xs sm:text-sm font-medium mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Available for new opportunities & projects
            </div>

            {/* Main Header */}
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Hi, I Am <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-600">
                {personalInfo.name}
              </span>
            </h1>

            {/* Typed.js Role */}
            <div className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 flex items-center gap-2 min-h-[44px]">
              <span className="text-slate-500 font-medium">I'm a</span>
              <Typewriter words={personalInfo.typingRoles} />
            </div>

            {/* Subtitle */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              {personalInfo.tagline} Crafting pixel-perfect frontend experiences using React, modern JavaScript, and Tailwind CSS.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href={personalInfo.resumeUrl || "#"}
                download="Muhammad_Nafees_CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-sm sm:text-base shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileText className="w-4 h-4" />
                <span>My CV</span>
                <Download className="w-3.5 h-3.5 opacity-90" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-medium text-sm sm:text-base border border-slate-300 shadow-xs transition-all hover:border-slate-400"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 pt-6 border-t border-slate-200 w-full max-w-lg text-center lg:text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-600">{personalInfo.experienceYears}</div>
                <div className="text-xs text-slate-500 mt-1 font-medium">Experience</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-600">{personalInfo.completedProjects}</div>
                <div className="text-xs text-slate-500 mt-1 font-medium">Projects</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-600">{personalInfo.satisfiedClients}</div>
                <div className="text-xs text-slate-500 mt-1 font-medium">Clients</div>
              </div>
            </div>

          </div>

          {/* Right: Circular Profile Image */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative group">
              {/* Glowing ambient ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 rounded-full blur-xl opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>

              {/* Circular border frame with balanced size */}
              <div className="relative w-64 h-64 sm:w-76 sm:h-76 md:w-84 md:h-84 rounded-full p-2 bg-gradient-to-tr from-cyan-500 via-sky-400 to-blue-500 shadow-xl shadow-cyan-500/20">
                <div className="w-full h-full rounded-full overflow-hidden bg-white border-2 border-white flex items-center justify-center relative shadow-inner">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <img
                      src={nafeesPic}
                      alt="Muhammad Nafees"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                </div>
              </div>

              {/* Tech Badges */}
              <div className="absolute -bottom-2 -left-2 sm:bottom-2 sm:left-0 bg-white/95 backdrop-blur-md border border-cyan-200 px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-md">
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping"></span>
                <span className="text-xs font-semibold text-cyan-700">React.js</span>
              </div>

              <div className="absolute -top-2 -right-2 sm:top-2 sm:right-0 bg-white/95 backdrop-blur-md border border-blue-200 px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-md">
                <span className="text-xs font-semibold text-blue-700">Tailwind CSS</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

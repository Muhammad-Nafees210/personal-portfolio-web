import React from 'react';
import { Laptop, MapPin, Mail, CheckCircle2, Award, HeartHandshake } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function AboutPage() {
  const highlights = [
    { title: "React & Component Architecture", desc: "Crafting scalable component hierarchies with clean state and hooks." },
    { title: "Tailwind CSS & Responsive Mastery", desc: "Mobile-first styling, design token systems, and sleek dark modes." },
    { title: "API Integration & Async Operations", desc: "Connecting REST endpoints, handling asynchronous data & error states." },
    { title: "Performance & Cross-Browser Precision", desc: "Fast render cycles, lighthouse compliance, and clean code standards." }
  ];

  return (
    <div className="pt-28 pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-cyan-400 font-semibold tracking-wider uppercase text-xs">Who I Am</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-2">
          About Me
        </h1>
        <p className="text-slate-400 mt-3 text-sm sm:text-base">
          A glimpse into my background, coding philosophy, and what drives my work as a frontend developer.
        </p>
      </div>

      {/* Main Bio Grid */}
      <div className="grid md:grid-cols-12 gap-12 items-center mb-20">
        {/* Profile Card */}
        <div className="md:col-span-5">
          <div className="relative mx-auto max-w-sm rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 p-8 border border-slate-700/80 shadow-2xl shadow-cyan-950/20 text-center">
            <div className="w-28 h-28 rounded-2xl bg-gradient-to-tr from-cyan-500 via-sky-400 to-blue-600 mx-auto flex items-center justify-center text-white shadow-xl shadow-cyan-500/20 mb-6">
              <Laptop className="w-14 h-14" />
            </div>
            <h2 className="text-2xl font-bold text-white">{personalInfo.name}</h2>
            <p className="text-cyan-400 text-sm font-medium mt-1">{personalInfo.role}</p>

            <div className="mt-6 pt-6 border-t border-slate-700/60 space-y-3 text-sm text-slate-300 text-left">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="truncate">{personalInfo.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative */}
        <div className="md:col-span-7 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
            Crafting elegant, accessible, and high-impact digital user interfaces.
          </h2>
          <p className="text-slate-300 leading-relaxed text-base">
            {personalInfo.about}
          </p>
          <p className="text-slate-400 leading-relaxed text-base">
            I believe that great software starts at the intersection of aesthetic design and performant code. Whether it's building interactive dashboards, landing pages that convert, or full single-page web applications, I bring attention to detail to every commit.
          </p>
        </div>
      </div>

      {/* Philosophy / Highlights */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center sm:text-left">What I Bring To The Table</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <div key={index} className="p-6 rounded-xl bg-slate-800/40 border border-slate-800">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-white text-base">{item.title}</h3>
                  <p className="text-slate-400 text-sm mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Laptop, MapPin, Mail, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import nafeesPic from '../assets/image/nafesspic.jfif';

export default function About() {
  const highlights = [
    "Clean, semantic HTML5 & modern CSS3 architecture",
    "Component-driven frontend design with React & hooks",
    "Modern styling workflows using Tailwind CSS",
    "Mobile-first, fully responsive layouts across devices",
    "API integration & state management"
  ];

  return (
    <section id="about" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          
          {/* Left Column / Profile Card */}
          <div className="md:col-span-5">
            <div className="relative mx-auto max-w-sm rounded-2xl bg-slate-50 p-6 border border-slate-200 shadow-md shadow-slate-100">
              <div className="w-28 h-28 rounded-2xl overflow-hidden mx-auto shadow-lg shadow-cyan-500/20 mb-6 border-2 border-cyan-400">
                <img
                  src={nafeesPic}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 text-center">{personalInfo.name}</h3>
              <p className="text-cyan-600 text-sm text-center font-medium mt-1">{personalInfo.role}</p>

              <div className="mt-6 pt-6 border-t border-slate-200 space-y-3 text-sm text-slate-600">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span className="truncate">{personalInfo.email}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column / Content */}
          <div className="md:col-span-7">
            <span className="text-cyan-600 font-semibold tracking-wider uppercase text-xs">About Me</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-6">
              Turning complex design ideas into seamless code.
            </h2>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-6">
              {personalInfo.about}
            </p>
            <p className="text-slate-500 leading-relaxed text-sm sm:text-base mb-8">
              I love turning intricate design prototypes into responsive, accessible web interfaces. Clean code, maintainable architecture, and fast load times are at the heart of everything I build.
            </p>

            {/* Highlights bullet points */}
            <div className="space-y-3">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-slate-700 text-sm sm:text-base">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

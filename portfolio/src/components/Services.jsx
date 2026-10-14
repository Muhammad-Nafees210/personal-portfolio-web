import React from 'react';
import { services } from '../data/portfolioData';
import { Monitor, Smartphone, Gauge } from 'lucide-react';

export default function Services() {
  const icons = [
    <Monitor className="w-6 h-6 text-cyan-400" />,
    <Smartphone className="w-6 h-6 text-sky-400" />,
    <Gauge className="w-6 h-6 text-blue-400" />
  ];

  return (
    <section id="services" className="py-20 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-cyan-400 font-semibold tracking-wider uppercase text-xs">What I Do</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Services & Expertise
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            Providing tailored frontend engineering solutions that help businesses succeed online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="p-8 rounded-2xl bg-slate-850/60 bg-slate-800/40 border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-6">
                {icons[index % icons.length]}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

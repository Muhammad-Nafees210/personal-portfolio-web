import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, MessageSquare, Clock } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <div className="pt-28 pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-cyan-400 font-semibold tracking-wider uppercase text-xs">Let's Connect</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-2">
          Contact Me
        </h1>
        <p className="text-slate-400 mt-3 text-sm sm:text-base">
          Have an upcoming project, freelance inquiry, or full-time opportunity? Drop me a message!
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-10">
        {/* Contact Info Sidebar */}
        <div className="md:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-800/40 border border-slate-800">
            <h2 className="text-xl font-bold text-white mb-4">Direct Details</h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              I am open for frontend collaborations, contracting, and new engineering roles.
            </p>

            <div className="space-y-5 text-sm text-slate-300">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Email</div>
                  <a href={`mailto:${personalInfo.email}`} className="font-semibold text-white hover:text-cyan-400 transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Location</div>
                  <div className="font-semibold text-white">{personalInfo.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Availability</div>
                  <div className="font-semibold text-emerald-400">Open for immediate hiring</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/40 to-slate-900 border border-cyan-800/30">
            <div className="flex items-center gap-3 mb-2 text-cyan-400">
              <MessageSquare className="w-5 h-5" />
              <h3 className="font-bold text-white text-sm">Response Time</h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              I typically reply within a few hours on business days. Feel free to provide project briefs, Figma links, or job descriptions.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="md:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 rounded-2xl bg-slate-800/40 border border-slate-800 space-y-4"
          >
            {isSubmitted && (
              <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 flex items-center gap-3 text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1.5">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1.5">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-medium text-slate-300 mb-1.5">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Frontend Project Inquiry"
                className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                required
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project, requirements, or timeline..."
                className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm sm:text-base transition-all shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

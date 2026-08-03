import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-28 relative">
      {/* Section label */}
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-cyan-400 font-mono text-xs tracking-widest uppercase mb-14 text-center">
          Sistemas
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="space-y-5">
            {personalInfo.aboutParagraphs.map((para, i) => (
              <p key={i} className="text-slate-300 text-base leading-relaxed">
                {i === 0 ? (
                  <>
                    <span className="text-white font-semibold">
                      {para.substring(0, para.indexOf(',') + 1)}
                    </span>
                    {para.substring(para.indexOf(',') + 1)}
                  </>
                ) : para}
              </p>
            ))}
          </div>

          {/* Photo placeholder frame — same style as Angel's */}
          <div className="relative flex justify-center">
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              {/* Outer decorative border */}
              <div className="absolute inset-0 rounded-2xl border border-cyan-400/20 bg-white/5 backdrop-blur-sm" />
              {/* Inner photo area */}
              <div className="absolute inset-3 rounded-xl bg-slate-800/60 flex items-center justify-center overflow-hidden">
                <div className="text-center space-y-3">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400/30 to-teal-500/30 border border-cyan-400/30 flex items-center justify-center mx-auto">
                    <span className="text-3xl font-black text-white">LP</span>
                  </div>
                  <p className="text-slate-400 text-xs">Luis Andres Paz Paz</p>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-3 bg-black border border-cyan-400/30 rounded-lg px-3 py-1.5">
                <span className="text-cyan-400 text-xs font-mono font-bold">Full Stack</span>
              </div>
              {/* Floating badge 2 */}
              <div className="absolute -top-3 -left-3 bg-black border border-purple-400/30 rounded-lg px-3 py-1.5">
                <span className="text-purple-400 text-xs font-mono font-bold">Sistemas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

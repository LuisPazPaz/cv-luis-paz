import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-28 relative">
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

          {/* Photo frame */}
          <div className="relative flex justify-center">
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              {/* Outer decorative border */}
              <div className="absolute inset-0 rounded-2xl border border-cyan-400/20 bg-white/5 backdrop-blur-sm" />
              {/* Photo */}
              <div className="absolute inset-3 rounded-xl overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpg`}
                  alt="Luis Andres Paz Paz"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Floating badge bottom-right */}
              <div className="absolute -bottom-3 -right-3 bg-black border border-cyan-400/40 rounded-lg px-3 py-1.5 shadow-lg shadow-cyan-400/10">
                <span className="text-cyan-400 text-xs font-mono font-bold">Full Stack</span>
              </div>
              {/* Floating badge top-left */}
              <div className="absolute -top-3 -left-3 bg-black border border-purple-400/40 rounded-lg px-3 py-1.5 shadow-lg shadow-purple-400/10">
                <span className="text-purple-400 text-xs font-mono font-bold">Sistemas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

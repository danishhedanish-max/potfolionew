import React from 'react';
import { TRUST_PILLARS } from '../data/portfolioData';
import { CheckCircle2, Shield } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  return (
    <section id="trust-strip" className="relative py-8 bg-[#090D16] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-slate-400 font-semibold font-mono">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span>Verified Core Competencies & Track Record</span>
          </div>
          <div className="text-xs text-slate-400 italic">
            Connecting technical architecture with real-world business operations
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {TRUST_PILLARS.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 rounded-xl p-3.5 transition-all group"
            >
              <div className="flex items-center gap-1.5 text-white font-display font-bold text-sm group-hover:text-cyan-300 transition-colors">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{item.label}</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

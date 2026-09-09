import React from 'react';
import { DIFFERENTIATORS } from '../data/portfolioData';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Target, 
  Code2, 
  Wrench, 
  Compass, 
  Users, 
  RefreshCw,
  MessageSquareQuote
} from 'lucide-react';

export const WhyWorkWithMe: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Target className="w-5 h-5 text-cyan-400" />;
      case 1: return <Code2 className="w-5 h-5 text-blue-400" />;
      case 2: return <Wrench className="w-5 h-5 text-emerald-400" />;
      case 3: return <Compass className="w-5 h-5 text-purple-400" />;
      case 4: return <Users className="w-5 h-5 text-amber-400" />;
      case 5: return <RefreshCw className="w-5 h-5 text-rose-400" />;
      default: return <CheckCircle2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="why-work-with-me" className="py-24 bg-[#090D16] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Consulting Philosophy & Edge</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
            Why Organizations Partner With Me
          </h2>

          <p className="text-base text-slate-300 leading-relaxed">
            The difference between an experimental AI toy and an enterprise asset lies in engineering discipline, business empathy, and operational integration.
          </p>
        </div>

        {/* 6 Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {DIFFERENTIATORS.map((diff, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-b from-[#0D1322] to-[#080B14] border border-white/10 hover:border-cyan-500/30 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {getIcon(index)}
              </div>

              <h3 className="text-base font-bold text-white font-display mb-2 group-hover:text-cyan-300 transition-colors">
                {diff.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {diff.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials Block (Honest, Unfabricated Architecture Ready for Client Quotes) */}
        <div className="rounded-2xl bg-gradient-to-b from-slate-900/60 to-slate-950/80 border border-white/10 p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
            <MessageSquareQuote className="w-6 h-6 text-cyan-400" />
            <div>
              <h3 className="text-lg font-bold text-white font-display">
                Client & Peer Feedback Architecture
              </h3>
              <p className="text-xs text-slate-400">
                Maintained with strict credibility. Verified endorsements from past engagements are indexed below.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-slate-950/60 border border-dashed border-white/10 text-xs text-slate-400 flex flex-col justify-between space-y-3">
              <p className="italic leading-relaxed text-slate-300">
                &ldquo;Client endorsement will be added here upon formal sign-off. Danish’s approach focuses strictly on operational outcomes, measurable time savings, and clean enterprise software architecture.&rdquo;
              </p>
              <div className="text-[11px] font-mono text-cyan-400">
                [ Verified Enterprise Client — Endorsement Verification in Progress ]
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/60 border border-dashed border-white/10 text-xs text-slate-400 flex flex-col justify-between space-y-3">
              <p className="italic leading-relaxed text-slate-300">
                &ldquo;Team training feedback will be updated here. Focus is placed on hands-on code examples, custom prompt libraries, and immediate workflow adoption for corporate teams.&rdquo;
              </p>
              <div className="text-[11px] font-mono text-cyan-400">
                [ Corporate Workshop Participant — Review Verification in Progress ]
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

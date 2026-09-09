import React from 'react';
import { BUSINESS_OUTCOMES } from '../data/portfolioData';
import { 
  TrendingUp, 
  Clock, 
  Zap, 
  BrainCircuit, 
  Share2, 
  Maximize2, 
  Compass,
  ArrowRight
} from 'lucide-react';

interface BusinessOutcomesProps {
  onOpenConsultation: () => void;
}

export const BusinessOutcomes: React.FC<BusinessOutcomesProps> = ({ onOpenConsultation }) => {
  const getIcon = (cat: string) => {
    switch (cat) {
      case 'Efficiency': return <Clock className="w-5 h-5 text-cyan-400" />;
      case 'Productivity': return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Intelligence': return <BrainCircuit className="w-5 h-5 text-violet-400" />;
      case 'Integration': return <Share2 className="w-5 h-5 text-blue-400" />;
      case 'Scalability': return <Maximize2 className="w-5 h-5 text-emerald-400" />;
      case 'Better Decisions': return <Compass className="w-5 h-5 text-rose-400" />;
      default: return <TrendingUp className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="outcomes" className="py-24 bg-[#090D16] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider font-mono">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Business Performance Focus</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
            AI Should Improve the Business —{" "}
            <span className="text-cyan-400">Not Just Look Impressive</span>
          </h2>

          <p className="text-base text-slate-300 leading-relaxed">
            We focus strictly on operational metrics: hours saved from mundane toil, reduced cycle times, high data accuracy, and systems that scale seamlessly without requiring proportional headcount.
          </p>
        </div>

        {/* 6 Outcome Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUSINESS_OUTCOMES.map((outcome, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-gradient-to-b from-[#0D1322] to-[#080B14] border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(outcome.category)}
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/40 px-2.5 py-1 rounded border border-cyan-500/20">
                    {outcome.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-display mb-2">
                  {outcome.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  {outcome.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-[10px] font-mono text-slate-500 uppercase">Target Indicator:</span>
                <span className="font-semibold text-slate-300 text-right text-[11px]">
                  {outcome.impactMetric}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Action strip */}
        <div className="mt-14 p-6 rounded-2xl bg-slate-900/60 border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-0.5">
            <h4 className="text-sm font-bold text-white font-display">
              Ready to quantify the automation opportunities in your workflows?
            </h4>
            <p className="text-xs text-slate-400">
              Schedule an objective discovery call to identify tangible ROI areas.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wide transition-all shadow-md shrink-0 cursor-pointer"
          >
            <span>Book Business Impact Review</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

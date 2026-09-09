import React, { useState } from 'react';
import { CONSULTING_STEPS } from '../data/portfolioData';
import { 
  GitCommit, 
  ArrowRight, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  FileCheck,
  Workflow
} from 'lucide-react';

interface ConsultingProcessProps {
  onOpenConsultation: () => void;
}

export const ConsultingProcess: React.FC<ConsultingProcessProps> = ({ onOpenConsultation }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-24 bg-[#05070D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider font-mono">
            <Workflow className="w-3.5 h-3.5" />
            <span>Structured Engagement Methodology</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
            A 5-Step Path from Strategy to Production
          </h2>

          <p className="text-base text-slate-300 leading-relaxed">
            Eliminating guesswork with a disciplined, milestone-driven framework designed to deliver production reliability and team buy-in.
          </p>
        </div>

        {/* Visual Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          {CONSULTING_STEPS.map((item, index) => {
            const isCurrent = activeStep === index;
            return (
              <div
                key={item.step}
                onClick={() => setActiveStep(index)}
                className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-gradient-to-b from-cyan-950/60 to-slate-900 border-cyan-400 shadow-lg shadow-cyan-950/40 ring-1 ring-cyan-400/50 scale-[1.02]'
                    : 'bg-slate-900/40 border-white/10 hover:border-white/20 hover:bg-slate-900/70'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl font-extrabold font-mono text-cyan-400">
                      {item.step}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      Stage {index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-display mb-1">
                    {item.title}
                  </h3>

                  <p className="text-xs font-medium text-cyan-300/80 mb-3">
                    {item.tagline}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1">
                    <FileCheck className="w-3 h-3 text-cyan-400" />
                    <span>Deliverable:</span>
                  </div>
                  <div className="text-[11px] font-semibold text-slate-200">
                    {item.deliverable}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Step Highlight Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-cyan-500/20 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <span className="text-xs font-mono uppercase text-cyan-400 font-bold">
              Ready to begin with Step 01: Discover?
            </span>
            <h4 className="text-lg font-bold text-white font-display">
              Complimentary 30-Minute Technical Discovery & Feasibility Session
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              We review your top manual bottleneck, assess your existing software stack, and outline a high-level feasibility roadmap.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all hover:shadow-lg hover:shadow-cyan-500/30 shrink-0 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Discovery Call</span>
          </button>
        </div>

      </div>
    </section>
  );
};

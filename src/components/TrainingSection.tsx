import React from 'react';
import { TRAINING_OFFERINGS, CONSULTANT_INFO } from '../data/portfolioData';
import { 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Code, 
  BarChart, 
  BookOpen,
  Calendar
} from 'lucide-react';

interface TrainingSectionProps {
  onOpenConsultation: () => void;
  onSelectSolutionForContact: (topic: string) => void;
}

export const TrainingSection: React.FC<TrainingSectionProps> = ({ 
  onOpenConsultation,
  onSelectSolutionForContact 
}) => {
  return (
    <section id="training" className="py-24 bg-[#05070D] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider font-mono">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Team Enablement & Technical Mentorship</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
              AI & Data Knowledge That Teams Can Actually Use
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              Equipping leadership, analysts, and engineering teams with the exact technical skills required to adopt modern AI, write clean Python automation scripts, and build real-time analytics.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={CONSULTANT_INFO.links.preply}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-500/30 text-xs font-semibold transition-all hover:border-amber-400"
            >
              <span>Verified Preply Mentorship Profile</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 6 Training Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {TRAINING_OFFERINGS.map((offering, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-gradient-to-b from-[#0D1322] to-[#080B14] border border-white/10 hover:border-amber-500/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-105 transition-transform">
                  <BookOpen className="w-5 h-5" />
                </div>

                <h3 className="text-base font-bold text-white font-display mb-2">
                  {offering.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  {offering.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-mono text-amber-400/80">
                  Interactive & Project-Based
                </span>
                <button
                  onClick={() => onSelectSolutionForContact(`Training: ${offering.title}`)}
                  className="text-xs font-bold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Training Workshop Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-amber-950/20 via-slate-900 to-slate-950 border border-amber-500/30 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase text-amber-400 font-bold">
              Custom Corporate Curriculum
            </span>
            <h3 className="text-xl font-bold text-white font-display">
              Upskill Your Department with Tailored Internal Bootcamps
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              From executive Generative AI literacy to in-depth Python and Power BI workshops, sessions are customized to your organization's specific data stack and operational goals.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={onOpenConsultation}
              id="train-your-team-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all cursor-pointer"
            >
              <Users className="w-4 h-4" />
              <span>Train Your Team</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

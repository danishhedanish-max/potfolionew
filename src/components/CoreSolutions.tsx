import React, { useState } from 'react';
import { CORE_SOLUTIONS } from '../data/portfolioData';
import { 
  Lightbulb, 
  Cpu, 
  Sparkles, 
  GitBranch, 
  Network, 
  Search, 
  BarChart3, 
  GraduationCap, 
  ArrowRight, 
  Check, 
  FolderCheck,
  Users
} from 'lucide-react';

interface CoreSolutionsProps {
  onOpenConsultation: () => void;
  onSelectSolutionForContact: (solutionTitle: string) => void;
}

export const CoreSolutions: React.FC<CoreSolutionsProps> = ({ 
  onOpenConsultation,
  onSelectSolutionForContact 
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Lightbulb': return <Lightbulb className="w-6 h-6 text-amber-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-cyan-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-violet-400" />;
      case 'GitBranch': return <GitBranch className="w-6 h-6 text-emerald-400" />;
      case 'Network': return <Network className="w-6 h-6 text-blue-400" />;
      case 'Search': return <Search className="w-6 h-6 text-pink-400" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6 text-sky-400" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-orange-400" />;
      default: return <Cpu className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="solutions" className="py-24 bg-[#090D16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider font-mono">
              Core Consulting & Implementation Services
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
              Enterprise AI Solutions Engineered for Real-World Operations
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Every service is structured around solving specific operational bottlenecks, delivering verifiable architectural deliverables, and enabling your internal team.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-500/30 font-semibold text-xs sm:text-sm tracking-wide uppercase transition-all shadow-sm hover:border-cyan-400 cursor-pointer"
            >
              <span>Custom Scoping Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 8 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_SOLUTIONS.map((solution) => {
            const isExpanded = expandedId === solution.id;
            return (
              <div
                key={solution.id}
                id={`solution-card-${solution.id}`}
                className={`rounded-2xl bg-gradient-to-b from-[#0D1322] to-[#080B14] border transition-all duration-300 flex flex-col justify-between p-6 hover:shadow-xl ${
                  isExpanded 
                    ? 'border-cyan-400 ring-1 ring-cyan-400/50 shadow-cyan-950/40' 
                    : 'border-white/10 hover:border-cyan-500/30'
                }`}
              >
                <div>
                  {/* Top Icon & Target Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
                      {getIcon(solution.icon)}
                    </div>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                      Production Tier
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-lg font-bold text-white font-display tracking-tight mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {solution.shortDesc}
                  </p>

                  {/* Target audience */}
                  <div className="text-[11px] text-slate-400 mb-4 flex items-center gap-1.5 font-mono">
                    <Users className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="truncate">{solution.targetAudience}</span>
                  </div>

                  {/* Bullet points */}
                  <div className="space-y-2 mb-4 border-t border-white/5 pt-3">
                    {solution.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Deliverables toggle */}
                  {isExpanded && (
                    <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/30 mb-4 animate-fadeIn space-y-2">
                      <div className="text-[11px] font-bold text-cyan-300 uppercase tracking-wider font-mono flex items-center gap-1">
                        <FolderCheck className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Key Deliverables</span>
                      </div>
                      <ul className="text-xs text-slate-300 space-y-1">
                        {solution.deliverables.map((deliv, dIdx) => (
                          <li key={dIdx} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                            <span>{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Card footer / Actions */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : solution.id)}
                    className="text-[11px] text-slate-400 hover:text-cyan-300 font-medium transition-colors"
                  >
                    {isExpanded ? 'Hide Deliverables' : 'View Deliverables'}
                  </button>

                  <button
                    onClick={() => onSelectSolutionForContact(solution.title)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Discuss</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900/60 to-cyan-950/40 border border-cyan-500/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white font-display">
              Unsure which solution fits your current operational stage?
            </h4>
            <p className="text-xs text-slate-300">
              We conduct a 30-minute technical discovery session to evaluate feasibility, data readiness, and return on investment.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs tracking-wide uppercase transition-all shrink-0 cursor-pointer shadow-md shadow-cyan-500/20"
          >
            <span>Book Discovery Call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

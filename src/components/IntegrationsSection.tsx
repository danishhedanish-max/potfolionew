import React, { useState } from 'react';
import { INTEGRATION_CATEGORIES } from '../data/portfolioData';
import { 
  Network, 
  Database, 
  BarChart, 
  Code2, 
  Cpu, 
  GitBranch, 
  Cloud, 
  CheckCircle2,
  Lock,
  ArrowRight
} from 'lucide-react';

interface IntegrationsSectionProps {
  onOpenConsultation: () => void;
}

export const IntegrationsSection: React.FC<IntegrationsSectionProps> = ({ onOpenConsultation }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...INTEGRATION_CATEGORIES.map(c => c.category)];

  const filteredCategories = activeCategory === 'All'
    ? INTEGRATION_CATEGORIES
    : INTEGRATION_CATEGORIES.filter(c => c.category === activeCategory);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Data & Storage': return <Database className="w-5 h-5 text-cyan-400" />;
      case 'Analytics & Business Intelligence': return <BarChart className="w-5 h-5 text-sky-400" />;
      case 'Development & Web Architecture': return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'AI & Machine Learning': return <Cpu className="w-5 h-5 text-violet-400" />;
      case 'Automation & Orchestration': return <GitBranch className="w-5 h-5 text-emerald-400" />;
      case 'Cloud & DevOps': return <Cloud className="w-5 h-5 text-indigo-400" />;
      default: return <Network className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="integrations" className="py-24 bg-[#090D16] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider font-mono">
              <Network className="w-3.5 h-3.5" />
              <span>Verified Technology Ecosystem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
              AI Integration Ecosystem
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              AI does not live in isolation. We architect bi-directional connections across verified database engines, analytics platforms, enterprise APIs, and modern cloud infrastructure.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-white/5 px-3 py-2 rounded-lg border border-white/5 self-start md:self-end">
            <Lock className="w-3.5 h-3.5 text-cyan-400" />
            <span>Strictly Verified Stacks (No Inflated Claims)</span>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/60 text-slate-300 hover:text-white hover:bg-slate-800 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((catGroup, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-gradient-to-b from-[#0D1322] to-[#080B14] border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {getCategoryIcon(catGroup.category)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-display">
                      {catGroup.category}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {catGroup.description}
                </p>

                {/* Tech Chips */}
                <div className="space-y-2">
                  {catGroup.tools.map((tool, tIdx) => (
                    <div
                      key={tIdx}
                      className="flex items-center justify-between p-2 rounded-lg bg-slate-950/50 border border-white/5 hover:border-cyan-500/20 transition-colors"
                    >
                      <span className="text-xs font-bold text-slate-200">
                        {tool.name}
                      </span>
                      <span className="text-[11px] font-mono text-cyan-300/80 bg-cyan-950/30 px-2 py-0.5 rounded border border-cyan-900/30">
                        {tool.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Production Ready</span>
                </span>
                <span>Custom API Connectors Available</span>
              </div>
            </div>
          ))}
        </div>

        {/* Integration Callout */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400">
            Have proprietary software, custom webhooks, or legacy databases not listed here?
          </p>
          <button
            onClick={onOpenConsultation}
            className="mt-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1.5 transition-colors underline underline-offset-4 cursor-pointer"
          >
            <span>Ask about custom API integration & security architecture</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

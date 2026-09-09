import React from 'react';
import { 
  CheckCircle2, 
  Scale, 
  ShieldCheck, 
  DollarSign, 
  Gauge, 
  Sparkles, 
  FileSearch,
  Lock,
  ArrowRight
} from 'lucide-react';

interface ClaudeImplementationProps {
  onOpenConsultation: () => void;
}

export const ClaudeImplementation: React.FC<ClaudeImplementationProps> = ({ onOpenConsultation }) => {
  const evaluationCriteria = [
    {
      title: "Reasoning & Context Depth",
      icon: Gauge,
      description: "Evaluating complex multi-step reasoning, dense document synthesis, and large 200k+ token context windows for intricate business cases."
    },
    {
      title: "Data Security & Compliance",
      icon: Lock,
      description: "Verifying zero-retention policies, enterprise encryption, SOC2 adherence, and strict data isolation before production deployment."
    },
    {
      title: "Cost & Token Economics",
      icon: DollarSign,
      description: "Comparing prompt caching, input/output token pricing, and model tiering (e.g., Opus vs Sonnet vs Haiku / GPT-4o vs mini) for sustainable ROI."
    },
    {
      title: "Latency & Speed Requirements",
      icon: Scale,
      description: "Balancing time-to-first-token for customer-facing responsiveness vs background deep batch analysis workflows."
    }
  ];

  const implementationAreas = [
    "Internal Knowledge Assistants",
    "High-Density Document Analysis",
    "Enterprise Knowledge Management",
    "Business & Market Research",
    "Automated Technical Reporting",
    "Workflow Intelligence & Triage",
    "Customer Support Copilots",
    "Internal Team Productivity",
    "Structured Schema Generation",
    "AI-Powered Operational Apps"
  ];

  return (
    <section id="claude-implementation" className="py-24 bg-[#090D16] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold uppercase tracking-wider font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Vendor-Neutral Model Strategy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
            Implementing LLMs Where They{" "}
            <span className="text-violet-400">Actually Create Value</span>
          </h2>

          {/* Consultant Stance Quote */}
          <div className="p-4 rounded-xl bg-slate-900/80 border-l-4 border-violet-500 text-slate-200 text-sm md:text-base italic leading-relaxed">
            &ldquo;The right AI model depends on the organization's requirements, data, security considerations, cost, performance and use case.&rdquo;
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            While frontier models like Claude 3.5 Sonnet excel in nuanced reasoning, large context analysis, and code generation, effective consulting demands an objective, model-agnostic evaluation of your specific operational constraints.
          </p>
        </div>

        {/* Evaluation Criteria Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {evaluationCriteria.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gradient-to-b from-[#0D1322] to-[#080B14] border border-white/10 hover:border-violet-500/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-4 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white font-display mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Implementation Areas & CTA Box */}
        <div className="rounded-2xl bg-gradient-to-b from-slate-900/70 to-slate-950/90 border border-white/10 p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <h3 className="text-xl font-bold text-white font-display flex items-center gap-2">
                <FileSearch className="w-5 h-5 text-violet-400" />
                <span>Primary Generative AI Implementation Domains</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Where we benchmark and integrate Claude, GPT, or fine-tuned open-source alternatives:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {implementationAreas.map((area, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-violet-950/20 border border-violet-500/30 flex flex-col justify-between shrink-0 lg:w-80 space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-mono tracking-wider text-violet-400 font-bold">
                  Consulting Deliverable
                </span>
                <h4 className="text-sm font-bold text-white font-display">
                  Model Selection & Cost Feasibility Audit
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Get a data-backed recommendation on model selection, expected token expenditure, and data privacy safeguards.
                </p>
              </div>

              <button
                onClick={onOpenConsultation}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs tracking-wide uppercase transition-all shadow-md shadow-violet-600/20 cursor-pointer"
              >
                <span>Request Model Evaluation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

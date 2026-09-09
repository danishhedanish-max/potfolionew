import React from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  FileSpreadsheet, 
  Layers, 
  Clock, 
  Unlink, 
  Search, 
  Repeat, 
  Cpu, 
  ShieldAlert,
  Zap
} from 'lucide-react';

interface ProblemSectionProps {
  onOpenConsultation: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onOpenConsultation }) => {
  const painPoints = [
    {
      icon: Repeat,
      title: "Repetitive Manual Work",
      detail: "Skilled professionals spending valuable hours on copy-pasting, invoice re-typing, and mundane spreadsheet entry."
    },
    {
      icon: Search,
      title: "Scattered Info & Poor Knowledge Access",
      detail: "Critical institutional knowledge trapped across emails, PDFs, local drives, and disconnected notes."
    },
    {
      icon: Clock,
      title: "Slow Reporting & Delayed Decisions",
      detail: "Leadership waiting days for manual weekly reports, relying on stale figures instead of real-time insights."
    },
    {
      icon: Unlink,
      title: "Disconnected Software Systems",
      detail: "CRMs, ERPs, communication apps, and databases operating in silos with no automated synchronization."
    },
    {
      icon: FileSpreadsheet,
      title: "Manual Document Processing",
      detail: "Contracts, forms, and compliance documents reviewed line-by-line without intelligent extraction."
    },
    {
      icon: ShieldAlert,
      title: "Lack of Practical AI Strategy",
      detail: "Ad-hoc ChatGPT experiments with zero data governance, high hallucination risk, and no operational ROI."
    }
  ];

  return (
    <section id="problem-solution" className="py-20 bg-[#05070D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold tracking-wider uppercase font-mono">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>The Reality of Modern Operations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display leading-tight">
            Your Organization Doesn't Need More AI Hype.{" "}
            <span className="text-cyan-400">It Needs AI That Works.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Most companies don't suffer from a lack of AI tools—they suffer from friction: disconnected tools, manual copy-paste bottlenecks, and experiments that never make it to production.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left: The Frustration / Problem Side */}
          <div className="lg:col-span-6 rounded-2xl bg-gradient-to-b from-red-950/20 via-slate-900/60 to-slate-950/80 border border-red-900/30 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-red-500/20">
                <div className="flex items-center gap-2 text-red-300 font-display font-bold text-lg">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                  <span>The Traditional Bottleneck</span>
                </div>
                <span className="text-xs text-red-400/80 font-mono bg-red-950/40 px-2 py-0.5 rounded border border-red-900/40">
                  High friction & wasted hours
                </span>
              </div>

              <div className="space-y-4">
                {painPoints.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/40 border border-white/5">
                      <div className="p-2 rounded-lg bg-red-500/10 text-red-400 shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-200">{item.title}</h3>
                        <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-red-500/15 text-xs text-slate-400">
              Result: Slow decisions, employee burnout, and expensive AI tools that sit idle.
            </div>
          </div>

          {/* Right: The Pragmatic Solution Side */}
          <div className="lg:col-span-6 rounded-2xl bg-gradient-to-b from-cyan-950/30 via-slate-900/80 to-slate-950/90 border border-cyan-500/30 p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-cyan-950/20">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-cyan-500/20">
                <div className="flex items-center gap-2 text-cyan-300 font-display font-bold text-lg">
                  <Zap className="w-5 h-5 text-cyan-400" />
                  <span>The Practical AI & Automation Approach</span>
                </div>
                <span className="text-xs text-cyan-300 font-mono bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/40">
                  Targeted ROI & Execution
                </span>
              </div>

              <div className="mb-6">
                <p className="text-base text-slate-200 font-medium leading-relaxed">
                  &ldquo;I design practical AI systems that fit into existing workflows, tools and organizational processes.&rdquo;
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-500/20">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Embed AI Into Tools Teams Already Use</h4>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                      No standalone novelty dashboards. AI works directly within your Slack, Teams, CRM, ERP, and databases.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-500/20">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Targeted Automation With Human Safeguards</h4>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                      Routine, error-prone data parsing is automated; sensitive decisions trigger seamless human approval gates.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-500/20">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Private, Citation-Backed Knowledge</h4>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                      Your confidential documentation stays private and grounded with verifiable source references.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-500/20">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Comprehensive Team Enablement</h4>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                      Training your staff so the organization owns and comfortably operates the technology long-term.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                Ready to review your bottlenecks?
              </div>
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs tracking-wide uppercase transition-all shadow-md shadow-cyan-500/20 cursor-pointer"
              >
                <span>Request Workflow Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

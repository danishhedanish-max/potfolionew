import React, { useState } from 'react';
import { 
  GitBranch, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Zap, 
  ShieldCheck, 
  Repeat, 
  UserCheck, 
  Sparkles 
} from 'lucide-react';

interface AutomationSectionProps {
  onOpenConsultation: () => void;
}

export const AutomationSection: React.FC<AutomationSectionProps> = ({ onOpenConsultation }) => {
  const [activeWorkflowTab, setActiveWorkflowTab] = useState<'both' | 'before' | 'after'>('both');

  const beforeSteps = [
    { step: "01", label: "Manual Input", desc: "Staff manually opens incoming files or portals" },
    { step: "02", label: "Spreadsheet Entry", desc: "Data typed cell-by-cell across sheets" },
    { step: "03", label: "Email Threading", desc: "Attachments emailed back and forth" },
    { step: "04", label: "Copy / Paste", desc: "Transcribing figures between CRM and ERP" },
    { step: "05", label: "Human Review", desc: "Exhaustive manual checks for transcription errors" },
    { step: "06", label: "Delayed Report", desc: "Final report generated 3-5 business days later" }
  ];

  const afterSteps = [
    { step: "01", label: "System Trigger", desc: "Webhook, file upload, or scheduled event initiates run", icon: Zap },
    { step: "02", label: "AI Processing", desc: "LLM extracts, classifies, and verifies structured fields", icon: Sparkles },
    { step: "03", label: "Data Integration", desc: "Payload synced automatically across SQL, CRM, and ERP", icon: GitBranch },
    { step: "04", label: "Automated Decision", desc: "Rules evaluate compliance; routine cases auto-passed", icon: CheckCircle2 },
    { step: "05", label: "Human Approval", desc: "Flags and high-value exceptions routed to manager sign-off", icon: UserCheck },
    { step: "06", label: "Action & Analytics", desc: "Records written instantly; Power BI dashboards updated live", icon: ShieldCheck }
  ];

  return (
    <section id="automation" className="py-24 bg-[#05070D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider font-mono">
            <GitBranch className="w-3.5 h-3.5" />
            <span>Workflow Engineering & Automation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
            Turn Repetitive Work Into{" "}
            <span className="text-emerald-400">Intelligent Workflows</span>
          </h2>

          {/* Core Philosophy Quote */}
          <div className="p-4 rounded-xl bg-slate-900/90 border border-emerald-500/20 max-w-2xl mx-auto text-slate-200 text-sm italic">
            &ldquo;The goal is not to remove humans from every process. The goal is to remove unnecessary repetitive work so teams can focus on higher-value activities.&rdquo;
          </div>
        </div>

        {/* View Controls */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-xl bg-slate-900/80 border border-white/10 text-xs font-semibold">
            <button
              onClick={() => setActiveWorkflowTab('both')}
              className={`px-4 py-1.5 rounded-lg transition-all ${
                activeWorkflowTab === 'both' ? 'bg-cyan-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              Side-by-Side Comparison
            </button>
            <button
              onClick={() => setActiveWorkflowTab('before')}
              className={`px-4 py-1.5 rounded-lg transition-all ${
                activeWorkflowTab === 'before' ? 'bg-red-500/80 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              Legacy Process
            </button>
            <button
              onClick={() => setActiveWorkflowTab('after')}
              className={`px-4 py-1.5 rounded-lg transition-all ${
                activeWorkflowTab === 'after' ? 'bg-emerald-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              Intelligent Pipeline
            </button>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* BEFORE CARD */}
          {(activeWorkflowTab === 'both' || activeWorkflowTab === 'before') && (
            <div className="rounded-2xl bg-gradient-to-b from-red-950/20 via-slate-900/70 to-slate-950/90 border border-red-500/20 p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-red-500/20">
                <div className="flex items-center gap-2 text-red-400 font-display font-bold text-lg">
                  <XCircle className="w-5 h-5" />
                  <span>BEFORE: Fragile & Manual</span>
                </div>
                <span className="text-[11px] font-mono text-red-300 bg-red-950/60 px-2.5 py-1 rounded border border-red-900/50">
                  Avg. Turnaround: 3-5 Days
                </span>
              </div>

              <div className="space-y-3">
                {beforeSteps.map((s, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/60 border border-red-900/20 text-xs">
                    <span className="font-mono text-red-400 font-bold w-6 shrink-0">{s.step}</span>
                    <div className="flex-1">
                      <div className="font-bold text-slate-200">{s.label}</div>
                      <div className="text-[11px] text-slate-400">{s.desc}</div>
                    </div>
                    {idx < beforeSteps.length - 1 && (
                      <span className="text-red-500/40 text-[10px] font-mono">↓</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-red-950/30 border border-red-900/40 text-xs text-red-300 flex items-center gap-2">
                <Clock className="w-4 h-4 text-red-400 shrink-0" />
                <span>Heavy human friction, error-prone manual copy-paste, delayed reporting.</span>
              </div>
            </div>
          )}

          {/* AFTER CARD */}
          {(activeWorkflowTab === 'both' || activeWorkflowTab === 'after') && (
            <div className="rounded-2xl bg-gradient-to-b from-emerald-950/20 via-slate-900/70 to-slate-950/90 border border-emerald-500/30 p-6 sm:p-8 space-y-6 shadow-xl shadow-emerald-950/20">
              <div className="flex items-center justify-between pb-4 border-b border-emerald-500/20">
                <div className="flex items-center gap-2 text-emerald-400 font-display font-bold text-lg">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>AFTER: Autonomous & Governed</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-300 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800/50">
                  Avg. Turnaround: &lt; 90 Seconds
                </span>
              </div>

              <div className="space-y-3">
                {afterSteps.map((s, idx) => {
                  const Icon = s.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/80 border border-emerald-500/20 text-xs">
                      <span className="font-mono text-emerald-400 font-bold w-6 shrink-0">{s.step}</span>
                      <div className="w-6 h-6 rounded-md bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-white">{s.label}</div>
                        <div className="text-[11px] text-slate-300">{s.desc}</div>
                      </div>
                      {idx < afterSteps.length - 1 && (
                        <span className="text-emerald-400/50 text-[10px] font-mono">↓</span>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Human-in-the-loop validation for edge cases and exceptions.</span>
                </div>
                <button
                  onClick={onOpenConsultation}
                  className="text-xs font-bold text-emerald-400 hover:text-emerald-300 underline underline-offset-2 shrink-0 ml-2"
                >
                  Automate Yours →
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

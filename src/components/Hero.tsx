import React, { useState } from 'react';
import { CONSULTANT_INFO } from '../data/portfolioData';
import { 
  ArrowRight, 
  Sparkles, 
  Calendar, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  Database, 
  GitBranch, 
  Activity, 
  ShieldCheck,
  Zap,
  Bot,
  ExternalLink
} from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const [activeLayer, setActiveLayer] = useState<number>(2); // Default to AI/LLM layer

  const ecosystemLayers = [
    {
      id: 0,
      title: "1. Business Systems",
      sub: "Existing operational tools",
      nodes: ["CRM", "ERP", "Slack / Teams", "Email", "Cloud (Azure)"],
      description: "Where daily business interactions and operations occur. AI must integrate directly into these tools rather than expecting staff to switch to detached web interfaces.",
      metric: "Zero disruption to existing team habits"
    },
    {
      id: 1,
      title: "2. Data & Documents",
      sub: "Enterprise intelligence sources",
      nodes: ["SQL / Postgres", "MongoDB", "PDF Documents", "Spreadsheets", "APIs"],
      description: "Structured databases and unstructured organizational documents transformed into clean, normalized knowledge ready for rapid AI retrieval.",
      metric: "Unified data pipeline without silos"
    },
    {
      id: 2,
      title: "3. AI / LLM Layer",
      sub: "High-reasoning intelligence models",
      nodes: ["Modern LLMs", "Claude Evaluated", "Custom RAG", "Structured Prompts", "Evaluation Guardrails"],
      description: "Carefully selected and benchmarked models providing domain synthesis, document extraction, query comprehension, and decision support.",
      metric: "Hallucination-guarded & verified outputs"
    },
    {
      id: 3,
      title: "4. Automation & Agents",
      sub: "Event-driven orchestration",
      nodes: ["Trigger Engines", "AI Agents", "API Relays", "Rule Workflows", "Human Approvals"],
      description: "Autonomous processes triggered by business events. Work flows automatically through AI decision nodes with built-in human verification gates.",
      metric: "Eliminates 70%+ of manual copy-paste steps"
    },
    {
      id: 4,
      title: "5. Business Outcomes",
      sub: "Measurable enterprise results",
      nodes: ["Hours Saved", "Faster Turnaround", "Clean Reporting", "Power BI Dashboards", "Operational Scalability"],
      description: "Tangible ROI: lower operational costs, accelerated customer response times, error reduction, and capacity to scale 10x without proportional headcount.",
      metric: "Measurable business impact"
    }
  ];

  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[400px] bg-gradient-to-tr from-cyan-900/20 via-blue-900/15 to-violet-900/20 blur-[130px] -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-600/10 blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide shadow-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>{CONSULTANT_INFO.experienceYears} Experience</span>
            <span className="text-cyan-600/70">|</span>
            <span className="text-slate-300 font-normal">Technology + Business Operations</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Verified AI Solutions Architect</span>
          </div>
        </div>

        {/* Main Headline & Positioning */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                Build Smarter Organizations with{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  AI, Automation
                </span>{" "}
                & Intelligent Systems
              </h1>

              <p className="text-sm md:text-base font-semibold text-cyan-400/90 tracking-wide uppercase">
                AI Solutions. LLM Applications. Intelligent Automation. Business Transformation.
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              {CONSULTANT_INFO.tagline}
            </p>

            {/* Quick value proposition points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-300">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span>Integrated into CRM, ERP & databases</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span>Model evaluation (Claude, GPT, specialized LLMs)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span>Eliminate repetitive manual bottlenecks</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span>Practical training for team adoption</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                id="hero-primary-cta"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold text-sm sm:text-base shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Let's Build Your AI Solution</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                id="hero-secondary-cta"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-white/10 hover:border-white/25 font-semibold text-sm sm:text-base transition-all"
              >
                <span>Explore My Work</span>
              </a>

              <button
                onClick={onOpenConsultation}
                id="hero-small-cta"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-transparent text-cyan-300 hover:text-cyan-200 border border-cyan-500/30 hover:border-cyan-400/60 text-xs sm:text-sm font-semibold transition-all hover:bg-cyan-500/10 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>Book a Consultation</span>
              </button>
            </div>

            {/* Trust Proof Micro-Badge */}
            <div className="pt-2 flex items-center gap-4 text-xs text-slate-400 border-t border-white/5">
              <span>Consultant: <strong className="text-white">Danish Ali Shaikh</strong></span>
              <span>•</span>
              <span>Direct: <a href="mailto:danishhedanish@gmail.com" className="hover:text-cyan-300 underline underline-offset-2">danishhedanish@gmail.com</a></span>
              <span>•</span>
              <span>Location: Available Worldwide</span>
            </div>
          </div>

          {/* Interactive AI Ecosystem Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-[#0F172A]/90 to-[#0B0F19]/90 border border-cyan-500/20 p-5 sm:p-6 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider font-display">
                    Interactive AI Ecosystem Architecture
                  </span>
                </div>
                <span className="text-[11px] text-cyan-400 font-mono">
                  Click layer to inspect
                </span>
              </div>

              <div className="text-xs text-slate-400 py-3 italic">
                &ldquo;AI is connected to the organization — not isolated in a chatbot.&rdquo;
              </div>

              {/* Layer Stack */}
              <div className="space-y-2.5 my-3">
                {ecosystemLayers.map((layer) => {
                  const isSelected = activeLayer === layer.id;
                  return (
                    <div
                      key={layer.id}
                      onClick={() => setActiveLayer(layer.id)}
                      className={`cursor-pointer rounded-xl p-3 transition-all duration-200 border ${
                        isSelected
                          ? 'bg-cyan-950/40 border-cyan-400/60 shadow-md shadow-cyan-950/50 scale-[1.01]'
                          : 'bg-slate-900/40 border-white/5 hover:border-white/20 hover:bg-slate-900/70'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-bold font-display ${isSelected ? 'text-cyan-300' : 'text-slate-200'}`}>
                          {layer.title}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">
                          {layer.sub}
                        </span>
                      </div>

                      {/* Nodes preview */}
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {layer.nodes.map((node) => (
                          <span
                            key={node}
                            className={`text-[10px] px-2 py-0.5 rounded ${
                              isSelected
                                ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-500/30'
                                : 'bg-white/5 text-slate-300 border border-white/5'
                            }`}
                          >
                            {node}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Active Layer Deep Dive Note */}
              <div className="mt-4 p-3.5 rounded-xl bg-slate-950/70 border border-cyan-500/30 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-cyan-300 font-display flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-cyan-400" />
                    How I Architect This Layer:
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono">
                    {ecosystemLayers[activeLayer].metric}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {ecosystemLayers[activeLayer].description}
                </p>
              </div>

              <div className="pt-3 text-center">
                <button
                  onClick={onOpenConsultation}
                  className="text-xs text-slate-400 hover:text-cyan-300 inline-flex items-center gap-1 transition-colors"
                >
                  <span>Need an architecture audit for your stack?</span>
                  <span className="text-cyan-400 font-semibold underline">Schedule a 30-min call →</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

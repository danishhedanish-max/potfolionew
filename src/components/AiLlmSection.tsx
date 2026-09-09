import React, { useState } from 'react';
import { ARCHITECTURE_NODES, LLM_USE_CASES } from '../data/portfolioData';
import { 
  Cpu, 
  ArrowRight, 
  ShieldCheck, 
  FileText, 
  Terminal, 
  Database, 
  Activity, 
  Sparkles,
  Layers,
  ArrowDown
} from 'lucide-react';

export const AiLlmSection: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<number>(2); // Default to LLM / AI Model
  const [selectedUseCase, setSelectedUseCase] = useState<number>(0);

  const nodeDetails = [
    {
      role: "Trigger & Interface",
      detail: "The initiator of the request—either an internal team member via a web portal, a customer inquiry, or an automated system event webhook.",
      stack: "Web Portal, Slack App, Email Hook, API Ingestion"
    },
    {
      role: "Client & Middleware Layer",
      detail: "Handles authentication, payload sanitization, rate-limiting, and context framing before communicating with external AI engines.",
      stack: "React, Node.js, Python Flask, Azure Services"
    },
    {
      role: "Frontier Model Layer",
      detail: "Claude, GPT-4o, or specialized open-source models selected strictly according to latency, token window, reasoning demands, and cost-efficiency.",
      stack: "Claude 3.5 Sonnet, GPT-4o, Custom Fine-Tuned Weights"
    },
    {
      role: "Grounded Enterprise Data",
      detail: "Retrieval-Augmented Generation (RAG) vector embeddings, hybrid keyword search, and SQL schemas ensuring verifiable, zero-hallucination answers.",
      stack: "PostgreSQL, MongoDB Vector, Enterprise PDFs, SQL Data Marts"
    },
    {
      role: "Function Calling & Tools",
      detail: "Model parses intent and issues deterministic JSON schemas to execute external queries, perform calculations, or invoke system actions.",
      stack: "Tool Calling, Custom OpenAPI Schemas, Validation Pydantic / Zod"
    },
    {
      role: "Automation & Orchestration",
      detail: "Executes verified multi-step business logic, routes exceptions to human review, and dispatches automated updates.",
      stack: "Event Bridges, Webhook Relays, Autonomous Agent Logic"
    },
    {
      role: "Enterprise Systems",
      detail: "Writing verified updates directly to your operational CRM, ERP, accounting ledger, or client communication channels.",
      stack: "CRM Systems, ERP Solutions, Power BI, Team Communication"
    },
    {
      role: "Quantifiable Impact",
      detail: "Delivering real operational outcomes: hours of labor saved, sub-minute inquiry resolutions, and 100% auditable citation logs.",
      stack: "Telemetry Dashboards, Accuracy Scores, Cost Reduction"
    }
  ];

  return (
    <section id="ai-llm" className="py-24 bg-[#05070D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>Architecture & Production Workflows</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
            From LLM Experiments to{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Production-Ready AI Workflows
            </span>
          </h2>

          <p className="text-base text-slate-300 leading-relaxed">
            Moving beyond toy demos requires rigorous architecture: grounding models in organizational data, integrating with existing tools, and enforcing strict validation guardrails.
          </p>
        </div>

        {/* Architecture Pipeline Visual (USER -> APP -> LLM -> DATA -> TOOLS -> AUTO -> SYSTEM -> OUTCOME) */}
        <div className="mb-20 rounded-2xl bg-gradient-to-b from-[#0D1322] to-[#080B14] border border-cyan-500/20 p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/10 gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-white font-display flex items-center gap-2">
                <Layers className="w-5 h-5 text-cyan-400" />
                <span>Production LLM System Architecture</span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Click any step to inspect the technical implementation and engineering guardrails.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-950/40 px-3 py-1.5 rounded-lg border border-cyan-500/30">
              <ShieldCheck className="w-4 h-4" />
              <span>Full Data Sovereignty & Zero Training on Your IP</span>
            </div>
          </div>

          {/* Flow Stepper - Desktop Horizontal / Mobile Stacking */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 my-6">
            {ARCHITECTURE_NODES.map((node, index) => {
              const isSelected = selectedNode === index;
              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNode(index)}
                  className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer relative flex flex-col justify-between ${
                    isSelected
                      ? 'bg-cyan-950/60 border-cyan-400 ring-1 ring-cyan-400/50 shadow-lg shadow-cyan-950/50 scale-[1.03]'
                      : 'bg-slate-900/40 border-white/10 hover:border-cyan-500/40 hover:bg-slate-900/80'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1">
                      <span>0{index + 1}</span>
                      {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />}
                    </div>
                    <div className={`text-xs font-bold font-display leading-snug ${isSelected ? 'text-cyan-300' : 'text-slate-200'}`}>
                      {node.label}
                    </div>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-2 truncate">
                    {node.sub}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Node Detail Card */}
          <div className="mt-6 p-5 rounded-xl bg-slate-950/80 border border-cyan-500/30 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold">
                  Stage 0{selectedNode + 1} // {ARCHITECTURE_NODES[selectedNode].label}
                </span>
                <span className="text-xs text-slate-500">|</span>
                <span className="text-xs font-medium text-slate-300">
                  {nodeDetails[selectedNode].role}
                </span>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed">
                {nodeDetails[selectedNode].detail}
              </p>
            </div>
            <div className="md:col-span-4 p-3 rounded-lg bg-slate-900/60 border border-white/5 space-y-1">
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                Representative Tech Stack:
              </div>
              <div className="text-xs font-semibold text-cyan-300">
                {nodeDetails[selectedNode].stack}
              </div>
            </div>
          </div>
        </div>

        {/* High-Value LLM Use Cases Grid */}
        <div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white font-display">
              Where Organizations Realize Concrete Value with LLMs
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Practical business implementations configured for compliance, repeatability, and high accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {LLM_USE_CASES.map((uc, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-gradient-to-b from-slate-900/60 to-slate-950/80 border border-white/5 hover:border-cyan-500/30 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white font-display mb-1.5 group-hover:text-cyan-300 transition-colors">
                  {uc.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {uc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

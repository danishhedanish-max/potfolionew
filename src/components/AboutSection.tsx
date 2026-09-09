import React from 'react';
import { CONSULTANT_INFO } from '../data/portfolioData';
import { 
  User, 
  ExternalLink, 
  Linkedin, 
  Globe, 
  GraduationCap, 
  Mail, 
  Phone, 
  CheckCircle2, 
  ShieldCheck,
  Sparkles,
  Layers
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const verifiedBackground = [
    { title: "Software Engineering", detail: "Production architecture, system design, robust backend/frontend foundations." },
    { title: "Data & Business Intelligence", detail: "SQL schema engineering, Power BI & Tableau dashboards, and ETL pipelines." },
    { title: "Artificial Intelligence & LLMs", detail: "Retrieval-Augmented Generation, Claude & frontier model integration, prompt architectures." },
    { title: "Workflow Automation", detail: "API webhooks, event triggers, and automated multi-system decision pipelines." },
    { title: "Professional Training", detail: "Mentoring teams and individuals in Python, analytics, and practical AI adoption." }
  ];

  return (
    <section id="about" className="py-24 bg-[#090D16] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Bio Card & Verified Credentials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-gradient-to-b from-[#0D1322] to-[#080B14] border border-cyan-500/20 p-6 sm:p-8 space-y-6 shadow-xl">
              
              {/* Profile Header */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-purple-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 font-display font-extrabold text-2xl shadow-inner">
                  DS
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-display">
                    {CONSULTANT_INFO.name}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-400">
                    {CONSULTANT_INFO.headlineRole}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 mt-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>8+ Years Verified Experience</span>
                  </span>
                </div>
              </div>

              {/* Verified Contact Details */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-white/5 space-y-2.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    Email:
                  </span>
                  <a href={`mailto:${CONSULTANT_INFO.email}`} className="text-slate-200 hover:text-cyan-300 font-medium underline underline-offset-2">
                    {CONSULTANT_INFO.email}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-emerald-400" />
                    Phone / WhatsApp:
                  </span>
                  <a href={`tel:${CONSULTANT_INFO.phone}`} className="text-slate-200 hover:text-cyan-300 font-medium font-mono">
                    {CONSULTANT_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Verified Links Strip */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="text-[11px] uppercase font-mono text-slate-400 tracking-wider">
                  Primary Professional References:
                </div>
                <div className="grid grid-cols-1 gap-2">
                  <a
                    href={CONSULTANT_INFO.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-white/5 transition-colors group"
                  >
                    <span className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-blue-400" />
                      <span>LinkedIn Profile</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
                  </a>

                  <a
                    href={CONSULTANT_INFO.links.personal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-white/5 transition-colors group"
                  >
                    <span className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-cyan-400" />
                      <span>Personal Technical Website</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
                  </a>

                  <a
                    href={CONSULTANT_INFO.links.preply}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-white/5 transition-colors group"
                  >
                    <span className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-amber-400" />
                      <span>Preply Professional Tutor Profile</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative Biography & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider font-mono">
                <User className="w-3.5 h-3.5" />
                <span>Executive Biography</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
                Technology Meets Business Thinking
              </h2>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
                &ldquo;8+ years of experience across software engineering, data, AI, analytics, automation, training and technology implementation.&rdquo;
              </p>
            </div>

            <div className="space-y-4 text-sm text-slate-300 leading-relaxed font-normal">
              <p>
                In the fast-moving AI landscape, organizations do not need more detached demos or hypothetical roadmaps—they need practitioners who understand how software systems, corporate databases, and business operations actually interconnect.
              </p>
              <p>
                My background spans the entire spectrum from production software architecture and database engineering to modern generative models, workflow automation, and executive business intelligence. This hybrid perspective allows me to bridge the gap between complex engineering realities and executive ROI expectations.
              </p>
              <p>
                Whether designing a multi-department RAG knowledge assistant, automating invoice extraction workflows, or conducting corporate workshops to elevate team capabilities, my focus remains strictly on delivering measurable operational clarity.
              </p>
            </div>

            {/* Competency Stack */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <h4 className="text-xs uppercase font-mono tracking-wider text-cyan-400 font-bold">
                Core Domains of Practice:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {verifiedBackground.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-900/40 border border-white/5 space-y-1">
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

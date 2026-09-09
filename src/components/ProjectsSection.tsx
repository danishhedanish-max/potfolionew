import React, { useState } from 'react';
import { SELECTED_PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { 
  FolderGit2, 
  Layers, 
  Terminal, 
  CheckCircle, 
  ArrowUpRight, 
  PlusCircle, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface ProjectsSectionProps {
  onOpenConsultation: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenConsultation }) => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'AI & LLMs', 'Automation', 'Data & Analytics'];

  const filteredProjects = filter === 'All'
    ? SELECTED_PROJECTS
    : SELECTED_PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-[#05070D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider font-mono">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Verified Implementations & Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
              Selected Work & AI Experiments
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Real architectural patterns engineered with clear objectives, modern tech stacks, and tangible operational outcomes—without fabricated statistics or simulated hype.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  filter === cat
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/60 text-slate-300 hover:text-white hover:bg-slate-800 border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filteredProjects.map((project: ProjectItem) => (
            <div
              key={project.id}
              id={`project-${project.id}`}
              className="rounded-2xl bg-gradient-to-b from-[#0D1322] to-[#080B14] border border-white/10 hover:border-cyan-500/40 transition-all p-6 sm:p-8 flex flex-col justify-between shadow-lg hover:shadow-cyan-950/30"
            >
              <div className="space-y-5">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {project.category}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    Case Architecture
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-display leading-snug">
                  {project.title}
                </h3>

                {/* Objective */}
                <div className="space-y-1">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                    Objective
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.objective}
                  </p>
                </div>

                {/* Implementation */}
                <div className="space-y-1">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-bold">
                    Implementation
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.implementation}
                  </p>
                </div>

                {/* Outcome */}
                <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-500/20 space-y-1">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Business Outcome</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {project.outcome}
                  </p>
                </div>
              </div>

              {/* Footer Tech Stack */}
              <div className="pt-6 mt-6 border-t border-white/10">
                <div className="text-[10px] font-mono text-slate-400 uppercase mb-2">
                  Technology Stack:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Extensible Placeholder Slot for Owner to add future verified case studies */}
          <div className="rounded-2xl border-2 border-dashed border-white/10 p-6 sm:p-8 flex flex-col items-center justify-center text-center space-y-4 hover:border-cyan-500/30 transition-colors bg-white/[0.01]">
            <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="space-y-1 max-w-sm">
              <h4 className="text-base font-bold text-white font-display">
                Have a Unique Operational Challenge?
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Let's scope and engineer an intelligent solution tailored to your exact workflow requirements.
              </p>
            </div>
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-semibold border border-cyan-500/30 transition-all cursor-pointer"
            >
              <span>Scope Your Project With Me</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

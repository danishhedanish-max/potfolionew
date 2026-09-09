import React from 'react';
import { CONSULTANT_INFO } from '../data/portfolioData';
import { 
  Linkedin, 
  Globe, 
  GraduationCap, 
  Mail, 
  Phone, 
  ArrowUp, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'AI & LLM', href: '#ai-llm' },
    { label: 'Automation', href: '#automation' },
    { label: 'Integrations', href: '#integrations' },
    { label: 'Projects', href: '#projects' },
    { label: 'Consulting Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="main-footer" className="bg-[#030508] border-t border-white/10 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 font-display font-bold text-base">
                DS
              </div>
              <div>
                <div className="text-base font-bold text-white font-display">
                  {CONSULTANT_INFO.name}
                </div>
                <div className="text-xs text-cyan-400 font-medium">
                  {CONSULTANT_INFO.headlineRole}
                </div>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
              Helping organizations implement practical AI, LLM applications, automation and intelligent integrations for better efficiency and performance.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={CONSULTANT_INFO.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 border border-white/5 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={CONSULTANT_INFO.links.personal}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 border border-white/5 transition-colors"
                aria-label="Personal Website"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href={CONSULTANT_INFO.links.preply}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 border border-white/5 transition-colors"
                aria-label="Preply Profile"
              >
                <GraduationCap className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${CONSULTANT_INFO.email}`}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 border border-white/5 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Navigation
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="hover:text-cyan-300 transition-colors py-1"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Direct Contact & Verification */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Direct Contact
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href={`mailto:${CONSULTANT_INFO.email}`} className="text-slate-300 hover:text-white truncate">
                  {CONSULTANT_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`tel:${CONSULTANT_INFO.phone}`} className="text-slate-300 hover:text-white font-mono">
                  {CONSULTANT_INFO.phoneDisplay}
                </a>
              </div>
              <div className="pt-2 text-[11px] text-slate-500 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>8+ Years Verified Experience</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © 2026 {CONSULTANT_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>AI Solutions & Automation Consultant</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

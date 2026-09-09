import React, { useState, useEffect } from 'react';
import { CONSULTANT_INFO } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, Sparkles, Phone, Mail } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'AI & LLM', href: '#ai-llm' },
    { label: 'Automation', href: '#automation' },
    { label: 'Integrations', href: '#integrations' },
    { label: 'Projects', href: '#projects' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#05070D]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Name / Position */}
        <a
          href="#"
          id="brand-logo"
          className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-purple-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 font-display font-bold text-lg shadow-inner group-hover:border-cyan-400 transition-colors">
            DS
          </div>
          <div>
            <div className="text-base font-bold text-white tracking-tight flex items-center gap-2 group-hover:text-cyan-300 transition-colors">
              <span>{CONSULTANT_INFO.name}</span>
              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                8+ Yrs Exp
              </span>
            </div>
            <div className="text-xs text-slate-400 font-medium tracking-wide">
              AI Solutions & Automation Consultant
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-nav-menu" className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              id={`nav-link-${link.label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              className="text-xs xl:text-sm font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-md hover:bg-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${CONSULTANT_INFO.phone}`}
            id="nav-phone-call"
            className="text-xs font-semibold text-slate-300 hover:text-cyan-300 flex items-center gap-1.5 px-2.5 py-1.5 rounded-md hover:bg-white/5 transition-colors"
            title="Direct Call / WhatsApp"
          >
            <Phone className="w-3.5 h-3.5 text-cyan-400" />
            <span>{CONSULTANT_INFO.phoneDisplay}</span>
          </a>
          <button
            onClick={onOpenConsultation}
            id="nav-book-consultation-btn"
            className="relative group overflow-hidden px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white text-xs xl:text-sm font-semibold shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
              <span>Book AI Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          id="mobile-menu-toggle-btn"
          aria-label="Toggle navigation menu"
          className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden bg-[#090D16] border-b border-white/10 px-4 pt-3 pb-6 space-y-3 mt-2 animate-fadeIn"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-200 hover:text-cyan-300 px-3 py-2 rounded-md hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400 px-2">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {CONSULTANT_INFO.email}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                {CONSULTANT_INFO.phoneDisplay}
              </span>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              id="mobile-book-consultation-btn"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm shadow-md"
            >
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span>Book AI Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

import React, { useState } from 'react';
import { CONSULTANT_INFO } from '../data/portfolioData';
import { 
  X, 
  Calendar, 
  Clock, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  ShieldCheck 
} from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetTopic?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ 
  isOpen, 
  onClose,
  presetTopic 
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState(presetTopic || 'AI Strategy & Technical Feasibility');
  const [notes, setNotes] = useState('');
  const [booked, setBooked] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
  };

  const directMailto = `mailto:${CONSULTANT_INFO.email}?subject=${encodeURIComponent(`Consultation Booking Request: ${topic}`)}&body=${encodeURIComponent(`Hi Danish,\n\nI would like to schedule a 30-minute AI Consultation on: ${topic}.\n\nName: ${name}\nEmail: ${email}\nNotes: ${notes}`)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-lg rounded-2xl bg-[#090D16] border border-cyan-500/30 p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {booked ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white font-display">
              Consultation Request Prepared
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm mx-auto">
              Thank you, {name || 'there'}. I have logged your request for <span className="text-cyan-300 font-semibold">{topic}</span>.
            </p>

            <div className="p-4 rounded-xl bg-slate-950 border border-white/5 text-left text-xs text-slate-300 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Direct Email:</span>
                <a href={directMailto} className="text-cyan-400 underline font-mono">
                  {CONSULTANT_INFO.email}
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Direct Call / WhatsApp:</span>
                <a href={`tel:${CONSULTANT_INFO.phone}`} className="text-emerald-400 font-mono">
                  {CONSULTANT_INFO.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={directMailto}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs uppercase tracking-wide hover:bg-cyan-400"
              >
                <Mail className="w-4 h-4" />
                <span>Confirm Via Email App</span>
              </a>
              <button
                onClick={onClose}
                className="w-full px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-slate-300"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>30-Minute AI Scoping Session</span>
              </div>
              <h3 className="text-xl font-bold text-white font-display">
                Book a Consultation with Danish Ali Shaikh
              </h3>
              <p className="text-xs text-slate-400">
                Discuss your business processes, explore AI feasibility, and get direct architectural clarity.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Your Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-white/10 text-slate-100 text-xs focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Business Email *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@company.com"
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-white/10 text-slate-100 text-xs focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Consultation Focus</label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-white/10 text-slate-100 text-xs focus:outline-none focus:border-cyan-400"
                >
                  <option value="AI Strategy & Technical Feasibility">AI Strategy & Technical Feasibility</option>
                  <option value="LLM Application Development">LLM Application Development</option>
                  <option value="Claude & GenAI Evaluation">Claude & GenAI Evaluation</option>
                  <option value="Intelligent Workflow Automation">Intelligent Workflow Automation</option>
                  <option value="AI & Database Integrations">AI & Database Integrations</option>
                  <option value="Corporate AI & Data Training">Corporate AI & Data Training</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Brief Note or Preferred Timings</label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Share a short note about your goals or time zone preferences..."
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-white/10 text-slate-100 text-xs focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-md shadow-cyan-500/20 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Confirm Consultation Request</span>
              </button>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-white/5">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Direct with Consultant</span>
                </span>
                <a href={`tel:${CONSULTANT_INFO.phone}`} className="text-cyan-400 hover:underline">
                  Quick Call: {CONSULTANT_INFO.phoneDisplay}
                </a>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

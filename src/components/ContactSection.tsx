import React, { useState } from 'react';
import { CONSULTANT_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types';
import { 
  Send, 
  CheckCircle2, 
  Mail, 
  Phone, 
  Linkedin, 
  Globe, 
  GraduationCap, 
  ArrowUpRight, 
  AlertCircle, 
  Clock, 
  DollarSign, 
  Briefcase,
  Sparkles,
  MessageSquare
} from 'lucide-react';

interface ContactSectionProps {
  initialProjectType?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialProjectType }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    projectType: initialProjectType || 'AI Solution',
    currentChallenge: '',
    expectedOutcome: '',
    budgetRange: '$5,000 - $15,000',
    timeline: 'Within 1 month'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const projectTypes = [
    'AI Solution',
    'LLM Application',
    'Claude Implementation',
    'AI Automation',
    'Business Process Automation',
    'AI Integration',
    'Data Analytics',
    'AI Training',
    'Other'
  ];

  const budgetOptions = [
    'Under $5,000',
    '$5,000 - $15,000',
    '$15,000 - $30,000',
    '$30,000+',
    'Flexible / Discovery Stage'
  ];

  const timelineOptions = [
    'Immediate (within 2 weeks)',
    'Within 1 month',
    '1 - 3 months',
    'Exploratory / Planning phase'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.currentChallenge.trim()) {
      setErrorMsg('Please complete your name, business email, and current challenge.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMsg('Please enter a valid business email address.');
      return;
    }

    setIsSubmitting(true);

    // Simulate clean dispatch with mailto fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const generateMailto = () => {
    const subject = encodeURIComponent(`AI Project Inquiry: ${formData.projectType} - ${formData.company || formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Company: ${formData.company}\n` +
      `Email: ${formData.email}\n` +
      `Project Type: ${formData.projectType}\n` +
      `Budget Range: ${formData.budgetRange}\n` +
      `Timeline: ${formData.timeline}\n\n` +
      `Current Challenge:\n${formData.currentChallenge}\n\n` +
      `Expected Outcome:\n${formData.expectedOutcome}`
    );
    return `mailto:${CONSULTANT_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-[#05070D] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 blur-[130px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider font-mono">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Scoping & Lead Generation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
            Have an AI Idea? Let's Turn It Into a{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Working Solution.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Tell me about your workflow, challenge or AI idea. Let's explore where AI, LLMs or automation can create measurable value for your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Fast Response Guarantee */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-2xl bg-gradient-to-b from-[#0D1322] to-[#080B14] border border-cyan-500/20 p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-bold">
                  Consultant Contact Channel
                </span>
                <h3 className="text-xl font-bold text-white font-display">
                  Direct Line with Danish Ali Shaikh
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  No gatekeepers or junior sales reps. You speak directly with the AI Solutions & Automation Consultant who will scope, architect, and execute your system.
                </p>
              </div>

              {/* Direct channels */}
              <div className="space-y-3 pt-2">
                <a
                  href={`mailto:${CONSULTANT_INFO.email}`}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-white/10 hover:border-cyan-500/40 text-xs text-slate-200 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-mono">Business Email</div>
                    <div className="font-semibold text-white group-hover:text-cyan-300">{CONSULTANT_INFO.email}</div>
                  </div>
                </a>

                <a
                  href={`tel:${CONSULTANT_INFO.phone}`}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-white/10 hover:border-cyan-500/40 text-xs text-slate-200 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-mono">Phone / WhatsApp (Direct)</div>
                    <div className="font-semibold text-white font-mono group-hover:text-cyan-300">{CONSULTANT_INFO.phoneDisplay}</div>
                  </div>
                </a>
              </div>

              {/* Professional Verified Profiles */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="text-[11px] font-mono text-slate-400 uppercase">
                  Verified Reference Profiles:
                </div>
                <div className="space-y-2">
                  <a
                    href={CONSULTANT_INFO.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-slate-200 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-blue-400" />
                      <span>LinkedIn Profile</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </a>

                  <a
                    href={CONSULTANT_INFO.links.preply}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-slate-200 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-amber-400" />
                      <span>Preply Tutor Page</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </a>

                  <a
                    href={CONSULTANT_INFO.links.personal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-slate-200 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-cyan-400" />
                      <span>Personal Website (rafay183)</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* Response commitment */}
              <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-slate-300 space-y-1">
                <div className="font-bold text-cyan-300 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>24-Hour Scoping Turnaround</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Every inquiry receives an initial feasibility and architectural review within 24 business hours.
                </p>
              </div>

            </div>

          </div>

          {/* Right Column: High-Converting Scoping Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-gradient-to-b from-[#0D1322] to-[#080B14] border border-white/10 p-6 sm:p-8 shadow-2xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-6 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white font-display">
                      Project Details Received
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto">
                      Thank you, <span className="text-white font-bold">{formData.name}</span>. I have received your scoping inquiry for <span className="text-cyan-300 font-semibold">{formData.projectType}</span>.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/60 border border-white/5 text-left max-w-md mx-auto text-xs text-slate-300 space-y-2 font-mono">
                    <div><strong>Email:</strong> {formData.email}</div>
                    <div><strong>Budget:</strong> {formData.budgetRange}</div>
                    <div><strong>Timeline:</strong> {formData.timeline}</div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                    <a
                      href={generateMailto()}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs uppercase tracking-wide hover:bg-cyan-400 transition-all shadow-md"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open Pre-Filled Email Client</span>
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          company: '',
                          email: '',
                          projectType: 'AI Solution',
                          currentChallenge: '',
                          expectedOutcome: '',
                          budgetRange: '$5,000 - $15,000',
                          timeline: 'Within 1 month'
                        });
                      }}
                      className="px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-slate-300 font-semibold"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-white/10 pb-4 mb-2">
                    <h3 className="text-lg font-bold text-white font-display">
                      Project Scoping Form
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Provide details about your operational challenge for a targeted technical response.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Your Full Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-white/10 text-slate-100 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Apex Logistics Ltd."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-white/10 text-slate-100 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </div>
                  </div>

                  {/* Business Email & Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Business Email <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="s.jenkins@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-white/10 text-slate-100 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Project Type <span className="text-cyan-400">*</span>
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-white/10 text-slate-100 text-xs sm:text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      >
                        {projectTypes.map(pt => (
                          <option key={pt} value={pt}>{pt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Current Challenge */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Current Operational Challenge <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      name="currentChallenge"
                      required
                      rows={3}
                      value={formData.currentChallenge}
                      onChange={handleChange}
                      placeholder="Describe the repetitive manual process, scattered data, or AI integration bottleneck you are looking to solve..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-white/10 text-slate-100 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>

                  {/* Expected Outcome */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Expected Business Outcome / Success Metric
                    </label>
                    <input
                      type="text"
                      name="expectedOutcome"
                      value={formData.expectedOutcome}
                      onChange={handleChange}
                      placeholder="e.g. Cut document triage time from 2 days to under 10 minutes"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-white/10 text-slate-100 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>

                  {/* Budget & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 flex items-center gap-1">
                        <DollarSign className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Budget Range</span>
                      </label>
                      <select
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-white/10 text-slate-100 text-xs sm:text-sm focus:outline-none focus:border-cyan-400"
                      >
                        {budgetOptions.map(b => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Target Timeline</span>
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-white/10 text-slate-100 text-xs sm:text-sm focus:outline-none focus:border-cyan-400"
                      >
                        {timelineOptions.map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      id="contact-submit-btn"
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold text-sm tracking-wider uppercase shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Processing Scoping Details...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Discuss My AI Project</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-center text-slate-500 mt-2">
                      Zero spam. Strict non-disclosure discretion for all operational inquiries.
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

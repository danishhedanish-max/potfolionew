import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { ProblemSection } from './components/ProblemSection';
import { CoreSolutions } from './components/CoreSolutions';
import { AiLlmSection } from './components/AiLlmSection';
import { ClaudeImplementation } from './components/ClaudeImplementation';
import { AutomationSection } from './components/AutomationSection';
import { IntegrationsSection } from './components/IntegrationsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { BusinessOutcomes } from './components/BusinessOutcomes';
import { ConsultingProcess } from './components/ConsultingProcess';
import { AboutSection } from './components/AboutSection';
import { TrainingSection } from './components/TrainingSection';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { ContactSection } from './components/ContactSection';
import { ConsultationModal } from './components/ConsultationModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string | undefined>(undefined);
  const [contactProjectType, setContactProjectType] = useState<string | undefined>(undefined);

  const handleOpenConsultation = (topic?: string) => {
    setSelectedTopic(topic);
    setIsConsultationModalOpen(true);
  };

  const handleSelectSolutionForContact = (solutionName: string) => {
    setContactProjectType(solutionName);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#05070D] text-[#E2E8F0] selection:bg-cyan-500/20 selection:text-cyan-300 font-sans">
      {/* Sticky Responsive Navigation Bar */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      <main id="main-content">
        {/* 1. Hero Section with Interactive AI Ecosystem Architecture */}
        <Hero onOpenConsultation={() => handleOpenConsultation()} />

        {/* 2. Trust & Verified Experience Strip */}
        <TrustStrip />

        {/* 3. Problem / Solution Breakdown ("AI That Works") */}
        <ProblemSection onOpenConsultation={() => handleOpenConsultation('Operational Bottleneck Review')} />

        {/* 4. Core Solutions (8 Enterprise Services) */}
        <CoreSolutions 
          onOpenConsultation={() => handleOpenConsultation()}
          onSelectSolutionForContact={handleSelectSolutionForContact}
        />

        {/* 5. Dedicated AI + LLM Section (Interactive Pipeline & Use Cases) */}
        <AiLlmSection />

        {/* 6. Claude & LLM Implementation (Objective Model Strategy) */}
        <ClaudeImplementation onOpenConsultation={() => handleOpenConsultation('Claude & GenAI Evaluation')} />

        {/* 7. Automation Section (Interactive Before vs After) */}
        <AutomationSection onOpenConsultation={() => handleOpenConsultation('Workflow Automation Audit')} />

        {/* 8. AI Integration Ecosystem (Verified Stacks) */}
        <IntegrationsSection onOpenConsultation={() => handleOpenConsultation('Custom API & Database Integration')} />

        {/* 9. Projects & Case Studies (Objective, Implementation, Stack, Outcome) */}
        <ProjectsSection onOpenConsultation={() => handleOpenConsultation('Custom Case Study Scoping')} />

        {/* 10. Business Outcomes (Efficiency, Productivity, Scalability) */}
        <BusinessOutcomes onOpenConsultation={() => handleOpenConsultation('Business Impact Review')} />

        {/* 11. 5-Step Consulting Process Timeline */}
        <ConsultingProcess onOpenConsultation={() => handleOpenConsultation('Discovery Session (Step 01)')} />

        {/* 12. About Section (Executive Biography of Danish Ali Shaikh) */}
        <AboutSection />

        {/* 13. Training & Team Enablement (Corporate Workshops & Mentorship) */}
        <TrainingSection 
          onOpenConsultation={() => handleOpenConsultation('Corporate AI & Data Training')}
          onSelectSolutionForContact={handleSelectSolutionForContact}
        />

        {/* 14. Why Work With Me (Differentiators & Endorsement Architecture) */}
        <WhyWorkWithMe />

        {/* 15. High-Converting Contact & Lead Generation Form */}
        <ContactSection initialProjectType={contactProjectType} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        presetTopic={selectedTopic}
      />
    </div>
  );
}

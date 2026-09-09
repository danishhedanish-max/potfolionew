export interface NavItem {
  label: string;
  href: string;
}

export interface SolutionItem {
  id: string;
  title: string;
  shortDesc: string;
  bullets: string[];
  icon: string;
  deliverables: string[];
  targetAudience: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'AI & LLMs' | 'Automation' | 'Data & Analytics' | 'Integrations';
  objective: string;
  implementation: string;
  techStack: string[];
  outcome: string;
  isPlaceholder?: boolean;
}

export interface IntegrationCategory {
  category: string;
  description: string;
  tools: {
    name: string;
    role: string;
    verified: boolean;
  }[];
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  projectType: string;
  currentChallenge: string;
  expectedOutcome: string;
  budgetRange: string;
  timeline: string;
}

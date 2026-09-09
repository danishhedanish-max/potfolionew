import { SolutionItem, ProjectItem, IntegrationCategory } from '../types';

export const CONSULTANT_INFO = {
  name: "Danish Ali Shaikh",
  headlineRole: "AI Solutions & Automation Consultant",
  subRole: "AI Implementation | LLM Applications | Claude & Generative AI | Business Automation | AI Integrations | Data & Analytics",
  tagline: "I help organizations turn AI from an experimental technology into practical, measurable business solutions.",
  brandMessage: "AI is not about adding another tool. AI is about redesigning how work gets done.",
  primaryValueProp: "I help organizations identify where AI can create real value, design the right solution, integrate it with existing systems, automate repetitive workflows and build practical AI applications that improve efficiency and performance.",
  experienceYears: "8+ Years",
  experienceStatement: "8+ years of experience across software engineering, data, AI, analytics, automation, training and technology implementation.",
  email: "danishhedanish@gmail.com",
  phone: "03272768236",
  phoneDisplay: "+92 327 2768236",
  links: {
    linkedin: "https://www.linkedin.com/in/hellorafayshaikh/",
    personal: "https://rafay183.github.io",
    preply: "https://preply.com/en/tutor/7389596"
  }
};

export const TRUST_PILLARS = [
  { label: "8+ Years Experience", desc: "Enterprise & startup engineering" },
  { label: "AI & Data", desc: "Machine Learning & LLM systems" },
  { label: "Automation", desc: "End-to-end intelligent workflows" },
  { label: "Software Engineering", desc: "Production-grade architectures" },
  { label: "Analytics & BI", desc: "Power BI, Tableau, SQL insights" },
  { label: "Professional Training", desc: "Mentored corporate & individual teams" }
];

export const PROBLEM_STATEMENTS = [
  {
    icon: "Repeat",
    title: "Repetitive Manual Work",
    problem: "Valuable teams spending hours on copy-pasting data, processing documents, and manual re-entry.",
    solution: "End-to-end intelligent automation pipelines with human-in-the-loop validation."
  },
  {
    icon: "Layers",
    title: "Scattered Information & Data Silos",
    problem: "Critical business knowledge fragmented across emails, PDFs, CRM notes, and disparate databases.",
    solution: "Unified AI Knowledge Assistants and Retrieval-Augmented Generation (RAG) over corporate data."
  },
  {
    icon: "Clock",
    title: "Slow Reporting & Manual Analytics",
    problem: "Leadership waiting days for manual spreadsheets and siloed business intelligence updates.",
    solution: "Automated data pipelines, SQL backends, and real-time interactive Power BI & Tableau dashboards."
  },
  {
    icon: "Boxes",
    title: "Disconnected Software Systems",
    problem: "CRM, ERP, cloud tools, and databases operate in isolation without cohesive event bridges.",
    solution: "Custom API integrations and automated middleware connecting tools into a single ecosystem."
  },
  {
    icon: "Compass",
    title: "Lack of AI Adoption Strategy",
    problem: "Attempting random AI experiments or chatbots that fail to yield measurable operational ROI.",
    solution: "Clear feasibility assessments, phased architecture roadmaps, and business-first implementation."
  },
  {
    icon: "Users",
    title: "Skill Gaps & Team Resistance",
    problem: "Teams either fear AI or struggle to use modern generative tools beyond simple prompts.",
    solution: "Hands-on corporate training, tailored workflow playbooks, and practical enablement."
  }
];

export const CORE_SOLUTIONS: SolutionItem[] = [
  {
    id: "ai-solutions-consulting",
    title: "AI Solutions & Consulting",
    shortDesc: "Design practical AI strategies and implementation roadmaps strictly aligned with business objectives.",
    icon: "Lightbulb",
    targetAudience: "Organizations evaluating where AI creates genuine ROI",
    bullets: [
      "AI feasibility analysis & technical readiness assessment",
      "Architecture design for scalable internal systems",
      "Cost-to-benefit modeling (token costs, infrastructure, maintenance)",
      "Risk mitigation, data privacy, and governance planning"
    ],
    deliverables: ["AI Strategic Roadmap", "Architecture Blueprint", "Technology Recommendation Document"]
  },
  {
    id: "llm-applications",
    title: "LLM Application Development",
    shortDesc: "Build production-ready applications powered by modern Large Language Models for internal and customer-facing workflows.",
    icon: "Cpu",
    targetAudience: "Companies seeking tailored generative applications",
    bullets: [
      "Custom Retrieval-Augmented Generation (RAG) engines",
      "Domain-specific prompts and structured JSON outputs",
      "Evaluation pipelines ensuring response accuracy and low hallucination",
      "Secure API proxy and rate-limiting middleware"
    ],
    deliverables: ["Production LLM Application", "Custom Prompt Architecture", "Evaluation & Guardrail Matrix"]
  },
  {
    id: "claude-genai",
    title: "Claude & Generative AI Implementation",
    shortDesc: "Implement Claude and frontier LLM technologies into business workflows, document intelligence, and knowledge engines.",
    icon: "Sparkles",
    targetAudience: "Teams requiring high-reasoning document analysis & complex tasks",
    bullets: [
      "Objective model benchmarking based on latency, token context, and cost",
      "Long-context document analysis and structured extraction",
      "Human-in-the-loop approval workflows for generated artifacts",
      "Vendor-neutral integration matching the best model to each specific workload"
    ],
    deliverables: ["Custom Generative Pipeline", "Document Intelligence Engine", "Model Benchmarking Report"]
  },
  {
    id: "ai-automation",
    title: "AI Automation & Workflow Engineering",
    shortDesc: "Transform repetitive manual steps into autonomous, event-driven intelligent automated processes.",
    icon: "GitBranch",
    targetAudience: "Operations and business leaders burdened by manual procedures",
    bullets: [
      "Trigger-based autonomous process execution",
      "Intelligent document classification, extraction, and verification",
      "Automated decision trees with human escalation triggers",
      "Reduction of manual spreadsheet reconciliation and copy-paste chores"
    ],
    deliverables: ["Automated Workflow Engine", "Exception Handling Workflows", "Operations Playbook"]
  },
  {
    id: "ai-integrations",
    title: "AI & System Integrations",
    shortDesc: "Connect AI models and automation hooks with your existing databases, CRMs, ERPs, APIs, and cloud services.",
    icon: "Network",
    targetAudience: "Companies looking to embed AI inside their daily toolstack",
    bullets: [
      "Bi-directional API connectors (REST, Webhooks, GraphQL)",
      "Database synchronization with SQL, PostgreSQL, MySQL, and MongoDB",
      "Communication bridges for Slack, Microsoft Teams, and Email",
      "Enterprise cloud integration on Azure with robust CI/CD pipelines"
    ],
    deliverables: ["Secure Integration Middleware", "API Synchronization Layer", "Monitoring & Error Logging"]
  },
  {
    id: "knowledge-assistants",
    title: "AI Knowledge Assistants",
    shortDesc: "Build secure internal AI assistants that empower teams to search, understand, and interact with organizational knowledge.",
    icon: "Search",
    targetAudience: "Enterprises with extensive documentation, SOPs, and manuals",
    bullets: [
      "Multi-format document ingestion (PDFs, docs, spreadsheets, codebases)",
      "Strict data boundary enforcement (no training on your private IP)",
      "Citation-backed answers with clickable internal sources",
      "Role-based access permissions matching organizational hierarchy"
    ],
    deliverables: ["Internal Knowledge Portal", "Vector Index Architecture", "Staff Search Interface"]
  },
  {
    id: "data-analytics",
    title: "Data & Analytics Engineering",
    shortDesc: "Build data-driven reporting, structured analytics pipelines, and interactive executive dashboards.",
    icon: "BarChart3",
    targetAudience: "Decision makers needing real-time operational clarity",
    bullets: [
      "SQL data modeling, cleaning, and transformation pipelines",
      "Interactive executive dashboards in Power BI and Tableau",
      "Automated metric calculations and anomaly alerting",
      "Python data pipelines feeding analytical models"
    ],
    deliverables: ["Executive Power BI / Tableau Dashboards", "Optimized SQL Schemas", "Automated Data Ingestion Scripts"]
  },
  {
    id: "ai-training",
    title: "AI Training & Team Enablement",
    shortDesc: "Train technical teams and business professionals to effectively adopt AI, LLMs, automation, and modern data tools.",
    icon: "GraduationCap",
    targetAudience: "Organizations upgrading team capabilities and technical literacy",
    bullets: [
      "Corporate workshops on Generative AI and prompt engineering",
      "Technical training in Python, Streamlit, SQL, and Data Analytics",
      "Best practices for secure AI usage without exposing proprietary data",
      "Hands-on project-based mentoring based on 8+ years of teaching experience"
    ],
    deliverables: ["Custom Training Curriculum", "Practical Code & Workflow Repositories", "Hands-on Workshop Sessions"]
  }
];

export const LLM_USE_CASES = [
  {
    title: "Internal Knowledge Assistants",
    desc: "Instant, citation-grounded retrieval across thousands of internal documents, SOPs, and policies."
  },
  {
    title: "Document Intelligence & Extraction",
    desc: "Automated extraction of structured tabular data from invoices, contracts, and unstructured PDFs."
  },
  {
    title: "Customer Support Automation",
    desc: "Intelligent ticket categorization, sentiment detection, and draft response generation with human review."
  },
  {
    title: "Content & Research Workflows",
    desc: "Accelerating market research, competitor audits, and structured technical drafting."
  },
  {
    title: "Data Analysis & Natural Language Querying",
    desc: "Translating natural language questions into verified SQL queries over operational databases."
  },
  {
    title: "Meeting & Document Summarization",
    desc: "Synthesizing executive summaries, action item extracts, and cross-departmental follow-up items."
  },
  {
    title: "Intelligent Search & Categorization",
    desc: "Semantic search engines that understand query intent instead of brittle keyword matches."
  },
  {
    title: "AI-Powered Decision Support",
    desc: "Synthesizing multi-variable operational inputs to present structured options for executive sign-off."
  }
];

export const ARCHITECTURE_NODES = [
  { id: "user", label: "USER", sub: "Employee, Client or Trigger", color: "from-sky-500 to-blue-600" },
  { id: "app", label: "APPLICATION", sub: "Web, Portal, Internal Tool", color: "from-blue-600 to-indigo-600" },
  { id: "llm", label: "LLM / AI MODEL", sub: "Claude, GPT, Specialized LLMs", color: "from-indigo-600 to-violet-600" },
  { id: "data", label: "KNOWLEDGE / DATA", sub: "Vector DB, SQL, Enterprise Docs", color: "from-violet-600 to-purple-600" },
  { id: "tools", label: "TOOLS / APIs", sub: "Function Calling, Microservices", color: "from-purple-600 to-pink-600" },
  { id: "auto", label: "AUTOMATION", sub: "Event Trigger & Execution Logic", color: "from-pink-600 to-rose-600" },
  { id: "sys", label: "BUSINESS SYSTEM", sub: "CRM, ERP, Cloud, Communication", color: "from-rose-600 to-amber-600" },
  { id: "outcome", label: "MEASURABLE OUTCOME", sub: "Hours Saved, Accuracy, Speed", color: "from-emerald-500 to-teal-500" }
];

export const INTEGRATION_CATEGORIES: IntegrationCategory[] = [
  {
    category: "Data & Storage",
    description: "Enterprise storage backends, relational schemas, and document stores.",
    tools: [
      { name: "SQL", role: "Relational Queries", verified: true },
      { name: "PostgreSQL", role: "Production Relational DB", verified: true },
      { name: "MySQL", role: "Transactional Storage", verified: true },
      { name: "MongoDB", role: "Document & Vector Storage", verified: true },
      { name: "APIs", role: "REST / Webhooks / Data Feeds", verified: true }
    ]
  },
  {
    category: "Analytics & Business Intelligence",
    description: "Translating data pipelines into clear, real-time executive visibility.",
    tools: [
      { name: "Power BI", role: "Executive Dashboards & DAX", verified: true },
      { name: "Tableau", role: "Exploratory Visual Analytics", verified: true }
    ]
  },
  {
    category: "Development & Web Architecture",
    description: "Modern, scalable programming languages and application frameworks.",
    tools: [
      { name: "Python", role: "AI, Scripting, Data Pipelines", verified: true },
      { name: "Flask", role: "Microservice APIs", verified: true },
      { name: "Streamlit", role: "Rapid AI Prototyping", verified: true },
      { name: "Node.js", role: "Server Runtime & Middleware", verified: true },
      { name: "React", role: "Modern Frontends & UI Systems", verified: true }
    ]
  },
  {
    category: "AI & Machine Learning",
    description: "Modern AI models, natural language architectures, and assistants.",
    tools: [
      { name: "LLMs", role: "Large Language Model Ingestion", verified: true },
      { name: "Generative AI", role: "Contextual Synthesis & Drafting", verified: true },
      { name: "Machine Learning", role: "Predictive & Classification Models", verified: true },
      { name: "NLP", role: "Natural Language Processing", verified: true },
      { name: "AI Assistants", role: "Interactive Conversational Agents", verified: true }
    ]
  },
  {
    category: "Automation & Orchestration",
    description: "Eliminating manual touchpoints and orchestrating event triggers.",
    tools: [
      { name: "Workflow Automation", role: "Multi-Step Process Engines", verified: true },
      { name: "API Automation", role: "System-to-System Webhook Relays", verified: true },
      { name: "AI Agents", role: "Autonomous Tool Use & Routing", verified: true },
      { name: "Business Process Automation", role: "Operations Streamlining", verified: true }
    ]
  },
  {
    category: "Cloud & DevOps",
    description: "Reliable version control, containerization, and enterprise hosting.",
    tools: [
      { name: "Azure", role: "Cloud Services & Infrastructure", verified: true },
      { name: "Git", role: "Version Control & History", verified: true },
      { name: "GitHub", role: "Collaborative Code Repositories", verified: true },
      { name: "Docker", role: "Containerized Deployments", verified: true },
      { name: "CI/CD", role: "Automated Build & Deployment Pipelines", verified: true }
    ]
  }
];

export const CONSULTING_STEPS = [
  {
    step: "01",
    title: "Discover",
    tagline: "Understand the Foundation",
    description: "Deep dive into your organization's existing workflows, technology stack, bottlenecks, manual touchpoints, and business objectives.",
    deliverable: "Operational Gap Audit & Technical Scope"
  },
  {
    step: "02",
    title: "Identify",
    tagline: "Find High-Value Opportunities",
    description: "Pinpoint specific operational processes where AI, LLMs, or automation will generate meaningful, measurable business value rather than superficial novelty.",
    deliverable: "AI Feasibility & Prioritization Matrix"
  },
  {
    step: "03",
    title: "Design",
    tagline: "Architect the Solution",
    description: "Design the technical architecture, data flow, API integrations, security boundaries, and user workflows. We evaluate model trade-offs carefully.",
    deliverable: "Solution Architecture & Integration Spec"
  },
  {
    step: "04",
    title: "Implement",
    tagline: "Build, Integrate & Validate",
    description: "Develop the application, connect APIs and databases, build automated triggers, write rigorous evaluation prompts, and thoroughly test with actual data.",
    deliverable: "Working Deployed System & Verification Suite"
  },
  {
    step: "05",
    title: "Optimize",
    tagline: "Measure & Continuously Enhance",
    description: "Monitor execution telemetry, token usage, latency, and operational feedback. Train team members to ensure seamless daily adoption.",
    deliverable: "Performance Telemetry, Training & Documentation"
  }
];

export const BUSINESS_OUTCOMES = [
  {
    category: "Efficiency",
    title: "Reduce Repetitive Manual Work",
    description: "Free skilled professionals from mundane data entry, document sorting, and cross-system copy-pasting so they focus on high-leverage strategy.",
    impactMetric: "Hours of manual labor eliminated weekly"
  },
  {
    category: "Productivity",
    title: "Help Teams Complete Tasks Faster",
    description: "Equip employees with contextual AI assistants that synthesize research, draft initial deliverables, and fetch critical operational answers in seconds.",
    impactMetric: "Accelerated cycle time across core workflows"
  },
  {
    category: "Intelligence",
    title: "Turn Organizational Data into Insights",
    description: "Break open unstructured documents, PDFs, and siloed databases into queryable, actionable intelligence for leadership and front-line teams.",
    impactMetric: "Real-time visibility over previously hidden data"
  },
  {
    category: "Integration",
    title: "Connect AI with Existing Systems",
    description: "Avoid fragmented point-solutions. AI operates seamlessly within your current CRM, ERP, messaging tools, and databases.",
    impactMetric: "Zero disruption to daily operational software"
  },
  {
    category: "Scalability",
    title: "Workflows That Grow With You",
    description: "Automated systems handle 10x process volume without requiring proportional linear headcount increases.",
    impactMetric: "Linear operational cost with non-linear capacity"
  },
  {
    category: "Better Decisions",
    title: "Faster Access to Clean Information",
    description: "Provide decision-makers with grounded synthesis, reducing turnaround times on key customer and management determinations.",
    impactMetric: "Informed, data-backed operational agility"
  }
];

export const SELECTED_PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Enterprise Document Intelligence & Extraction Pipeline",
    category: "AI & LLMs",
    objective: "Eliminate manual data entry and multi-day turnaround times required to parse complex multi-page operational documents, invoices, and unstructured reports.",
    implementation: "Designed a modular pipeline integrating modern LLM extraction with strict JSON validation schema, SQL database staging, and human exception review.",
    techStack: ["Python", "Modern LLMs", "SQL", "APIs", "Docker"],
    outcome: "Transformed unstructured multi-page documents into verified database records with high extraction fidelity and instant anomaly flags."
  },
  {
    id: "proj-2",
    title: "Internal Operational Knowledge Assistant (RAG)",
    category: "AI & LLMs",
    objective: "Enable cross-departmental teams to securely query internal standard operating procedures, documentation, and historical records without exposing IP externally.",
    implementation: "Built a production Retrieval-Augmented Generation (RAG) assistant with semantic search, strict document chunking, citation links, and role-based access.",
    techStack: ["Python", "LLM APIs", "MongoDB / Vector Index", "Streamlit", "Git"],
    outcome: "Teams reduced internal inquiry resolution times while maintaining strict data sovereignty and verifiable source citations."
  },
  {
    id: "proj-3",
    title: "Cross-System Workflow & API Automation Engine",
    category: "Automation",
    objective: "Bridge fragmented communication between incoming customer inquiries, CRM records, team notification channels, and operational database logs.",
    implementation: "Developed event-driven webhook middleware with intelligent routing, automated payload normalization, and multi-channel team escalations.",
    techStack: ["Node.js", "APIs / Webhooks", "MySQL", "CI/CD", "Azure"],
    outcome: "Eliminated repetitive manual status updates and ensured zero dropped leads between intake channels and operational databases."
  },
  {
    id: "proj-4",
    title: "Real-Time Executive Analytics & KPI Telemetry",
    category: "Data & Analytics",
    objective: "Consolidate scattered transactional data from multiple databases into interactive, real-time executive dashboards for operational leaders.",
    implementation: "Engineered automated SQL data cleaning transformations feeding dynamic Power BI data models with DAX performance indicators and drill-downs.",
    techStack: ["Power BI", "PostgreSQL", "SQL", "Python", "Tableau"],
    outcome: "Replaced slow manual spreadsheet consolidation with instant self-service dashboards accessible across leadership devices."
  }
];

export const DIFFERENTIATORS = [
  {
    title: "Business-Oriented AI",
    desc: "Solutions designed to solve actual business bottlenecks and deliver clear operational value, not just showcase trendy experimental tech."
  },
  {
    title: "Technical Depth",
    desc: "8+ years of hands-on experience spanning software engineering, databases, machine learning, analytics, and automation."
  },
  {
    title: "Practical Implementation",
    desc: "Focus on delivering functional, production-ready systems that integrate smoothly into existing stacks rather than detached prototypes."
  },
  {
    title: "End-to-End Thinking",
    desc: "From initial operational discovery and architecture design through to testing, deployment, and team training."
  },
  {
    title: "Human + AI Approach",
    desc: "AI is implemented to empower and augment human teams, keeping critical oversight where judgment is required."
  },
  {
    title: "Continuous Improvement",
    desc: "Architectures built for observability, telemetry tracking, and iterative refinement as organizational needs expand."
  }
];

export const TRAINING_OFFERINGS = [
  {
    title: "Corporate AI & GenAI Workflows",
    desc: "Practical hands-on training for teams to leverage generative AI, prompt engineering, and internal tools responsibly."
  },
  {
    title: "LLM Application Engineering",
    desc: "Empowering software and technical teams to build with LLM APIs, function calling, and structured outputs."
  },
  {
    title: "Data Analytics with Power BI & Tableau",
    desc: "Mastering modern data visualization, DAX, data modeling, and executive KPI reporting."
  },
  {
    title: "Python for Data & Automation",
    desc: "Writing production scripts, data cleaning pipelines, and automation bots to streamline manual workflows."
  },
  {
    title: "SQL & Database Mastery",
    desc: "Query optimization, schema design, relational modeling, and business intelligence querying."
  },
  {
    title: "AI Automation & Tool Integration",
    desc: "Connecting APIs, building webhooks, and orchestrating intelligent multi-step workflows."
  }
];

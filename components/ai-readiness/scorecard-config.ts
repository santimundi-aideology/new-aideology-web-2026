export type MaturityStage = "Beginner" | "Developing" | "Emerging" | "Advanced" | "AI Leader"

export type ScoreValue = 1 | 2 | 3 | 4 | 5

export interface Question {
  id: string
  text: string
  helper?: string
}

export interface Dimension {
  id: string
  name: string
  description: string
  helperText: string
  weight: number
  questions: Question[]
  lowScoreRecommendation: string
}

export interface MaturityThreshold {
  max: number
  stage: MaturityStage
  blurb: string
}

export interface ScaleOption {
  value: ScoreValue
  label: string
  description: string
}

export const scale: ScaleOption[] = [
  { value: 1, label: "Ad hoc", description: "Not established" },
  { value: 2, label: "Early", description: "Limited / pilot" },
  { value: 3, label: "Developing", description: "Partially structured" },
  { value: 4, label: "Advanced", description: "Well defined" },
  { value: 5, label: "Leading", description: "Optimized / enterprise-grade" },
]

export const maturityThresholds: MaturityThreshold[] = [
  {
    max: 35,
    stage: "Beginner",
    blurb:
      "AI activity is ad-hoc and disconnected from the business. Foundational work is needed across strategy, data, and governance before AI can deliver reliable value.",
  },
  {
    max: 55,
    stage: "Developing",
    blurb:
      "Foundations are emerging. Pilots are underway, but capabilities are uneven and scaling is blocked by gaps in data, talent, or operating model.",
  },
  {
    max: 72,
    stage: "Emerging",
    blurb:
      "Repeatable AI practices are forming. Some production use cases are live; the focus is now on integration, governance, and value measurement at scale.",
  },
  {
    max: 87,
    stage: "Advanced",
    blurb:
      "AI is being scaled with clear governance, ROI discipline, and a maturing operating model. The organization is moving toward portfolio-level AI delivery.",
  },
  {
    max: 100,
    stage: "AI Leader",
    blurb:
      "Enterprise-grade, optimized AI capability. AI is embedded in strategy, products, and operations, with continuous improvement and strong governance.",
  },
]

export const industries = [
  "Financial Services",
  "Government & Public Sector",
  "Healthcare & Life Sciences",
  "Manufacturing & Industrial",
  "Energy & Utilities",
  "Retail & Consumer",
  "Telecommunications",
  "Professional Services",
  "Non-profit / NGO",
  "Education",
  "Other",
]

export const roles = [
  "C-Suite (CEO, COO, CFO, etc.)",
  "CTO / CIO / CDO",
  "VP / Head of AI or Data",
  "Director / Senior Manager",
  "Manager / Lead",
  "Consultant / Advisor",
  "Other",
]

export const dimensions: Dimension[] = [
  {
    id: "strategy",
    name: "Strategy",
    description:
      "Executive sponsorship, AI vision, and alignment of AI investment to measurable business goals.",
    helperText:
      "Assess how clearly AI is tied to the organization's business strategy and how actively leadership drives it.",
    weight: 1,
    questions: [
      {
        id: "strategy_q1",
        text: "How clearly is AI linked to your organization's overall business strategy?",
        helper: "Look for a documented AI strategy that maps to measurable business outcomes.",
      },
      {
        id: "strategy_q2",
        text: "How actively does executive leadership sponsor and champion AI initiatives?",
        helper: "Consider CEO, COO, CFO, and board-level engagement — not just IT.",
      },
      {
        id: "strategy_q3",
        text: "Do you have a multi-year AI roadmap with prioritized initiatives and milestones?",
      },
      {
        id: "strategy_q4",
        text: "How consistently is AI discussed at board or executive committee level?",
      },
    ],
    lowScoreRecommendation:
      "Run an executive alignment workshop to define your AI vision and build a 12–24 month roadmap tied to business KPIs.",
  },
  {
    id: "data",
    name: "Data Quality",
    description:
      "Availability, accessibility, cleanliness, and governance of the data that AI systems depend on.",
    helperText:
      "Assess whether your data is trustworthy, well-structured, and ready to power AI and analytics use cases.",
    weight: 1,
    questions: [
      {
        id: "data_q1",
        text: "How available and accessible is the data AI teams need across the organization?",
        helper: "Consider silos, manual extracts, and friction in getting access.",
      },
      {
        id: "data_q2",
        text: "How would you rate the overall cleanliness and consistency of your core datasets?",
      },
      {
        id: "data_q3",
        text: "Do you have a formal data governance framework (ownership, lineage, quality rules)?",
      },
      {
        id: "data_q4",
        text: "How well-defined is your data architecture (data lake, warehouse, catalog, master data)?",
      },
    ],
    lowScoreRecommendation:
      "Commission a data readiness audit and establish a data governance program before scaling AI use cases.",
  },
  {
    id: "talent",
    name: "Talent",
    description:
      "In-house AI and data skills, leadership literacy, and cross-functional capability to deliver AI.",
    helperText:
      "Evaluate both technical talent and business-side AI fluency across leadership and operating teams.",
    weight: 1,
    questions: [
      {
        id: "talent_q1",
        text: "How strong are your in-house AI, data science, and ML engineering capabilities?",
      },
      {
        id: "talent_q2",
        text: "How AI-literate is your executive and senior leadership team?",
        helper: "Can leaders evaluate AI proposals, risks, and trade-offs credibly?",
      },
      {
        id: "talent_q3",
        text: "Do you have cross-functional AI delivery teams (business + tech + data)?",
      },
      {
        id: "talent_q4",
        text: "Is there a structured AI upskilling and capability-building program?",
      },
    ],
    lowScoreRecommendation:
      "Launch an AI literacy program for leaders and a capability roadmap mixing hiring, partners, and upskilling.",
  },
  {
    id: "technology",
    name: "Technology",
    description:
      "Cloud, compute, platforms, and integration capability needed to build and run AI systems.",
    helperText:
      "Assess the AI stack — from compute and data platforms to integration with core enterprise systems.",
    weight: 1,
    questions: [
      {
        id: "tech_q1",
        text: "How modern and scalable is your cloud and compute foundation for AI workloads?",
      },
      {
        id: "tech_q2",
        text: "Do you have standard AI/ML platforms and tooling used across teams?",
      },
      {
        id: "tech_q3",
        text: "How easily can AI solutions integrate with your core systems (ERP, CRM, operational tools)?",
      },
      {
        id: "tech_q4",
        text: "Do you have a clear technology standard for model development, deployment, and hosting?",
      },
    ],
    lowScoreRecommendation:
      "Define a target AI reference architecture (compute, data, platform, integration) and a rationalization plan for tooling.",
  },
  {
    id: "governance",
    name: "Governance",
    description:
      "Policies, ownership, risk controls, and responsible-AI processes that keep AI safe and auditable.",
    helperText:
      "Consider accountability, ethical review, model risk management, and compliance readiness.",
    weight: 1,
    questions: [
      {
        id: "gov_q1",
        text: "Do you have formal AI policies and standards (acceptable use, model risk, responsible AI)?",
      },
      {
        id: "gov_q2",
        text: "Is ownership and accountability for AI systems clearly defined?",
        helper: "Who owns the model, the data, the outcome, and the risk?",
      },
      {
        id: "gov_q3",
        text: "Do you have a responsible-AI / ethics review process for new use cases?",
      },
      {
        id: "gov_q4",
        text: "Are AI systems included in your audit, risk, and compliance framework?",
      },
    ],
    lowScoreRecommendation:
      "Stand up a responsible-AI and governance framework with clear ownership, policies, and a model risk review process.",
  },
  {
    id: "culture",
    name: "Culture",
    description:
      "Openness to change, appetite for experimentation, and leadership support for data-driven decisions.",
    helperText:
      "Assess the organizational mindset — is AI embraced, tolerated, or resisted?",
    weight: 1,
    questions: [
      {
        id: "culture_q1",
        text: "How open is the organization to data-driven ways of working and decision-making?",
      },
      {
        id: "culture_q2",
        text: "Is there a safe environment to experiment, pilot, and sometimes fail with AI?",
      },
      {
        id: "culture_q3",
        text: "How visibly do senior leaders model and reinforce an AI-positive culture?",
      },
      {
        id: "culture_q4",
        text: "Are business teams engaged as active partners in AI projects, not just consumers?",
      },
    ],
    lowScoreRecommendation:
      "Pair AI initiatives with change management: leadership narrative, internal communications, and visible business sponsorship.",
  },
  {
    id: "usecase",
    name: "Use Case Prioritization",
    description:
      "Ability to identify, qualify, and rank high-value AI opportunities as a managed portfolio.",
    helperText:
      "Consider how opportunities are discovered, scored, and selected for investment.",
    weight: 1,
    questions: [
      {
        id: "uc_q1",
        text: "Do you have a structured process to discover and qualify AI use cases?",
      },
      {
        id: "uc_q2",
        text: "Are use cases ranked using consistent criteria (value, feasibility, risk)?",
      },
      {
        id: "uc_q3",
        text: "Do you manage AI use cases as a portfolio with visibility across the enterprise?",
      },
      {
        id: "uc_q4",
        text: "How well are new AI opportunities aligned with strategic priorities?",
      },
    ],
    lowScoreRecommendation:
      "Run a use-case discovery workshop and establish a standard scoring framework to build a prioritized AI portfolio.",
  },
  {
    id: "roi",
    name: "ROI Measurement",
    description:
      "KPI definition, business-case discipline, and value tracking across the AI lifecycle.",
    helperText:
      "Evaluate whether AI initiatives have measurable business cases and post-deployment value reviews.",
    weight: 1,
    questions: [
      {
        id: "roi_q1",
        text: "Do AI initiatives have clear, measurable business cases before funding?",
      },
      {
        id: "roi_q2",
        text: "Are KPIs defined for each AI use case and tracked after deployment?",
      },
      {
        id: "roi_q3",
        text: "Do you conduct post-deployment value reviews to confirm ROI?",
      },
      {
        id: "roi_q4",
        text: "Is AI spend and value reported transparently to executives and finance?",
      },
    ],
    lowScoreRecommendation:
      "Introduce a lightweight business-case and KPI framework for every AI initiative, with post-deployment value reviews.",
  },
  {
    id: "security",
    name: "Security",
    description:
      "Access controls, privacy, and cyber posture for AI systems, data, and models.",
    helperText:
      "Assess how AI-specific security risks (data leakage, model abuse, access) are handled.",
    weight: 1,
    questions: [
      {
        id: "sec_q1",
        text: "Are access controls for AI data, models, and environments well-defined and enforced?",
      },
      {
        id: "sec_q2",
        text: "How mature are your privacy controls for data used in AI (including GenAI)?",
      },
      {
        id: "sec_q3",
        text: "Is your cybersecurity posture extended to AI-specific risks (prompt injection, model abuse, data poisoning)?",
      },
      {
        id: "sec_q4",
        text: "Do you have clear policies for sensitive data use in third-party AI tools?",
      },
    ],
    lowScoreRecommendation:
      "Extend your existing security framework to AI — covering data, models, and GenAI usage — and run an AI security assessment.",
  },
  {
    id: "ops",
    name: "Operational Readiness",
    description:
      "Deployment, monitoring, lifecycle management, and MLOps capability for AI in production.",
    helperText:
      "Consider how AI systems are released, operated, monitored, and improved over time.",
    weight: 1,
    questions: [
      {
        id: "ops_q1",
        text: "How standardized is your process for moving AI models into production?",
      },
      {
        id: "ops_q2",
        text: "Do you have monitoring for model performance, drift, and business KPIs in production?",
      },
      {
        id: "ops_q3",
        text: "Is there a defined lifecycle for AI models (retraining, retiring, versioning)?",
      },
      {
        id: "ops_q4",
        text: "Do you have MLOps tooling and platforms supporting AI delivery at scale?",
      },
    ],
    lowScoreRecommendation:
      "Establish an MLOps foundation: CI/CD for models, monitoring, lifecycle management, and incident response for AI systems.",
  },
  {
    id: "ecosystem",
    name: "Ecosystem Partnerships",
    description:
      "Ability to work with vendors, hyperscalers, startups, consultants, and academia to accelerate AI.",
    helperText:
      "Evaluate how effectively the organization leverages external partners and ecosystems.",
    weight: 1,
    questions: [
      {
        id: "eco_q1",
        text: "Do you have strategic relationships with hyperscalers and AI platform vendors?",
      },
      {
        id: "eco_q2",
        text: "How effectively do you leverage consultants and system integrators for AI delivery?",
      },
      {
        id: "eco_q3",
        text: "Do you source innovation through AI startups, academia, or research networks?",
      },
      {
        id: "eco_q4",
        text: "Is partner management for AI coordinated rather than fragmented across teams?",
      },
    ],
    lowScoreRecommendation:
      "Define an AI partner strategy — hyperscalers, platform vendors, integrators, and innovation partners — with clear governance.",
  },
]

export type MaturityStage = "Beginner" | "Developing" | "Emerging" | "Advanced" | "AI Leader"

export type ScoreValue = 1 | 2 | 3 | 4 | 5

export interface Question {
  id: string
  text: string
  helper?: string
}

export interface RecommendationDetail {
  headline: string
  whyItMatters: string
  whatGoodLooksLike: string
  firstSteps: string[]
}

export interface Dimension {
  id: string
  name: string
  description: string
  helperText: string
  weight: number
  questions: Question[]
  lowScoreRecommendation: string
  recommendationDetail: RecommendationDetail
}

export interface MaturityThreshold {
  max: number
  stage: MaturityStage
  headline: string
  blurb: string
  executiveSummary: string
  strategicFocus: string
  ninetyDayPriorities: string[]
  nextTwelveMonths: string
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
    headline: "Foundations need to be built before AI can deliver at scale.",
    blurb:
      "AI activity is ad-hoc and disconnected from the business. Foundational work is needed across strategy, data, and governance before AI can deliver reliable value.",
    executiveSummary:
      "Your organization is at the start of its AI journey. AI activity today is mostly experimental, driven by individual teams, and not yet anchored to a shared strategy, data foundation, or operating model. That is normal — but it is also the biggest risk. Without a deliberate plan, AI investments will stay scattered, value will be hard to prove, and more mature competitors will pull ahead. The good news: a focused 6–12 month program can move you out of this stage and unlock the first wave of real business value.",
    strategicFocus:
      "Move from experimentation to a shared strategy, a credible roadmap, and a clean first wave of high-value, low-complexity use cases that build confidence and capability at the same time.",
    ninetyDayPriorities: [
      "Run an executive alignment workshop to define an AI vision and 2–3 anchor business outcomes.",
      "Stand up a cross-functional AI steering group and assign clear ownership.",
      "Launch a rapid AI opportunity discovery sweep to build a prioritized portfolio of 10–15 use cases.",
      "Commission a data readiness and security baseline to expose the real foundations you have to work with.",
    ],
    nextTwelveMonths:
      "Land 2–3 high-value production use cases, establish a basic governance and MLOps foundation, and grow internal AI literacy so leaders can make informed decisions.",
  },
  {
    max: 55,
    stage: "Developing",
    headline: "Foundations are forming, but scaling is blocked by uneven capability.",
    blurb:
      "Foundations are emerging. Pilots are underway, but capabilities are uneven and scaling is blocked by gaps in data, talent, or operating model.",
    executiveSummary:
      "Your organization has moved past pure experimentation and has real pilots in motion. The core issue now is consistency: some dimensions are progressing faster than others, and the weakest links — typically data, governance, or operating model — are what will slow everything else down. This is the stage where most organizations either break through into scale or get stuck in permanent pilot mode. The next 6–12 months should be spent hardening foundations, proving value rigorously, and preparing to move AI from projects to a managed portfolio.",
    strategicFocus:
      "Close the gap between your strongest and weakest dimensions. Treat AI as a portfolio, not a set of projects, and industrialize how you move models from pilot to production.",
    ninetyDayPriorities: [
      "Formalize an AI portfolio view with value, feasibility and risk scoring.",
      "Close the two or three lowest-scoring dimensions first — they are gating scale.",
      "Stand up an MLOps foundation (CI/CD, monitoring, lifecycle) for at least one reference use case.",
      "Introduce business cases and KPI tracking for every AI initiative, with post-deployment reviews.",
    ],
    nextTwelveMonths:
      "Exit permanent pilot mode: move 3–5 priority use cases into production with measurable ROI, and put a scalable governance + operating model in place.",
  },
  {
    max: 72,
    stage: "Emerging",
    headline: "Repeatable AI practice is forming — now focus on scale and integration.",
    blurb:
      "Repeatable AI practices are forming. Some production use cases are live; the focus is now on integration, governance, and value measurement at scale.",
    executiveSummary:
      "Your organization has crossed an important line: AI is no longer an experiment, it is a set of live, value-generating use cases. The next step-change will come from depth, not more pilots. That means integrating AI more tightly into core processes, formalizing how value is measured, tightening governance in line with scale, and starting to industrialize the operating model. Done well, this is the stage where AI starts to compound: each new use case is faster and cheaper to deliver than the last.",
    strategicFocus:
      "Industrialize AI delivery, deepen integration into core business processes, and build an enterprise-grade governance and operating model before scale exposes weaknesses.",
    ninetyDayPriorities: [
      "Define a target AI operating model: roles, teams, decision rights, funding.",
      "Consolidate platforms and tooling onto a clear reference architecture.",
      "Extend governance and responsible-AI processes to match the real scale of usage.",
      "Set enterprise-level AI KPIs and a regular value review cadence at leadership level.",
    ],
    nextTwelveMonths:
      "Scale from isolated production use cases to an AI portfolio that is visible, governed, measured, and accelerating — with a clearly defined operating model.",
  },
  {
    max: 87,
    stage: "Advanced",
    headline: "AI is scaling with discipline — now optimize for portfolio-level value.",
    blurb:
      "AI is being scaled with clear governance, ROI discipline, and a maturing operating model. The organization is moving toward portfolio-level AI delivery.",
    executiveSummary:
      "Your organization is in the top tier of AI maturity. AI is governed, measured, and scaling — but the last 20% of the journey is the hardest and most valuable. At this stage, the competitive advantage comes from how well AI is woven into products, customer experience, and operations, and from how fast the organization can absorb new AI capabilities (including GenAI and agentic systems) without losing control. The focus now shifts from building capability to continuously optimizing it.",
    strategicFocus:
      "Shift from building capability to optimizing it: portfolio-level value management, deep business integration, and a safe, fast path to adopt new AI capabilities.",
    ninetyDayPriorities: [
      "Instrument portfolio-level AI value tracking, not just per-use-case ROI.",
      "Harden responsible-AI and model risk management for enterprise-scale and regulated use.",
      "Define a clear adoption path for emerging capabilities (GenAI, agents, multimodal) with guardrails.",
      "Deepen business integration by embedding AI into top customer and operational journeys.",
    ],
    nextTwelveMonths:
      "Move from 'AI at scale' to 'AI as a durable advantage' — with measured portfolio value, strong governance, and a repeatable way to absorb new AI capabilities.",
  },
  {
    max: 100,
    stage: "AI Leader",
    headline: "You are a reference AI organization — protect and compound the lead.",
    blurb:
      "Enterprise-grade, optimized AI capability. AI is embedded in strategy, products, and operations, with continuous improvement and strong governance.",
    executiveSummary:
      "Your organization is operating as a reference AI leader. AI is embedded in strategy, products, and operations; governance, talent, and technology are enterprise-grade; and value is measured as a portfolio, not as isolated wins. At this level the risk is complacency. Leadership organizations sustain their advantage by continuously challenging their own model, absorbing new capabilities earlier than peers, and using AI to reshape — not just improve — their business model.",
    strategicFocus:
      "Protect and compound your lead. Use AI to drive new business models, not just efficiency, and stay ahead of frontier capabilities, responsible-AI expectations, and talent.",
    ninetyDayPriorities: [
      "Run an 'AI horizon' review focused on frontier capabilities and business-model impact.",
      "Benchmark your operating model and portfolio value against top peers.",
      "Stress-test responsible-AI, model risk, and security posture against regulatory direction of travel.",
      "Invest in talent, culture, and ecosystem partnerships to stay ahead of the curve.",
    ],
    nextTwelveMonths:
      "Convert AI leadership into durable strategic advantage: new products, new business models, and a reputation as a trusted, responsible AI organization.",
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
    recommendationDetail: {
      headline: "Anchor AI to the business strategy with a real roadmap",
      whyItMatters:
        "Without an explicit AI strategy and active executive sponsorship, AI investments stay scattered, compete with other priorities, and struggle to prove ROI. This is the single most common reason AI programs stall.",
      whatGoodLooksLike:
        "A documented AI vision tied to 3–5 business outcomes, a prioritized 12–24 month roadmap, clear executive ownership, and AI on the standing agenda of the executive committee and board.",
      firstSteps: [
        "Run a half-day executive alignment workshop to agree the AI vision and outcomes.",
        "Translate the vision into a 12–24 month roadmap with named sponsors and KPIs.",
        "Put AI on the standing agenda of ExCo and board meetings, with a simple value dashboard.",
      ],
    },
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
    recommendationDetail: {
      headline: "Get data AI-ready before scaling use cases",
      whyItMatters:
        "AI amplifies whatever data you feed it. Weak data quality, unclear ownership, or fragmented architecture will cap the performance of every model you deploy and create material risk as you scale.",
      whatGoodLooksLike:
        "Core domains with clear owners, documented quality rules, a working data catalog, and a reference architecture (lake/warehouse/feature store) that AI teams can self-serve from.",
      firstSteps: [
        "Run a data readiness audit focused on the 3–5 data domains your priority use cases depend on.",
        "Stand up a lightweight data governance model — ownership, quality, lineage, access.",
        "Agree a target data architecture and a 12-month plan to close the biggest gaps.",
      ],
    },
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
    recommendationDetail: {
      headline: "Build durable AI capability across tech and business",
      whyItMatters:
        "AI is a team sport. Without fluent leaders and cross-functional delivery teams, even strong models fail to land. Talent is usually the bottleneck that shows up after data.",
      whatGoodLooksLike:
        "Leaders who can evaluate AI proposals credibly, cross-functional pods combining business, data, and engineering, and a deliberate mix of hiring, partners, and upskilling.",
      firstSteps: [
        "Launch an AI literacy program for ExCo and senior leadership.",
        "Stand up 1–2 cross-functional AI delivery pods around priority use cases.",
        "Build a 12-month capability plan mixing hiring, partners, and internal upskilling.",
      ],
    },
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
    recommendationDetail: {
      headline: "Converge on a clear AI reference architecture",
      whyItMatters:
        "Fragmented tooling and ad-hoc infrastructure are fine for pilots and lethal for scale. Without a reference architecture, every new use case re-pays the same setup cost and integration debt.",
      whatGoodLooksLike:
        "A documented AI reference architecture (compute, data, platform, integration), standard patterns for build, deploy and host, and a clear path to adopt new capabilities like GenAI safely.",
      firstSteps: [
        "Document a target AI reference architecture across compute, data, platform, integration.",
        "Rationalize tools down to a supported core set with clear lifecycle ownership.",
        "Define standard patterns for model build, deploy, host, and integration with core systems.",
      ],
    },
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
    recommendationDetail: {
      headline: "Make AI safe, accountable, and auditable by design",
      whyItMatters:
        "Governance is not a blocker to AI — it is the license to scale it. Weak governance creates exposure to regulatory, brand, and operational risk exactly as usage grows.",
      whatGoodLooksLike:
        "Clear AI policies, named accountability for each AI system, a lightweight but real responsible-AI review, and AI fully inside the audit, risk, and compliance perimeter.",
      firstSteps: [
        "Publish an AI acceptable-use and responsible-AI policy with named ownership.",
        "Introduce a simple risk-tiered review process for new AI use cases.",
        "Bring AI systems into your existing audit, risk, and compliance framework.",
      ],
    },
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
    recommendationDetail: {
      headline: "Make AI a shared change story, not just a technology push",
      whyItMatters:
        "AI initiatives that ignore culture and change management routinely under-deliver. Adoption, trust, and experimentation are leading indicators of AI value — and all three are cultural.",
      whatGoodLooksLike:
        "Visible senior leadership narrative, a safe environment to experiment, and business teams that co-own AI outcomes instead of receiving them.",
      firstSteps: [
        "Define a simple leadership narrative about AI and repeat it consistently.",
        "Create a structured 'safe to try' sandbox with clear success and fail-forward rules.",
        "Embed business owners as co-leads on AI initiatives, not just users.",
      ],
    },
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
    recommendationDetail: {
      headline: "Run AI as a portfolio, not a pile of projects",
      whyItMatters:
        "Without a consistent way to discover, score, and prioritize use cases, investment chases noise, not value. A portfolio view is what converts AI spend into compounding returns.",
      whatGoodLooksLike:
        "A single, visible AI portfolio with a standard value/feasibility/risk scoring model, quarterly reviews, and a clear link to strategic priorities.",
      firstSteps: [
        "Run a structured use-case discovery sweep across top business units.",
        "Agree a shared scoring framework (value, feasibility, risk, strategic fit).",
        "Publish a single AI portfolio view and review it quarterly at ExCo.",
      ],
    },
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
    recommendationDetail: {
      headline: "Prove AI value with the same rigor as any other investment",
      whyItMatters:
        "If AI value is not measured with the same discipline as other capex, it will eventually lose budget to things that are. This is where credibility with finance and the board is won or lost.",
      whatGoodLooksLike:
        "Every AI use case has a named KPI, a business case, and a post-deployment value review — and the portfolio value is transparent to finance and the board.",
      firstSteps: [
        "Require a lightweight, standard business case for every funded AI initiative.",
        "Instrument in-production KPIs and run 3–6 month value reviews.",
        "Publish a portfolio-level AI value report to ExCo and finance at a regular cadence.",
      ],
    },
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
    recommendationDetail: {
      headline: "Extend your security perimeter to include AI",
      whyItMatters:
        "AI systems introduce a new class of risks — data leakage, model abuse, prompt injection, shadow GenAI use — that traditional security programs often miss. Maturity here is now a board-level concern.",
      whatGoodLooksLike:
        "AI-specific controls for data, models, and environments, clear policies for third-party AI tool usage, and AI risks fully mapped inside your cyber and privacy program.",
      firstSteps: [
        "Run an AI security assessment focused on data, models, and GenAI usage.",
        "Publish a clear policy for sensitive data use in external AI tools.",
        "Extend your existing threat model and controls to AI-specific risks.",
      ],
    },
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
    recommendationDetail: {
      headline: "Industrialize how AI gets to — and stays in — production",
      whyItMatters:
        "Most AI value is lost between pilot and production, and between deployment and the first signs of drift. MLOps is where ROI quietly leaks away if it is not industrialized.",
      whatGoodLooksLike:
        "A standard path from model to production, continuous monitoring for performance, drift and KPIs, a defined lifecycle for every model, and incident response playbooks.",
      firstSteps: [
        "Standardize the model-to-production path with CI/CD and environments.",
        "Instrument production monitoring for performance, drift, and business KPIs.",
        "Define lifecycle owners, retraining triggers, and incident response for AI systems.",
      ],
    },
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
    recommendationDetail: {
      headline: "Turn the AI ecosystem into a deliberate advantage",
      whyItMatters:
        "No one scales AI alone. Organizations that win with AI partner deliberately — with hyperscalers, platform vendors, integrators, and innovation sources — instead of reacting to vendor noise.",
      whatGoodLooksLike:
        "A small number of strategic AI partners, clear rules of engagement, a structured path to access frontier capability (including startups and academia), and coordinated partner management.",
      firstSteps: [
        "Define an AI partner strategy across hyperscalers, platforms, integrators, and innovation.",
        "Consolidate partner relationships under coordinated ownership.",
        "Create a light-touch innovation pipeline from startups and academia with clear gates.",
      ],
    },
  },
]

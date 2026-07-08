export type GoalId = "revenue" | "efficiency" | "retention"

export type AgentStatus =
  | "live"
  | "in-development"
  | "poc"
  | "scoping"
  | "planned"

export type Agent = {
  id: string
  name: string
  status: AgentStatus
  description?: string
  goals: GoalId[]
}

export type PhaseId = "marketing" | "sales" | "aftersales" | "channel"

export type PipelineStage = {
  id: string
  label: string
  phase: PhaseId
  activities: string[]
  agents: Agent[]
  /** Story of what has happened in this stage so far */
  narrative: string
  goals: GoalId[]
}

export const AGENT_STATUS_LABELS: Record<AgentStatus, string> = {
  live: "Live",
  "in-development": "In development",
  poc: "POC",
  scoping: "Scoping",
  planned: "Planned",
}

export const PHASES: { id: PhaseId; label: string }[] = [
  { id: "marketing", label: "Marketing" },
  { id: "sales", label: "Sales" },
  { id: "aftersales", label: "Aftersales" },
  { id: "channel", label: "Channel" },
]

export const GOALS: {
  id: GoalId
  title: string
  kpiLabel: string
  description: string
  kpis: string[]
}[] = [
  {
    id: "revenue",
    title: "Revenue",
    kpiLabel: "KPIs: Bookings, new logos",
    description:
      "Grow bookings and win new logos by removing friction from the front of the funnel — from campaign through quote to order.",
    kpis: ["Bookings", "New logos"],
  },
  {
    id: "efficiency",
    title: "Efficiency & productivity",
    kpiLabel: "KPIs: FTE reduction, yield per head",
    description:
      "Reduce manual effort in the middle of the lifecycle — quoting, order entry, and finance operations — so each head produces more.",
    kpis: ["FTE reduction", "Yield per head"],
  },
  {
    id: "retention",
    title: "Retention",
    kpiLabel: "KPIs: Higher renewal rates, adoption / cross-sell",
    description:
      "Protect and expand the installed base through better support, renewal discipline, and adoption-led cross-sell.",
    kpis: ["Higher renewal rates", "Adoption / cross-sell"],
  },
]

/**
 * Where each goal applies on the framework board, expressed as column spans.
 * Columns 1–6 are the six Q2C stages in order; column 7 is Partner Management.
 * Mirrors the Q2C framework diagram.
 */
export const GOAL_SPANS: Record<GoalId, { start: number; span: number }[]> = {
  revenue: [
    { start: 1, span: 3 },
    { start: 7, span: 1 },
  ],
  efficiency: [
    { start: 3, span: 2 },
    { start: 7, span: 1 },
  ],
  retention: [{ start: 5, span: 2 }],
}

export const HERO = {
  eyebrow: "White Paper · Prepared for NVIDIA",
  title: "Agentic AI across the Lead-to-Cash lifecycle of IT distribution",
  intro:
    "Local Office (Midis Group), in partnership with AIdeology, is deploying AI agents across the full Quote-to-Cash framework for IT distribution. Production agents are already live for ESET, VMware, and Broadcom, with further stages in active development.",
  metadata: [
    { label: "Client", value: "Local Office (Midis Group)" },
    { label: "Delivery partner", value: "AIdeology" },
    { label: "Audience", value: "NVIDIA partner & solution teams" },
    { label: "Status", value: "Draft for review" },
    { label: "Version", value: "0.2" },
  ],
  draftBanner: "Partner & NVIDIA internal only — draft for review.",
}

/** Who the customer is — from the Midis Local Office corporate profile. */
export const CLIENT_PROFILE = {
  heading: "The customer: Midis Local Office",
  tagline: "Managing the complexities of emerging markets",
  paragraphs: [
    "Local Office is the Midis Group company that manages the complexities of emerging markets. It provides global technology vendors with a complete, dedicated, branded, and consolidated go-to-market presence across Eastern Europe, the Middle East, and Africa — territories that are commercially attractive but operationally demanding.",
    "Its proposition to vendors rests on five commitments: build new markets, accelerate investment, manage compliance and risk, link costs to results, and enable focus on the other 95% of the market. Honouring those commitments across 92 countries and more than twenty vendor lines is exactly the kind of process-heavy, multi-vendor operation where agentic AI earns its keep — which is what the rest of this paper describes.",
  ],
  stats: [
    { value: "1.4B+", label: "Revenue" },
    { value: "92", label: "Countries" },
    { value: "1,300+", label: "Employees" },
    { value: "51", label: "Nationalities" },
    { value: "37", label: "Offices" },
  ],
  pillars: [
    "Build new markets",
    "Accelerate investment",
    "Manage compliance and risk",
    "Link costs to results",
    "Enable focus on the other 95% of the market",
  ],
  vendors: [
    "HPE",
    "IBM",
    "Cohesity",
    "Ivanti",
    "ESET",
    "Broadcom",
    "VMware by Broadcom",
    "CA Technologies",
    "Symantec by Broadcom",
    "Kyriba",
    "Cloud Software Group",
    "Citrix",
    "TIBCO",
    "Commvault",
    "Barracuda",
    "Quest",
    "One Identity",
    "Matrix42",
    "BlackBerry",
    "IGEL",
    "Adobe",
    "DNSFilter",
  ],
}

/** Narrative lead-ins that carry the story from section to section. */
export const NARRATIVE = {
  context: {
    heading: "The programme in context",
    paragraphs: [
      "IT distribution is a process business. Every pound of margin travels through the same lifecycle: a lead becomes an opportunity, an opportunity becomes a quote, a quote becomes an order, an order becomes cash, and — if support and renewals are handled well — the cycle repeats. Local Office, a Midis Group company, runs this lifecycle at scale across vendor portfolios that include ESET, VMware, and Broadcom.",
      "Rather than piloting isolated AI experiments, Local Office and AIdeology chose a process-based approach: map the whole Quote-to-Cash framework, identify where agents create measurable value in each stage, and deploy them one at a time into production. The result is not a proof of concept — several agents have been running in live operations for over a year, and the roadmap now extends into finance and inside sales.",
      "This paper walks through that framework stage by stage, shows which agents are live and which are coming, and sets out what NVIDIA partner and solution teams need to know about the platform underneath.",
    ],
  },
  goals: {
    heading: "Three goals, one lifecycle",
    paragraphs: [
      "Every agent in the programme answers to one of three commercial goals, and each goal maps onto a specific span of the lifecycle. Revenue is won at the front of the funnel, efficiency in the middle, and retention at the back — with partner management contributing across the board. Select a goal below to see where it applies on the framework.",
    ],
  },
  pipeline: {
    heading: "The Lead-to-Cash framework",
    paragraphs: [
      "The board below mirrors how Local Office actually organises the business: four phases — Marketing, Sales, Aftersales, and Channel — containing six sequential Q2C stages plus a cross-cutting Partner Management function. Each stage lists its day-to-day activities. Click any stage to see the agents working inside it and what has been achieved so far.",
      "The roadmap is deliberately broad: more than thirty agent roles have been mapped across the lifecycle, from market analysis at the front to MDF management in the channel. A handful are live in production today; the rest progress through a defined path of development, proof-of-concept, scoping, and planning — each stage drawer shows exactly where its agents stand.",
    ],
  },
  brief: {
    heading: "What NVIDIA needs to know",
    paragraphs: [
      "The sections that follow read as a partner solution brief: what the solution is, why it is different, how the agent pipeline works, and what it runs on. Where a detail has not yet been confirmed with Local Office or NVIDIA, it is marked inline rather than guessed.",
    ],
  },
  governance: {
    heading: "How it scales",
    paragraphs: [
      "The agents described above are individual products, but they run on a shared operating model. Six design decisions make it possible to keep adding agents — for new business units inside Midis Group and, eventually, for external customers — without multiplying infrastructure or losing control of cost and quality.",
    ],
  },
}

export const PIPELINE_STAGES: PipelineStage[] = [
  {
    id: "lead-to-opportunity",
    label: "Lead to Opportunity",
    phase: "marketing",
    activities: [
      "Campaign planning / execution",
      "Brand guidelines / management",
    ],
    agents: [
      {
        id: "bdr-qualification",
        name: "BDR / qualification",
        status: "scoping",
        description:
          "Analyses interest and inbound leads, qualifying them for sales follow-up. One of the three initial inside-sales agents being scoped.",
        goals: ["revenue", "efficiency"],
      },
      {
        id: "brand-specific-content",
        name: "Brand-specific content",
        status: "scoping",
        description:
          "Produces brand-specific content for inside-sales outreach. One of the three initial inside-sales agents being scoped.",
        goals: ["revenue"],
      },
      {
        id: "lead-followup-prioritisation",
        name: "Lead / opportunity follow-up prioritisation",
        status: "scoping",
        description:
          "Prioritises which leads and opportunities inside sales should follow up first. One of the three initial inside-sales agents being scoped.",
        goals: ["revenue", "efficiency"],
      },
      {
        id: "market-analyst",
        name: "Market analyst",
        status: "planned",
        description:
          "Monitors market feeds and identifies key relevant developments for marketing and sales.",
        goals: ["revenue"],
      },
      {
        id: "campaign-designer",
        name: "Campaign designer",
        status: "planned",
        description:
          "Identifies and defines potential campaign activities — events, webinars — from the market analyst feed.",
        goals: ["revenue"],
      },
      {
        id: "campaign-execution",
        name: "Campaign execution",
        status: "planned",
        description:
          "Sets up campaigns, segments audiences, and drives outbound communications.",
        goals: ["revenue"],
      },
    ],
    narrative:
      "The inside-sales role has been analysed, potential agents identified, and three are now being scoped as the first wave: qualification, brand-specific content, and lead/opportunity follow-up prioritisation. Behind them sits a planned campaign roster — market analyst, campaign designer, and campaign execution — that would close the loop from market signal to outbound activity. Whether to leverage the Mindware MAGIC tool is an open question under evaluation.",
    goals: ["revenue"],
  },
  {
    id: "opportunity-to-quote",
    label: "Opportunity to Quote",
    phase: "sales",
    activities: [
      "Deal registration",
      "Opportunity management",
      "Forecasting",
      "Configuration",
      "Standard pricing",
      "Request / approve special pricing",
    ],
    agents: [
      {
        id: "vmware-sku-advisor",
        name: "VMware SKU advisor",
        status: "in-development",
        description:
          "Guides sales teams through VMware SKU selection and configuration options.",
        goals: ["revenue", "efficiency"],
      },
      {
        id: "quote-manager",
        name: "Quote Manager",
        status: "live",
        description: "RPA-assisted quote creation in Broadcom CPQ.",
        goals: ["revenue", "efficiency"],
      },
      {
        id: "broadcom-cpq-renewals",
        name: "Broadcom CPQ / renewals",
        status: "live",
        description:
          "Renewal and quote workflows in Broadcom CPQ — live for 18 months.",
        goals: ["revenue", "retention"],
      },
      {
        id: "requirement-analyst",
        name: "Requirement analyst",
        status: "planned",
        description:
          "Reviews RFPs and customer requests to extract requirements and match them to vendor solutions.",
        goals: ["revenue"],
      },
      {
        id: "proposal-writer",
        name: "Proposal writer",
        status: "planned",
        description:
          "Addresses requirements using the knowledge base and previous proposals and RFPs.",
        goals: ["revenue"],
      },
      {
        id: "configuration-engineer",
        name: "Configuration engineer",
        status: "planned",
        description:
          "Defines the correct technologies and SKUs and creates the quote.",
        goals: ["revenue", "efficiency"],
      },
      {
        id: "presales-specialist",
        name: "Presales specialist",
        status: "planned",
        description:
          "Describes product capabilities and answers technical questions during the sales cycle.",
        goals: ["revenue"],
      },
      {
        id: "deal-management",
        name: "Deal management",
        status: "planned",
        description:
          "Reviews deal, country, competition, and track record to recommend the initial price.",
        goals: ["revenue", "efficiency"],
      },
    ],
    narrative:
      "The most mature stage of the programme. The Broadcom CPQ agent has been in production for 18 months, and Quote Manager creates quotes in Broadcom CPQ through RPA today, with a VMware SKU advisor in development for complex configuration choices. A further planned roster — requirement analyst, proposal writer, configuration engineer, presales specialist, and deal management — would cover the full path from RFP to priced quote.",
    goals: ["revenue"],
  },
  {
    id: "quote-to-order",
    label: "Quote to Order",
    phase: "sales",
    activities: [
      "Quoting",
      "Terms & conditions",
      "Wholesale data feeds / EDI",
    ],
    agents: [
      {
        id: "po-validation",
        name: "PO Validation",
        status: "live",
        description:
          "Learns the PO format, compares it to quote detail, and loads it into SFDC. Live for VMware; refining and rolling out to further vendor lines.",
        goals: ["efficiency", "revenue", "retention"],
      },
      {
        id: "contract-writer",
        name: "Contract writer",
        status: "planned",
        description:
          "Drafts updated agreements from Midis policies and the knowledge base, and reviews customer redlines.",
        goals: ["revenue"],
      },
    ],
    narrative:
      "PO Validation is live for VMware and rolling out to further vendor lines: it learns the PO format, compares it to quote detail, and loads valid orders into SFDC — removing the manual re-keying that used to sit between an accepted quote and a booked order. A contract-writer agent is planned to handle terms and customer redlines on the same path.",
    goals: ["revenue", "efficiency"],
  },
  {
    id: "order-to-cash",
    label: "Order to Cash",
    phase: "sales",
    activities: [
      "Order / order entry",
      "Order tracking",
      "Logistics",
      "Billing",
      "Credit / collections",
      "Returns",
    ],
    agents: [
      {
        id: "ap-invoice-validation",
        name: "Accounts Payable / invoice validation",
        status: "in-development",
        description:
          "Reviews vendor invoices against the Midis PO and raises payment if valid and due — building on the PO Validation process.",
        goals: ["efficiency"],
      },
      {
        id: "reconciliation",
        name: "Reconciliation",
        status: "poc",
        description:
          "Automated payment and ledger reconciliation — POC in development.",
        goals: ["efficiency"],
      },
      {
        id: "accounts-receivable",
        name: "Accounts Receivable",
        status: "scoping",
        description:
          "Confirms fulfilment, creates the relevant invoices, and chases payment when due. Role analysed; potential agents being identified.",
        goals: ["efficiency"],
      },
      {
        id: "expense-validation",
        name: "Expense validation",
        status: "scoping",
        description:
          "Reviews expense claims for validity before payment. Analysis underway.",
        goals: ["efficiency"],
      },
      {
        id: "logistics-scheduler",
        name: "Logistics Scheduler",
        status: "planned",
        description:
          "Compares the commercial invoice and licences to the PO, schedules logistics, and shares licences.",
        goals: ["efficiency"],
      },
    ],
    narrative:
      "Finance operations are the current build focus. Accounts Payable invoice validation is in development, building directly on the PO Validation process already proven in production. A reconciliation agent is at proof-of-concept stage, the Accounts Receivable role has been analysed with potential agents being identified, and expense claim validation analysis is underway. A logistics-scheduler agent is planned to close the fulfilment loop.",
    goals: ["efficiency"],
  },
  {
    id: "service-support",
    label: "Service & Support",
    phase: "aftersales",
    activities: [
      "Raise / manage call",
      "Entitlement checks",
      "Elevate to level 2/3",
      "Professional services",
    ],
    agents: [
      {
        id: "eset-product-qa",
        name: "ESET product Q&A / support agent",
        status: "live",
        description:
          "Answers basic support questions in production. Phase 2 will capture details and log a case if the query is not resolved.",
        goals: ["retention", "efficiency"],
      },
      {
        id: "case-recipient-l0",
        name: "Case recipient (L0)",
        status: "planned",
        description:
          "Captures issues directly, in addition to the ones submitted online by the customer.",
        goals: ["retention", "efficiency"],
      },
      {
        id: "solution-finder-l1",
        name: "Solution finder (L1)",
        status: "planned",
        description:
          "Reviews knowledge bases, FAQs, and similar sources to suggest resolutions to common issues.",
        goals: ["retention", "efficiency"],
      },
      {
        id: "ps-assistant",
        name: "PS Assistant",
        status: "planned",
        description:
          "Keeps professional services teams on up-to-date best practice, cross-referring product docs, cheat sheets, and similar.",
        goals: ["retention"],
      },
      {
        id: "satisfaction-monitor",
        name: "Satisfaction monitor",
        status: "planned",
        description:
          "Captures customer sentiment after cases and annual reviews, and identifies key trends.",
        goals: ["retention"],
      },
      {
        id: "problem-manager",
        name: "Problem manager",
        status: "planned",
        description:
          "Identifies trends in cases and requests, and suggests systemic resolutions.",
        goals: ["retention", "efficiency"],
      },
      {
        id: "vmware-value-agent",
        name: "VMware 'value' agent",
        status: "planned",
        description:
          "Potential scope: review cases to identify gaps, adoption potential, and similar opportunities.",
        goals: ["retention"],
      },
    ],
    narrative:
      "The ESET agent answers basic support questions in production; phase 2 will capture details and log a case when a query is not resolved. The support role has been analysed and the potential agents identified — from L0 case capture and L1 solution finding through satisfaction monitoring and problem management — with a VMware 'value' agent under consideration to review cases and surface adoption gaps.",
    goals: ["retention"],
  },
  {
    id: "renew-replace",
    label: "Renew or Replace",
    phase: "aftersales",
    activities: [
      "Customer satisfaction",
      "Entitlement data / contract end",
      "Quoting",
    ],
    agents: [
      {
        id: "broadcom-cpq-renewals-ror",
        name: "Broadcom CPQ / renewals",
        status: "live",
        description:
          "Renewal workflow automation in Broadcom CPQ — live for 18 months.",
        goals: ["retention", "revenue"],
      },
      {
        id: "renewal-comms",
        name: "Renewal comms",
        status: "planned",
        description:
          "Communicates with distributors, partners, and customers at T-120, T-90, and other renewal milestones.",
        goals: ["retention"],
      },
      {
        id: "renewal-quote",
        name: "Renewal quote",
        status: "planned",
        description:
          "Reviews the renewal and adapts it — changed products, co-termination, and similar.",
        goals: ["retention", "revenue"],
      },
    ],
    narrative:
      "Renewals were where the programme started. The Broadcom CPQ renewals agent has run in production for 18 months, identifying contracts approaching end date and generating renewal quotes — the longest-serving agent in the portfolio. Renewal-comms and renewal-quote agents are planned to extend the pattern: proactive outreach at T-120 and T-90, and quotes that adapt to changed products or co-termination.",
    goals: ["retention"],
  },
]

export const PARTNER_MANAGEMENT = {
  id: "partner-management",
  label: "Partner Management",
  phase: "channel" as PhaseId,
  activities: [
    "Contract / on-boarding",
    "Audit & compliance",
    "Enablement, training & certification",
    "Partner plan / reporting",
    "Payments — soft margin, MDF, etc.",
  ],
  agents: [
    {
      id: "partner-support",
      name: "Partner Support",
      status: "planned",
      description:
        "Supports queries from partners on status, registrations, rebates, and similar.",
      goals: ["revenue"],
    },
    {
      id: "rtm-manager",
      name: "RTM Manager",
      status: "planned",
      description:
        "Monitors route-to-market performance, identifies risks, and suggests optimisations.",
      goals: ["revenue"],
    },
    {
      id: "rebate-coordinator",
      name: "Rebate Coordinator",
      status: "planned",
      description:
        "Identifies when rebates are due, triggers calculations, and raises payments.",
      goals: ["efficiency"],
    },
    {
      id: "mdf-manager",
      name: "MDF Manager",
      status: "planned",
      description:
        "Confirms evidence and validates third-party invoices, then hands them to Accounts Payable.",
      goals: ["efficiency"],
    },
  ] as Agent[],
  narrative:
    "Partner management runs across the whole lifecycle rather than inside one stage. Workflows are integrated into the existing Salesforce and Traverse processes today, and four dedicated agents are planned: partner support for queries, an RTM manager for route-to-market performance, a rebate coordinator, and an MDF manager feeding validated invoices into Accounts Payable.",
  goals: ["revenue", "efficiency"] as GoalId[],
}

/* ---------- NVIDIA partner solution brief (narrative form) ---------- */

export type BriefSegment =
  | { t: "text"; v: string }
  | { t: "strong"; v: string }
  | { t: "confirm"; v: string }
  | { t: "candidate"; v: string }

export type BriefSection = {
  id: string
  kicker: string
  heading: string
  paragraphs: BriefSegment[][]
}

export const BRIEF_SECTIONS: BriefSection[] = [
  {
    id: "solution",
    kicker: "Solution name · Domain · Status",
    heading: "One programme, many agents",
    paragraphs: [
      [
        { t: "text", v: "The solution presented here is the " },
        { t: "strong", v: "Local Office Agentic AI — Lead-to-Cash Programme" },
        {
          t: "text",
          v: ", operating in the domain of IT distribution across the full Quote-to-Cash lifecycle. Its status is unambiguous: production agents are live today for ESET, VMware, and Broadcom, with the Broadcom renewals agent running for 18 months, while finance and inside-sales agents move through development, proof-of-concept, and scoping.",
        },
      ],
      [
        {
          t: "text",
          v: "Points of contact are still being assigned on both sides: the technical PIC ",
        },
        { t: "confirm", v: "Technical PIC" },
        { t: "text", v: " and the NVIDIA counterpart " },
        { t: "confirm", v: "NV PIC" },
        {
          t: "text",
          v: " will be named once the engagement structure is agreed.",
        },
      ],
    ],
  },
  {
    id: "differentiator",
    kicker: "Executive summary · Key differentiator · KPIs",
    heading: "Why this programme is different",
    paragraphs: [
      [
        {
          t: "text",
          v: "In two lines: AIdeology is delivering an agentic AI programme for Local Office (Midis Group) across the full Lead-to-Cash lifecycle of IT distribution. Production agents are already live for ESET, VMware, and Broadcom, with a structured roadmap into finance, sales, and support automation.",
        },
      ],
      [
        {
          t: "text",
          v: "What sets it apart is not any single agent but the pattern: production-grade agents deployed across multiple vendor ecosystems within one Quote-to-Cash framework, each instrumented for ROI and designed for reuse through an internal agent marketplace. Success is measured with the same KPIs that structure this paper — bookings and new logos for revenue, FTE reduction and yield per head for efficiency, and higher renewal rates with adoption-led cross-sell for retention.",
        },
      ],
    ],
  },
  {
    id: "deployment",
    kicker: "Deployment details · Scale",
    heading: "What it runs on",
    paragraphs: [
      [
        {
          t: "text",
          v: "The programme runs on a single shared Azure backend, serving every business unit from one environment with usage-based billing. The serving model ",
        },
        { t: "confirm", v: "Model" },
        { t: "text", v: ", the managed-deployment arrangement " },
        { t: "confirm", v: "Managed Deployment" },
        { t: "text", v: ", and the target hardware SKU " },
        { t: "confirm", v: "HW SKU" },
        {
          t: "text",
          v: " are being confirmed as part of the platform conversation with NVIDIA.",
        },
      ],
      [
        { t: "text", v: "The same applies to scale figures: the number of users " },
        { t: "confirm", v: "# Users" },
        { t: "text", v: " and the GPU footprint " },
        { t: "confirm", v: "# GPUs or GPU-hrs/month" },
        {
          t: "text",
          v: " will be quantified once the model and deployment shape are fixed. Nothing in this paper should be read as a committed sizing.",
        },
      ],
    ],
  },
  {
    id: "software",
    kicker: "SW details",
    heading: "The software stack",
    paragraphs: [
      [
        {
          t: "text",
          v: "On the NVIDIA side, three components are under evaluation as candidates for the agent platform: ",
        },
        { t: "candidate", v: "NIM microservices" },
        { t: "text", v: ", " },
        { t: "candidate", v: "NeMo Agent Toolkit" },
        { t: "text", v: ", and " },
        { t: "candidate", v: "Nemotron" },
        {
          t: "text",
          v: ". None is committed yet; the evaluation is part of the reason this brief exists.",
        },
      ],
      [
        {
          t: "text",
          v: "The surrounding stack is already in production and confirmed: Azure for infrastructure, Salesforce and Traverse as the systems of record, Broadcom CPQ for quoting, RPA for system actions where no API exists, EDI for wholesale data feeds, and MCP as the integration protocol connecting agents to tools.",
        },
      ],
    ],
  },
  {
    id: "blockers",
    kicker: "Major blockers",
    heading: "Open items",
    paragraphs: [
      [
        {
          t: "text",
          v: "A consolidated list of major blockers ",
        },
        { t: "confirm", v: "Major Blockers" },
        {
          t: "text",
          v: " is being compiled with Local Office and will be added before this document circulates beyond partner and NVIDIA internal review.",
        },
      ],
    ],
  },
]

/* ---------- Live agents — technical profiles (menu selector) ---------- */

export type LiveAgentProfile = {
  id: string
  name: string
  vendor: string
  stage: string
  liveNote: string
  summary: string
  /** Architecture walkthrough, specialised from the generic seven-step loop. */
  flow: { step: string; detail: string }[]
  /** Systems the agent touches in production. */
  systems: string[]
  stack: {
    confirmed: string[]
    candidates: string[]
    toConfirm: string[]
  }
}

export const LIVE_AGENT_PROFILES: LiveAgentProfile[] = [
  {
    id: "po-validation",
    name: "PO Validation",
    vendor: "VMware",
    stage: "Quote to Order",
    liveNote: "Live for VMware · refining and rolling out to further vendor lines",
    summary:
      "Removes the manual re-keying between an accepted quote and a booked order. The agent learns the incoming PO format, compares it line by line to the quote detail, and loads valid orders into Salesforce.",
    flow: [
      {
        step: "Ingest",
        detail: "Receives the incoming customer purchase order.",
      },
      {
        step: "Extract",
        detail:
          "Learns the PO format and lifts the structured detail — line items, quantities, pricing, identifiers.",
      },
      {
        step: "Validate",
        detail:
          "Compares the extracted detail against the quote before anything is committed.",
      },
      {
        step: "Act",
        detail: "Loads the validated order into SFDC.",
      },
      {
        step: "Learn",
        detail:
          "The format-learning approach is being refined as the rollout extends beyond VMware to further vendor lines.",
      },
    ],
    systems: ["Salesforce (SFDC)", "Shared Azure backend", "Central observability"],
    stack: {
      confirmed: ["Salesforce", "Azure"],
      candidates: ["NIM microservices", "NeMo Agent Toolkit", "Nemotron"],
      toConfirm: ["Serving model", "HW SKU"],
    },
  },
  {
    id: "quote-manager",
    name: "Quote Manager",
    vendor: "Broadcom",
    stage: "Opportunity to Quote",
    liveNote: "Live · RPA creating quotes in Broadcom CPQ",
    summary:
      "Creates quotes in Broadcom CPQ on behalf of the sales team. Where no API exists, the agent acts through RPA — accessing vendor systems, managing updates, and placing POs.",
    flow: [
      {
        step: "Ingest",
        detail: "Picks up the quote request and the opportunity data behind it.",
      },
      {
        step: "Reason",
        detail: "Assembles the quote content against the vendor's CPQ requirements.",
      },
      {
        step: "Act",
        detail:
          "Drives Broadcom CPQ through RPA: accesses the vendor system, manages updates, and places the PO.",
      },
      {
        step: "Observe",
        detail:
          "Actions and outcomes are tracked on the shared observability layer like every agent in the fleet.",
      },
    ],
    systems: ["Broadcom CPQ", "RPA", "Salesforce (SFDC)", "Shared Azure backend"],
    stack: {
      confirmed: ["Broadcom CPQ", "RPA", "Salesforce", "Azure"],
      candidates: ["NIM microservices", "NeMo Agent Toolkit", "Nemotron"],
      toConfirm: ["Serving model", "HW SKU"],
    },
  },
  {
    id: "broadcom-renewals",
    name: "Broadcom CPQ / renewals",
    vendor: "Broadcom",
    stage: "Renew or Replace · Opportunity to Quote",
    liveNote: "Live for 18 months — the longest-serving agent in the portfolio",
    summary:
      "The agent the programme started with. It works the renewals motion in Broadcom CPQ: identifying contracts approaching their end date and generating the renewal quotes to keep the installed base under contract.",
    flow: [
      {
        step: "Ingest",
        detail: "Works from entitlement and contract-end data.",
      },
      {
        step: "Reason",
        detail: "Identifies contracts approaching end date and what the renewal should contain.",
      },
      {
        step: "Act",
        detail: "Generates the renewal quote in Broadcom CPQ.",
      },
      {
        step: "Learn",
        detail:
          "Eighteen months of production operation has informed the renewal-comms and renewal-quote agents now planned around it.",
      },
    ],
    systems: ["Broadcom CPQ", "Salesforce (SFDC)", "Shared Azure backend"],
    stack: {
      confirmed: ["Broadcom CPQ", "Salesforce", "Azure"],
      candidates: ["NIM microservices", "NeMo Agent Toolkit", "Nemotron"],
      toConfirm: ["Serving model", "HW SKU"],
    },
  },
  {
    id: "eset-support",
    name: "ESET product Q&A / support",
    vendor: "ESET",
    stage: "Service & Support",
    liveNote: "Live · phase 2 will capture details and log cases",
    summary:
      "Answers basic support questions across the ESET portfolio from product knowledge, keeping first-line load off specialists. Phase 2 extends it from answering to acting: capturing the details of an unresolved query and logging a case.",
    flow: [
      {
        step: "Ingest",
        detail: "Takes the customer or partner question as it arrives.",
      },
      {
        step: "Reason",
        detail: "Works the answer out of ESET product knowledge.",
      },
      {
        step: "Act",
        detail:
          "Answers directly today; in phase 2 it will capture details and log a case when the query is not resolved.",
      },
      {
        step: "Observe",
        detail: "Query volumes and resolution outcomes feed the shared observability layer.",
      },
    ],
    systems: ["ESET product knowledge", "Shared Azure backend", "Central observability"],
    stack: {
      confirmed: ["Azure"],
      candidates: ["NIM microservices", "NeMo Agent Toolkit", "Nemotron"],
      toConfirm: ["Serving model", "HW SKU", "Case-logging integration (phase 2)"],
    },
  },
]

export const LIVE_AGENTS_INTRO = {
  kicker: "Live agents · Technical profiles",
  heading: "The agents in production today",
  description:
    "Four agents are live in production. Select one to see how it is put together — the shape of its pipeline, the systems it touches, and its software stack. All four share the same platform: a single Azure backend, Salesforce and Traverse as systems of record, and centralised observability with token-usage tracking.",
}

/** The generic agent pipeline, rendered as an interactive step strip. */
export const AGENT_PIPELINE_STEPS: {
  id: string
  num: number
  label: string
  description: string
}[] = [
  {
    id: "ingest",
    num: 1,
    label: "Ingest",
    description:
      "The agent pulls data from CRM, CPQ, ERP, EDI feeds, and vendor portals — the systems where lifecycle work already lives.",
  },
  {
    id: "extract",
    num: 2,
    label: "Extract",
    description:
      "Structured fields are lifted from that data: line items, entitlements, contract terms, pricing, and identifiers.",
  },
  {
    id: "reason",
    num: 3,
    label: "Reason",
    description:
      "The agent applies business rules, SKU logic, and policy constraints to decide what should happen next.",
  },
  {
    id: "validate",
    num: 4,
    label: "Validate",
    description:
      "Every decision is cross-checked against POs, pricing tables, and vendor programme rules before anything is committed.",
  },
  {
    id: "act",
    num: 5,
    label: "Act",
    description:
      "The agent executes: creating quotes, orders, tickets, or financial entries via RPA or API.",
  },
  {
    id: "learn",
    num: 6,
    label: "Learn",
    description:
      "Outcomes, exceptions, and user corrections feed back into the agent to improve future decisions.",
  },
  {
    id: "observe",
    num: 7,
    label: "Observe",
    description:
      "Token usage, latency, accuracy, and ROI metrics are captured centrally for every agent, every day.",
  },
]

export const GOVERNANCE_ITEMS = [
  {
    title: "Agent marketplace",
    description:
      "Internal business units and external partners can discover, install, and reuse approved agents from a central catalogue — build once, deploy many times.",
  },
  {
    title: "Platform approach",
    description:
      "Salesforce and Traverse remain the systems of record; agents connect to them through MCP-based tool integrations rather than bespoke point solutions.",
  },
  {
    title: "Shared Azure infrastructure",
    description:
      "A single shared Azure environment serves every business unit, with usage-based billing and Chinese walls keeping data strictly separated.",
  },
  {
    title: "ROI instrumentation",
    description:
      "Every agent tracks time saved, error reduction, and revenue impact against the programme KPIs — value is measured, not assumed.",
  },
  {
    title: "Observability & token tracking",
    description:
      "Centralised observability captures per-agent token usage, latency, and exceptions, so cost and quality stay visible as the fleet grows.",
  },
  {
    title: "Multi-axis reuse",
    description:
      "Agents are reusable along two axes: by role (sales, finance, support) and by knowledge domain (vendor SKU libraries, policy rules).",
  },
]

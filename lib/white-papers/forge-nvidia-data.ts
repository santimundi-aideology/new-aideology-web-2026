/* ------------------------------------------------------------------ */
/* Forge — Agentic Platform Suite · NVIDIA partner solution profile    */
/* Content source: forge_nvidia_paper (teammate HTML draft)            */
/* ------------------------------------------------------------------ */

export const HERO = {
  eyebrow: "Partner Solution Profile · Agentic AI",
  title: "Forge — the Agentic Platform Suite",
  intro:
    "Forge takes an AI agent from a sales prototype to a live, multi-tenant production service that a business user can buy, configure and operate — built NVIDIA-native on NVIDIA AI Enterprise, NIM microservices and the NeMo Agent Toolkit.",
  metadata: [
    { label: "Solution provider", value: "AIdeology" },
    { label: "Domain", value: "Agentic AI · Enterprise Agent Platforms" },
    { label: "Status", value: "Infra: Production · Suite: GA Q3 2026" },
    { label: "Deployment", value: "Cloud-agnostic · On-Prem · Edge" },
    { label: "Last updated", value: "7 July 2026" },
  ],
  draftBanner: "Partner & NVIDIA internal only — draft for review.",
}

export const EXEC_CALLOUTS = [
  {
    kicker: "Executive summary",
    text: "Forge is AIdeology's end-to-end agentic platform suite. It productizes the layers most teams leave unfinished — provisioning, exploitation and the end-user marketplace — so any agent becomes a self-service product. The whole suite runs NVIDIA-native: models served through NVIDIA NIM, agents orchestrated on the NVIDIA NeMo Agent Toolkit, and multi-tenant GPU isolation delivered by NVIDIA AI Enterprise on a single managed Kubernetes cluster in any cloud or on-prem.",
  },
  {
    kicker: "Key differentiator",
    text: "Forge is not an agent framework — it is the platform that turns any agent into a product. Roughly 10× build speed via a Spec-Driven Development framework and a reusable Bricks library (each Brick mapped to an NVIDIA building block); cloud-agnostic multi-tenant operation with per-tenant GPU isolation (MIG); and a marketplace that keeps the customer relationship with the operator, not the hyperscaler.",
  },
]

export const KPIS = [
  "Time-to-production / agent",
  "GPU utilization & tenant density",
  "Cost per agent-hour",
  "Tokens/sec per GPU · NIM + TensorRT-LLM",
  "Agents published to marketplace",
]

/** Open contact / assignment fields, shown as "to confirm" chips. */
export const OPEN_FIELDS = [
  { label: "NV PIC", value: "to be assigned" },
  { label: "Technical PIC", value: "name · email" },
]

/** Narrative lead-ins that carry the story from section to section. */
export const NARRATIVE = {
  market: {
    heading: "Everyone is building agents. Almost no one is building the platform.",
    paragraphs: [
      "The market has settled on how to build a single agent — frameworks, orchestration libraries and model APIs are everywhere. What it has not settled on is what an agentic platform actually is. Ask ten vendors and you get ten answers: a chatbot with tools, an orchestration framework, a model gateway, a notebook. The term is used loosely and defined rarely.",
      "The gap is sharpest at the top of the stack — the end-user and exploitation layers. Most tooling stops at \u201cthe agent runs.\u201d It says little about how a non-technical business user discovers an agent, buys it, configures it for their own data, and operates it day to day. Nor about how the operator provisions a private, isolated instance for every customer without rebuilding the stack each time. That is where value is captured and where the customer relationship lives — and it is largely missing from the market.",
      "AIdeology's position: the hard, unsolved part of \u201cagentic platform\u201d is not the model or the framework — NVIDIA already provides best-in-class building blocks for both. It is everything above them. Forge is built to own that layer, on NVIDIA.",
    ],
  },
  anatomy: {
    heading: "The anatomy of an agent platform",
    paragraphs: [
      "We define the platform as six layers, split by who owns them. The bottom three are the interchangeable provider substrate, delivered by NVIDIA AI Enterprise — GPU virtualization and multi-tenant isolation (MIG), model serving (NIM · Triton · TensorRT-LLM) and GPU-accelerated data services. The top three are the platform proper — where the customer lives. The strategy: run the top three on top of any NVIDIA substrate, in any cloud or on-prem, without giving up the customer relationship.",
    ],
  },
  suite: {
    heading: "The Forge Suite",
    paragraphs: [
      "Forge is five products plus a cross-cutting infrastructure, each mapped to a stage of the prototype-to-production pipeline — and each built on NVIDIA. An agent is designed as a sales prototype, promoted into a development contract, built at ~10× speed, deployed and operated, then optionally published to a marketplace for self-service install.",
    ],
  },
  architecture: {
    heading: "The Forge reference architecture",
    paragraphs: [
      "Forge runs as one system on NVIDIA AI Enterprise, across a single managed Kubernetes cluster (AKS · EKS · GKE · on-prem) — from the marketplace frontend down to model serving, GPU scheduling and observability.",
    ],
  },
  stack: {
    heading: "The Forge platform stack",
    paragraphs: [
      "Every capability in the suite maps to a named NVIDIA building block, with third-party components only where they are commodity. The tables below read as the standard partner solution profile: capability map, deployment details, scale, software details, and the blockers to optimize first.",
    ],
  },
}

/* ------------------------- anatomy (Fig. 1) ------------------------- */

export type LayerOwnership = "forge" | "shared" | "provider"

export type AnatomyLayer = {
  num: string
  name: string
  description: string
  tag: string
  ownership: LayerOwnership
}

export const ANATOMY = {
  forgeZoneLabel: "AIdeology platform · owns the customer",
  forgeZoneTag: "Forge",
  providerZoneLabel: "Provider substrate · interchangeable",
  providerZoneTag: "NVIDIA AI Enterprise",
  boundaryLabel: "Control boundary",
  layers: [
    {
      num: "06",
      name: "Marketplace",
      description:
        "Catalog of agents · self-service billing & configuration · onboarding · setup flows. Customers live here; the business is controlled here.",
      tag: "owns the customer",
      ownership: "forge",
    },
    {
      num: "05",
      name: "Provisioning",
      description:
        "On each purchase the agent is assembled per contract using the customer-specific data captured at the marketplace.",
      tag: "per contract",
      ownership: "forge",
    },
    {
      num: "04",
      name: "Operation",
      description:
        "The customer operates their agent. Each agent has specific functionality that delivers real value — not a chat with things plugged in.",
      tag: "real usage",
      ownership: "forge",
    },
    {
      num: "03",
      name: "Multi-tenant control plane",
      description:
        "Models per customer · connection to their data · business logic (fallbacks, scaling) · usage analytics · tenant isolation. Shared layer — the model gateway, guardrails and analytics live here.",
      tag: "shared",
      ownership: "shared",
    },
    {
      num: "02",
      name: "Model platform",
      description:
        "Installed models · serving & scaling to meet demand → NVIDIA NIM · Triton · TensorRT-LLM · Dynamo.",
      tag: "provider",
      ownership: "provider",
    },
    {
      num: "01",
      name: "Infrastructure & GPU",
      description:
        "Monitoring · GPU virtualization · networking · raw compute → GPU Operator · MIG · DCGM · Run:ai / KAI Scheduler.",
      tag: "provider",
      ownership: "provider",
    },
  ] as AnatomyLayer[],
  legend: [
    { ownership: "forge" as LayerOwnership, label: "AIdeology platform", note: "owned by Forge, owns the customer" },
    { ownership: "shared" as LayerOwnership, label: "Shared layer (03)", note: "NVIDIA control plane integrates here" },
    { ownership: "provider" as LayerOwnership, label: "Provider substrate", note: "NVIDIA AI Enterprise, interchangeable" },
  ],
  figcap: "Fig. 1 · Six-layer anatomy — the bottom three run on NVIDIA AI Enterprise; the top three are Forge.",
}

/* ----------------------- Forge Suite (Fig. 2) ----------------------- */

export type SuiteProduct = {
  id: string
  kind: string
  name: string
  shortDescription: string
  mapsTo: string[]
  /** Marketplace-side products get the amber "publish" treatment in the source. */
  publish?: boolean
}

export const SUITE = {
  rootKicker: "Platform suite",
  rootTitle: "AIdeology AI Suite · Forge",
  products: [
    {
      id: "designer",
      kind: "Product",
      name: "Forge Designer",
      shortDescription:
        "AI prototyping studio. Sales + a tech-sales engineer build the prototype — the sales asset itself.",
      mapsTo: ["01 Design", "02 Promote"],
    },
    {
      id: "sdd",
      kind: "Coding framework",
      name: "Forge SDD Framework",
      shortDescription:
        "Spec-Driven Development + Bricks library. Turns the Promote contract into production-grade code.",
      mapsTo: ["03 Development", "Bricks"],
    },
    {
      id: "workspace",
      kind: "Product",
      name: "Forge Workspace",
      shortDescription:
        "Where the agent is deployed, operated and run in production — the customer's dashboard.",
      mapsTo: ["05 Deploy", "6a/7 Prod"],
    },
    {
      id: "publisher",
      kind: "Product",
      name: "Forge Publisher Portal",
      shortDescription:
        "Publishes a finished agent to the marketplace — generating the 3 artifacts + Helm installer.",
      mapsTo: ["04 Provision", "6b Publish"],
      publish: true,
    },
    {
      id: "marketplace",
      kind: "Product",
      name: "Forge Marketplace",
      shortDescription:
        "Client storefront: browse, buy, self-configure, install. The operator owns the relationship here.",
      mapsTo: ["End-user install"],
      publish: true,
    },
  ] as SuiteProduct[],
  infra: {
    kicker: "Software architecture · cross-cutting",
    title: "Forge AI Infrastructure",
    description:
      "Cloud-agnostic, multi-tenant platform to operate an entire agentic suite. Runs transversally beneath every Forge piece — on NVIDIA AI Enterprise, single managed K8s cluster, any target.",
  },
  figcap: "Fig. 2 · Forge Suite — five products over one cross-cutting NVIDIA-native infrastructure.",
}

/** Extended profile per product (the quad section in the source). */
export type ProductDetail = {
  id: string
  num: string
  name: string
  description: string
  builtOn: string
}

export const PRODUCT_DETAILS: ProductDetail[] = [
  {
    id: "designer",
    num: "01",
    name: "Forge Designer",
    description:
      "An AI prototyping studio where the sales team and a tech-sales engineer build an AI-assisted prototype — and the prototype is the sales asset.",
    builtOn:
      "Prototypes call NVIDIA NIM microservices for low-latency inference and start from NIM Agent Blueprints as ready-made agent patterns.",
  },
  {
    id: "sdd",
    num: "02",
    name: "Forge SDD Framework + Bricks",
    description:
      "Spec-Driven Development turns a Promote contract into production-grade code at ~10× speed with full test coverage. Bricks are standardized, reusable capabilities in our repo.",
    builtOn:
      "Each Brick is a prebuilt NVIDIA building block — RAG on NeMo Retriever + cuVS; Voice on Riva; Guardrails on NeMo Guardrails; MCP tools on the NeMo Agent Toolkit.",
  },
  {
    id: "workspace",
    num: "03",
    name: "Forge Workspace",
    description:
      "The customer's dashboard and operations interface — where the agent is deployed, operated and run in production, with screens that adapt to whatever the agent does.",
    builtOn:
      "Agents run on the NeMo Agent Toolkit runtime; models are served by NIM / Triton with TensorRT-LLM and scaled with NVIDIA Dynamo; per-tenant isolation via MIG.",
  },
  {
    id: "publisher",
    num: "04",
    name: "Forge Publisher Portal",
    description:
      "Publishes a finished agent to the marketplace and produces the Helm installer plus the 3 artifacts (agent card · instantiation rules · app items).",
    builtOn:
      "Helm charts provision NIM microservices + agent containers; NIM Agent Blueprints packaged as versioned OCI templates; MIG partitions allocated per tenant.",
  },
  {
    id: "marketplace",
    num: "05",
    name: "Forge Marketplace",
    description:
      "The client-facing storefront: browse, buy, self-configure and install agents. The operator owns the customer relationship at this layer.",
    builtOn:
      "Every installed agent lands on the shared NVIDIA AI Enterprise runtime with logical + physical tenant isolation.",
  },
  {
    id: "infrastructure",
    num: "∞",
    name: "Forge AI Infrastructure",
    description:
      "The cloud-agnostic, multi-tenant platform beneath every piece — Designer, SDD Framework, Workspace, Publisher and Marketplace all sit on top of it.",
    builtOn:
      "NVIDIA AI Enterprise on a single managed K8s cluster with GPU Operator · MIG · Run:ai/KAI · DCGM and a NIM/Triton/Dynamo inference plane. Models: Llama Nemotron and Qwen 3.6 via NIM, with Azure OpenAI / Anthropic fallback.",
  },
]

/* ---------------------- Bricks library (Fig. 3) ---------------------- */

export type BrickColumn = {
  title: string
  rows: { capability: string; builtOn: string }[]
}

export const BRICKS = {
  kicker: "The Forge Bricks library",
  heading: "Each Brick, built on an NVIDIA building block",
  runsOn: "NVIDIA AI Enterprise",
  columns: [
    {
      title: "Retrieval & knowledge",
      rows: [
        { capability: "RAG", builtOn: "NeMo Retriever · cuVS" },
        { capability: "Vector search", builtOn: "cuVS-accelerated pgvector" },
        { capability: "Embeddings / rerank", builtOn: "NeMo Retriever NIMs" },
      ],
    },
    {
      title: "Agent & interaction",
      rows: [
        { capability: "MCP tools", builtOn: "NeMo Agent Toolkit" },
        { capability: "Voice agent", builtOn: "Riva ASR / TTS NIM" },
        { capability: "Guardrails", builtOn: "NeMo Guardrails" },
      ],
    },
    {
      title: "Serving & ops",
      rows: [
        { capability: "LLM serving", builtOn: "NIM · Triton · TensorRT-LLM" },
        { capability: "Scale-out inference", builtOn: "NVIDIA Dynamo" },
        { capability: "Observability", builtOn: "DCGM → Prometheus" },
      ],
    },
  ] as BrickColumn[],
  legend: [
    { type: "nv" as const, label: "NVIDIA building block" },
    { type: "forge" as const, label: "Forge Brick (reusable, prebuilt)" },
  ],
  figcap:
    "Fig. 3 · Forge Bricks — the reusable library behind the ~10× build speed, built on NVIDIA components.",
}

/* ------------------- reference architecture (Fig. 4) ------------------- */

/** Who a cell belongs to: NVIDIA-native, Forge component, or third-party/commodity. */
export type CellType = "nv" | "forge" | "thirdParty"

export type PlaneCell = {
  title: string
  subtitle: string
  /** NVIDIA / vendor mapping shown under the divider. */
  mapping?: string
  type: CellType
}

export type ArchPlane = {
  id: string
  label: string
  owner: "Forge" | "NVIDIA" | "NVIDIA + Forge"
  cells: PlaneCell[]
}

export const REFERENCE_ARCHITECTURE = {
  kicker: "Forge on NVIDIA · reference deployment",
  heading: "Frontend → Agent Plane → Model Plane → Data & GPU Plane",
  runsOn: "Single managed K8s cluster",
  planes: [
    {
      id: "frontend",
      label: "Frontend & ingress",
      owner: "Forge",
      cells: [
        {
          title: "Web App",
          subtitle: "Next.js · marketplace · onboarding · tenant BO",
          type: "thirdParty",
        },
        {
          title: "Traefik",
          subtitle: "Ingress · routing · TLS · wildcard *.marketplace",
          type: "thirdParty",
        },
        {
          title: "Keycloak",
          subtitle: "SSO multi-tenant · Postgres auth backing",
          type: "thirdParty",
        },
      ],
    },
    {
      id: "agent-plane",
      label: "Agent plane",
      owner: "NVIDIA + Forge",
      cells: [
        {
          title: "Provisioning Service",
          subtitle: "FastAPI · queue · idempotent · helm install / tenant",
          mapping: "Helm deploys NIM + agent",
          type: "forge",
        },
        {
          title: "Agent Runtime",
          subtitle: "Orchestration · logical isolation / tenant",
          mapping: "NeMo Agent Toolkit (+ LangGraph)",
          type: "nv",
        },
        {
          title: "Tool Servers",
          subtitle: "Calendar · WhatsApp · CRM · DB",
          mapping: "NeMo Agent Toolkit · MCP",
          type: "nv",
        },
        {
          title: "Agent Templates",
          subtitle: "Versioned OCI · Harbor",
          mapping: "NIM Agent Blueprints",
          type: "nv",
        },
      ],
    },
    {
      id: "model-plane",
      label: "Model plane",
      owner: "NVIDIA",
      cells: [
        {
          title: "LLM Gateway",
          subtitle: "Multi-provider routing · virtual keys · budgets · fallback",
          mapping: "Portkey → NIM endpoints",
          type: "forge",
        },
        {
          title: "Model serving",
          subtitle: "Self-hosted inference · autoscale",
          mapping: "NIM · Triton · TensorRT-LLM · Dynamo",
          type: "nv",
        },
        {
          title: "Models",
          subtitle: "Reasoning + task models · multi-model with fallback",
          mapping: "Llama Nemotron · Qwen 3.6 via NIM · fallback: Azure OpenAI / Anthropic",
          type: "nv",
        },
        {
          title: "Guardrails",
          subtitle: "PII redaction · content filter · policy",
          mapping: "NeMo Guardrails",
          type: "nv",
        },
      ],
    },
    {
      id: "data-gpu-plane",
      label: "Data & GPU plane",
      owner: "NVIDIA + Forge",
      cells: [
        {
          title: "Vector / RAG",
          subtitle: "Postgres + pgvector",
          mapping: "NeMo Retriever · cuVS",
          type: "nv",
        },
        {
          title: "Redis",
          subtitle: "Queue · cache · sessions · pub/sub",
          type: "thirdParty",
        },
        {
          title: "Blob Storage",
          subtitle: "Files · audio · backups",
          type: "thirdParty",
        },
        {
          title: "GPU orchestration",
          subtitle: "Scheduling · multi-tenant isolation",
          mapping: "GPU Operator · MIG · Run:ai/KAI",
          type: "nv",
        },
        {
          title: "Observability",
          subtitle: "GPU metrics · traces · logs",
          mapping: "DCGM → Prometheus · Langfuse",
          type: "nv",
        },
      ],
    },
  ] as ArchPlane[],
  legend: [
    { type: "nv" as CellType, label: "NVIDIA-native" },
    { type: "forge" as CellType, label: "Forge component" },
    { type: "thirdParty" as CellType, label: "Third-party / commodity" },
  ],
  figcap:
    "Fig. 4 · Reference architecture on NVIDIA — self-service flow: buy → Provisioning Service → helm install → agent live in minutes.",
}

/* --------------------- platform stack + solution details --------------------- */

export type StackRow = {
  capability: string
  builtOn: string
  tbd?: boolean
}

export const PLATFORM_STACK: StackRow[] = [
  {
    capability: "Agent orchestration & tools",
    builtOn: "NeMo Agent Toolkit — framework-agnostic runtime, MCP, profiling",
  },
  { capability: "Agent templates & catalog", builtOn: "NIM Agent Blueprints, versioned OCI" },
  {
    capability: "Model serving",
    builtOn: "NIM · Triton · TensorRT-LLM, scaled with NVIDIA Dynamo",
  },
  {
    capability: "Models",
    builtOn: "Llama Nemotron / Nemotron & Qwen 3.6 via NIM (fallback: Azure OpenAI / Anthropic)",
  },
  { capability: "Guardrails & safety", builtOn: "NeMo Guardrails" },
  {
    capability: "Retrieval / RAG",
    builtOn: "NeMo Retriever (embed + rerank NIMs) + cuVS vector search",
  },
  { capability: "Voice", builtOn: "NVIDIA Riva ASR / TTS NIMs" },
  {
    capability: "GPU orchestration & multi-tenancy",
    builtOn: "NVIDIA AI Enterprise · GPU Operator · MIG · Run:ai / KAI",
  },
  { capability: "Observability", builtOn: "DCGM → Prometheus / Grafana; Langfuse traces" },
  { capability: "Hardware", builtOn: "TBD", tbd: true },
]

export type DetailRow = { label: string; value: string; tbd?: boolean }

export const DEPLOYMENT_DETAILS: DetailRow[] = [
  { label: "Model", value: "Llama Nemotron (Nano / Super / Ultra) · Qwen 3.6 · task-tuned NIMs" },
  { label: "Backend", value: "NIM · Triton · TensorRT-LLM · Dynamo (vLLM / SGLang where NIM N/A)" },
  { label: "Managed deploy", value: "Azure AKS · AWS EKS · GCP GKE · On-Prem · OpenInnovation K8s" },
  { label: "HW SKU", value: "TBD", tbd: true },
]

export const SCALE_DETAILS: DetailRow[] = [
  { label: "# of users", value: "Per-tenant, marketplace-driven · [per deployment]" },
  { label: "# of GPUs", value: "GPU-hrs / month · MIG slices per tenant · [per deployment]" },
  { label: "Isolation", value: "Logical (namespace) + physical (MIG) per tenant" },
  { label: "Trust tier", value: "ISO 27001 base · NESA P1 (SMB launch profile)" },
]

export const SW_DETAILS = {
  nvidia: [
    "NIM",
    "NeMo Agent Toolkit",
    "NeMo Retriever",
    "NeMo Guardrails",
    "Triton",
    "TensorRT-LLM",
    "Dynamo",
    "Riva",
    "cuVS",
    "GPU Operator",
    "MIG",
    "DCGM",
    "Run:ai / KAI",
    "NVIDIA AI Enterprise",
    "NIM Agent Blueprints",
    "Llama Nemotron",
  ],
  nonNvidia: [
    "Next.js",
    "Traefik",
    "Keycloak",
    "LangGraph",
    "FastAPI",
    "Helm",
    "Postgres / pgvector",
    "Redis",
    "Portkey",
    "Langfuse",
    "Prometheus / Grafana",
    "Harbor",
  ],
}

export const BLOCKERS = {
  heading: "Major blockers / bottlenecks",
  text: "What slows the pipeline most — the first thing to optimize together. GPU tenant density vs isolation (MIG sizing), inference cost per agent-hour, and cold-start latency for per-tenant NIM instances. First optimization target: tokens/sec per GPU via TensorRT-LLM + NVIDIA Dynamo autoscaling, with MIG right-sizing to raise tenant density without breaking isolation.",
}

export const CLOSING_NOTE =
  "Product names are NVIDIA and third-party trademarks of their respective owners. This profile describes Forge's NVIDIA-native reference deployment. Fields marked <…> / [per deployment] / TBD are completed per engagement."

/* ------------------------------------------------------------------ */
/* HCT Concierge — Physical AI Humanoid · NVIDIA partner profile       */
/* Content source: hct_concierge_nvidia_paper (teammate HTML draft)    */
/* ------------------------------------------------------------------ */

export const HERO = {
  eyebrow: "Partner Solution Profile · Physical AI",
  title: "The HCT Concierge — a Physical AI humanoid, built simulation-first",
  intro:
    "A bilingual (Arabic / English) humanoid concierge that greets, informs and guides visitors on a live university campus — trained end-to-end in simulation on NVIDIA Physical AI, validated against hard KPIs, and deployed on-premises through a safety-gated Sim-to-Real pipeline.",
  metadata: [
    { label: "Solution name", value: "HCT Concierge Robot" },
    { label: "Partners", value: "AIdeology (technical enablement) · HCT (delivery)" },
    { label: "Domain", value: "Physical AI · Humanoid HRI" },
    { label: "Platform", value: "Unitree G1 / G1 EDU" },
    { label: "Status", value: "Pilot · gated to supervised public" },
    { label: "Deployment", value: "On-premises · UAE · single campus building" },
    { label: "Languages", value: "Arabic & English (voice, gesture, display)" },
    { label: "Last updated", value: "8 July 2026" },
  ],
  draftBanner: "Partner & NVIDIA internal only — draft for review.",
}

export const EXEC_CALLOUTS = [
  {
    kicker: "Executive summary",
    text: "The HCT Concierge is a Unitree G1 humanoid that performs a small, high-value set of concierge tasks — greeting, campus information, wayfinding, and gesture cues — in a controlled public environment. Every behaviour is authored and trained in an OpenUSD digital twin and NVIDIA Isaac Sim / Isaac Lab, starting from GR00T foundation policies and scaled with Cosmos synthetic data, then packaged to the robot through a ROS 2 / Isaac ROS deployment stack. The conversational layer runs fully on-premises on Riva, Triton, NIM and NeMo Guardrails.",
  },
  {
    kicker: "Why this is different",
    text: "This is not a humanoid demo. It is a repeatable methodology for taking a physical robot from simulation to a supervised public deployment: a digital-twin-first pipeline, a five-gate progression from stationary to autonomous, and ~8,000–10,000 validation test cases that must pass before the robot faces a real visitor. The same pipeline is designed to transfer to new sites and use cases with the twin, not the robot, as the reusable asset.",
  },
]

export const KPIS = [
  { label: "Walk / stop reliability", target: "≥ 95%" },
  { label: "Human detection @5ft", target: "≥ 95%" },
  { label: "Response latency", target: "≤ 1.5s" },
  { label: "Gesture accuracy", target: "≥ 90%" },
  { label: "WER", target: "EN ≤ 10% · AR ≤ 15%" },
  { label: "Routing success", target: "≥ 90%" },
  { label: "Pilot uptime", target: "≥ 95%" },
  { label: "Safety-alert response", target: "≤ 1s" },
]

/** Open contact / assignment fields, shown as "to confirm" chips. */
export const OPEN_FIELDS = [
  { label: "NV PIC", value: "to be assigned" },
  { label: "Technical PIC", value: "name · email" },
]

/** Narrative lead-ins that carry the story from section to section. */
export const NARRATIVE = {
  approach: {
    heading: "Everyone can demo a humanoid. Almost no one can deploy one safely.",
    paragraphs: [
      "The hard part of a public-facing humanoid is not the walk cycle or the chat — both can be shown in a controlled demo. The hard part is everything that stands between a demo and a robot a real visitor can walk up to: reproducible behaviour under crowds and noise, latency budgets that hold on-premises, cultural and safety guardrails that never bypass, and an operational model that a campus can actually run day to day.",
      "Our answer is to move that risk into simulation. The robot learns to walk, stop, greet, point and route inside a high-fidelity digital twin long before it moves in the building — and the conversational pipeline is regression-tested against thousands of acoustic and adversarial cases before it ever speaks to a person.",
      "AIdeology's position: the durable asset is not the robot — it is the digital twin and the Sim-to-Real pipeline around it. NVIDIA already provides best-in-class building blocks for physical AI, perception, and speech. Our role is to compose them into a gated, validated, repeatable delivery method — proven first on the HCT campus, then transferable to new environments by re-authoring the twin rather than re-engineering the system.",
      "This profile describes that system: the layered architecture, the NVIDIA stack behind each capability, the conversational pipeline, the Sim-to-Real methodology, the safety model, and where an NVIDIA collaboration accelerates it most.",
    ],
  },
  architecture: {
    heading: "Five layers, one safety-governed stack",
    paragraphs: [
      "The system is organized as five layers. Intelligence (behaviour and interaction) is trained in the Simulation layer and executed on the Robot layer; the Safety layer is a cross-cutting boundary that governs every physical interaction and can override the layers above and below it at any moment.",
    ],
  },
  stack: {
    heading: "Built NVIDIA-native across the Physical AI stack",
    paragraphs: [
      "Every layer maps to NVIDIA building blocks — from the digital twin and synthetic data, through foundation-model behaviour and GPU-accelerated perception, to on-premises conversational AI and guardrails. Below, each capability is shown against the NVIDIA component that delivers it.",
    ],
  },
  conversation: {
    heading: "A bilingual voice pipeline that runs on-premises",
    paragraphs: [
      "The visitor speaks Arabic or English; the robot answers in the same language across voice, gesture and (optional) display. The entire pipeline runs inside HCT infrastructure — no audio leaves the premises, and none is retained beyond the active session.",
    ],
  },
  simToReal: {
    heading: "Nothing reaches a visitor un-validated",
    paragraphs: [
      "The pilot progresses through six gates, from requirements to supervised public operation. Each gate is a checkpoint with defined acceptance criteria; the robot only earns more autonomy — and less direct supervision — after the previous gate passes.",
    ],
  },
  validation: {
    heading: "Four layers of increasing fidelity",
    paragraphs: [
      "Before any gate involving real-world public interaction, the HRI pipeline must clear four layers of increasing fidelity — roughly 8,000–10,000 test cases for a public UAE deployment — followed by a shadow-then-canary rollout at the real location.",
    ],
  },
  safety: {
    heading: "Safety is designed in, not bolted on",
    paragraphs: [
      "The robot is treated as an ISO 13482 Type C mobile servant robot in a shared human environment. Safety-critical components fail safe by default, and the compliance posture is built for the UAE from the ground up: fully on-premises, no personal data, and aligned to the standards a public educational deployment requires.",
    ],
  },
  platform: {
    heading: "The concierge platform stack",
    paragraphs: [
      "The physical platform is a Unitree G1 humanoid with onboard sensing and Jetson compute; training, digital-twin simulation and heavier inference run on HCT's on-premises high-performance infrastructure. Below: the capability-to-component map, deployment details, and where an NVIDIA collaboration accelerates the program.",
    ],
  },
}

/* ---------------------- system layers (Fig. 1) ---------------------- */

export type LayerOwnership = "trained" | "safety" | "foundation"

export type SystemLayer = {
  num: string
  name: string
  description: string
  tag: string
  ownership: LayerOwnership
}

export const ARCHITECTURE = {
  intelligenceZoneLabel: "Interaction & intelligence · trained in simulation",
  intelligenceZoneTag: "GR00T · Isaac Lab",
  foundationZoneLabel: "Foundation · everything is built and validated here",
  boundaryLabel: "Safety layer · governs all physical interaction",
  /** Layers above the safety boundary. */
  upperLayers: [
    {
      num: "05",
      name: "HRI Layer",
      description:
        "Multimodal, bilingual visitor interaction: on-premises Arabic/English speech (ASR + TTS), intent and knowledge retrieval, high-level gesture and display coordination.",
      tag: "visitor-facing",
      ownership: "trained",
    },
    {
      num: "04",
      name: "Behaviour Layer",
      description:
        "Trained policies for locomotion, turn-taking, gesture cues (greet, point, acknowledge) and campus routing. Combines GR00T foundation models with task-specific IL / RL.",
      tag: "learned policies",
      ownership: "trained",
    },
  ] as SystemLayer[],
  safetyLayer: {
    num: "03",
    name: "Safety Layer",
    description:
      "Fixed, fail-safe oversight: proximity limits, geofencing, e-stop logic, fall detection and NeMo Guardrails. Any fault defaults to safe state. Target safety-alert response ≤ 1s.",
    tag: "fail-safe · fixed",
    ownership: "safety",
  } as SystemLayer,
  /** Layers below the safety boundary. */
  lowerLayers: [
    {
      num: "02",
      name: "Robot Layer",
      description:
        "Physical execution on the Unitree G1: 3D LiDAR and depth camera, onboard Jetson inference, and the ROS 2 / Isaac ROS deployment stack running validated policies.",
      tag: "physical execution",
      ownership: "trained",
    },
  ] as SystemLayer[],
  foundationLayers: [
    {
      num: "01",
      name: "Simulation Layer",
      description:
        "The OpenUSD digital twin of the HCT campus in Isaac Sim, with Cosmos-generated synthetic scenarios and Isaac Lab experimentation — the substrate where every behaviour is authored, trained and validated.",
      tag: "digital twin",
      ownership: "foundation",
    },
  ] as SystemLayer[],
  legend: [
    { ownership: "trained" as LayerOwnership, label: "Trained & adaptive", note: "learned in simulation" },
    { ownership: "safety" as LayerOwnership, label: "Safety boundary", note: "fixed, fail-safe, overrides all" },
    { ownership: "foundation" as LayerOwnership, label: "Foundation", note: "digital twin substrate" },
  ],
  figcap:
    "Fig. 1 · System layers — intelligence trained in the twin (L01), executed on the robot (L02), governed at all times by the fixed safety boundary (L03).",
}

/* --------------------- Sim-to-Real flow (Fig. 2) --------------------- */

export type FlowStep = {
  num: string
  label: string
  title: string
  description: string
  stack: string
}

export const DATA_FLOW = {
  kicker: "High-level data flow",
  heading: "Author → Generate → Train → Package → Execute",
  runsOn: "Simulation-to-Real",
  steps: [
    {
      num: "01",
      label: "Author",
      title: "Environment authoring",
      description: "Digital-twin assets built in OpenUSD and loaded into Isaac Sim.",
      stack: "OpenUSD · Omniverse NuRec · Isaac Sim",
    },
    {
      num: "02",
      label: "Generate",
      title: "Synthetic data",
      description: "Cosmos generates diverse interaction rollouts — queueing, routing, crowds.",
      stack: "Cosmos · GR00T-Mimic / Dreams",
    },
    {
      num: "03",
      label: "Train",
      title: "Policy training",
      description: "IL / RL workflows fine-tune GR00T policies in Isaac Lab.",
      stack: "GR00T N1.5 · Isaac Lab · IL / RL",
    },
    {
      num: "04",
      label: "Package",
      title: "Integration",
      description: "Policies fused with the speech and safety stack, exported to ROS 2.",
      stack: "ROS 2 · Isaac ROS · Riva · Guardrails",
    },
    {
      num: "05",
      label: "Execute",
      title: "Real-world run",
      description: "Onboard compute runs navigation, gestures and dialogue on the G1.",
      stack: "Jetson · Unitree G1 · on-prem",
    },
  ] as FlowStep[],
  figcap:
    "Fig. 2 · Sim-to-Real data flow — the same five-stage pipeline is reused for every new behaviour and every new site.",
}

/* --------------------- NVIDIA stack map (Fig. 3) --------------------- */

export type StackColumn = {
  title: string
  layerTag: string
  rows: { capability: string; builtOn: string }[]
}

export const STACK_MAP = {
  kicker: "Capability → NVIDIA building block",
  heading: "The Physical AI stack behind the concierge",
  runsOn: "NVIDIA Physical AI",
  columns: [
    {
      title: "Simulation & data",
      layerTag: "Layer 01",
      rows: [
        { capability: "Digital twin", builtOn: "OpenUSD · Omniverse NuRec" },
        { capability: "Physics & sensor sim", builtOn: "Isaac Sim 5.0" },
        { capability: "Synthetic rollouts", builtOn: "Cosmos · GR00T-Mimic" },
        { capability: "Experimentation", builtOn: "Isaac Lab 2.2" },
        { capability: "Asset & data hub", builtOn: "Omniverse Nucleus" },
      ],
    },
    {
      title: "Behaviour & perception",
      layerTag: "Layers 02 · 04",
      rows: [
        { capability: "Foundation policy", builtOn: "GR00T N1.5" },
        { capability: "Skill fine-tuning", builtOn: "Isaac Lab · IL / RL" },
        { capability: "GPU perception / nav", builtOn: "Isaac ROS" },
        { capability: "Edge inference", builtOn: "Jetson (onboard)" },
        { capability: "Deployment packaging", builtOn: "ROS 2 / Isaac ROS" },
      ],
    },
    {
      title: "Conversation & safety",
      layerTag: "Layers 03 · 05",
      rows: [
        { capability: "Audio front-end", builtOn: "Maxine AFX" },
        { capability: "ASR (EN + AR)", builtOn: "Riva · Parakeet multilingual" },
        { capability: "Model serving", builtOn: "Triton · NIM" },
        { capability: "TTS (EN + AR)", builtOn: "Riva · Triton" },
        { capability: "Guardrails", builtOn: "NeMo Guardrails" },
      ],
    },
  ] as StackColumn[],
  legend: [
    { type: "nv" as const, label: "NVIDIA building block" },
    { type: "forge" as const, label: "Composed by AIdeology into the concierge pipeline" },
  ],
  figcap:
    "Fig. 3 · NVIDIA stack map — the concierge is assembled from NVIDIA Physical AI, Isaac, and speech components end to end.",
}

/* ------------------ conversational pipeline (Fig. 4) ------------------ */

/** Who a cell belongs to: NVIDIA-native, AIdeology/HCT component, or third-party. */
export type CellType = "nv" | "forge" | "thirdParty"

export type PlaneCell = {
  title: string
  subtitle: string
  mapping?: string
  type: CellType
}

export type PipelinePlane = {
  id: string
  label: string
  owner: string
  cells: PlaneCell[]
}

export const CONVERSATION_PIPELINE = {
  kicker: "Speech-in → response-out · single session",
  heading: "On-premises conversational pipeline",
  runsOn: "No audio retained",
  planes: [
    {
      id: "understand",
      label: "Understand · audio in",
      owner: "NVIDIA",
      cells: [
        {
          title: "Audio front-end",
          subtitle: "Echo cancel · noise suppress · dereverb",
          mapping: "Maxine AFX",
          type: "nv",
        },
        {
          title: "Language ID + turn-taking",
          subtitle: "EN / AR routing <50ms · barge-in control",
          mapping: "state machine · ACE Controller",
          type: "thirdParty",
        },
        {
          title: "Speech recognition",
          subtitle: "English + Arabic ASR, prompt-profile routing",
          mapping: "Riva · Parakeet RNNT multilingual",
          type: "nv",
        },
        {
          title: "Intent + entities",
          subtitle: "Rooms · events · times",
          mapping: "LLM via NIM",
          type: "nv",
        },
      ],
    },
    {
      id: "reason",
      label: "Reason · knowledge + policy",
      owner: "NVIDIA + third-party",
      cells: [
        {
          title: "Campus knowledge (RAG)",
          subtitle: "Maps · schedules · FAQs · directories · Arabic morphology pre-processing",
          mapping: "Milvus · Farasa / CAMeL",
          type: "thirdParty",
        },
        {
          title: "Dialogue flow",
          subtitle: "8 states: greet → intent → deliver → clarify → confirm → switch → fallback → close",
          mapping: "LangGraph",
          type: "thirdParty",
        },
        {
          title: "Guardrails",
          subtitle: "Injection · cultural sensitivity · PII · factual consistency — every output checked",
          mapping: "NeMo Guardrails",
          type: "nv",
        },
      ],
    },
    {
      id: "respond",
      label: "Respond · multimodal out",
      owner: "NVIDIA",
      cells: [
        {
          title: "Speech synthesis",
          subtitle: "English TTS · Arabic TTS with diacritisation pre-processing",
          mapping: "Riva · Triton",
          type: "nv",
        },
        {
          title: "Gesture cue",
          subtitle: "Greet · point · acknowledge · idle — timed to speech",
          mapping: "Behaviour layer (L04)",
          type: "forge",
        },
        {
          title: "Display (optional)",
          subtitle: "Maps · QR · contact · RTL Arabic shaping",
          mapping: "screen if fitted",
          type: "forge",
        },
      ],
    },
  ] as PipelinePlane[],
  legend: [
    { type: "nv" as CellType, label: "NVIDIA-native" },
    { type: "forge" as CellType, label: "AIdeology / HCT component" },
    { type: "thirdParty" as CellType, label: "Third-party / open-source" },
  ],
  figcap:
    "Fig. 4 · Conversational pipeline — Arabic and English ASR/TTS models are selected through a Gate 1 evaluation (bake-off + human MOS panel) and served on Riva / Triton / NIM.",
}

export const CONVERSATION_NOTES = [
  {
    title: "Language & response design",
    text: "A lightweight language-ID model routes each utterance to the right ASR path; Arabic content passes through morphological pre-processing before retrieval and through a diacritisation step before synthesis. The robot presents as a warm, factual university assistant that declares itself a robot at the start of every session (IEEE 7001-2021). Responses stay short — one to three sentences for simple queries — and follow a consistent acknowledge · orient · direct structure.",
  },
  {
    title: "Latency budget",
    text: "Perceptible latency is measured end of user speech to start of response. Targets: English P50 < 800ms, P95 < 1,300ms; Arabic P50 < 1,000ms, P95 < 1,500ms. The budget is allocated across the full pipeline — audio front-end, endpointing, language ID, ASR, LLM/RAG, guardrails and TTS first-chunk — with additional headroom on Arabic for diacritisation. Filler phrases cover any generation gap beyond 200ms so the interaction never feels frozen.",
  },
]

/* ----------------------- gate progression (Fig. 5) ----------------------- */

export type Gate = {
  id: string
  label: string
  title: string
  description: string
  /** The first public deployment gate gets highlighted. */
  publicGate?: boolean
}

export const GATES: Gate[] = [
  {
    id: "gate-0",
    label: "Gate 0",
    title: "Requirements",
    description: "Baseline architecture, platform boundaries, and success metrics jointly confirmed.",
  },
  {
    id: "gate-1",
    label: "Gate 1",
    title: "Stationary",
    description:
      "Twin validated; baseline skills — walk, stop, detect @5ft, greet, high-five. ASR/TTS bake-off.",
  },
  {
    id: "gate-2",
    label: "Gate 2",
    title: "Teleop",
    description: "Physics validation, sensor testing and scenario playback in Isaac Sim; dataset prep.",
  },
  {
    id: "gate-3",
    label: "Gate 3",
    title: "Autonomous",
    description:
      "Cosmos synthetic datasets; IL/RL concierge policy; multi-skill curriculum. Walking guidance introduced.",
  },
  {
    id: "gate-4",
    label: "Gate 4",
    title: "Supervised public",
    description:
      "ROS 2 package finalised; campus pilot; navigation, detection, speech & safety acceptance testing.",
    publicGate: true,
  },
  {
    id: "gate-5",
    label: "Gate 5",
    title: "Expansion",
    description: "New sites & use cases; academic integration; joint research and publication.",
  },
]

export const GATES_FIGCAP =
  "Fig. 5 · Gate progression — supervision scales down as validated autonomy scales up; Gate 4 is the first public deployment."

/* ------------------------- validation layers ------------------------- */

export type ValidationLayer = {
  id: string
  label: string
  title: string
  description: string
  tools: string
}

export const VALIDATION_LAYERS: ValidationLayer[] = [
  {
    id: "layer-1",
    label: "Layer 1",
    title: "CI-gated offline tests",
    description:
      "ASR accuracy on held-out corpora, LLM/RAG quality, TTS naturalness, intent classification and guardrail scanning. A change that fails Layer 1 does not proceed.",
    tools: "NeMo Evaluator · Ragas · UTMOSv2 · Promptfoo · Garak",
  },
  {
    id: "layer-2",
    label: "Layer 2",
    title: "Acoustic domain simulation",
    description:
      "The voice pipeline is tested against modelled campus acoustics, background-noise corpora and robot self-noise — including a mandatory in-situ impulse-response sweep at the real lobby.",
    tools: "pyroomacoustics · MUSAN · DEMAND",
  },
  {
    id: "layer-3",
    label: "Layer 3",
    title: "Persona dialogue simulation",
    description:
      "Full multi-turn conversations run through the complete pipeline across 25 personas and 5 scenarios to stress dialogue management and fallback.",
    tools: "DeepEval ConversationSimulator",
  },
  {
    id: "layer-4",
    label: "Layer 4",
    title: "Shadow & canary",
    description:
      "Two-week shadow (pipeline runs on live audio, nothing played to users) then one-week canary (limited live hours). Hard rollback triggers on latency, hallucination or any safety event.",
    tools: "Langfuse · LLM-as-judge review",
  },
]

export const SIM_TO_REAL_NOTES = [
  {
    title: "Adversarial & cultural red-teaming",
    text: "The adversarial suite spans generic LLM attack prompts, multi-turn jailbreaks, and ~1,000 UAE-specific cultural red-team prompts across all three Arabic orthographies (standard, transliteration, Arabizi). The pass condition for UAE red-line topics is zero bypasses.",
  },
  {
    title: "No online learning",
    text: "The robot never updates model weights, guardrail policies or dialogue logic from live interactions. In-context learning within a session is permitted and discarded at session end; RAG content is change-managed. Improvement follows an offline seven-step cycle — identify, fix, validate, shadow/canary, approve, deploy in a maintenance window, monitor.",
  },
]

/* ------------------------ safety zones (Fig. 6) ------------------------ */

export type ProxemicZone = {
  distance: string
  title: string
  behaviour: string
  /** The innermost zone gets highlighted. */
  critical?: boolean
}

export const PROXEMIC_ZONES: ProxemicZone[] = [
  {
    distance: "> 3.6m · public",
    title: "Navigate",
    behaviour: "Moves normally through the space.",
  },
  {
    distance: "1.2–3.6m · social",
    title: "Slow & greet",
    behaviour: "Reduces speed; may initiate a greeting.",
  },
  {
    distance: "0.5–1.2m · personal",
    title: "Near-stationary",
    behaviour: "Full HRI pipeline active; minimal motion.",
  },
  {
    distance: "< 0.5m · intimate",
    title: "Hold & yield",
    behaviour: "Never voluntarily entered; holds position.",
    critical: true,
  },
]

export const ZONES_FIGCAP =
  "Fig. 6 · Proxemic behaviour (Hall's model) — zone speeds are defined during the ISO 12100 risk assessment and validated in simulation before real-world use."

export const SAFETY_NOTES = [
  {
    title: "Fail-safe & emergency response",
    text: "Any safety-critical event drops the robot to safe state: it ceases voluntary motion, adopts a stable low-centre-of-gravity posture, signals, and announces a pause until a supervisor clears it. Three independent e-stops are provided — a hardware e-stop that cuts actuator power, a software e-stop via the supervisor dashboard/watchdog, and a wireless wristband for the line-of-sight supervisor. Robot-initiated physical contact is prohibited; contact triggers a compliant posture and, if sustained, full safe state.",
  },
  {
    title: "Privacy by design",
    text: "No personal data is collected at any point: no facial recognition, no biometric identification, no persistent audio or video, no user tracking. All processing is on-premises within UAE territory. The architecture satisfies the UAE Ministry of Education 2026 AI Framework's prohibition on uploading personal data to external AI services by design, and a full DPIA is completed before public deployment.",
  },
]

export const STANDARDS = [
  "ISO 13482:2014 (Type C)",
  "ISO 12100 risk assessment",
  "ISO/IEC 42001:2023",
  "IEEE 7001-2021",
  "UAE Charter for AI (2024)",
  "UAE PDPL (45/2021)",
  "UAE MoE 2026 AI Framework",
]

/* ------------------- platform stack + solution details ------------------- */

export type StackRow = {
  capability: string
  builtOn: string
}

export const PLATFORM_STACK: StackRow[] = [
  { capability: "Digital twin & environment", builtOn: "OpenUSD · Omniverse NuRec · Isaac Sim 5.0" },
  { capability: "Synthetic data generation", builtOn: "Cosmos · GR00T-Mimic / Dreams" },
  { capability: "Behaviour policy training", builtOn: "GR00T N1.5 + IL/RL in Isaac Lab 2.2" },
  {
    capability: "Perception & navigation",
    builtOn: "Isaac ROS (GPU-accelerated) · 3D LiDAR + depth camera",
  },
  { capability: "Edge inference", builtOn: "NVIDIA Jetson onboard the G1" },
  { capability: "Deployment packaging", builtOn: "ROS 2 / Isaac ROS deployment stack" },
  {
    capability: "Speech recognition (EN + AR)",
    builtOn: "Riva · Parakeet RNNT multilingual served on Triton",
  },
  {
    capability: "Speech synthesis (EN + AR)",
    builtOn: "Riva · Arabic TTS on Triton with diacritisation",
  },
  { capability: "Language model & serving", builtOn: "NIM LLM · Triton inference server" },
  { capability: "Audio front-end", builtOn: "Maxine AFX" },
  { capability: "Guardrails & safety", builtOn: "NeMo Guardrails" },
  {
    capability: "GPU telemetry & observability",
    builtOn: "DCGM → Prometheus / Grafana · Langfuse traces",
  },
]

export type DetailRow = { label: string; value: string }

export const PLATFORM_DETAILS: DetailRow[] = [
  { label: "Robot", value: "Unitree G1 / G1 EDU · ~1.27–1.32m · ~35kg · 23–43 DOF" },
  { label: "Onboard sensing", value: "3D LiDAR · multimodal depth camera · Jetson compute" },
  { label: "Backend", value: "HCT on-prem high-performance GPU infrastructure" },
  { label: "Environment", value: "Indoor · single floor · single building · hard flat flooring" },
  { label: "Speed cap", value: "0.5 m/s public mode · reduced in personal zone" },
]

export const OPERATIONS_DETAILS: DetailRow[] = [
  { label: "Endurance", value: "~2h active per charge · ~1.5h recharge · hot-swap battery" },
  { label: "Service window", value: "Up to 3 shifts/day · 4.5–6h service" },
  { label: "Supervision", value: "Line-of-sight + wristband (G1–3) → on-campus (G4+)" },
  { label: "Network", value: "Dedicated VLAN · Wi-Fi 6 (5GHz) · WPA3-Enterprise" },
  { label: "Monitoring", value: "Fully on-prem observability · incident logging · alerting" },
]

export const SW_DETAILS = {
  nvidia: [
    "Isaac Sim 5.0",
    "Isaac Lab 2.2",
    "Isaac ROS",
    "GR00T N1.5",
    "Cosmos",
    "Omniverse NuRec",
    "Nucleus",
    "OpenUSD",
    "Riva",
    "Parakeet",
    "Triton",
    "NIM",
    "Maxine AFX",
    "NeMo Guardrails",
    "NeMo Evaluator",
    "DCGM",
    "Jetson",
  ],
  nonNvidia: [
    "ROS 2",
    "Milvus",
    "LangGraph",
    "ACE Controller",
    "Langfuse v3",
    "Farasa / CAMeL",
    "Prometheus / Grafana",
    "VictoriaMetrics",
    "Loki",
    "OpenTelemetry",
    "Streamlit / FastAPI",
    "Ragas · Promptfoo · Garak · PyRIT · DeepEval",
  ],
}

export const COLLABORATION = {
  heading: "Where an NVIDIA collaboration accelerates the program",
  text: "The highest-leverage area is Gulf-region Arabic speech. A public UAE deployment needs production-grade Arabic ASR and TTS that handle Modern Standard Arabic, Khaleeji dialect, and Arabic-English code-switching. Joint engineering on Gulf-dialect ASR/TTS — model selection, evaluation methodology, and voice quality via a native-speaker MOS panel at Gate 1 — is the clearest place for NVIDIA DevRel and speech teams to add value, and it expands NVIDIA's own regional language coverage. Secondary opportunities: GR00T fine-tuning guidance for humanoid concierge skills, Isaac ROS perception/navigation tuning for the G1, and reference sizing for on-prem Cosmos and Isaac Lab workloads on HCT infrastructure.",
}

export const CLOSING_NOTE =
  "Product names are trademarks of their respective owners. Fields marked <…> are completed per engagement. Suggested technologies may change based on Gate 1 evaluation outcomes and technical constraints. This profile describes the NVIDIA-native reference design for the HCT Concierge pilot."

"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  Boxes,
  Brain,
  Building2,
  Calendar,
  CheckCircle2,
  Cloud,
  Cpu,
  Crown,
  Database,
  FileSearch,
  FileText,
  GitFork,
  GitMerge,
  Globe,
  LayoutDashboard,
  LayoutGrid,
  Linkedin,
  ListChecks,
  ListOrdered,
  Mail,
  MessageSquare,
  Network,
  PanelLeft,
  PhoneCall,
  Plug,
  Receipt,
  Rocket,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  SlidersHorizontal,
  Target,
  TrendingUp,
  Truck,
  Users,
  UserCog,
  UserPlus,
  Wallet,
  Wand2,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"

type Bullet = { icon: LucideIcon; text: string }

type Block = {
  id: string
  label: string
  stepIcon: LucideIcon
  title: string
  summary: string
  bullets: Bullet[]
  featured?: true
}

const blocks: Block[] = [
  {
    id: "block-01",
    label: "Step 01",
    stepIcon: ScanSearch,
    title: "We start by understanding how the business actually works",
    summary:
      "Before talking about agents or platforms, we break down the business unit, the workflows it runs, the decisions it makes, and the friction points that slow it down.",
    bullets: [
      { icon: GitFork, text: "Map the real business process, not just the org chart" },
      { icon: Users, text: "Identify teams, handoffs, bottlenecks, and decision points" },
      { icon: Target, text: "Define where AI could create operational value first" },
    ],
  },
  {
    id: "block-02",
    label: "Step 02",
    stepIcon: BarChart3,
    title: "Then we assess the data, feasibility, and cost of each opportunity",
    summary:
      "Once the process is clear, we study the data, the systems involved, the complexity of integration, and the cost-benefit of each possible use case.",
    bullets: [
      { icon: FileSearch, text: "Review data quality, documentation, and software access" },
      { icon: SlidersHorizontal, text: "Compare use cases by feasibility, effort, and expected impact" },
      { icon: ListOrdered, text: "Prioritize what should be built first and what should wait" },
    ],
  },
  {
    id: "block-03",
    label: "Step 03",
    stepIcon: Bot,
    title: "We turn one important workflow into a focused single-agent system",
    summary:
      "The first build is not a generic demo. It is a practical agentic system connected to data, process logic, automation, and enterprise software around one real business need.",
    bullets: [
      { icon: Workflow, text: "Design one high-value workflow around a clear business outcome" },
      { icon: Plug, text: "Connect the agent to data, rules, automation, and integrations" },
      { icon: Rocket, text: "Create a useful MVP that proves value in real operations" },
    ],
    featured: true,
  },
  {
    id: "block-04",
    label: "Step 04",
    stepIcon: Network,
    title: "From there, we connect multiple agents into one coordinated platform",
    summary:
      "As more use cases prove value, we stop thinking in isolated tools and begin designing a system where multiple agents can work together across workflows and teams.",
    bullets: [
      { icon: GitMerge, text: "Integrate specialized agents into one operating environment" },
      { icon: Cpu, text: "Add orchestration, control layers, and shared logic" },
      { icon: LayoutGrid, text: "Move from isolated agent projects to a business platform" },
    ],
  },
  {
    id: "block-05",
    label: "Step 05",
    stepIcon: LayoutDashboard,
    title: "We shape the final user interface around the people who will use it",
    summary:
      "The technology only becomes valuable when the experience is clear. We design the final interface so the end user can interact with the system in a natural, trusted, and efficient way.",
    bullets: [
      { icon: UserCog, text: "Adapt the experience to the end-user role and workflow" },
      { icon: PanelLeft, text: "Design the right channels, actions, and decision views" },
      { icon: Wand2, text: "Turn technical capability into day-to-day usability" },
    ],
  },
  {
    id: "block-06",
    label: "Step 06",
    stepIcon: TrendingUp,
    title: "Finally, we scale the solution across the company and support it over time",
    summary:
      "Once the model works, we expand it to new teams, new workflows, and new departments while helping maintain, refine, and support the deployed systems.",
    bullets: [
      { icon: ArrowUpRight, text: "Extend proven systems into other business areas" },
      { icon: Wrench, text: "Maintain, support, and improve the deployed agents" },
      { icon: BarChart3, text: "Help the company grow toward a broader AI operating model" },
    ],
  },
]

type Priority = "High" | "Medium" | "Low"
type Complexity = 1 | 2 | 3

const tableRows: {
  id: string
  problem: string
  aiSolution: string
  priority: Priority
  hours: number
  complexity: Complexity
}[] = [
  {
    id: "Topic 1",
    problem: "Inbound leads are qualified and enriched by hand",
    aiSolution: "AI lead qualification & routing agent",
    priority: "High",
    hours: 80,
    complexity: 1,
  },
  {
    id: "Topic 2",
    problem: "Prospect research and first-touch outreach is fully manual",
    aiSolution: "AI prospect research & personalised outreach",
    priority: "High",
    hours: 60,
    complexity: 2,
  },
  {
    id: "Topic 3",
    problem: "Reps spend hours updating the CRM after calls & emails",
    aiSolution: "AI CRM update agent from calls & inbox",
    priority: "Medium",
    hours: 40,
    complexity: 1,
  },
  {
    id: "Topic 4",
    problem: "Every proposal and quote is drafted from scratch",
    aiSolution: "AI proposal & quote generation from catalog",
    priority: "Medium",
    hours: 35,
    complexity: 2,
  },
  {
    id: "Topic 5",
    problem: "Churn and renewal signals are spotted too late",
    aiSolution: "AI renewal risk scoring & retention alerts",
    priority: "Low",
    hours: 25,
    complexity: 3,
  },
]

const priorityConfig: Record<Priority, { bar: string; badge: string; dot: string }> = {
  High:   { bar: "bg-accent-green",   badge: "bg-accent-green/10 text-accent-green border-accent-green/20",  dot: "bg-accent-green" },
  Medium: { bar: "bg-amber-400",      badge: "bg-amber-50 text-amber-600 border-amber-200",                  dot: "bg-amber-400" },
  Low:    { bar: "bg-gray-300",       badge: "bg-gray-100 text-gray-400 border-gray-200",                    dot: "bg-gray-300" },
}

function ComplexityDots({ level }: { level: Complexity }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3].map((n) => (
        <div
          key={n}
          className={`h-2 w-2 rounded-full ${n <= level ? "bg-charcoal/40" : "bg-charcoal/10"}`}
        />
      ))}
    </div>
  )
}

function ProcessTable() {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-black/5 bg-white shadow-[0_8px_40px_rgba(0,0,0,0.06)]">

      {/* window chrome */}
      <div className="flex items-center gap-3 border-b border-black/5 bg-[#f8f8f8] px-5 py-3.5">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-300/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-accent-green/60" />
        </div>
        <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-gray-400">Business process map</span>
      </div>

      {/* column headers */}
      <div className="grid grid-cols-[100px_1fr_1fr_72px_52px_64px] items-center gap-3 border-b border-black/5 bg-charcoal px-5 py-3">
        {["Topic", "Problem", "AI Solution", "Priority", "h/mo", "Effort"].map((h) => (
          <span key={h} className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">{h}</span>
        ))}
      </div>

      {/* rows */}
      <div className="divide-y divide-black/[0.04]">
        {tableRows.map((row, i) => {
            const p = priorityConfig[row.priority]
            const isSelected = i < 2
            return (
              <div
                key={row.id}
                data-row={isSelected ? "highlight" : "dim"}
                className="grid grid-cols-[100px_1fr_1fr_72px_52px_64px] items-center gap-3 px-5 py-4"
              >
                {/* left priority bar + label + selected badge */}
                <div className="flex items-center gap-2.5">
                  <div className={`h-8 w-1 shrink-0 rounded-full ${p.bar}`} />
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold text-charcoal">{row.id}</span>
                    {isSelected && (
                      <span
                        data-selected-badge
                        className="inline-block rounded-full bg-accent-green/15 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-accent-green opacity-0"
                        style={{ transform: "translateY(4px)" }}
                      >
                        ✓ Selected
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-xs leading-relaxed text-gray-500">{row.problem}</p>
                <p className="text-xs leading-relaxed text-gray-700">{row.aiSolution}</p>

                <span className={`inline-block rounded-full border px-2 py-0.5 text-[11px] font-medium ${p.badge}`}>
                  {row.priority}
                </span>

                <div className="flex flex-col items-start gap-1">
                  <span className="text-sm font-semibold text-charcoal">{row.hours}</span>
                  <div className="h-1 w-8 overflow-hidden rounded-full bg-black/8">
                    <div className={`h-full rounded-full ${p.bar}`} style={{ width: `${(row.hours / 80) * 100}%` }} />
                  </div>
                </div>

                <ComplexityDots level={row.complexity} />
              </div>
            )
          })}
      </div>

      {/* footer — two states: default and animated */}
      <div className="relative flex items-center justify-between border-t border-black/5 bg-[#f8f8f8] px-5 py-3">
        <span data-footer-default className="text-[11px] text-gray-400">{tableRows.length} processes mapped</span>
        <div className="flex items-center gap-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-accent-green" />
          <span data-footer-default className="text-[11px] text-gray-400">2 high-priority opportunities identified</span>
        </div>
        {/* animated footer — appears during scroll */}
        <div
          data-footer-selected
          className="absolute inset-0 flex items-center justify-center gap-2 bg-accent-green/8 opacity-0"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-accent-green" />
          <span className="text-[11px] font-semibold text-accent-green">
            Topic 1 &amp; Topic 2 selected — moving to Step 02
          </span>
          <ArrowRight className="h-3 w-3 text-accent-green" />
        </div>
      </div>
    </div>
  )
}

// ─── Step 02: Feasibility Assessment ────────────────────────────────────────

const feasibilityTopics = [
  {
    id: "Topic 1",
    name: "AI lead qualification & routing agent",
    dataScore: 88,
    dataLabel: "Salesforce records + web forms + email history",
    integrations: ["Salesforce", "Email", "LinkedIn"],
    effort: "6–8 wks",
    returnScore: 92,
    risk: "Low" as const,
    confidence: 92,
  },
  {
    id: "Topic 2",
    name: "AI prospect research & personalised outreach",
    dataScore: 74,
    dataLabel: "CRM + enrichment APIs + message templates",
    integrations: ["Salesforce", "LinkedIn Sales Nav", "Gmail"],
    effort: "8–10 wks",
    returnScore: 84,
    risk: "Low–Med" as const,
    confidence: 78,
  },
]

function FeasibilityAssessment() {
  const riskStyle: Record<string, { dot: string; label: string }> = {
    "Low":     { dot: "bg-accent-green",  label: "text-accent-green" },
    "Low–Med": { dot: "bg-amber-400",     label: "text-amber-500" },
  }

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-black/5 bg-[#f9f9f9] shadow-[0_8px_40px_rgba(0,0,0,0.06)]">

      {/* chrome bar */}
      <div className="flex items-center gap-3 border-b border-black/5 bg-[#f3f3f3] px-5 py-3.5">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-300/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-accent-green/60" />
        </div>
        <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-gray-400">Feasibility assessment</span>
      </div>

      {/* two evaluation cards */}
      <div className="grid gap-4 p-4 sm:grid-cols-2">
        {feasibilityTopics.map((t, idx) => (
          <div
            key={t.id}
            className="flex flex-col gap-5 rounded-2xl border border-black/5 bg-white p-5 shadow-sm"
          >
            {/* card header */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex flex-col gap-1">
                <span className="inline-block w-fit rounded-full bg-accent-green/12 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-accent-green">
                  ✓ {t.id}
                </span>
                <p className="text-sm font-semibold leading-snug text-charcoal">{t.name}</p>
              </div>
              {/* confidence ring */}
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-accent-green/20 bg-accent-green/5">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `conic-gradient(#82c832 ${t.confidence}%, transparent ${t.confidence}%)`,
                    mask: "radial-gradient(circle at center, transparent 60%, black 60%)",
                    WebkitMask: "radial-gradient(circle at center, transparent 60%, black 60%)",
                    opacity: 0.7,
                  }}
                />
                <span className="relative text-base font-bold text-charcoal">{t.confidence}</span>
              </div>
            </div>

            {/* data readiness */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">Data readiness</span>
                <span className="text-[11px] font-semibold text-charcoal">{t.dataScore}%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-black/6">
                <div className="h-full rounded-full bg-blue-400/60" style={{ width: `${t.dataScore}%` }} />
              </div>
              <p className="text-[10px] text-gray-400">{t.dataLabel}</p>
            </div>

            {/* expected return */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">Expected return</span>
                <span className="text-[11px] font-semibold text-charcoal">{t.returnScore}%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-black/6">
                <div className="h-full rounded-full bg-accent-green" style={{ width: `${t.returnScore}%` }} />
              </div>
            </div>

            {/* meta row: effort + risk */}
            <div className="flex items-center gap-2">
              <span className="rounded-full border border-black/8 bg-[#f5f5f5] px-3 py-1 text-[11px] font-semibold text-charcoal">
                ⏱ {t.effort}
              </span>
              <span className={`flex items-center gap-1.5 text-[11px] font-semibold ${riskStyle[t.risk].label}`}>
                <span className={`h-1.5 w-1.5 rounded-full ${riskStyle[t.risk].dot}`} />
                {t.risk} risk
              </span>
            </div>

            {/* integrations */}
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">Integrations</span>
              <div className="flex flex-wrap gap-1.5">
                {t.integrations.map((int) => (
                  <span key={int} className="rounded-full border border-black/8 bg-[#f7f7f7] px-2.5 py-1 text-[10px] text-gray-500">
                    {int}
                  </span>
                ))}
              </div>
            </div>

            {/* verdict strip */}
            <div className={`rounded-xl px-4 py-3 ${idx === 0 ? "bg-accent-green/8" : "bg-amber-50/70"}`}>
              <p className={`text-[11px] font-semibold leading-relaxed ${idx === 0 ? "text-accent-green" : "text-amber-600"}`}>
                {idx === 0
                  ? "Strong data foundation, minimal integrations — ready to build."
                  : "Slightly more complex data pipeline, but high return justifies the effort."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Sticky Progress Rail ───────────────────────────────────────────────────

const rail = [
  { n: 1, label: "Understand", icon: ScanSearch },
  { n: 2, label: "Assess", icon: BarChart3 },
  { n: 3, label: "Build one", icon: Bot },
  { n: 4, label: "Connect", icon: Network },
  { n: 5, label: "Shape UX", icon: LayoutDashboard },
  { n: 6, label: "Scale", icon: TrendingUp },
]

function ProgressRail({ active }: { active: number }) {
  const handleJump = (n: number) => {
    const el = document.getElementById(`scene-${n.toString().padStart(2, "0")}`)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }
  return (
    <div className="pointer-events-none fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
      <div className="pointer-events-auto flex flex-col items-end gap-3">
        {rail.map(({ n, label, icon: Icon }) => {
          const isActive = active === n
          const isPast = active > n
          return (
            <button
              key={n}
              onClick={() => handleJump(n)}
              className="group flex items-center gap-2 outline-none focus:outline-none"
              aria-label={`Jump to step ${n}: ${label}`}
            >
              <span
                className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium backdrop-blur transition-all duration-300 ${
                  isActive
                    ? "bg-charcoal text-white opacity-100"
                    : "bg-white/80 text-charcoal opacity-0 group-hover:opacity-100"
                }`}
              >
                {label}
              </span>
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                  isActive
                    ? "scale-110 border-accent-green bg-accent-green text-charcoal shadow-[0_4px_18px_rgba(130,200,50,0.4)]"
                    : isPast
                    ? "border-accent-green bg-accent-green/20 text-accent-green"
                    : "border-gray-300 bg-white text-gray-400"
                }`}
              >
                <Icon className="h-4 w-4" />
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ─── Scene 4: Sales Agent Blueprint ─────────────────────────────────────────

type BrandKey = "sf" | "web" | "mail" | "li" | "cal" | "chat" | "ms"

const scene4Sources: { id: string; label: string; sublabel: string; brand: BrandKey; Icon: LucideIcon }[] = [
  { id: "src-sfdc",     label: "Salesforce CRM", sublabel: "New leads, accounts", brand: "sf",   Icon: Cloud },
  { id: "src-web",      label: "Web forms",      sublabel: "aideology.ai",        brand: "web",  Icon: Globe },
  { id: "src-mail",     label: "Sales inbox",    sublabel: "Inbound emails",      brand: "mail", Icon: Mail },
  { id: "src-linkedin", label: "LinkedIn",       sublabel: "Sales Navigator",     brand: "li",   Icon: Linkedin },
]

const scene4Steps: { id: string; label: string; sub: string; Icon: LucideIcon }[] = [
  { id: "st-understand", label: "Understand", sub: "intent + entities",   Icon: ScanSearch },
  { id: "st-enrich",     label: "Enrich",     sub: "context + history",   Icon: Database },
  { id: "st-qualify",    label: "Qualify",    sub: "score + fit",         Icon: Target },
  { id: "st-plan",       label: "Plan",       sub: "next best action",    Icon: ListChecks },
  { id: "st-act",        label: "Act",        sub: "execute safely",      Icon: Zap },
]

const scene4Actions: { id: string; label: string; sublabel: string; brand: BrandKey; Icon: LucideIcon }[] = [
  { id: "act-sfdc",    label: "Update Salesforce", sublabel: "Lead + opportunity",  brand: "sf",   Icon: Cloud },
  { id: "act-email",   label: "Send email reply",  sublabel: "Personalised",        brand: "mail", Icon: Mail },
  { id: "act-meeting", label: "Book meeting",      sublabel: "Calendar invite",     brand: "cal",  Icon: Calendar },
  { id: "act-notify",  label: "Notify sales rep",  sublabel: "Slack / Teams",       brand: "chat", Icon: MessageSquare },
]

const scene4Tools: { label: string; Icon: LucideIcon }[] = [
  { label: "GPT-4",                 Icon: Brain },
  { label: "Vector knowledge base", Icon: Database },
  { label: "Salesforce API",        Icon: Cloud },
  { label: "Gmail API",             Icon: Mail },
  { label: "Calendar API",          Icon: Calendar },
  { label: "Human-in-the-loop",     Icon: Users },
]

function BrandBadge({ brand, Icon }: { brand: BrandKey; Icon: LucideIcon }) {
  const colors: Record<BrandKey, string> = {
    sf:   "bg-[#00A1E0]",
    web:  "bg-charcoal",
    mail: "bg-[#EA4335]",
    li:   "bg-[#0A66C2]",
    cal:  "bg-[#4285F4]",
    chat: "bg-[#611F69]",
    ms:   "bg-[#6264A7]",
  }
  return (
    <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${colors[brand]} text-white shadow-sm`}>
      <Icon className="h-4 w-4" />
    </div>
  )
}

function Scene4ArrowConnector({ label }: { label?: string }) {
  return (
    <div className="hidden items-center justify-center md:flex">
      <svg viewBox="0 0 48 40" className="h-10 w-14 overflow-visible" fill="none" aria-hidden>
        {/* base line — GSAP draws this in */}
        <line
          data-scene4-arrow
          x1="3" y1="20" x2="42" y2="20"
          stroke="#82c832"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="45"
          strokeDashoffset="45"
        />
        {/* continuous flow dashes */}
        <line
          x1="3" y1="20" x2="42" y2="20"
          stroke="#82c832"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="2 5"
          opacity="0.55"
          style={{ animation: "scene4-flow 1.8s linear infinite" }}
        />
        {/* arrowhead */}
        <polyline
          data-scene4-arrowhead
          points="37,13 45,20 37,27"
          stroke="#82c832"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0"
        />
        {label && (
          <text x="23" y="10" textAnchor="middle" fontSize="6" fill="#6b7280" fontWeight="600" letterSpacing="1">
            {label}
          </text>
        )}
      </svg>
    </div>
  )
}

function Scene4MultiAgent({
  sceneRef,
  block,
}: {
  sceneRef: React.RefObject<HTMLElement | null>
  block: Block
}) {
  const StepIcon = block.stepIcon
  return (
    <section
      ref={sceneRef}
      id="scene-04"
      data-scene="4"
      className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-[#f9f9f9] shadow-[0_20px_70px_rgba(0,0,0,0.06)]"
    >
      <div className="bg-charcoal p-6 md:p-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-green/15 text-accent-green">
            <StepIcon className="h-5 w-5" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-green">{block.label}</span>
        </div>
        <h2 className="mt-4 text-2xl font-bold leading-snug text-white md:text-3xl">{block.title}</h2>
        <p className="mt-3 max-w-2xl text-base text-white/60">{block.summary}</p>
      </div>

      <div className="grid gap-8 p-6 md:p-8 xl:grid-cols-[280px_1fr] xl:items-start xl:gap-10">
        {/* bullets */}
        <div className="space-y-3">
          {block.bullets.map(({ icon: BulletIcon, text }, i) => (
            <div
              key={text}
              data-scene4-bullet={i}
              className="flex items-start gap-3 rounded-2xl border border-black/5 bg-white px-4 py-4 shadow-sm opacity-0"
              style={{ transform: "translateY(12px)" }}
            >
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-accent-green/10 text-accent-green">
                <BulletIcon className="h-4 w-4" />
              </div>
              <span className="text-sm leading-relaxed text-gray-700">{text}</span>
            </div>
          ))}
        </div>

        {/* Sales Agent Blueprint */}
        <div className="rounded-[1.5rem] border border-accent-green/15 bg-white p-5 shadow-[0_4px_30px_rgba(0,0,0,0.04)] md:p-6">
          {/* Blueprint header */}
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-black/5 pb-4">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-accent-green/40 bg-[#f4f4f4]">
                <Image
                  src="/building-process/agents/comms.png"
                  alt="Sales agent"
                  fill
                  sizes="44px"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent-green">
                  Example · Sales Agent
                </div>
                <div className="text-sm font-semibold text-charcoal">
                  One agent inside the platform, end-to-end
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-accent-green/30 bg-accent-green/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-accent-green">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-green" />
              </span>
              Live Blueprint
            </div>
          </div>

          {/* 3-column pipeline: Sources → Agent → Actions */}
          <div className="grid gap-4 md:grid-cols-[minmax(0,0.95fr)_auto_minmax(0,1.35fr)_auto_minmax(0,0.95fr)] md:items-stretch">
            {/* SOURCES */}
            <div className="flex flex-col gap-2">
              <div className="mb-1 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500">
                <span className="flex h-4 w-4 items-center justify-center rounded bg-charcoal text-[9px] font-bold text-white">1</span>
                Sources
              </div>
              {scene4Sources.map((s, i) => (
                <div
                  key={s.id}
                  data-scene4-source={i}
                  className="flex items-center gap-2.5 rounded-xl border border-black/[0.08] bg-white px-3 py-2.5 opacity-0 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition hover:border-accent-green/30"
                  style={{ transform: "translateX(-12px)" }}
                >
                  <BrandBadge brand={s.brand} Icon={s.Icon} />
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-[11.5px] font-semibold text-charcoal">{s.label}</div>
                    <div className="truncate text-[10px] text-gray-500">{s.sublabel}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Arrow 1 */}
            <Scene4ArrowConnector label="INGEST" />

            {/* AGENT (center) */}
            <div className="flex flex-col gap-3 rounded-2xl border border-accent-green/30 bg-gradient-to-b from-[#f7f9f4] to-white p-4">
              <div className="flex items-center gap-3">
                <div
                  data-scene4-avatar
                  className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-accent-green bg-white opacity-0 shadow-[0_4px_16px_rgba(130,200,50,0.25)]"
                  style={{ transform: "scale(0.75)" }}
                >
                  <Image
                    src="/building-process/agents/comms.png"
                    alt="Sales agent"
                    fill
                    sizes="56px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent-green">
                    Autonomous Agent
                  </div>
                  <div className="text-base font-bold leading-tight text-charcoal">Sales Agent</div>
                  <div className="mt-0.5 text-[11px] text-gray-500">Handles inbound leads end-to-end</div>
                </div>
              </div>

              {/* Mini-pipeline */}
              <div className="mt-1 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500">
                <span className="flex h-4 w-4 items-center justify-center rounded bg-charcoal text-[9px] font-bold text-white">2</span>
                Agent workflow
              </div>
              <div className="flex items-stretch gap-0.5 rounded-xl border border-accent-green/20 bg-white p-2">
                {scene4Steps.map((st, i) => (
                  <div key={st.id} className="flex flex-1 items-center">
                    <div
                      data-scene4-step={i}
                      className="flex flex-1 flex-col items-center gap-1 rounded-lg px-1 py-2 opacity-0"
                      style={{ transform: "translateY(8px)" }}
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-green/15 text-accent-green ring-1 ring-accent-green/30">
                        <st.Icon className="h-4 w-4" />
                      </div>
                      <span className="mt-0.5 whitespace-nowrap text-[10px] font-bold text-charcoal">{st.label}</span>
                      <span className="text-center text-[9px] leading-tight text-gray-500">{st.sub}</span>
                    </div>
                    {i < scene4Steps.length - 1 && (
                      <ArrowRight className="h-3 w-3 shrink-0 text-accent-green/70" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow 2 */}
            <Scene4ArrowConnector label="ACT" />

            {/* ACTIONS */}
            <div className="flex flex-col gap-2">
              <div className="mb-1 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500">
                <span className="flex h-4 w-4 items-center justify-center rounded bg-charcoal text-[9px] font-bold text-white">3</span>
                Actions
              </div>
              {scene4Actions.map((a, i) => (
                <div
                  key={a.id}
                  data-scene4-action={i}
                  className="flex items-center gap-2.5 rounded-xl border border-black/[0.08] bg-white px-3 py-2.5 opacity-0 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition hover:border-accent-green/30"
                  style={{ transform: "translateX(12px)" }}
                >
                  <BrandBadge brand={a.brand} Icon={a.Icon} />
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-[11.5px] font-semibold text-charcoal">{a.label}</div>
                    <div className="truncate text-[10px] text-gray-500">{a.sublabel}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools / Powered-by footer */}
          <div className="mt-5 rounded-xl border border-black/5 bg-[#f7f7f7] p-3">
            <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500">
              <Wrench className="h-3 w-3" />
              Powered by
            </div>
            <div className="flex flex-wrap gap-1.5">
              {scene4Tools.map((t, i) => (
                <span
                  key={t.label}
                  data-scene4-tool={i}
                  className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.08] bg-white px-2.5 py-1 text-[10.5px] font-semibold text-charcoal opacity-0 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
                  style={{ transform: "translateY(6px)" }}
                >
                  <t.Icon className="h-3 w-3 text-accent-green" />
                  {t.label}
                </span>
              ))}
            </div>
          </div>

          {/* local CSS animation for the flowing arrow dashes */}
          <style>{`
            @keyframes scene4-flow {
              from { stroke-dashoffset: 0; }
              to   { stroke-dashoffset: -24; }
            }
          `}</style>
        </div>

        {/* caption — spans full width below the blueprint */}
        <div
          data-scene4-caption
          className="xl:col-span-2 mx-auto mt-2 flex items-center gap-2 rounded-full border border-accent-green/30 bg-gradient-to-r from-accent-green/10 via-accent-green/15 to-accent-green/10 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-accent-green opacity-0 shadow-[0_4px_16px_rgba(130,200,50,0.12)]"
          style={{ transform: "translateY(8px)" }}
        >
          <Sparkles className="h-3.5 w-3.5" />
          Every agent in the platform follows this same blueprint
        </div>
      </div>
    </section>
  )
}

// ─── Scene 5: User Experience ───────────────────────────────────────────────

// Scene 5 workspace mock data ——————————————————————————————————————
const scene5Agents = [
  { id: "s5a1", name: "Sofia",  role: "Sales Agent",        avatar: "/building-process/agents/comms.png",       task: "Qualifying 12 new inbound leads",  status: "active" as const, progress: 72 },
  { id: "s5a2", name: "Marcus", role: "Data Agent",         avatar: "/building-process/agents/data.png",        task: "Enriching accounts from Salesforce", status: "active" as const, progress: 46 },
  { id: "s5a3", name: "Elena",  role: "Insights Agent",     avatar: "/building-process/agents/analysis.png",    task: "Weekly pipeline report",           status: "active" as const, progress: 88 },
  { id: "s5a4", name: "Ravi",   role: "Operations Agent",   avatar: "/building-process/agents/execution.png",   task: "Routing purchase orders",          status: "idle"   as const, progress: 30 },
  { id: "s5a5", name: "Yuki",   role: "Integrations Agent", avatar: "/building-process/agents/integration.png", task: "Syncing CRM & marketing tools",    status: "active" as const, progress: 60 },
]

const scene5Decisions = [
  {
    id: "d1",
    agent: "Sofia · Sales Agent",
    avatar: "/building-process/agents/comms.png",
    title: "Approve outreach to Acme Corp",
    detail: "Inbound lead scored 92%. Send personalised email + book meeting slot?",
    amount: "High intent",
    tag: "Sales",
  },
  {
    id: "d2",
    agent: "Ravi · Operations Agent",
    avatar: "/building-process/agents/execution.png",
    title: "Reroute shipment #A-2041",
    detail: "Delay detected at hub Berlin — alternative route saves 36h.",
    amount: "−36h",
    tag: "Logistics",
  },
]

const scene5Drafts = [
  {
    id: "dr1",
    agent: "Sofia · Sales Agent",
    avatar: "/building-process/agents/comms.png",
    subject: "Re: Demo request from Acme Corp",
    preview: "Hi Lisa — thanks for your interest. I've shortlisted 3 slots on your calendar for a 30-min demo…",
    ready: true,
  },
  {
    id: "dr2",
    agent: "Elena · Insights Agent",
    avatar: "/building-process/agents/analysis.png",
    subject: "Weekly pipeline digest — wk 16",
    preview: "Pipeline coverage up 22% w/w, 3 deals at risk flagged in the enterprise segment…",
    ready: true,
  },
]

const scene5Activity = [
  { id: "act1", avatar: "/building-process/agents/comms.png",       text: "Sofia qualified 17 inbound leads from Salesforce",  time: "2 min ago" },
  { id: "act2", avatar: "/building-process/agents/data.png",        text: "Marcus enriched 240 accounts with firmographics",   time: "14 min ago" },
  { id: "act3", avatar: "/building-process/agents/integration.png", text: "Yuki synced 1,204 records CRM → Marketing",         time: "28 min ago" },
]

function Scene5Experience({
  sceneRef,
  block,
}: {
  sceneRef: React.RefObject<HTMLElement | null>
  block: Block
}) {
  const StepIcon = block.stepIcon
  return (
    <section
      ref={sceneRef}
      id="scene-05"
      data-scene="5"
      className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-[#f9f9f9] shadow-[0_20px_70px_rgba(0,0,0,0.06)]"
    >
      <div className="bg-charcoal p-6 md:p-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-green/15 text-accent-green">
            <StepIcon className="h-5 w-5" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-green">{block.label}</span>
        </div>
        <h2 className="mt-4 text-2xl font-bold leading-snug text-white md:text-3xl">{block.title}</h2>
        <p className="mt-3 max-w-2xl text-base text-white/60">{block.summary}</p>
      </div>

      <div className="grid gap-8 p-6 md:p-8 xl:grid-cols-[280px_1fr] xl:items-start xl:gap-10">
        {/* bullets */}
        <div className="space-y-3">
          {block.bullets.map(({ icon: BulletIcon, text }, i) => (
            <div
              key={text}
              data-scene5-bullet={i}
              className="flex items-start gap-3 rounded-2xl border border-black/5 bg-white px-4 py-4 shadow-sm opacity-0"
              style={{ transform: "translateY(12px)" }}
            >
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-accent-green/10 text-accent-green">
                <BulletIcon className="h-4 w-4" />
              </div>
              <span className="text-sm leading-relaxed text-gray-700">{text}</span>
            </div>
          ))}
        </div>

        {/* Workspace mock — what the customer sees in production */}
        <div
          data-scene5-workspace
          className="relative overflow-hidden rounded-[1.75rem] border border-black/5 bg-white shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] opacity-0"
          style={{ transform: "translateY(24px)" }}
        >
          {/* chrome bar */}
          <div className="flex items-center gap-3 border-b border-black/5 bg-[#f3f3f3] px-5 py-3">
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-red-300/80" />
              <div className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
              <div className="h-2.5 w-2.5 rounded-full bg-accent-green/60" />
            </div>
            <div className="mx-auto flex max-w-[320px] items-center gap-2 rounded-full bg-white px-3 py-1 text-[10px] font-medium text-gray-400 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-green" />
              workspace.yourcompany.ai
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">Your Workspace</span>
          </div>

          {/* app body: sidebar + main */}
          <div className="grid grid-cols-[72px_1fr] bg-[#fafafa]">

            {/* sidebar */}
            <div className="flex flex-col items-center gap-4 border-r border-black/5 bg-white py-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-charcoal text-accent-green">
                <Sparkles className="h-4 w-4" />
              </div>
              <div className="my-1 h-px w-8 bg-black/5" />
              {[
                { icon: LayoutDashboard, active: true },
                { icon: Bot,             active: false },
                { icon: ListChecks,      active: false },
                { icon: Mail,            active: false },
                { icon: BarChart3,       active: false },
              ].map(({ icon: NavIcon, active }, i) => (
                <div
                  key={i}
                  className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                    active
                      ? "bg-accent-green/15 text-accent-green"
                      : "text-gray-400 hover:bg-black/5"
                  }`}
                >
                  <NavIcon className="h-4 w-4" />
                </div>
              ))}
            </div>

            {/* main */}
            <div className="flex flex-col gap-5 p-5 md:p-6">

              {/* greeting + user */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">Monday morning</p>
                  <p className="mt-0.5 text-base font-bold text-charcoal">Good morning, Sarah</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 rounded-full border border-black/5 bg-white px-2.5 py-1 text-[10px] text-gray-500 shadow-sm">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-green" />
                    </span>
                    4 agents live
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-green/15 text-[11px] font-bold text-accent-green ring-2 ring-white">
                    SM
                  </div>
                </div>
              </div>

              {/* agent strip */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">Your agents</span>
                  <span className="text-[10px] text-gray-400">5 working for you</span>
                </div>
                <div className="grid grid-cols-5 gap-2.5">
                  {scene5Agents.map((a, i) => (
                    <div
                      key={a.id}
                      data-scene5-agent={i}
                      className="relative flex flex-col items-center gap-1.5 rounded-2xl border border-black/5 bg-white px-2 py-3 shadow-sm opacity-0"
                      style={{ transform: "translateY(10px)" }}
                    >
                      <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-accent-green/60 bg-charcoal">
                        <Image src={a.avatar} alt={a.name} fill sizes="40px" className="object-cover object-top" />
                        <span className="absolute -bottom-0.5 right-0 flex h-3 w-3 items-center justify-center">
                          <span
                            className={`absolute h-3 w-3 rounded-full ring-2 ring-white ${
                              a.status === "active" ? "bg-accent-green" : "bg-amber-300"
                            }`}
                          />
                          {a.status === "active" && (
                            <span className="absolute h-3 w-3 animate-ping rounded-full bg-accent-green/50" />
                          )}
                        </span>
                      </div>
                      <p className="text-[11px] font-semibold leading-tight text-charcoal">{a.name}</p>
                      <p className="text-[9px] leading-tight text-gray-400">{a.role}</p>
                      <div className="mt-0.5 h-0.5 w-full overflow-hidden rounded-full bg-black/5">
                        <div
                          data-scene5-agent-bar={i}
                          className={`h-full rounded-full ${a.status === "active" ? "bg-accent-green" : "bg-amber-300"}`}
                          style={{ width: "0%" }}
                          data-target-width={a.progress}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* decisions + drafts columns */}
              <div className="grid gap-4 lg:grid-cols-2">
                {/* DECISIONS */}
                <div className="flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                  <div className="flex items-center gap-2 border-b border-black/5 bg-[#fafafa] px-4 py-2.5">
                    <ListChecks className="h-3.5 w-3.5 text-accent-green" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-500">Decisions to approve</span>
                    <span className="ml-auto rounded-full bg-accent-green/10 px-2 py-0.5 text-[9px] font-semibold text-accent-green">
                      {scene5Decisions.length} pending
                    </span>
                  </div>
                  <div className="flex flex-col divide-y divide-black/5">
                    {scene5Decisions.map((d, i) => (
                      <div
                        key={d.id}
                        data-scene5-decision={i}
                        className="flex flex-col gap-2 p-4 opacity-0"
                        style={{ transform: "translateY(8px)" }}
                      >
                        <div className="flex items-start gap-3">
                          <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full border border-black/10 bg-charcoal">
                            <Image src={d.avatar} alt={d.agent} fill sizes="32px" className="object-cover object-top" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-semibold text-gray-400">{d.agent}</span>
                              <span className="rounded-full bg-black/5 px-1.5 py-0.5 text-[9px] font-medium text-gray-500">
                                {d.tag}
                              </span>
                            </div>
                            <p className="mt-0.5 text-xs font-semibold leading-snug text-charcoal">{d.title}</p>
                            <p className="mt-1 text-[11px] leading-relaxed text-gray-500">{d.detail}</p>
                          </div>
                          <span className="shrink-0 rounded-md bg-charcoal/5 px-1.5 py-0.5 text-[10px] font-bold text-charcoal">
                            {d.amount}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 pl-11">
                          <button
                            type="button"
                            className="flex items-center gap-1 rounded-md bg-accent-green px-2.5 py-1 text-[10px] font-semibold text-charcoal shadow-sm"
                          >
                            <CheckCircle2 className="h-3 w-3" />
                            Approve
                          </button>
                          <button
                            type="button"
                            className="rounded-md border border-black/10 bg-white px-2.5 py-1 text-[10px] font-semibold text-gray-500"
                          >
                            Reject
                          </button>
                          <span className="ml-auto text-[9px] text-gray-400">needs your review</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* DRAFTS */}
                <div className="flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                  <div className="flex items-center gap-2 border-b border-black/5 bg-[#fafafa] px-4 py-2.5">
                    <Mail className="h-3.5 w-3.5 text-accent-green" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-500">Drafts ready</span>
                    <span className="ml-auto rounded-full bg-accent-green/10 px-2 py-0.5 text-[9px] font-semibold text-accent-green">
                      {scene5Drafts.length} to review
                    </span>
                  </div>
                  <div className="flex flex-col divide-y divide-black/5">
                    {scene5Drafts.map((d, i) => (
                      <div
                        key={d.id}
                        data-scene5-draft={i}
                        className="flex flex-col gap-2 p-4 opacity-0"
                        style={{ transform: "translateY(8px)" }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full border border-black/10 bg-charcoal">
                            <Image src={d.avatar} alt={d.agent} fill sizes="32px" className="object-cover object-top" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-[10px] font-semibold text-gray-400">{d.agent}</span>
                            <p className="text-xs font-semibold leading-snug text-charcoal truncate">{d.subject}</p>
                          </div>
                          {d.ready && (
                            <span className="flex items-center gap-1 rounded-full bg-accent-green/12 px-1.5 py-0.5 text-[9px] font-semibold text-accent-green">
                              <CheckCircle2 className="h-2.5 w-2.5" /> ready
                            </span>
                          )}
                        </div>
                        <p className="pl-11 text-[11px] leading-relaxed text-gray-500 line-clamp-2">{d.preview}</p>
                        <div className="flex items-center gap-2 pl-11">
                          <button
                            type="button"
                            className="flex items-center gap-1 rounded-md bg-charcoal px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm"
                          >
                            Send
                          </button>
                          <button
                            type="button"
                            className="rounded-md border border-black/10 bg-white px-2.5 py-1 text-[10px] font-semibold text-gray-500"
                          >
                            Edit
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* activity feed */}
              <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                <div className="flex items-center gap-2 border-b border-black/5 bg-[#fafafa] px-4 py-2.5">
                  <MessageSquare className="h-3.5 w-3.5 text-accent-green" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-500">Live activity</span>
                  <span className="ml-auto flex items-center gap-1 text-[10px] text-gray-400">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-green" />
                    </span>
                    streaming
                  </span>
                </div>
                <div className="flex flex-col divide-y divide-black/5">
                  {scene5Activity.map((a, i) => (
                    <div
                      key={a.id}
                      data-scene5-activity={i}
                      className="flex items-center gap-3 px-4 py-2.5 opacity-0"
                      style={{ transform: "translateX(-8px)" }}
                    >
                      <div className="relative h-6 w-6 shrink-0 overflow-hidden rounded-full border border-black/10 bg-charcoal">
                        <Image src={a.avatar} alt="" fill sizes="24px" className="object-cover object-top" />
                      </div>
                      <p className="flex-1 text-[11px] text-charcoal">{a.text}</p>
                      <span className="text-[10px] text-gray-400">{a.time}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Scene 6: Scale & Support ───────────────────────────────────────────────

type Scene6Dept = {
  name: string
  role: string
  avatar: string
  icon: LucideIcon
  highlight?: boolean
  agents: { name: string; icon: LucideIcon }[]
}

const scene6Departments: Scene6Dept[] = [
  {
    name: "Finance",
    role: "CFO Agent",
    avatar: "/building-process/agents/data.png",
    icon: Building2,
    agents: [
      { name: "AP automation",   icon: Wallet },
      { name: "AR collections",  icon: Receipt },
      { name: "Expense auditor", icon: ShieldCheck },
    ],
  },
  {
    name: "Sales",
    role: "CRO Agent",
    avatar: "/building-process/agents/comms.png",
    icon: TrendingUp,
    highlight: true,
    agents: [
      { name: "Lead qualifier",   icon: Target },
      { name: "Outreach",         icon: Mail },
      { name: "Proposal builder", icon: FileText },
      { name: "Forecast",         icon: BarChart3 },
    ],
  },
  {
    name: "Operations",
    role: "COO Agent",
    avatar: "/building-process/agents/execution.png",
    icon: Workflow,
    agents: [
      { name: "Order router",    icon: GitFork },
      { name: "Inventory",       icon: Boxes },
      { name: "Logistics",       icon: Truck },
    ],
  },
  {
    name: "HR",
    role: "CHRO Agent",
    avatar: "/building-process/agents/analysis.png",
    icon: Users,
    agents: [
      { name: "Onboarding", icon: UserPlus },
      { name: "Policy Q&A", icon: MessageSquare },
      { name: "Recruiting", icon: FileSearch },
    ],
  },
]

function Scene6Scale({
  sceneRef,
  block,
}: {
  sceneRef: React.RefObject<HTMLElement | null>
  block: Block
}) {
  const StepIcon = block.stepIcon
  return (
    <section
      ref={sceneRef}
      id="scene-06"
      data-scene="6"
      className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-[#f9f9f9] shadow-[0_20px_70px_rgba(0,0,0,0.06)]"
    >
      <div className="bg-charcoal p-6 md:p-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-green/15 text-accent-green">
            <StepIcon className="h-5 w-5" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-green">{block.label}</span>
        </div>
        <h2 className="mt-4 text-2xl font-bold leading-snug text-white md:text-3xl">{block.title}</h2>
        <p className="mt-3 max-w-2xl text-base text-white/60">{block.summary}</p>
      </div>

      <div className="grid gap-8 p-6 md:p-8 xl:grid-cols-[280px_1fr] xl:items-start xl:gap-10">
        {/* bullets */}
        <div className="space-y-3">
          {block.bullets.map(({ icon: BulletIcon, text }, i) => (
            <div
              key={text}
              data-scene6-bullet={i}
              className="flex items-start gap-3 rounded-2xl border border-black/5 bg-white px-4 py-4 shadow-sm opacity-0"
              style={{ transform: "translateY(12px)" }}
            >
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-accent-green/10 text-accent-green">
                <BulletIcon className="h-4 w-4" />
              </div>
              <span className="text-sm leading-relaxed text-gray-700">{text}</span>
            </div>
          ))}
        </div>

        {/* Agentic Enterprise org chart */}
        <div className="relative mx-auto w-full max-w-[720px] rounded-[1.5rem] border border-black/[0.06] bg-white p-5 shadow-[0_4px_30px_rgba(0,0,0,0.04)] md:p-6">
          {/* header row: title + counter */}
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-black/5 pb-4">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent-green">
                Agentic Enterprise · Org chart
              </div>
              <div className="text-sm font-semibold text-charcoal">
                From one pilot to a full AI-native company
              </div>
            </div>
            <div
              data-scene6-counter
              className="flex items-baseline gap-2 rounded-full bg-charcoal px-4 py-2 text-white shadow-md"
            >
              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-accent-green">Agents live</span>
              <span data-scene6-count className="text-lg font-bold tabular-nums text-white">1</span>
            </div>
          </div>

          {/* CEO row */}
          <div className="flex flex-col items-center gap-2">
            <div
              data-scene6-root
              className="relative h-20 w-20 overflow-hidden rounded-2xl border-2 border-accent-green bg-gradient-to-b from-white to-[#f4f4f4] shadow-[0_6px_24px_rgba(130,200,50,0.2)]"
            >
              <Image
                src="/building-process/agents/lead.png"
                alt="CEO Agent"
                fill
                sizes="80px"
                className="object-cover object-top"
              />
              {/* CEO crown badge */}
              <div className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent-green text-charcoal shadow-md ring-2 ring-white">
                <Crown className="h-3 w-3" />
              </div>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <span className="rounded-full border border-accent-green/30 bg-accent-green/10 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.18em] text-accent-green">
                CEO Agent
              </span>
              <span className="text-[10px] text-gray-500">Company Orchestrator</span>
            </div>
          </div>

          {/* vertical trunk down from CEO */}
          <div className="relative mx-auto mt-3 h-6 w-px bg-accent-green/20">
            <div
              data-scene6-trunk
              className="absolute inset-x-0 top-0 bg-accent-green"
              style={{ height: "0%" }}
            />
          </div>

          {/* horizontal spreader + 4 department columns */}
          <div className="relative mt-0">
            {/* horizontal spreader line — spans from first column center to last column center */}
            <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-0 hidden h-px bg-accent-green/20 md:block" />

            <div className="grid grid-cols-2 gap-x-3 gap-y-5 md:grid-cols-4 md:gap-x-2">
              {scene6Departments.map((dept, i) => {
                const DeptIcon = dept.icon
                return (
                  <div
                    key={dept.name}
                    data-scene6-branch={i}
                    className="relative flex flex-col items-center gap-2 opacity-0"
                    style={{ transform: "translateY(16px)" }}
                  >
                    {/* vertical drop from spreader */}
                    <div className="hidden h-4 w-px bg-accent-green/25 md:block" />

                    {/* department head card */}
                    <div
                      className={`flex w-full flex-col items-center gap-2 rounded-xl border px-2 py-3 ${
                        dept.highlight
                          ? "border-accent-green/40 bg-accent-green/[0.04] shadow-[0_4px_16px_rgba(130,200,50,0.1)]"
                          : "border-black/[0.06] bg-[#fafafa]"
                      }`}
                    >
                      {/* avatar */}
                      <div
                        className={`relative h-14 w-14 overflow-hidden rounded-xl border bg-white ${
                          dept.highlight ? "border-accent-green" : "border-black/[0.08]"
                        }`}
                      >
                        <Image
                          src={dept.avatar}
                          alt={`${dept.name} department head`}
                          fill
                          sizes="56px"
                          className="object-cover object-top"
                        />
                        {/* dept icon badge */}
                        <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-charcoal text-accent-green shadow-sm ring-2 ring-white">
                          <DeptIcon className="h-2.5 w-2.5" />
                        </div>
                      </div>

                      {/* name + role */}
                      <div className="flex flex-col items-center leading-tight">
                        <span className="text-[11px] font-bold text-charcoal">{dept.name}</span>
                        <span className="text-[9px] text-gray-500">{dept.role}</span>
                      </div>

                      {/* pilot marker on Sales */}
                      {dept.highlight && (
                        <span className="flex items-center gap-1 rounded-full bg-accent-green/15 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-[0.14em] text-accent-green">
                          <span className="h-1 w-1 rounded-full bg-accent-green" />
                          Pilot
                        </span>
                      )}
                    </div>

                    {/* mini trunk to sub-agents */}
                    <div className="h-3 w-px bg-accent-green/25" />

                    {/* sub-agents column */}
                    <div className="flex w-full flex-col gap-1">
                      {dept.agents.map((agent, j) => {
                        const AgentIcon = agent.icon
                        return (
                          <div
                            key={agent.name}
                            data-scene6-child={`${i}-${j}`}
                            className="flex items-center gap-1.5 rounded-md border border-black/[0.06] bg-white px-1.5 py-1 opacity-0 shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
                          >
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-accent-green/10 text-accent-green">
                              <AgentIcon className="h-2.5 w-2.5" />
                            </span>
                            <span className="truncate text-[9.5px] font-medium text-charcoal">{agent.name}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* caption */}
          <div className="mt-6 flex justify-center">
            <div
              data-scene6-caption
              className="flex items-center gap-2 rounded-full border border-accent-green/30 bg-gradient-to-r from-accent-green/10 via-accent-green/15 to-accent-green/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-accent-green opacity-0 shadow-[0_4px_16px_rgba(130,200,50,0.12)]"
            >
              <Sparkles className="h-3.5 w-3.5" />
              From the Sales pilot to a company-wide AI operating model
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Scene 3: Pilot Sales Agent — radial capability explorer ────────────────

type AgentCapability = {
  id: string
  icon: LucideIcon
  name: string
  short: string
  desc: string
  examples: string[]
}

const agentCapabilities: AgentCapability[] = [
  {
    id: "llm",
    icon: Sparkles,
    name: "LLM core",
    short: "Reasoning engine",
    desc: "The large language model at the heart of the agent — it interprets context, reasons over inputs, and decides the next action. We select the right model per use case, balancing cost, latency, and accuracy.",
    examples: ["GPT / Claude / Llama", "Per-use-case model choice", "Hosted or private"],
  },
  {
    id: "planning",
    icon: ListChecks,
    name: "Planning",
    short: "Break down & sequence",
    desc: "The agent decomposes a goal into concrete steps and builds an execution plan before acting. It replans dynamically when a step fails or new information arrives mid-task.",
    examples: ["Multi-step workflows", "Re-planning on failure", "Goal → subtasks"],
  },
  {
    id: "tools",
    icon: Wrench,
    name: "Tool calling",
    short: "Systems & APIs",
    desc: "Selects and invokes functions, APIs, and enterprise systems to take action on the real world. Strict input/output schemas keep every call deterministic, safe, and traceable.",
    examples: ["CRM · ERP · databases", "Typed function schemas", "Retries & timeouts"],
  },
  {
    id: "memory",
    icon: Brain,
    name: "Memory",
    short: "Context across time",
    desc: "Retains short-term conversation context and long-term facts across sessions. Enables continuity — the agent remembers a client, a preference, or an ongoing deal weeks later.",
    examples: ["Short + long-term", "User & entity profiles", "Selective recall"],
  },
  {
    id: "knowledge",
    icon: Database,
    name: "Knowledge",
    short: "RAG & grounding",
    desc: "Retrieves relevant facts from your documents, wikis, and databases at runtime — grounding every answer in your company's truth rather than the model's general knowledge.",
    examples: ["Vector + keyword search", "Source citations", "Your data, not the model's"],
  },
  {
    id: "guardrails",
    icon: ShieldCheck,
    name: "Guardrails",
    short: "Policy & safety",
    desc: "Policy checks, validation, and human-in-the-loop approvals keep the agent within business rules. Sensitive actions require approval; forbidden moves are blocked by design.",
    examples: ["Input / output filtering", "Approval gates", "Role-based limits"],
  },
  {
    id: "adaptability",
    icon: Zap,
    name: "Adaptability",
    short: "Self-correction",
    desc: "Adjusts to changing inputs, failing tools, or unexpected situations. The agent catches its own errors and tries alternative paths before escalating to a human.",
    examples: ["Retry strategies", "Fallback plans", "Graceful escalation"],
  },
  {
    id: "observability",
    icon: Activity,
    name: "Observability",
    short: "Trace every step",
    desc: "Every decision, tool call, and outcome is logged and traceable. Your team can audit past runs, debug edge cases, and continuously improve the agent over time.",
    examples: ["Full run traces", "Cost & latency metrics", "Quality feedback"],
  },
]

// Positions on the orbit circle (0,0 → 100,100 viewBox), starting at 12 o'clock, clockwise.
const capabilityPositions = [
  { x: 50, y: 10 },   // 12
  { x: 78, y: 22 },   // 1:30
  { x: 90, y: 50 },   // 3
  { x: 78, y: 78 },   // 4:30
  { x: 50, y: 90 },   // 6
  { x: 22, y: 78 },   // 7:30
  { x: 10, y: 50 },   // 9
  { x: 22, y: 22 },   // 10:30
]

function SalesAgentPilot({
  sceneRef,
  orbitRef,
  block,
  activeId,
  onSelectCapability,
}: {
  sceneRef: React.RefObject<HTMLElement | null>
  orbitRef: React.RefObject<HTMLDivElement | null>
  block: Block
  activeId: string
  onSelectCapability: (id: string) => void
}) {
  const StepIcon = block.stepIcon
  const active = agentCapabilities.find((c) => c.id === activeId) ?? agentCapabilities[0]
  const ActiveIcon = active.icon
  const activeIndex = agentCapabilities.findIndex((c) => c.id === active.id)

  const selectCapability = (id: string) => {
    onSelectCapability(id)
  }

  return (
    <section
      ref={sceneRef}
      id="scene-03"
      className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-[#f9f9f9] shadow-[0_20px_70px_rgba(0,0,0,0.06)]"
    >
      {/* Dark charcoal header (matches Scene 4 / 5 / 6) */}
      <div className="bg-charcoal p-6 md:p-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-green/15 text-accent-green">
            <StepIcon className="h-5 w-5" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-green">
            {block.label}
          </span>
        </div>
        <h2 className="mt-4 text-2xl font-bold leading-snug text-white md:text-3xl">{block.title}</h2>
        <p className="mt-3 max-w-2xl text-base text-white/60">{block.summary}</p>
      </div>

      {/* Content (no left column — full width) */}
      <div className="p-6 md:p-8">

        {/* Radial capability explorer (full width, matches Scene 4's Blueprint card) */}
        <div ref={orbitRef} className="rounded-[1.5rem] border border-accent-green/15 bg-white p-5 shadow-[0_4px_30px_rgba(0,0,0,0.04)] md:p-6">

          {/* Explorer header */}
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-black/5 pb-4">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-accent-green/40 bg-[#f4f4f4]">
                <Image
                  src="/building-process/agent-jorge.png"
                  alt="Sales agent"
                  fill
                  sizes="44px"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent-green">
                  Pilot · Sales Agent
                </div>
                <div className="text-sm font-semibold text-charcoal">
                  Inbound lead qualification & routing
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-accent-green/30 bg-accent-green/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-accent-green">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-green" />
              </span>
              {agentCapabilities.length} capabilities
            </div>
          </div>

          <div className="grid items-stretch gap-6 min-[900px]:grid-cols-2 min-[900px]:gap-8">

          {/* LEFT BOX: radial scheme (equal width + equal height with the detail panel) */}
          <div className="relative mx-auto aspect-square w-full max-w-[620px] self-center">

            {/* soft radial background */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(130,200,50,0.10) 0%, rgba(130,200,50,0.03) 45%, transparent 75%)",
              }}
            />

            {/* concentric rings */}
            <div className="pointer-events-none absolute inset-[18%] rounded-full border border-dashed border-accent-green/25" />
            <div className="pointer-events-none absolute inset-[5%] rounded-full border border-accent-green/10" />

            {/* SVG connecting lines center ↔ each node */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {capabilityPositions.map((p, i) => {
                const isActive = i === activeIndex
                return (
                  <line
                    key={i}
                    x1={p.x}
                    y1={p.y}
                    x2={50}
                    y2={50}
                    stroke="#82c832"
                    strokeWidth={isActive ? 0.5 : 0.3}
                    strokeOpacity={isActive ? 0.85 : 0.25}
                    strokeDasharray={isActive ? "none" : "1.5 4"}
                  />
                )
              })}
            </svg>

            {/* CENTER: agent avatar */}
            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <div className="relative flex flex-col items-center">
                <div className="pointer-events-none absolute top-[60px] h-40 w-40 -translate-y-1/2 rounded-full bg-accent-green/30 blur-2xl" />
                <div className="relative h-32 w-32 overflow-hidden rounded-full border-[3px] border-accent-green bg-[#f7f7f7] shadow-[0_0_44px_rgba(130,200,50,0.4)]">
                  <Image
                    src="/building-process/agent-jorge.png"
                    alt="Sales Agent"
                    fill
                    sizes="128px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative mt-3 rounded-full bg-charcoal px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-accent-green shadow-[0_4px_16px_rgba(0,0,0,0.2)]">
                  Sales Agent
                </div>
                <div className="relative mt-1.5 flex items-center gap-1.5 whitespace-nowrap rounded-full border border-black/[0.06] bg-white px-2.5 py-1 text-[10px] font-semibold text-charcoal shadow-sm">
                  <Workflow className="h-2.5 w-2.5 text-accent-green" />
                  Inbound lead qualification
                </div>
              </div>
            </div>

            {/* capability orbit nodes */}
            {agentCapabilities.map((c, i) => {
              const Icon = c.icon
              const { x, y } = capabilityPositions[i]
              const isActive = c.id === active.id
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => selectCapability(c.id)}
                  aria-pressed={isActive}
                  aria-label={`Show details for ${c.name}`}
                  className="group absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 outline-none focus:outline-none"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl border-2 transition-all duration-300 ${
                      isActive
                        ? "scale-110 border-accent-green bg-accent-green text-charcoal shadow-[0_12px_28px_rgba(130,200,50,0.5)]"
                        : "border-black/[0.08] bg-white text-charcoal/70 group-hover:-translate-y-0.5 group-hover:border-accent-green/60 group-hover:bg-accent-green/5 group-hover:text-charcoal group-hover:shadow-md"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span
                    className={`whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.14em] transition-colors ${
                      isActive ? "text-accent-green" : "text-gray-500 group-hover:text-charcoal"
                    }`}
                  >
                    {c.name}
                  </span>
                </button>
              )
            })}
          </div>

          {/* RIGHT BOX: detail panel (matches the radial scheme height) */}
          <div
            key={active.id}
            className="flex h-full flex-col justify-center rounded-2xl border border-accent-green/20 bg-gradient-to-br from-accent-green/[0.08] via-white to-white px-6 py-7 shadow-[0_10px_30px_-15px_rgba(130,200,50,0.3)] md:px-8 md:py-8"
            style={{ animation: "cap-fade 0.3s ease-out" }}
          >
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent-green text-charcoal shadow-[0_6px_16px_rgba(130,200,50,0.4)]">
                <ActiveIcon className="h-7 w-7" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-2xl font-bold text-charcoal">{active.name}</h3>
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent-green">
                    {active.short}
                  </span>
                </div>
                <p className="mt-3 text-base leading-relaxed text-gray-600">{active.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {active.examples.map((ex) => (
                    <span
                      key={ex}
                      className="rounded-full border border-black/[0.08] bg-white px-3 py-1.5 text-xs font-medium text-gray-600"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          </div>

          <p className="mt-5 flex items-center justify-center gap-1.5 text-[11px] text-gray-400">
            <Sparkles className="h-3 w-3 text-accent-green" />
            Click any capability to explore
          </p>

          <style>{`
            @keyframes cap-fade {
              from { opacity: 0.35; transform: translateY(4px); }
              to   { opacity: 1;    transform: translateY(0);   }
            }
          `}</style>
        </div>
      </div>
    </section>
  )
}

// ────────────────────────────────────────────────────────────────────────────

export default function BuildingProcessStory() {
  const step01Ref    = useRef<HTMLElement>(null)
  const step02Ref    = useRef<HTMLElement>(null)
  const step03Ref    = useRef<HTMLElement>(null)
  const scene04Ref   = useRef<HTMLElement>(null)
  const scene05Ref   = useRef<HTMLElement>(null)
  const scene06Ref   = useRef<HTMLElement>(null)
  const scene03OrbitRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(0)
  const [scene03ActiveId, setScene03ActiveId] = useState<string>("llm")
  const scene03UserInteractedRef = useRef(false)
  const handleScene03Select = (id: string) => {
    scene03UserInteractedRef.current = true
    setScene03ActiveId(id)
  }

  useEffect(() => {
    if (typeof window === "undefined") return
    gsap.registerPlugin(ScrollTrigger)

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const isDesktop = window.innerWidth >= 1024

    const section = step01Ref.current
    if (!section) return

    const dimRows   = section.querySelectorAll<HTMLElement>('[data-row="dim"]')
    const hlRows    = section.querySelectorAll<HTMLElement>('[data-row="highlight"]')
    const badges    = section.querySelectorAll<HTMLElement>('[data-selected-badge]')
    const leftPanel = section.querySelector<HTMLElement>('[data-left-panel]')
    const footerDef = section.querySelectorAll<HTMLElement>('[data-footer-default]')
    const footerSel = section.querySelector<HTMLElement>('[data-footer-selected]')

    const tl = gsap.timeline({
      paused: true,
      defaults: { ease: "power2.out" },
    })

    tl.to(dimRows,   { opacity: 0.1, filter: "grayscale(1)", duration: 0.5 }, 0)
    tl.to(hlRows,    { backgroundColor: "rgba(130,200,50,0.06)", duration: 0.5 }, 0)
    tl.to(badges,    { opacity: 1, y: 0, stagger: 0.08, duration: 0.4 }, 0.25)
    if (leftPanel) {
      tl.to(leftPanel, { x: 0, duration: 0.55, ease: "power3.out" }, 0.3)
    }
    tl.to(footerDef, { opacity: 0, duration: 0.25 }, 0.55)
    tl.to(footerSel, { opacity: 1, duration: 0.35 }, 0.6)

    const scene1Trigger = ScrollTrigger.create({
      trigger: section,
      start: "top 60%",
      onEnter: () => tl.play(),
    })

    // ── Active step tracking for progress rail ──
    const stepRefs = [step01Ref, step02Ref, step03Ref, scene04Ref, scene05Ref, scene06Ref]
    const stepTriggers = stepRefs.map((ref, i) => {
      if (!ref.current) return null
      return ScrollTrigger.create({
        trigger: ref.current,
        start: "top 50%",
        end: "bottom 40%",
        onToggle: (self) => {
          if (self.isActive) setActiveStep(i + 1)
        },
        onEnter: () => setActiveStep(i + 1),
        onEnterBack: () => setActiveStep(i + 1),
      })
    })

    // ── Scene 4 pinned timeline: Sales Agent Blueprint ──
    const scene4El = scene04Ref.current
    let scene4Tl: gsap.core.Timeline | null = null
    if (scene4El && isDesktop && !prefersReducedMotion) {
      const bullets    = scene4El.querySelectorAll<HTMLElement>("[data-scene4-bullet]")
      const avatar     = scene4El.querySelector<HTMLElement>("[data-scene4-avatar]")
      const sources    = scene4El.querySelectorAll<HTMLElement>("[data-scene4-source]")
      const steps      = scene4El.querySelectorAll<HTMLElement>("[data-scene4-step]")
      const actions    = scene4El.querySelectorAll<HTMLElement>("[data-scene4-action]")
      const arrows     = scene4El.querySelectorAll<SVGLineElement>("[data-scene4-arrow]")
      const arrowheads = scene4El.querySelectorAll<SVGPolylineElement>("[data-scene4-arrowhead]")
      const tools      = scene4El.querySelectorAll<HTMLElement>("[data-scene4-tool]")
      const caption    = scene4El.querySelector<HTMLElement>("[data-scene4-caption]")

      scene4Tl = gsap.timeline({
        paused: true,
        defaults: { ease: "power2.out" },
      })

      scene4Tl.to(bullets, { opacity: 1, y: 0, stagger: 0.08, duration: 0.5 }, 0)
      scene4Tl.to(avatar,  { opacity: 1, scale: 1, duration: 0.45, ease: "back.out(1.6)" }, 0.2)
      scene4Tl.to(sources, { opacity: 1, x: 0, stagger: 0.06, duration: 0.4 }, 0.3)
      scene4Tl.to(arrows,  { strokeDashoffset: 0, duration: 0.45, stagger: 0.08 }, 0.5)
      scene4Tl.to(arrowheads, { opacity: 1, duration: 0.25, stagger: 0.08 }, 0.75)
      scene4Tl.to(steps,   { opacity: 1, y: 0, stagger: 0.07, duration: 0.35 }, 0.6)
      scene4Tl.to(actions, { opacity: 1, x: 0, stagger: 0.07, duration: 0.4 }, 0.9)
      scene4Tl.to(tools,   { opacity: 1, y: 0, stagger: 0.04, duration: 0.35 }, 1.1)
      scene4Tl.to(caption, { opacity: 1, y: 0, duration: 0.4 }, 1.3)

      ScrollTrigger.create({
        trigger: scene4El,
        start: "top 70%",
        onEnter: () => scene4Tl!.play(),
      })
    } else if (scene4El) {
      scene4El.querySelectorAll<HTMLElement>(
        "[data-scene4-bullet], [data-scene4-avatar], [data-scene4-source], [data-scene4-step], [data-scene4-action], [data-scene4-tool], [data-scene4-caption]"
      ).forEach((el) => {
        el.style.opacity = "1"
        el.style.transform = "none"
      })
      scene4El.querySelectorAll<SVGLineElement>("[data-scene4-arrow]").forEach((el) => {
        el.setAttribute("stroke-dashoffset", "0")
      })
      scene4El.querySelectorAll<SVGPolylineElement>("[data-scene4-arrowhead]").forEach((el) => {
        el.setAttribute("opacity", "1")
      })
    }

    // ── Scene 5 pinned timeline: customer workspace ──
    const scene5El = scene05Ref.current
    let scene5Tl: gsap.core.Timeline | null = null
    if (scene5El && isDesktop && !prefersReducedMotion) {
      const bullets    = scene5El.querySelectorAll<HTMLElement>("[data-scene5-bullet]")
      const workspace  = scene5El.querySelector<HTMLElement>("[data-scene5-workspace]")
      const agents     = scene5El.querySelectorAll<HTMLElement>("[data-scene5-agent]")
      const agentBars  = scene5El.querySelectorAll<HTMLElement>("[data-scene5-agent-bar]")
      const decisions  = scene5El.querySelectorAll<HTMLElement>("[data-scene5-decision]")
      const drafts     = scene5El.querySelectorAll<HTMLElement>("[data-scene5-draft]")
      const activities = scene5El.querySelectorAll<HTMLElement>("[data-scene5-activity]")

      scene5Tl = gsap.timeline({
        paused: true,
        defaults: { ease: "power2.out" },
      })

      scene5Tl.to(bullets, { opacity: 1, y: 0, stagger: 0.08, duration: 0.45 }, 0)
      scene5Tl.to(workspace, { opacity: 1, y: 0, duration: 0.55 }, 0.2)
      scene5Tl.to(agents, { opacity: 1, y: 0, stagger: 0.06, duration: 0.4 }, 0.5)
      agentBars.forEach((bar, i) => {
        const target = bar.getAttribute("data-target-width") || "50"
        scene5Tl!.to(bar, { width: `${target}%`, duration: 0.4 }, 0.6 + i * 0.04)
      })
      scene5Tl.to(decisions, { opacity: 1, y: 0, stagger: 0.1, duration: 0.45 }, 0.85)
      scene5Tl.to(drafts, { opacity: 1, y: 0, stagger: 0.1, duration: 0.45 }, 1.0)
      scene5Tl.to(activities, { opacity: 1, x: 0, stagger: 0.08, duration: 0.4 }, 1.2)

      ScrollTrigger.create({
        trigger: scene5El,
        start: "top 70%",
        onEnter: () => scene5Tl!.play(),
      })
    } else if (scene5El) {
      scene5El.querySelectorAll<HTMLElement>(
        "[data-scene5-bullet], [data-scene5-workspace], [data-scene5-agent], [data-scene5-decision], [data-scene5-draft], [data-scene5-activity]"
      ).forEach((el) => {
        el.style.opacity = "1"
        el.style.transform = "none"
      })
      scene5El.querySelectorAll<HTMLElement>("[data-scene5-agent-bar]").forEach((bar) => {
        const target = bar.getAttribute("data-target-width") || "50"
        bar.style.width = `${target}%`
      })
    }

    // ── Scene 6 pinned timeline: scale tree ──
    const scene6El = scene06Ref.current
    let scene6Tl: gsap.core.Timeline | null = null
    if (scene6El && isDesktop && !prefersReducedMotion) {
      const bullets  = scene6El.querySelectorAll<HTMLElement>("[data-scene6-bullet]")
      const trunk    = scene6El.querySelector<HTMLElement>("[data-scene6-trunk]")
      const branches = scene6El.querySelectorAll<HTMLElement>("[data-scene6-branch]")
      const children = scene6El.querySelectorAll<HTMLElement>("[data-scene6-child]")
      const caption  = scene6El.querySelector<HTMLElement>("[data-scene6-caption]")
      const count    = scene6El.querySelector<HTMLElement>("[data-scene6-count]")
      const counterObj = { value: 1 }

      scene6Tl = gsap.timeline({
        paused: true,
        defaults: { ease: "power2.out" },
      })

      scene6Tl.to(bullets, { opacity: 1, y: 0, stagger: 0.08, duration: 0.5 }, 0)
      scene6Tl.to(trunk, { height: "100%", duration: 0.55 }, 0.3)
      scene6Tl.to(branches, { opacity: 1, y: 0, stagger: 0.1, duration: 0.45 }, 0.55)
      scene6Tl.to(children, { opacity: 1, stagger: 0.03, duration: 0.25 }, 0.9)
      scene6Tl.to(counterObj, {
        value: 42,
        duration: 1.0,
        ease: "power2.out",
        onUpdate: () => {
          if (count) count.textContent = Math.round(counterObj.value).toString() + (counterObj.value >= 40 ? "+" : "")
        },
      }, 0.9)
      scene6Tl.to(caption, { opacity: 1, duration: 0.4 }, 1.6)

      ScrollTrigger.create({
        trigger: scene6El,
        start: "top 70%",
        onEnter: () => scene6Tl!.play(),
      })
    } else if (scene6El) {
      scene6El.querySelectorAll<HTMLElement>("[data-scene6-bullet], [data-scene6-branch], [data-scene6-child], [data-scene6-caption]").forEach((el) => {
        el.style.opacity = "1"
        el.style.transform = "none"
      })
      const trunk = scene6El.querySelector<HTMLElement>("[data-scene6-trunk]")
      if (trunk) trunk.style.height = "100%"
      const count = scene6El.querySelector<HTMLElement>("[data-scene6-count]")
      if (count) count.textContent = "42+"
    }

    // Scene 3 — pin the orbit card while the user scrolls, and cycle the active
    // capability in lockstep with scroll progress. Created LAST so all prior
    // triggers are measured first; `ScrollTrigger.refresh()` reconciles layout
    // afterwards so scenes 4/5/6 stay aligned with the new pinSpacing.
    let scene3Trigger: ScrollTrigger | null = null
    const scene3El = step03Ref.current
    const isWideEnough = window.matchMedia("(min-width: 900px)").matches
    if (scene3El && !prefersReducedMotion && isWideEnough) {
      const n = agentCapabilities.length
      let lastIdx = -1
      scene3Trigger = ScrollTrigger.create({
        trigger: scene3El,
        // Pin when the whole card's top reaches the top of the viewport so the
        // dark header, the left-column bullets, AND the orbit card all freeze
        // together while the user scrolls through the capabilities.
        start: "top top",
        end: `+=${n * 240}`,
        pin: scene3El,
        pinSpacing: true,
        scrub: 0.4,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (scene03UserInteractedRef.current) return
          const raw = Math.floor(self.progress * n)
          const idx = Math.min(n - 1, Math.max(0, raw))
          if (idx !== lastIdx) {
            lastIdx = idx
            setScene03ActiveId(agentCapabilities[idx].id)
          }
        },
        onEnter: () => {
          scene03UserInteractedRef.current = false
        },
        onEnterBack: () => {
          scene03UserInteractedRef.current = false
        },
        onLeave: () => {
          scene03UserInteractedRef.current = false
        },
        onLeaveBack: () => {
          scene03UserInteractedRef.current = false
        },
      })

      // After pinSpacing injects extra scroll height, force all triggers to
      // recompute their start/end positions against the new layout.
      ScrollTrigger.refresh()
    }

    return () => {
      tl.kill()
      scene1Trigger?.kill()
      stepTriggers.forEach((t) => t?.kill())
      scene4Tl?.kill()
      scene5Tl?.kill()
      scene6Tl?.kill()
      scene3Trigger?.kill()
    }
  }, [])

  return (
    <main className="bg-[#f4f4f4] text-charcoal">

      <ProgressRail active={activeStep} />

      <div className="bg-white pb-6 pt-24">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="hidden items-center text-sm text-gray-500 md:flex" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gray-700">
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="font-medium text-gray-700">Building Process</span>
          </nav>
        </div>
      </div>

      <section className="relative overflow-hidden bg-charcoal text-white">
        <div className="absolute inset-0 point-cloud-bg opacity-20"></div>
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 py-24 md:px-8 md:py-32 2xl:px-12">
          <div className="max-w-6xl">
            <p className="mb-5 text-sm uppercase tracking-[0.25em] text-accent-green">Building Process</p>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              We don&rsquo;t sell{" "}
              <span className="relative inline-block">
                <span className="relative z-10">AI tools.</span>
                <span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-accent-green/40" />
              </span>
              <br />
              We build{" "}
              <span className="text-accent-green">the system</span>{" "}
              your business runs on.
            </h1>
            <div className="mb-8 max-w-4xl space-y-5 text-lg text-white/80 md:text-xl">
              <p>
                Aideology partners with enterprise teams to turn complex, manual processes into intelligent
                agentic systems — designed around your data, your constraints, and your operating model.
              </p>
              <p>
                The result is{" "}
                <span className="font-semibold text-white">
                  not a prototype or a pilot, but a production-ready AI system
                </span>{" "}
                your people can rely on — controllable, auditable, and built to grow with your organisation.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-accent-green text-charcoal hover:bg-white hover:text-charcoal">
                <Link href="/book-discovery-call?type=consultation">Book a strategy session</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 bg-white/5 text-white hover:bg-white hover:text-charcoal"
              >
                <Link href="#building-process-journey">
                  Explore the process
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="building-process-journey" className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8 2xl:px-12">
          <div className="space-y-10">
            {blocks.map((block) => {
              const StepIcon = block.stepIcon

              if (block.id === "block-01") {
                return (
                  <section
                    key={block.id}
                    ref={step01Ref}
                    id="scene-01"
                    className="overflow-hidden rounded-[2rem] border border-black/5 bg-[#f9f9f9] shadow-[0_20px_70px_rgba(0,0,0,0.06)]"
                  >
                    {/* top strip */}
                    <div className="border-b border-black/5 bg-charcoal px-8 py-6 md:px-10">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-green/15 text-accent-green">
                          <StepIcon className="h-5 w-5" />
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-green">{block.label}</span>
                      </div>
                      <h2 className="mt-4 text-2xl font-bold leading-snug text-white md:text-3xl">{block.title}</h2>
                      <p className="mt-3 max-w-2xl text-base text-white/60">{block.summary}</p>
                    </div>

                    {/* body: bullets + table */}
                    <div className="relative grid gap-8 p-6 md:p-8 xl:grid-cols-[280px_1fr] xl:items-start xl:gap-10">

                      {/* text message — slides in from left, covers the bullets column */}
                      <div
                        data-left-panel
                        className="absolute bottom-6 left-6 top-6 z-10 hidden w-[280px] flex-col justify-center gap-4 rounded-2xl bg-[#f4f5f2] px-7 py-8 md:bottom-8 md:left-8 md:top-8 xl:flex"
                        style={{ transform: "translateX(-140%)" }}
                      >
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">How we prioritise</p>
                        <p className="text-xl font-bold leading-snug text-charcoal">
                          Low-hanging<br />fruit first.
                        </p>
                        <p className="text-sm leading-relaxed text-gray-500">
                          We start with the processes that return the most value for the least effort — quick wins that prove the model before we scale.
                        </p>
                        <div className="mt-1 flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent-green" />
                          <span className="text-xs font-medium text-accent-green">Topic 1 &amp; Topic 2 selected</span>
                        </div>
                      </div>

                      {/* compact bullet list */}
                      <div className="space-y-3">
                        {block.bullets.map(({ icon: BulletIcon, text }) => (
                          <div key={text} className="flex items-start gap-3 rounded-2xl border border-black/5 bg-white px-4 py-4 shadow-sm">
                            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-accent-green/10 text-accent-green">
                              <BulletIcon className="h-4 w-4" />
                            </div>
                            <span className="text-sm leading-relaxed text-gray-700">{text}</span>
                          </div>
                        ))}
                      </div>

                      {/* table */}
                      <ProcessTable />
                    </div>
                  </section>
                )
              }

              // ── Step 02: special layout with feasibility graphic ──
              if (block.id === "block-02") {
                return (
                  <section
                    key={block.id}
                    ref={step02Ref}
                    id="scene-02"
                    className="overflow-hidden rounded-[2rem] border border-black/5 bg-[#f9f9f9] shadow-[0_20px_70px_rgba(0,0,0,0.06)]"
                  >
                    {/* dark step header */}
                    <div className="bg-charcoal p-6 md:p-8">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-green/15 text-accent-green">
                          <StepIcon className="h-5 w-5" />
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-green">{block.label}</span>
                      </div>
                      <h2 className="mt-4 text-2xl font-bold leading-snug text-white md:text-3xl">{block.title}</h2>
                      <p className="mt-3 max-w-2xl text-base text-white/60">{block.summary}</p>
                    </div>

                    {/* body: bullets + feasibility graphic */}
                    <div className="grid gap-8 p-6 md:p-8 xl:grid-cols-[280px_1fr] xl:items-start xl:gap-10">
                      <div className="space-y-3">
                        {block.bullets.map(({ icon: BulletIcon, text }) => (
                          <div key={text} className="flex items-start gap-3 rounded-2xl border border-black/5 bg-white px-4 py-4 shadow-sm">
                            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-accent-green/10 text-accent-green">
                              <BulletIcon className="h-4 w-4" />
                            </div>
                            <span className="text-sm leading-relaxed text-gray-700">{text}</span>
                          </div>
                        ))}
                      </div>
                      <FeasibilityAssessment />
                    </div>
                  </section>
                )
              }

              // ── Scenes 4, 5, 6: scrollytelling pinned scenes ──
              if (block.id === "block-04") {
                return <Scene4MultiAgent key={block.id} sceneRef={scene04Ref} block={block} />
              }
              if (block.id === "block-05") {
                return <Scene5Experience key={block.id} sceneRef={scene05Ref} block={block} />
              }
              if (block.id === "block-06") {
                return <Scene6Scale key={block.id} sceneRef={scene06Ref} block={block} />
              }

              return block.featured ? (
                <SalesAgentPilot
                  key={block.id}
                  sceneRef={step03Ref}
                  orbitRef={scene03OrbitRef}
                  block={block}
                  activeId={scene03ActiveId}
                  onSelectCapability={handleScene03Select}
                />
              ) : null
            })}
          </div>
        </div>
      </section>

      {/* ── Closing CTA block ── */}
      <section className="relative overflow-hidden bg-charcoal py-20 text-white md:py-28">
        <div className="absolute inset-0 point-cloud-bg opacity-20"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-accent-green">End Result</p>
              <h2 className="mb-5 text-3xl font-bold leading-tight text-white md:text-5xl">
                Not another pilot.<br />A working enterprise AI system.
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-white/70 md:text-xl">
                From business understanding to production reality — AI that operates inside your organisation, not
                demos that stay in slides.
              </p>
            </div>

            {/* outcome cards */}
            <div className="mt-14 grid gap-4 md:grid-cols-3">
              {[
                {
                  icon: Rocket,
                  title: "Production, not prototypes",
                  desc: "Agentic systems deployed into real workflows with real users — measurable from day one.",
                },
                {
                  icon: TrendingUp,
                  title: "Built to scale",
                  desc: "One use case becomes many. A platform that grows from a first agent to an operating model.",
                },
                {
                  icon: CheckCircle2,
                  title: "Controllable and auditable",
                  desc: "Governance, traceability, and human-in-the-loop controls designed in from the start.",
                },
              ].map(({ icon: OutIcon, title, desc }) => (
                <div
                  key={title}
                  className="group flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent-green/40 hover:bg-white/10"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-green/15 text-accent-green transition-transform duration-300 group-hover:scale-110">
                    <OutIcon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{title}</h3>
                  <p className="text-sm leading-relaxed text-white/70">{desc}</p>
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div className="mt-14 flex flex-col items-center gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center md:p-12">
              <div>
                <h3 className="text-2xl font-bold text-white md:text-3xl">
                  Ready to start with your first use case?
                </h3>
                <p className="mx-auto mt-3 max-w-2xl text-base text-white/70">
                  We start with a strategy session, identify the highest-value opportunity, and move quickly into
                  delivery — with production as the goal, not a pilot.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="bg-accent-green text-charcoal hover:bg-white">
                  <Link href="/book-discovery-call?type=consultation" className="flex items-center gap-2">
                    <PhoneCall className="h-5 w-5" />
                    Book a strategy session
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/40 bg-transparent text-white hover:bg-white hover:text-charcoal"
                >
                  <Link href="/#solutions" className="flex items-center gap-2">
                    Explore our services
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

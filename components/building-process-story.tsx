"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  Brain,
  Cpu,
  FileSearch,
  GitFork,
  GitMerge,
  LayoutDashboard,
  LayoutGrid,
  ListChecks,
  ListOrdered,
  Network,
  PanelLeft,
  Plug,
  Rocket,
  ScanSearch,
  SlidersHorizontal,
  Target,
  TrendingUp,
  Users,
  UserCog,
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
    problem: "Repetitive manual process consuming significant team hours",
    aiSolution: "Automated classification and routing agent",
    priority: "High",
    hours: 80,
    complexity: 1,
  },
  {
    id: "Topic 2",
    problem: "Data entry and validation done entirely by hand",
    aiSolution: "AI extraction, validation and structured output",
    priority: "High",
    hours: 60,
    complexity: 2,
  },
  {
    id: "Topic 3",
    problem: "Status updates and notifications handled over email",
    aiSolution: "Event-driven notifications and alerts agent",
    priority: "Medium",
    hours: 40,
    complexity: 1,
  },
  {
    id: "Topic 4",
    problem: "Screening and scoring processes require manual review",
    aiSolution: "AI pre-screening, scoring and prioritization",
    priority: "Medium",
    hours: 35,
    complexity: 2,
  },
  {
    id: "Topic 5",
    problem: "Qualification and enrichment rely on manual research",
    aiSolution: "AI scoring, enrichment and lead routing",
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
    name: "Classification & routing agent",
    dataScore: 88,
    dataLabel: "Structured logs + ticket history",
    integrations: ["Email system", "CRM"],
    effort: "6–8 wks",
    returnScore: 92,
    risk: "Low" as const,
    confidence: 92,
  },
  {
    id: "Topic 2",
    name: "AI extraction & validation",
    dataScore: 70,
    dataLabel: "PDFs + forms — needs preprocessing",
    integrations: ["Document store", "Validation rules", "Output API"],
    effort: "8–10 wks",
    returnScore: 82,
    risk: "Low–Med" as const,
    confidence: 76,
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

export default function BuildingProcessStory() {
  const step01Ref    = useRef<HTMLElement>(null)
  const step02Ref    = useRef<HTMLElement>(null)
  const stickyRowsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    gsap.registerPlugin(ScrollTrigger)

    const section    = step01Ref.current
    const step02     = step02Ref.current
    const stickyRows = stickyRowsRef.current
    if (!section) return

    const dimRows   = section.querySelectorAll<HTMLElement>('[data-row="dim"]')
    const hlRows    = section.querySelectorAll<HTMLElement>('[data-row="highlight"]')
    const badges    = section.querySelectorAll<HTMLElement>('[data-selected-badge]')
    const leftPanel = section.querySelector<HTMLElement>('[data-left-panel]')
    const footerDef = section.querySelectorAll<HTMLElement>('[data-footer-default]')
    const footerSel = section.querySelector<HTMLElement>('[data-footer-selected]')

    if (stickyRows) gsap.set(stickyRows, { opacity: 0 })

    const showStickyRows = () => {
      if (!stickyRows || window.innerWidth < 1280) return
      const hlArr = Array.from(section.querySelectorAll<HTMLElement>('[data-row="highlight"]'))
      if (hlArr.length >= 2) {
        const first = hlArr[0].getBoundingClientRect()
        const last  = hlArr[hlArr.length - 1].getBoundingClientRect()
        gsap.set(stickyRows, {
          top:    first.top,
          left:   first.left,
          width:  first.width,
          height: last.bottom - first.top,
        })
      }
      // hide originals so they don't scroll away visibly beneath the overlay
      gsap.set(hlRows, { opacity: 0 })
      gsap.to(stickyRows, { opacity: 1, duration: 0.35, ease: "power2.out" })
    }

    const hideStickyRows = () => {
      if (!stickyRows) return
      gsap.to(stickyRows, { opacity: 0, duration: 0.25, onComplete: () => {
        gsap.set(hlRows, { opacity: 1 })
      }})
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        start: "top top+=80",
        end: "+=820",
        scrub: 1,
        onLeave:      showStickyRows,
        onEnterBack:  hideStickyRows,
      },
    })

    tl.to(dimRows,   { opacity: 0.1, filter: "grayscale(1)", duration: 1 }, 0)
    tl.to(hlRows,    { backgroundColor: "rgba(130,200,50,0.06)", duration: 1 }, 0)
    tl.to(badges,    { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 }, 0.45)
    if (leftPanel) {
      tl.to(leftPanel, { x: 0, duration: 0.65, ease: "power3.out" }, 0.52)
    }
    tl.to(footerDef, { opacity: 0, duration: 0.3 }, 0.78)
    tl.to(footerSel, { opacity: 1, duration: 0.4 }, 0.86)

    // Hide sticky rows when Step 02 scrolls into view
    const step02Trigger = step02
      ? ScrollTrigger.create({
          trigger: step02,
          start:    "top 55%",
          onEnter:     () => { if (stickyRows) gsap.to(stickyRows, { opacity: 0, duration: 0.4 }) },
          onLeaveBack: () => { if (stickyRows && window.innerWidth >= 1280) gsap.to(stickyRows, { opacity: 1, duration: 0.3 }) },
        })
      : null

    return () => {
      tl.kill()
      step02Trigger?.kill()
    }
  }, [])

  return (
    <main className="bg-[#f4f4f4] text-charcoal">

      {/* ── Fixed sticky rows overlay — appears after Step 01 pin, stays until Step 02 ── */}
      <div
        ref={stickyRowsRef}
        className="pointer-events-none fixed z-50"
        style={{ opacity: 0 }}
      >
        <div className="overflow-hidden rounded-2xl border border-accent-green/20 bg-white shadow-[0_12px_48px_rgba(0,0,0,0.14)]">
          {[tableRows[0], tableRows[1]].map((row) => {
            const p = priorityConfig[row.priority]
            return (
              <div
                key={row.id}
                className="grid grid-cols-[100px_1fr_1fr_72px_52px_64px] items-center gap-3 bg-accent-green/5 px-5 py-4"
              >
                <div className="flex items-center gap-2.5">
                  <div className={`h-8 w-1 shrink-0 rounded-full ${p.bar}`} />
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold text-charcoal">{row.id}</span>
                    <span className="inline-block rounded-full bg-accent-green/15 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-accent-green">
                      ✓ Selected
                    </span>
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
      </div>

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
        <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm uppercase tracking-[0.25em] text-accent-green">Building Process</p>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              How we build enterprise AI systems with our clients
            </h1>
            <p className="mb-8 max-w-3xl text-lg text-white/80 md:text-xl">
              This page tells the story of how we move from understanding the business and its constraints to building
              agents, connecting them into platforms, designing the final experience, and scaling the system in
              production.
            </p>
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

      {/* ── Introduction ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[1fr_420px] lg:items-start lg:gap-20">

            {/* text side */}
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent-green">
                How Aideology works
              </p>

              {/* pull quote */}
              <blockquote className="mb-10 border-l-4 border-accent-green pl-6">
                <p className="text-xl font-semibold leading-snug text-charcoal md:text-2xl">
                  We don&rsquo;t sell off-the-shelf AI tools — we design and build the agentic systems your
                  business actually needs, from the ground up.
                </p>
                <p className="mt-3 text-base font-medium text-accent-green">
                  Every engagement starts with your workflows, not ours.
                </p>
              </blockquote>

              <div className="space-y-6 text-lg leading-relaxed text-gray-600">
                <p>
                  Aideology partners with enterprise teams to turn complex, manual processes into intelligent
                  agentic systems — designed around your data, your constraints, and your operating model.
                </p>
                <p>
                  Our process moves in deliberate stages: we understand the business first, identify where AI
                  creates real value, and build focused systems before scaling them across teams.
                </p>
                <p>
                  The result is{" "}
                  <span className="font-semibold text-charcoal">
                    not a prototype or a pilot, but a production-ready AI system
                  </span>{" "}
                  your people can rely on — controllable, auditable, and built to grow with your organisation.
                </p>
              </div>
            </div>

            {/* visual: unstable vs stable stack */}
            <div className="flex flex-col gap-6">

              {/* wrong way */}
              <div className="overflow-hidden rounded-2xl border border-red-100 bg-red-50/50">
                <div className="border-b border-red-100 px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400">Common mistake</p>
                </div>
                <div className="flex flex-col items-center gap-1.5 px-6 py-6">
                  {["Scale", "Deploy", "Build", "Architecture"].map((layer, i) => (
                    <div
                      key={layer}
                      className="flex h-10 items-center justify-center rounded-xl border border-red-100 bg-white text-xs font-semibold text-red-400 shadow-sm"
                      style={{
                        width: `${100 - i * 6}%`,
                        transform: `rotate(${(i % 2 === 0 ? 1 : -1) * (i * 1.2)}deg)`,
                      }}
                    >
                      {layer}
                    </div>
                  ))}
                  {/* missing foundation */}
                  <div className="mt-1 flex h-10 w-full items-center justify-center rounded-xl border-2 border-dashed border-red-200 text-xs font-semibold text-red-300">
                    Strategy &amp; Foundation missing
                  </div>
                  <p className="mt-3 text-center text-xs text-red-400">Unstable — collapses under complexity</p>
                </div>
              </div>

              {/* right way */}
              <div className="overflow-hidden rounded-2xl border border-accent-green/20 bg-accent-green/5">
                <div className="border-b border-accent-green/15 px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-green">Our approach</p>
                </div>
                <div className="flex flex-col-reverse items-center gap-1.5 px-6 py-6">
                  {["Strategy", "Architecture", "Build", "Deploy", "Scale"].map((layer, i) => (
                    <div
                      key={layer}
                      className="flex h-10 items-center justify-center rounded-xl border border-accent-green/20 bg-white text-xs font-semibold text-charcoal shadow-sm"
                      style={{ width: `${100 - i * 7}%` }}
                    >
                      {layer}
                    </div>
                  ))}
                  <p className="mt-3 text-center text-xs text-accent-green">Stable — built from the ground up</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section id="building-process-journey" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-10">
            {blocks.map((block) => {
              const StepIcon = block.stepIcon

              if (block.id === "block-01") {
                return (
                  <section
                    key={block.id}
                    ref={step01Ref}
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

              const sectionRef = undefined

              return block.featured ? (
                <section
                  key={block.id}
                  className="min-h-[75vh] rounded-[2rem] border border-black/5 bg-white p-6 shadow-[0_20px_70px_rgba(0,0,0,0.08)] md:p-10"
                >
                  <div className="grid gap-10 lg:min-h-[560px] lg:grid-cols-[1fr_0.95fr] lg:items-center">
                    <div className="max-w-2xl">
                      <div className="mb-5 flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-green/10 text-accent-green">
                          <StepIcon className="h-5 w-5" />
                        </div>
                        <p className="text-sm uppercase tracking-[0.22em] text-accent-green">{block.label}</p>
                      </div>
                      <h2 className="text-3xl font-bold leading-tight md:text-5xl">{block.title}</h2>
                      <p className="mt-6 max-w-xl text-lg text-gray-600">{block.summary}</p>
                      <div className="mt-8 grid gap-3">
                        {block.bullets.map(({ icon: BulletIcon, text }) => (
                          <div
                            key={text}
                            className="flex items-center gap-4 rounded-2xl border border-accent-green/10 bg-[#f7f7f7] px-5 py-4"
                          >
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-green/10 text-accent-green">
                              <BulletIcon className="h-4 w-4" />
                            </div>
                            <span className="text-base text-gray-700">{text}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      {/* agent image */}
                      <div className="relative mx-auto flex w-full max-w-[520px] items-center justify-center rounded-[2rem] bg-[#f7f7f7] p-6 shadow-inner">
                        <div className="absolute inset-6 rounded-[1.75rem] border border-accent-green/15"></div>
                        <Image
                          src="/building-process/agent-jorge.png"
                          alt="Agent illustration"
                          width={900}
                          height={900}
                          className="relative z-10 h-auto w-full max-w-[420px] object-contain"
                          priority
                        />
                      </div>

                      {/* agent capabilities */}
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          {
                            icon: ListChecks,
                            name: "Planning",
                            desc: "Breaks down tasks into steps and builds an execution plan before acting.",
                          },
                          {
                            icon: Wrench,
                            name: "Tool calling",
                            desc: "Selects and uses functions, models, and APIs to interact with external systems.",
                          },
                          {
                            icon: Zap,
                            name: "Adaptability",
                            desc: "Adjusts its actions in response to changing inputs or environments.",
                          },
                          {
                            icon: Brain,
                            name: "Memory",
                            desc: "Retains relevant context and information across steps and sessions.",
                          },
                        ].map(({ icon: CapIcon, name, desc }) => (
                          <div
                            key={name}
                            className="flex items-start gap-3 rounded-2xl border border-black/5 bg-[#f9f9f9] px-4 py-4"
                          >
                            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-accent-green/10 text-accent-green">
                              <CapIcon className="h-4 w-4" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-charcoal">{name}</p>
                              <p className="mt-0.5 text-xs leading-relaxed text-gray-500">{desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              ) : (
                <section
                  key={block.id}
                  ref={sectionRef}
                  className="min-h-[70vh] rounded-[2rem] border border-dashed border-black/10 bg-white/70 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.04)] md:p-10"
                >
                  <div className="flex h-full min-h-[420px] flex-col justify-center">
                    <div className="mb-5 flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-green/10 text-accent-green">
                        <StepIcon className="h-5 w-5" />
                      </div>
                      <p className="text-sm uppercase tracking-[0.22em] text-accent-green">{block.label}</p>
                    </div>
                    <div className="max-w-3xl">
                      <h2 className="text-3xl font-bold leading-tight md:text-5xl">{block.title}</h2>
                      <p className="mt-6 text-lg text-gray-600">{block.summary}</p>
                    </div>
                    <div className="mt-8 grid gap-4 md:grid-cols-3">
                      {block.bullets.map(({ icon: BulletIcon, text }) => (
                        <div
                          key={text}
                          className="flex flex-col gap-4 rounded-[1.5rem] border border-black/5 bg-[#fafafa] px-6 py-6 shadow-sm"
                        >
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-green/10 text-accent-green">
                            <BulletIcon className="h-5 w-5" />
                          </div>
                          <span className="text-base text-gray-700">{text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-accent-green">End Result</p>
            <h2 className="mb-4 text-3xl font-bold text-charcoal md:text-4xl">
              The result is not an isolated agent, but a working enterprise AI system
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
              This process is designed to move from business understanding to production reality, so AI becomes part of
              operations, not just a prototype or a pilot.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

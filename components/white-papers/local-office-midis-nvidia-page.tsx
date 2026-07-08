"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { ChevronDown, Filter, Lock, X } from "lucide-react"
import Footer from "@/components/footer"
import { cn } from "@/lib/utils"
import {
  AGENT_PIPELINE_STEPS,
  AGENT_STATUS_LABELS,
  BRIEF_SECTIONS,
  CLIENT_PROFILE,
  GOALS,
  GOAL_SPANS,
  GOVERNANCE_ITEMS,
  HERO,
  LIVE_AGENTS_INTRO,
  LIVE_AGENT_PROFILES,
  NARRATIVE,
  PARTNER_MANAGEMENT,
  PHASES,
  PIPELINE_STAGES,
  type Agent,
  type AgentStatus,
  type BriefSegment,
  type GoalId,
  type PipelineStage,
} from "@/lib/white-papers/local-office-midis-nvidia-data"

/* ---------------------------------- shared ---------------------------------- */

const STATUS_STYLES: Record<AgentStatus, string> = {
  live: "bg-accent-green/20 text-charcoal border-accent-green/40",
  "in-development": "bg-amber-100 text-amber-900 border-amber-300",
  poc: "bg-blue-100 text-blue-900 border-blue-300",
  scoping: "bg-gray-100 text-gray-700 border-gray-300",
  planned: "bg-gray-50 text-gray-500 border-gray-200",
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduced(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  return reduced
}

function AgentStatusBadge({ status }: { status: AgentStatus }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center rounded-full border px-2 py-0.5 text-[11px] font-semibold",
        STATUS_STYLES[status],
      )}
    >
      {AGENT_STATUS_LABELS[status]}
    </span>
  )
}

function SectionHeader({
  num,
  heading,
  paragraphs,
}: {
  num: string
  heading: string
  paragraphs: string[]
}) {
  return (
    <div className="max-w-3xl">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent-green">
        {num}
      </p>
      <h2 className="text-2xl font-bold text-charcoal md:text-3xl">{heading}</h2>
      <div className="mt-4 space-y-4">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-sm leading-relaxed text-gray-600 md:text-base">
            {p}
          </p>
        ))}
      </div>
    </div>
  )
}

/* ------------------------------ framework board ------------------------------ */

/** Column position on the 7-column board for a stage index (0-based). Partner = col 7. */
const stageCol = (index: number) => index + 1
const PARTNER_COL = 7

// Literal class lookups so Tailwind can see the utilities at build time.
const COL_START: Record<number, string> = {
  1: "lg:col-start-1",
  2: "lg:col-start-2",
  3: "lg:col-start-3",
  4: "lg:col-start-4",
  5: "lg:col-start-5",
  6: "lg:col-start-6",
  7: "lg:col-start-7",
}
const COL_SPAN: Record<number, string> = {
  1: "lg:col-span-1",
  2: "lg:col-span-2",
  3: "lg:col-span-3",
}

function colCoveredByGoal(col: number, goal: GoalId | null): boolean {
  if (!goal) return true
  return GOAL_SPANS[goal].some((s) => col >= s.start && col < s.start + s.span)
}

const STATUS_ORDER: AgentStatus[] = ["live", "in-development", "poc", "scoping", "planned"]

function filterAgents(agents: Agent[], goal: GoalId | null): Agent[] {
  const matched = goal ? agents.filter((a) => a.goals.includes(goal)) : agents
  return [...matched].sort(
    (a, b) => STATUS_ORDER.indexOf(a.status) - STATUS_ORDER.indexOf(b.status),
  )
}

type BoardStage = Pick<
  PipelineStage,
  "id" | "label" | "activities" | "agents"
>

function StageCardContent({
  stage,
  isOpen,
  isPartner,
}: {
  stage: BoardStage
  isOpen: boolean
  isPartner?: boolean
}) {
  const liveCount = stage.agents.filter((a) => a.status === "live").length

  return (
    <>
      <div
        className={cn(
          "flex items-center justify-between gap-2 rounded-t-xl px-3 py-2.5",
          isPartner ? "bg-charcoal text-white" : "bg-accent-green/15",
        )}
      >
        <span
          className={cn(
            "text-[13px] font-bold leading-tight",
            isPartner ? "text-white" : "text-charcoal",
          )}
        >
          {stage.label}
        </span>
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 shrink-0 transition-transform",
            isPartner ? "text-accent-green" : "text-gray-500",
            isOpen && "rotate-180 text-accent-green",
          )}
        />
      </div>
      <ul className="flex-1 space-y-1 px-3 py-2.5">
        {stage.activities.map((activity) => (
          <li
            key={activity}
            className="flex items-start gap-1.5 text-[11px] leading-snug text-gray-600"
          >
            <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent-green" />
            {activity}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-1 px-3 pb-2.5">
        {liveCount > 0 && (
          <span className="inline-flex items-center rounded-full bg-accent-green/15 px-2 py-0.5 text-[10px] font-semibold text-charcoal">
            {liveCount} live
          </span>
        )}
        {stage.agents.length > liveCount && (
          <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-semibold text-gray-500">
            {stage.agents.length - liveCount} on roadmap
          </span>
        )}
      </div>
    </>
  )
}

function StageCardButton({
  stage,
  isOpen,
  isDimmed,
  isPartner,
  onToggle,
  reducedMotion,
  className,
}: {
  stage: BoardStage
  isOpen: boolean
  isDimmed: boolean
  isPartner?: boolean
  onToggle: () => void
  reducedMotion: boolean
  className?: string
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls="stage-drawer"
      className={cn(
        "flex w-full flex-col rounded-xl border bg-white text-left shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-offset-2",
        isOpen
          ? "border-accent-green ring-1 ring-accent-green/30"
          : isPartner
            ? "border-charcoal/20 hover:border-accent-green/50"
            : "border-black/10 hover:border-accent-green/50",
        isDimmed && "opacity-35 saturate-50",
        !reducedMotion && !isDimmed && "hover:-translate-y-0.5 hover:shadow-md",
        className,
      )}
    >
      <StageCardContent stage={stage} isOpen={isOpen} isPartner={isPartner} />
    </button>
  )
}

function StageDrawer({
  stage,
  narrative,
  activeGoal,
  onClose,
  reducedMotion,
}: {
  stage: BoardStage
  narrative: string
  activeGoal: GoalId | null
  onClose: () => void
  reducedMotion: boolean
}) {
  const drawerRef = useRef<HTMLDivElement>(null)
  const filteredAgents = filterAgents(stage.agents, activeGoal)

  useEffect(() => {
    drawerRef.current?.focus()
  }, [stage.id])

  return (
    <div
      ref={drawerRef}
      tabIndex={-1}
      role="region"
      aria-label={`${stage.label} details`}
      className={cn(
        "overflow-hidden rounded-2xl border border-accent-green/30 bg-white shadow-md",
        !reducedMotion && "animate-in fade-in slide-in-from-top-2 duration-200",
      )}
    >
      <div className="flex items-start justify-between gap-4 border-b border-black/5 px-5 py-4">
        <div>
          <h3 className="text-lg font-bold text-charcoal">{stage.label}</h3>
          {activeGoal && (
            <p className="mt-1 flex items-center gap-1.5 text-xs text-gray-500">
              <Filter className="h-3 w-3" />
              Agents filtered by {GOALS.find((g) => g.id === activeGoal)?.title}
            </p>
          )}
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green"
          aria-label={`Close ${stage.label} details`}
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="space-y-5 px-5 py-5">
        <div className="grid gap-5 lg:grid-cols-[1.2fr_1fr]">
          <p className="text-sm leading-relaxed text-gray-700 md:text-base">{narrative}</p>
          <div className="rounded-xl bg-[#f9f9f9] px-4 py-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Activities in this stage
            </h4>
            <ul className="mt-2 grid gap-1.5">
              {stage.activities.map((activity) => (
                <li key={activity} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-green" />
                  {activity}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">Agents</h4>
          {filteredAgents.length === 0 ? (
            <p className="mt-2 text-sm italic text-gray-400">
              {stage.agents.length === 0
                ? "Dedicated agents for this area are planned."
                : "No agents match the selected goal filter for this stage."}
            </p>
          ) : (
            <ul className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {filteredAgents.map((agent) => (
                <li key={agent.id} className="rounded-xl border border-black/5 bg-[#f9f9f9] px-4 py-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-sm font-semibold text-charcoal">{agent.name}</span>
                    <AgentStatusBadge status={agent.status} />
                  </div>
                  {agent.description && (
                    <p className="mt-1.5 text-xs leading-relaxed text-gray-500">
                      {agent.description}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

/* --------------------------- brief narrative pieces --------------------------- */

function InlineConfirm({ label }: { label: string }) {
  return (
    <span className="mx-0.5 inline-flex translate-y-[-1px] items-center gap-1 whitespace-nowrap rounded-md border border-dashed border-amber-400/70 bg-amber-50 px-1.5 py-px align-middle text-xs text-amber-800">
      <span className="font-semibold">{label}</span>
      <span className="text-[9px] font-bold uppercase tracking-wider text-amber-600">
        to confirm
      </span>
    </span>
  )
}

function InlineCandidate({ label }: { label: string }) {
  return (
    <span className="mx-0.5 inline-flex translate-y-[-1px] items-center gap-1 whitespace-nowrap rounded-md border border-blue-200 bg-blue-50 px-1.5 py-px align-middle text-xs text-blue-900">
      <span className="font-semibold">{label}</span>
      <span className="text-[9px] font-bold uppercase tracking-wider text-blue-500">
        candidate
      </span>
    </span>
  )
}

function BriefParagraph({ segments }: { segments: BriefSegment[] }) {
  return (
    <p className="text-sm leading-[1.8] text-gray-600 md:text-base">
      {segments.map((seg, i) => {
        switch (seg.t) {
          case "strong":
            return (
              <strong key={i} className="font-semibold text-charcoal">
                {seg.v}
              </strong>
            )
          case "confirm":
            return <InlineConfirm key={i} label={seg.v} />
          case "candidate":
            return <InlineCandidate key={i} label={seg.v} />
          default:
            return <span key={i}>{seg.v}</span>
        }
      })}
    </p>
  )
}

function AgentPipelineStrip({ reducedMotion }: { reducedMotion: boolean }) {
  const [activeStep, setActiveStep] = useState(AGENT_PIPELINE_STEPS[0].id)
  const step = AGENT_PIPELINE_STEPS.find((s) => s.id === activeStep)!

  return (
    <div className="overflow-hidden rounded-2xl bg-charcoal p-6 text-white md:p-8">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-green">
        Pipeline description
      </p>
      <h3 className="mt-1 text-xl font-bold">How every agent works</h3>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/60">
        Regardless of stage or vendor, every agent in the programme follows the same seven-step
        loop. Select a step to see what happens there.
      </p>

      <div className="mt-5 flex flex-wrap gap-2" role="tablist" aria-label="Agent pipeline steps">
        {AGENT_PIPELINE_STEPS.map((s) => {
          const isActive = s.id === activeStep
          return (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveStep(s.id)}
              className={cn(
                "inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green",
                isActive
                  ? "border-accent-green bg-accent-green/15 font-semibold text-white"
                  : "border-white/10 bg-white/5 text-white/70 hover:border-white/25 hover:text-white",
              )}
            >
              <span
                className={cn(
                  "flex h-5 w-5 items-center justify-center rounded text-[11px] font-bold",
                  isActive ? "bg-accent-green text-charcoal" : "bg-white/10 text-white/60",
                )}
              >
                {s.num}
              </span>
              {s.label}
            </button>
          )
        })}
      </div>

      <div
        key={step.id}
        className={cn(
          "mt-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3",
          !reducedMotion && "animate-in fade-in duration-200",
        )}
      >
        <p className="text-sm leading-relaxed text-white/85">
          <span className="font-semibold text-accent-green">
            {step.num}. {step.label} —{" "}
          </span>
          {step.description}
        </p>
      </div>
    </div>
  )
}

function LiveAgentSelector({ reducedMotion }: { reducedMotion: boolean }) {
  const [activeId, setActiveId] = useState(LIVE_AGENT_PROFILES[0].id)
  const agent = LIVE_AGENT_PROFILES.find((a) => a.id === activeId)!

  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-green">
        {LIVE_AGENTS_INTRO.kicker}
      </p>
      <h3 className="mt-1 text-xl font-bold text-charcoal">{LIVE_AGENTS_INTRO.heading}</h3>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600 md:text-base">
        {LIVE_AGENTS_INTRO.description}
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-[260px_1fr]">
        {/* Menu */}
        <div
          role="tablist"
          aria-label="Live agents"
          aria-orientation="vertical"
          className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0"
        >
          {LIVE_AGENT_PROFILES.map((profile) => {
            const isActive = profile.id === activeId
            return (
              <button
                key={profile.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="live-agent-panel"
                onClick={() => setActiveId(profile.id)}
                className={cn(
                  "flex shrink-0 flex-col rounded-xl border px-4 py-3 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-offset-2",
                  isActive
                    ? "border-accent-green bg-accent-green/10 ring-1 ring-accent-green/30"
                    : "border-black/5 bg-white hover:border-accent-green/40",
                  !reducedMotion && !isActive && "hover:-translate-y-0.5",
                )}
              >
                <span className="flex items-center gap-2">
                  <span
                    className={cn(
                      "h-2 w-2 shrink-0 rounded-full",
                      isActive ? "bg-accent-green" : "bg-accent-green/50",
                    )}
                  />
                  <span className="text-sm font-bold text-charcoal">{profile.name}</span>
                </span>
                <span className="mt-1 text-[11px] text-gray-500">
                  {profile.vendor} · {profile.stage}
                </span>
              </button>
            )
          })}
        </div>

        {/* Detail panel */}
        <div
          key={agent.id}
          id="live-agent-panel"
          role="tabpanel"
          aria-label={`${agent.name} technical profile`}
          className={cn(
            "overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm",
            !reducedMotion && "animate-in fade-in duration-200",
          )}
        >
          <div className="border-b border-black/5 px-5 py-4 md:px-6">
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="text-lg font-bold text-charcoal">{agent.name}</h4>
              <span className="inline-flex items-center rounded-full border border-accent-green/40 bg-accent-green/20 px-2 py-0.5 text-[11px] font-semibold text-charcoal">
                Live
              </span>
            </div>
            <p className="mt-1 text-xs font-medium text-accent-green">{agent.liveNote}</p>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
              {agent.summary}
            </p>
          </div>

          <div className="grid gap-6 px-5 py-5 md:px-6 lg:grid-cols-[1.15fr_1fr]">
            {/* Architecture flow */}
            <div>
              <h5 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Architecture — how it runs the loop
              </h5>
              <ol className="mt-3 space-y-0">
                {agent.flow.map((f, i) => (
                  <li key={f.step} className="relative flex gap-3 pb-4 last:pb-0">
                    {i < agent.flow.length - 1 && (
                      <span
                        aria-hidden
                        className="absolute left-[11px] top-6 h-[calc(100%-1.25rem)] w-px bg-accent-green/30"
                      />
                    )}
                    <span className="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-green/15 text-[10px] font-bold text-charcoal">
                      {i + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-gray-600">
                      <span className="font-semibold text-charcoal">{f.step} — </span>
                      {f.detail}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Systems + stack */}
            <div className="space-y-5">
              <div>
                <h5 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Systems touched
                </h5>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {agent.systems.map((system) => (
                    <span
                      key={system}
                      className="inline-flex items-center rounded-lg border border-black/5 bg-[#f9f9f9] px-2.5 py-1 text-xs text-gray-600"
                    >
                      {system}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Software stack
                </h5>
                <div className="mt-2 space-y-2 text-sm">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-xs font-semibold text-gray-500">Confirmed:</span>
                    {agent.stack.confirmed.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center rounded-md bg-accent-green/15 px-2 py-0.5 text-xs font-medium text-charcoal"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-xs font-semibold text-gray-500">NVIDIA candidates:</span>
                    {agent.stack.candidates.map((item) => (
                      <InlineCandidate key={item} label={item} />
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-xs font-semibold text-gray-500">Open:</span>
                    {agent.stack.toConfirm.map((item) => (
                      <InlineConfirm key={item} label={item} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------ page ------------------------------------ */

export default function LocalOfficeMidisNvidiaWhitePaper() {
  const [activeGoal, setActiveGoal] = useState<GoalId | null>(null)
  const [openStageId, setOpenStageId] = useState<string | null>(null)
  const reducedMotion = usePrefersReducedMotion()

  const toggleGoal = useCallback((goalId: GoalId) => {
    setActiveGoal((prev) => (prev === goalId ? null : goalId))
  }, [])

  const toggleStage = useCallback((stageId: string) => {
    setOpenStageId((prev) => (prev === stageId ? null : stageId))
  }, [])

  const openStage =
    PIPELINE_STAGES.find((s) => s.id === openStageId) ??
    (openStageId === PARTNER_MANAGEMENT.id ? PARTNER_MANAGEMENT : null)

  // Column groupings for the phase header row, derived from stage order.
  const phaseSpans = PHASES.map((phase) => {
    if (phase.id === "channel") return { phase, start: PARTNER_COL, span: 1 }
    const cols = PIPELINE_STAGES.map((s, i) => (s.phase === phase.id ? stageCol(i) : null)).filter(
      (c): c is number => c !== null,
    )
    return { phase, start: cols[0], span: cols.length }
  })

  return (
    <div className="bg-[#f4f4f4] text-charcoal">
      {/* Draft banner — offset below the fixed 80px navbar */}
      <div className="mt-[80px] border-b border-amber-300/40 bg-amber-50">
        <div className="container mx-auto flex items-center gap-2 px-4 py-2.5">
          <Lock className="h-3.5 w-3.5 shrink-0 text-amber-700" aria-hidden />
          <p className="text-xs font-medium text-amber-900 md:text-sm">{HERO.draftBanner}</p>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-charcoal text-white">
        <div className="absolute inset-0 point-cloud-bg opacity-20" aria-hidden />
        <div className="relative z-10 container mx-auto px-4 py-20 md:py-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-accent-green">
            {HERO.eyebrow}
          </p>
          <h1 className="max-w-4xl text-3xl font-bold leading-tight md:text-5xl lg:text-[3.25rem]">
            {HERO.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
            {HERO.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {HERO.metadata.map(({ label, value }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80"
              >
                <span className="font-semibold text-accent-green">{label}:</span>
                {value}
              </span>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-green to-transparent" />
      </section>

      {/* 01 — The customer */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            num="01"
            heading={CLIENT_PROFILE.heading}
            paragraphs={CLIENT_PROFILE.paragraphs}
          />

          {/* Key figures */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {CLIENT_PROFILE.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-black/5 bg-white p-5 text-center shadow-sm"
              >
                <p className="text-2xl font-bold text-charcoal md:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Commitments + vendor portfolio */}
          <div className="mt-8 overflow-hidden rounded-[1.75rem] bg-charcoal p-6 text-white md:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-green">
              {CLIENT_PROFILE.tagline}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {CLIENT_PROFILE.pillars.map((pillar) => (
                <span
                  key={pillar}
                  className="inline-flex items-center gap-2 rounded-full border border-accent-green/40 bg-accent-green/10 px-4 py-1.5 text-sm text-white/90"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-green" />
                  {pillar}
                </span>
              ))}
            </div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-white/40">
              Vendor portfolio includes
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {CLIENT_PROFILE.vendors.map((vendor) => (
                <span
                  key={vendor}
                  className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/75"
                >
                  {vendor}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02 — Context */}
      <section className="border-t border-black/5 bg-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            num="02"
            heading={NARRATIVE.context.heading}
            paragraphs={NARRATIVE.context.paragraphs}
          />
        </div>
      </section>

      {/* 03 — Goals */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            num="03"
            heading={NARRATIVE.goals.heading}
            paragraphs={NARRATIVE.goals.paragraphs}
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {GOALS.map((goal) => {
              const isActive = activeGoal === goal.id
              return (
                <button
                  key={goal.id}
                  type="button"
                  onClick={() => toggleGoal(goal.id)}
                  aria-pressed={isActive}
                  className={cn(
                    "flex flex-col rounded-2xl border bg-white p-5 text-left shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-offset-2",
                    isActive
                      ? "border-accent-green ring-2 ring-accent-green/30"
                      : "border-black/5 hover:border-accent-green/30",
                    !reducedMotion && !isActive && "hover:-translate-y-0.5 hover:shadow-md",
                  )}
                >
                  <span
                    className={cn(
                      "mb-3 inline-flex w-fit rounded-full px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider",
                      isActive ? "bg-accent-green text-charcoal" : "bg-accent-green/15 text-charcoal",
                    )}
                  >
                    {isActive ? "Showing on framework" : "Show on framework"}
                  </span>
                  <h3 className="text-lg font-bold text-charcoal">{goal.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                    {goal.description}
                  </p>
                  <p className="mt-4 text-xs font-semibold text-gray-500">{goal.kpiLabel}</p>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* 04 — Framework board */}
      <section className="border-t border-black/5 bg-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            num="04"
            heading={NARRATIVE.pipeline.heading}
            paragraphs={NARRATIVE.pipeline.paragraphs}
          />

          {activeGoal && (
            <p className="mt-4 flex flex-wrap items-center gap-2 text-sm text-charcoal">
              <Filter className="h-4 w-4 text-accent-green" />
              Highlighting <strong>{GOALS.find((g) => g.id === activeGoal)?.title}</strong> —{" "}
              {GOALS.find((g) => g.id === activeGoal)?.kpiLabel}
              <button
                type="button"
                onClick={() => setActiveGoal(null)}
                className="rounded underline underline-offset-2 hover:text-accent-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green"
              >
                Clear
              </button>
            </p>
          )}

          {/* Desktop board */}
          <div className="mt-8 hidden lg:block">
            {/* Phase header row */}
            <div className="grid grid-cols-7 gap-2">
              {phaseSpans.map(({ phase, start, span }) => (
                <div
                  key={phase.id}
                  className={cn("flex items-center gap-2 px-1 pb-2", COL_START[start], COL_SPAN[span])}
                >
                  <div className="h-px flex-1 bg-black/15" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                    {phase.label}
                  </span>
                  <div className="h-px flex-1 bg-black/15" />
                </div>
              ))}
            </div>

            {/* Stage cards */}
            <div className="grid grid-cols-7 items-stretch gap-2">
              {PIPELINE_STAGES.map((stage, i) => (
                <StageCardButton
                  key={stage.id}
                  stage={stage}
                  isOpen={openStageId === stage.id}
                  isDimmed={!colCoveredByGoal(stageCol(i), activeGoal)}
                  onToggle={() => toggleStage(stage.id)}
                  reducedMotion={reducedMotion}
                />
              ))}
              <StageCardButton
                stage={PARTNER_MANAGEMENT}
                isPartner
                isOpen={openStageId === PARTNER_MANAGEMENT.id}
                isDimmed={!colCoveredByGoal(PARTNER_COL, activeGoal)}
                onToggle={() => toggleStage(PARTNER_MANAGEMENT.id)}
                reducedMotion={reducedMotion}
              />
            </div>

            {/* Goal span rows */}
            <div className="mt-4 space-y-2" aria-label="Goal coverage across the framework">
              {GOALS.map((goal) => {
                const isActive = activeGoal === goal.id
                return (
                  <div key={goal.id} className="grid grid-cols-7 gap-2">
                    {GOAL_SPANS[goal.id].map((spanDef, spanIdx) => (
                      <button
                        key={spanIdx}
                        type="button"
                        onClick={() => toggleGoal(goal.id)}
                        aria-pressed={isActive}
                        title={`${goal.title} — ${goal.kpiLabel}`}
                        className={cn(
                          "flex items-center gap-2 overflow-hidden rounded-lg border px-3 py-1.5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green",
                          COL_START[spanDef.start],
                          COL_SPAN[spanDef.span],
                          isActive
                            ? "border-accent-green bg-accent-green/20"
                            : activeGoal
                              ? "border-black/5 bg-white opacity-40"
                              : "border-black/5 bg-white hover:border-accent-green/40",
                        )}
                      >
                        <span
                          className={cn(
                            "h-1.5 w-1.5 shrink-0 rounded-full",
                            isActive ? "bg-accent-green" : "bg-gray-300",
                          )}
                        />
                        <span className="truncate text-[11px] font-semibold text-charcoal">
                          {goal.title}
                        </span>
                        {spanIdx === 0 && (
                          <span className="truncate text-[11px] text-gray-500">
                            {goal.kpiLabel}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Mobile board — stacked by phase */}
          <div className="mt-8 space-y-6 lg:hidden">
            {PHASES.map((phase) => {
              const stages: BoardStage[] =
                phase.id === "channel"
                  ? [PARTNER_MANAGEMENT]
                  : PIPELINE_STAGES.filter((s) => s.phase === phase.id)
              return (
                <div key={phase.id}>
                  <div className="mb-2 flex items-center gap-3">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                      {phase.label}
                    </span>
                    <div className="h-px flex-1 bg-black/10" />
                  </div>
                  <div className="space-y-2">
                    {stages.map((stage) => {
                      const isPartner = stage.id === PARTNER_MANAGEMENT.id
                      const col = isPartner
                        ? PARTNER_COL
                        : stageCol(PIPELINE_STAGES.findIndex((s) => s.id === stage.id))
                      return (
                        <StageCardButton
                          key={stage.id}
                          stage={stage}
                          isPartner={isPartner}
                          isOpen={openStageId === stage.id}
                          isDimmed={!colCoveredByGoal(col, activeGoal)}
                          onToggle={() => toggleStage(stage.id)}
                          reducedMotion={reducedMotion}
                        />
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Inline drawer */}
          {openStage && (
            <div id="stage-drawer" className="mt-5">
              <StageDrawer
                stage={openStage}
                narrative={openStage.narrative}
                activeGoal={activeGoal}
                onClose={() => setOpenStageId(null)}
                reducedMotion={reducedMotion}
              />
            </div>
          )}
        </div>
      </section>

      {/* 05 — NVIDIA brief */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            num="05"
            heading={NARRATIVE.brief.heading}
            paragraphs={NARRATIVE.brief.paragraphs}
          />

          <div className="mt-10">
            <LiveAgentSelector reducedMotion={reducedMotion} />
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
            <div className="space-y-10">
              {BRIEF_SECTIONS.slice(0, 2).map((section) => (
                <div key={section.id}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-green">
                    {section.kicker}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-charcoal">{section.heading}</h3>
                  <div className="mt-3 space-y-3">
                    {section.paragraphs.map((segments, i) => (
                      <BriefParagraph key={i} segments={segments} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-10">
              {BRIEF_SECTIONS.slice(2).map((section) => (
                <div key={section.id}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-green">
                    {section.kicker}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-charcoal">{section.heading}</h3>
                  <div className="mt-3 space-y-3">
                    {section.paragraphs.map((segments, i) => (
                      <BriefParagraph key={i} segments={segments} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <AgentPipelineStrip reducedMotion={reducedMotion} />
          </div>
        </div>
      </section>

      {/* 06 — Scale & governance */}
      <section className="border-t border-black/5 bg-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            num="06"
            heading={NARRATIVE.governance.heading}
            paragraphs={NARRATIVE.governance.paragraphs}
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GOVERNANCE_ITEMS.map((item, index) => (
              <div key={item.title} className="flex flex-col rounded-2xl border border-black/5 bg-[#f9f9f9] p-5">
                <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-accent-green/15 text-sm font-bold text-charcoal">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base font-bold text-charcoal">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing note */}
      <section className="border-t border-black/5 py-8">
        <div className="container mx-auto px-4">
          <p className="max-w-3xl text-xs leading-relaxed text-gray-400">
            This document is prepared by AIdeology for NVIDIA partner and solution teams. It
            describes an agentic AI programme in delivery for Local Office (Midis Group). Content
            marked &ldquo;to confirm&rdquo; requires validation before external distribution. UK
            English spelling is used throughout.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

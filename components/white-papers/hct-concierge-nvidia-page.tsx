"use client"

import { useEffect, useState } from "react"
import { Lock } from "lucide-react"
import Footer from "@/components/footer"
import { cn } from "@/lib/utils"
import {
  ARCHITECTURE,
  CLOSING_NOTE,
  COLLABORATION,
  CONVERSATION_NOTES,
  CONVERSATION_PIPELINE,
  DATA_FLOW,
  EXEC_CALLOUTS,
  GATES,
  GATES_FIGCAP,
  HERO,
  KPIS,
  NARRATIVE,
  OPEN_FIELDS,
  OPERATIONS_DETAILS,
  PLATFORM_DETAILS,
  PLATFORM_STACK,
  PROXEMIC_ZONES,
  SAFETY_NOTES,
  SIM_TO_REAL_NOTES,
  STACK_MAP,
  STANDARDS,
  SW_DETAILS,
  VALIDATION_LAYERS,
  ZONES_FIGCAP,
  type CellType,
  type LayerOwnership,
  type SystemLayer,
} from "@/lib/white-papers/hct-concierge-nvidia-data"

/* ---------------------------------- shared ---------------------------------- */

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

function FigCaption({ text }: { text: string }) {
  return (
    <p className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
      {text}
    </p>
  )
}

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

function NoteCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm md:p-6">
      <h3 className="text-base font-bold text-charcoal">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{text}</p>
    </div>
  )
}

/* ------------------------------ system layers figure ------------------------------ */

const LAYER_STYLES: Record<LayerOwnership, { card: string; bar: string; num: string; tag: string }> = {
  trained: {
    card: "border-accent-green/30 bg-accent-green/10",
    bar: "bg-accent-green",
    num: "text-accent-green",
    tag: "bg-accent-green text-charcoal",
  },
  safety: {
    card: "border-dashed border-accent-green/40 bg-gradient-to-r from-accent-green/10 to-accent-green/5",
    bar: "bg-gradient-to-b from-accent-green to-charcoal/60",
    num: "text-charcoal/70",
    tag: "border border-accent-green/40 bg-white text-charcoal",
  },
  foundation: {
    card: "border-black/10 bg-[#f3f3f3]",
    bar: "bg-gray-300",
    num: "text-gray-400",
    tag: "border border-black/10 bg-white text-gray-500",
  },
}

function LayerCard({ layer }: { layer: SystemLayer }) {
  const s = LAYER_STYLES[layer.ownership]
  return (
    <div
      className={cn(
        "relative grid grid-cols-[44px_1fr] items-center gap-4 rounded-xl border px-4 py-3.5 md:grid-cols-[44px_1fr_auto]",
        s.card,
      )}
    >
      <span className={cn("absolute left-0 top-3 bottom-3 w-1 rounded-r", s.bar)} aria-hidden />
      <span className={cn("pl-2 text-2xl font-bold leading-none", s.num)}>{layer.num}</span>
      <div>
        <p className="text-base font-bold text-charcoal">{layer.name}</p>
        <p className="mt-0.5 text-xs leading-relaxed text-gray-600">{layer.description}</p>
      </div>
      <span
        className={cn(
          "col-start-2 w-fit whitespace-nowrap rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide md:col-start-3",
          s.tag,
        )}
      >
        {layer.tag}
      </span>
    </div>
  )
}

function ArchitectureFigure() {
  return (
    <div className="mt-8">
      <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm md:p-6">
        <div className="mb-3 flex items-center justify-between gap-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-charcoal">
            {ARCHITECTURE.intelligenceZoneLabel}
          </p>
          <span className="rounded-full bg-accent-green/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-charcoal">
            {ARCHITECTURE.intelligenceZoneTag}
          </span>
        </div>
        <div className="space-y-2.5">
          {ARCHITECTURE.upperLayers.map((layer) => (
            <LayerCard key={layer.num} layer={layer} />
          ))}
        </div>

        <div className="my-5 flex items-center gap-4" aria-label={ARCHITECTURE.boundaryLabel}>
          <span className="h-0 flex-1 border-t-2 border-dashed border-accent-green" />
          <span className="rounded-full bg-accent-green px-4 py-1.5 text-center text-[10px] font-bold uppercase tracking-[0.14em] text-charcoal">
            {ARCHITECTURE.boundaryLabel}
          </span>
          <span className="h-0 flex-1 border-t-2 border-dashed border-accent-green" />
        </div>

        <div className="space-y-2.5">
          <LayerCard layer={ARCHITECTURE.safetyLayer} />
          {ARCHITECTURE.lowerLayers.map((layer) => (
            <LayerCard key={layer.num} layer={layer} />
          ))}
        </div>

        <p className="mb-3 mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">
          {ARCHITECTURE.foundationZoneLabel}
        </p>
        <div className="space-y-2.5">
          {ARCHITECTURE.foundationLayers.map((layer) => (
            <LayerCard key={layer.num} layer={layer} />
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 border-t border-black/5 pt-4">
          {ARCHITECTURE.legend.map((item) => (
            <p key={item.label} className="flex items-center gap-2 text-xs text-gray-500">
              <span className={cn("h-3 w-3 rounded-sm", LAYER_STYLES[item.ownership].bar)} />
              <span className="font-semibold text-charcoal">{item.label}</span> — {item.note}
            </p>
          ))}
        </div>
      </div>
      <FigCaption text={ARCHITECTURE.figcap} />
    </div>
  )
}

/* ------------------------------ data flow figure ------------------------------ */

function DataFlowFigure() {
  return (
    <div className="mt-10">
      <div className="overflow-hidden rounded-2xl bg-charcoal p-6 text-white md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-green">
              {DATA_FLOW.kicker}
            </p>
            <h3 className="mt-1 text-xl font-bold">{DATA_FLOW.heading}</h3>
          </div>
          <span className="rounded-lg bg-accent-green px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-charcoal">
            {DATA_FLOW.runsOn}
          </span>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {DATA_FLOW.steps.map((step) => (
            <div key={step.num} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-accent-green">
                {step.num} · {step.label}
              </p>
              <p className="mt-2 text-sm font-bold text-white">{step.title}</p>
              <p className="mt-1.5 text-[11px] leading-relaxed text-white/50">{step.description}</p>
              <p className="mt-3 border-t border-dashed border-white/15 pt-2 text-[10px] font-semibold leading-snug text-accent-green">
                {step.stack}
              </p>
            </div>
          ))}
        </div>
      </div>
      <FigCaption text={DATA_FLOW.figcap} />
    </div>
  )
}

/* ------------------------------ stack map figure ------------------------------ */

function StackMapFigure() {
  return (
    <div className="mt-8">
      <div className="overflow-hidden rounded-2xl bg-charcoal p-6 text-white md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-green">
              {STACK_MAP.kicker}
            </p>
            <h3 className="mt-1 text-xl font-bold">{STACK_MAP.heading}</h3>
          </div>
          <span className="rounded-lg bg-accent-green px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-charcoal">
            {STACK_MAP.runsOn}
          </span>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {STACK_MAP.columns.map((col) => (
            <div key={col.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-baseline justify-between gap-2 border-b border-white/10 pb-3">
                <p className="text-sm font-bold text-white">{col.title}</p>
                <span className="whitespace-nowrap text-[9px] font-bold uppercase tracking-wide text-accent-green">
                  {col.layerTag}
                </span>
              </div>
              <ul className="mt-3 space-y-2.5">
                {col.rows.map((row) => (
                  <li key={row.capability} className="flex items-baseline gap-2 text-xs">
                    <span className="w-2/5 shrink-0 font-semibold text-white/85">
                      {row.capability}
                    </span>
                    <span aria-hidden className="text-white/40">
                      →
                    </span>
                    <span className="font-medium leading-snug text-accent-green">
                      {row.builtOn}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-5">
          {STACK_MAP.legend.map((item) => (
            <p key={item.label} className="flex items-center gap-2 text-[11px] text-white/60">
              <span
                className={cn(
                  "h-3 w-3 rounded-sm",
                  item.type === "nv" ? "bg-accent-green" : "bg-accent-green/40",
                )}
              />
              {item.label}
            </p>
          ))}
        </div>
      </div>
      <FigCaption text={STACK_MAP.figcap} />
    </div>
  )
}

/* -------------------------- conversation pipeline figure -------------------------- */

const CELL_STYLES: Record<CellType, string> = {
  nv: "border-accent-green/50 bg-accent-green/10",
  forge: "border-accent-green/30 bg-white/5",
  thirdParty: "border-white/10 bg-white/5",
}

function ConversationPipelineFigure({ reducedMotion }: { reducedMotion: boolean }) {
  const [activeType, setActiveType] = useState<CellType | null>(null)

  const toggleType = (type: CellType) =>
    setActiveType((prev) => (prev === type ? null : type))

  return (
    <div className="mt-8">
      <div className="overflow-hidden rounded-2xl bg-charcoal p-6 text-white md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-green">
              {CONVERSATION_PIPELINE.kicker}
            </p>
            <h3 className="mt-1 text-xl font-bold">{CONVERSATION_PIPELINE.heading}</h3>
          </div>
          <span className="rounded-lg bg-accent-green px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-charcoal">
            {CONVERSATION_PIPELINE.runsOn}
          </span>
        </div>

        <div className="mt-6 space-y-3">
          {CONVERSATION_PIPELINE.planes.map((plane) => (
            <div key={plane.id} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="mb-3 flex items-center justify-between gap-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">
                  {plane.label}
                </p>
                <span className="rounded-full bg-accent-green px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-charcoal">
                  {plane.owner}
                </span>
              </div>
              <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
                {plane.cells.map((cell) => {
                  const isDimmed = activeType !== null && cell.type !== activeType
                  return (
                    <div
                      key={cell.title}
                      className={cn(
                        "rounded-lg border px-3 py-2.5 transition-opacity",
                        CELL_STYLES[cell.type],
                        isDimmed && "opacity-30",
                        !reducedMotion && "duration-200",
                      )}
                    >
                      <p className="text-xs font-bold leading-tight text-white">{cell.title}</p>
                      <p className="mt-1 text-[10px] leading-relaxed text-white/50">
                        {cell.subtitle}
                      </p>
                      {cell.mapping && (
                        <p className="mt-2 border-t border-dashed border-white/15 pt-1.5 text-[10px] font-semibold leading-snug text-accent-green">
                          {cell.mapping}
                        </p>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-5 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter pipeline components by type"
        >
          {CONVERSATION_PIPELINE.legend.map((item) => {
            const isActive = activeType === item.type
            return (
              <button
                key={item.type}
                type="button"
                aria-pressed={isActive}
                onClick={() => toggleType(item.type)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green",
                  isActive
                    ? "border-accent-green bg-accent-green/15 font-semibold text-white"
                    : "border-white/15 text-white/60 hover:border-white/30 hover:text-white",
                )}
              >
                <span
                  className={cn(
                    "h-2.5 w-2.5 rounded-sm",
                    item.type === "nv"
                      ? "bg-accent-green"
                      : item.type === "forge"
                        ? "bg-accent-green/40"
                        : "bg-white/25",
                  )}
                />
                {item.label}
              </button>
            )
          })}
          {activeType && (
            <button
              type="button"
              onClick={() => setActiveType(null)}
              className="rounded-full px-2 text-[11px] text-white/50 underline underline-offset-2 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green"
            >
              Clear
            </button>
          )}
        </div>
      </div>
      <FigCaption text={CONVERSATION_PIPELINE.figcap} />
    </div>
  )
}

/* ------------------------------- gates figure ------------------------------- */

function GatesFigure() {
  return (
    <div className="mt-8">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
        {GATES.map((gate) => (
          <div
            key={gate.id}
            className={cn(
              "relative flex flex-col rounded-xl border px-4 py-4",
              gate.publicGate
                ? "border-accent-green/50 bg-accent-green/15"
                : "border-black/5 bg-white shadow-sm",
            )}
          >
            <span
              className={cn(
                "absolute left-0 top-3 bottom-3 w-1 rounded-r",
                gate.publicGate ? "bg-accent-green" : "bg-accent-green/50",
              )}
              aria-hidden
            />
            <p className="pl-1 text-[10px] font-bold uppercase tracking-[0.1em] text-accent-green">
              {gate.label}
            </p>
            <p className="mt-1.5 pl-1 text-sm font-bold leading-tight text-charcoal">
              {gate.title}
            </p>
            <p className="mt-2 pl-1 text-[11px] leading-relaxed text-gray-600">
              {gate.description}
            </p>
          </div>
        ))}
      </div>
      <FigCaption text={GATES_FIGCAP} />
    </div>
  )
}

/* ---------------------------- validation layer cards ---------------------------- */

function ValidationCards() {
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-2">
      {VALIDATION_LAYERS.map((layer) => (
        <div key={layer.id} className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
          <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-accent-green">
            <span className="h-1.5 w-1.5 rounded-sm bg-accent-green" />
            {layer.label}
          </p>
          <h3 className="mt-2 text-base font-bold text-charcoal">{layer.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">{layer.description}</p>
          <p className="mt-3 text-[11px] font-semibold text-accent-green">{layer.tools}</p>
        </div>
      ))}
    </div>
  )
}

/* ------------------------------- safety zones ------------------------------- */

function ProxemicZonesFigure() {
  return (
    <div className="mt-8">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {PROXEMIC_ZONES.map((zone) => (
          <div
            key={zone.title}
            className={cn(
              "rounded-xl border px-4 py-4",
              zone.critical
                ? "border-accent-green/50 bg-accent-green/15"
                : "border-black/5 bg-white shadow-sm",
            )}
          >
            <p
              className={cn(
                "text-[10px] font-bold uppercase tracking-wide",
                zone.critical ? "text-charcoal/70" : "text-gray-400",
              )}
            >
              {zone.distance}
            </p>
            <p className="mt-1.5 text-sm font-bold text-charcoal">{zone.title}</p>
            <p className="mt-1.5 text-[11.5px] leading-relaxed text-gray-600">{zone.behaviour}</p>
          </div>
        ))}
      </div>
      <FigCaption text={ZONES_FIGCAP} />
    </div>
  )
}

/* ------------------------------ stack + detail blocks ------------------------------ */

function PlatformStackTable() {
  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
      <div className="grid grid-cols-[1fr_1.5fr] bg-charcoal px-5 py-3 text-[10px] font-bold uppercase tracking-[0.1em] text-white md:grid-cols-[1fr_2fr]">
        <span>Capability</span>
        <span className="text-accent-green">Built on</span>
      </div>
      {PLATFORM_STACK.map((row, i) => (
        <div
          key={row.capability}
          className={cn(
            "grid grid-cols-[1fr_1.5fr] items-center border-t border-black/5 px-5 py-2.5 text-xs md:grid-cols-[1fr_2fr] md:text-[13px]",
            i % 2 === 1 && "bg-[#f9f9f9]",
          )}
        >
          <span className="pr-3 font-semibold text-gray-600">{row.capability}</span>
          <span className="font-medium text-charcoal">{row.builtOn}</span>
        </div>
      ))}
    </div>
  )
}

function DetailBlock({
  title,
  rows,
}: {
  title: string
  rows: { label: string; value: string }[]
}) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
      <p className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-charcoal">
        <span className="h-1.5 w-1.5 rounded-sm bg-accent-green" />
        {title}
      </p>
      <div className="space-y-0">
        {rows.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-[110px_1fr] gap-3 border-b border-dashed border-black/5 py-2 text-xs last:border-b-0 md:grid-cols-[140px_1fr]"
          >
            <span className="text-[10px] font-bold uppercase tracking-wide text-gray-400">
              {row.label}
            </span>
            <span className="font-semibold text-charcoal">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ------------------------------------ page ------------------------------------ */

export default function HctConciergeNvidiaWhitePaper() {
  const reducedMotion = usePrefersReducedMotion()

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

      {/* 01 — Executive summary */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
            <div className="space-y-4">
              {EXEC_CALLOUTS.map((callout) => (
                <div
                  key={callout.kicker}
                  className="relative rounded-2xl border border-accent-green/30 bg-white p-5 shadow-sm md:p-6"
                >
                  <span
                    className="absolute left-0 top-5 bottom-5 w-1 rounded-r bg-accent-green"
                    aria-hidden
                  />
                  <p className="pl-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-green">
                    {callout.kicker}
                  </p>
                  <p className="mt-2 pl-2 text-sm leading-relaxed text-gray-600 md:text-base">
                    {callout.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div>
                <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-green">
                  <span className="h-0.5 w-6 bg-accent-green" aria-hidden />
                  Target KPIs
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {KPIS.map((kpi) => (
                    <span
                      key={kpi.label}
                      className="rounded-lg border border-accent-green/30 bg-white px-3 py-1.5 text-xs text-gray-600"
                    >
                      {kpi.label}{" "}
                      <span className="font-bold text-charcoal">{kpi.target}</span>
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                  <span className="h-0.5 w-6 bg-gray-300" aria-hidden />
                  Points of contact
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {OPEN_FIELDS.map((field) => (
                    <InlineConfirm key={field.label} label={field.label} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — Approach */}
      <section className="border-t border-black/5 bg-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            num="02 · Our approach"
            heading={NARRATIVE.approach.heading}
            paragraphs={NARRATIVE.approach.paragraphs}
          />
        </div>
      </section>

      {/* 03 — System architecture */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            num="03 · System architecture"
            heading={NARRATIVE.architecture.heading}
            paragraphs={NARRATIVE.architecture.paragraphs}
          />
          <ArchitectureFigure />
          <DataFlowFigure />
        </div>
      </section>

      {/* 04 — NVIDIA stack */}
      <section className="border-t border-black/5 bg-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            num="04 · NVIDIA technology stack"
            heading={NARRATIVE.stack.heading}
            paragraphs={NARRATIVE.stack.paragraphs}
          />
          <StackMapFigure />
        </div>
      </section>

      {/* 05 — Conversation / HRI */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            num="05 · Conversation · Human-Robot Interaction"
            heading={NARRATIVE.conversation.heading}
            paragraphs={NARRATIVE.conversation.paragraphs}
          />
          <ConversationPipelineFigure reducedMotion={reducedMotion} />
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {CONVERSATION_NOTES.map((note) => (
              <NoteCard key={note.title} {...note} />
            ))}
          </div>
        </div>
      </section>

      {/* 06 — Sim-to-Real methodology */}
      <section className="border-t border-black/5 bg-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            num="06 · Sim-to-Real methodology"
            heading={NARRATIVE.simToReal.heading}
            paragraphs={NARRATIVE.simToReal.paragraphs}
          />
          <GatesFigure />

          <div className="mt-12 max-w-3xl">
            <h3 className="text-xl font-bold text-charcoal">{NARRATIVE.validation.heading}</h3>
            <div className="mt-3 space-y-4">
              {NARRATIVE.validation.paragraphs.map((p, i) => (
                <p key={i} className="text-sm leading-relaxed text-gray-600 md:text-base">
                  {p}
                </p>
              ))}
            </div>
          </div>
          <ValidationCards />

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {SIM_TO_REAL_NOTES.map((note) => (
              <NoteCard key={note.title} {...note} />
            ))}
          </div>
        </div>
      </section>

      {/* 07 — Safety & compliance */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            num="07 · Safety & compliance"
            heading={NARRATIVE.safety.heading}
            paragraphs={NARRATIVE.safety.paragraphs}
          />
          <ProxemicZonesFigure />

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {SAFETY_NOTES.map((note) => (
              <NoteCard key={note.title} {...note} />
            ))}
          </div>

          <div className="mt-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-400">
              Standards & frameworks
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {STANDARDS.map((standard) => (
                <span
                  key={standard}
                  className="rounded-md border border-accent-green/30 bg-accent-green/10 px-2.5 py-1 text-xs font-medium text-charcoal"
                >
                  {standard}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 08 — Platform & deployment */}
      <section className="border-t border-black/5 bg-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            num="08 · Platform & deployment"
            heading={NARRATIVE.platform.heading}
            paragraphs={NARRATIVE.platform.paragraphs}
          />

          <PlatformStackTable />

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <DetailBlock title="Platform & deployment details" rows={PLATFORM_DETAILS} />
            <DetailBlock title="Scale & operations" rows={OPERATIONS_DETAILS} />
          </div>

          <div className="mt-4 rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
            <p className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-charcoal">
              <span className="h-1.5 w-1.5 rounded-sm bg-accent-green" />
              Software details
            </p>
            <div className="space-y-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wide text-gray-400">
                  NVIDIA software
                </p>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {SW_DETAILS.nvidia.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-accent-green/30 bg-accent-green/10 px-2 py-0.5 text-xs font-medium text-charcoal"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wide text-gray-400">
                  Non-NVIDIA software
                </p>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {SW_DETAILS.nonNvidia.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-black/5 bg-[#f9f9f9] px-2 py-0.5 text-xs text-gray-500"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-accent-green/40 bg-accent-green/10 p-5 md:p-6">
            <p className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-charcoal">
              <span className="h-1.5 w-1.5 rounded-sm bg-accent-green" />
              {COLLABORATION.heading}
            </p>
            <p className="text-sm leading-relaxed text-gray-700">{COLLABORATION.text}</p>
          </div>
        </div>
      </section>

      {/* Closing note */}
      <section className="border-t border-black/5 py-8">
        <div className="container mx-auto px-4">
          <p className="max-w-3xl text-xs leading-relaxed text-gray-400">{CLOSING_NOTE}</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

"use client"

import { useEffect, useState } from "react"
import { Lock } from "lucide-react"
import Footer from "@/components/footer"
import { cn } from "@/lib/utils"
import {
  ANATOMY,
  BLOCKERS,
  BRICKS,
  CLOSING_NOTE,
  DEPLOYMENT_DETAILS,
  EXEC_CALLOUTS,
  HERO,
  KPIS,
  NARRATIVE,
  OPEN_FIELDS,
  PLATFORM_STACK,
  PRODUCT_DETAILS,
  REFERENCE_ARCHITECTURE,
  SCALE_DETAILS,
  SUITE,
  SW_DETAILS,
  type CellType,
  type LayerOwnership,
} from "@/lib/white-papers/forge-nvidia-data"

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

/* ------------------------------- anatomy figure ------------------------------- */

const LAYER_STYLES: Record<LayerOwnership, { card: string; bar: string; num: string; tag: string }> = {
  forge: {
    card: "border-accent-green/30 bg-accent-green/10",
    bar: "bg-accent-green",
    num: "text-accent-green",
    tag: "bg-accent-green text-charcoal",
  },
  shared: {
    card: "border-dashed border-accent-green/40 bg-gradient-to-r from-accent-green/10 to-accent-green/5",
    bar: "bg-gradient-to-b from-accent-green to-charcoal/60",
    num: "text-charcoal/70",
    tag: "border border-accent-green/40 bg-white text-charcoal",
  },
  provider: {
    card: "border-black/10 bg-[#f3f3f3]",
    bar: "bg-gray-300",
    num: "text-gray-400",
    tag: "border border-black/10 bg-white text-gray-500",
  },
}

function AnatomyLayerCard({
  num,
  name,
  description,
  tag,
  ownership,
}: {
  num: string
  name: string
  description: string
  tag: string
  ownership: LayerOwnership
}) {
  const s = LAYER_STYLES[ownership]
  return (
    <div
      className={cn(
        "relative grid grid-cols-[44px_1fr] items-center gap-4 rounded-xl border px-4 py-3.5 md:grid-cols-[44px_1fr_auto]",
        s.card,
      )}
    >
      <span className={cn("absolute left-0 top-3 bottom-3 w-1 rounded-r", s.bar)} aria-hidden />
      <span className={cn("pl-2 text-2xl font-bold leading-none", s.num)}>{num}</span>
      <div>
        <p className="text-base font-bold text-charcoal">{name}</p>
        <p className="mt-0.5 text-xs leading-relaxed text-gray-600">{description}</p>
      </div>
      <span
        className={cn(
          "col-start-2 w-fit whitespace-nowrap rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide md:col-start-3",
          s.tag,
        )}
      >
        {tag}
      </span>
    </div>
  )
}

function AnatomyFigure() {
  const forgeLayers = ANATOMY.layers.filter((l) => l.ownership === "forge")
  const substrateLayers = ANATOMY.layers.filter((l) => l.ownership !== "forge")

  return (
    <div className="mt-8">
      <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm md:p-6">
        <div className="mb-3 flex items-center justify-between gap-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-charcoal">
            {ANATOMY.forgeZoneLabel}
          </p>
          <span className="rounded-full bg-accent-green/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-charcoal">
            {ANATOMY.forgeZoneTag}
          </span>
        </div>
        <div className="space-y-2.5">
          {forgeLayers.map((layer) => (
            <AnatomyLayerCard key={layer.num} {...layer} />
          ))}
        </div>

        <div className="my-5 flex items-center gap-4" aria-label={ANATOMY.boundaryLabel}>
          <span className="h-0 flex-1 border-t-2 border-dashed border-accent-green" />
          <span className="rounded-full bg-accent-green px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-charcoal">
            {ANATOMY.boundaryLabel}
          </span>
          <span className="h-0 flex-1 border-t-2 border-dashed border-accent-green" />
        </div>

        <div className="mb-3 flex items-center justify-between gap-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">
            {ANATOMY.providerZoneLabel}
          </p>
          <span className="rounded-full border border-accent-green/40 bg-accent-green/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-charcoal">
            {ANATOMY.providerZoneTag}
          </span>
        </div>
        <div className="space-y-2.5">
          {substrateLayers.map((layer) => (
            <AnatomyLayerCard key={layer.num} {...layer} />
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 border-t border-black/5 pt-4">
          {ANATOMY.legend.map((item) => (
            <p key={item.label} className="flex items-center gap-2 text-xs text-gray-500">
              <span className={cn("h-3 w-3 rounded-sm", LAYER_STYLES[item.ownership].bar)} />
              <span className="font-semibold text-charcoal">{item.label}</span> — {item.note}
            </p>
          ))}
        </div>
      </div>
      <FigCaption text={ANATOMY.figcap} />
    </div>
  )
}

/* ------------------------------ suite + products ------------------------------ */

function SuiteFigure() {
  return (
    <div className="mt-8">
      <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm md:p-6">
        <div className="mx-auto max-w-sm rounded-xl bg-charcoal px-6 py-3.5 text-center text-white">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-accent-green">
            {SUITE.rootKicker}
          </p>
          <p className="mt-0.5 text-sm font-bold">{SUITE.rootTitle}</p>
        </div>
        <div className="mx-auto h-4 w-px bg-accent-green/40" aria-hidden />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {SUITE.products.map((product) => (
            <div
              key={product.id}
              className={cn(
                "relative flex flex-col rounded-xl border px-4 py-4",
                product.publish
                  ? "border-dashed border-amber-300 bg-amber-50/70"
                  : "border-accent-green/30 bg-accent-green/10",
              )}
            >
              <span
                className={cn(
                  "absolute left-0 top-3 bottom-3 w-1 rounded-r",
                  product.publish ? "bg-amber-300" : "bg-accent-green",
                )}
                aria-hidden
              />
              <p
                className={cn(
                  "pl-1 text-[9px] font-bold uppercase tracking-[0.1em]",
                  product.publish ? "text-amber-700" : "text-charcoal/60",
                )}
              >
                {product.kind}
              </p>
              <p className="mt-1.5 pl-1 text-sm font-bold leading-tight text-charcoal">
                {product.name}
              </p>
              <p className="mt-2 flex-1 pl-1 text-[11.5px] leading-relaxed text-gray-600">
                {product.shortDescription}
              </p>
              <div className="mt-3 pl-1">
                <p className="text-[8px] font-bold uppercase tracking-[0.1em] text-gray-400">
                  Maps to
                </p>
                <div className="mt-1.5 flex flex-wrap gap-1">
                  {product.mapsTo.map((m) => (
                    <span
                      key={m}
                      className={cn(
                        "rounded-md border bg-white px-1.5 py-0.5 text-[9.5px] font-bold",
                        product.publish
                          ? "border-amber-300 text-amber-700"
                          : "border-accent-green/40 text-charcoal",
                      )}
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="relative mt-3 flex flex-col gap-4 rounded-xl border border-black/10 bg-gradient-to-b from-[#f8f9f5] to-[#edf1e3] px-5 py-4 md:flex-row md:items-center md:gap-7">
          <span className="absolute left-0 top-3 bottom-3 w-1 rounded-r bg-charcoal" aria-hidden />
          <div className="shrink-0 pl-1">
            <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-gray-500">
              {SUITE.infra.kicker}
            </p>
            <p className="mt-0.5 whitespace-nowrap text-lg font-bold text-charcoal">
              {SUITE.infra.title}
            </p>
          </div>
          <p className="pl-1 text-xs leading-relaxed text-gray-600">{SUITE.infra.description}</p>
        </div>
      </div>
      <FigCaption text={SUITE.figcap} />
    </div>
  )
}

function ProductDetailSelector({ reducedMotion }: { reducedMotion: boolean }) {
  const [activeId, setActiveId] = useState(PRODUCT_DETAILS[0].id)
  const product = PRODUCT_DETAILS.find((p) => p.id === activeId)!

  return (
    <div className="mt-10 grid gap-4 lg:grid-cols-[260px_1fr]">
      {/* Menu */}
      <div
        role="tablist"
        aria-label="Forge products"
        aria-orientation="vertical"
        className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0"
      >
        {PRODUCT_DETAILS.map((p) => {
          const isActive = p.id === activeId
          return (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls="product-detail-panel"
              onClick={() => setActiveId(p.id)}
              className={cn(
                "flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-offset-2",
                isActive
                  ? "border-accent-green bg-accent-green/10 ring-1 ring-accent-green/30"
                  : "border-black/5 bg-white hover:border-accent-green/40",
                !reducedMotion && !isActive && "hover:-translate-y-0.5",
              )}
            >
              <span
                className={cn(
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold",
                  isActive ? "bg-accent-green text-charcoal" : "bg-accent-green/15 text-charcoal",
                )}
              >
                {p.num}
              </span>
              <span className="text-sm font-bold text-charcoal">{p.name}</span>
            </button>
          )
        })}
      </div>

      {/* Detail panel */}
      <div
        key={product.id}
        id="product-detail-panel"
        role="tabpanel"
        aria-label={`${product.name} details`}
        className={cn(
          "rounded-2xl border border-black/5 bg-white px-5 py-5 shadow-sm md:px-6",
          !reducedMotion && "animate-in fade-in duration-200",
        )}
      >
        <div className="flex flex-wrap items-center gap-2">
          <h4 className="text-lg font-bold text-charcoal">
            {product.num} · {product.name}
          </h4>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
          {product.description}
        </p>
        <div className="mt-4 rounded-xl bg-accent-green/10 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/60">
            Built on NVIDIA
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-gray-700">{product.builtOn}</p>
        </div>
      </div>
    </div>
  )
}

/* -------------------------------- bricks figure -------------------------------- */

function BricksFigure() {
  return (
    <div className="mt-10">
      <div className="overflow-hidden rounded-2xl bg-charcoal p-6 text-white md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-green">
              {BRICKS.kicker}
            </p>
            <h3 className="mt-1 text-xl font-bold">{BRICKS.heading}</h3>
          </div>
          <span className="rounded-lg bg-accent-green px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-charcoal">
            {BRICKS.runsOn}
          </span>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {BRICKS.columns.map((col) => (
            <div key={col.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-baseline justify-between gap-2 border-b border-white/10 pb-3">
                <p className="text-sm font-bold text-white">{col.title}</p>
                <span className="text-[9px] font-bold uppercase tracking-wide text-accent-green">
                  Brick
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
          {BRICKS.legend.map((item) => (
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
      <FigCaption text={BRICKS.figcap} />
    </div>
  )
}

/* ------------------------- reference architecture figure ------------------------- */

const CELL_TYPE_LABELS: Record<CellType, string> = {
  nv: "NVIDIA-native",
  forge: "Forge component",
  thirdParty: "Third-party / commodity",
}

const CELL_STYLES: Record<CellType, string> = {
  nv: "border-accent-green/50 bg-accent-green/10",
  forge: "border-accent-green/30 bg-white/5",
  thirdParty: "border-white/10 bg-white/5",
}

function ReferenceArchitectureFigure({ reducedMotion }: { reducedMotion: boolean }) {
  const [activeType, setActiveType] = useState<CellType | null>(null)

  const toggleType = (type: CellType) =>
    setActiveType((prev) => (prev === type ? null : type))

  return (
    <div className="mt-8">
      <div className="overflow-hidden rounded-2xl bg-charcoal p-6 text-white md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-green">
              {REFERENCE_ARCHITECTURE.kicker}
            </p>
            <h3 className="mt-1 text-xl font-bold">{REFERENCE_ARCHITECTURE.heading}</h3>
          </div>
          <span className="rounded-lg bg-accent-green px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-charcoal">
            {REFERENCE_ARCHITECTURE.runsOn}
          </span>
        </div>

        <div className="mt-6 space-y-3">
          {REFERENCE_ARCHITECTURE.planes.map((plane) => (
            <div key={plane.id} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="mb-3 flex items-center justify-between gap-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">
                  {plane.label}
                </p>
                <span
                  className={cn(
                    "rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wide",
                    plane.owner === "Forge"
                      ? "bg-accent-green/25 text-accent-green"
                      : "bg-accent-green text-charcoal",
                  )}
                >
                  {plane.owner}
                </span>
              </div>
              <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-5">
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
          aria-label="Filter architecture components by type"
        >
          {REFERENCE_ARCHITECTURE.legend.map((item) => {
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
                {CELL_TYPE_LABELS[item.type]}
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
      <FigCaption text={REFERENCE_ARCHITECTURE.figcap} />
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
          {row.tbd ? (
            <span>
              <InlineConfirm label={row.builtOn} />
            </span>
          ) : (
            <span className="font-medium text-charcoal">{row.builtOn}</span>
          )}
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
  rows: { label: string; value: string; tbd?: boolean }[]
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
            className="grid grid-cols-[110px_1fr] gap-3 border-b border-dashed border-black/5 py-2 text-xs last:border-b-0 md:grid-cols-[130px_1fr]"
          >
            <span className="text-[10px] font-bold uppercase tracking-wide text-gray-400">
              {row.label}
            </span>
            {row.tbd ? (
              <span>
                <InlineConfirm label={row.value} />
              </span>
            ) : (
              <span className="font-semibold text-charcoal">{row.value}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ------------------------------------ page ------------------------------------ */

export default function ForgeNvidiaWhitePaper() {
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
                  KPIs
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {KPIS.map((kpi) => (
                    <span
                      key={kpi}
                      className="rounded-lg border border-accent-green/30 bg-white px-3 py-1.5 text-xs font-medium text-gray-600"
                    >
                      {kpi}
                    </span>
                  ))}
                  <span className="rounded-lg border border-dashed border-black/15 bg-white px-3 py-1.5 text-xs text-gray-400">
                    [Define your own]
                  </span>
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

      {/* 02 — Market */}
      <section className="border-t border-black/5 bg-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            num="02 · The market"
            heading={NARRATIVE.market.heading}
            paragraphs={NARRATIVE.market.paragraphs}
          />
        </div>
      </section>

      {/* 03 — Anatomy */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            num="03 · Our vision"
            heading={NARRATIVE.anatomy.heading}
            paragraphs={NARRATIVE.anatomy.paragraphs}
          />
          <AnatomyFigure />
        </div>
      </section>

      {/* 04 — The Forge Suite */}
      <section className="border-t border-black/5 bg-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            num="04 · The suite"
            heading={NARRATIVE.suite.heading}
            paragraphs={NARRATIVE.suite.paragraphs}
          />
          <SuiteFigure />
          <ProductDetailSelector reducedMotion={reducedMotion} />
          <BricksFigure />
        </div>
      </section>

      {/* 05 — Reference architecture */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            num="05 · Reference architecture"
            heading={NARRATIVE.architecture.heading}
            paragraphs={NARRATIVE.architecture.paragraphs}
          />
          <ReferenceArchitectureFigure reducedMotion={reducedMotion} />
        </div>
      </section>

      {/* 06 — Platform stack & solution details */}
      <section className="border-t border-black/5 bg-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            num="06 · Platform stack"
            heading={NARRATIVE.stack.heading}
            paragraphs={NARRATIVE.stack.paragraphs}
          />

          <PlatformStackTable />

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <DetailBlock title="Deployment details" rows={DEPLOYMENT_DETAILS} />
            <DetailBlock title="Scale" rows={SCALE_DETAILS} />
          </div>

          <div className="mt-4 rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
            <p className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-charcoal">
              <span className="h-1.5 w-1.5 rounded-sm bg-accent-green" />
              SW details
            </p>
            <div className="space-y-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wide text-gray-400">
                  NVIDIA SW
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
                  Non-NVIDIA SW
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

          <div className="mt-4 rounded-2xl border border-amber-300/50 bg-amber-50/60 p-5">
            <p className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-800">
              <span className="h-1.5 w-1.5 rounded-sm bg-amber-500" />
              {BLOCKERS.heading}
            </p>
            <p className="text-sm leading-relaxed text-gray-700">{BLOCKERS.text}</p>
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

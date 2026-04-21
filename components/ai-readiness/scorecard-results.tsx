"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Download,
  RefreshCw,
  Sparkles,
  TrendingDown,
  TrendingUp,
} from "lucide-react"
import ScorecardRadar from "./scorecard-radar"
import type { ScoreResult, LeadInfo } from "./scorecard-utils"

interface Props {
  result: ScoreResult
  lead: LeadInfo | null
  onRestart: () => void
}

const stageColors: Record<string, string> = {
  Beginner: "bg-gray-100 text-gray-700 border-gray-300",
  Developing: "bg-amber-50 text-amber-800 border-amber-200",
  Emerging: "bg-blue-50 text-blue-800 border-blue-200",
  Advanced: "bg-accent-green/15 text-charcoal border-accent-green/40",
  "AI Leader": "bg-charcoal text-white border-charcoal",
}

export default function ScorecardResults({ result, lead, onRestart }: Props) {
  const { overall, stage, stageBlurb, perDimension, strongest, weakest, recommendations } = result

  const handleDownload = () => {
    if (typeof window !== "undefined") window.print()
  }

  return (
    <section className="pt-24 pb-20 md:pt-28 bg-[#f4f4f4] min-h-dvh print:bg-white print:pt-6">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl space-y-6">
          {/* Hero score block */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-green">
                    AI Readiness Report
                  </span>
                  {lead?.company && (
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                      · {lead.company}
                    </span>
                  )}
                  {lead?.industry && (
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                      · {lead.industry}
                    </span>
                  )}
                </div>
                <h1 className="mt-2 text-3xl font-bold leading-tight text-charcoal md:text-5xl">
                  Your organization is at the{" "}
                  <span className="text-accent-green">{stage}</span> stage.
                </h1>
                <p className="mt-4 max-w-2xl text-base text-gray-600 md:text-lg">{stageBlurb}</p>

                <div className="mt-6 flex flex-wrap items-center gap-3 print:hidden">
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent-green text-charcoal font-semibold hover:bg-charcoal hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    <Link href="/book-discovery-call?type=scorecard-workshop">
                      Request an AI Readiness Workshop
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleDownload}
                    className="border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Summary
                  </Button>
                  <button
                    onClick={onRestart}
                    className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-charcoal"
                  >
                    <RefreshCw className="h-3.5 w-3.5" />
                    Start over
                  </button>
                </div>
              </div>

              {/* Score dial */}
              <div className="flex flex-shrink-0 flex-col items-center">
                <div className="relative flex h-44 w-44 items-center justify-center rounded-full border-8 border-accent-green/20 md:h-56 md:w-56">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `conic-gradient(#9fce4d ${overall}%, transparent ${overall}%)`,
                      WebkitMask:
                        "radial-gradient(circle, transparent 58%, black 58%, black 100%)",
                      mask: "radial-gradient(circle, transparent 58%, black 58%, black 100%)",
                    }}
                  />
                  <div className="relative flex flex-col items-center">
                    <span className="text-5xl font-bold tabular-nums text-charcoal md:text-6xl">
                      {overall}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                      out of 100
                    </span>
                  </div>
                </div>
                <span
                  className={`mt-4 inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider ${
                    stageColors[stage] ?? stageColors.Beginner
                  }`}
                >
                  <Award className="h-3.5 w-3.5" />
                  {stage}
                </span>
              </div>
            </div>
          </div>

          {/* Radar + bars */}
          <div className="grid gap-6 lg:grid-cols-5">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8 lg:col-span-3">
              <h2 className="text-lg font-bold text-charcoal md:text-xl">
                Readiness across 11 dimensions
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Each axis shows your normalized score (0–100) for that dimension.
              </p>
              <div className="mt-4">
                <ScorecardRadar data={perDimension} />
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8 lg:col-span-2">
              <h2 className="text-lg font-bold text-charcoal md:text-xl">Dimension scores</h2>
              <p className="mt-1 text-sm text-gray-500">Ranked from highest to lowest.</p>
              <ul className="mt-4 space-y-3">
                {[...perDimension]
                  .sort((a, b) => b.normalized - a.normalized)
                  .map((d) => (
                    <li key={d.id}>
                      <div className="mb-1 flex items-center justify-between gap-2 text-xs">
                        <span className="font-semibold text-charcoal">{d.name}</span>
                        <span className="tabular-nums text-gray-500">
                          {Math.round(d.normalized)}
                        </span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                        <div
                          className="h-full rounded-full bg-accent-green transition-all"
                          style={{ width: `${Math.max(d.normalized, 2)}%` }}
                        />
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          {/* Strongest + weakest */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-accent-green/30 bg-accent-green/5 p-6 shadow-sm md:p-8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-green">
                <TrendingUp className="h-4 w-4" />
                Strongest areas
              </div>
              <h3 className="mt-2 text-lg font-bold text-charcoal">
                Your organization is strongest in {strongest[0]?.name}
              </h3>
              <ul className="mt-4 space-y-2">
                {strongest.map((s) => (
                  <li
                    key={s.id}
                    className="flex items-center justify-between rounded-xl border border-accent-green/30 bg-white px-4 py-3 text-sm"
                  >
                    <span className="font-semibold text-charcoal">{s.name}</span>
                    <span className="tabular-nums text-accent-green font-bold">
                      {Math.round(s.normalized)} / 100
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-amber-200 bg-amber-50/60 p-6 shadow-sm md:p-8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-800">
                <TrendingDown className="h-4 w-4" />
                Biggest improvement opportunities
              </div>
              <h3 className="mt-2 text-lg font-bold text-charcoal">
                Focus first on {weakest[0]?.name}
              </h3>
              <ul className="mt-4 space-y-2">
                {weakest.map((w) => (
                  <li
                    key={w.id}
                    className="flex items-center justify-between rounded-xl border border-amber-200 bg-white px-4 py-3 text-sm"
                  >
                    <span className="font-semibold text-charcoal">{w.name}</span>
                    <span className="tabular-nums text-amber-800 font-bold">
                      {Math.round(w.normalized)} / 100
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Recommendations */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-green">
              <Sparkles className="h-4 w-4" />
              Prioritized recommendations
            </div>
            <h2 className="mt-2 text-xl font-bold text-charcoal md:text-2xl">
              Your next steps to move toward AI leadership
            </h2>
            <p className="mt-1 max-w-3xl text-sm text-gray-600">
              Based on where your scores are lowest, these are the highest-leverage moves to focus
              on in the next 3–6 months.
            </p>
            <ol className="mt-6 space-y-3">
              {recommendations.map((r, i) => (
                <li
                  key={r.dimensionId}
                  className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-[#fafafa] p-5"
                >
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-charcoal text-sm font-bold text-white">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-semibold text-charcoal">
                        {r.dimensionName}
                      </span>
                      <span className="rounded-full bg-white border border-gray-200 px-2 py-0.5 text-[11px] font-semibold text-gray-600 tabular-nums">
                        Current: {r.score}/100
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-700">{r.recommendation}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* CTA banner */}
          <div className="rounded-3xl bg-charcoal p-6 text-white shadow-lg md:p-10 print:hidden">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold md:text-3xl">
                  Turn this diagnostic into a plan.
                </h2>
                <p className="mt-2 text-white/75">
                  Bring your leadership team to an AI Readiness Workshop. We&apos;ll pressure-test
                  your score, align on the most important gaps, and shape a practical 90-day plan.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-accent-green text-charcoal font-semibold hover:bg-white hover:text-charcoal transition-all duration-300 hover:scale-105"
              >
                <Link href="/book-discovery-call?type=scorecard-workshop">
                  Request a Workshop
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

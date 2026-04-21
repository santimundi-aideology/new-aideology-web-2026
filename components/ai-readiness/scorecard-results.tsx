"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  CalendarCheck,
  CheckCircle2,
  Compass,
  Download,
  FileText,
  RefreshCw,
  Sparkles,
  Target,
  TrendingDown,
  TrendingUp,
} from "lucide-react"
import ScorecardRadar from "./scorecard-radar"
import type { ScoreResult, LeadInfo } from "./scorecard-utils"
import { generateScorecardPDF } from "./scorecard-pdf"

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
  const {
    overall,
    stage,
    stageHeadline,
    stageBlurb,
    executiveSummary,
    strategicFocus,
    ninetyDayPriorities,
    nextTwelveMonths,
    perDimension,
    strongest,
    weakest,
    recommendations,
    balance,
    keyInsight,
  } = result

  const [downloading, setDownloading] = useState(false)

  const handleDownload = async () => {
    try {
      setDownloading(true)
      await generateScorecardPDF(result, lead)
    } catch (err) {
      console.error("PDF generation failed:", err)
    } finally {
      setDownloading(false)
    }
  }

  return (
    <section className="pt-24 pb-20 md:pt-28 bg-[#f4f4f4] min-h-dvh">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl space-y-6">
          {/* ────────────── HERO / SCORE ────────────── */}
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
                <p className="mt-4 max-w-2xl text-base text-gray-700 md:text-lg">
                  {stageHeadline}
                </p>
                <p className="mt-3 max-w-2xl text-sm text-gray-500 md:text-base">{stageBlurb}</p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
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
                    disabled={downloading}
                    className="border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300 disabled:opacity-60"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    {downloading ? "Preparing PDF…" : "Download PDF report"}
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

          {/* ────────────── EXECUTIVE SUMMARY ────────────── */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-green">
              <FileText className="h-4 w-4" />
              Executive Summary
            </div>
            <h2 className="mt-2 text-2xl font-bold text-charcoal md:text-3xl">
              What your score means
            </h2>
            <div className="mt-5 grid gap-6 md:grid-cols-5">
              <div className="md:col-span-3">
                <p className="text-base leading-relaxed text-gray-700 md:text-lg">
                  {executiveSummary}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base">
                  {balance.summary}
                </p>
              </div>
              <aside className="md:col-span-2">
                <div className="h-full rounded-2xl border border-accent-green/30 bg-accent-green/5 p-5">
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-green">
                    <Sparkles className="h-3.5 w-3.5" />
                    Key insight
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal md:text-base">
                    {keyInsight}
                  </p>
                  <dl className="mt-5 space-y-3 text-sm">
                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-gray-600">Overall score</dt>
                      <dd className="font-bold text-charcoal tabular-nums">{overall}/100</dd>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-gray-600">Maturity stage</dt>
                      <dd className="font-bold text-charcoal">{stage}</dd>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-gray-600">Score spread</dt>
                      <dd className="font-bold text-charcoal capitalize">{balance.label}</dd>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-gray-600">Dimensions ≥ 75</dt>
                      <dd className="font-bold text-charcoal tabular-nums">
                        {perDimension.filter((d) => d.normalized >= 75).length} / 11
                      </dd>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-gray-600">Dimensions &lt; 50</dt>
                      <dd className="font-bold text-charcoal tabular-nums">
                        {perDimension.filter((d) => d.normalized < 50).length} / 11
                      </dd>
                    </div>
                  </dl>
                </div>
              </aside>
            </div>
          </div>

          {/* ────────────── RADAR + DIMENSION SCORES ────────────── */}
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

          {/* ────────────── STRENGTHS + GAPS ────────────── */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-accent-green/30 bg-accent-green/5 p-6 shadow-sm md:p-8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-green">
                <TrendingUp className="h-4 w-4" />
                Your strongest areas
              </div>
              <h3 className="mt-2 text-lg font-bold text-charcoal">
                Build on {strongest[0]?.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                Your top three dimensions are real assets. Use them as the foundation for scaling
                AI across the organization — and as credibility when bringing the rest of the
                business along.
              </p>
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
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                These are the dimensions dragging overall maturity down. Closing them in the next
                two quarters will unlock more value than adding a new AI use case on top of a
                weak foundation.
              </p>
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

          {/* ────────────── STRATEGIC FOCUS ────────────── */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-green">
              <Compass className="h-4 w-4" />
              Strategic focus
            </div>
            <h2 className="mt-2 text-2xl font-bold text-charcoal md:text-3xl">
              Where to concentrate effort over the next six months
            </h2>
            <p className="mt-4 max-w-4xl text-base leading-relaxed text-gray-700 md:text-lg">
              {strategicFocus}
            </p>
          </div>

          {/* ────────────── DETAILED RECOMMENDATIONS ────────────── */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-green">
              <Sparkles className="h-4 w-4" />
              Prioritized recommendations
            </div>
            <h2 className="mt-2 text-2xl font-bold text-charcoal md:text-3xl">
              Your next moves, in priority order
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-600 md:text-base">
              Each of these is targeted at one of your lowest-scoring dimensions. For each, we
              explain why it matters, what good looks like, and the first practical steps to take.
            </p>

            <ol className="mt-8 space-y-6">
              {recommendations.map((r, i) => (
                <li
                  key={r.dimensionId}
                  className="rounded-2xl border border-gray-200 bg-[#fafafa] p-5 md:p-7"
                >
                  <div className="flex flex-wrap items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-charcoal text-sm font-bold text-white">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-accent-green">
                          {r.dimensionName}
                        </span>
                        <span className="rounded-full bg-white border border-gray-200 px-2 py-0.5 text-[11px] font-semibold text-gray-600 tabular-nums">
                          Current: {r.score}/100
                        </span>
                      </div>
                      <h3 className="mt-1 text-lg font-bold leading-snug text-charcoal md:text-xl">
                        {r.detail.headline}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-5 md:grid-cols-2">
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                        Why it matters
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-gray-700">
                        {r.detail.whyItMatters}
                      </p>
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                        What good looks like
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-gray-700">
                        {r.detail.whatGoodLooksLike}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                      First steps
                    </div>
                    <ul className="mt-2 space-y-2">
                      {r.detail.firstSteps.map((s, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm leading-relaxed text-charcoal"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-green" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* ────────────── 90-DAY PLAN + 12-MONTH VISION ────────────── */}
          <div className="grid gap-6 lg:grid-cols-5">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8 lg:col-span-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-green">
                <CalendarCheck className="h-4 w-4" />
                90-day priorities
              </div>
              <h2 className="mt-2 text-xl font-bold text-charcoal md:text-2xl">
                What to do in the next quarter
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Concrete, stage-appropriate moves we would recommend first — designed to build
                momentum and close your biggest gaps at the same time.
              </p>
              <ul className="mt-5 space-y-3">
                {ninetyDayPriorities.map((p, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-[#fafafa] p-4"
                  >
                    <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-accent-green/20 text-xs font-bold text-charcoal">
                      {i + 1}
                    </div>
                    <span className="text-sm leading-relaxed text-charcoal">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-charcoal/10 bg-charcoal p-6 text-white shadow-sm md:p-8 lg:col-span-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-green">
                <Target className="h-4 w-4" />
                12-month horizon
              </div>
              <h2 className="mt-2 text-xl font-bold md:text-2xl">What good looks like in a year</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/85 md:text-base">
                {nextTwelveMonths}
              </p>
              <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-4">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-accent-green">
                  Remember
                </div>
                <p className="mt-1 text-sm leading-relaxed text-white/80">
                  Moving up a maturity stage typically takes 9–18 months of focused effort.
                  Progress compounds: each dimension you strengthen makes the next one easier.
                </p>
              </div>
            </div>
          </div>

          {/* ────────────── HOW TO CONTINUE ────────────── */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-green">
              <ArrowUpRight className="h-4 w-4" />
              How to continue
            </div>
            <h2 className="mt-2 text-2xl font-bold text-charcoal md:text-3xl">
              Turning this diagnostic into a real plan
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-600 md:text-base">
              The scorecard is the starting point. These are the most effective ways we see
              organizations convert a diagnostic like this into measurable progress.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <ContinueCard
                step="01"
                title="Share it with your executive team"
                body="Use this report as a conversation starter at your next ExCo or leadership offsite. The goal is shared language around strengths, gaps, and stage — not a debate about the exact score."
              />
              <ContinueCard
                step="02"
                title="Run an AI Readiness Workshop"
                body="Bring leadership together for a guided session with AIdeology. We pressure-test the score, agree the one or two priority dimensions, and shape a practical 90-day plan with named owners."
              />
              <ContinueCard
                step="03"
                title="Commission targeted deep-dives"
                body="For each of your two weakest dimensions, run a focused 2–4 week deep-dive. Typical outputs: a maturity baseline, a target state, and a funded initiative to close the gap."
              />
              <ContinueCard
                step="04"
                title="Build a prioritized AI portfolio"
                body="Translate the 90-day priorities into funded initiatives with named sponsors, KPIs, and a single portfolio view. This is the piece that turns AI from projects into a managed capability."
              />
              <ContinueCard
                step="05"
                title="Instrument value measurement"
                body="For every AI initiative, define the KPI before funding, monitor it in production, and review it at 3 and 6 months. The discipline that separates AI leaders from AI noise."
              />
              <ContinueCard
                step="06"
                title="Re-take this assessment in 6 months"
                body="Use the scorecard as a tracking tool, not a one-off. Re-scoring every two quarters is the cheapest way to see whether strategy, data, governance, and operating model are actually moving."
              />
            </div>
          </div>

          {/* ────────────── FINAL CTA ────────────── */}
          <div className="rounded-3xl bg-charcoal p-6 text-white shadow-lg md:p-10">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold md:text-3xl">
                  Ready to turn this into a plan?
                </h2>
                <p className="mt-2 text-white/75">
                  Bring your leadership team to an AI Readiness Workshop with AIdeology. We will
                  align on the gaps that matter most, shape a 90-day plan, and help you move up a
                  maturity stage in the next 9–12 months.
                </p>
              </div>
              <div className="flex flex-col items-stretch gap-3 sm:flex-row">
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
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleDownload}
                  disabled={downloading}
                  className="border-white/30 bg-transparent text-white hover:bg-white hover:text-charcoal transition-all duration-300 disabled:opacity-60"
                >
                  <Download className="mr-2 h-4 w-4" />
                  {downloading ? "Preparing PDF…" : "Download PDF"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContinueCard({
  step,
  title,
  body,
}: {
  step: string
  title: string
  body: string
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-[#fafafa] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm">
      <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-accent-green">
        <span className="tabular-nums">{step}</span>
      </div>
      <h3 className="mt-1 text-base font-bold text-charcoal md:text-lg">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{body}</p>
    </div>
  )
}

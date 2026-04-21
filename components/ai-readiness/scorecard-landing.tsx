"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, ShieldCheck, BarChart3, Target } from "lucide-react"

interface Props {
  onStart: () => void
  hasSavedProgress: boolean
  onResume?: () => void
  onResetSaved?: () => void
}

export default function ScorecardLanding({
  onStart,
  hasSavedProgress,
  onResume,
  onResetSaved,
}: Props) {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent-green/30 bg-accent-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal">
            <Target className="h-3.5 w-3.5 text-accent-green" />
            AI Readiness Assessment
          </div>
          <h1 className="mt-6 text-4xl font-bold leading-tight text-charcoal md:text-5xl lg:text-6xl">
            AI Readiness Scorecard
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 md:text-xl">
            Assess your organization&apos;s readiness for successful AI adoption across strategy,
            data, technology, governance, talent, and operations.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-500">
            An executive-level diagnostic that takes 5–7 minutes. You&apos;ll receive a maturity
            score, a dimension-by-dimension breakdown, and prioritized recommendations.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              onClick={onStart}
              className="bg-accent-green text-charcoal font-semibold hover:bg-charcoal hover:text-white transition-all duration-300 hover:scale-105 px-8"
            >
              Start Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            {hasSavedProgress && onResume && (
              <Button
                variant="outline"
                size="lg"
                onClick={onResume}
                className="border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300"
              >
                Resume saved progress
              </Button>
            )}
          </div>
          {hasSavedProgress && onResetSaved && (
            <button
              onClick={onResetSaved}
              className="mt-3 text-xs text-gray-500 underline underline-offset-2 hover:text-charcoal"
            >
              Start a fresh assessment instead
            </button>
          )}
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-4 sm:grid-cols-3">
          <FeatureCard
            icon={<Clock className="h-5 w-5" />}
            title="5–7 minutes"
            body="Concise, executive-friendly questions across 11 critical AI-readiness dimensions."
          />
          <FeatureCard
            icon={<BarChart3 className="h-5 w-5" />}
            title="Clear score & stage"
            body="Overall maturity score, dimension radar chart, and placement against 5 maturity stages."
          />
          <FeatureCard
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Tailored recommendations"
            body="Prioritized next steps you can take to close the gaps that matter most."
          />
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-xs text-gray-500">
          Your answers are saved locally in your browser. Contact details are only shared when you
          explicitly submit them to receive your results.
        </p>
      </div>
    </section>
  )
}

function FeatureCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode
  title: string
  body: string
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-green/10 text-accent-green">
        {icon}
      </div>
      <h3 className="mt-4 text-base font-semibold text-charcoal">{title}</h3>
      <p className="mt-1 text-sm text-gray-600">{body}</p>
    </div>
  )
}

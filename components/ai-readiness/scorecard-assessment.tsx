"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, CheckCircle2, Save } from "lucide-react"
import { dimensions, scale } from "./scorecard-config"
import { answeredCount, totalQuestions } from "./scorecard-utils"

interface Props {
  answers: Record<string, number>
  onChange: (answers: Record<string, number>) => void
  onComplete: () => void
  onBackToLanding: () => void
}

export default function ScorecardAssessment({
  answers,
  onChange,
  onComplete,
  onBackToLanding,
}: Props) {
  const [stepIndex, setStepIndex] = useState(0)
  const dim = dimensions[stepIndex]

  const answered = useMemo(() => answeredCount(answers), [answers])
  const total = useMemo(() => totalQuestions(), [])
  const progressPct = Math.round((answered / total) * 100)

  const dimAnswered = dim.questions.filter((q) => answers[q.id] >= 1).length
  const dimComplete = dimAnswered === dim.questions.length

  const setAnswer = (qid: string, value: number) => {
    onChange({ ...answers, [qid]: value })
  }

  const isLastStep = stepIndex === dimensions.length - 1
  const isFirstStep = stepIndex === 0

  const allComplete = dimensions.every((d) =>
    d.questions.every((q) => typeof answers[q.id] === "number" && answers[q.id] >= 1),
  )

  return (
    <section className="pt-24 pb-16 md:pt-28 bg-[#f4f4f4] min-h-dvh">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <button
              onClick={onBackToLanding}
              className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-charcoal"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to intro
            </button>
            <span className="inline-flex items-center gap-1.5 text-xs text-gray-500">
              <Save className="h-3.5 w-3.5" />
              Progress saved automatically
            </span>
          </div>

          {/* Progress bar */}
          <div className="mb-6">
            <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-gray-500">
              <span>
                Dimension {stepIndex + 1} of {dimensions.length}
              </span>
              <span>
                {answered} / {total} questions answered ({progressPct}%)
              </span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-accent-green transition-all duration-500"
                style={{ width: `${Math.max(progressPct, 2)}%` }}
              />
            </div>
          </div>

          {/* Dimension card */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-green">
                  {String(stepIndex + 1).padStart(2, "0")} · {dim.name}
                </div>
                <h2 className="mt-2 text-2xl font-bold leading-snug text-charcoal md:text-3xl">
                  {dim.description}
                </h2>
                <p className="mt-3 max-w-3xl text-sm text-gray-600">{dim.helperText}</p>
              </div>
              {dimComplete && (
                <span className="inline-flex items-center gap-1 rounded-full bg-accent-green/15 px-3 py-1 text-[11px] font-semibold text-charcoal">
                  <CheckCircle2 className="h-3.5 w-3.5 text-accent-green" />
                  Complete
                </span>
              )}
            </div>

            {/* Questions */}
            <div className="space-y-5">
              {dim.questions.map((q, idx) => (
                <div
                  key={q.id}
                  className="rounded-xl border border-gray-100 bg-[#fafafa] p-4 md:p-5"
                >
                  <div className="mb-3 flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-charcoal text-xs font-bold text-white">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="text-sm font-semibold leading-snug text-charcoal md:text-base">
                        {q.text}
                      </p>
                      {q.helper && (
                        <p className="mt-1 text-xs text-gray-500">{q.helper}</p>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    {scale.map((opt) => {
                      const isSelected = answers[q.id] === opt.value
                      return (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => setAnswer(q.id, opt.value)}
                          aria-pressed={isSelected}
                          className={`rounded-lg border px-2 py-3 text-center transition-all duration-200 ${
                            isSelected
                              ? "border-accent-green bg-accent-green/15 shadow-sm"
                              : "border-gray-200 bg-white hover:border-accent-green/50 hover:bg-accent-green/5"
                          }`}
                        >
                          <div
                            className={`text-base font-bold leading-none ${
                              isSelected ? "text-charcoal" : "text-gray-400"
                            }`}
                          >
                            {opt.value}
                          </div>
                          <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-charcoal/80">
                            {opt.label}
                          </div>
                          <div className="mt-0.5 hidden text-[10px] text-gray-500 md:block">
                            {opt.description}
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer nav */}
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Button
                variant="outline"
                onClick={() => setStepIndex((i) => Math.max(0, i - 1))}
                disabled={isFirstStep}
                className="border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-white disabled:opacity-40"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              <div className="flex flex-wrap items-center justify-center gap-1.5">
                {dimensions.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setStepIndex(i)}
                    aria-label={`Jump to dimension ${i + 1}`}
                    className={`h-2 w-6 rounded-full transition-all ${
                      i === stepIndex
                        ? "bg-accent-green"
                        : dimensions[i].questions.every(
                            (q) => typeof answers[q.id] === "number" && answers[q.id] >= 1,
                          )
                        ? "bg-charcoal"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
              {isLastStep ? (
                <Button
                  onClick={onComplete}
                  disabled={!allComplete}
                  className="bg-accent-green text-charcoal font-semibold hover:bg-charcoal hover:text-white transition-all duration-300 disabled:opacity-50 disabled:hover:bg-accent-green disabled:hover:text-charcoal"
                >
                  {allComplete ? "See my results" : `Answer all questions to continue`}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button
                  onClick={() => setStepIndex((i) => Math.min(dimensions.length - 1, i + 1))}
                  className="bg-accent-green text-charcoal font-semibold hover:bg-charcoal hover:text-white transition-all duration-300"
                >
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

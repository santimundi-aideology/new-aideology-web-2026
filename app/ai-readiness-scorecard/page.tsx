"use client"

import { useEffect, useMemo, useState } from "react"
import ScorecardLanding from "@/components/ai-readiness/scorecard-landing"
import ScorecardAssessment from "@/components/ai-readiness/scorecard-assessment"
import ScorecardLeadForm from "@/components/ai-readiness/scorecard-lead-form"
import ScorecardResults from "@/components/ai-readiness/scorecard-results"
import {
  computeScores,
  loadAnswers,
  saveAnswers,
  clearAnswers,
  loadLead,
  saveLead,
  submitLeadToWebhook,
  trackScorecardEvent,
  type LeadInfo,
  type ScoreResult,
} from "@/components/ai-readiness/scorecard-utils"
import { dimensions } from "@/components/ai-readiness/scorecard-config"

type Stage = "landing" | "assessment" | "lead" | "results"

export default function AIReadinessScorecardPage() {
  const [stage, setStage] = useState<Stage>("landing")
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [lead, setLead] = useState<LeadInfo | null>(null)
  const [hydrated, setHydrated] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    setAnswers(loadAnswers())
    setLead(loadLead())
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (hydrated) saveAnswers(answers)
  }, [answers, hydrated])

  const hasSavedProgress = useMemo(() => {
    if (!hydrated) return false
    const count = Object.values(answers).filter((v) => typeof v === "number" && v >= 1).length
    return count > 0
  }, [answers, hydrated])

  const result: ScoreResult | null = useMemo(() => {
    const allAnswered = dimensions.every((d) =>
      d.questions.every((q) => typeof answers[q.id] === "number" && answers[q.id] >= 1),
    )
    if (!allAnswered) return null
    return computeScores(answers)
  }, [answers])

  const handleStart = () => {
    clearAnswers()
    setAnswers({})
    setStage("assessment")
    trackScorecardEvent("scorecard_started")
  }

  const handleResume = () => {
    setStage("assessment")
    trackScorecardEvent("scorecard_resumed")
  }

  const handleAssessmentComplete = () => {
    if (lead) {
      setStage("results")
      trackScorecardEvent("scorecard_results_viewed", { overall: result?.overall })
    } else {
      setStage("lead")
    }
  }

  const handleLeadSubmit = async (submitted: LeadInfo) => {
    if (!result) return
    setSubmitting(true)
    setLead(submitted)
    saveLead(submitted)
    trackScorecardEvent("scorecard_lead_captured", {
      industry: submitted.industry,
      role: submitted.role,
    })
    try {
      await submitLeadToWebhook(submitted, result)
    } finally {
      setSubmitting(false)
      setStage("results")
      trackScorecardEvent("scorecard_results_viewed", { overall: result.overall })
    }
  }

  const handleRestart = () => {
    clearAnswers()
    setAnswers({})
    setStage("landing")
    trackScorecardEvent("scorecard_restarted")
  }

  if (!hydrated) {
    return <div className="min-h-dvh" />
  }

  if (stage === "landing") {
    return (
      <ScorecardLanding
        onStart={handleStart}
        hasSavedProgress={hasSavedProgress}
        onResume={hasSavedProgress ? handleResume : undefined}
        onResetSaved={hasSavedProgress ? handleStart : undefined}
      />
    )
  }

  if (stage === "assessment") {
    return (
      <ScorecardAssessment
        answers={answers}
        onChange={setAnswers}
        onComplete={handleAssessmentComplete}
        onBackToLanding={() => setStage("landing")}
      />
    )
  }

  if (stage === "lead") {
    return (
      <ScorecardLeadForm
        initial={lead}
        submitting={submitting}
        onSubmit={handleLeadSubmit}
      />
    )
  }

  if (stage === "results" && result) {
    return <ScorecardResults result={result} lead={lead} onRestart={handleRestart} />
  }

  // Fallback: if somehow we reached results but no result, go back to assessment
  setStage("assessment")
  return <div className="min-h-dvh" />
}

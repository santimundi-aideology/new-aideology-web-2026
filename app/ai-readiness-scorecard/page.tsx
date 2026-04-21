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
import { buildScorecardPDFBase64 } from "@/components/ai-readiness/scorecard-pdf"
import { dimensions } from "@/components/ai-readiness/scorecard-config"

type Stage = "landing" | "assessment" | "lead" | "results"

async function submitScorecardToApi(
  lead: LeadInfo,
  scores: ScoreResult,
): Promise<void> {
  try {
    const { base64, fileName } = buildScorecardPDFBase64(scores, lead)
    const res = await fetch("/api/scorecard-submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        lead,
        scores,
        pdfBase64: base64,
        pdfFileName: fileName,
      }),
    })
    if (!res.ok) {
      console.warn("Scorecard email submit failed:", res.status, await res.text())
    }
  } catch (err) {
    console.warn("Scorecard email submit threw:", err)
  }
}

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
      // Re-fire the submission when an existing lead retakes the assessment
      if (result) {
        void submitScorecardToApi(lead, result)
      }
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
      // Fire both the legacy webhook (optional) and the new email API in parallel
      await Promise.all([
        submitLeadToWebhook(submitted, result),
        submitScorecardToApi(submitted, result),
      ])
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

  setStage("assessment")
  return <div className="min-h-dvh" />
}

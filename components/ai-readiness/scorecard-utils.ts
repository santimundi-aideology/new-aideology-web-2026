import {
  dimensions as defaultDimensions,
  maturityThresholds,
  type Dimension,
  type MaturityStage,
  type MaturityThreshold,
} from "./scorecard-config"

export interface LeadInfo {
  fullName: string
  company: string
  email: string
  industry: string
  role: string
}

export interface DimensionScore {
  id: string
  name: string
  rawAverage: number
  normalized: number
}

export interface ScoreResult {
  perDimension: DimensionScore[]
  overall: number
  stage: MaturityStage
  stageBlurb: string
  strongest: DimensionScore[]
  weakest: DimensionScore[]
  recommendations: { dimensionId: string; dimensionName: string; recommendation: string; score: number }[]
}

const STORAGE_KEY_ANSWERS = "ai-readiness-answers"
const STORAGE_KEY_LEAD = "ai-readiness-lead"

export function computeScores(
  answers: Record<string, number>,
  dims: Dimension[] = defaultDimensions,
  thresholds: MaturityThreshold[] = maturityThresholds,
): ScoreResult {
  const perDimension: DimensionScore[] = dims.map((d) => {
    const answered = d.questions
      .map((q) => answers[q.id])
      .filter((v): v is number => typeof v === "number" && v > 0)
    const avg = answered.length > 0 ? answered.reduce((a, b) => a + b, 0) / answered.length : 0
    return {
      id: d.id,
      name: d.name,
      rawAverage: avg,
      normalized: (avg / 5) * 100,
    }
  })

  const totalWeight = dims.reduce((s, d) => s + d.weight, 0)
  const weighted =
    dims.reduce((s, d, i) => s + perDimension[i].normalized * d.weight, 0) / totalWeight
  const overall = Math.round(weighted)

  const threshold = thresholds.find((t) => overall <= t.max) ?? thresholds[thresholds.length - 1]

  const sortedByScore = [...perDimension].sort((a, b) => b.normalized - a.normalized)
  const strongest = sortedByScore.slice(0, 3)
  const weakest = [...sortedByScore].reverse().slice(0, 3)

  const recommendations = weakest
    .map((w) => {
      const dim = dims.find((d) => d.id === w.id)
      if (!dim) return null
      return {
        dimensionId: w.id,
        dimensionName: w.name,
        recommendation: dim.lowScoreRecommendation,
        score: Math.round(w.normalized),
      }
    })
    .filter((r): r is NonNullable<typeof r> => r !== null)

  return {
    perDimension,
    overall,
    stage: threshold.stage,
    stageBlurb: threshold.blurb,
    strongest,
    weakest,
    recommendations,
  }
}

export function totalQuestions(dims: Dimension[] = defaultDimensions): number {
  return dims.reduce((s, d) => s + d.questions.length, 0)
}

export function answeredCount(answers: Record<string, number>, dims: Dimension[] = defaultDimensions): number {
  const allIds = dims.flatMap((d) => d.questions.map((q) => q.id))
  return allIds.filter((id) => typeof answers[id] === "number" && answers[id] > 0).length
}

export function loadAnswers(): Record<string, number> {
  if (typeof window === "undefined") return {}
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY_ANSWERS)
    return raw ? (JSON.parse(raw) as Record<string, number>) : {}
  } catch {
    return {}
  }
}

export function saveAnswers(answers: Record<string, number>) {
  if (typeof window === "undefined") return
  try {
    window.localStorage.setItem(STORAGE_KEY_ANSWERS, JSON.stringify(answers))
  } catch {
    /* noop */
  }
}

export function clearAnswers() {
  if (typeof window === "undefined") return
  try {
    window.localStorage.removeItem(STORAGE_KEY_ANSWERS)
  } catch {
    /* noop */
  }
}

export function loadLead(): LeadInfo | null {
  if (typeof window === "undefined") return null
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY_LEAD)
    return raw ? (JSON.parse(raw) as LeadInfo) : null
  } catch {
    return null
  }
}

export function saveLead(lead: LeadInfo) {
  if (typeof window === "undefined") return
  try {
    window.localStorage.setItem(STORAGE_KEY_LEAD, JSON.stringify(lead))
  } catch {
    /* noop */
  }
}

// ─── Placeholder integration hooks ──────────────────────────────────────────
// These are stubs. Wire them up later to your CRM / webhook / analytics stack.

export async function submitLeadToWebhook(
  lead: LeadInfo,
  scores: ScoreResult,
): Promise<{ ok: boolean }> {
  const url = process.env.NEXT_PUBLIC_SCORECARD_WEBHOOK
  if (!url) {
    return { ok: true }
  }
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source: "ai-readiness-scorecard",
        submittedAt: new Date().toISOString(),
        lead,
        scores,
      }),
    })
    return { ok: true }
  } catch (err) {
    console.warn("Scorecard webhook failed:", err)
    return { ok: false }
  }
}

export function trackScorecardEvent(event: string, data?: Record<string, unknown>) {
  if (typeof window === "undefined") return
  const w = window as unknown as { dataLayer?: unknown[] }
  if (Array.isArray(w.dataLayer)) {
    w.dataLayer.push({ event, ...data })
  }
}

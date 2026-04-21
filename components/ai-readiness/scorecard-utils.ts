import {
  dimensions as defaultDimensions,
  maturityThresholds,
  type Dimension,
  type MaturityStage,
  type MaturityThreshold,
  type RecommendationDetail,
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

export interface EnrichedRecommendation {
  dimensionId: string
  dimensionName: string
  score: number
  shortRecommendation: string
  detail: RecommendationDetail
}

export interface BalanceDiagnosis {
  spread: number
  label: "balanced" | "uneven" | "highly uneven"
  summary: string
}

export interface ScoreResult {
  perDimension: DimensionScore[]
  overall: number
  stage: MaturityStage
  stageHeadline: string
  stageBlurb: string
  executiveSummary: string
  strategicFocus: string
  ninetyDayPriorities: string[]
  nextTwelveMonths: string
  strongest: DimensionScore[]
  weakest: DimensionScore[]
  recommendations: EnrichedRecommendation[]
  balance: BalanceDiagnosis
  keyInsight: string
}

const STORAGE_KEY_ANSWERS = "ai-readiness-answers"
const STORAGE_KEY_LEAD = "ai-readiness-lead"

function standardDeviation(values: number[]): number {
  if (values.length === 0) return 0
  const mean = values.reduce((a, b) => a + b, 0) / values.length
  const variance = values.reduce((a, b) => a + (b - mean) ** 2, 0) / values.length
  return Math.sqrt(variance)
}

function describeBalance(values: number[]): BalanceDiagnosis {
  const spread = standardDeviation(values)
  if (spread < 10) {
    return {
      spread,
      label: "balanced",
      summary:
        "Your scores are fairly even across dimensions. This means there is no single blocker — progress will come from lifting all dimensions together rather than rescuing one.",
    }
  }
  if (spread < 18) {
    return {
      spread,
      label: "uneven",
      summary:
        "Your scores are uneven across dimensions. A small number of weaker areas are dragging down the overall maturity and will become bottlenecks as AI scales.",
    }
  }
  return {
    spread,
    label: "highly uneven",
    summary:
      "Your scores are highly uneven. A few advanced areas are masking real foundational gaps. Closing the weakest dimensions is likely the highest-leverage move available to you.",
  }
}

function buildKeyInsight(
  perDimension: DimensionScore[],
  strongest: DimensionScore[],
  weakest: DimensionScore[],
  balance: BalanceDiagnosis,
): string {
  const top = strongest[0]
  const bottom = weakest[0]
  const lowCount = perDimension.filter((d) => d.normalized < 50).length
  const highCount = perDimension.filter((d) => d.normalized >= 75).length

  if (!top || !bottom) return ""

  if (balance.label === "highly uneven") {
    return `Your biggest opportunity is not to build on ${top.name} — it is to close the gap on ${bottom.name}. With ${lowCount} dimension${lowCount === 1 ? "" : "s"} still below 50/100, strengths like ${top.name} cannot compound until the foundations catch up.`
  }
  if (balance.label === "uneven") {
    return `${top.name} is a genuine strength (${Math.round(top.normalized)}/100), but ${bottom.name} at ${Math.round(bottom.normalized)}/100 is a bottleneck. Closing the two weakest dimensions will unlock more value than adding a new AI use case.`
  }
  if (highCount >= 6) {
    return `You score consistently well across dimensions. Your next advantage comes from depth and integration — making AI a portfolio-level capability, not a set of strong individual functions.`
  }
  return `Your scores are consistent across dimensions. Progress will come from lifting the whole organization together, with a focused 90-day plan on the two or three lowest areas.`
}

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

  const recommendations: EnrichedRecommendation[] = weakest
    .map((w) => {
      const dim = dims.find((d) => d.id === w.id)
      if (!dim) return null
      return {
        dimensionId: w.id,
        dimensionName: w.name,
        score: Math.round(w.normalized),
        shortRecommendation: dim.lowScoreRecommendation,
        detail: dim.recommendationDetail,
      }
    })
    .filter((r): r is EnrichedRecommendation => r !== null)

  const balance = describeBalance(perDimension.map((d) => d.normalized))
  const keyInsight = buildKeyInsight(perDimension, strongest, weakest, balance)

  return {
    perDimension,
    overall,
    stage: threshold.stage,
    stageHeadline: threshold.headline,
    stageBlurb: threshold.blurb,
    executiveSummary: threshold.executiveSummary,
    strategicFocus: threshold.strategicFocus,
    ninetyDayPriorities: threshold.ninetyDayPriorities,
    nextTwelveMonths: threshold.nextTwelveMonths,
    strongest,
    weakest,
    recommendations,
    balance,
    keyInsight,
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

import jsPDF from "jspdf"
import autoTable from "jspdf-autotable"
import type { LeadInfo, ScoreResult, DimensionScore } from "./scorecard-utils"

// ─────────────────────────────────────────────────────────────────────────
// Design tokens — keep visual language tight and consistent
// ─────────────────────────────────────────────────────────────────────────

const INK: [number, number, number] = [17, 17, 17] // near-black, body text
const CHARCOAL: [number, number, number] = [38, 38, 38] // headlines
const MUTED: [number, number, number] = [115, 115, 115] // captions / subdued
const HAIR: [number, number, number] = [215, 215, 215] // thin dividers
const BORDER: [number, number, number] = [230, 230, 230]
const BG_SOFT: [number, number, number] = [246, 246, 246] // panel fill
const BG_DARK: [number, number, number] = [17, 17, 17] // cover / CTA panel
const ACCENT: [number, number, number] = [159, 206, 77] // AIdeology green
const ACCENT_DARK: [number, number, number] = [110, 146, 48]
const WHITE: [number, number, number] = [255, 255, 255]

const MARGIN_X = 54
const MARGIN_TOP = 72
const MARGIN_BOTTOM = 72
const LINE = 14

// A4 in pt is 595.28 × 841.89
// usable width ≈ 487pt, height ≈ 698pt

type SectionName =
  | "Cover"
  | "Contents"
  | "Executive summary"
  | "Dimension analysis"
  | "Strengths & gaps"
  | "Strategic roadmap"
  | "Recommendations"
  | "How to continue"
  | "Appendix"

interface Ctx {
  doc: jsPDF
  w: number
  h: number
  y: number
  page: number
  section: SectionName
  totalPages: number
}

// ─────────────────────────────────────────────────────────────────────────
// Low-level primitives
// ─────────────────────────────────────────────────────────────────────────

function setFont(ctx: Ctx, weight: "normal" | "bold" = "normal", size = 10, color: [number, number, number] = INK) {
  ctx.doc.setFont("helvetica", weight)
  ctx.doc.setFontSize(size)
  ctx.doc.setTextColor(...color)
}

function text(ctx: Ctx, s: string, x: number, y: number, opts: { align?: "left" | "center" | "right" } = {}) {
  ctx.doc.text(s, x, y, { align: opts.align ?? "left" })
}

function fill(ctx: Ctx, color: [number, number, number]) {
  ctx.doc.setFillColor(...color)
}
function stroke(ctx: Ctx, color: [number, number, number], width = 0.5) {
  ctx.doc.setDrawColor(...color)
  ctx.doc.setLineWidth(width)
}

function rect(ctx: Ctx, x: number, y: number, w: number, h: number, style: "F" | "S" | "FD" = "F") {
  ctx.doc.rect(x, y, w, h, style)
}

function roundRect(ctx: Ctx, x: number, y: number, w: number, h: number, r: number, style: "F" | "S" | "FD" = "F") {
  ctx.doc.roundedRect(x, y, w, h, r, r, style)
}

function line(ctx: Ctx, x1: number, y1: number, x2: number, y2: number) {
  ctx.doc.line(x1, y1, x2, y2)
}

function hairline(ctx: Ctx, y: number, x1 = MARGIN_X, x2?: number) {
  stroke(ctx, HAIR, 0.4)
  line(ctx, x1, y, x2 ?? ctx.w - MARGIN_X, y)
}

function contentWidth(ctx: Ctx) {
  return ctx.w - MARGIN_X * 2
}

// Page frame (header + footer) used for every content page
function drawFrame(ctx: Ctx) {
  const { doc, w, h, section, page } = ctx
  // Top hairline with section label left + brand right
  stroke(ctx, HAIR, 0.4)
  line(ctx, MARGIN_X, 44, w - MARGIN_X, 44)
  setFont(ctx, "bold", 7, MUTED)
  doc.text(section.toUpperCase(), MARGIN_X, 36)
  setFont(ctx, "normal", 7, MUTED)
  doc.text("AIdeology  ·  AI Readiness Diagnostic", w - MARGIN_X, 36, { align: "right" })

  // Bottom hairline with page number right + confidential left
  stroke(ctx, HAIR, 0.4)
  line(ctx, MARGIN_X, h - 44, w - MARGIN_X, h - 44)
  setFont(ctx, "normal", 7, MUTED)
  doc.text("Confidential  ·  aideology.ai", MARGIN_X, h - 30)
  setFont(ctx, "bold", 7, CHARCOAL)
  doc.text(String(page).padStart(2, "0"), w - MARGIN_X, h - 30, { align: "right" })
}

function newPage(ctx: Ctx, section?: SectionName) {
  ctx.doc.addPage()
  ctx.page += 1
  if (section) ctx.section = section
  ctx.y = MARGIN_TOP
  drawFrame(ctx)
}

function ensureSpace(ctx: Ctx, needed: number) {
  if (ctx.y + needed > ctx.h - MARGIN_BOTTOM) newPage(ctx)
}

// Typography helpers ──────────────────────────────────────────────────────

function eyebrow(ctx: Ctx, s: string, color: [number, number, number] = ACCENT_DARK) {
  ensureSpace(ctx, 14)
  setFont(ctx, "bold", 7, color)
  ctx.doc.setCharSpace(1.2)
  text(ctx, s.toUpperCase(), MARGIN_X, ctx.y)
  ctx.doc.setCharSpace(0)
  ctx.y += 14
}

function exhibitLabel(ctx: Ctx, n: number, title: string) {
  ensureSpace(ctx, 20)
  setFont(ctx, "bold", 7, ACCENT_DARK)
  ctx.doc.setCharSpace(1.2)
  text(ctx, `EXHIBIT ${String(n).padStart(2, "0")}`, MARGIN_X, ctx.y)
  ctx.doc.setCharSpace(0)
  setFont(ctx, "bold", 11, CHARCOAL)
  text(ctx, title, MARGIN_X + 70, ctx.y)
  ctx.y += 8
  hairline(ctx, ctx.y)
  ctx.y += 14
}

function sectionTitle(ctx: Ctx, number: string, title: string, subtitle?: string) {
  ensureSpace(ctx, 80)
  setFont(ctx, "bold", 9, ACCENT_DARK)
  ctx.doc.setCharSpace(2)
  text(ctx, number, MARGIN_X, ctx.y)
  ctx.doc.setCharSpace(0)
  ctx.y += 14
  setFont(ctx, "bold", 24, CHARCOAL)
  const titleLines = ctx.doc.splitTextToSize(title, contentWidth(ctx)) as string[]
  for (const tl of titleLines) {
    text(ctx, tl, MARGIN_X, ctx.y)
    ctx.y += 28
  }
  if (subtitle) {
    setFont(ctx, "normal", 11, MUTED)
    const subLines = ctx.doc.splitTextToSize(subtitle, contentWidth(ctx) - 40) as string[]
    for (const sl of subLines) {
      text(ctx, sl, MARGIN_X, ctx.y)
      ctx.y += LINE
    }
  }
  ctx.y += 10
  // short accent bar
  fill(ctx, ACCENT)
  rect(ctx, MARGIN_X, ctx.y, 36, 3, "F")
  ctx.y += 20
}

function heading(ctx: Ctx, s: string, size = 14) {
  ensureSpace(ctx, size + 12)
  setFont(ctx, "bold", size, CHARCOAL)
  text(ctx, s, MARGIN_X, ctx.y)
  ctx.y += size + 6
}

function subheading(ctx: Ctx, s: string) {
  ensureSpace(ctx, 18)
  setFont(ctx, "bold", 10, CHARCOAL)
  text(ctx, s, MARGIN_X, ctx.y)
  ctx.y += 14
}

interface ParagraphOpts {
  size?: number
  color?: [number, number, number]
  bold?: boolean
  gapAfter?: number
  maxWidth?: number
  x?: number
  leading?: number
}

function paragraph(ctx: Ctx, s: string, opts: ParagraphOpts = {}) {
  const size = opts.size ?? 10
  const color = opts.color ?? INK
  const bold = opts.bold ?? false
  const gapAfter = opts.gapAfter ?? 10
  const x = opts.x ?? MARGIN_X
  const leading = opts.leading ?? size + 4
  const maxWidth = opts.maxWidth ?? (ctx.w - MARGIN_X - x)
  setFont(ctx, bold ? "bold" : "normal", size, color)
  const lines = ctx.doc.splitTextToSize(s, maxWidth) as string[]
  for (const ln of lines) {
    ensureSpace(ctx, leading)
    text(ctx, ln, x, ctx.y)
    ctx.y += leading
  }
  ctx.y += gapAfter
}

function bulletList(ctx: Ctx, items: string[], opts: { gapAfter?: number; x?: number; maxWidth?: number; size?: number } = {}) {
  const size = opts.size ?? 10
  const x = opts.x ?? MARGIN_X
  const maxWidth = opts.maxWidth ?? (ctx.w - MARGIN_X - x - 14)
  setFont(ctx, "normal", size, INK)
  for (const item of items) {
    const lines = ctx.doc.splitTextToSize(item, maxWidth) as string[]
    ensureSpace(ctx, (size + 4) * lines.length + 4)
    fill(ctx, ACCENT)
    ctx.doc.circle(x + 3, ctx.y - 3, 1.6, "F")
    setFont(ctx, "normal", size, INK)
    lines.forEach((l, i) => {
      text(ctx, l, x + 14, ctx.y)
      if (i < lines.length - 1) ctx.y += size + 4
    })
    ctx.y += size + 6
  }
  ctx.y += opts.gapAfter ?? 6
}

// ─────────────────────────────────────────────────────────────────────────
// Chart primitives
// ─────────────────────────────────────────────────────────────────────────

function horizontalBarChart(
  ctx: Ctx,
  rows: { label: string; value: number; highlight?: boolean }[],
  opts: { width: number; rowHeight?: number; x?: number; max?: number } = { width: 400 },
) {
  const rowH = opts.rowHeight ?? 18
  const x = opts.x ?? MARGIN_X
  const labelColW = 150
  const valueColW = 36
  const trackW = opts.width - labelColW - valueColW - 16
  const max = opts.max ?? 100

  ensureSpace(ctx, rows.length * rowH + 20)
  // axis ticks (0 / 50 / 100)
  const trackX = x + labelColW + 8
  setFont(ctx, "normal", 7, MUTED)
  ;[0, 50, 100].forEach((v) => {
    const tx = trackX + (v / max) * trackW
    text(ctx, String(v), tx, ctx.y - 4, { align: "center" })
  })

  rows.forEach((r) => {
    // label
    setFont(ctx, "normal", 9, CHARCOAL)
    text(ctx, r.label, x, ctx.y + rowH / 2 + 3)

    // track
    fill(ctx, BG_SOFT)
    rect(ctx, trackX, ctx.y + 4, trackW, rowH - 8, "F")

    // bar
    const v = Math.max(0, Math.min(max, r.value))
    const bw = Math.max(2, (v / max) * trackW)
    fill(ctx, r.highlight ? ACCENT : CHARCOAL)
    rect(ctx, trackX, ctx.y + 4, bw, rowH - 8, "F")

    // value
    setFont(ctx, "bold", 9, CHARCOAL)
    text(ctx, String(Math.round(r.value)), trackX + trackW + 8, ctx.y + rowH / 2 + 3)

    ctx.y += rowH
  })
  ctx.y += 8
}

function radarChart(
  ctx: Ctx,
  axes: { label: string; value: number }[],
  opts: { size?: number; cx?: number; max?: number } = {},
) {
  const max = opts.max ?? 100
  const size = opts.size ?? 260
  const cx = opts.cx ?? ctx.w / 2
  const cy = ctx.y + size / 2
  const r = size / 2 - 40

  ensureSpace(ctx, size + 10)

  const n = axes.length
  const angle = (i: number) => -Math.PI / 2 + (i * 2 * Math.PI) / n

  // Rings + ticks (25/50/75/100)
  stroke(ctx, HAIR, 0.4)
  fill(ctx, WHITE)
  ;[0.25, 0.5, 0.75, 1].forEach((pct) => {
    const rr = r * pct
    const pts: [number, number][] = []
    for (let i = 0; i < n; i++) {
      pts.push([cx + rr * Math.cos(angle(i)), cy + rr * Math.sin(angle(i))])
    }
    // draw polygon (close path)
    for (let i = 0; i < n; i++) {
      const a = pts[i]
      const b = pts[(i + 1) % n]
      line(ctx, a[0], a[1], b[0], b[1])
    }
  })

  // Spokes
  stroke(ctx, HAIR, 0.3)
  for (let i = 0; i < n; i++) {
    const x2 = cx + r * Math.cos(angle(i))
    const y2 = cy + r * Math.sin(angle(i))
    line(ctx, cx, cy, x2, y2)
  }

  // Data polygon — fill
  const dataPts: [number, number][] = axes.map((a, i) => {
    const v = Math.max(0, Math.min(max, a.value)) / max
    return [cx + r * v * Math.cos(angle(i)), cy + r * v * Math.sin(angle(i))]
  })
  fill(ctx, [159, 206, 77]) // accent
  stroke(ctx, ACCENT_DARK, 1.2)
  // jsPDF lines() takes relative deltas; use explicit lineTo via setLineDash not available; emulate via multiple line() calls then fill manually
  // For fill we use triangles fan from centroid — approximation
  // We'll simply draw polygon outline + semi-transparent fill via GState
  try {
    // jsPDF has GState for transparency
    // @ts-expect-error GState exists at runtime
    const gs = new ctx.doc.GState({ opacity: 0.28 })
    // @ts-expect-error setGState exists at runtime
    ctx.doc.setGState(gs)
    // Polygon fill via path emulation: use filled triangles from centroid
    for (let i = 0; i < n; i++) {
      const a = dataPts[i]
      const b = dataPts[(i + 1) % n]
      ctx.doc.triangle(cx, cy, a[0], a[1], b[0], b[1], "F")
    }
    // reset opacity
    // @ts-expect-error GState exists at runtime
    const gsOpaque = new ctx.doc.GState({ opacity: 1 })
    // @ts-expect-error setGState exists at runtime
    ctx.doc.setGState(gsOpaque)
  } catch {
    // fallback: no fill
  }

  // Polygon outline
  stroke(ctx, ACCENT_DARK, 1.1)
  for (let i = 0; i < n; i++) {
    const a = dataPts[i]
    const b = dataPts[(i + 1) % n]
    line(ctx, a[0], a[1], b[0], b[1])
  }
  // Data points
  dataPts.forEach(([px, py]) => {
    fill(ctx, ACCENT_DARK)
    ctx.doc.circle(px, py, 1.6, "F")
  })

  // Axis labels
  setFont(ctx, "normal", 7.5, CHARCOAL)
  axes.forEach((a, i) => {
    const lx = cx + (r + 14) * Math.cos(angle(i))
    const ly = cy + (r + 14) * Math.sin(angle(i)) + 2
    const cosA = Math.cos(angle(i))
    const align: "left" | "center" | "right" = cosA > 0.2 ? "left" : cosA < -0.2 ? "right" : "center"
    // truncate long labels
    const maxChars = 22
    const lbl = a.label.length > maxChars ? a.label.slice(0, maxChars - 1) + "…" : a.label
    text(ctx, lbl, lx, ly, { align })
  })

  ctx.y += size + 4
}

// Large score "gauge" — semicircular arc with score in middle
function scoreGauge(ctx: Ctx, score: number, stage: string, x: number, y: number, w = 220) {
  const cx = x + w / 2
  const cy = y + 90
  const r = 86

  // Background arc (full semicircle)
  stroke(ctx, BG_SOFT, 12)
  // jsPDF doesn't have arc; emulate with many line segments
  const segs = 48
  for (let i = 0; i < segs; i++) {
    const a1 = Math.PI + (i / segs) * Math.PI
    const a2 = Math.PI + ((i + 1) / segs) * Math.PI
    line(ctx, cx + r * Math.cos(a1), cy + r * Math.sin(a1), cx + r * Math.cos(a2), cy + r * Math.sin(a2))
  }

  // Value arc
  stroke(ctx, ACCENT, 12)
  const filled = Math.round((score / 100) * segs)
  for (let i = 0; i < filled; i++) {
    const a1 = Math.PI + (i / segs) * Math.PI
    const a2 = Math.PI + ((i + 1) / segs) * Math.PI
    line(ctx, cx + r * Math.cos(a1), cy + r * Math.sin(a1), cx + r * Math.cos(a2), cy + r * Math.sin(a2))
  }

  // Ticks at 25/50/75
  stroke(ctx, MUTED, 0.8)
  ;[0.25, 0.5, 0.75].forEach((pct) => {
    const a = Math.PI + pct * Math.PI
    const x1 = cx + (r - 12) * Math.cos(a)
    const y1 = cy + (r - 12) * Math.sin(a)
    const x2 = cx + (r + 12) * Math.cos(a)
    const y2 = cy + (r + 12) * Math.sin(a)
    line(ctx, x1, y1, x2, y2)
  })

  // Center number
  setFont(ctx, "bold", 46, CHARCOAL)
  text(ctx, String(score), cx, cy + 4, { align: "center" })
  setFont(ctx, "normal", 9, MUTED)
  text(ctx, "OUT OF 100", cx, cy + 22, { align: "center" })

  // Stage chip below
  const chipW = 150
  const chipH = 24
  const chipX = cx - chipW / 2
  const chipY = cy + 34
  fill(ctx, CHARCOAL)
  roundRect(ctx, chipX, chipY, chipW, chipH, 12, "F")
  setFont(ctx, "bold", 9, WHITE)
  ctx.doc.setCharSpace(1.5)
  text(ctx, stage.toUpperCase(), cx, chipY + chipH / 2 + 3, { align: "center" })
  ctx.doc.setCharSpace(0)
}

// ─────────────────────────────────────────────────────────────────────────
// Page builders
// ─────────────────────────────────────────────────────────────────────────

function buildCover(ctx: Ctx, lead: LeadInfo | null, result: ScoreResult) {
  const { doc, w, h } = ctx
  // Full dark background band for top half
  fill(ctx, BG_DARK)
  rect(ctx, 0, 0, w, h * 0.62, "F")

  // vertical accent stripe on the left
  fill(ctx, ACCENT)
  rect(ctx, 0, 0, 6, h * 0.62, "F")

  // Brand + eyebrow
  setFont(ctx, "bold", 8, WHITE)
  doc.setCharSpace(2.5)
  text(ctx, "AIDEOLOGY", 54, 72)
  setFont(ctx, "normal", 8, ACCENT)
  text(ctx, "AI READINESS DIAGNOSTIC", 54, 88)
  doc.setCharSpace(0)

  // Big title
  setFont(ctx, "bold", 36, WHITE)
  const title = "Your AI Readiness Report"
  const titleLines = doc.splitTextToSize(title, w - 108) as string[]
  let ty = 210
  for (const tl of titleLines) {
    text(ctx, tl, 54, ty)
    ty += 42
  }

  // Subtitle
  setFont(ctx, "normal", 14, WHITE)
  const subtitle = `Executive diagnostic for ${lead?.company || "your organization"}.`
  const subLines = doc.splitTextToSize(subtitle, w - 108) as string[]
  for (const sl of subLines) {
    text(ctx, sl, 54, ty)
    ty += 20
  }

  // Stage pill
  ty += 14
  setFont(ctx, "bold", 9, BG_DARK)
  const chipText = `${result.stage.toUpperCase()}  ·  ${result.overall}/100`
  const chipW = doc.getTextWidth(chipText) + 28
  fill(ctx, ACCENT)
  roundRect(ctx, 54, ty - 14, chipW, 24, 12, "F")
  setFont(ctx, "bold", 9, BG_DARK)
  doc.setCharSpace(1.5)
  text(ctx, chipText, 54 + chipW / 2, ty + 2, { align: "center" })
  doc.setCharSpace(0)

  // ── Lower half: white, prepared-for / prepared-by block
  const today = new Date().toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })

  const infoY = h * 0.62 + 48
  // thin accent
  fill(ctx, ACCENT)
  rect(ctx, 54, infoY, 36, 3, "F")

  setFont(ctx, "bold", 8, MUTED)
  doc.setCharSpace(2)
  text(ctx, "PREPARED FOR", 54, infoY + 28)
  doc.setCharSpace(0)
  setFont(ctx, "bold", 14, CHARCOAL)
  text(ctx, lead?.fullName || "—", 54, infoY + 46)
  setFont(ctx, "normal", 11, INK)
  const preparedForMeta = [lead?.role, lead?.company].filter(Boolean).join(" · ")
  if (preparedForMeta) text(ctx, preparedForMeta, 54, infoY + 62)
  if (lead?.industry) {
    setFont(ctx, "normal", 10, MUTED)
    text(ctx, lead.industry, 54, infoY + 78)
  }

  // Right column
  const rx = w / 2 + 20
  setFont(ctx, "bold", 8, MUTED)
  doc.setCharSpace(2)
  text(ctx, "PREPARED BY", rx, infoY + 28)
  doc.setCharSpace(0)
  setFont(ctx, "bold", 14, CHARCOAL)
  text(ctx, "AIdeology", rx, infoY + 46)
  setFont(ctx, "normal", 10, INK)
  text(ctx, "Enterprise AI advisory", rx, infoY + 62)
  setFont(ctx, "normal", 10, MUTED)
  text(ctx, "aideology.ai", rx, infoY + 78)

  // Date at bottom
  stroke(ctx, HAIR, 0.5)
  line(ctx, 54, h - 72, w - 54, h - 72)
  setFont(ctx, "normal", 9, MUTED)
  text(ctx, today, 54, h - 54)
  setFont(ctx, "bold", 8, MUTED)
  doc.setCharSpace(2)
  text(ctx, "CONFIDENTIAL", w - 54, h - 54, { align: "right" })
  doc.setCharSpace(0)
}

function buildContents(ctx: Ctx) {
  newPage(ctx, "Contents")
  sectionTitle(ctx, "CONTENTS", "What's inside", "A concise executive-ready diagnostic of your AI readiness — how you score today, where you lead, where you lag, and what to do in the next 90 days.")

  const items: Array<[string, string]> = [
    ["01", "Executive summary"],
    ["02", "Dimension analysis"],
    ["03", "Strengths & gaps"],
    ["04", "Strategic roadmap"],
    ["05", "Prioritized recommendations"],
    ["06", "How to continue"],
    ["07", "Appendix — methodology"],
  ]

  items.forEach(([n, label]) => {
    ensureSpace(ctx, 26)
    setFont(ctx, "bold", 9, ACCENT_DARK)
    ctx.doc.setCharSpace(1.5)
    text(ctx, n, MARGIN_X, ctx.y + 4)
    ctx.doc.setCharSpace(0)
    setFont(ctx, "bold", 14, CHARCOAL)
    text(ctx, label, MARGIN_X + 44, ctx.y + 4)
    // dotted leader
    setFont(ctx, "normal", 9, HAIR)
    // simple row divider
    stroke(ctx, HAIR, 0.4)
    line(ctx, MARGIN_X, ctx.y + 16, ctx.w - MARGIN_X, ctx.y + 16)
    ctx.y += 26
  })
}

function buildExecutiveSummary(ctx: Ctx, lead: LeadInfo | null, result: ScoreResult) {
  newPage(ctx, "Executive summary")
  sectionTitle(ctx, "01", "Executive summary", result.stageHeadline)

  // Two-column layout: gauge on right, copy on left
  const leftX = MARGIN_X
  const leftW = contentWidth(ctx) * 0.56
  const rightX = MARGIN_X + leftW + 18
  const rightW = contentWidth(ctx) - leftW - 18
  const topY = ctx.y

  // LEFT: "Our view" text block
  setFont(ctx, "bold", 8, ACCENT_DARK)
  ctx.doc.setCharSpace(1.5)
  text(ctx, "OUR VIEW", leftX, ctx.y)
  ctx.doc.setCharSpace(0)
  ctx.y += 12
  paragraph(ctx, result.executiveSummary, { size: 10.5, leading: 15, maxWidth: leftW, x: leftX, gapAfter: 6 })
  paragraph(ctx, result.balance.summary, { size: 10.5, color: MUTED, leading: 15, maxWidth: leftW, x: leftX, gapAfter: 10 })

  const leftEndY = ctx.y

  // RIGHT: gauge + quick stats
  scoreGauge(ctx, result.overall, result.stage, rightX, topY - 4, rightW)

  // quick stats under gauge
  const statsY = topY + 220
  const stats: Array<[string, string]> = [
    ["Overall score", `${result.overall}/100`],
    ["Maturity stage", result.stage],
    ["Spread", result.balance.label.charAt(0).toUpperCase() + result.balance.label.slice(1)],
    ["Dimensions", `${result.perDimension.length} assessed`],
  ]
  const colW = rightW / 2
  stats.forEach((s, i) => {
    const col = i % 2
    const row = Math.floor(i / 2)
    const sx = rightX + col * colW
    const sy = statsY + row * 42
    setFont(ctx, "normal", 7, MUTED)
    ctx.doc.setCharSpace(1.2)
    text(ctx, s[0].toUpperCase(), sx, sy)
    ctx.doc.setCharSpace(0)
    setFont(ctx, "bold", 13, CHARCOAL)
    text(ctx, s[1], sx, sy + 18)
  })

  // Sync cursor to bottom of whichever column is longer
  ctx.y = Math.max(leftEndY, statsY + 84) + 8

  // Key insight callout
  ensureSpace(ctx, 80)
  fill(ctx, BG_SOFT)
  roundRect(ctx, MARGIN_X, ctx.y, contentWidth(ctx), 70, 6, "F")
  // accent bar
  fill(ctx, ACCENT)
  rect(ctx, MARGIN_X, ctx.y, 4, 70, "F")
  setFont(ctx, "bold", 8, ACCENT_DARK)
  ctx.doc.setCharSpace(1.5)
  text(ctx, "KEY INSIGHT", MARGIN_X + 18, ctx.y + 20)
  ctx.doc.setCharSpace(0)
  setFont(ctx, "bold", 11, CHARCOAL)
  const insightLines = ctx.doc.splitTextToSize(result.keyInsight || "—", contentWidth(ctx) - 40) as string[]
  let iy = ctx.y + 38
  for (const il of insightLines.slice(0, 3)) {
    text(ctx, il, MARGIN_X + 18, iy)
    iy += 14
  }
  ctx.y += 90

  // Pull quote / stage blurb
  ensureSpace(ctx, 60)
  setFont(ctx, "bold", 8, ACCENT_DARK)
  ctx.doc.setCharSpace(1.5)
  text(ctx, "WHAT THIS STAGE MEANS", MARGIN_X, ctx.y)
  ctx.doc.setCharSpace(0)
  ctx.y += 12
  paragraph(ctx, result.stageBlurb, { size: 10.5, color: INK, leading: 15, gapAfter: 2 })

  // small hint
  setFont(ctx, "normal", 8, MUTED)
  text(ctx, `${lead?.company || "Your organization"} · Maturity stage derived from an 11-dimension composite score.`, MARGIN_X, ctx.h - MARGIN_BOTTOM - 14)
}

function buildDimensionAnalysis(ctx: Ctx, result: ScoreResult) {
  newPage(ctx, "Dimension analysis")
  sectionTitle(
    ctx,
    "02",
    "Dimension analysis",
    "Your AI readiness decomposed across 11 dimensions. Use this map to see the shape of your organization's maturity — not just the headline score.",
  )

  // Exhibit 01 — Radar
  exhibitLabel(ctx, 1, "Readiness profile across 11 dimensions")
  const radarAxes = result.perDimension.map((d) => ({ label: d.name, value: d.normalized }))
  radarChart(ctx, radarAxes, { size: 300 })

  setFont(ctx, "normal", 8.5, MUTED)
  paragraph(
    ctx,
    "Each axis is scored 0–100 from diagnostic questions on a 1–5 maturity scale. The shaded polygon shows your profile. A highly uneven polygon usually signals focused capability gaps rather than systemic immaturity.",
    { size: 9, color: MUTED, leading: 13, gapAfter: 14 },
  )

  // Exhibit 02 — Horizontal bar chart (ranked)
  ensureSpace(ctx, 260)
  exhibitLabel(ctx, 2, "Ranked dimension scores")

  const sorted = [...result.perDimension].sort((a, b) => b.normalized - a.normalized)
  const topId = sorted[0]?.id
  const bottomId = sorted[sorted.length - 1]?.id
  horizontalBarChart(
    ctx,
    sorted.map((d) => ({
      label: d.name,
      value: d.normalized,
      highlight: d.id === topId || d.id === bottomId,
    })),
    { width: contentWidth(ctx), rowHeight: 18 },
  )

  setFont(ctx, "normal", 9, MUTED)
  paragraph(
    ctx,
    `Highlighted bars mark your strongest (${sorted[0]?.name}) and weakest (${sorted[sorted.length - 1]?.name}) dimensions.`,
    { size: 9, color: MUTED, leading: 13, gapAfter: 6 },
  )
}

function buildStrengthsGaps(ctx: Ctx, result: ScoreResult) {
  newPage(ctx, "Strengths & gaps")
  sectionTitle(
    ctx,
    "03",
    "Strengths & gaps",
    "Where you have real capability you can build on, and where to close gaps before they become strategic liabilities.",
  )

  const colGap = 18
  const colW = (contentWidth(ctx) - colGap) / 2
  const leftX = MARGIN_X
  const rightX = MARGIN_X + colW + colGap
  const startY = ctx.y

  function drawColumn(x: number, title: string, subtitle: string, items: DimensionScore[], color: [number, number, number]) {
    // column header
    setFont(ctx, "bold", 8, color)
    ctx.doc.setCharSpace(1.5)
    ctx.doc.text(title.toUpperCase(), x, startY)
    ctx.doc.setCharSpace(0)
    setFont(ctx, "bold", 14, CHARCOAL)
    ctx.doc.text(subtitle, x, startY + 20)
    // short bar
    fill(ctx, color)
    rect(ctx, x, startY + 28, 28, 2, "F")
    // body starts
    let y = startY + 46
    items.forEach((d, i) => {
      // number chip
      fill(ctx, BG_SOFT)
      roundRect(ctx, x, y, 22, 22, 4, "F")
      setFont(ctx, "bold", 11, color)
      ctx.doc.text(String(i + 1), x + 11, y + 15, { align: "center" })
      // name + score
      setFont(ctx, "bold", 11, CHARCOAL)
      ctx.doc.text(d.name, x + 30, y + 10)
      setFont(ctx, "normal", 9, MUTED)
      ctx.doc.text(`${Math.round(d.normalized)}/100`, x + 30, y + 24)
      // mini progress bar
      fill(ctx, BG_SOFT)
      rect(ctx, x + 30, y + 30, colW - 30, 3, "F")
      fill(ctx, color)
      rect(ctx, x + 30, y + 30, Math.max(2, ((d.normalized / 100) * (colW - 30))), 3, "F")
      y += 52
    })
    return y
  }

  const leftEnd = drawColumn(leftX, "Strengths", "Lead with these", result.strongest.slice(0, 3), ACCENT_DARK)
  const rightEnd = drawColumn(rightX, "Gaps", "Close these first", result.weakest.slice(0, 3), CHARCOAL)
  ctx.y = Math.max(leftEnd, rightEnd) + 10

  // Narrative paragraphs under columns
  ensureSpace(ctx, 80)
  hairline(ctx, ctx.y)
  ctx.y += 14
  subheading(ctx, "Interpretation")
  paragraph(
    ctx,
    `Your profile is ${result.balance.label}. ${result.balance.summary} Strengths tend to be the capabilities where you already have executive attention and delivery muscle; gaps are where the conversation hasn't started in earnest or where ownership is unclear.`,
    { size: 10.5, leading: 15, gapAfter: 8 },
  )
  paragraph(
    ctx,
    "The highest-leverage move over the next two quarters is almost always to close the lowest-scoring dimensions — not to push the strongest even higher. Use the recommendations in section 05 to shape that plan.",
    { size: 10.5, leading: 15, color: MUTED, gapAfter: 0 },
  )
}

function buildStrategicRoadmap(ctx: Ctx, result: ScoreResult) {
  newPage(ctx, "Strategic roadmap")
  sectionTitle(ctx, "04", "Strategic roadmap", result.strategicFocus)

  // Three horizon columns: Next 90 days · 6 months · 12 months
  ensureSpace(ctx, 260)
  const gap = 14
  const colW = (contentWidth(ctx) - gap * 2) / 3
  const startY = ctx.y
  const colH = 260

  const cols: Array<{ label: string; heading: string; items?: string[]; narrative?: string }> = [
    { label: "HORIZON 1", heading: "Next 90 days", items: result.ninetyDayPriorities.slice(0, 5) },
    {
      label: "HORIZON 2",
      heading: "6 months",
      narrative: result.strategicFocus,
    },
    {
      label: "HORIZON 3",
      heading: "12 months",
      narrative: result.nextTwelveMonths,
    },
  ]

  cols.forEach((c, i) => {
    const x = MARGIN_X + i * (colW + gap)
    // card background
    fill(ctx, BG_SOFT)
    roundRect(ctx, x, startY, colW, colH, 6, "F")
    // accent top bar
    fill(ctx, ACCENT)
    rect(ctx, x, startY, colW, 3, "F")

    // label
    setFont(ctx, "bold", 7, ACCENT_DARK)
    ctx.doc.setCharSpace(1.5)
    ctx.doc.text(c.label, x + 16, startY + 22)
    ctx.doc.setCharSpace(0)
    // heading
    setFont(ctx, "bold", 14, CHARCOAL)
    ctx.doc.text(c.heading, x + 16, startY + 42)

    let y = startY + 64
    if (c.items) {
      setFont(ctx, "normal", 9.5, INK)
      c.items.forEach((it) => {
        const lines = ctx.doc.splitTextToSize(it, colW - 30) as string[]
        // bullet
        fill(ctx, ACCENT_DARK)
        ctx.doc.circle(x + 18, y - 2, 1.4, "F")
        setFont(ctx, "normal", 9.5, INK)
        lines.forEach((ln, li) => {
          if (y > startY + colH - 14) return
          ctx.doc.text(ln, x + 26, y)
          if (li < lines.length - 1) y += 12
        })
        y += 16
      })
    } else if (c.narrative) {
      setFont(ctx, "normal", 9.5, INK)
      const lines = ctx.doc.splitTextToSize(c.narrative, colW - 30) as string[]
      for (const ln of lines) {
        if (y > startY + colH - 16) break
        ctx.doc.text(ln, x + 16, y)
        y += 13
      }
    }
  })

  ctx.y = startY + colH + 20

  // Strategic focus narrative below
  ensureSpace(ctx, 80)
  hairline(ctx, ctx.y)
  ctx.y += 14
  subheading(ctx, "Why this sequence")
  paragraph(
    ctx,
    "The 90-day horizon is about building momentum and proof points — small enough to execute, visible enough to create organizational energy. The 6-month horizon consolidates that into a repeatable operating model. The 12-month horizon is about compounding: AI becomes part of how the business runs, not a series of projects.",
    { size: 10.5, leading: 15 },
  )
}

function buildRecommendations(ctx: Ctx, result: ScoreResult) {
  newPage(ctx, "Recommendations")
  sectionTitle(
    ctx,
    "05",
    "Prioritized recommendations",
    "Targeted guidance for the three dimensions where you have the most to gain. For each, we frame why it matters, what good looks like, and the concrete first steps.",
  )

  result.recommendations.forEach((rec, idx) => {
    ensureSpace(ctx, 180)
    // Card background
    const cardY = ctx.y
    const cardW = contentWidth(ctx)
    // We'll draw the card after we know its height; so first compute content and draw frame at the end.
    // Simpler: draw a fixed 12pt accent left strip and body separately.

    // Number badge + dim name
    fill(ctx, ACCENT)
    roundRect(ctx, MARGIN_X, cardY, 4, 26, 2, "F")
    setFont(ctx, "bold", 7, ACCENT_DARK)
    ctx.doc.setCharSpace(1.5)
    text(ctx, `RECOMMENDATION ${String(idx + 1).padStart(2, "0")}  ·  CURRENT SCORE ${rec.score}/100`, MARGIN_X + 14, cardY + 10)
    ctx.doc.setCharSpace(0)
    setFont(ctx, "bold", 15, CHARCOAL)
    text(ctx, `${rec.dimensionName} — ${rec.detail.headline}`, MARGIN_X + 14, cardY + 26)
    ctx.y = cardY + 42

    // Why / what / first-steps structured block
    setFont(ctx, "bold", 8, ACCENT_DARK)
    ctx.doc.setCharSpace(1.2)
    text(ctx, "WHY IT MATTERS", MARGIN_X + 14, ctx.y)
    ctx.doc.setCharSpace(0)
    ctx.y += 12
    paragraph(ctx, rec.detail.whyItMatters, { size: 10, leading: 14, x: MARGIN_X + 14, maxWidth: cardW - 14, gapAfter: 8 })

    setFont(ctx, "bold", 8, ACCENT_DARK)
    ctx.doc.setCharSpace(1.2)
    text(ctx, "WHAT GOOD LOOKS LIKE", MARGIN_X + 14, ctx.y)
    ctx.doc.setCharSpace(0)
    ctx.y += 12
    paragraph(ctx, rec.detail.whatGoodLooksLike, { size: 10, leading: 14, x: MARGIN_X + 14, maxWidth: cardW - 14, gapAfter: 8 })

    setFont(ctx, "bold", 8, ACCENT_DARK)
    ctx.doc.setCharSpace(1.2)
    text(ctx, "FIRST STEPS", MARGIN_X + 14, ctx.y)
    ctx.doc.setCharSpace(0)
    ctx.y += 10
    bulletList(ctx, rec.detail.firstSteps, { x: MARGIN_X + 14, maxWidth: cardW - 28, gapAfter: 8 })

    // separator between cards
    hairline(ctx, ctx.y)
    ctx.y += 14
  })
}

function buildHowToContinue(ctx: Ctx) {
  newPage(ctx, "How to continue")
  sectionTitle(
    ctx,
    "06",
    "How to continue",
    "This diagnostic is a starting point. The most common path to turning it into a plan is a structured workshop with your leadership team.",
  )

  const steps: Array<[string, string]> = [
    ["01", "Share this report with your executive team and align on the one or two priority dimensions for the next two quarters."],
    ["02", "Run an AI Readiness Workshop with AIdeology to pressure-test the score and shape a 90-day plan with named owners and KPIs."],
    ["03", "Commission targeted deep-dives on your weakest-scoring dimensions — typically data, governance, and MLOps."],
    ["04", "Translate the 90-day priorities into funded initiatives with explicit success metrics and review cadence."],
    ["05", "Re-take this assessment in 6 months to track progress and recalibrate the roadmap against measured outcomes."],
  ]

  steps.forEach(([n, s]) => {
    ensureSpace(ctx, 52)
    const y = ctx.y
    // number
    setFont(ctx, "bold", 22, ACCENT)
    text(ctx, n, MARGIN_X, y + 18)
    // divider
    stroke(ctx, HAIR, 0.4)
    line(ctx, MARGIN_X + 46, y + 6, MARGIN_X + 46, y + 36)
    // text
    setFont(ctx, "normal", 10.5, INK)
    const lines = ctx.doc.splitTextToSize(s, contentWidth(ctx) - 60) as string[]
    let ty = y + 14
    for (const l of lines) {
      text(ctx, l, MARGIN_X + 58, ty)
      ty += 14
    }
    ctx.y = Math.max(y + 42, ty + 4)
  })

  // CTA banner
  ensureSpace(ctx, 110)
  const bx = MARGIN_X
  const by = ctx.y + 6
  const bw = contentWidth(ctx)
  const bh = 104
  fill(ctx, BG_DARK)
  roundRect(ctx, bx, by, bw, bh, 8, "F")
  // accent stripe
  fill(ctx, ACCENT)
  rect(ctx, bx, by, 4, bh, "F")

  setFont(ctx, "bold", 8, ACCENT)
  ctx.doc.setCharSpace(1.5)
  text(ctx, "NEXT STEP", bx + 24, by + 22)
  ctx.doc.setCharSpace(0)
  setFont(ctx, "bold", 18, WHITE)
  text(ctx, "Turn this diagnostic into a funded 90-day plan.", bx + 24, by + 48)
  setFont(ctx, "normal", 10.5, [210, 210, 210])
  const ctaLines = ctx.doc.splitTextToSize(
    "Request an AI Readiness Workshop at aideology.ai/book-discovery-call?type=scorecard-workshop. We will align your leadership on the most important gaps and shape a practical 90-day plan.",
    bw - 48,
  ) as string[]
  let cy = by + 68
  for (const l of ctaLines) {
    text(ctx, l, bx + 24, cy)
    cy += 13
  }
  ctx.y = by + bh + 20
}

function buildAppendix(ctx: Ctx, result: ScoreResult) {
  newPage(ctx, "Appendix")
  sectionTitle(
    ctx,
    "07",
    "Appendix — methodology",
    "How we built your score, how to interpret it, and the dimension definitions behind the diagnostic.",
  )

  subheading(ctx, "How your score was calculated")
  paragraph(
    ctx,
    "The AI Readiness Scorecard evaluates 11 dimensions of enterprise AI adoption: Strategy, Data Quality, Talent, Technology, Governance, Culture, Use Case Prioritization, ROI Measurement, Security, Operational Readiness, and Ecosystem Partnerships.",
    { size: 10.5, leading: 15 },
  )
  paragraph(
    ctx,
    "Each dimension is assessed using 3–4 diagnostic questions on a 1–5 maturity scale. Dimension scores are the mean of their questions, normalized to a 0–100 scale. The overall score is an equal-weighted average of the 11 dimensions. Maturity stages are then mapped as follows:",
    { size: 10.5, leading: 15, gapAfter: 12 },
  )

  autoTable(ctx.doc, {
    startY: ctx.y,
    margin: { left: MARGIN_X, right: MARGIN_X },
    head: [["Overall score", "Maturity stage", "Posture"]],
    body: [
      ["0–35", "Beginner", "Exploring — isolated experiments, limited strategy"],
      ["36–55", "Developing", "Emerging — real pilots, uneven enablers"],
      ["56–72", "Emerging", "Scaling — platforms in place, governance maturing"],
      ["73–87", "Advanced", "Operating — enterprise-wide adoption, measurable ROI"],
      ["88–100", "AI Leader", "Transforming — AI core to strategy & operating model"],
    ],
    theme: "grid",
    styles: { font: "helvetica", fontSize: 9.5, cellPadding: 6, lineColor: BORDER, lineWidth: 0.3, textColor: INK },
    headStyles: { fillColor: CHARCOAL, textColor: WHITE, fontStyle: "bold", fontSize: 9, halign: "left" },
    columnStyles: { 0: { cellWidth: 84, fontStyle: "bold" }, 1: { cellWidth: 90, fontStyle: "bold" }, 2: { cellWidth: "auto" } },
  })
  // @ts-expect-error lastAutoTable populated at runtime
  ctx.y = (ctx.doc.lastAutoTable?.finalY ?? ctx.y) + 20

  subheading(ctx, "Your dimension scores — detail")
  autoTable(ctx.doc, {
    startY: ctx.y,
    margin: { left: MARGIN_X, right: MARGIN_X },
    head: [["Dimension", "Raw avg (1–5)", "Normalized (0–100)"]],
    body: result.perDimension.map((d) => [
      d.name,
      d.rawAverage.toFixed(2),
      String(Math.round(d.normalized)),
    ]),
    theme: "grid",
    styles: { font: "helvetica", fontSize: 9.5, cellPadding: 6, lineColor: BORDER, lineWidth: 0.3, textColor: INK },
    headStyles: { fillColor: CHARCOAL, textColor: WHITE, fontStyle: "bold", fontSize: 9 },
    columnStyles: { 0: { cellWidth: "auto", fontStyle: "bold" }, 1: { cellWidth: 90, halign: "right" }, 2: { cellWidth: 110, halign: "right" } },
  })
  // @ts-expect-error lastAutoTable populated at runtime
  ctx.y = (ctx.doc.lastAutoTable?.finalY ?? ctx.y) + 16

  paragraph(
    ctx,
    "This diagnostic is designed for executive conversation. It is directional, not audit-grade — the goal is to surface the right questions for your leadership team, not to produce a certified benchmark. Results should be interpreted alongside your industry, regulatory setting, size, and strategic priorities.",
    { size: 9.5, color: MUTED, leading: 13, gapAfter: 6 },
  )
}

// ─────────────────────────────────────────────────────────────────────────
// Orchestration
// ─────────────────────────────────────────────────────────────────────────

export interface BuiltScorecardPDF {
  doc: jsPDF
  fileName: string
}

function buildScorecardPDF(result: ScoreResult, lead: LeadInfo | null): BuiltScorecardPDF {
  const doc = new jsPDF({ unit: "pt", format: "a4" })
  const ctx: Ctx = {
    doc,
    w: doc.internal.pageSize.getWidth(),
    h: doc.internal.pageSize.getHeight(),
    y: MARGIN_TOP,
    page: 1,
    section: "Cover",
    totalPages: 0,
  }

  buildCover(ctx, lead, result)
  buildContents(ctx)
  buildExecutiveSummary(ctx, lead, result)
  buildDimensionAnalysis(ctx, result)
  buildStrengthsGaps(ctx, result)
  buildStrategicRoadmap(ctx, result)
  buildRecommendations(ctx, result)
  buildHowToContinue(ctx)
  buildAppendix(ctx, result)

  const safeCompany = (lead?.company ?? "organization")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
  const fileName = `ai-readiness-report-${safeCompany || "report"}-${result.stage.toLowerCase().replace(/\s+/g, "-")}.pdf`
  return { doc, fileName }
}

export async function generateScorecardPDF(result: ScoreResult, lead: LeadInfo | null) {
  const { doc, fileName } = buildScorecardPDF(result, lead)
  doc.save(fileName)
}

export function buildScorecardPDFBase64(result: ScoreResult, lead: LeadInfo | null): { base64: string; fileName: string } {
  const { doc, fileName } = buildScorecardPDF(result, lead)
  const dataUri = doc.output("datauristring")
  const base64 = dataUri.split("base64,").pop() ?? ""
  return { base64, fileName }
}

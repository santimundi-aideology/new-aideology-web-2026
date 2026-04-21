import jsPDF from "jspdf"
import autoTable from "jspdf-autotable"
import type { LeadInfo, ScoreResult } from "./scorecard-utils"

// AIdeology brand colors
const ACCENT: [number, number, number] = [159, 206, 77] // accent-green
const CHARCOAL: [number, number, number] = [31, 31, 31]
const LIGHT: [number, number, number] = [244, 244, 244]
const MUTED: [number, number, number] = [107, 114, 128]
const BORDER: [number, number, number] = [229, 231, 235]

const MARGIN = 48
const LINE_HEIGHT = 14

interface PDFContext {
  doc: jsPDF
  pageWidth: number
  pageHeight: number
  cursorY: number
  pageNumber: number
}

function drawHeader(ctx: PDFContext, lead: LeadInfo | null, result: ScoreResult) {
  const { doc, pageWidth } = ctx
  doc.setFillColor(...LIGHT)
  doc.rect(0, 0, pageWidth, 36, "F")
  doc.setFont("helvetica", "bold")
  doc.setFontSize(9)
  doc.setTextColor(...CHARCOAL)
  doc.text("AI READINESS SCORECARD", MARGIN, 22)

  const rightText = lead?.company
    ? `${lead.company}  ·  ${result.stage}  ·  ${result.overall}/100`
    : `${result.stage}  ·  ${result.overall}/100`
  doc.setFont("helvetica", "normal")
  doc.setFontSize(9)
  doc.setTextColor(...MUTED)
  doc.text(rightText, pageWidth - MARGIN, 22, { align: "right" })

  doc.setDrawColor(...BORDER)
  doc.setLineWidth(0.5)
  doc.line(MARGIN, 36, pageWidth - MARGIN, 36)
  ctx.cursorY = 56
}

function drawFooter(ctx: PDFContext) {
  const { doc, pageWidth, pageHeight, pageNumber } = ctx
  doc.setDrawColor(...BORDER)
  doc.setLineWidth(0.5)
  doc.line(MARGIN, pageHeight - 36, pageWidth - MARGIN, pageHeight - 36)
  doc.setFont("helvetica", "normal")
  doc.setFontSize(8)
  doc.setTextColor(...MUTED)
  doc.text("AIdeology  ·  aideology.ai  ·  Confidential", MARGIN, pageHeight - 20)
  doc.text(`Page ${pageNumber}`, pageWidth - MARGIN, pageHeight - 20, { align: "right" })
}

function ensureSpace(ctx: PDFContext, needed: number) {
  if (ctx.cursorY + needed > ctx.pageHeight - 60) {
    drawFooter(ctx)
    ctx.doc.addPage()
    ctx.pageNumber += 1
    // Headers are only on first page; interior pages keep it minimal
    ctx.doc.setFillColor(...LIGHT)
    ctx.doc.rect(0, 0, ctx.pageWidth, 28, "F")
    ctx.doc.setFont("helvetica", "bold")
    ctx.doc.setFontSize(8)
    ctx.doc.setTextColor(...CHARCOAL)
    ctx.doc.text("AI READINESS SCORECARD", MARGIN, 18)
    ctx.cursorY = 48
  }
}

function heading(ctx: PDFContext, text: string, size = 14) {
  ensureSpace(ctx, size + 10)
  ctx.doc.setFont("helvetica", "bold")
  ctx.doc.setFontSize(size)
  ctx.doc.setTextColor(...CHARCOAL)
  ctx.doc.text(text, MARGIN, ctx.cursorY)
  ctx.cursorY += size + 6
}

function eyebrow(ctx: PDFContext, text: string) {
  ensureSpace(ctx, 14)
  ctx.doc.setFont("helvetica", "bold")
  ctx.doc.setFontSize(8)
  ctx.doc.setTextColor(...ACCENT)
  ctx.doc.text(text.toUpperCase(), MARGIN, ctx.cursorY)
  ctx.cursorY += 14
}

function paragraph(
  ctx: PDFContext,
  text: string,
  opts: { size?: number; color?: [number, number, number]; bold?: boolean; gapAfter?: number } = {},
) {
  const size = opts.size ?? 10
  const color = opts.color ?? CHARCOAL
  const gapAfter = opts.gapAfter ?? 10
  ctx.doc.setFont("helvetica", opts.bold ? "bold" : "normal")
  ctx.doc.setFontSize(size)
  ctx.doc.setTextColor(...color)
  const maxWidth = ctx.pageWidth - MARGIN * 2
  const lines = ctx.doc.splitTextToSize(text, maxWidth) as string[]
  for (const line of lines) {
    ensureSpace(ctx, LINE_HEIGHT)
    ctx.doc.text(line, MARGIN, ctx.cursorY)
    ctx.cursorY += LINE_HEIGHT
  }
  ctx.cursorY += gapAfter
}

function bulletList(ctx: PDFContext, items: string[], opts: { gapAfter?: number } = {}) {
  ctx.doc.setFont("helvetica", "normal")
  ctx.doc.setFontSize(10)
  ctx.doc.setTextColor(...CHARCOAL)
  const maxWidth = ctx.pageWidth - MARGIN * 2 - 14
  for (const item of items) {
    const lines = ctx.doc.splitTextToSize(item, maxWidth) as string[]
    ensureSpace(ctx, LINE_HEIGHT * lines.length + 2)
    // bullet
    ctx.doc.setFillColor(...ACCENT)
    ctx.doc.circle(MARGIN + 3, ctx.cursorY - 3, 1.6, "F")
    lines.forEach((l, idx) => {
      ctx.doc.text(l, MARGIN + 14, ctx.cursorY)
      if (idx < lines.length - 1) ctx.cursorY += LINE_HEIGHT
    })
    ctx.cursorY += LINE_HEIGHT
  }
  ctx.cursorY += opts.gapAfter ?? 8
}

function divider(ctx: PDFContext) {
  ensureSpace(ctx, 20)
  ctx.doc.setDrawColor(...BORDER)
  ctx.doc.setLineWidth(0.5)
  ctx.doc.line(MARGIN, ctx.cursorY, ctx.pageWidth - MARGIN, ctx.cursorY)
  ctx.cursorY += 16
}

function scoreBadge(ctx: PDFContext, overall: number, stage: string) {
  const { doc, pageWidth } = ctx
  const boxW = 160
  const boxH = 90
  const x = pageWidth - MARGIN - boxW
  const y = ctx.cursorY - 48

  // Card background
  doc.setFillColor(255, 255, 255)
  doc.setDrawColor(...BORDER)
  doc.setLineWidth(0.8)
  doc.roundedRect(x, y, boxW, boxH, 6, 6, "FD")

  // Score big number
  doc.setFont("helvetica", "bold")
  doc.setFontSize(36)
  doc.setTextColor(...CHARCOAL)
  doc.text(String(overall), x + 16, y + 44)
  doc.setFont("helvetica", "normal")
  doc.setFontSize(10)
  doc.setTextColor(...MUTED)
  doc.text("/ 100", x + 64, y + 44)

  // Stage chip
  doc.setFillColor(...ACCENT)
  doc.roundedRect(x + 16, y + 56, boxW - 32, 22, 11, 11, "F")
  doc.setFont("helvetica", "bold")
  doc.setFontSize(10)
  doc.setTextColor(...CHARCOAL)
  doc.text(stage.toUpperCase(), x + boxW / 2, y + 71, { align: "center" })
}

export async function generateScorecardPDF(
  result: ScoreResult,
  lead: LeadInfo | null,
  radarSvgElement?: SVGSVGElement | null,
) {
  const doc = new jsPDF({ unit: "pt", format: "a4" })
  const ctx: PDFContext = {
    doc,
    pageWidth: doc.internal.pageSize.getWidth(),
    pageHeight: doc.internal.pageSize.getHeight(),
    cursorY: 0,
    pageNumber: 1,
  }

  // ── COVER ─────────────────────────────────────────────────────────────
  drawHeader(ctx, lead, result)

  const today = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  eyebrow(ctx, "AI Readiness Report")

  // Title
  doc.setFont("helvetica", "bold")
  doc.setFontSize(22)
  doc.setTextColor(...CHARCOAL)
  const titleLines = doc.splitTextToSize(
    `Your organization is at the ${result.stage} stage.`,
    ctx.pageWidth - MARGIN * 2 - 180,
  ) as string[]
  for (const l of titleLines) {
    ensureSpace(ctx, 26)
    doc.text(l, MARGIN, ctx.cursorY)
    ctx.cursorY += 26
  }

  scoreBadge(ctx, result.overall, result.stage)

  ctx.cursorY += 10
  paragraph(ctx, result.stageHeadline, { size: 12, color: MUTED, gapAfter: 8 })

  // Meta line
  const metaLine = [
    lead?.fullName,
    lead?.company,
    lead?.industry,
    lead?.role,
    today,
  ]
    .filter(Boolean)
    .join("  ·  ")
  if (metaLine) {
    paragraph(ctx, metaLine, { size: 9, color: MUTED, gapAfter: 16 })
  }

  divider(ctx)

  // ── EXECUTIVE SUMMARY ────────────────────────────────────────────────
  eyebrow(ctx, "Executive Summary")
  paragraph(ctx, result.executiveSummary, { size: 11, gapAfter: 8 })
  paragraph(ctx, result.balance.summary, { size: 11, color: MUTED, gapAfter: 8 })
  if (result.keyInsight) {
    paragraph(ctx, `Key insight — ${result.keyInsight}`, { size: 11, bold: true, gapAfter: 14 })
  }

  // ── SCORECARD TABLE ──────────────────────────────────────────────────
  ensureSpace(ctx, 100)
  eyebrow(ctx, "Scorecard")

  const tableRows = [...result.perDimension]
    .sort((a, b) => b.normalized - a.normalized)
    .map((d) => [d.name, `${Math.round(d.normalized)} / 100`, barString(d.normalized)])

  autoTable(doc, {
    startY: ctx.cursorY,
    margin: { left: MARGIN, right: MARGIN },
    head: [["Dimension", "Score", "Maturity"]],
    body: tableRows,
    theme: "grid",
    styles: {
      font: "helvetica",
      fontSize: 10,
      cellPadding: 6,
      lineColor: BORDER,
      lineWidth: 0.3,
      textColor: CHARCOAL,
    },
    headStyles: {
      fillColor: CHARCOAL,
      textColor: [255, 255, 255],
      fontStyle: "bold",
      fontSize: 9,
    },
    alternateRowStyles: { fillColor: [250, 250, 250] },
    columnStyles: {
      0: { cellWidth: 160, fontStyle: "bold" },
      1: { cellWidth: 80, halign: "right" },
      2: { cellWidth: "auto" },
    },
  })
  // @ts-expect-error lastAutoTable is populated by jspdf-autotable at runtime
  ctx.cursorY = (doc.lastAutoTable?.finalY ?? ctx.cursorY) + 20

  // ── STRENGTHS & WEAKNESSES ───────────────────────────────────────────
  ensureSpace(ctx, 120)
  eyebrow(ctx, "Strengths")
  paragraph(
    ctx,
    `Your organization is strongest in ${result.strongest[0]?.name ?? "—"}. Top three dimensions:`,
    { size: 11, gapAfter: 6 },
  )
  bulletList(
    ctx,
    result.strongest.map((s) => `${s.name} — ${Math.round(s.normalized)}/100`),
    { gapAfter: 12 },
  )

  ensureSpace(ctx, 120)
  eyebrow(ctx, "Biggest Improvement Opportunities")
  paragraph(
    ctx,
    `Your lowest-scoring area is ${result.weakest[0]?.name ?? "—"}. These three dimensions will have the highest leverage over the next two quarters:`,
    { size: 11, gapAfter: 6 },
  )
  bulletList(
    ctx,
    result.weakest.map((w) => `${w.name} — ${Math.round(w.normalized)}/100`),
    { gapAfter: 16 },
  )

  // ── STRATEGIC FOCUS / 90-DAY / 12 MONTHS ─────────────────────────────
  doc.addPage()
  ctx.pageNumber += 1
  ctx.cursorY = 0
  drawHeader(ctx, lead, result)

  eyebrow(ctx, "Strategic Focus for the Next 6 Months")
  paragraph(ctx, result.strategicFocus, { size: 12, gapAfter: 16 })

  eyebrow(ctx, "90-Day Priorities")
  paragraph(
    ctx,
    "Concrete moves to make in the next 90 days, based on your stage and the weakest-scoring dimensions.",
    { size: 10, color: MUTED, gapAfter: 6 },
  )
  bulletList(ctx, result.ninetyDayPriorities, { gapAfter: 16 })

  eyebrow(ctx, "What Good Looks Like in 12 Months")
  paragraph(ctx, result.nextTwelveMonths, { size: 11, gapAfter: 20 })

  divider(ctx)

  // ── DETAILED RECOMMENDATIONS ─────────────────────────────────────────
  eyebrow(ctx, "Prioritized Recommendations")
  paragraph(
    ctx,
    "Targeted guidance for the three dimensions where you have the most to gain. Each one includes why it matters, what good looks like, and the first practical steps.",
    { size: 10, color: MUTED, gapAfter: 14 },
  )

  result.recommendations.forEach((rec, idx) => {
    ensureSpace(ctx, 100)
    // Card-ish title row
    doc.setFont("helvetica", "bold")
    doc.setFontSize(11)
    doc.setTextColor(...CHARCOAL)
    doc.text(
      `${idx + 1}. ${rec.dimensionName}  —  ${rec.detail.headline}`,
      MARGIN,
      ctx.cursorY,
    )
    ctx.cursorY += 16

    doc.setFont("helvetica", "normal")
    doc.setFontSize(9)
    doc.setTextColor(...MUTED)
    doc.text(`Current score: ${rec.score}/100`, MARGIN, ctx.cursorY)
    ctx.cursorY += 12

    paragraph(ctx, `Why it matters — ${rec.detail.whyItMatters}`, {
      size: 10,
      gapAfter: 6,
    })
    paragraph(ctx, `What good looks like — ${rec.detail.whatGoodLooksLike}`, {
      size: 10,
      gapAfter: 6,
    })
    paragraph(ctx, "First steps:", { size: 10, bold: true, gapAfter: 4 })
    bulletList(ctx, rec.detail.firstSteps, { gapAfter: 16 })
  })

  // ── HOW TO CONTINUE ──────────────────────────────────────────────────
  ensureSpace(ctx, 200)
  divider(ctx)
  eyebrow(ctx, "How to Continue")
  paragraph(
    ctx,
    "This scorecard is a diagnostic. To turn it into a plan, we recommend a structured next step tailored to your stage.",
    { size: 11, gapAfter: 10 },
  )

  bulletList(
    ctx,
    [
      "Share this report with your executive team and align on the one or two priority dimensions.",
      "Run an AI Readiness Workshop with AIdeology to pressure-test the score and shape a 90-day plan.",
      "Commission targeted deep-dives on your weakest-scoring dimensions (data, governance, MLOps).",
      "Translate the 90-day priorities into funded initiatives with named owners and KPIs.",
      "Re-take this assessment in 6 months to track progress and recalibrate the roadmap.",
    ],
    { gapAfter: 14 },
  )

  ensureSpace(ctx, 90)
  doc.setFillColor(...CHARCOAL)
  doc.roundedRect(
    MARGIN,
    ctx.cursorY,
    ctx.pageWidth - MARGIN * 2,
    70,
    6,
    6,
    "F",
  )
  doc.setFont("helvetica", "bold")
  doc.setFontSize(13)
  doc.setTextColor(255, 255, 255)
  doc.text("Turn this diagnostic into a plan.", MARGIN + 16, ctx.cursorY + 24)
  doc.setFont("helvetica", "normal")
  doc.setFontSize(10)
  doc.setTextColor(230, 230, 230)
  const ctaLines = doc.splitTextToSize(
    "Request an AI Readiness Workshop with AIdeology. We will align your leadership on the most important gaps and shape a practical 90-day plan.",
    ctx.pageWidth - MARGIN * 2 - 32,
  ) as string[]
  let cy = ctx.cursorY + 40
  for (const l of ctaLines) {
    doc.text(l, MARGIN + 16, cy)
    cy += 12
  }
  ctx.cursorY += 80

  // ── APPENDIX: METHODOLOGY ───────────────────────────────────────────
  doc.addPage()
  ctx.pageNumber += 1
  ctx.cursorY = 0
  drawHeader(ctx, lead, result)

  eyebrow(ctx, "Appendix  ·  Methodology")
  heading(ctx, "How your score was calculated", 13)
  paragraph(
    ctx,
    "The AI Readiness Scorecard evaluates 11 dimensions of enterprise AI adoption: Strategy, Data Quality, Talent, Technology, Governance, Culture, Use Case Prioritization, ROI Measurement, Security, Operational Readiness, and Ecosystem Partnerships.",
    { gapAfter: 8 },
  )
  paragraph(
    ctx,
    "Each dimension is assessed using 3–4 diagnostic questions on a 1–5 maturity scale. Dimension scores are the mean of their questions, normalized to a 0–100 scale. The overall score is an equal-weighted average of the 11 dimensions. Maturity stages are then mapped as follows:",
    { gapAfter: 10 },
  )

  autoTable(doc, {
    startY: ctx.cursorY,
    margin: { left: MARGIN, right: MARGIN },
    head: [["Overall score", "Maturity stage"]],
    body: [
      ["0 – 35", "Beginner"],
      ["36 – 55", "Developing"],
      ["56 – 72", "Emerging"],
      ["73 – 87", "Advanced"],
      ["88 – 100", "AI Leader"],
    ],
    theme: "grid",
    styles: { font: "helvetica", fontSize: 10, cellPadding: 6, lineColor: BORDER, textColor: CHARCOAL },
    headStyles: { fillColor: CHARCOAL, textColor: [255, 255, 255], fontStyle: "bold" },
    columnStyles: { 0: { cellWidth: 140 }, 1: { cellWidth: "auto" } },
  })
  // @ts-expect-error lastAutoTable is populated at runtime
  ctx.cursorY = (doc.lastAutoTable?.finalY ?? ctx.cursorY) + 14

  paragraph(
    ctx,
    "This diagnostic is designed for executive conversation. It is directional, not audit-grade: the goal is to surface the right discussion, not to produce a certified benchmark.",
    { size: 10, color: MUTED, gapAfter: 8 },
  )
  paragraph(
    ctx,
    "Results are indicative and should be interpreted with your organization's specific context — industry, regulatory setting, company size, and strategic priorities.",
    { size: 10, color: MUTED, gapAfter: 20 },
  )

  void radarSvgElement

  drawFooter(ctx)

  const safeCompany = (lead?.company ?? "organization")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
  const fileName = `ai-readiness-scorecard-${safeCompany || "report"}-${result.stage.toLowerCase().replace(/\s+/g, "-")}.pdf`
  doc.save(fileName)
}

function barString(score: number): string {
  const filled = Math.round((score / 100) * 10)
  return "█".repeat(filled) + "░".repeat(10 - filled) + `  ${Math.round(score)}`
}

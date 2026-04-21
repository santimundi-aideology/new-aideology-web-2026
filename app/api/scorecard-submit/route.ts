import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const LeadSchema = z.object({
  fullName: z.string().min(1),
  company: z.string().min(1),
  email: z.string().email(),
  industry: z.string().min(1),
  role: z.string().min(1),
})

const DimensionScoreSchema = z.object({
  id: z.string(),
  name: z.string(),
  rawAverage: z.number(),
  normalized: z.number(),
})

const ScoreResultSchema = z.object({
  overall: z.number(),
  stage: z.string(),
  stageHeadline: z.string().optional(),
  stageBlurb: z.string().optional(),
  executiveSummary: z.string().optional(),
  strategicFocus: z.string().optional(),
  ninetyDayPriorities: z.array(z.string()).optional(),
  nextTwelveMonths: z.string().optional(),
  keyInsight: z.string().optional(),
  balance: z
    .object({
      spread: z.number(),
      label: z.string(),
      summary: z.string(),
    })
    .optional(),
  perDimension: z.array(DimensionScoreSchema),
  strongest: z.array(DimensionScoreSchema),
  weakest: z.array(DimensionScoreSchema),
  recommendations: z.array(z.any()),
})

const SubmitSchema = z.object({
  lead: LeadSchema,
  scores: ScoreResultSchema,
  pdfBase64: z.string().min(100),
  pdfFileName: z.string().min(1),
})

const TO_EMAILS = ["smundi@aideology.ai", "jcolotto@aideology.ai"]
const FROM_EMAIL =
  process.env.SCORECARD_FROM_EMAIL ??
  "AIdeology Scorecard <scorecard@aideology.ai>"

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

function buildInternalHtml(params: {
  lead: z.infer<typeof LeadSchema>
  scores: z.infer<typeof ScoreResultSchema>
}): string {
  const { lead, scores } = params
  const perDimRows = [...scores.perDimension]
    .sort((a, b) => b.normalized - a.normalized)
    .map(
      (d) =>
        `<tr><td style="padding:6px 10px;border-bottom:1px solid #eee;font-family:Helvetica,Arial,sans-serif;font-size:13px;">${escapeHtml(
          d.name,
        )}</td><td style="padding:6px 10px;border-bottom:1px solid #eee;font-family:Helvetica,Arial,sans-serif;font-size:13px;text-align:right;"><strong>${Math.round(
          d.normalized,
        )}</strong> / 100</td></tr>`,
    )
    .join("")

  const strongest = scores.strongest
    .map((s) => `${escapeHtml(s.name)} (${Math.round(s.normalized)})`)
    .join(", ")
  const weakest = scores.weakest
    .map((s) => `${escapeHtml(s.name)} (${Math.round(s.normalized)})`)
    .join(", ")

  return `
  <div style="font-family:Helvetica,Arial,sans-serif;color:#1f1f1f;max-width:640px;margin:0 auto;">
    <div style="background:#1f1f1f;color:#fff;padding:20px 24px;border-radius:10px 10px 0 0;">
      <div style="font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#9fce4d;">AI Readiness Scorecard</div>
      <h1 style="margin:6px 0 0 0;font-size:22px;">New scorecard submission</h1>
      <p style="margin:4px 0 0 0;color:#cccccc;font-size:13px;">A new prospect has completed the AI Readiness Scorecard on aideology.ai.</p>
    </div>
    <div style="background:#fff;border:1px solid #e5e7eb;border-top:none;padding:24px;border-radius:0 0 10px 10px;">
      <h2 style="font-size:14px;margin:0 0 10px 0;text-transform:uppercase;letter-spacing:0.14em;color:#9fce4d;">Contact</h2>
      <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
        <tr><td style="padding:4px 0;width:120px;color:#6b7280;font-size:13px;">Name</td><td style="padding:4px 0;font-size:14px;"><strong>${escapeHtml(
          lead.fullName,
        )}</strong></td></tr>
        <tr><td style="padding:4px 0;color:#6b7280;font-size:13px;">Company</td><td style="padding:4px 0;font-size:14px;"><strong>${escapeHtml(
          lead.company,
        )}</strong></td></tr>
        <tr><td style="padding:4px 0;color:#6b7280;font-size:13px;">Email</td><td style="padding:4px 0;font-size:14px;"><a href="mailto:${escapeHtml(
          lead.email,
        )}" style="color:#1f1f1f;">${escapeHtml(lead.email)}</a></td></tr>
        <tr><td style="padding:4px 0;color:#6b7280;font-size:13px;">Industry</td><td style="padding:4px 0;font-size:14px;">${escapeHtml(
          lead.industry,
        )}</td></tr>
        <tr><td style="padding:4px 0;color:#6b7280;font-size:13px;">Role</td><td style="padding:4px 0;font-size:14px;">${escapeHtml(
          lead.role,
        )}</td></tr>
      </table>

      <h2 style="font-size:14px;margin:0 0 10px 0;text-transform:uppercase;letter-spacing:0.14em;color:#9fce4d;">Result</h2>
      <div style="display:flex;align-items:center;gap:16px;margin-bottom:16px;">
        <div style="font-size:40px;font-weight:700;line-height:1;">${scores.overall}<span style="font-size:14px;color:#6b7280;font-weight:400;">/100</span></div>
        <div style="padding:6px 12px;border-radius:999px;background:#9fce4d22;color:#1f1f1f;font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;">${escapeHtml(
          scores.stage,
        )}</div>
      </div>
      ${
        scores.keyInsight
          ? `<p style="font-size:13px;line-height:1.55;color:#374151;margin:0 0 16px 0;"><strong>Key insight &mdash; </strong>${escapeHtml(
              scores.keyInsight,
            )}</p>`
          : ""
      }

      <table style="width:100%;border-collapse:collapse;margin-bottom:18px;border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
        <thead>
          <tr style="background:#1f1f1f;color:#fff;">
            <th style="padding:8px 10px;text-align:left;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;">Dimension</th>
            <th style="padding:8px 10px;text-align:right;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;">Score</th>
          </tr>
        </thead>
        <tbody>${perDimRows}</tbody>
      </table>

      <p style="font-size:13px;line-height:1.55;color:#374151;margin:0 0 6px 0;"><strong>Strongest:</strong> ${strongest}</p>
      <p style="font-size:13px;line-height:1.55;color:#374151;margin:0 0 16px 0;"><strong>Weakest:</strong> ${weakest}</p>

      <p style="font-size:13px;line-height:1.55;color:#6b7280;margin:0;">The full executive report is attached as a PDF.</p>
    </div>
    <p style="font-size:11px;color:#9ca3af;text-align:center;margin-top:16px;">Submitted via aideology.ai &middot; AI Readiness Scorecard</p>
  </div>`
}

function buildCustomerHtml(params: {
  lead: z.infer<typeof LeadSchema>
  scores: z.infer<typeof ScoreResultSchema>
}): string {
  const { lead, scores } = params
  return `
  <div style="font-family:Helvetica,Arial,sans-serif;color:#1f1f1f;max-width:640px;margin:0 auto;">
    <div style="background:#1f1f1f;color:#fff;padding:22px 24px;border-radius:10px 10px 0 0;">
      <div style="font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#9fce4d;">AI Readiness Scorecard</div>
      <h1 style="margin:6px 0 0 0;font-size:22px;">Your AI Readiness report is ready</h1>
    </div>
    <div style="background:#fff;border:1px solid #e5e7eb;border-top:none;padding:24px;border-radius:0 0 10px 10px;">
      <p style="font-size:14px;line-height:1.6;margin:0 0 14px 0;">Hi ${escapeHtml(
        lead.fullName.split(" ")[0] || lead.fullName,
      )},</p>
      <p style="font-size:14px;line-height:1.6;margin:0 0 14px 0;">
        Thank you for completing the AI Readiness Scorecard. Your executive report is attached as a PDF.
      </p>
      <div style="display:flex;align-items:center;gap:16px;margin:18px 0;">
        <div style="font-size:40px;font-weight:700;line-height:1;">${scores.overall}<span style="font-size:14px;color:#6b7280;font-weight:400;">/100</span></div>
        <div style="padding:6px 12px;border-radius:999px;background:#9fce4d22;color:#1f1f1f;font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;">${escapeHtml(
          scores.stage,
        )}</div>
      </div>
      <p style="font-size:14px;line-height:1.6;margin:0 0 14px 0;">
        The report includes your maturity stage, a full breakdown across 11 dimensions, prioritized recommendations, and a 90-day plan tailored to your current stage.
      </p>
      <p style="font-size:14px;line-height:1.6;margin:0 0 24px 0;">
        If you would like to turn this diagnostic into a concrete plan, we run focused AI Readiness Workshops to help leadership teams close their highest-leverage gaps.
      </p>
      <p style="margin:24px 0 0 0;">
        <a href="https://www.aideology.ai/book-discovery-call?type=scorecard-workshop" style="display:inline-block;background:#9fce4d;color:#1f1f1f;text-decoration:none;font-weight:600;padding:12px 20px;border-radius:8px;font-size:14px;">Request an AI Readiness Workshop &rarr;</a>
      </p>
      <p style="font-size:12px;line-height:1.5;color:#6b7280;margin:28px 0 0 0;">
        AIdeology &middot; aideology.ai &middot; Dubai, UAE<br />
        You are receiving this email because you completed the AI Readiness Scorecard on aideology.ai.
      </p>
    </div>
  </div>`
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const parsed = SubmitSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid payload",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      )
    }

    const { lead, scores, pdfBase64, pdfFileName } = parsed.data

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.warn(
        "RESEND_API_KEY is not set. Scorecard submission was accepted but no email was sent.",
      )
      return NextResponse.json(
        { success: true, message: "Received (email disabled: missing API key)", emailSent: false },
        { status: 200 },
      )
    }

    // Lazy-load Resend inside the handler to keep static export build happy.
    const { Resend } = await import("resend")
    const resend = new Resend(apiKey)

    const subject = `AI Readiness Scorecard · ${lead.company} · ${scores.overall}/100 (${scores.stage})`

    const internalHtml = buildInternalHtml({ lead, scores })
    const customerHtml = buildCustomerHtml({ lead, scores })

    const attachment = {
      filename: pdfFileName,
      content: pdfBase64,
    }

    const internalResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAILS,
      replyTo: lead.email,
      subject,
      html: internalHtml,
      attachments: [attachment],
    })

    if (internalResult.error) {
      console.error("Resend (internal) error:", internalResult.error)
      return NextResponse.json(
        {
          success: false,
          message: "Email delivery failed",
          error: internalResult.error.message ?? String(internalResult.error),
        },
        { status: 502 },
      )
    }

    try {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: [lead.email],
        bcc: TO_EMAILS,
        subject: "Your AI Readiness Scorecard report",
        html: customerHtml,
        attachments: [attachment],
      })
    } catch (err) {
      console.warn("Resend (customer copy) failed:", err)
    }

    return NextResponse.json({
      success: true,
      message: "Scorecard submitted and emailed.",
      emailSent: true,
      id: internalResult.data?.id ?? null,
    })
  } catch (err) {
    console.error("scorecard-submit error:", err)
    return NextResponse.json(
      {
        success: false,
        message: "Unexpected server error",
      },
      { status: 500 },
    )
  }
}

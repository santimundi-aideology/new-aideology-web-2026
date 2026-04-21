"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Lock } from "lucide-react"
import { industries, roles } from "./scorecard-config"
import type { LeadInfo } from "./scorecard-utils"

interface Props {
  onSubmit: (lead: LeadInfo) => Promise<void> | void
  submitting?: boolean
  initial?: LeadInfo | null
}

export default function ScorecardLeadForm({ onSubmit, submitting, initial }: Props) {
  const [form, setForm] = useState<LeadInfo>(
    initial ?? {
      fullName: "",
      company: "",
      email: "",
      industry: "",
      role: "",
    },
  )
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
  const canSubmit =
    form.fullName.trim().length > 1 &&
    form.company.trim().length > 1 &&
    emailValid &&
    form.industry !== "" &&
    form.role !== ""

  const set = <K extends keyof LeadInfo>(key: K, value: LeadInfo[K]) => {
    setForm((f) => ({ ...f, [key]: value }))
  }

  return (
    <section className="pt-24 pb-16 md:pt-28 bg-[#f4f4f4] min-h-dvh">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-xl">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg md:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-green/15 text-accent-green">
                <Lock className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-charcoal md:text-2xl">
                  Unlock your results
                </h2>
                <p className="text-sm text-gray-500">
                  Share a few details and we&apos;ll open your full AI readiness report.
                </p>
              </div>
            </div>

            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
                if (canSubmit && !submitting) onSubmit(form)
              }}
            >
              <Field
                label="Full name"
                value={form.fullName}
                onChange={(v) => set("fullName", v)}
                onBlur={() => setTouched((t) => ({ ...t, fullName: true }))}
                error={touched.fullName && form.fullName.trim().length <= 1 ? "Required" : ""}
              />
              <Field
                label="Company"
                value={form.company}
                onChange={(v) => set("company", v)}
                onBlur={() => setTouched((t) => ({ ...t, company: true }))}
                error={touched.company && form.company.trim().length <= 1 ? "Required" : ""}
              />
              <Field
                label="Work email"
                type="email"
                value={form.email}
                onChange={(v) => set("email", v)}
                onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                error={touched.email && !emailValid ? "Enter a valid email" : ""}
              />
              <SelectField
                label="Industry"
                value={form.industry}
                onChange={(v) => set("industry", v)}
                options={industries}
                placeholder="Select your industry"
              />
              <SelectField
                label="Role"
                value={form.role}
                onChange={(v) => set("role", v)}
                options={roles}
                placeholder="Select your role"
              />

              <Button
                type="submit"
                disabled={!canSubmit || submitting}
                className="w-full bg-accent-green text-charcoal font-semibold hover:bg-charcoal hover:text-white transition-all duration-300 disabled:opacity-50"
              >
                {submitting ? "Generating your report..." : "View my results"}
                {!submitting && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>

              <p className="text-center text-[11px] text-gray-500">
                By submitting, you agree to be contacted about your results and related advisory
                services. We will not share your details with third parties.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  value,
  onChange,
  onBlur,
  error,
  type = "text",
}: {
  label: string
  value: string
  onChange: (v: string) => void
  onBlur?: () => void
  error?: string
  type?: string
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-gray-600">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        className={`w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-charcoal outline-none transition-colors focus:border-accent-green ${
          error ? "border-red-400" : "border-gray-200"
        }`}
      />
      {error && <span className="mt-1 block text-[11px] text-red-500">{error}</span>}
    </label>
  )
}

function SelectField({
  label,
  value,
  onChange,
  options,
  placeholder,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  options: string[]
  placeholder: string
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-gray-600">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-charcoal outline-none transition-colors focus:border-accent-green"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  )
}

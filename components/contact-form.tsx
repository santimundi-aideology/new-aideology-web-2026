"use client"

import type React from "react"

import { useActionState } from "react" // Corrected: useActionState from 'react'
import { useFormStatus } from "react-dom" // Corrected: useFormStatus from 'react-dom'
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { submitContactForm } from "@/app/contact/actions"
import { AlertCircle, CheckCircle2, Loader2, User, Mail, Building, FileText, MessageSquare } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface FormFieldProps {
  id: string
  label: string
  type?: string
  placeholder?: string
  required?: boolean
  icon?: React.ElementType
  component?: "input" | "textarea"
}

const FormField: React.FC<FormFieldProps & { error?: string }> = ({
  id,
  label,
  type = "text",
  placeholder,
  required = false,
  icon: Icon,
  component = "input",
  error,
}) => (
  <div className="space-y-2">
    <Label htmlFor={id} className="flex items-center text-gray-700 font-medium">
      {Icon && <Icon className="w-4 h-4 mr-2 text-gray-500" />}
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </Label>
    <div className="relative">
      {component === "input" ? (
        <Input
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          required={required}
          className={`${error ? "border-red-500 focus:border-red-500" : "border-gray-300"}`}
        />
      ) : (
        <Textarea
          id={id}
          name={id}
          placeholder={placeholder}
          required={required}
          rows={5}
          className={`${error ? "border-red-500 focus:border-red-500" : "border-gray-300"}`}
        />
      )}
    </div>
    {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
  </div>
)

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-accent-green hover:bg-accent-green/90 text-white py-3 text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent-green focus:ring-opacity-50 disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Sending...
        </>
      ) : (
        "Send Message"
      )}
    </Button>
  )
}

export default function ContactForm() {
  const initialState = { message: null, errors: {}, success: false }
  const [state, dispatch] = useActionState(submitContactForm, initialState)
  const { toast } = useToast()

  useEffect(() => {
    if (state.success && state.message) {
      toast({
        title: "Message Sent!",
        description: state.message,
        variant: "default",
        action: <CheckCircle2 className="text-green-500" />,
      })
    } else if (!state.success && state.message) {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
        action: <AlertCircle className="text-red-500" />,
      })
    }
  }, [state, toast])

  return (
    <form action={dispatch} className="space-y-6">
      <FormField
        id="name"
        label="Full Name"
        placeholder="John Doe"
        required
        icon={User}
        error={state.errors?.name?.[0]}
      />
      <FormField
        id="email"
        label="Email Address"
        type="email"
        placeholder="you@example.com"
        required
        icon={Mail}
        error={state.errors?.email?.[0]}
      />
      <FormField
        id="company"
        label="Company (Optional)"
        placeholder="Your Company Inc."
        icon={Building}
        error={state.errors?.company?.[0]}
      />
      <FormField
        id="subject"
        label="Subject"
        placeholder="Inquiry about AI Solutions"
        required
        icon={FileText}
        error={state.errors?.subject?.[0]}
      />
      <FormField
        id="message"
        label="Your Message"
        placeholder="Tell us how we can help..."
        required
        component="textarea"
        icon={MessageSquare}
        error={state.errors?.message?.[0]}
      />
      <SubmitButton />
    </form>
  )
}

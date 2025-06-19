"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Loader2, User, Mail, Building, FileText, MessageSquare } from "lucide-react"
import SubmissionStatusModal from "@/components/submission-status-modal"

interface FormFieldProps {
  id: string
  label: string
  type?: string
  placeholder?: string
  required?: boolean
  icon?: React.ElementType
  component?: "input" | "textarea"
  value: string
  onChange: (value: string) => void
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
  value,
  onChange,
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
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${error ? "border-red-500 focus:border-red-500" : "border-gray-300"}`}
        />
      ) : (
        <Textarea
          id={id}
          name={id}
          placeholder={placeholder}
          required={required}
          rows={5}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${error ? "border-red-500 focus:border-red-500" : "border-gray-300"}`}
        />
      )}
    </div>
    {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
  </div>
)

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  
  // Modal state
  const [modalState, setModalState] = useState({
    isOpen: false,
    isSuccess: false,
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        // Show success modal
        setModalState({
          isOpen: true,
          isSuccess: true,
          message: result.message,
        })
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          subject: "",
          message: "",
        })
      } else {
        if (result.errors) {
          const formattedErrors: Record<string, string> = {}
          Object.entries(result.errors).forEach(([key, value]) => {
            if (Array.isArray(value) && value.length > 0) {
              formattedErrors[key] = value[0]
            }
          })
          setErrors(formattedErrors)
        }
        
        // Show error modal
        setModalState({
          isOpen: true,
          isSuccess: false,
          message: result.message,
        })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      
      // Show error modal
      setModalState({
        isOpen: true,
        isSuccess: false,
        message: "There was an error sending your message. Please try again or contact us directly.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleModalClose = () => {
    setModalState({
      isOpen: false,
      isSuccess: false,
      message: "",
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormField
          id="name"
          label="Full Name"
          placeholder="John Doe"
          required
          icon={User}
          value={formData.name}
          onChange={(value) => setFormData(prev => ({ ...prev, name: value }))}
          error={errors.name}
        />
        <FormField
          id="email"
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          required
          icon={Mail}
          value={formData.email}
          onChange={(value) => setFormData(prev => ({ ...prev, email: value }))}
          error={errors.email}
        />
        <FormField
          id="company"
          label="Company (Optional)"
          placeholder="Your Company Inc."
          icon={Building}
          value={formData.company}
          onChange={(value) => setFormData(prev => ({ ...prev, company: value }))}
          error={errors.company}
        />
        <FormField
          id="subject"
          label="Subject"
          placeholder="Inquiry about AI Solutions"
          required
          icon={FileText}
          value={formData.subject}
          onChange={(value) => setFormData(prev => ({ ...prev, subject: value }))}
          error={errors.subject}
        />
        <FormField
          id="message"
          label="Your Message"
          placeholder="Tell us how we can help..."
          required
          component="textarea"
          icon={MessageSquare}
          value={formData.message}
          onChange={(value) => setFormData(prev => ({ ...prev, message: value }))}
          error={errors.message}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent-green hover:bg-accent-green/90 text-white py-3 text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent-green focus:ring-opacity-50 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>

      {/* Submission Status Modal */}
      <SubmissionStatusModal
        isOpen={modalState.isOpen}
        isSuccess={modalState.isSuccess}
        message={modalState.message}
        onClose={handleModalClose}
        autoCloseDelay={4000}
      />
    </>
  )
}

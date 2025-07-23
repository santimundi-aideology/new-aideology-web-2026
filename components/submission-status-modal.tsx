"use client"

import { useEffect } from "react"
import { CheckCircle, XCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SubmissionStatusModalProps {
  isOpen: boolean
  isSuccess: boolean
  message: string
  onClose: () => void
  autoCloseDelay?: number
}

export default function SubmissionStatusModal({
  isOpen,
  isSuccess,
  message,
  onClose,
  autoCloseDelay = 3000
}: SubmissionStatusModalProps) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose()
      }, autoCloseDelay)

      return () => clearTimeout(timer)
    }
  }, [isOpen, autoCloseDelay, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-modal-fade-in">
      <div className="bg-white rounded-xl p-8 max-w-md mx-4 shadow-2xl animate-modal-scale-in relative">
        <Button
          onClick={onClose}
          variant="ghost"
          size="sm"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-4 w-4" />
        </Button>

        <div className="text-center">
          <div className="mb-6">
            {isSuccess ? (
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto animate-modal-bounce-in">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
            ) : (
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto animate-modal-bounce-in">
                <XCircle className="w-12 h-12 text-red-600" />
              </div>
            )}
          </div>

          <h3 className="text-2xl font-bold text-charcoal mb-4">
            {isSuccess ? "Message Sent Successfully!" : "Submission Failed"}
          </h3>

          <p className="text-gray-600 mb-6 leading-relaxed">
            {message}
          </p>

          <Button
            onClick={onClose}
            className={`px-8 py-2 font-semibold transition-all duration-300 ${
              isSuccess
                ? "bg-green-600 hover:bg-green-700 text-white"
                : "bg-red-600 hover:bg-red-700 text-white"
            }`}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  )
} 
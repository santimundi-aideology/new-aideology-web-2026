"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, Mail, AlertCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    
    if (!email) {
      setError("Email is required")
      return
    }
    
    if (!validateEmail(email)) {
      setError("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setEmail("")
      
      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 3000)
    }, 1000)
  }

  if (isSuccess) {
    return (
      <Card className="bg-accent-green/10 border-accent-green/30 animate-scale-in">
        <CardContent className="p-6 text-center">
          <CheckCircle className="h-12 w-12 text-accent-green mx-auto mb-4 animate-bounce" />
          <h3 className="text-lg font-semibold text-charcoal mb-2">
            Thank you for subscribing!
          </h3>
          <p className="text-charcoal/70">
            You'll receive our latest updates and insights about AI technology.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-white border-accent-green/20 hover:border-accent-green/40 transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <Mail className="h-6 w-6 text-accent-green mr-2" />
          <h3 className="text-lg font-semibold text-charcoal">Stay Updated</h3>
        </div>
        <p className="text-charcoal/70 mb-4">
          Get the latest AI insights and company updates delivered to your inbox.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setError("")
              }}
              className={`transition-all duration-300 ${
                error ? 'border-red-400 focus:border-red-400' : 'border-accent-green/20 focus:border-accent-green'
              }`}
              disabled={isSubmitting}
            />
            {error && (
              <div className="absolute -bottom-6 left-0 flex items-center text-red-500 text-sm animate-slide-in-left">
                <AlertCircle className="h-4 w-4 mr-1" />
                {error}
              </div>
            )}
          </div>
          
          <Button
            type="submit" 
            className="w-full bg-accent-green text-charcoal hover:bg-black hover:text-white transition-all duration-300 hover:scale-105"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-charcoal mr-2"></div>
                Subscribing...
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Subscribe to Newsletter
              </div>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

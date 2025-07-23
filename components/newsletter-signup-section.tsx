"use client" // Ensure this is a client component

import { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

export default function NewsletterSignupSection() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setMessage('Thank you for subscribing!')
      setEmail('')
      setIsLoading(false)
    }, 1000)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-fade-in-up">
          Stay Updated
        </h2>
        <p className="text-xl text-gray-600 mb-8 animate-fade-in-up" style={{animationDelay: '100ms'}}>
          Get the latest insights on AI infrastructure, emerging technologies, and industry trends delivered to your inbox.
        </p>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{animationDelay: '200ms'}}>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-3 text-lg border-2 border-gray-200 rounded-lg focus:border-accent-green focus:ring-2 focus:ring-accent-green/20 transition-all duration-300"
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="px-8 py-3 bg-accent-green text-gray-900 font-semibold rounded-lg hover:bg-green-400 hover:scale-105 transition-all duration-300 disabled:opacity-50"
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>
          
          {message && (
            <p className="mt-4 text-green-600 font-medium animate-fade-in-up">
              {message}
            </p>
          )}
          
          <p className="text-sm text-gray-500 mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  )
}

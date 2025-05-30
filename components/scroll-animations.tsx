"use client"

import { useEffect } from "react"

export default function ScrollAnimations() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in-view')
          // Add staggered delays for multiple elements
          const delay = parseInt(entry.target.getAttribute('data-delay') || '0')
          if (delay > 0) {
            setTimeout(() => {
              entry.target.classList.add('animate-in-view')
            }, delay)
          }
        }
      })
    }, observerOptions)

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
      '.animate-fade-in-up, .animate-slide-in-left, .animate-slide-in-right, .animate-scale-in'
    )
    
    animatedElements.forEach((el) => observer.observe(el))

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return null
} 
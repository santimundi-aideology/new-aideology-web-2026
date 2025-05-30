"use client"

import { useEffect } from "react"

export default function ScrollAnimations() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -80px 0px"
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetElement = entry.target as HTMLElement
          const delay = parseInt(targetElement.getAttribute("data-delay") || "0")
          
          requestAnimationFrame(() => {
            if (delay > 0) {
              setTimeout(() => {
                targetElement.classList.add("animate-in-view")
              }, delay)
            } else {
              targetElement.classList.add("animate-in-view")
            }
          })
          obs.unobserve(targetElement)
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll<HTMLElement>(
      ".animate-fade-in-up, .animate-slide-in-left, .animate-slide-in-right, .animate-scale-in"
    )
    
    animatedElements.forEach((el) => observer.observe(el))

    return () => {
      animatedElements.forEach((el) => {
        try {
          observer.unobserve(el)
        } catch (e) {
          // console.warn("Failed to unobserve element", el, e)
        }
      })
    }
  }, [])

  return null
}

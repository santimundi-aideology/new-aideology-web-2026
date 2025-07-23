"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollAnimations() {
  const pathname = usePathname()

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
    
    // Immediately show elements that are already in view
    animatedElements.forEach((el) => {
      const rect = el.getBoundingClientRect()
      const isInView = rect.top < window.innerHeight && rect.bottom > 0
      
      if (isInView) {
        const delay = parseInt(el.getAttribute("data-delay") || "0")
        if (delay > 0) {
          setTimeout(() => {
            el.classList.add("animate-in-view")
          }, delay)
        } else {
          el.classList.add("animate-in-view")
        }
      }
      
      observer.observe(el)
    })

    return () => {
      animatedElements.forEach((el) => {
        try {
          observer.unobserve(el)
        } catch (e) {
          // console.warn("Failed to unobserve element", el, e)
        }
      })
    }
  }, [pathname])

  return null
}

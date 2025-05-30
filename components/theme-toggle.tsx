"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="sm"
        className="relative overflow-hidden group transition-all duration-300 hover:scale-110"
        aria-label="Toggle theme"
      >
        <div className="relative w-5 h-5">
          <Sun className="absolute inset-0 w-5 h-5" />
        </div>
      </Button>
    )
  }

  const isDark = theme === "dark"

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="relative overflow-hidden group transition-all duration-300 hover:scale-110"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <Sun 
          className={`absolute inset-0 w-5 h-5 transition-all duration-500 ${
            isDark 
              ? 'rotate-90 scale-0 opacity-0' 
              : 'rotate-0 scale-100 opacity-100'
          }`}
        />
        <Moon 
          className={`absolute inset-0 w-5 h-5 transition-all duration-500 ${
            isDark 
              ? 'rotate-0 scale-100 opacity-100' 
              : '-rotate-90 scale-0 opacity-0'
          }`}
        />
      </div>
      
      {/* Animated background */}
      <div className={`absolute inset-0 rounded transition-all duration-300 ${
        isDark 
          ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20' 
          : 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20'
      } opacity-0 group-hover:opacity-100`} />
    </Button>
  )
} 
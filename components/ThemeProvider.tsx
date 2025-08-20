'use client'

import { useCounterStore } from "@/app/store"
import { useEffect } from "react"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useCounterStore()

  useEffect(() => {
    // Apply theme to document element
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return <>{children}</>
}

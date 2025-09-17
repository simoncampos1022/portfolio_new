'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function NightSky() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = theme === 'dark'

  // Determine the background image based on the theme
  const backgroundImage = isDark
    ? 'url(/background/nightsky.png)'
    : 'url(/background/daysky.png)'

  // Render a placeholder or default during SSR/initial hydration
  // For SSR, we can default to the day sky image.
  if (!mounted) {
    return (
      <div className="fixed inset-0 w-full h-full -z-10">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/background/daysky.png)', // Default to day mode for SSR
          }}
        />
      </div>
    )
  }

  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <div
        className="w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: backgroundImage,
        }}
      />
    </div>
  )
}

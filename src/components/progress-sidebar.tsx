'use client'

import { useState, useEffect } from 'react'

export function ProgressSidebar() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative h-32 w-1 rounded-full bg-neutral-200 dark:bg-neutral-800">
          <div
            className="w-1 rounded-full bg-black transition-all duration-100 dark:bg-white"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>
        <div
          className={`text-xs font-medium text-neutral-400 transition-opacity duration-200 dark:text-neutral-500 ${
            scrollProgress > 5 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {Math.round(scrollProgress)}%
        </div>
      </div>
    </div>
  )
}

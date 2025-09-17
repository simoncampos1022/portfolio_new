'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

interface SectionDividerProps {
  keywords: string[]
  gradient?: string
}

export function SectionDivider({ keywords, gradient = 'from-primary-500 to-secondary-500' }: SectionDividerProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredKeyword, setHoveredKeyword] = useState<string | null>(null)
  const [isPaused, setIsPaused] = useState(false)

  // Create flowing text with separators
  const flowingText = keywords.join(' • ')

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="relative py-12 overflow-hidden bg-gradient-to-r from-transparent via-white/5 to-transparent dark:via-gray-800/5"
    >
      <div className="relative">
        {/* Flowing text container */}
        <div className="whitespace-nowrap">
          <motion.div
            className={`text-lg md:text-xl font-medium bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
            animate={isPaused ? {} : { x: ['0%', '-100%'] }}
            transition={{
              duration: 80,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop'
            }}
            style={{ display: 'inline-block' }}
          >
            {/* Duplicate text for seamless loop */}
            <span className="inline-block mr-8">
              {keywords.map((keyword, index) => (
                <span
                  key={`first-${index}`}
                  className={`inline-block mx-2 cursor-pointer transition-all duration-300 ${
                    hoveredKeyword === keyword ? 'scale-125 text-white drop-shadow-lg' : ''
                  }`}
                  onMouseEnter={() => {
                    setHoveredKeyword(keyword)
                    setIsPaused(true)
                  }}
                  onMouseLeave={() => {
                    setHoveredKeyword(null)
                    setIsPaused(false)
                  }}
                >
                  {keyword}
                </span>
              ))}
            </span>
            <span className="inline-block mr-8">
              {keywords.map((keyword, index) => (
                <span
                  key={`second-${index}`}
                  className={`inline-block mx-2 cursor-pointer transition-all duration-300 ${
                    hoveredKeyword === keyword ? 'scale-125 text-white drop-shadow-lg' : ''
                  }`}
                  onMouseEnter={() => {
                    setHoveredKeyword(keyword)
                    setIsPaused(true)
                  }}
                  onMouseLeave={() => {
                    setHoveredKeyword(null)
                    setIsPaused(false)
                  }}
                >
                  {keyword}
                </span>
              ))}
            </span>
          </motion.div>
        </div>

        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white/10 dark:from-gray-900/10 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white/10 dark:from-gray-900/10 to-transparent pointer-events-none" />
      </div>
    </motion.div>
  )
}

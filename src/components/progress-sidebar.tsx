'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const sections = [
  { id: 'hero', label: 'Home', icon: '🏠' },
  { id: 'about', label: 'About', icon: '👨‍💻' },
  { id: 'skills', label: 'Skills', icon: '⚡' },
  { id: 'projects', label: 'Projects', icon: '🚀' },
  { id: 'experience', label: 'Experience', icon: '💼' },
  { id: 'education', label: 'Education', icon: '🎓' },
  { id: 'contact', label: 'Contact', icon: '📧' },
]

export function ProgressSidebar() {
  const [activeSection, setActiveSection] = useState('hero')
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(progress)

      // Find active section
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      })).filter(section => section.element)

      let currentSection = 'hero'
      
      for (const section of sectionElements) {
        const rect = section.element!.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section.id
          break
        }
      }
      
      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
    >
      <div className="flex flex-col items-center space-y-4">
        {/* Progress Bar */}
        <div className="relative">
          <div className="w-1 h-32 bg-gray-300/30 dark:bg-gray-600/30 rounded-full">
            <motion.div
              className="w-1 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full"
              style={{ height: `${scrollProgress}%` }}
              initial={{ height: 0 }}
              animate={{ height: `${scrollProgress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </div>

        {/* Section Dots */}
        <div className="flex flex-col space-y-3">
          {sections.map((section, index) => (
            <motion.button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`group relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-primary-500 shadow-lg shadow-primary-500/50'
                  : 'bg-white/10 dark:bg-gray-800/10 hover:bg-white/20 dark:hover:bg-gray-800/20 backdrop-blur-sm border border-white/20 dark:border-gray-700/20'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={`text-lg transition-colors duration-300 ${
                activeSection === section.id ? 'text-white' : 'text-gray-400 dark:text-gray-500'
              }`}>
                {section.icon}
              </span>
              
              {/* Tooltip */}
              <div className="absolute right-full mr-3 px-3 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {section.label}
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 dark:border-l-gray-100 border-t-4 border-t-transparent border-b-4 border-b-transparent" />
              </div>
            </motion.button>
          ))}
        </div>

        {/* Scroll Progress Percentage */}
        <motion.div
          className="text-xs text-gray-400 dark:text-gray-500 font-medium"
          animate={{ opacity: scrollProgress > 5 ? 1 : 0 }}
        >
          {Math.round(scrollProgress)}%
        </motion.div>
      </div>
    </motion.div>
  )
}

'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface SectionDividerProps {
  text: string
  icon?: string
  gradient?: string
}

export function SectionDivider({ text, icon, gradient = 'from-primary-500 to-secondary-500' }: SectionDividerProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="relative py-16 overflow-hidden"
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-10`} />
      
      {/* Animated background pattern */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: 'reverse',
            ease: 'linear'
          }}
          className="w-full h-full opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
            backgroundPosition: '0% 0%'
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-4 px-8 py-4 rounded-full bg-white/10 dark:bg-gray-900/10 backdrop-blur-md border border-white/20 dark:border-gray-700/20"
          >
            {icon && (
              <span className="text-2xl">{icon}</span>
            )}
            <h2 className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
              {text}
            </h2>
            {icon && (
              <span className="text-2xl">{icon}</span>
            )}
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-32 h-px bg-gradient-to-r from-transparent to-white/20 dark:to-gray-600/20" />
      <div className="absolute top-1/2 right-0 w-32 h-px bg-gradient-to-l from-transparent to-white/20 dark:to-gray-600/20" />
    </motion.div>
  )
}

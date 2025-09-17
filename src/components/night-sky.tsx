'use client'

import { useEffect, useRef, useState, useCallback, useMemo } from 'react'
import { useTheme } from 'next-themes'

interface Star {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  twinkleSpeed: number
  twinklePhase: number
}

interface Cloud {
  id: number
  x: number
  y: number
  size: number
  speed: number
  opacity: number
}

// Falling stars removed as requested

export function NightSky() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const lastTimeRef = useRef<number>(0)
  const [stars, setStars] = useState<Star[]>([])
  const [clouds, setClouds] = useState<Cloud[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const { theme } = useTheme()

  // Memoize star generation for better performance
  const generateStars = useCallback(() => {
    const newStars: Star[] = []
    const starCount = Math.min(Math.floor((dimensions.width * dimensions.height) / 6000), 300) // More stars for better effect
    
    for (let i = 0; i < starCount; i++) {
      newStars.push({
        id: i,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: Math.random() * 2.5 + 0.5,
        opacity: Math.random() * 0.9 + 0.3,
        twinkleSpeed: Math.random() * 0.03 + 0.01,
        twinklePhase: Math.random() * Math.PI * 2,
      })
    }
    return newStars
  }, [dimensions])

  // Memoize cloud generation for day sky
  const generateClouds = useCallback(() => {
    const newClouds: Cloud[] = []
    const cloudCount = Math.min(Math.floor((dimensions.width * dimensions.height) / 15000), 8)
    
    for (let i = 0; i < cloudCount; i++) {
      newClouds.push({
        id: i,
        x: Math.random() * dimensions.width,
        y: Math.random() * (dimensions.height * 0.6), // Keep clouds in upper portion
        size: Math.random() * 80 + 40,
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.6 + 0.3,
      })
    }
    return newClouds
  }, [dimensions])

  // Initialize stars and clouds
  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      setStars(generateStars())
      setClouds(generateClouds())
    }
  }, [dimensions, generateStars, generateClouds])

  // Handle window resize with debouncing
  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }, 100)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(timeoutId)
    }
  }, [])

  // Falling stars are now handled directly in the animation loop for better performance

  // Memoize gradient creation
  const backgroundGradient = useMemo(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return null
    return {
      width: dimensions.width,
      height: dimensions.height,
    }
  }, [dimensions])

  // Animation loop with performance optimizations
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || dimensions.width === 0 || dimensions.height === 0) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = dimensions.width
    canvas.height = dimensions.height

    // Pre-create gradients based on theme
    const isDark = theme === 'dark'
    const gradient = ctx.createLinearGradient(0, 0, 0, dimensions.height)
    
    if (isDark) {
      // Night sky gradient
      gradient.addColorStop(0, '#0a0a2e')
      gradient.addColorStop(0.5, '#16213e')
      gradient.addColorStop(1, '#0f3460')
    } else {
      // Day sky gradient
      gradient.addColorStop(0, '#87CEEB')
      gradient.addColorStop(0.3, '#98D8E8')
      gradient.addColorStop(0.7, '#B0E0E6')
      gradient.addColorStop(1, '#E0F6FF')
    }

    // Falling stars removed

    const animate = (currentTime: number) => {
      // Throttle animation to 60fps
      if (currentTime - lastTimeRef.current < 16) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }
      lastTimeRef.current = currentTime

      // Clear canvas with appropriate gradient
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, dimensions.width, dimensions.height)

      if (isDark) {
        // Draw twinkling stars for night mode
        stars.forEach(star => {
          const twinkle = Math.sin(star.twinklePhase) * 0.5 + 0.5
          const currentOpacity = star.opacity * (0.3 + twinkle * 0.7)
          
          ctx.save()
          ctx.globalAlpha = currentOpacity
          ctx.fillStyle = '#ffffff'
          ctx.shadowColor = '#ffffff'
          ctx.shadowBlur = star.size * 3
          
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
          ctx.fill()
          
          ctx.restore()
          
          star.twinklePhase += star.twinkleSpeed
        })
      } else {
        // Draw sun for day mode
        const sunX = dimensions.width * 0.8
        const sunY = dimensions.height * 0.2
        const sunRadius = 60
        
        // Sun glow
        const sunGradient = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, sunRadius * 2)
        sunGradient.addColorStop(0, 'rgba(255, 255, 0, 0.8)')
        sunGradient.addColorStop(0.5, 'rgba(255, 255, 0, 0.4)')
        sunGradient.addColorStop(1, 'rgba(255, 255, 0, 0)')
        
        ctx.save()
        ctx.fillStyle = sunGradient
        ctx.beginPath()
        ctx.arc(sunX, sunY, sunRadius * 2, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
        
        // Sun
        ctx.save()
        ctx.fillStyle = '#FFD700'
        ctx.shadowColor = '#FFD700'
        ctx.shadowBlur = 20
        ctx.beginPath()
        ctx.arc(sunX, sunY, sunRadius, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
        
        // Draw moving clouds
        clouds.forEach(cloud => {
          ctx.save()
          ctx.globalAlpha = cloud.opacity
          ctx.fillStyle = '#FFFFFF'
          
          // Draw cloud as multiple circles
          const cloudX = cloud.x
          const cloudY = cloud.y
          const cloudSize = cloud.size
          
          ctx.beginPath()
          ctx.arc(cloudX, cloudY, cloudSize * 0.6, 0, Math.PI * 2)
          ctx.arc(cloudX + cloudSize * 0.3, cloudY, cloudSize * 0.4, 0, Math.PI * 2)
          ctx.arc(cloudX - cloudSize * 0.3, cloudY, cloudSize * 0.4, 0, Math.PI * 2)
          ctx.arc(cloudX + cloudSize * 0.1, cloudY - cloudSize * 0.2, cloudSize * 0.3, 0, Math.PI * 2)
          ctx.arc(cloudX - cloudSize * 0.1, cloudY - cloudSize * 0.2, cloudSize * 0.3, 0, Math.PI * 2)
          ctx.fill()
          
          ctx.restore()
          
          // Move cloud
          cloud.x += cloud.speed
          if (cloud.x > dimensions.width + cloudSize) {
            cloud.x = -cloudSize
          }
        })
      }

      // Falling stars removed - only twinkling stars remain

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [stars, clouds, dimensions, theme])

  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ 
          background: 'transparent',
          display: 'block'
        }}
      />
    </div>
  )
}

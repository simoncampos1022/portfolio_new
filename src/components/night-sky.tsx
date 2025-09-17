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
        // Draw realistic sun for day mode
        const sunX = dimensions.width * 0.75
        const sunY = dimensions.height * 0.25
        const sunRadius = 45
        
        // Realistic sun glow with multiple layers
        const sunGradient1 = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, sunRadius * 3)
        sunGradient1.addColorStop(0, 'rgba(255, 248, 220, 0.3)')
        sunGradient1.addColorStop(0.3, 'rgba(255, 248, 220, 0.2)')
        sunGradient1.addColorStop(0.7, 'rgba(255, 248, 220, 0.1)')
        sunGradient1.addColorStop(1, 'rgba(255, 248, 220, 0)')
        
        ctx.save()
        ctx.fillStyle = sunGradient1
        ctx.beginPath()
        ctx.arc(sunX, sunY, sunRadius * 3, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
        
        // Inner sun glow
        const sunGradient2 = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, sunRadius * 1.5)
        sunGradient2.addColorStop(0, 'rgba(255, 215, 0, 0.4)')
        sunGradient2.addColorStop(0.5, 'rgba(255, 215, 0, 0.2)')
        sunGradient2.addColorStop(1, 'rgba(255, 215, 0, 0)')
        
        ctx.save()
        ctx.fillStyle = sunGradient2
        ctx.beginPath()
        ctx.arc(sunX, sunY, sunRadius * 1.5, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
        
        // Realistic sun with gradient
        const sunGradient3 = ctx.createRadialGradient(sunX - sunRadius * 0.3, sunY - sunRadius * 0.3, 0, sunX, sunY, sunRadius)
        sunGradient3.addColorStop(0, '#FFF8DC')
        sunGradient3.addColorStop(0.3, '#FFD700')
        sunGradient3.addColorStop(0.7, '#FFA500')
        sunGradient3.addColorStop(1, '#FF8C00')
        
        ctx.save()
        ctx.fillStyle = sunGradient3
        ctx.beginPath()
        ctx.arc(sunX, sunY, sunRadius, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
        
        // Draw realistic clouds
        clouds.forEach(cloud => {
          ctx.save()
          ctx.globalAlpha = cloud.opacity
          
          // Create realistic cloud shape using bezier curves
          const cloudX = cloud.x
          const cloudY = cloud.y
          const cloudSize = cloud.size
          
          // Cloud shadow (darker bottom)
          const cloudShadowGradient = ctx.createLinearGradient(cloudX, cloudY, cloudX, cloudY + cloudSize * 0.3)
          cloudShadowGradient.addColorStop(0, 'rgba(200, 200, 200, 0.8)')
          cloudShadowGradient.addColorStop(1, 'rgba(180, 180, 180, 0.9)')
          
          ctx.fillStyle = cloudShadowGradient
          ctx.beginPath()
          
          // Main cloud body with realistic curves
          const centerX = cloudX
          const centerY = cloudY
          const width = cloudSize
          const height = cloudSize * 0.6
          
          ctx.moveTo(centerX - width * 0.4, centerY)
          ctx.bezierCurveTo(
            centerX - width * 0.5, centerY - height * 0.3,
            centerX - width * 0.3, centerY - height * 0.5,
            centerX, centerY - height * 0.4
          )
          ctx.bezierCurveTo(
            centerX + width * 0.2, centerY - height * 0.6,
            centerX + width * 0.4, centerY - height * 0.4,
            centerX + width * 0.5, centerY - height * 0.2
          )
          ctx.bezierCurveTo(
            centerX + width * 0.6, centerY,
            centerX + width * 0.4, centerY + height * 0.2,
            centerX, centerY + height * 0.1
          )
          ctx.bezierCurveTo(
            centerX - width * 0.2, centerY + height * 0.3,
            centerX - width * 0.4, centerY + height * 0.1,
            centerX - width * 0.4, centerY
          )
          ctx.closePath()
          ctx.fill()
          
          // Cloud highlight (lighter top)
          const cloudHighlightGradient = ctx.createLinearGradient(cloudX, cloudY - cloudSize * 0.3, cloudX, cloudY)
          cloudHighlightGradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)')
          cloudHighlightGradient.addColorStop(1, 'rgba(240, 240, 240, 0.7)')
          
          ctx.fillStyle = cloudHighlightGradient
          ctx.beginPath()
          ctx.moveTo(centerX - width * 0.3, centerY - height * 0.2)
          ctx.bezierCurveTo(
            centerX - width * 0.2, centerY - height * 0.4,
            centerX, centerY - height * 0.3,
            centerX + width * 0.2, centerY - height * 0.4
          )
          ctx.bezierCurveTo(
            centerX + width * 0.3, centerY - height * 0.2,
            centerX + width * 0.2, centerY,
            centerX, centerY - height * 0.1
          )
          ctx.bezierCurveTo(
            centerX - width * 0.2, centerY,
            centerX - width * 0.3, centerY - height * 0.1,
            centerX - width * 0.3, centerY - height * 0.2
          )
          ctx.closePath()
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

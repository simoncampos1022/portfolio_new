'use client'

import { useEffect, useRef, useState, useCallback, useMemo } from 'react'

interface Star {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  twinkleSpeed: number
  twinklePhase: number
}

interface FallingStar {
  id: number
  x: number
  y: number
  angle: number
  speed: number
  opacity: number
  trail: { x: number; y: number; opacity: number }[]
}

export function NightSky() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const lastTimeRef = useRef<number>(0)
  const [stars, setStars] = useState<Star[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

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

  // Initialize stars
  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      setStars(generateStars())
    }
  }, [dimensions, generateStars])

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

    // Pre-create gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, dimensions.height)
    gradient.addColorStop(0, '#0a0a2e')
    gradient.addColorStop(0.5, '#16213e')
    gradient.addColorStop(1, '#0f3460')

    // Local falling stars array for direct manipulation
    let localFallingStars: FallingStar[] = []

    const animate = (currentTime: number) => {
      // Throttle animation to 60fps
      if (currentTime - lastTimeRef.current < 16) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }
      lastTimeRef.current = currentTime

      // Clear canvas with dark blue gradient
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, dimensions.width, dimensions.height)

      // Draw twinkling stars
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

      // Update and draw falling stars directly
      localFallingStars = localFallingStars.filter(fallingStar => {
        // Update position
        fallingStar.x += Math.cos(fallingStar.angle) * fallingStar.speed
        fallingStar.y += Math.sin(fallingStar.angle) * fallingStar.speed
        
        // Add to trail
        fallingStar.trail.push({
          x: fallingStar.x,
          y: fallingStar.y,
          opacity: fallingStar.opacity,
        })
        
        // Limit trail length
        if (fallingStar.trail.length > 20) {
          fallingStar.trail.shift()
        }
        
        // Fade out more slowly for longer visibility
        fallingStar.opacity -= 0.008
        
        // Draw trail
        ctx.save()
        ctx.strokeStyle = '#ffffff'
        ctx.lineWidth = 4
        ctx.lineCap = 'round'
        
        for (let i = 0; i < fallingStar.trail.length - 1; i++) {
          const point = fallingStar.trail[i]
          const nextPoint = fallingStar.trail[i + 1]
          const trailOpacity = (point.opacity * (i / fallingStar.trail.length)) * 0.95
          
          ctx.globalAlpha = trailOpacity
          ctx.beginPath()
          ctx.moveTo(point.x, point.y)
          ctx.lineTo(nextPoint.x, nextPoint.y)
          ctx.stroke()
        }
        
        // Draw main star
        ctx.globalAlpha = fallingStar.opacity
        ctx.fillStyle = '#ffffff'
        ctx.shadowColor = '#ffffff'
        ctx.shadowBlur = 20
        ctx.beginPath()
        ctx.arc(fallingStar.x, fallingStar.y, 5, 0, Math.PI * 2)
        ctx.fill()
        
        ctx.restore()
        
        // Remove if faded out or off screen (increased boundaries for longer travel)
        return fallingStar.opacity > 0 && 
               fallingStar.y < dimensions.height + 200 && 
               fallingStar.x < dimensions.width + 200
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    // Create falling stars periodically
    const createFallingStar = () => {
      // Calculate target position (right-bottom of hero section - approximately 80% width, 40% height)
      const targetX = dimensions.width * 0.8
      const targetY = dimensions.height * 0.4
      
      // Start from random position on top-left
      const startX = Math.random() * dimensions.width * 0.3
      const startY = -50
      
      // Calculate angle to target
      const deltaX = targetX - startX
      const deltaY = targetY - startY
      const angle = Math.atan2(deltaY, deltaX)
      
      const newFallingStar: FallingStar = {
        id: Date.now() + Math.random(),
        x: startX,
        y: startY,
        angle: angle,
        speed: Math.random() * 6 + 4,
        opacity: 1,
        trail: [],
      }
      localFallingStars.push(newFallingStar)
    }

    const fallingStarInterval = setInterval(() => {
      if (Math.random() < 0.5) { // 50% chance for more visible effects
        createFallingStar()
      }
    }, 1500) // Every 1.5 seconds

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      clearInterval(fallingStarInterval)
    }
  }, [stars, dimensions])

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

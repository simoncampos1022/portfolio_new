'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export function Hero() {
  const router = useRouter()

  const navigateToProjects = () => {
    router.push('/projects')
  }

  const navigateToContact = () => {
    router.push('/contact')
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Greeting */}
            <div className="mb-6">
              <span className="inline-block px-3 py-2 sm:px-4 sm:py-4 rounded-full night-sky-card text-primary-700 dark:text-primary-300 text-sm sm:text-lg font-display font-medium mb-4">
                👨‍🎓 Hello, I'm Simon
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-6">
              <span className="block text-white mb-2 drop-shadow-lg">
                Senior Software Engineer
              </span>
              <span className="block gradient-text drop-shadow-lg">
                Backend & Python Expert
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed drop-shadow-lg px-2 sm:px-0">
              Building scalable systems and intelligent AI solutions that drive innovation and support complex workflows.
            </p>

            {/* Experience Badge */}
            <div className="mb-12">
              <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full night-sky-card shadow-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  6+ years of experience
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-16">
              <button
                onClick={navigateToProjects}
                className="btn-primary text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 w-full sm:w-auto"
              >
                View My Work
              </button>
              <button
                onClick={navigateToContact}
                className="btn-secondary text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 w-full sm:w-auto"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Column - Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Photo Container */}
              <div className="relative flex w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] items-center justify-center">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 rounded-full opacity-20 blur-3xl" />
                
                {/* Photo */}
                <div className="relative w-[256px] h-[360px] sm:w-[320px] sm:h-[450px] rounded-full overflow-hidden border-4 border-white/20 dark:border-gray-700/20 shadow-2xl">
                  <Image
                    src="/photo/photo (1).png"
                    alt="Simon Degala Campos - Senior Software Engineer | Backend & Python Expert"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 384px, 448px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

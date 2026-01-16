'use client'

import Image from 'next/image'
import { Gamepad2, Mountain, CircleDot } from 'lucide-react'

const hobbies = [
  {
    id: 1,
    title: 'Video Gaming',
    description: 'Exploring virtual worlds and strategic gameplay helps me unwind while sharpening problem-solving skills and quick decision-making',
    image: '/hobby/video gaming.png',
    icon: Gamepad2,
    color: 'from-blue-500 to-purple-500'
  },
  {
    id: 2,
    title: 'Mountain Climbing',
    description: 'Conquering peaks and embracing nature\'s challenges builds resilience, endurance, and a deep appreciation for adventure',
    image: '/hobby/mountain climbing.png',
    icon: Mountain,
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 3,
    title: 'Billiards',
    description: 'Precision, strategy, and focus come together in this classic game that combines skill with friendly competition',
    image: '/hobby/billiards.png',
    icon: CircleDot,
    color: 'from-orange-500 to-red-500'
  }
]

export function Hobby() {
  return (
    <section id="hobby" className="section-padding night-sky-content">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Hobbies & <span className="gradient-text">Interests</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              What I do in my free time to stay balanced and inspired
            </p>
            <div className="w-24 h-1 gradient-bg rounded-full mx-auto mt-4 sm:mt-6" />
          </div>

          {/* Hobbies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {hobbies.map((hobby) => (
              <div
                key={hobby.id}
                className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                {/* Image Container */}
                <div className="relative h-48 sm:h-56 m-6 overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={hobby.image}
                    alt={hobby.title}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${hobby.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${hobby.color} flex items-center justify-center`}>
                      <hobby.icon className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {hobby.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {hobby.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800/30">
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              <span className="text-primary-700 dark:text-primary-300 font-medium">
                Work hard, play harder
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

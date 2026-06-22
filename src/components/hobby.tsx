'use client'

import Image from 'next/image'
import { Gamepad2, Mountain, CircleDot } from 'lucide-react'
import { SectionHeader } from '@/components/section-header'

const hobbies = [
  {
    id: 1,
    title: 'Video Gaming',
    description:
      'Exploring virtual worlds and strategic gameplay helps me unwind while sharpening problem-solving skills and quick decision-making',
    image: '/hobby/video gaming.png',
    icon: Gamepad2,
  },
  {
    id: 2,
    title: 'Mountain Climbing',
    description:
      "Conquering peaks and embracing nature's challenges builds resilience, endurance, and a deep appreciation for adventure",
    image: '/hobby/mountain climbing.png',
    icon: Mountain,
  },
  {
    id: 3,
    title: 'Billiards',
    description:
      'Precision, strategy, and focus come together in this classic game that combines skill with friendly competition',
    image: '/hobby/billiards.png',
    icon: CircleDot,
  },
]

export function Hobby() {
  return (
    <section id="hobby" className="section-padding">
      <div className="container-custom">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            title={
              <>
                Hobbies & <span className="gradient-text">interests</span>
              </>
            }
            subtitle="What I do in my free time to stay balanced and inspired"
            accent="blue"
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {hobbies.map((hobby) => (
              <div key={hobby.id} className="group surface-card-hover overflow-hidden">
                <div className="relative m-4 aspect-square overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800/50">
                  <Image
                    src={hobby.image}
                    alt={hobby.title}
                    fill
                    className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="border-t border-neutral-200 p-5 dark:border-neutral-800">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white">
                      <hobby.icon className="h-4 w-4" />
                    </span>
                    <h3 className="font-heading text-base font-semibold text-neutral-900 dark:text-white">
                      {hobby.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{hobby.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

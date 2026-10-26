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
    <section id="hobby" className="section-light section-padding">
      <div className="container-custom">
        <SectionHeader
          tone="light"
          title={
            <>
              Hobbies &amp; <span className="text-brand">interests</span>
            </>
          }
          subtitle="What I do in my free time to stay balanced and inspired"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((hobby) => (
            <div
              key={hobby.id}
              className="group card-light overflow-hidden hover:-translate-y-1 hover:border-brand/60 hover:shadow-lg"
            >
              <div className="relative m-4 aspect-square overflow-hidden rounded-xl bg-neutral-100">
                <Image
                  src={hobby.image}
                  alt={hobby.title}
                  fill
                  className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="border-t border-neutral-200 p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand/50 bg-brand/10 text-brand">
                    <hobby.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide text-black">{hobby.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-neutral-600">{hobby.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

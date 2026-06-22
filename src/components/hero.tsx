'use client'

import Image from 'next/image'
import { scrollToSection } from '@/lib/scroll-to-section'

export function Hero() {
  return (
    <section id="home" className="section-padding">
      <div className="container-custom">
        <div className="grid min-h-[70vh] grid-cols-1 items-center gap-12 py-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-balance font-heading text-4xl font-bold leading-tight tracking-normal text-black dark:text-white sm:text-5xl lg:text-6xl">
                Senior Software Engineer
                <span className="mt-2 block text-neutral-500 dark:text-neutral-400">Backend & Python Expert</span>
              </h1>
            </div>

            <p className="max-w-xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
              Building scalable systems and intelligent AI solutions that drive innovation and support complex workflows.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="stat-card min-w-[140px]">
                <span className="text-3xl font-semibold text-black dark:text-white">6+</span>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">Years experience</span>
              </div>
              <div className="stat-card min-w-[140px]">
                <span className="text-3xl font-semibold text-black dark:text-white">47+</span>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">Projects completed</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <button onClick={() => scrollToSection('projects')} className="btn-primary w-full sm:w-auto">
                View my work
              </button>
              <button onClick={() => scrollToSection('contact')} className="btn-secondary w-full sm:w-auto">
                Contact me
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="relative overflow-hidden rounded-2xl border border-neutral-200 shadow-xl dark:border-neutral-800">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/photo/photo (2).png"
                    alt="Simon Degala Campos - Senior Software Engineer | Backend & Python Expert"
                    fill
                    className="object-cover object-top grayscale"
                    sizes="(max-width: 640px) 90vw, 384px"
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

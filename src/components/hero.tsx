'use client'

import Image from 'next/image'
import { Code, Target } from 'lucide-react'
import { scrollToSection } from '@/lib/scroll-to-section'

const stats = [
  {
    label: 'Years Experience',
    value: '6+',
    icon: Target,
    tags: [
      'Chief Technology Officer • Founder',
      'AI/ML & Full-Stack • Freelancer',
      'Senior Backend Developer • Employee',
      'Junior Backend Developer • Employee',
      'Backend Developer • Intern',
    ],
    tagsLayout: 'col' as const,
  },
  {
    label: 'Projects Completed',
    value: '47+',
    icon: Code,
    tags: ['AI/ML', 'Frontend', 'Backend', 'Full-stack'],
    tagsLayout: 'row' as const,
  },
]

export function Hero() {
  return (
    <section id="home" className="section-padding">
      <div className="container-custom">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-balance font-heading text-4xl font-bold leading-tight tracking-normal text-black dark:text-white sm:text-5xl lg:text-6xl">
                  Senior Software Engineer
                  <span className="mt-2 block text-neutral-500 dark:text-neutral-400">Backend & Python Expert</span>
                </h1>
              </div>

              <div className="space-y-4 text-sm leading-relaxed sm:text-base">
                <p className="hyphens-auto text-justify text-neutral-600 dark:text-neutral-400">
                  Senior Software Engineer | Backend &amp; Python Expert with 6+ years of specialization in designing and building scalable, high-performance backend systems. Skilled AI/ML Engineer with a strong track record in developing robust AI agents and intelligent solutions.
                </p>
                <p className="hyphens-auto text-justify text-neutral-600 dark:text-neutral-400">
                  Currently Founder &amp; CTO at PXI Labs LLC, building PXI Studio end to end across mobile, web, and API. Previously I worked in the AI/ML &amp; Full-Stack field as a freelancer and as Senior Backend Developer at Plentina, a BNPL fintech startup in the Philippines.
                </p>
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

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.label} className="surface-card flex flex-col items-start gap-3 px-5 py-4">
                <div className="flex items-center gap-4">
                  <stat.icon className="h-5 w-5 shrink-0 text-black dark:text-white" />
                  <div>
                    <div className="text-2xl font-semibold text-neutral-900 dark:text-white">{stat.value}</div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">{stat.label}</div>
                  </div>
                </div>
                <div
                  className={
                    stat.tagsLayout === 'col' ? 'flex flex-col gap-1.5 pl-9' : 'flex flex-wrap gap-1.5 pl-9'
                  }
                >
                  {stat.tags.map((tag) => (
                    <span key={tag} className="tag w-fit text-[11px]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

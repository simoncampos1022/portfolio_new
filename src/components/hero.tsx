'use client'

import Image from 'next/image'
import { ArrowRight, Code, Target } from 'lucide-react'
import { scrollToSection } from '@/lib/scroll-to-section'
import { RedGlow } from '@/components/red-glow'

const stats = [
  {
    label: 'Years Experience',
    value: '6',
    icon: Target,
    tags: [
      'Chief Technology Officer • Founder',
      'AI/ML & Full-Stack • Freelancer',
      'Senior Backend Developer • Employee',
      'Junior Backend Developer • Employee',
      'Backend Developer • Intern',
    ],
  },
  {
    label: 'Projects Completed',
    value: '47',
    icon: Code,
    tags: ['AI/ML', 'Frontend', 'Backend', 'Full-stack', 'Mobile', 'DevOps', 'Trading'],
  },
]

const portrait = '/photo/photo (2).png'
const portraitAlt = 'Simon Degala Campos - Senior Software Engineer | Backend & Python Expert'
const portraitTone = 'grayscale contrast-125 brightness-[0.7]'

export function Hero() {
  return (
    <section id="home" className="section-dark px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-20 lg:pt-40">
      {/* Portrait backdrop, faded into black on the text side */}
      <div aria-hidden="true" className="absolute right-0 top-0 -z-20 hidden h-[75%] w-[39%] lg:block">
        <Image src={portrait} alt="" fill priority sizes="39vw" className={`object-cover object-[50%_15%] ${portraitTone}`} />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70" />
      </div>
      <RedGlow className="-left-60 top-1/4 h-[48rem] w-[48rem]" />
      <RedGlow className="right-[14%] top-[58%] hidden h-[32rem] w-[32rem] opacity-60 lg:block" />

      <div className="container-custom">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-7">
            <span className="eyebrow">Simon Degala Campos</span>

            <h1 className="heading-display text-balance text-4xl leading-[1.08] sm:text-5xl lg:text-6xl xl:text-7xl">
              Senior Software Engineer
              <span className="mt-2 block text-brand">Backend &amp; Python Expert</span>
            </h1>

            <p className="max-w-2xl text-base font-medium leading-relaxed text-white/70 sm:text-lg">
              Senior Software Engineer | Backend &amp; Python Expert with 6+ years of specialization in designing and building scalable, high-performance backend systems. Skilled AI/ML Engineer with a strong track record in developing robust AI agents and intelligent solutions. Proficient in creating efficient, scalable architectures that drive innovation and support complex AI workflows. Adept at leveraging cutting-edge technologies to deliver impactful, reliable backend services for demanding applications.
            </p>

            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
              <button onClick={() => scrollToSection('projects')} className="btn-primary w-full sm:w-auto">
                View my work
                <ArrowRight className="h-4 w-4" />
              </button>
              <button onClick={() => scrollToSection('contact')} className="btn-secondary w-full sm:w-auto">
                Contact me
              </button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[15rem] lg:hidden">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-brand/40 shadow-glow-sm">
              <Image src={portrait} alt={portraitAlt} fill priority sizes="240px" className={`object-cover object-top ${portraitTone}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-24">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-ink-700/80 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-brand/60 bg-brand/15 text-brand-glow">
                  <stat.icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-display text-4xl font-bold leading-none text-white">
                    {stat.value}
                    <span className="text-brand">+</span>
                  </div>
                  <div className="mt-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/60">{stat.label}</div>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {stat.tags.map((tag) => (
                  <span key={tag} className="tag-dark text-[11px]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

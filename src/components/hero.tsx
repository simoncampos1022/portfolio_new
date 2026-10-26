'use client'

import Image from 'next/image'
import { ArrowRight, Code, Target } from 'lucide-react'
import { scrollToSection } from '@/lib/scroll-to-section'
import { RedGlow } from '@/components/red-glow'
import { cn } from '@/lib/utils'

const summary =
  'I design and build scalable, high-performance backend systems and robust AI agents. My focus: efficient architectures for complex AI workflows and reliable services for demanding applications.'

const stats = [
  { label: 'Years Experience', value: '6', icon: Target },
  { label: 'Projects Completed', value: '47', icon: Code },
]

const portrait = '/photo/photo (2).png'
const portraitAlt = 'Simon Degala Campos - Senior Software Engineer | Backend & Python Expert'
const portraitTone = 'grayscale contrast-125 brightness-[0.7]'

export function Hero() {
  return (
    <section id="home" className="section-dark px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-20 lg:pt-40">
      {/* Portrait backdrop, faded into black on the text side */}
      <div aria-hidden="true" className="absolute right-0 top-0 -z-20 hidden h-[58rem] max-h-full w-[39%] lg:block">
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

        <div className="mt-16 rounded-2xl border border-white/10 bg-ink-700/80 p-6 backdrop-blur-sm sm:p-8 lg:mt-24">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between xl:gap-12">
            <p className="max-w-2xl text-base font-medium leading-relaxed text-white/75 sm:text-lg">{summary}</p>

            <div className="grid shrink-0 grid-cols-2 divide-x divide-white/10 border-t border-white/10 pt-6 xl:border-l xl:border-t-0 xl:pl-12 xl:pt-0">
              {stats.map((stat, index) => (
                <div key={stat.label} className={cn('flex items-center gap-4', index === 0 ? 'pr-5 sm:pr-10' : 'pl-5 sm:pl-10')}>
                  <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-brand/60 bg-brand/15 text-brand-glow sm:flex">
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

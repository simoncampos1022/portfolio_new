'use client'

import { useParams, useRouter } from 'next/navigation'
import { Calendar, MapPin, Building, ArrowLeft, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import { formatDateRange } from '@/lib/utils'
import { experiences, companyLogos } from '@/data/experiences'
import { RedGlow } from '@/components/red-glow'

export default function ExperienceDetailPage() {
  const params = useParams()
  const router = useRouter()
  const id = parseInt(params.id as string)

  const experience = experiences.find((exp) => exp.id === id)

  if (!experience) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black px-4">
        <div className="text-center">
          <h1 className="heading-display mb-6 text-3xl text-white">Experience not found</h1>
          <button onClick={() => router.push('/#experience')} className="btn-primary">
            Back to experience
          </button>
        </div>
      </div>
    )
  }

  return (
    <section className="section-dark min-h-screen px-4 pb-24 pt-28 sm:px-6 lg:px-8 lg:pt-36">
      <RedGlow className="-right-56 -top-40 h-[44rem] w-[44rem]" />
      <RedGlow className="-left-64 top-[55%] h-[40rem] w-[40rem] opacity-60" />

      <div className="container-custom">
        <div className="mx-auto max-w-5xl">
          <button
            onClick={() => router.push('/#experience')}
            className="mb-10 flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-white/70 transition-colors hover:text-brand"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to experience</span>
          </button>

          <div className="card-dark mb-8 p-6 sm:p-8">
            <div className="mb-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6">
              {companyLogos[experience.company.toLowerCase()] ? (
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-white/15 bg-white sm:h-20 sm:w-20">
                  <Image
                    src={companyLogos[experience.company.toLowerCase()]}
                    alt={`${experience.company} logo`}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-brand/60 bg-brand/15 font-display text-2xl font-bold text-brand-glow sm:h-20 sm:w-20 sm:text-3xl">
                  {experience.logo}
                </span>
              )}

              <div className="flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <h1 className="heading-display text-2xl text-white sm:text-3xl md:text-4xl">{experience.title}</h1>
                  {!experience.endDate && <span className="tag-brand-dark">Current</span>}
                </div>
                <p className="mb-4 text-lg font-semibold text-brand-glow sm:text-xl">{experience.company}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {formatDateRange(experience.startDate, experience.endDate)}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {experience.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Building className="h-4 w-4" />
                    {experience.type}
                  </span>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="subheading mb-4 text-white">About the company</h2>
              <p className="leading-relaxed text-white/75">{experience.description}</p>
            </div>
          </div>

          <div className="card-dark mb-8 p-6 sm:p-8">
            <h2 className="subheading mb-6 text-white">Key achievements &amp; responsibilities</h2>
            <div className="space-y-3">
              {experience.achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-4 rounded-lg border border-white/5 bg-black/40 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-glow" />
                  <span className="text-sm leading-relaxed text-white/80 sm:text-base">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card-dark p-6 sm:p-8">
            <h2 className="subheading mb-6 text-white">Technologies &amp; tools</h2>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <span key={tech} className="tag-dark text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <button onClick={() => router.push('/#experience')} className="btn-secondary">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to all experience</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useParams, useRouter } from 'next/navigation'
import { Calendar, MapPin, Building, ArrowLeft, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import { formatDateRange } from '@/lib/utils'
import { experiences, companyLogos } from '@/data/experiences'

export default function ExperienceDetailPage() {
  const params = useParams()
  const router = useRouter()
  const id = parseInt(params.id as string)

  const experience = experiences.find((exp) => exp.id === id)

  if (!experience) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 font-heading text-2xl font-semibold text-neutral-900 dark:text-white">
            Experience not found
          </h1>
          <button onClick={() => router.push('/#experience')} className="btn-primary">
            Back to experience
          </button>
        </div>
      </div>
    )
  }

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="mx-auto max-w-5xl">
          <button
            onClick={() => router.push('/#experience')}
            className="mb-8 flex items-center gap-2 text-sm font-medium text-neutral-600 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-white"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to experience</span>
          </button>

          <div className="surface-card mb-8 p-6 sm:p-8">
            <div className="mb-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
              {companyLogos[experience.company.toLowerCase()] ? (
                <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-800 sm:h-20 sm:w-20">
                  <Image
                    src={companyLogos[experience.company.toLowerCase()]}
                    alt={`${experience.company} logo`}
                    width={80}
                    height={80}
                    className="h-14 w-14 object-contain sm:h-16 sm:w-16"
                  />
                </div>
              ) : (
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-900 font-heading text-2xl font-semibold text-black dark:text-white sm:h-20 sm:w-20 sm:text-3xl">
                  {experience.logo}
                </span>
              )}

              <div className="flex-1">
                <h1 className="mb-2 font-heading text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-3xl md:text-4xl">
                  {experience.title}
                </h1>
                <p className="mb-4 text-lg font-medium text-black dark:text-white sm:text-xl">{experience.company}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
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

            <div className="border-t border-neutral-200 pt-6 dark:border-neutral-800">
              <h2 className="mb-3 font-heading text-lg font-semibold text-neutral-900 dark:text-white">
                About the company
              </h2>
              <p className="leading-relaxed text-neutral-600 dark:text-neutral-400">{experience.description}</p>
            </div>
          </div>

          <div className="surface-card mb-8 p-6 sm:p-8">
            <h2 className="mb-6 font-heading text-xl font-semibold text-neutral-900 dark:text-white sm:text-2xl">
              Key achievements & responsibilities
            </h2>
            <div className="space-y-3">
              {experience.achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3 rounded-lg bg-neutral-50 p-4 dark:bg-neutral-800/50">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-black dark:text-white" />
                  <span className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card p-6 sm:p-8">
            <h2 className="mb-6 font-heading text-xl font-semibold text-neutral-900 dark:text-white sm:text-2xl">
              Technologies & tools
            </h2>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <button onClick={() => router.push('/#experience')} className="btn-secondary flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to all experience</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

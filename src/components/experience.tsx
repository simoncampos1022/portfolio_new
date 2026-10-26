'use client'

import { Calendar, MapPin, Building, ArrowRight, Download } from 'lucide-react'
import { formatDateRange } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { experiences, companyLogos } from '@/data/experiences'
import { SectionHeader } from '@/components/section-header'

export function Experience() {
  return (
    <section id="experience" className="section-light section-padding">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            tone="light"
            title={
              <>
                Work <span className="text-brand">experience</span>
              </>
            }
            subtitle="A journey through diverse roles building scalable systems and AI solutions"
            action={
              <a href="/resume/Simon_Campos_Resume.pdf" download className="btn-secondary-light">
                <Download className="h-4 w-4" />
                Resume
              </a>
            }
          />

          <div className="relative">
            <div className="absolute bottom-0 left-[7px] top-0 w-px bg-line" />

            <div className="space-y-8">
              {experiences.map((experience) => (
                <div key={experience.id} className="relative pl-10 sm:pl-12">
                  <span className="absolute left-0 top-9 h-[15px] w-[15px] rounded-full border-2 border-white bg-brand shadow-glow-sm" />

                  <Link href={`/experience/${experience.id}`} className="group block">
                    <article className="card-light p-6 group-hover:border-brand/60 group-hover:shadow-lg sm:p-8">
                      <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                        <div className="flex items-center gap-4">
                          {companyLogos[experience.company.toLowerCase()] ? (
                            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-line bg-white">
                              <Image
                                src={companyLogos[experience.company.toLowerCase()]}
                                alt={`${experience.company} logo`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ) : (
                            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-brand/50 bg-brand/10 font-display text-lg font-bold text-brand">
                              {experience.logo}
                            </span>
                          )}
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="font-display text-xl font-bold tracking-tight text-black">{experience.title}</h3>
                              {!experience.endDate && <span className="tag-brand">Current</span>}
                            </div>
                            <p className="font-semibold text-brand">{experience.company}</p>
                          </div>
                        </div>

                        <div className="space-y-1 text-sm text-neutral-500 sm:text-right">
                          <div className="flex items-center gap-1.5 sm:justify-end">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>{formatDateRange(experience.startDate, experience.endDate)}</span>
                          </div>
                          <div className="flex items-center gap-1.5 sm:justify-end">
                            <MapPin className="h-3.5 w-3.5" />
                            <span>{experience.location}</span>
                          </div>
                          <div className="flex items-center gap-1.5 sm:justify-end">
                            <Building className="h-3.5 w-3.5" />
                            <span>{experience.type}</span>
                          </div>
                        </div>
                      </div>

                      <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
                        {experience.description}
                      </p>

                      <div className="flex flex-col gap-4 border-t border-neutral-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex flex-wrap gap-1.5">
                          {experience.technologies.slice(0, 5).map((tech) => (
                            <span key={tech} className="tag-light text-[11px]">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <span className="inline-flex shrink-0 items-center gap-1.5 font-display text-sm font-semibold uppercase tracking-wide text-brand">
                          View details
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </article>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

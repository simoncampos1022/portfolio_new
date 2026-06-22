'use client'

import { Calendar, MapPin, Building, ArrowRight } from 'lucide-react'
import { formatDateRange } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { experiences, companyLogos } from '@/data/experiences'
import { SectionHeader } from '@/components/section-header'

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            title={
              <>
                Work <span className="gradient-text">experience</span>
              </>
            }
            subtitle="A journey through diverse roles building scalable systems and AI solutions"
            accent="blue"
          />

          <div className="relative space-y-8 border-l border-neutral-200 pl-8 dark:border-neutral-800">
            {experiences.map((experience) => (
              <div key={experience.id} className="relative">
                <div className="absolute -left-8 top-[3rem] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-black dark:border-neutral-950 dark:bg-white" />

                <Link href={`/experience/${experience.id}`} className="group block">
                  <div className="surface-card-hover flex cursor-pointer flex-col p-6">
                    <div className="mb-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                      <div className="flex items-center gap-3">
                        {companyLogos[experience.company.toLowerCase()] ? (
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-800">
                            <Image
                              src={companyLogos[experience.company.toLowerCase()]}
                              alt={`${experience.company} logo`}
                              width={44}
                              height={44}
                              className="h-8 w-8 object-contain"
                            />
                          </div>
                        ) : (
                          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-900 text-sm font-semibold text-black dark:text-white">
                            {experience.logo}
                          </span>
                        )}
                        <div>
                          <h3 className="font-heading text-lg font-semibold text-neutral-900 transition-colors group-hover:text-black dark:text-white dark:group-hover:text-white">
                            {experience.title}
                          </h3>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">{experience.company}</p>
                        </div>
                      </div>

                      <div className="space-y-1 text-sm text-neutral-500 dark:text-neutral-400 sm:text-right">
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

                    <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                      {experience.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {experience.technologies.slice(0, 5).map((tech) => (
                        <span key={tech} className="tag text-[11px]">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex justify-end">
                      <span className="btn-secondary !px-4 !py-2 text-sm">
                        View details
                        <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

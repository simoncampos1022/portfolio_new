'use client'

import { Calendar, MapPin, Building} from 'lucide-react'
import { SiUpwork } from '@icons-pack/react-simple-icons';
import { formatDateRange } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { experiences, companyLogos } from '@/data/experiences'

export function Experience() {
  return (
    <section id="experience" className="section-padding night-sky-content">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              A journey through diverse roles building scalable systems and AI solutions
            </p>
            <div className="w-24 h-1 gradient-bg rounded-full mx-auto mt-4 sm:mt-6" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500 transform md:-translate-x-0.5" />

            {/* Experience Cards */}
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div
                  key={experience.id}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-gray-800 transform md:-translate-x-2 z-10" />

                  {/* Experience Card */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  } w-full`}>
                    <div className="group bg-white dark:bg-gray-900 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700 hover:-translate-y-1"
                    >
                      {/* Company Logo */}
                      <div className="flex items-center space-x-3 sm:space-x-4 mb-4">
                        {experience.company.toLowerCase() === 'upwork' ? (
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center flex-shrink-0">
                            <SiUpwork className="w-6 h-6 sm:w-8 sm:h-8 text-[#6fda44]" aria-label="Upwork" />
                          </div>
                        ) : companyLogos[experience.company.toLowerCase()] ? (
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center flex-shrink-0">
                            <Image
                              src={companyLogos[experience.company.toLowerCase()]}
                              alt={`${experience.company} logo`}
                              width={48}
                              height={48}
                              className="object-contain w-8 h-8 sm:w-10 sm:h-10"
                            />
                          </div>
                        ) : (
                          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r ${experience.color} flex items-center justify-center text-white font-bold text-base sm:text-lg flex-shrink-0`}>
                            {experience.logo}
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white truncate">
                            {experience.title}
                          </h3>
                          <p className="text-sm sm:text-base text-primary-600 dark:text-primary-400 font-medium truncate">
                            {experience.company}
                          </p>
                        </div>
                      </div>

                      {/* Meta Information */}
                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                          <span className="truncate">{formatDateRange(experience.startDate, experience.endDate)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                          <span className="truncate">{experience.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Building className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                          <span className="truncate">{experience.type}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed line-clamp-2 sm:line-clamp-3">
                        {experience.description}
                      </p>

                      {/* Key Achievements - Show only 3 */}
                      <div className="mb-4">
                        <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-1 sm:space-y-1.5">
                          {experience.achievements.slice(0, 3).map((achievement, achIndex) => (
                            <li key={achIndex} className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 flex items-start">
                              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary-500 rounded-full mt-1.5 sm:mt-2 mr-2 flex-shrink-0" />
                              <span className="line-clamp-1 sm:line-clamp-2">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                        {experience.achievements.length > 3 && (
                          <p className="text-xs sm:text-sm text-primary-600 dark:text-primary-400 font-medium mt-2">
                            +{experience.achievements.length - 3} more achievements
                          </p>
                        )}
                      </div>

                      {/* Technologies - Show limited */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                        {experience.technologies.slice(0, 6).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 sm:py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                        {experience.technologies.length > 6 && (
                          <span className="px-2 py-0.5 sm:py-1 text-primary-600 dark:text-primary-400 text-xs font-medium">
                            +{experience.technologies.length - 6}
                          </span>
                        )}
                      </div>

                      {/* View Details Button */}
                      <Link href={`/experience/${experience.id}`}>
                        <button className="w-full mt-2 px-4 py-2.5 sm:py-3 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group-hover:shadow-lg">
                          <span className="text-sm sm:text-base">View Details</span>
                          <svg 
                            className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800/30">
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              <span className="text-primary-700 dark:text-primary-300 font-medium">
                Open to new opportunities and collaborations
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

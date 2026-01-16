'use client'

import { useParams, useRouter } from 'next/navigation'
import { Calendar, MapPin, Building, ArrowLeft, CheckCircle2 } from 'lucide-react'
import { SiUpwork } from '@icons-pack/react-simple-icons'
import Image from 'next/image'
import { formatDateRange } from '@/lib/utils'
import { experiences, companyLogos } from '@/data/experiences'

export default function ExperienceDetailPage() {
  const params = useParams()
  const router = useRouter()
  const id = parseInt(params.id as string)
  
  const experience = experiences.find(exp => exp.id === id)

  if (!experience) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Experience not found</h1>
          <button
            onClick={() => router.push('/experience')}
            className="btn-primary"
          >
            Back to Experience
          </button>
        </div>
      </div>
    )
  }

  return (
    <section className="section-padding night-sky-content">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => router.push('/experience')}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 mb-8 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Experience</span>
          </button>

          {/* Header Card */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
              {/* Company Logo */}
              {experience.company.toLowerCase() === 'upwork' ? (
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center flex-shrink-0">
                  <SiUpwork className="w-10 h-10 sm:w-12 sm:h-12 text-[#6fda44]" aria-label="Upwork" />
                </div>
              ) : companyLogos[experience.company.toLowerCase()] ? (
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center flex-shrink-0">
                  <Image
                    src={companyLogos[experience.company.toLowerCase()]}
                    alt={`${experience.company} logo`}
                    width={80}
                    height={80}
                    className="object-contain w-14 h-14 sm:w-16 sm:h-16"
                  />
                </div>
              ) : (
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-r ${experience.color} flex items-center justify-center text-white font-bold text-2xl sm:text-3xl flex-shrink-0`}>
                  {experience.logo}
                </div>
              )}

              {/* Title and Company */}
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {experience.title}
                </h1>
                <p className="text-lg sm:text-xl text-primary-600 dark:text-primary-400 font-medium mb-4">
                  {experience.company}
                </p>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-4 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>{formatDateRange(experience.startDate, experience.endDate)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>{experience.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Building className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>{experience.type}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                About the Company
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {experience.description}
              </p>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Key Achievements & Responsibilities
            </h2>
            <ul className="space-y-4">
              {experience.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-primary-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Technologies & Tools
            </h2>
            <div className="flex flex-wrap gap-3">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 border border-primary-200 dark:border-primary-800/30 text-gray-700 dark:text-gray-300 rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-12">
            <button
              onClick={() => router.push('/experience')}
              className="btn-secondary flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to All Experience</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

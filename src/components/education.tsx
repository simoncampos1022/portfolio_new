'use client'

import { Calendar, MapPin, Code, Award, BookOpen } from 'lucide-react'
import Image from 'next/image'

const education = {
  degree: "Bachelor's Degree in Computer Science",
  university: 'University of Rizal System (URS)',
  location: 'Tanay, Philippines',
  duration: '2016 - 2019',
  highlights: [
    'Completed coursework in software development, data structures, algorithms, databases, and programming languages',
    'Participated in projects involving web development, mobile apps, and software design',
    'Gained practical experience in coding, debugging, and collaborative development environments'
  ]
}

const achievements = [
  {
    title: 'Software Development Projects',
    description: 'Developed multiple web applications and mobile apps as part of coursework, implementing full-stack solutions with modern technologies',
    icon: Code
  },
  {
    title: 'Data Structures & Algorithms',
    description: 'Completed advanced coursework in data structures, algorithms, and computational complexity, applying these concepts in practical projects',
    icon: BookOpen
  },
  {
    title: 'Database Systems',
    description: 'Designed and implemented relational database systems, learning SQL optimization and database management principles',
    icon: Award
  }
]

export function Education() {
  return (
    <section id="education" className="section-padding night-sky-content">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Education
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              Foundation in computer science and hands-on project experience
            </p>
            <div className="w-24 h-1 gradient-bg rounded-full mx-auto mt-4 sm:mt-6" />
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Education Details */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Education Details
                </h3>
                <div className="rounded-xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md mb-4">
                  <Image
                    src="/education/education_logo1.png"
                    alt="University of Rizal System (URS) website"
                    width={1200}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl p-4 sm:p-6 border border-primary-100 dark:border-primary-800/30">
                  <div className="flex items-start space-x-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {education.degree}
                      </h4>
                      <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                        {education.university}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{education.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{education.location}</span>
                        </div>
                      </div>

                      <div>
                        <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          Key Highlights:
                        </h5>
                        <ul className="space-y-1">
                          {education.highlights.map((highlight, index) => (
                            <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Academic Achievements
                </h3>
                <div className="space-y-4">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement.title}
                      className="flex items-start space-x-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                    >
                      <achievement.icon className="h-5 w-5 text-primary-600 dark:text-primary-400 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800/30">
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              <span className="text-primary-700 dark:text-primary-300 font-medium">
                Continuous learning and skill development
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

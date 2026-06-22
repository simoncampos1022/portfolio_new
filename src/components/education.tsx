'use client'

import { Calendar, MapPin, Code, Award, BookOpen } from 'lucide-react'
import Image from 'next/image'
import { SectionHeader } from '@/components/section-header'

const education = {
  degree: "Bachelor's Degree in Computer Science",
  university: 'University of Rizal System (URS)',
  location: 'Tanay, Philippines',
  duration: '2016 - 2019',
  highlights: [
    'Completed coursework in software development, data structures, algorithms, databases, and programming languages',
    'Participated in projects involving web development, mobile apps, and software design',
    'Gained practical experience in coding, debugging, and collaborative development environments',
  ],
}

const achievements = [
  {
    title: 'Software Development Projects',
    description:
      'Developed multiple web applications and mobile apps as part of coursework, implementing full-stack solutions with modern technologies',
    icon: Code,
  },
  {
    title: 'Data Structures & Algorithms',
    description:
      'Completed advanced coursework in data structures, algorithms, and computational complexity, applying these concepts in practical projects',
    icon: BookOpen,
  },
  {
    title: 'Database Systems',
    description:
      'Designed and implemented relational database systems, learning SQL optimization and database management principles',
    icon: Award,
  },
]

export function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            title="Education"
            subtitle="Foundation in computer science and hands-on project experience"
            accent="purple"
          />

          <div className="mx-auto max-w-4xl space-y-8">
            <div className="surface-card overflow-hidden">
              <Image
                src="/education/education_logo1.png"
                alt="University of Rizal System (URS) website"
                width={1200}
                height={400}
                className="h-auto w-full"
              />
            </div>

            <div className="surface-card p-6">
              <h4 className="mb-2 font-heading text-xl font-semibold text-neutral-900 dark:text-white">
                {education.degree}
              </h4>
              <p className="mb-4 text-sm font-medium text-black dark:text-white">{education.university}</p>
              <div className="mb-4 flex flex-wrap gap-4 text-sm text-neutral-500 dark:text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {education.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  {education.location}
                </span>
              </div>
              <h5 className="mb-3 text-sm font-medium text-neutral-700 dark:text-neutral-300">Key highlights</h5>
              <ul className="space-y-2">
                {education.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start text-sm text-neutral-600 dark:text-neutral-400">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black dark:bg-white" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {achievements.map((achievement) => (
                <div key={achievement.title} className="surface-card-hover p-5">
                  <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white">
                    <achievement.icon className="h-5 w-5" />
                  </span>
                  <h4 className="mb-2 font-heading text-sm font-semibold text-neutral-900 dark:text-white">
                    {achievement.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

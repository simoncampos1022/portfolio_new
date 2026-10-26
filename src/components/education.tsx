'use client'

import { Calendar, MapPin, Code, Award, BookOpen, GraduationCap } from 'lucide-react'
import Image from 'next/image'
import { SectionHeader } from '@/components/section-header'
import { RedGlow } from '@/components/red-glow'

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
    <section id="education" className="section-dark section-padding">
      <RedGlow className="-right-48 top-0 h-[40rem] w-[40rem]" />

      <div className="container-custom">
        <SectionHeader title="Education" subtitle="Foundation in computer science and hands-on project experience" />

        <div className="mx-auto max-w-6xl space-y-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl">
              <Image
                src="/education/education_logo1.png"
                alt="University of Rizal System (URS) website"
                width={1200}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="card-dark flex flex-col p-6 sm:p-8">
              <div className="mb-5 flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-brand/60 bg-brand/15 text-brand-glow">
                  <GraduationCap className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold leading-snug tracking-tight text-white">
                    {education.degree}
                  </h3>
                  <p className="mt-1 font-semibold text-brand-glow">{education.university}</p>
                </div>
              </div>
              <div className="mb-6 flex flex-wrap gap-4 text-sm text-white/60">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {education.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  {education.location}
                </span>
              </div>
              <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
                Key highlights
              </h4>
              <ul className="space-y-3">
                {education.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm leading-relaxed text-white/75 sm:text-base">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-sm bg-brand shadow-glow-sm" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {achievements.map((achievement) => (
              <div key={achievement.title} className="card-dark-hover p-6">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-brand/60 bg-brand/15 text-brand-glow">
                  <achievement.icon className="h-5 w-5" />
                </span>
                <h4 className="mb-2 font-display text-base font-bold uppercase tracking-wide text-white">
                  {achievement.title}
                </h4>
                <p className="text-sm leading-relaxed text-white/65">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

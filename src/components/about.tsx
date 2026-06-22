'use client'

import { Code, Brain, Database, Cloud, Target } from 'lucide-react'
import { SectionHeader } from '@/components/section-header'

const stats = [
  {
    label: 'Years Experience',
    value: '6+',
    icon: Target,
    tags: ['Chief Technology Officer', 'AI/ML & Full-Stack', 'Senior Backend Developer', 'Junior Backend Developer'],
    tagsLayout: 'col' as const,
  },
  {
    label: 'Projects Completed',
    value: '47+',
    icon: Code,
    tags: ['AI/ML', 'Frontend', 'Backend', 'Full-stack'],
    tagsLayout: 'row' as const,
  },
]

const highlights = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description:
      'Specialized in developing AI agents, ML pipelines, and intelligent solutions using TensorFlow, PyTorch, and modern AI frameworks.',
  },
  {
    icon: Database,
    title: 'Backend Architecture',
    description:
      'Expert in designing scalable backend systems with microservices, REST APIs, GraphQL, and cloud-native architectures.',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description:
      'Proficient in AWS, Azure, Docker, Kubernetes, and CI/CD pipelines for reliable, scalable deployments.',
  },
]

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title={
              <>
                About <span className="gradient-text">me</span>
              </>
            }
            accent="blue"
          />

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-8">
              <div className="space-y-4 text-sm leading-relaxed sm:text-base">
                <p className="hyphens-auto text-justify text-neutral-600 dark:text-neutral-400">
                  Senior Software Engineer | Backend &amp; Python Expert with 6+ years of specialization in designing and building scalable, high-performance backend systems. Skilled AI/ML Engineer with a strong track record in developing robust AI agents and intelligent solutions.
                </p>
                <p className="hyphens-auto text-justify text-neutral-600 dark:text-neutral-400">
                  Proficient in creating efficient, scalable architectures that drive innovation and support complex AI workflows. Adept at leveraging cutting-edge technologies to deliver impactful, reliable backend services for demanding applications.
                </p>
                <p className="hyphens-auto text-justify text-neutral-600 dark:text-neutral-400">
                  Currently Founder &amp; CTO at PXI Labs LLC, building PXI Studio end to end across mobile, web, and API. Previously I worked in the AI/ML &amp; Full-Stack field as a freelancer and as Senior Backend Developer at Plentina, a BNPL fintech startup in the Philippines.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="surface-card flex flex-col items-start gap-3 px-5 py-4">
                    <div className="flex items-center gap-4">
                      <stat.icon className="h-5 w-5 shrink-0 text-black dark:text-white" />
                      <div>
                        <div className="text-2xl font-semibold text-neutral-900 dark:text-white">{stat.value}</div>
                        <div className="text-sm text-neutral-600 dark:text-neutral-400">{stat.label}</div>
                      </div>
                    </div>
                    <div
                      className={
                        stat.tagsLayout === 'col'
                          ? 'flex flex-col gap-1.5 pl-9'
                          : 'flex flex-wrap gap-1.5 pl-9'
                      }
                    >
                      {stat.tags.map((tag) => (
                        <span key={tag} className="tag w-fit text-[11px]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 lg:col-span-4">
              {highlights.map((highlight) => (
                <div key={highlight.title} className="surface-card-hover p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white">
                      <highlight.icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-heading text-base font-semibold text-neutral-900 dark:text-white">
                      {highlight.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

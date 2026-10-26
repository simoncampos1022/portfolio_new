'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Github, Eye, Search, ArrowDownUp, ArrowRight, ChevronLeft, ChevronRight, Smartphone } from 'lucide-react'
import Image from 'next/image'
import { projects } from '@/data/projects'
import { SectionHeader } from '@/components/section-header'
import { ProjectMedia } from '@/components/project-media'
import { RedGlow } from '@/components/red-glow'
import { cn, isSvgImage } from '@/lib/utils'

const categories = ['All', 'AI/ML', 'Frontend', 'Mobile', 'Backend', 'FullStack', 'Trading', 'DevOps']
const sortOptions = ['Time', 'A-Z', 'Size'] as const
type SortOption = (typeof sortOptions)[number]
const PROJECTS_PER_PAGE = 9

const projectOrder = new Map(projects.map((project, index) => [project.id, index]))

function getProjectSize(project: (typeof projects)[number]) {
  return (
    project.technologies.length +
    project.features.length +
    project.images.length +
    project.description.length
  )
}

function hasMobileTriplePreview(project: (typeof projects)[number]) {
  return project.category.some((cat) => cat.toLowerCase() === 'mobile') && project.images.length >= 3
}

const segmentClass = (isActive: boolean) =>
  cn(
    'whitespace-nowrap font-display font-semibold uppercase tracking-wide transition-colors',
    isActive ? 'bg-brand text-white' : 'bg-ink-700 text-white/70 hover:bg-ink-600 hover:text-white'
  )

const cardLinkClass = 'rounded-lg p-1.5 text-neutral-500 transition-colors hover:bg-brand/10 hover:text-brand'

export function Projects() {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState<SortOption>('Time')
  const [sortReverse, setSortReverse] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const mapCategory = (
    category: string | string[]
  ): 'AI/ML' | 'Frontend' | 'Mobile' | 'Backend' | 'FullStack' | 'Trading' | 'DevOps' => {
    const cats = Array.isArray(category) ? category : [category]
    const c = cats[0]?.toLowerCase() || ''
    if (c === 'full-stack' || c === 'full stack') return 'FullStack'
    if (c === 'frontend') return 'Frontend'
    if (c === 'mobile') return 'Mobile'
    if (c === 'backend') return 'Backend'
    if (c === 'trading') return 'Trading'
    if (c === 'devops' || c === 'dev ops') return 'DevOps'
    if (['ai/ml', 'mobile ai', 'nlp/llm', 'computer vision', 'data science'].includes(c)) return 'AI/ML'
    return 'AI/ML'
  }

  const hasCategory = (projectCategories: string[], selected: string): boolean => {
    if (selected === 'All') return true
    return projectCategories.some((cat) => mapCategory(cat) === selected)
  }

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = hasCategory(project.category, selectedCategory)
    const q = searchQuery.toLowerCase()
    const matchesSearch =
      !q ||
      project.title.toLowerCase().includes(q) ||
      project.subtitle.toLowerCase().includes(q) ||
      project.description.toLowerCase().includes(q) ||
      project.technologies.some((t) => t.toLowerCase().includes(q))
    return matchesCategory && matchesSearch
  })

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    let result = 0

    if (sortBy === 'A-Z') {
      result = a.title.localeCompare(b.title)
    } else if (sortBy === 'Size') {
      result = getProjectSize(b) - getProjectSize(a)
    } else {
      result = (projectOrder.get(a.id) ?? 0) - (projectOrder.get(b.id) ?? 0)
    }

    return sortReverse ? -result : result
  })

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategory, searchQuery, sortBy, sortReverse])

  const totalPages = Math.max(1, Math.ceil(sortedProjects.length / PROJECTS_PER_PAGE))
  const safePage = Math.min(currentPage, totalPages)
  const paginatedProjects = sortedProjects.slice(
    (safePage - 1) * PROJECTS_PER_PAGE,
    safePage * PROJECTS_PER_PAGE
  )

  return (
    <section id="projects" className="section-dark section-padding">
      <RedGlow className="-right-56 -top-40 h-[44rem] w-[44rem]" />
      <RedGlow className="-bottom-48 -left-56 h-[40rem] w-[40rem] opacity-70" />

      <div className="container-custom">
        <SectionHeader
          title={
            <>
              Featured <span className="text-brand">projects</span>
            </>
          }
          subtitle="Showcasing my expertise in AI, backend development, and full-stack solutions"
          action={
            <a
              href="https://github.com/simoncampos1022"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Github className="h-4 w-4" />
              View GitHub
            </a>
          }
        />

        <div className="mb-10 space-y-4">
          <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
            <div className="flex min-w-max divide-x divide-white/10 overflow-hidden rounded-lg border border-white/10 lg:min-w-0">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={cn('flex-1 px-5 py-3.5 text-sm', segmentClass(selectedCategory === category))}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full sm:max-w-md sm:flex-1">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects or technologies..."
                className="form-input pl-11"
              />
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">Sort</span>
              <div className="flex divide-x divide-white/10 overflow-hidden rounded-lg border border-white/10">
                {sortOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setSortBy(option)}
                    className={cn('px-4 py-2.5 text-xs', segmentClass(sortBy === option))}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setSortReverse((prev) => !prev)}
                aria-label={sortReverse ? 'Sort ascending' : 'Sort descending'}
                title={sortReverse ? 'Reverse to ascending' : 'Reverse to descending'}
                className={cn(
                  'rounded-lg border p-2.5 transition-colors',
                  sortReverse
                    ? 'border-brand bg-brand text-white'
                    : 'border-white/10 bg-ink-700 text-white/70 hover:bg-ink-600 hover:text-white'
                )}
              >
                <ArrowDownUp className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {paginatedProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => router.push(`/projects/${project.id}`)}
              className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl bg-white text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_0_1px_#e60000,0_0_28px_rgba(230,0,0,0.45)]"
            >
              <div className="relative h-56 overflow-hidden bg-neutral-100 sm:h-60">
                {hasMobileTriplePreview(project) ? (
                  <div className="absolute inset-0 flex items-center justify-center gap-1.5 bg-black px-3 py-4 sm:gap-2 sm:px-4">
                    {project.images.slice(0, 3).map((src) => (
                      <div key={src} className="relative h-full min-w-0 flex-1">
                        <Image
                          src={src}
                          alt={`${project.title} preview`}
                          fill
                          className="object-contain object-center transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 28vw, 10vw"
                        />
                      </div>
                    ))}
                  </div>
                ) : project.image ? (
                  <ProjectMedia
                    src={project.image}
                    alt={project.title}
                    fill
                    className={cn(
                      'transition-transform duration-300 group-hover:scale-105',
                      isSvgImage(project.image) ? 'object-contain p-10' : 'object-cover'
                    )}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 isolate flex items-center justify-center overflow-hidden bg-black p-6">
                    <RedGlow className="-bottom-40 -right-32 h-80 w-80" />
                    <h3 className="heading-display text-center text-xl text-white">{project.title}</h3>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="flex flex-wrap gap-1.5">
                  {project.category.map((cat) => (
                    <span key={cat} className="tag-brand">
                      {mapCategory(cat)}
                    </span>
                  ))}
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-xl font-bold leading-snug tracking-tight text-black">{project.title}</h3>
                  <p className="text-sm font-medium text-neutral-500">{project.subtitle}</p>
                  <p className="line-clamp-2 text-sm leading-relaxed text-neutral-600">{project.description}</p>
                </div>
                <div className="mt-auto flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span key={tech} className="tag-light text-[11px]">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-3 border-t border-neutral-200 pt-4">
                  <span className="inline-flex items-center gap-1.5 font-display text-sm font-semibold uppercase tracking-wide text-brand">
                    View project
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="flex gap-1" onClick={(e) => e.stopPropagation()}>
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={cardLinkClass} title="Live">
                        <Eye className="h-4 w-4" />
                      </a>
                    )}
                    {project.appStoreUrl && (
                      <a
                        href={project.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cardLinkClass}
                        title="App Store"
                      >
                        <Smartphone className="h-4 w-4" />
                      </a>
                    )}
                    {project.playStoreUrl && (
                      <a
                        href={project.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cardLinkClass}
                        title="Google Play"
                      >
                        <Smartphone className="h-4 w-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={cardLinkClass} title="Code">
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {sortedProjects.length === 0 && (
          <p className="py-12 text-center text-white/50">No projects found matching your search.</p>
        )}

        {sortedProjects.length > 0 && totalPages > 1 && (
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-sm text-white/50">
              Showing {(safePage - 1) * PROJECTS_PER_PAGE + 1}–
              {Math.min(safePage * PROJECTS_PER_PAGE, sortedProjects.length)} of {sortedProjects.length} projects
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                disabled={safePage === 1}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-ink-700 text-white/70 transition-colors hover:border-brand/60 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Previous page"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  className={cn(
                    'h-10 min-w-10 rounded-lg border px-3 font-display text-sm font-semibold transition-colors',
                    safePage === page
                      ? 'border-brand bg-brand text-white shadow-glow-sm'
                      : 'border-white/10 bg-ink-700 text-white/70 hover:border-brand/60 hover:text-white'
                  )}
                >
                  {page}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                disabled={safePage === totalPages}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-ink-700 text-white/70 transition-colors hover:border-brand/60 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Next page"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Github, Eye, Search, ArrowDownUp, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { projects } from '@/data/projects'
import { SectionHeader } from '@/components/section-header'

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
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <SectionHeader
          title={
            <>
              Featured <span className="gradient-text">projects</span>
            </>
          }
          subtitle="Showcasing my expertise in AI, backend development, and full-stack solutions"
          accent="purple"
        />

        <div className="surface-card mb-8 space-y-4 p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full sm:max-w-md sm:flex-1">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects or technologies..."
                className="form-input rounded-full py-2.5 pl-11 pr-4"
              />
            </div>
            <div className="flex shrink-0 items-center gap-2">
              {sortOptions.map((option) => {
                const isActive = sortBy === option
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setSortBy(option)}
                    className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-black text-white dark:bg-white dark:text-black'
                        : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700'
                    }`}
                  >
                    {option}
                  </button>
                )
              })}
              <button
                type="button"
                onClick={() => setSortReverse((prev) => !prev)}
                aria-label={sortReverse ? 'Sort ascending' : 'Sort descending'}
                title={sortReverse ? 'Reverse to ascending' : 'Reverse to descending'}
                className={`rounded-full p-2 transition-colors ${
                  sortReverse
                    ? 'bg-black text-white dark:bg-white dark:text-black'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700'
                }`}
              >
                <ArrowDownUp className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const isActive = selectedCategory === category
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-black text-white dark:bg-white dark:text-black'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700'
                  }`}
                >
                  {category}
                </button>
              )
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {paginatedProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => router.push(`/projects/${project.id}`)}
              className="group surface-card-hover flex cursor-pointer flex-col overflow-hidden"
            >
              <div className="relative h-44 overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} flex items-center justify-center p-4`}>
                    <h3 className="text-center text-lg font-semibold text-white">{project.title}</h3>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col justify-between gap-4 p-5">
                <div className="space-y-2">
                  <span className="tag">{mapCategory(project.category)}</span>
                  <h3 className="font-heading text-lg font-semibold text-neutral-900 transition-colors group-hover:text-black dark:text-white dark:group-hover:text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{project.subtitle}</p>
                  <p className="line-clamp-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-start justify-between gap-3 border-t border-neutral-200 pt-4 dark:border-neutral-800">
                  <div className="flex flex-1 flex-wrap gap-1.5">
                    {project.technologies.slice(0, 6).map((tech) => (
                      <span key={tech} className="tag w-fit text-[11px]">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg p-1.5 text-neutral-500 hover:bg-neutral-100 hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white"
                        title="Live"
                      >
                        <Eye className="h-4 w-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg p-1.5 text-neutral-500 hover:bg-neutral-100 hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white"
                        title="Code"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {sortedProjects.length === 0 && (
          <p className="py-12 text-center text-neutral-500">No projects found matching your search.</p>
        )}

        {sortedProjects.length > 0 && totalPages > 1 && (
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Showing {(safePage - 1) * PROJECTS_PER_PAGE + 1}–
              {Math.min(safePage * PROJECTS_PER_PAGE, sortedProjects.length)} of {sortedProjects.length} projects
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                disabled={safePage === 1}
                className="rounded-full p-2 transition-colors disabled:cursor-not-allowed disabled:opacity-40 bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
                aria-label="Previous page"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                    safePage === page
                      ? 'bg-black text-white dark:bg-white dark:text-black'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                disabled={safePage === totalPages}
                className="rounded-full p-2 transition-colors disabled:cursor-not-allowed disabled:opacity-40 bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
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

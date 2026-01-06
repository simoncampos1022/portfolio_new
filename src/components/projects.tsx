'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ExternalLink, Github, Eye } from 'lucide-react'
import Image from 'next/image'
import { projects } from '@/data/projects'

const categories = ['All', 'AI/ML', 'Frontend', 'Backend', 'FullStack', 'Trading', 'DevOps']

export function Projects() {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState('All')

  const mapCategory = (category: string | string[]): 'AI/ML' | 'Frontend' | 'Backend' | 'FullStack' | 'Trading' | 'DevOps' => {
    const categories = Array.isArray(category) ? category : [category]
    const c = categories[0]?.toLowerCase() || ''
    if (c === 'full-stack' || c === 'full stack') return 'FullStack'
    if (c === 'frontend') return 'Frontend'
    if (c === 'backend') return 'Backend'
    if (c === 'trading') return 'Trading'
    if (c === 'devops' || c === 'dev ops') return 'DevOps'
    if (['ai/ml', 'mobile ai', 'nlp/llm', 'computer vision', 'data science'].includes(c)) return 'AI/ML'
    return 'AI/ML'
  }

  const getCategoryColor = (category: string | string[]): string => {
    const mappedCategory = mapCategory(category)
    switch (mappedCategory) {
      case 'AI/ML':
        return 'bg-purple-500 text-white'
      case 'Frontend':
        return 'bg-blue-500 text-white'
      case 'Backend':
        return 'bg-green-500 text-white'
      case 'FullStack':
        return 'bg-orange-500 text-white'
      case 'Trading':
        return 'bg-yellow-500 text-white'
      case 'DevOps':
        return 'bg-indigo-500 text-white'
      default:
        return 'bg-gray-500 text-white'
    }
  }

  const hasCategory = (projectCategories: string[], selected: string): boolean => {
    if (selected === 'All') return true
    return projectCategories.some(cat => {
      const mapped = mapCategory(cat)
      return mapped === selected
    })
  }

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => hasCategory(project.category, selectedCategory))

  const handleProjectClick = (projectId: number) => {
    router.push(`/projects/${projectId}`)
  }

  return (
    <section id="projects" className="section-padding night-sky-content">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Showcasing my expertise in AI, backend development, and full-stack solutions
            </p>
            <div className="w-24 h-1 gradient-bg rounded-full mx-auto mt-4 sm:mt-6" />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12 px-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-5 md:px-6 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white shadow-lg scale-105'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-0">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer"
                onClick={() => handleProjectClick(project.id)}
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl overflow-visible shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col relative">
                  {/* Star Image - positioned relative to card */}
                  <div className="absolute -top-3 -left-3 z-50 rotate-45">
                    <Image
                      src="/projects/star.png"
                      alt="Star"
                      width={32}
                      height={32}
                      className="h-6 w-6 sm:h-8 sm:w-8"
                    />
                  </div>
                  
                  {/* Project Image */}
                  <div className="h-40 sm:h-48 md:h-52 relative overflow-hidden flex-shrink-0 rounded-t-xl">
                    {project.image ? (
                      <>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                      </>
                    ) : (
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} flex items-center justify-center p-4 sm:p-6`}>
                        <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold text-center leading-tight px-2">
                          {project.title}
                        </h3>
                      </div>
                    )}
                    <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex flex-wrap gap-1 max-w-[60%] justify-end">
                      {project.category.slice(0, 2).map((cat, idx) => (
                        <span 
                          key={idx}
                          className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium ${getCategoryColor(cat)}`}
                        >
                          {mapCategory(cat)}
                        </span>
                      ))}
                      {project.category.length > 2 && (
                        <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium bg-gray-500 text-white">
                          +{project.category.length - 2}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                    <div className="mb-3 sm:mb-4">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200 mb-1 sm:mb-2 line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-primary-600 dark:text-primary-400 font-medium mb-2 sm:mb-3 line-clamp-1">
                        {project.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-3 sm:mb-4">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 sm:py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md truncate max-w-[120px] sm:max-w-none"
                          title={tech}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-2 py-0.5 sm:py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-1.5 sm:space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200 text-xs sm:text-sm font-medium"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span className="hidden sm:inline">Live Demo</span>
                          <span className="sm:hidden">Live</span>
                        </a>
                      )}
                      {/* Code Button - Always Displayed */}
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-1.5 sm:space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 text-xs sm:text-sm font-medium"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span>Code</span>
                        </a>
                      ) : (
                        <button
                          disabled
                          className="group/code flex items-center justify-center space-x-1.5 sm:space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 dark:border-gray-600 text-gray-400 dark:text-gray-500 rounded-lg cursor-not-allowed opacity-60 transition-colors duration-200 text-xs sm:text-sm font-medium"
                          onClick={(e) => {
                            e.stopPropagation()
                            e.preventDefault()
                          }}
                        >
                          <Github className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span className="code-text group-hover/code:hidden">Code</span>
                          <span className="code-hover-text hidden group-hover/code:inline">Private</span>
                        </button>
                      )}
                      {/* View Details Button - Always Displayed */}
                      <button
                        className="flex items-center justify-center space-x-1.5 sm:space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200 text-xs sm:text-sm font-medium w-full sm:w-auto"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleProjectClick(project.id)
                        }}
                      >
                        <span>View Details</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12 sm:py-16">
              <p className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

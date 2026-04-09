'use client'

import { useParams, useRouter } from 'next/navigation'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ExternalLink, Github, Zap, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react'
import { projects } from '@/data/projects'
import { PageNavigation } from '@/components/page-navigation'
import { ProjectImageLightbox } from '@/components/project-image-lightbox'

export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()
  const projectId = parseInt(params.id as string)
  const project = projects.find(p => p.id === projectId)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const goPrevImage = useCallback(() => {
    if (!project?.images?.length) return
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    )
  }, [project?.images])

  const goNextImage = useCallback(() => {
    if (!project?.images?.length) return
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    )
  }, [project?.images])

  useEffect(() => {
    if (!lightboxOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false)
      if (!project?.images || project.images.length < 2) return
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goPrevImage()
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        goNextImage()
      }
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [lightboxOpen, project?.images, goPrevImage, goNextImage])

  useEffect(() => {
    setLightboxOpen(false)
    setCurrentImageIndex(0)
  }, [projectId])

  // Find current project index and calculate previous/next projects
  const currentIndex = projects.findIndex(p => p.id === projectId)
  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => router.push('/projects')}
            className="btn-primary"
          >
            Back to Projects
          </button>
        </div>
      </div>
    )
  }

  const mapCategory = (category: string | string[]): 'AI/ML' | 'Frontend' | 'Mobile' | 'Backend' | 'FullStack' | 'Trading' | 'DevOps' => {
    const categories = Array.isArray(category) ? category : [category]
    const c = categories[0]?.toLowerCase() || ''
    if (c === 'full-stack' || c === 'full stack') return 'FullStack'
    if (c === 'frontend') return 'Frontend'
    if (c === 'mobile') return 'Mobile'
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
      case 'Mobile':
        return 'bg-cyan-500 text-white'
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

  return (
    <>
      <section className="section-padding night-sky-content min-h-screen">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            {/* Navigation Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
              {/* Back Button */}
              <button
                onClick={() => router.push('/projects')}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm sm:text-base font-medium">Back to Projects</span>
              </button>

              {/* Previous/Next Project Navigation */}
              <div className="flex items-center gap-2 sm:gap-3 ml-auto">
                {previousProject && (
                  <button
                    onClick={() => {
                      router.push(`/projects/${previousProject.id}`)
                      setCurrentImageIndex(0)
                    }}
                    className="flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 font-medium text-xs sm:text-sm"
                    title={`Previous: ${previousProject.title}`}
                  >
                    <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="hidden sm:inline">Previous</span>
                  </button>
                )}
                
                {nextProject && (
                  <button
                    onClick={() => {
                      router.push(`/projects/${nextProject.id}`)
                      setCurrentImageIndex(0)
                    }}
                    className="flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 font-medium text-xs sm:text-sm"
                    title={`Next: ${nextProject.title}`}
                  >
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                )}
              </div>
            </div>

            {/* Project Header */}
            <div className="mb-8 sm:mb-12">
              <div className="flex items-center flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                {project.category.map((cat, idx) => (
                  <span 
                    key={idx}
                    className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium ${getCategoryColor(cat)}`}
                  >
                    {mapCategory(cat)}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 break-words">
                {project.title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-primary-600 dark:text-primary-400 font-medium mb-6 sm:mb-8 break-words">
                {project.subtitle}
              </p>
            </div>

            {/* Project Description */}
            <div className="mb-6 sm:mb-8">
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Image Gallery */}
            {project.images && project.images.length > 0 && (
              <div className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
                  Project Screenshots
                </h2>
                <div className="relative">
                  <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px]">
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => setLightboxOpen(true)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          setLightboxOpen(true)
                        }
                      }}
                      className="relative h-full w-full rounded-lg sm:rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700 cursor-zoom-in group outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-primary-500"
                      aria-label={`View image ${currentImageIndex + 1} fullscreen`}
                    >
                      <Image
                        src={project.images[currentImageIndex]}
                        alt={`${project.title} - Image ${currentImageIndex + 1}`}
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
                        priority
                      />
                      <span className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-xs text-white/90 opacity-0 transition-opacity group-hover:opacity-100 sm:bottom-3">
                        Click to view fullscreen
                      </span>
                    </div>
                    {project.images.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            goPrevImage()
                          }}
                          className="absolute left-2 sm:left-4 top-1/2 z-20 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 sm:p-3 rounded-full transition-colors duration-200"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            goNextImage()
                          }}
                          className="absolute right-2 sm:right-4 top-1/2 z-20 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 sm:p-3 rounded-full transition-colors duration-200"
                          aria-label="Next image"
                        >
                          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                        </button>
                      </>
                    )}
                  </div>
                  
                  {project.images.length > 1 && (
                    <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
                      {project.images.map((_, index) => (
                        <button
                          type="button"
                          key={index}
                          onClick={(e) => {
                            e.stopPropagation()
                            setCurrentImageIndex(index)
                          }}
                          className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-colors duration-200 ${
                            index === currentImageIndex 
                              ? 'bg-primary-500 w-6 sm:w-8' 
                              : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                          }`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Key Features */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Key Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2 sm:space-x-3 p-3 sm:p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                    <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs sm:text-sm rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200 font-medium text-sm sm:text-base"
                >
                  <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>View Live</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 font-medium text-sm sm:text-base"
                >
                  <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>View Code</span>
                </a>
              )}
            </div>

            {/* Project Navigation - Bottom */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-700">
              {previousProject ? (
                <button
                  onClick={() => {
                    router.push(`/projects/${previousProject.id}`)
                    setCurrentImageIndex(0)
                  }}
                  className="flex items-center space-x-2 sm:space-x-3 px-4 sm:px-6 py-2 sm:py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 font-medium text-sm sm:text-base w-full sm:w-auto"
                >
                  <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                  <div className="flex flex-col items-start">
                    <span className="text-xs text-gray-500 dark:text-gray-400">Previous Project</span>
                    <span className="font-semibold">{previousProject.title}</span>
                  </div>
                </button>
              ) : (
                <div className="w-full sm:w-auto" />
              )}
              
              {nextProject ? (
                <button
                  onClick={() => {
                    router.push(`/projects/${nextProject.id}`)
                    setCurrentImageIndex(0)
                  }}
                  className="flex items-center space-x-2 sm:space-x-3 px-4 sm:px-6 py-2 sm:py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 font-medium text-sm sm:text-base w-full sm:w-auto ml-auto"
                >
                  <div className="flex flex-col items-end">
                    <span className="text-xs text-gray-500 dark:text-gray-400">Next Project</span>
                    <span className="font-semibold">{nextProject.title}</span>
                  </div>
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              ) : (
                <div className="w-full sm:w-auto" />
              )}
            </div>
          </div>
        </div>
      </section>

      <ProjectImageLightbox
        open={lightboxOpen && project.images.length > 0}
        onClose={() => setLightboxOpen(false)}
        imageSrc={project.images[currentImageIndex]}
        imageAlt={`${project.title} - Image ${currentImageIndex + 1} (fullscreen)`}
        imageKey={`${project.id}-${currentImageIndex}`}
        onPrev={project.images.length > 1 ? goPrevImage : undefined}
        onNext={project.images.length > 1 ? goNextImage : undefined}
        showSlideNav={project.images.length > 1}
      />

      <PageNavigation currentPage="projects" />
    </>
  )
}


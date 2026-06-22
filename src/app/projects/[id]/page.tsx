'use client'

import { useParams, useRouter } from 'next/navigation'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { Github, Zap, ChevronLeft, ChevronRight, ArrowLeft, Eye } from 'lucide-react'
import { projects } from '@/data/projects'
import { ProjectImageLightbox } from '@/components/project-image-lightbox'

export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()
  const projectId = parseInt(params.id as string)
  const project = projects.find(p => p.id === projectId)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [galleryProjectId, setGalleryProjectId] = useState(projectId)

  if (galleryProjectId !== projectId) {
    setGalleryProjectId(projectId)
    setCurrentImageIndex(0)
    setLightboxOpen(false)
  }

  const goPrevImage = useCallback(() => {
    if (!project?.images?.length) return
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    )
  }, [project])

  const goNextImage = useCallback(() => {
    if (!project?.images?.length) return
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    )
  }, [project])

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
            onClick={() => router.push('/#projects')}
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

  return (
    <>
      <section className="section-padding min-h-screen">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            {/* Navigation Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
              {/* Back Button */}
              <button
                onClick={() => router.push('/#projects')}
                className="flex items-center gap-2 text-sm font-medium text-neutral-600 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-white"
              >
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Back to projects</span>
              </button>

              <div className="ml-auto flex items-center gap-2 sm:gap-3">
                {previousProject && (
                  <button
                    onClick={() => {
                      router.push(`/projects/${previousProject.id}`)
                      setCurrentImageIndex(0)
                    }}
                    className="btn-secondary px-3 py-2 text-sm sm:px-4"
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
                    className="btn-secondary px-3 py-2 text-sm sm:px-4"
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
              <div className="mb-4 flex flex-wrap items-center gap-2 sm:mb-6">
                {project.category.map((cat, idx) => (
                  <span key={idx} className="tag">
                    {mapCategory(cat)}
                  </span>
                ))}
              </div>
              <h1 className="mb-4 break-words font-heading text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:mb-6 sm:text-4xl md:text-5xl">
                {project.title}
              </h1>
              <p className="mb-6 break-words text-lg text-neutral-600 dark:text-neutral-400 sm:mb-8 sm:text-xl md:text-2xl">
                {project.subtitle}
              </p>
            </div>

            {/* Project Description */}
            <div className="mb-6 sm:mb-8">
              <p className="text-base leading-relaxed sm:text-lg dark:text-neutral-300 text-neutral-700">
                {project.description}
              </p>
            </div>

            {/* Image Gallery */}
            {project.images && project.images.length > 0 && (
              <div className="mb-6 sm:mb-8">
                <h2 className="mb-4 font-heading text-xl font-semibold text-neutral-900 dark:text-white sm:mb-6 sm:text-2xl">
                  Project screenshots
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
                      className="group relative h-full w-full cursor-zoom-in overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-neutral-500 dark:border-neutral-800 dark:bg-neutral-900"
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
                          className={`h-2 rounded-full transition-all duration-200 sm:h-2.5 ${
                            index === currentImageIndex
                              ? 'w-6 bg-black dark:bg-white sm:w-8'
                              : 'w-2 bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-600 dark:hover:bg-neutral-500'
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
              <h2 className="mb-4 font-heading text-xl font-semibold text-neutral-900 dark:text-white sm:mb-6 sm:text-2xl">
                Key features
              </h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="surface-card flex items-start gap-3 p-4">
                    <Zap className="mt-0.5 h-4 w-4 shrink-0 text-black dark:text-white sm:h-5 sm:w-5" />
                    <span className="text-sm text-neutral-600 dark:text-neutral-400 sm:text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <div className="mb-6 sm:mb-8">
              <h2 className="mb-4 font-heading text-xl font-semibold text-neutral-900 dark:text-white sm:mb-6 sm:text-2xl">
                Technologies used
              </h2>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tag text-xs sm:text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex w-full flex-col gap-3 border-t border-neutral-200 pt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4 dark:border-neutral-800">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex w-full items-center justify-center space-x-2 sm:w-auto"
                >
                  <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>View Live</span>
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className="flex w-full cursor-not-allowed items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg border-2 border-gray-200 bg-gray-100 font-medium text-sm text-gray-400 dark:border-gray-600 dark:bg-gray-800/50 dark:text-gray-500 sm:w-auto"
                  aria-disabled="true"
                >
                  <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>View Live</span>
                </button>
              )}
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex w-full items-center justify-center space-x-2 sm:w-auto"
                >
                  <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Code</span>
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className="group/code flex w-full cursor-not-allowed items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg border-2 border-gray-300 font-medium text-sm text-gray-400 opacity-60 dark:border-gray-600 dark:text-gray-500 sm:w-auto"
                  aria-disabled="true"
                >
                  <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="code-text group-hover/code:hidden">Code</span>
                  <span className="code-hover-text hidden group-hover/code:inline">Private</span>
                </button>
              )}
            </div>

            {/* Project Navigation - Bottom */}
            <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-8 sm:mt-12 sm:flex-row sm:gap-6 dark:border-neutral-800">
              {previousProject ? (
                <button
                  onClick={() => {
                    router.push(`/projects/${previousProject.id}`)
                    setCurrentImageIndex(0)
                  }}
                  className="btn-secondary flex w-full items-center gap-3 sm:w-auto"
                >
                  <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                  <div className="flex flex-col items-start">
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">Previous project</span>
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
                  className="btn-secondary ml-auto flex w-full items-center gap-3 sm:w-auto"
                >
                  <div className="flex flex-col items-end">
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">Next project</span>
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
    </>
  )
}


'use client'

import { useParams, useRouter } from 'next/navigation'
import { useState, useEffect, useCallback } from 'react'
import { Github, Zap, ChevronLeft, ChevronRight, ArrowLeft, Eye, Smartphone } from 'lucide-react'
import { projects } from '@/data/projects'
import { ProjectImageLightbox } from '@/components/project-image-lightbox'
import { ProjectMedia } from '@/components/project-media'
import { RedGlow } from '@/components/red-glow'
import { cn, isEmbedMedia, isSvgImage } from '@/lib/utils'

const pagerButtonClass =
  'inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-ink-700 px-3 py-2 font-display text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-brand hover:text-brand sm:px-4'

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
      <div className="flex min-h-screen items-center justify-center bg-black px-4">
        <div className="text-center">
          <h1 className="heading-display mb-6 text-3xl text-white">Project not found</h1>
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
      <section className="section-dark min-h-screen px-4 pb-24 pt-28 sm:px-6 lg:px-8 lg:pt-36">
        <RedGlow className="-right-56 -top-40 h-[44rem] w-[44rem]" />
        <RedGlow className="-left-64 top-[60%] h-[40rem] w-[40rem] opacity-60" />

        <div className="container-custom">
          <div className="mx-auto max-w-5xl">
            {/* Navigation Bar */}
            <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center sm:gap-6">
              {/* Back Button */}
              <button
                onClick={() => router.push('/#projects')}
                className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-white/70 transition-colors hover:text-brand"
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
                    className={pagerButtonClass}
                    title={`Previous: ${previousProject.title}`}
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span className="hidden sm:inline">Previous</span>
                  </button>
                )}

                {nextProject && (
                  <button
                    onClick={() => {
                      router.push(`/projects/${nextProject.id}`)
                      setCurrentImageIndex(0)
                    }}
                    className={pagerButtonClass}
                    title={`Next: ${nextProject.title}`}
                  >
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Project Header */}
            <div className="mb-8 sm:mb-10">
              <div className="mb-5 flex flex-wrap items-center gap-2">
                {project.category.map((cat, idx) => (
                  <span key={idx} className="tag-brand-dark">
                    {mapCategory(cat)}
                  </span>
                ))}
              </div>
              <h1 className="heading-display mb-5 break-words text-3xl text-white sm:text-4xl md:text-5xl">
                {project.title}
              </h1>
              <p className="mb-6 break-words text-lg text-white/70 sm:text-xl">{project.subtitle}</p>
              <span className="block h-1 w-16 rounded-full bg-brand shadow-glow-sm" />
            </div>

            {/* Project Description */}
            <div className="mb-10 sm:mb-12">
              <p className="text-base leading-relaxed text-white/80 sm:text-lg">{project.description}</p>
            </div>

            {/* Image Gallery */}
            {project.images && project.images.length > 0 && (
              <div className="mb-10 sm:mb-12">
                <h2 className="subheading mb-6 text-white">Project screenshots</h2>
                <div className="relative">
                  <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px]">
                    <div
                      className={cn(
                        'group relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-ink-800 outline-none ring-offset-2 ring-offset-black focus-visible:ring-2 focus-visible:ring-brand',
                        !isEmbedMedia(project.images[currentImageIndex]) && 'cursor-zoom-in'
                      )}
                      aria-label={`View media ${currentImageIndex + 1} fullscreen`}
                      onClick={() => {
                        if (!isEmbedMedia(project.images[currentImageIndex])) {
                          setLightboxOpen(true)
                        }
                      }}
                      onKeyDown={(e) => {
                        if (isEmbedMedia(project.images[currentImageIndex])) return
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          setLightboxOpen(true)
                        }
                      }}
                      role={isEmbedMedia(project.images[currentImageIndex]) ? undefined : 'button'}
                      tabIndex={isEmbedMedia(project.images[currentImageIndex]) ? undefined : 0}
                    >
                      <ProjectMedia
                        src={project.images[currentImageIndex]}
                        alt={`${project.title} - Media ${currentImageIndex + 1}`}
                        fill
                        controls={isEmbedMedia(project.images[currentImageIndex])}
                        className={
                          isSvgImage(project.images[currentImageIndex])
                            ? 'object-contain transition-transform duration-300 group-hover:scale-[1.01]'
                            : isEmbedMedia(project.images[currentImageIndex])
                              ? 'object-contain'
                              : 'object-contain transition-transform duration-300 group-hover:scale-[1.01]'
                        }
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
                        priority
                      />
                      {!isEmbedMedia(project.images[currentImageIndex]) && (
                        <span className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-lg border border-white/15 bg-black/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/90 opacity-0 transition-opacity group-hover:opacity-100">
                          Click to view fullscreen
                        </span>
                      )}
                    </div>
                    {project.images.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            goPrevImage()
                          }}
                          className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-lg border border-white/15 bg-black/70 p-2 text-white transition-colors duration-200 hover:border-brand hover:bg-brand sm:left-4 sm:p-3"
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
                          className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-lg border border-white/15 bg-black/70 p-2 text-white transition-colors duration-200 hover:border-brand hover:bg-brand sm:right-4 sm:p-3"
                          aria-label="Next image"
                        >
                          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                        </button>
                      </>
                    )}
                  </div>

                  {project.images.length > 1 && (
                    <div className="mt-5 flex justify-center gap-2">
                      {project.images.map((_, index) => (
                        <button
                          type="button"
                          key={index}
                          onClick={(e) => {
                            e.stopPropagation()
                            setCurrentImageIndex(index)
                          }}
                          className={cn(
                            'h-2 rounded-full transition-all duration-200 sm:h-2.5',
                            index === currentImageIndex
                              ? 'w-6 bg-brand shadow-glow-sm sm:w-8'
                              : 'w-2 bg-white/25 hover:bg-white/50'
                          )}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Key Features */}
            <div className="mb-10 sm:mb-12">
              <h2 className="subheading mb-6 text-white">Key features</h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="card-dark-hover flex items-start gap-4 p-4 sm:p-5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-brand/60 bg-brand/15 text-brand-glow">
                      <Zap className="h-4 w-4" />
                    </span>
                    <span className="text-sm leading-relaxed text-white/80 sm:text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <div className="mb-10 sm:mb-12">
              <h2 className="subheading mb-6 text-white">Technologies used</h2>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tag-dark text-xs sm:text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex w-full flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              {project.liveUrl ? (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto">
                  <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>View Live</span>
                </a>
              ) : (
                <button type="button" disabled className="btn-secondary w-full opacity-40 sm:w-auto" aria-disabled="true">
                  <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>View Live</span>
                </button>
              )}
              {project.appStoreUrl ? (
                <a href={project.appStoreUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full sm:w-auto">
                  <Smartphone className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>App Store</span>
                </a>
              ) : null}
              {project.playStoreUrl ? (
                <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full sm:w-auto">
                  <Smartphone className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Google Play</span>
                </a>
              ) : null}
              {project.githubUrl ? (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full sm:w-auto">
                  <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Code</span>
                </a>
              ) : (
                <button type="button" disabled className="group/code btn-secondary w-full opacity-40 sm:w-auto" aria-disabled="true">
                  <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="code-text group-hover/code:hidden">Code</span>
                  <span className="code-hover-text hidden group-hover/code:inline">Private</span>
                </button>
              )}
            </div>

            {/* Project Navigation - Bottom */}
            <div className="mt-10 flex flex-col items-stretch justify-between gap-4 border-t border-white/10 pt-8 sm:mt-12 sm:flex-row sm:items-center sm:gap-6">
              {previousProject ? (
                <button
                  onClick={() => {
                    router.push(`/projects/${previousProject.id}`)
                    setCurrentImageIndex(0)
                  }}
                  className="card-dark-hover group flex w-full items-center gap-3 p-4 text-left sm:w-auto sm:max-w-[48%]"
                >
                  <ChevronLeft className="h-5 w-5 shrink-0 text-brand-glow transition-transform group-hover:-translate-x-1" />
                  <div className="flex min-w-0 flex-col items-start">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">Previous project</span>
                    <span className="max-w-full truncate font-display font-bold text-white">{previousProject.title}</span>
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
                  className="card-dark-hover group ml-auto flex w-full items-center justify-end gap-3 p-4 text-right sm:w-auto sm:max-w-[48%]"
                >
                  <div className="flex min-w-0 flex-col items-end">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">Next project</span>
                    <span className="max-w-full truncate font-display font-bold text-white">{nextProject.title}</span>
                  </div>
                  <ChevronRight className="h-5 w-5 shrink-0 text-brand-glow transition-transform group-hover:translate-x-1" />
                </button>
              ) : (
                <div className="w-full sm:w-auto" />
              )}
            </div>
          </div>
        </div>
      </section>

      <ProjectImageLightbox
        open={
          lightboxOpen &&
          project.images.length > 0 &&
          !isEmbedMedia(project.images[currentImageIndex])
        }
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


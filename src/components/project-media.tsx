'use client'

import Image from 'next/image'
import { getYouTubeEmbedUrl, isSvgImage, isVideoMedia, isYouTubeMedia } from '@/lib/utils'

type ProjectMediaProps = {
  src: string
  alt: string
  fill?: boolean
  className?: string
  sizes?: string
  priority?: boolean
  controls?: boolean
}

export function ProjectMedia({
  src,
  alt,
  fill = false,
  className = '',
  sizes,
  priority,
  controls = false,
}: ProjectMediaProps) {
  if (isYouTubeMedia(src)) {
    const embedUrl = getYouTubeEmbedUrl(src, !controls, controls)
    if (!embedUrl) return null

    return (
      <iframe
        src={embedUrl}
        title={alt}
        className={`${fill ? 'absolute inset-0 h-full w-full' : 'h-full w-full'} ${className}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    )
  }

  if (isVideoMedia(src)) {
    return (
      <video
        src={src}
        className={`${fill ? 'absolute inset-0 h-full w-full' : 'h-full w-full'} ${className}`}
        autoPlay
        muted
        loop
        playsInline
        controls={controls}
        aria-label={alt}
      />
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      unoptimized={isSvgImage(src)}
      className={className}
      sizes={sizes}
      priority={priority}
    />
  )
}

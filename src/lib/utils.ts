import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
  }).format(new Date(date))
}

export function formatDateRange(startDate: string | Date, endDate?: string | Date | null) {
  const start = formatDate(startDate)
  const end = endDate ? formatDate(endDate) : 'Present'
  return `${start} - ${end}`
}

export function isSvgImage(src: string) {
  return src.toLowerCase().endsWith('.svg')
}

export function isVideoMedia(src: string) {
  return /\.(mp4|webm|ogg)$/i.test(src)
}

export function getYouTubeVideoId(src: string) {
  const match = src.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/)
  return match?.[1] ?? null
}

export function isYouTubeMedia(src: string) {
  return getYouTubeVideoId(src) !== null
}

export function getYouTubeEmbedUrl(src: string, autoplay = false, controls = true) {
  const id = getYouTubeVideoId(src)
  if (!id) return null

  const params = new URLSearchParams({
    autoplay: autoplay ? '1' : '0',
    mute: autoplay ? '1' : '0',
    controls: controls ? '1' : '0',
    rel: '0',
    modestbranding: '1',
    playsinline: '1',
  })

  if (autoplay) {
    params.set('loop', '1')
    params.set('playlist', id)
  }

  return `https://www.youtube.com/embed/${id}?${params.toString()}`
}

export function isEmbedMedia(src: string) {
  return isVideoMedia(src) || isYouTubeMedia(src)
}

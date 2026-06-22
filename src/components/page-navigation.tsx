'use client'

import { usePathname } from 'next/navigation'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { navigateToSection, type SectionId } from '@/lib/scroll-to-section'

interface PageNavigationProps {
  currentPage: string
}

const pages: { name: string; label: string; id: SectionId }[] = [
  { name: 'home', label: 'Home', id: 'home' },
  { name: 'about', label: 'About', id: 'about' },
  { name: 'skills', label: 'Skills', id: 'skills' },
  { name: 'projects', label: 'Projects', id: 'projects' },
  { name: 'experience', label: 'Experience', id: 'experience' },
  { name: 'education', label: 'Education', id: 'education' },
  { name: 'hobby', label: 'Hobby', id: 'hobby' },
  { name: 'contact', label: 'Contact', id: 'contact' },
]

export function PageNavigation({ currentPage }: PageNavigationProps) {
  const pathname = usePathname()

  const currentIndex = pages.findIndex((page) => page.name === currentPage)
  const previousPage = currentIndex > 0 ? pages[currentIndex - 1] : null
  const nextPage = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null

  const goToSection = (id: SectionId) => {
    navigateToSection(id, pathname)
  }

  return (
    <div className="pointer-events-none fixed bottom-6 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full border border-neutral-200 bg-white/90 px-2 py-1.5 text-sm shadow-lg backdrop-blur dark:border-neutral-700 dark:bg-black/90">
      <button
        onClick={() => previousPage && goToSection(previousPage.id)}
        disabled={!previousPage}
        className="pointer-events-auto flex items-center gap-1 rounded-full px-3 py-1.5 text-neutral-600 transition-colors hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-40 dark:text-neutral-400 dark:hover:bg-neutral-900"
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="hidden sm:inline">{previousPage?.label ?? 'Previous'}</span>
      </button>
      <span className="px-2 text-xs font-medium text-neutral-400 dark:text-neutral-500">
        {pages[currentIndex]?.label}
      </span>
      <button
        onClick={() => nextPage && goToSection(nextPage.id)}
        disabled={!nextPage}
        className="pointer-events-auto flex items-center gap-1 rounded-full px-3 py-1.5 text-neutral-600 transition-colors hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-40 dark:text-neutral-400 dark:hover:bg-neutral-900"
      >
        <span className="hidden sm:inline">{nextPage?.label ?? 'Next'}</span>
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  )
}

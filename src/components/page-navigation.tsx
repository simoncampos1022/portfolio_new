'use client'

import { useRouter } from 'next/navigation'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PageNavigationProps {
  currentPage: string
}

const pages = [
  { name: 'home', label: 'Home', path: '/' },
  { name: 'about', label: 'About', path: '/about' },
  { name: 'skills', label: 'Skills', path: '/skills' },
  { name: 'projects', label: 'Projects', path: '/projects' },
  { name: 'experience', label: 'Experience', path: '/experience' },
  { name: 'education', label: 'Education', path: '/education' },
  { name: 'contact', label: 'Contact', path: '/contact' },
]

export function PageNavigation({ currentPage }: PageNavigationProps) {
  const router = useRouter()
  
  const currentIndex = pages.findIndex(page => page.name === currentPage)
  const previousPage = currentIndex > 0 ? pages[currentIndex - 1] : null
  const nextPage = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null

  return (
    <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-between items-center px-4 sm:px-8 pointer-events-none">
      {/* Previous Button */}
      <button
        onClick={() => previousPage && router.push(previousPage.path)}
        disabled={!previousPage}
        className={`flex items-center space-x-2 px-4 sm:px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 pointer-events-auto ${
          previousPage 
            ? 'hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:border-primary-300 dark:hover:border-primary-700 cursor-pointer' 
            : 'cursor-not-allowed opacity-50'
        }`}
      >
        <ChevronLeft className="h-5 w-5 text-gray-700 dark:text-gray-300" />
        <span className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 hidden sm:inline">
          {previousPage?.label || 'Previous'}
        </span>
      </button>

      {/* Next Button */}
      <button
        onClick={() => nextPage && router.push(nextPage.path)}
        disabled={!nextPage}
        className={`flex items-center space-x-2 px-4 sm:px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 pointer-events-auto ${
          nextPage 
            ? 'hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:border-primary-300 dark:hover:border-primary-700 cursor-pointer' 
            : 'cursor-not-allowed opacity-50'
        }`}
      >
        <span className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 hidden sm:inline">
          {nextPage?.label || 'Next'}
        </span>
        <ChevronRight className="h-5 w-5 text-gray-700 dark:text-gray-300" />
      </button>
    </div>
  )
}

'use client'

import { useState, useSyncExternalStore, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { Menu, X, Sun, Moon, Download } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navigateToSection, scrollToSection, sectionNavItems, type SectionId } from '@/lib/scroll-to-section'

const navItems = sectionNavItems.map((item) => ({
  name: item.name,
  id: item.id as SectionId,
}))

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<SectionId>('home')
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )

  useEffect(() => {
    if (pathname !== '/') return

    const hash = window.location.hash.replace('#', '') as SectionId
    if (hash && document.getElementById(hash)) {
      requestAnimationFrame(() => scrollToSection(hash))
      setActiveSection(hash)
    }

    const sectionIds: SectionId[] = ['home', ...navItems.map((item) => item.id)]
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (!element) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id)
            }
          })
        },
        { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => observers.forEach((observer) => observer.disconnect())
  }, [pathname])

  if (!mounted) return null

  const isActive = (id: SectionId) => pathname === '/' && activeSection === id

  const handleNavClick = (id: SectionId) => {
    navigateToSection(id, pathname)
    setIsOpen(false)
  }

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur-lg dark:border-neutral-800 dark:bg-black/90">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            onClick={(e) => {
              if (pathname === '/') {
                e.preventDefault()
                handleNavClick('home')
              }
            }}
            className="group flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 bg-black text-sm font-semibold text-white dark:border-neutral-700 dark:bg-white dark:text-black">
              SC
            </div>
            <div>
              <span className="block font-heading text-base font-semibold text-black dark:text-white">
                Simon Campos
              </span>
              <span className="block text-xs text-neutral-500 dark:text-neutral-400">Software Engineer</span>
            </div>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={cn(isActive(item.id) ? 'nav-link-active' : 'nav-link')}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
              className="rounded-lg border border-neutral-200 p-2 text-neutral-600 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-900"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <a href="/resume/Simon_Campos_Resume.pdf" download className="btn-primary !px-4 !py-2 text-sm">
              <Download className="mr-2 inline h-4 w-4" />
              Resume
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-lg border border-neutral-200 p-2 dark:border-neutral-700"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg border border-neutral-200 p-2 dark:border-neutral-700"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-neutral-200 bg-white px-4 py-4 dark:border-neutral-800 dark:bg-black lg:hidden">
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={cn(
                  'block w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium',
                  isActive(item.id)
                    ? 'bg-neutral-100 text-black dark:bg-neutral-900 dark:text-white'
                    : 'text-neutral-600 dark:text-neutral-400'
                )}
              >
                {item.name}
              </button>
            ))}
            <a
              href="/resume/Simon_Campos_Resume.pdf"
              download
              className="btn-primary mt-3 flex w-full justify-center"
            >
              <Download className="mr-2 h-4 w-4" />
              Download resume
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

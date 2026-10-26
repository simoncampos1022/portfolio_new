'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, Download, Github } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navigateToSection, scrollToSection, sectionNavItems, type SectionId } from '@/lib/scroll-to-section'

const navItems = sectionNavItems.map((item) => ({
  name: item.name,
  id: item.id as SectionId,
}))

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<SectionId>('home')
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (pathname !== '/') return

    const hash = window.location.hash.replace('#', '') as SectionId
    if (hash && document.getElementById(hash)) {
      requestAnimationFrame(() => scrollToSection(hash))
      setActiveSection(hash)
    }

    const sectionIds: SectionId[] = navItems.map((item) => item.id)
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

  const isActive = (id: SectionId) => pathname === '/' && activeSection === id
  // Transparent over the home hero, solid black once scrolled or on inner pages
  const isSolid = scrolled || isOpen || pathname !== '/'

  const handleNavClick = (id: SectionId) => {
    navigateToSection(id, pathname)
    setIsOpen(false)
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
        isSolid ? 'border-white/10 bg-black/90 backdrop-blur-lg' : 'border-transparent bg-transparent'
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <div className="hidden items-center gap-x-8 xl:flex">
          {navItems.map((item) => (
            <button
              key={item.name}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className={isActive(item.id) ? 'nav-link-active' : 'nav-link'}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="ml-auto hidden items-center gap-3 sm:flex">
          <a
            href="https://github.com/simoncampos1022"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="rounded-lg border border-white/15 p-2.5 text-white transition-colors hover:border-brand hover:text-brand"
          >
            <Github className="h-4 w-4" />
          </a>
          <a href="/resume/Simon_Campos_Resume.pdf" download className="btn-tint">
            <Download className="h-4 w-4" />
            Resume
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg border border-white/15 p-2.5 text-white transition-colors hover:border-brand xl:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="ml-auto rounded-lg border border-white/15 p-2.5 text-white transition-colors hover:border-brand sm:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-black px-4 pb-6 pt-2 xl:hidden">
          <div className="mx-auto max-w-7xl">
            {navItems.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={cn(
                  'block w-full border-b border-white/10 py-4 text-left font-display text-sm font-bold uppercase tracking-wider transition-colors',
                  isActive(item.id) ? 'text-brand text-glow' : 'text-white hover:text-brand'
                )}
              >
                {item.name}
              </button>
            ))}
            <a href="/resume/Simon_Campos_Resume.pdf" download className="btn-primary mt-6 w-full sm:hidden">
              <Download className="h-4 w-4" />
              Download resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

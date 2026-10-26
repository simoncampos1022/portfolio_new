'use client'

import { usePathname } from 'next/navigation'
import { Mail, Linkedin, CalendarDays, Heart } from 'lucide-react'
import { SiTelegram } from '@icons-pack/react-simple-icons'
import { navigateToSection, type SectionId } from '@/lib/scroll-to-section'
import { RedGlow } from '@/components/red-glow'

const socialLinks = [
  { name: 'Email', href: 'mailto:simon.campos1022@gmail.com', icon: Mail },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/simon-dc-288aab410', icon: Linkedin },
  { name: 'Telegram', href: 'https://t.me/simoncampos1022', icon: SiTelegram },
  { name: 'Calendly', href: 'https://calendly.com/simon-campos1022/30min', icon: CalendarDays },
]

const quickLinks = [
  { name: 'About', id: 'home' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
] as const

export function Footer() {
  const pathname = usePathname()

  const handleQuickLink = (id: SectionId) => {
    navigateToSection(id, pathname)
  }

  return (
    <footer className="relative isolate overflow-hidden border-t border-white/10 bg-black px-4 pb-10 pt-20 text-white sm:px-6 lg:px-8">
      <RedGlow className="-bottom-96 -right-72 h-[52rem] w-[52rem]" />

      <div className="container-custom">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="space-y-4">
            <span className="block font-display text-2xl font-bold uppercase tracking-tight text-white">
              Simon Degala <span className="text-brand">Campos</span>
            </span>
            <p className="max-w-sm text-sm leading-relaxed text-white/60">
              Senior Software Engineer | Backend & Python Expert building scalable systems and intelligent AI solutions.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white/50">Quick links</h3>
            <div className="flex flex-col items-start gap-3">
              {quickLinks.map((link) => (
                <button key={link.name} type="button" onClick={() => handleQuickLink(link.id)} className="nav-link text-sm">
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white/50">Connect</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-ink-700 text-white transition-all hover:border-brand hover:text-brand hover:shadow-glow-sm"
                  aria-label={social.name}
                  title={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row">
          <span>© 2026 Simon Degala Campos. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Made with <Heart className="h-3.5 w-3.5 fill-brand text-brand" /> in the Philippines
          </span>
        </div>
      </div>
    </footer>
  )
}

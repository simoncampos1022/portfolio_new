'use client'

import { usePathname } from 'next/navigation'
import { Mail, Linkedin, CalendarDays, Heart } from 'lucide-react'
import { SiDiscord, SiTelegram, SiWhatsapp } from '@icons-pack/react-simple-icons'
import { navigateToSection, type SectionId } from '@/lib/scroll-to-section'

const socialLinks = [
  { name: 'Email', href: 'mailto:simon.campos1022@gmail.com', icon: Mail },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/simon-dc-288aab410', icon: Linkedin },
  { name: 'Discord', href: 'https://discord.com/users/1484636320256233493', icon: SiDiscord },
  { name: 'Telegram', href: 'https://t.me/simoncampos1022', icon: SiTelegram },
  { name: 'WhatsApp', href: 'https://wa.me/639634160157', icon: SiWhatsapp },
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
    <footer className="mt-16 border-t border-neutral-200 bg-white pb-24 pt-12 dark:border-neutral-800 dark:bg-black">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="space-y-3">
            <span className="block font-heading text-lg font-semibold text-black dark:text-white">
              Simon Degala Campos
            </span>
            <p className="max-w-sm text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              Senior Software Engineer | Backend & Python Expert building scalable systems and intelligent AI solutions.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-black dark:text-white">Quick links</h3>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => handleQuickLink(link.id)}
                  className="text-left text-sm text-neutral-600 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-white"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-black dark:text-white">Connect</h3>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-neutral-200 p-2.5 text-neutral-600 transition-colors hover:border-black hover:text-black dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-white dark:hover:text-white"
                  aria-label={social.name}
                  title={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-neutral-200 pt-6 text-sm text-neutral-500 sm:flex-row dark:border-neutral-800 dark:text-neutral-400">
          <span>© 2026 Simon Degala Campos. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Made with <Heart className="h-3.5 w-3.5 fill-neutral-400 text-neutral-400" /> in the Philippines
          </span>
        </div>
      </div>
    </footer>
  )
}

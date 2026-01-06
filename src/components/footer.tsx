'use client'

import { Mail, Heart } from 'lucide-react'
import { SiDiscord, SiTelegram, SiWhatsapp} from '@icons-pack/react-simple-icons';

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:simon.campos1022@gmail.com',
    icon: Mail,
  },
  {
    name: 'Discord',
    href: 'https://discord.com/users/1290770881701875752',
    icon: SiDiscord,
  },
  {
    name: 'Telegram',
    href: 'https://t.me/simoncampos1022',
    icon: SiTelegram,
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/639634160157',
    icon: SiWhatsapp,
  }
]

const quickLinks = [
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="container-custom">
        <div className="p-8 sm:p-10 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Brand Section */}
            <div className="space-y-3 sm:space-y-4">
              <div className="text-xl sm:text-2xl font-bold gradient-text">
                Simon Degala Campos
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-md">
                Senior Software Engineer | Backend & Python Expert building scalable systems and intelligent AI solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                Quick Links
              </h3>
              <div className="space-y-2">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                Connect
              </h3>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-3 rounded-lg bg-white dark:bg-gray-800 hover:bg-primary-50 dark:hover:bg-primary-900/20 border border-gray-200 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-700 transition-all duration-300 group"
                    aria-label={social.name}
                    title={social.name}
                  >
                    <social.icon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0 text-center md:text-left">
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                © 2025 Simon Degala Campos. All rights reserved.
              </p>
              <div className="flex items-center justify-center space-x-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                <span>Made with</span>
                <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-red-500 fill-current" />
                <span>in the Philippines</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

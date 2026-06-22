'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, CalendarDays } from 'lucide-react'
import { SectionHeader } from '@/components/section-header'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'simon.campos1022@gmail.com',
    href: 'mailto:simon.campos1022@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+639634160157',
    href: 'tel:+639634160157',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Tanay, Rizal, Philippines',
    href: '#',
  },
]

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/simoncampos1022',
    icon: Github,
    description: 'View my code repositories and contributions',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/simon-dc-288aab410',
    icon: Linkedin,
    description: 'Connect with me professionally',
  },
  {
    name: 'Calendly',
    href: 'https://calendly.com/simon-campos1022/30min',
    icon: CalendarDays,
    description: 'Book a 30-minute call',
  },
]

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title={
              <>
                Let&apos;s build something <span className="gradient-text">great together</span>
              </>
            }
            subtitle="Ready to discuss your next AI or backend project? Let's connect and create something amazing."
            accent="blue"
          />

          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-5">
              <div>
                <h3 className="mb-4 font-heading text-xl font-semibold text-neutral-900 dark:text-white">Get in touch</h3>
                <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  I&apos;m always interested in hearing about new opportunities and exciting projects. Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out!
                </p>
              </div>

              <div className="space-y-3">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="surface-card-hover flex items-center gap-3 p-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white">
                      <info.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">{info.label}</p>
                      <p className="text-sm font-medium text-neutral-900 dark:text-white">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div>
                <h4 className="mb-3 text-sm font-medium text-neutral-700 dark:text-neutral-300">Connect</h4>
                <div className="flex flex-wrap gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="surface-card flex h-11 w-11 items-center justify-center text-neutral-600 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-white"
                      title={social.description}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="surface-card p-6 sm:p-8">
                <h3 className="mb-6 font-heading text-lg font-semibold text-neutral-900 dark:text-white">Send a message</h3>

                {isSubmitted ? (
                  <div className="space-y-4 py-12 text-center">
                    <CheckCircle className="mx-auto h-16 w-16 text-black dark:text-white" />
                    <h4 className="font-heading text-lg font-semibold text-black dark:text-white">Message sent!</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Thank you for your message. I&apos;ll get back to you soon!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="form-input rounded-full px-4 py-2.5"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="form-input rounded-full px-4 py-2.5"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="form-input resize-none rounded-2xl px-4 py-3"
                        placeholder="Tell me about your project or just say hello!"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary flex w-full items-center justify-center gap-2 rounded-full disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-neutral-950 border-t-transparent" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

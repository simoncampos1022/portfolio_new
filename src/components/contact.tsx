'use client'

import { useState } from 'react'
import { Mail, MapPin, Linkedin, Send, CheckCircle, CalendarDays } from 'lucide-react'
import { SiTelegram } from '@icons-pack/react-simple-icons'
import { SectionHeader } from '@/components/section-header'
import { RedGlow } from '@/components/red-glow'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'simon.campos1022@gmail.com',
    href: 'mailto:simon.campos1022@gmail.com',
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
    name: 'Email',
    href: 'mailto:simon.campos1022@gmail.com',
    icon: Mail,
    description: 'Send me an email',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/simon-dc-288aab410',
    icon: Linkedin,
    description: 'Connect with me professionally',
  },
  {
    name: 'Telegram',
    href: 'https://t.me/simoncampos1022',
    icon: SiTelegram,
    description: 'Message me on Telegram',
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
    <section id="contact" className="section-dark section-padding">
      <RedGlow className="left-1/2 top-[55%] h-[56rem] w-[56rem] -translate-x-1/2 -translate-y-1/2" />

      <div className="container-custom">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title={
              <>
                Let&apos;s build something <span className="text-brand">great together</span>
              </>
            }
            subtitle="Ready to discuss your next AI or backend project? Let's connect and create something amazing."
          />

          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
            <div className="space-y-8 lg:col-span-5">
              <div>
                <h3 className="subheading mb-4 text-white">Get in touch</h3>
                <p className="text-sm leading-relaxed text-white/70 sm:text-base">
                  I&apos;m always interested in hearing about new opportunities and exciting projects. Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out!
                </p>
              </div>

              <div className="space-y-3">
                {contactInfo.map((info) => (
                  <a key={info.label} href={info.href} className="card-dark-hover flex items-center gap-4 p-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-brand/60 bg-brand/15 text-brand-glow">
                      <info.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">{info.label}</p>
                      <p className="text-sm font-medium text-white">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div>
                <h4 className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.18em] text-white/50">Connect</h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/15 bg-ink-700 text-white transition-all hover:border-brand hover:text-brand hover:shadow-glow-sm"
                      title={social.description}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="card-dark p-6 sm:p-8">
                <h3 className="subheading mb-8 text-white">Send a message</h3>

                {isSubmitted ? (
                  <div className="space-y-4 py-12 text-center">
                    <CheckCircle className="mx-auto h-16 w-16 text-brand-glow" />
                    <h4 className="heading-display text-xl text-white">Message sent!</h4>
                    <p className="text-sm text-white/70">Thank you for your message. I&apos;ll get back to you soon!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="form-input resize-none"
                        placeholder="Tell me about your project or just say hello!"
                      />
                    </div>
                    <button type="submit" disabled={isSubmitting} className="btn-primary w-full">
                      {isSubmitting ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
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

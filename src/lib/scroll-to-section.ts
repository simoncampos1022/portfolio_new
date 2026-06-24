export const sectionNavItems = [
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Experience', id: 'experience' },
  { name: 'Education', id: 'education' },
  { name: 'Hobby', id: 'hobby' },
  { name: 'Contact', id: 'contact' },
] as const

export type SectionId = 'home' | (typeof sectionNavItems)[number]['id']

export function scrollToSection(sectionId: SectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export function navigateToSection(sectionId: SectionId, pathname: string) {
  if (pathname === '/') {
    scrollToSection(sectionId)
    window.history.pushState(null, '', sectionId === 'home' ? '/' : `#${sectionId}`)
    return
  }

  window.location.href = sectionId === 'home' ? '/' : `/#${sectionId}`
}

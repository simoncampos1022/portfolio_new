import { Contact } from '@/components/contact'
import { PageNavigation } from '@/components/page-navigation'

export default function ContactPage() {
  return (
    <>
      <Contact />
      <PageNavigation currentPage="contact" />
    </>
  )
}


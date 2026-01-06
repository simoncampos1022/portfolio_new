import { About } from '@/components/about'
import { PageNavigation } from '@/components/page-navigation'

export default function AboutPage() {
  return (
    <>
      <About />
      <PageNavigation currentPage="about" />
    </>
  )
}


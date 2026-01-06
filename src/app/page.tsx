import { Hero } from '@/components/hero'
import { PageNavigation } from '@/components/page-navigation'

export default function Home() {
  return (
    <>
      <Hero />
      <PageNavigation currentPage="home" />
    </>
  )
}

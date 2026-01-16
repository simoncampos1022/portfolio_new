import { Hobby } from '@/components/hobby'
import { PageNavigation } from '@/components/page-navigation'

export default function HobbyPage() {
  return (
    <>
      <Hobby />
      <PageNavigation currentPage="hobby" />
    </>
  )
}

import { Projects } from '@/components/projects'
import { PageNavigation } from '@/components/page-navigation'

export default function ProjectsPage() {
  return (
    <>
      <Projects />
      <PageNavigation currentPage="projects" />
    </>
  )
}


import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { Experience } from '@/components/experience'
import { Education } from '@/components/education'
import { Contact } from '@/components/contact'
import { SectionDivider } from '@/components/section-divider'

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider text="About Me" icon="👨‍💻" gradient="from-blue-500 to-cyan-500" />
      <About />
      <SectionDivider text="Skills & Technologies" icon="⚡" gradient="from-purple-500 to-pink-500" />
      <Skills />
      <SectionDivider text="Featured Projects" icon="🚀" gradient="from-orange-500 to-red-500" />
      <Projects />
      <SectionDivider text="Professional Experience" icon="💼" gradient="from-green-500 to-teal-500" />
      <Experience />
      <SectionDivider text="Education & Certifications" icon="🎓" gradient="from-indigo-500 to-purple-500" />
      <Education />
      <SectionDivider text="Get In Touch" icon="📧" gradient="from-pink-500 to-rose-500" />
      <Contact />
    </>
  )
}

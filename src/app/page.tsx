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
      <SectionDivider 
        keywords={[
          "About Me", "AI Backend Developer", "6+ Years Experience", 
          "Algorithms in University", "AI-Driven Products", "Backend Engineering", 
          "Machine Learning", "AI-Powered Trading Algorithms", "AI-Powered Applications", 
          "Highest Standards", "Code Quality", "System Reliability"
        ]} 
        gradient="from-blue-500 to-cyan-500" 
      />
      <About />
      <SectionDivider 
        keywords={[
          "Skills & Technologies", "Python", "JavaScript", "TypeScript", 
          "React", "Next.js", "Node.js", "FastAPI", "Django", "TensorFlow", 
          "PyTorch", "AWS", "Docker", "Kubernetes", "MongoDB", "PostgreSQL", 
          "Redis", "GraphQL", "REST APIs", "Microservices"
        ]} 
        gradient="from-purple-500 to-pink-500" 
      />
      <Skills />
      <SectionDivider 
        keywords={[
          "Featured Projects", "Imaginify", "AI Image Transformation", 
          "Plante AI", "Smart Meal Analysis", "AI-Powered SaaS", "Machine Learning", 
          "Computer Vision", "Real-time Processing", "Scalable Architecture", 
          "Cloud Deployment", "User Experience", "Innovation"
        ]} 
        gradient="from-orange-500 to-red-500" 
      />
      <Projects />
      <SectionDivider 
        keywords={[
          "Professional Experience", "Senior AI Developer", "Backend Architecture", 
          "Team Leadership", "Project Management", "Client Collaboration", 
          "Technical Solutions", "Performance Optimization", "Code Review", 
          "Mentoring", "Agile Development", "Continuous Integration"
        ]} 
        gradient="from-green-500 to-teal-500" 
      />
      <Experience />
      <SectionDivider 
        keywords={[
          "Education & Certifications", "Computer Science", "Bachelor's Degree", 
          "Machine Learning", "Data Structures", "Algorithms", "Software Engineering", 
          "AWS Certified", "Google Cloud", "Microsoft Azure", "Professional Development", 
          "Continuous Learning", "Industry Best Practices"
        ]} 
        gradient="from-indigo-500 to-purple-500" 
      />
      <Education />
      <SectionDivider 
        keywords={[
          "Get In Touch", "Let's Connect", "Collaboration", "New Opportunities", 
          "Freelance Projects", "Consulting", "Technical Discussions", "Innovation", 
          "Partnership", "Contact Me", "Available for Work", "Open to Ideas"
        ]} 
        gradient="from-pink-500 to-rose-500" 
      />
      <Contact />
    </>
  )
}

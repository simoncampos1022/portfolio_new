'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Code, 
  Brain, 
  Database, 
  Cloud, 
  GitBranch, 
  Wrench,
  Github,
  Gitlab,
  Terminal,
  Server,
  Cpu,
  Layers,
  Zap,
  Settings,
  Globe,
  Monitor,
  Smartphone,
  FileText,
  MessageSquare,
  CheckCircle
} from 'lucide-react'

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    skills: [
      { name: 'Python', icon: Terminal, level: 95 },
      { name: 'Go', icon: Server, level: 85 },
      { name: 'Java', icon: Cpu, level: 80 },
      { name: 'C#', icon: Code, level: 75 },
      { name: 'JavaScript', icon: Globe, level: 90 },
      { name: 'TypeScript', icon: FileText, level: 90 },
      { name: 'C++', icon: Terminal, level: 70 },
    ]
  },
  {
    title: 'AI Libraries',
    icon: Brain,
    skills: [
      { name: 'TensorFlow', icon: Brain, level: 90 },
      { name: 'PyTorch', icon: Cpu, level: 85 },
      { name: 'Scikit-learn', icon: Layers, level: 88 },
      { name: 'CoreML', icon: Smartphone, level: 75 },
    ]
  },
  {
    title: 'Backend Tools',
    icon: Database,
    skills: [
      { name: 'Django', icon: Server, level: 92 },
      { name: 'FastAPI', icon: Zap, level: 90 },
      { name: 'Flask', icon: Code, level: 85 },
      { name: 'Node.js', icon: Globe, level: 80 },
      { name: 'REST API', icon: Globe, level: 95 },
      { name: 'GraphQL', icon: Database, level: 75 },
    ]
  },
  {
    title: 'Databases',
    icon: Database,
    skills: [
      { name: 'MySQL', icon: Database, level: 90 },
      { name: 'PostgreSQL', icon: Database, level: 88 },
      { name: 'MongoDB', icon: Database, level: 85 },
      { name: 'Cassandra', icon: Database, level: 70 },
      { name: 'Supabase', icon: Cloud, level: 80 },
    ]
  },
  {
    title: 'DevOps',
    icon: Cloud,
    skills: [
      { name: 'AWS', icon: Cloud, level: 85 },
      { name: 'Azure', icon: Cloud, level: 80 },
      { name: 'Docker', icon: Server, level: 90 },
      { name: 'Terraform', icon: Settings, level: 75 },
      { name: 'Kafka', icon: MessageSquare, level: 70 },
      { name: 'RabbitMQ', icon: MessageSquare, level: 75 },
    ]
  },
  {
    title: 'Tools & Others',
    icon: Wrench,
    skills: [
      { name: 'GitHub', icon: Github, level: 95 },
      { name: 'GitLab', icon: Gitlab, level: 85 },
      { name: 'Git', icon: GitBranch, level: 90 },
      { name: 'Postman', icon: Globe, level: 85 },
      { name: 'VS Code', icon: Monitor, level: 90 },
      { name: 'Selenium', icon: Settings, level: 80 },
      { name: 'Jira', icon: CheckCircle, level: 85 },
      { name: 'Slack', icon: MessageSquare, level: 80 },
    ]
  }
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Skills & <span className="gradient-text">Technologies</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              A comprehensive toolkit for building scalable, intelligent backend systems
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="w-24 h-1 gradient-bg rounded-full mx-auto mt-6"
            />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.8 + categoryIndex * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/40 transition-colors duration-300">
                    <category.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 1 + categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      className="group/skill"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <skill.icon className="h-4 w-4 text-gray-600 dark:text-gray-400 group-hover/skill:text-primary-600 dark:group-hover/skill:text-primary-400 transition-colors duration-200" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1, 
                            delay: 1.2 + categoryIndex * 0.1 + skillIndex * 0.05,
                            ease: "easeOut"
                          }}
                          className="h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800/30">
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              <span className="text-primary-700 dark:text-primary-300 font-medium">
                Always learning and adapting to new technologies
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

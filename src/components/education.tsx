'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Calendar, MapPin, Code, Smartphone, Search, Award, BookOpen } from 'lucide-react'
import Image from 'next/image'

const education = {
  degree: "Bachelor's Degree in Computer Science",
  university: 'University of Rizal System (URS)',
  location: 'Tanay, Philippines',
  duration: '2016 - 2019',
  highlights: [
    'Completed coursework in software development, data structures, algorithms, databases, and programming languages',
    'Participated in projects involving web development, mobile apps, and software design',
    'Gained practical experience in coding, debugging, and collaborative development environments'
  ]
}

const academicProjects = [
  {
    id: 1,
    title: 'Student Information System',
    subtitle: 'Capstone Project',
    description: 'Built a comprehensive web application for student enrollment and records management. The system streamlined administrative processes and improved data organization for educational institutions.',
    features: [
      'Student enrollment and registration',
      'Grade management and reporting',
      'Course scheduling and management',
      'Faculty and staff administration',
      'Automated report generation',
      'User authentication and authorization'
    ],
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'HTML/CSS'],
    icon: Code,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'Mobile To-Do App',
    subtitle: 'Android Development',
    description: 'Developed a feature-rich task management application with notification system. The app helped users organize their daily tasks and improve productivity through intuitive design.',
    features: [
      'Task creation and management',
      'Priority and category system',
      'Push notifications and reminders',
      'Data synchronization',
      'User-friendly interface',
      'Offline functionality'
    ],
    technologies: ['Java', 'Android Studio', 'SQLite', 'Firebase', 'Material Design'],
    icon: Smartphone,
    color: 'from-green-500 to-teal-500'
  },
  {
    id: 3,
    title: 'Mini Search Engine',
    subtitle: 'Web Development Project',
    description: 'Created a lightweight search engine that indexed documents and implemented basic keyword search functionality. The project demonstrated understanding of information retrieval concepts.',
    features: [
      'Document indexing and crawling',
      'Keyword-based search',
      'Search result ranking',
      'Web interface for queries',
      'Basic query optimization',
      'Result highlighting'
    ],
    technologies: ['Python', 'Flask', 'BeautifulSoup', 'SQLite', 'HTML/CSS', 'JavaScript'],
    icon: Search,
    color: 'from-purple-500 to-pink-500'
  }
]

const achievements = [
  {
    title: 'Academic Excellence',
    description: 'Maintained high academic performance throughout the program',
    icon: Award
  },
  {
    title: 'Project Leadership',
    description: 'Led multiple group projects and collaborative development efforts',
    icon: BookOpen
  },
  {
    title: 'Practical Application',
    description: 'Applied theoretical knowledge in real-world software development projects',
    icon: Code
  }
]

export function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="section-padding night-sky-content">
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
              Education & <span className="gradient-text">Academic Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Foundation in computer science and hands-on project experience
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="w-24 h-1 gradient-bg rounded-full mx-auto mt-6"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education Details */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Education Details
                </h3>
                <div className="rounded-xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md mb-4">
                  <Image
                    src="/education/education_logo1.png"
                    alt="University of Rizal System (URS) website"
                    width={1200}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl p-6 border border-primary-100 dark:border-primary-800/30">
                  <div className="flex items-start space-x-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {education.degree}
                      </h4>
                      <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                        {education.university}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{education.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{education.location}</span>
                        </div>
                      </div>

                      <div>
                        <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          Key Highlights:
                        </h5>
                        <ul className="space-y-1">
                          {education.highlights.map((highlight, index) => (
                            <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Academic Achievements
                </h3>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      className="flex items-start space-x-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                    >
                      <achievement.icon className="h-5 w-5 text-primary-600 dark:text-primary-400 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {achievement.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                {/* Removed bottom banner; logo moved to top of degree card */}
              </div>
            </motion.div>

            {/* Academic Projects */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Academic Projects
              </h3>

              <div className="space-y-6">
                {academicProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} group-hover:scale-110 transition-transform duration-300`}>
                        <project.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          {project.title}
                        </h4>
                        <p className="text-primary-600 dark:text-primary-400 text-sm font-medium mb-3">
                          {project.subtitle}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                          {project.description}
                        </p>

                        <div className="mb-4">
                          <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                            Key Features:
                          </h5>
                          <div className="grid grid-cols-1 gap-1">
                            {project.features.slice(0, 3).map((feature, featIndex) => (
                              <div key={featIndex} className="text-xs text-gray-600 dark:text-gray-300 flex items-start">
                                <span className="w-1 h-1 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                                {feature}
                              </div>
                            ))}
                            {project.features.length > 3 && (
                              <div className="text-xs text-primary-600 dark:text-primary-400 font-medium">
                                +{project.features.length - 3} more features
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800/30">
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              <span className="text-primary-700 dark:text-primary-300 font-medium">
                Continuous learning and skill development
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

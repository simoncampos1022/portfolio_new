'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Building, ExternalLink } from 'lucide-react'
import { formatDateRange } from '@/lib/utils'

const experiences = [
  {
    id: 1,
    title: 'AI Full Stack Developer',
    company: 'Upwork',
    location: 'Remote',
    type: 'Freelance',
    startDate: '2025-08-01',
    endDate: null,
    description: 'Upwork is a leading global freelancing platform headquartered in Palo Alto, California, connecting businesses with independent professionals and agencies across various categories including software development, design, marketing, and more.',
    achievements: [
      'Developed AI-powered applications integrating machine learning models for enhanced user interaction and automation',
      'Implemented scalable backend APIs to support real-time data processing and dynamic AI workflows',
      'Designed intuitive front-end interfaces using React and Next.js for client-facing AI tools',
      'Automated deployment pipelines and CI/CD workflows to streamline development cycles',
      'Leveraged cloud platforms for AI model hosting and scalable infrastructure management',
      'Collaborated with clients to translate business needs into technical AI solutions and custom features'
    ],
    technologies: ['Python', 'React', 'Next.js', 'Node.js', 'AWS', 'Docker', 'TensorFlow', 'PyTorch'],
    logo: 'U',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 2,
    title: 'Algorithm Trading Specialist',
    company: 'Truelancer',
    location: 'Remote',
    type: 'Freelance',
    startDate: '2024-02-01',
    endDate: '2025-08-01',
    description: 'Truelancer is a global freelance marketplace connecting businesses with skilled professionals globally',
    achievements: [
      'Developed and optimized algorithmic trading strategies for crypto, stock, and forex markets using AI techniques',
      'Applied NLP for sentiment analysis on financial news to improve trade decision making',
      'Utilized time series forecasting models to predict asset price movements and market trends',
      'Implemented machine learning pipelines for risk management and trade signal generation',
      'Integrated trading algorithms with centralized exchange APIs for automated execution',
      'Analyzed historical trading data to refine models and increase profitability of strategies'
    ],
    technologies: ['Python', 'TensorFlow', 'Pandas', 'NumPy', 'Scikit-learn', 'REST APIs', 'WebSocket', 'PostgreSQL'],
    logo: 'T',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 3,
    title: 'Senior Backend Developer',
    company: 'Plentina VN',
    location: 'Paranaque, Philippines',
    type: 'Full-time',
    startDate: '2021-04-01',
    endDate: '2024-02-01',
    description: 'Plentina is a fintech startup providing Buy Now, Pay Later (BNPL) credit solutions in emerging markets, primarily in the Philippines. The company helps consumers build credit history and make cashless payments through a mobile app and partnerships with merchants',
    achievements: [
      'Led backend development of credit and loan management systems using modern frameworks and cloud technologies',
      'Designed and maintained scalable RESTful APIs for mobile and web fintech applications',
      'Assisted in the implementation of AI solutions for clients, leveraging machine learning and smart analytics',
      'Implemented secure data processing workflows compliant with financial regulations',
      'Optimized database schemas and queries for high-performance transaction processing',
      'Integrated third-party payment gateways and merchant partners for seamless BNPL service delivery',
      'Collaborated cross-functionally to translate product requirements into robust backend solutions'
    ],
    technologies: ['Python', 'Django', 'FastAPI', 'PostgreSQL', 'Redis', 'AWS', 'Docker', 'Kubernetes'],
    logo: 'P',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 4,
    title: 'Junior Backend Developer',
    company: 'Converge ICT',
    location: 'Angeles, Philippines',
    type: 'Full-time',
    startDate: '2019-10-01',
    endDate: '2021-04-01',
    description: 'Converge ICT Solutions Inc. is a premier fiber optic internet and digital services provider in the Philippines, known for its extensive fiber network and commitment to reliable, high-speed internet connectivity for homes and businesses',
    achievements: [
      'Developed backend features supporting internet service and billing platforms using popular backend technologies',
      'Assisted in database management and optimization for customer account and service data',
      'Supported API integrations with third-party systems for service monitoring and provisioning',
      'Contributed to troubleshooting and fixing backend performance and security issues',
      'Collaborated with senior developers to implement new system modules and upgrades',
      'Participated in code reviews and adhered to best practices in software development lifecycle'
    ],
    technologies: ['Python', 'Django', 'MySQL', 'REST APIs', 'Linux', 'Git', 'Jira', 'Postman'],
    logo: 'C',
    color: 'from-orange-500 to-red-500'
  }
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Work <span className="gradient-text">Experience</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              A journey through diverse roles building scalable systems and AI solutions
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="w-24 h-1 gradient-bg rounded-full mx-auto mt-6"
            />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500 transform md:-translate-x-0.5" />

            {/* Experience Cards */}
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-gray-800 transform md:-translate-x-2 z-10" />

                  {/* Experience Card */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                    >
                      {/* Company Logo */}
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${experience.color} flex items-center justify-center text-white font-bold text-lg`}>
                          {experience.logo}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {experience.title}
                          </h3>
                          <p className="text-primary-600 dark:text-primary-400 font-medium">
                            {experience.company}
                          </p>
                        </div>
                      </div>

                      {/* Meta Information */}
                      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDateRange(experience.startDate, experience.endDate)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{experience.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Building className="h-4 w-4" />
                          <span>{experience.type}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Key Achievements */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-1">
                          {experience.achievements.slice(0, 3).map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                          {experience.achievements.length > 3 && (
                            <li className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                              +{experience.achievements.length - 3} more achievements
                            </li>
                          )}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
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
                Open to new opportunities and collaborations
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

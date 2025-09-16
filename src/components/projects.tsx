'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, Eye, Code, Brain, Database, Cloud, Zap, X } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Imaginify',
    subtitle: 'AI-Powered Image Transformation Platform',
    description: 'A cutting-edge AI-powered SaaS platform that transforms images using advanced machine learning algorithms. Built with modern web technologies, it provides users with powerful image editing capabilities through an intuitive and beautiful interface.',
    longDescription: 'Imaginify is an AI-powered SaaS platform that delivers professional-grade image transformations using advanced machine learning models like CNNs, GANs, and Stable Diffusion. It offers real-time, high-quality image restoration, background removal, object removal, content-aware expansion, and style transfer with support for up to 8K resolution and batch processing.',
    image: '/api/placeholder/600/400',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Stripe', 'TensorFlow', 'PyTorch'],
    features: [
      'Real-time AI image processing',
      '8K resolution support',
      'Batch processing capabilities',
      'Stripe payment integration',
      'Multi-factor authentication',
      'API key management',
      'Smart collections & semantic search'
    ],
    liveUrl: 'https://ai-sass-app-pi.vercel.app/',
    githubUrl: 'https://github.com/simoncampos1022/imaginify',
    category: 'AI/ML',
    status: 'Live',
    icon: Brain,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 2,
    title: 'Plante AI',
    subtitle: 'Smart Meal Analysis App',
    description: 'An innovative Flutter application that revolutionizes how we understand and improve our eating habits through advanced AI-powered meal analysis. Simply take a photo of your meal, and our intelligent system will provide comprehensive insights.',
    longDescription: 'Plante AI is a Flutter app that uses AI to analyze meals from photos, providing detailed nutritional information and calorie estimates. It offers personalized health and dietary recommendations based on user goals and nutritional gaps. The app detects allergens, unsafe food combinations, and contamination risks to ensure meal safety.',
    image: '/api/placeholder/600/400',
    technologies: ['Flutter', 'Dart', 'TensorFlow Lite', 'Firebase', 'Python', 'FastAPI', 'OpenCV'],
    features: [
      'AI-powered meal analysis',
      'Nutritional information extraction',
      'Allergen detection',
      'Health recommendations',
      'Offline support',
      'Multi-language support',
      'Cross-platform compatibility'
    ],
    liveUrl: 'https://drive.google.com/drive/folders/1T0s3laE9Z6iulVpn4Z99IlYFK7xCbErO?usp=sharing',
    githubUrl: 'https://github.com/simoncampos1022/plante-ai',
    category: 'Mobile AI',
    status: 'Demo Available',
    icon: Brain,
    gradient: 'from-green-500 to-teal-500'
  },
  {
    id: 3,
    title: 'UI-Butler',
    subtitle: 'Advanced Full-Stack Monorepo Architecture',
    description: 'Full-Stack monorepo using Turborepo with Nest.js backend microservices and Next.js frontend microservices. Features gRPC communication, Redis caching, and AI workflow management.',
    longDescription: 'UI-Butler is a comprehensive full-stack monorepo project showcasing modern microservices architecture. It includes Nest.js-based backend services with modular architecture, inter-service communication via gRPC, custom Redis-based caching, JWT authentication, BullMQ job processing, and AI integration with GEMINI AI response streaming.',
    image: '/api/placeholder/600/400',
    technologies: ['Nest.js', 'Next.js', 'TypeScript', 'Turborepo', 'gRPC', 'Redis', 'Docker', 'BullMQ'],
    features: [
      'Microservices architecture',
      'gRPC communication',
      'Redis caching system',
      'JWT authentication',
      'AI workflow management',
      'Docker containerization',
      'Server-Sent Events (SSE)',
      'React Flow visualization'
    ],
    liveUrl: 'https://www.uibutler.xyz/',
    githubUrl: 'https://github.com/simoncampos1022/ui-butler',
    category: 'Full-Stack',
    status: 'Live',
    icon: Code,
    gradient: 'from-blue-500 to-cyan-500'
  }
]

const categories = ['All', 'AI/ML', 'Mobile AI', 'Full-Stack']

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-900">
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
              Featured <span className="gradient-text">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Showcasing my expertise in AI, backend development, and full-stack solutions
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="w-24 h-1 gradient-bg rounded-full mx-auto"
            />
          </div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Project Image */}
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Live' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-yellow-500 text-white'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <project.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200 text-sm font-medium"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Eye className="h-4 w-4" />
                        <span>Live Demo</span>
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 text-sm font-medium"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="h-4 w-4" />
                        <span>Code</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Project Modal */}
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {selectedProject.title}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium">
                        {selectedProject.subtitle}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>

                  <div className="space-y-6">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {selectedProject.longDescription}
                    </p>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {selectedProject.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Zap className="h-4 w-4 text-primary-500" />
                            <span className="text-gray-600 dark:text-gray-300 text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <motion.a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200 font-medium"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>View Live</span>
                      </motion.a>
                      <motion.a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 font-medium"
                      >
                        <Github className="h-4 w-4" />
                        <span>View Code</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { Code, Brain, Database, Cloud, Users, Target, TrendingUp } from 'lucide-react'

const stats = [
  { label: 'Years Experience', value: '6+', icon: Target },
  { label: 'Projects Completed', value: '47+', icon: Code },
]

const highlights = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Specialized in developing AI agents, ML pipelines, and intelligent solutions using TensorFlow, PyTorch, and modern AI frameworks.',
  },
  {
    icon: Database,
    title: 'Backend Architecture',
    description: 'Expert in designing scalable backend systems with microservices, REST APIs, GraphQL, and cloud-native architectures.',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Proficient in AWS, Azure, Docker, Kubernetes, and CI/CD pipelines for reliable, scalable deployments.',
  },
  {
    icon: TrendingUp,
    title: 'AI Trading Systems',
    description: 'Passionate about developing AI trading bots and forecasting models using TimeMixer, TimesNet, TabPFN-v2, sentiment analysis, and YOLO pattern detection.',
  },
]

export function About() {
  return (
    <section id="about" className="section-padding night-sky-content">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4 sm:mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 gradient-bg rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Story */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed hyphens-auto text-justify">
                  I'm a Senior Software Engineer | Backend & Python Expert with 6+ years of experience, passionate about building scalable systems that power intelligent solutions. My journey started with curiosity about algorithms in university, which grew into creating AI-driven products that help businesses innovate.
                </p>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed hyphens-auto text-justify">
                  I thrive at the intersection of backend engineering and applied machine learning. From developing credit management systems at fintech startups to building AI-powered trading algorithms, I've consistently delivered robust solutions that drive real business value.
                </p>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed hyphens-auto text-justify">
                  I'm particularly passionate about AI trading systems and have developed several trading bots and forecasting models. I leverage cutting-edge time series models like TimeMixer, TimeMixer++, TimesNet, TimeXer, and TabPFN-v2, along with sentiment analysis using OpenAI API and Grok. I also use YOLO models for chart pattern detection to enhance trading strategies.
                </p>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed hyphens-auto text-justify">
                  Currently, I'm focused on creating AI-powered applications that integrate machine learning models for enhanced user interaction and automation, while maintaining the highest standards of code quality and system reliability.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-6 sm:pt-8">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                  >
                    <stat.icon className="h-8 w-8 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Highlights */}
            <div className="space-y-6">
              {highlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="p-6 rounded-xl bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 border border-primary-100 dark:border-primary-800/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/40 transition-colors duration-300">
                        <highlight.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800/30">
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              <span className="text-primary-700 dark:text-primary-300 font-medium">
                Available for new opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

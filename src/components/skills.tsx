'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Brain, 
  Database, 
  Cloud, 
  Wrench,
  Server,
  Cpu,
  Globe,
  Monitor,
  MessageSquare,
  TrendingUp,
  Palette,
  BarChart3,
  Activity,
  Calculator,
  Coins,
  Wifi,
  Bot,
  DollarSign,
  Heart,
  Clock,
} from 'lucide-react'

import { 
  SiMongodb, SiPostgresql, SiMysql, SiRedis, 
  SiDocker, SiKubernetes, SiTerraform, SiApachekafka, SiRabbitmq, SiPython, SiJavascript, 
  SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiGo, SiDjango, SiFastapi, 
  SiFlask, SiTailwindcss, SiHtml5, SiGit, SiGithub, SiGitlab, SiPostman,
  SiTensorflow, SiPytorch, SiScikitlearn, SiBoost, SiNumpy, SiPandas, SiJupyter,
  SiVuedotjs, SiAngular, SiRedux, SiWebpack, SiVite, SiNpm, SiYarn,
  SiExpress, SiLaravel, SiRubyonrails, SiPhp, SiRust,
  SiJenkins, SiGithubactions, SiPrometheus, SiGrafana,
  SiElasticsearch, SiFirebase, SiSupabase, SiPlanetscale,
  SiJest, SiCypress, SiSelenium, SiFigma, SiBitcoin, SiEthereum,
  SiBinance, SiCoinbase, SiTradingview, SiMeta, SiOpenai, SiMlflow, SiStreamlit,
  SiOpencv, SiKeras, SiHuggingface, SiLangchain, SiPnpm, SiPolars,
  SiCss, SiGooglecloud, SiSolana, SiV0, SiGithubcopilot, SiSlack, SiJira,
  SiBitbucket
} from '@icons-pack/react-simple-icons';


const skillCategories = [
  {
    title: 'AI/ML',
    icon: Brain,
    skills: [
      { name: 'PyTorch', icon: SiPytorch },
      { name: 'TensorFlow', icon: SiTensorflow },
      { name: 'Hugging Face', icon: SiHuggingface },
      { name: 'LangChain', icon: SiLangchain },
      { name: 'RAG', icon: Brain },
      { name: 'LlamaIndex', icon: Brain },
      { name: 'NumPy', icon: SiNumpy },
      { name: 'Pandas', icon: SiPandas },
      { name: 'Scikit-learn', icon: SiScikitlearn },
      { name: 'Jupyter', icon: SiJupyter },
      { name: 'OpenCV', icon: SiOpencv },
      { name: 'XGBoost', icon: SiBoost },
      { name: 'Transformers', icon: Brain },
      { name: 'MLflow', icon: SiMlflow },
      { name: 'Streamlit', icon: SiStreamlit },
    ]
  },
  {
    title: 'Frontend',
    icon: Palette,
    skills: [
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Vue.js', icon: SiVuedotjs },
      { name: 'Angular', icon: SiAngular },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Redux', icon: SiRedux },
      { name: 'Vite', icon: SiVite },
      { name: 'pnpm', icon: SiPnpm },
      { name: 'Yarn', icon: SiYarn },
      { name: 'Figma', icon: SiFigma },
    ]
  },
  {
    title: 'Backend',
    icon: Database,
    skills: [
      { name: 'Python', icon: SiPython },
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'Django', icon: SiDjango },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Go', icon: SiGo },
      { name: 'PHP', icon: SiPhp },
      { name: 'Laravel', icon: SiLaravel },
      { name: 'Rust', icon: SiRust },
      { name: 'REST API', icon: Globe },
      { name: 'GraphQL', icon: Database },
      { name: 'WebSockets', icon: Wifi },
      { name: 'Microservices', icon: Server },
      { name: 'MySQL', icon: SiMysql },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Redis', icon: SiRedis },
      { name: 'Supabase', icon: SiSupabase },
      { name: 'Serverless', icon: Cloud },
    ]
  },
  {
    title: 'DevOps',
    icon: Cloud,
    skills: [
      { name: 'AWS', icon: Cloud },
      { name: 'Azure', icon: Cloud },
      { name: 'Google Cloud', icon: SiGooglecloud },
      { name: 'Kubernetes', icon: SiKubernetes },
      { name: 'GitHub Actions', icon: SiGithubactions },
      { name: 'Docker', icon: SiDocker },
      { name: 'Terraform', icon: SiTerraform },
      { name: 'Grafana', icon: SiGrafana },
      { name: 'Kafka', icon: SiApachekafka },
      { name: 'RabbitMQ', icon: SiRabbitmq },
      { name: 'Git', icon: SiGit },
      { name: 'Github', icon: SiGithub },
      { name: 'GitLab', icon: SiGitlab },
    ]
  },
  {
    title: 'Trading',
    icon: TrendingUp,
    skills: [
      { name: 'Timeseries Forecasting', icon: Clock },
      { name: 'Sentiment Analysis', icon: Heart },
      { name: 'Pattern Detection', icon: TrendingUp },
      { name: 'Algorithm Trading', icon: MessageSquare },
      { name: 'Backtesting', icon: BarChart3 },
      { name: 'Optimization', icon: Activity },
      { name: 'API Integration', icon: Globe },
      { name: 'Trading Automation', icon: Bot },
      { name: 'Crypto Trading', icon: SiBitcoin },
      { name: 'Forex Trading', icon: DollarSign },
      { name: 'TradingView', icon: SiTradingview },
      { name: 'MetaTrader 4/5', icon: Monitor },
      { name: 'NinjaTrader 8', icon: Monitor },
      { name: 'cTrader', icon: Monitor },
      { name: 'Binance', icon: SiBinance },
      { name: 'Ethereum', icon: SiEthereum },
      { name: 'Solana', icon: SiSolana },
    ]
  },
  {
    title: 'Other',
    icon: Wrench,
    skills: [
      { name: 'Cursor', icon: SiPlanetscale },
      { name: 'Slack', icon: SiSlack },
      { name: 'Jira', icon: SiJira },
      { name: 'Bitbucket', icon: SiBitbucket },
      { name: 'OpenAI', icon: SiOpenai },
      { name: 'Postman', icon: SiPostman },
      { name: 'Cypress', icon: SiCypress },
      { name: 'Selenium', icon: SiSelenium },
      { name: 'Adobe XD', icon: Palette },
      { name: 'V0', icon: SiV0 },
      { name: 'Github Copilot', icon: SiGithubcopilot },
    ]
  }
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="section-padding night-sky-content">
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
              A comprehensive toolkit for building scalable, intelligent systems and AI trading solutions
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
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200 dark:border-gray-700"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 group-hover:from-primary-200 group-hover:to-secondary-200 dark:group-hover:from-primary-800/40 dark:group-hover:to-secondary-800/40 transition-all duration-300">
                    <category.icon className="h-7 w-7 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="grid grid-cols-2 gap-2 sm:gap-4">
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
                      <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 hover:shadow-md">
                        <div className="flex-shrink-0">
                          <skill.icon className="h-5 w-5 sm:h-6 sm:w-6 group-hover/skill:scale-110 transition-all duration-200" style={{ color: 'inherit' }} />
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 group-hover/skill:text-gray-900 dark:group-hover/skill:text-white transition-colors duration-200 truncate">
                          {skill.name}
                        </span>
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

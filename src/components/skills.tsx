'use client'

import { SectionHeader } from '@/components/section-header'

type SkillIcon = {
  name: string
  icon: string
}

type SkillCategory = {
  title: string
  skills: SkillIcon[]
}

/** Primary icon source — https://skillicons.dev */
const skillIcon = (id: string) => `https://skillicons.dev/icons?i=${id}`

/** Fallback for skills missing from skillicons.dev (Simple Icons, official logos, etc.) */
const localIcon = (file: string) => `/skills/${file}`

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', icon: skillIcon('python') },
      { name: 'JavaScript', icon: skillIcon('javascript') },
      { name: 'TypeScript', icon: skillIcon('typescript') },
      { name: 'Go', icon: skillIcon('golang') },
      { name: 'C++', icon: skillIcon('cpp') },
      { name: 'C#', icon: skillIcon('cs') },
    ],
  },
  {
    title: 'AI & Machine Learning',
    skills: [
      { name: 'PyTorch', icon: skillIcon('pytorch') },
      { name: 'TensorFlow', icon: skillIcon('tensorflow') },
      { name: 'Scikit-learn', icon: skillIcon('sklearn') },
      { name: 'OpenCV', icon: skillIcon('opencv') },
      { name: 'Hugging Face', icon: localIcon('huggingface.svg') },
      { name: 'Transformers', icon: localIcon('huggingface.svg') },
      { name: 'LangChain', icon: localIcon('langchain.svg') },
      { name: 'LangGraph', icon: localIcon('langgraph.png') },
      { name: 'OpenAI', icon: localIcon('openai.svg') },
      { name: 'NumPy', icon: localIcon('numpy.svg') },
      { name: 'Pandas', icon: localIcon('pandas.svg') },
      { name: 'XGBoost', icon: localIcon('xgboost.png') },
      { name: 'YOLO', icon: localIcon('yolo.png') },
      { name: 'FAISS', icon: localIcon('faiss.svg') },
      { name: 'Jupyter', icon: localIcon('jupyter.svg') },
      { name: 'Ollama', icon: localIcon('ollama.svg') },
      { name: 'Streamlit', icon: localIcon('streamlit.svg') },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: skillIcon('react') },
      { name: 'Next.js', icon: skillIcon('nextjs') },
      { name: 'HTML', icon: skillIcon('html') },
      { name: 'CSS', icon: skillIcon('css') },
      { name: 'Tailwind CSS', icon: skillIcon('tailwind') },
      { name: 'Redux', icon: skillIcon('redux') },
      { name: 'Vite', icon: skillIcon('vite') },
      { name: 'Figma', icon: skillIcon('figma') },
    ],
  },
  {
    title: 'Backend & APIs',
    skills: [
      { name: 'Django', icon: skillIcon('django') },
      { name: 'FastAPI', icon: skillIcon('fastapi') },
      { name: 'Flask', icon: skillIcon('flask') },
      { name: 'Node.js', icon: skillIcon('nodejs') },
      { name: 'REST API', icon: localIcon('rest-api.svg') },
      { name: 'GraphQL', icon: skillIcon('graphql') },
      { name: 'Postman', icon: skillIcon('postman') },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', icon: skillIcon('mysql') },
      { name: 'PostgreSQL', icon: skillIcon('postgresql') },
      { name: 'MongoDB', icon: skillIcon('mongodb') },
      { name: 'Redis', icon: skillIcon('redis') },
      { name: 'Supabase', icon: skillIcon('supabase') },
      { name: 'Pinecone', icon: localIcon('pinecone.png') },
    ],
  },
  {
    title: 'Cloud',
    skills: [
      { name: 'AWS', icon: skillIcon('aws') },
      { name: 'Azure', icon: skillIcon('azure') },
      { name: 'Google Cloud', icon: skillIcon('gcp') },
    ],
  },
  {
    title: 'DevOps & Infrastructure',
    skills: [
      { name: 'Docker', icon: skillIcon('docker') },
      { name: 'Kubernetes', icon: skillIcon('kubernetes') },
      { name: 'Terraform', icon: skillIcon('terraform') },
      { name: 'Kafka', icon: skillIcon('kafka') },
      { name: 'RabbitMQ', icon: skillIcon('rabbitmq') },
      { name: 'Grafana', icon: skillIcon('grafana') },
      { name: 'GitHub Actions', icon: skillIcon('githubactions') },
    ],
  },
  {
    title: 'Version Control',
    skills: [
      { name: 'Git', icon: skillIcon('git') },
      { name: 'GitHub', icon: skillIcon('github') },
      { name: 'GitLab', icon: skillIcon('gitlab') },
      { name: 'Bitbucket', icon: skillIcon('bitbucket') },
    ],
  },
  {
    title: 'Testing & Developer Tools',
    skills: [
      { name: 'Cypress', icon: skillIcon('cypress') },
      { name: 'Selenium', icon: skillIcon('selenium') },
      { name: 'Yarn', icon: skillIcon('yarn') },
      { name: 'VS Code', icon: skillIcon('vscode') },
      { name: 'Cursor', icon: localIcon('cursor.png') },
      { name: 'Claude Code', icon: localIcon('claude-code.svg') },
    ],
  },
]

/** Simple Icons SVGs are monochrome — invert in dark mode so they stay visible */
const MONOCHROME_SKILL_ICONS = new Set([
  '/skills/langchain.svg',
  '/skills/openai.svg',
  '/skills/numpy.svg',
  '/skills/pandas.svg',
  '/skills/jupyter.svg',
  '/skills/ollama.svg',
  '/skills/streamlit.svg',
  '/skills/faiss.svg',
])

function SkillCard({ name, icon }: SkillIcon) {
  const isMonochromeSvg = MONOCHROME_SKILL_ICONS.has(icon)

  return (
    <div className="group surface-card-hover flex flex-col items-center gap-3 p-4 sm:p-5">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-neutral-50 transition-colors group-hover:bg-neutral-100 dark:bg-neutral-900 dark:group-hover:bg-neutral-800">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={icon}
          alt={name}
          width={48}
          height={48}
          className={`h-10 w-10 object-contain${isMonochromeSvg ? ' dark:brightness-0 dark:invert' : ''}`}
          loading="lazy"
        />
      </div>
      <span className="text-center text-xs font-medium leading-tight text-neutral-700 dark:text-neutral-300">
        {name}
      </span>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            title={<>🛠️ Skills & technologies</>}
            subtitle="Languages, frameworks, and tools I use to build scalable systems and AI solutions"
            accent="teal"
          />

          <div className="space-y-10">
            {skillCategories.map((category) => (
              <div key={category.title}>
                <h3 className="mb-4 font-heading text-lg font-semibold text-neutral-900 dark:text-white">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                  {category.skills.map((skill) => (
                    <SkillCard key={skill.name} {...skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

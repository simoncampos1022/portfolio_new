export interface Experience {
  id: number
  title: string
  company: string
  location: string
  type: string
  startDate: string
  endDate: string | null
  description: string
  achievements: string[]
  technologies: string[]
  logo: string
  color: string
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'AI Full Stack Developer',
    company: 'Upwork',
    location: 'Remote',
    type: 'Freelance',
    startDate: '2024-06-01',
    endDate: null,
    description: 'Upwork is a leading global freelancing platform headquartered in Palo Alto, California, connecting businesses with independent professionals and agencies across various categories including software development, design, marketing, and more.',
    achievements: [
      'Worked as a freelance full-stack developer on Upwork, completing 10+ client projects ranging from AI-powered web and mobile apps to custom trading tools and automation systems',
      'Built end-to-end web applications with React/Next.js on the frontend and Node.js or Python backends, exposing REST/GraphQL APIs and integrating real-time features where needed',
      'Developed AI-driven features such as chatbots, recommendation flows, and predictive dashboards by wiring custom or third-party models into backend services and frontend UX',
      'Created cross-platform mobile apps using Flutter and/or React Native, integrating backend APIs and, in some cases, lightweight on-device inference or remote model calls for AI functionality',
      'Designed and implemented several algorithmic trading systems for crypto/forex, including data ingestion, strategy backtesting, live execution, and risk controls, using Python and Go on the backend',
      'Worked with common ML libraries and services (e.g., TensorFlow/PyTorch, scikit-learn, or hosted APIs) to build or integrate models for forecasting, classification, and basic NLP tasks, then deployed them behind secure APIs',
      'Containerized backend services with Docker and used CI/CD workflows to deploy to AWS/GCP or other hosting platforms, helping clients ship updates more frequently with fewer manual steps',
      'Collaborated closely with non-technical clients to clarify requirements, propose technical approaches, estimate work, and provide regular progress updates, ensuring projects were delivered on time and within scope'
    ],
    technologies: ['Python', 'React', 'Next.js', 'Node.js', 'Flutter', 'React Native', 'Go', 'AWS', 'GCP', 'Docker', 'TensorFlow', 'PyTorch', 'GraphQL', 'REST APIs'],
    logo: 'U',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 2,
    title: 'Senior Backend Developer',
    company: 'Plentina VN',
    location: 'Paranaque, Philippines',
    type: 'Full-time',
    startDate: '2022-04-01',
    endDate: '2024-05-01',
    description: 'Plentina is a fintech startup providing Buy Now, Pay Later (BNPL) credit solutions in emerging markets, primarily in the Philippines. The company helps consumers build credit history and make cashless payments through a mobile app and partnerships with merchants',
    achievements: [
      'Led backend development for credit and loan management services, designing and maintaining core services that handled user onboarding, credit assessment, repayment schedules, and transaction processing',
      'Worked with modern backend frameworks and cloud services (Node.js/TypeScript, PHP/Laravel, REST APIs, Kafka, Kubernetes, Docker) to build scalable and resilient systems that supported growing user and transaction volume',
      'Designed and maintained high-throughput RESTful APIs used by the mobile app, internal tools, and partner integrations, with a focus on clear contracts, versioning, and backward compatibility',
      'Collaborated closely with data and product teams on risk and credit features, integrating scoring logic, limits, and eligibility checks directly into the backend flows to reduce manual review and improve approval accuracy',
      'Implemented and optimized backend components that consumed machine learning outputs (risk scores, predictions, segment tags) for credit decisioning and personalized limits, making sure inference calls were reliable, cached appropriately, and observable in production',
      'Helped design secure data flows for sensitive customer and transactional data, including encryption at rest and in transit, strict access controls, and proper logging/auditing aligned with internal policies and local financial regulations',
      'Tuned database schemas and queries (MySQL/PostgreSQL) to handle high-volume, low-latency BNPL transactions, including adding the right indexes, breaking down heavy queries, and separating read/write workloads where needed',
      'Built and maintained integrations with third-party payment gateways, e-wallets, and merchant systems, handling edge cases such as timeouts, partial failures, idempotency, and reconciliation of transaction records',
      'Took ownership of incident handling for backend services, including setting up monitoring and alerts, performing root-cause analysis on production issues, and implementing permanent fixes instead of short-term workarounds',
      'Worked with product managers and mobile engineers to break down feature requirements, estimate work, and plan releases; participated in code reviews and helped maintain consistent coding standards and documentation across the backend team',
      'Contributed to CI/CD pipelines and deployment practices such as automated tests, staging environments, canary or phased rollouts, which helped reduce deployment risk and improve release frequency',
      'Assisted in evolving the system architecture over time, gradually refactoring and extracting services from a more monolithic structure into a cleaner, more modular backend that could support new products and markets'
    ],
    technologies: ['Node.js', 'TypeScript', 'PHP', 'Laravel', 'MySQL', 'PostgreSQL', 'Kafka', 'Kubernetes', 'Docker', 'REST APIs', 'Redis', 'Microservices'],
    logo: 'P',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    title: 'Junior Backend Developer',
    company: 'Converge ICT',
    location: 'Angeles, Philippines',
    type: 'Full-time',
    startDate: '2019-10-01',
    endDate: '2022-04-01',
    description: 'Converge ICT Solutions Inc. is a premier fiber optic internet and digital services provider in the Philippines, known for its extensive fiber network and commitment to reliable, high-speed internet connectivity for homes and businesses',
    achievements: [
      'Developed and maintained backend features for internet service provisioning and billing platforms using Node.js, PHP, and related frameworks, helping support day-to-day operations and improve the overall customer experience',
      'Worked on MySQL and PostgreSQL databases by designing and refining schemas, writing optimized queries, and handling large sets of customer and service data to reduce query times and improve application responsiveness',
      'Built and integrated secure RESTful APIs with third-party monitoring, provisioning, and billing systems, focusing on reliable data exchange, proper error handling, and consistent API documentation',
      'Investigated and resolved backend performance issues, such as slow endpoints and inefficient queries, and helped address security concerns by applying patches, tightening access controls, and following internal security guidelines',
      'Collaborated with senior engineers to design and implement modular features, participated in sprint planning and stand-ups, and followed agile practices to deliver updates in small, manageable increments',
      'Contributed to the CI/CD pipeline by writing and maintaining build scripts, adding basic automated tests, and assisting with deployments to staging and production environments',
      'Performed code reviews for peer changes, followed established coding standards, and helped refactor legacy code to make it easier to maintain and extend',
      'Assisted in upgrading and migrating parts of the legacy backend stack to more scalable and maintainable solutions, helping the team support new services, higher traffic, and additional business requirements'
    ],
    technologies: ['Node.js', 'PHP', 'MySQL', 'PostgreSQL', 'REST APIs', 'Linux', 'Git', 'Jira', 'Agile', 'CI/CD'],
    logo: 'C',
    color: 'from-orange-500 to-red-500'
  }
]

export const companyLogos: Record<string, string> = {
  'truelancer': '/experience/truelancer.ico',
  'plentina vn': '/experience/plentina_vn.ico',
  'converge ict': '/experience/converge_ict.ico',
}

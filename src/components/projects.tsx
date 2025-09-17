'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, Eye, Code, Brain, Database, Cloud, Zap, X, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'Imaginify',
    subtitle: 'AI-Powered Image Transformation Platform',
    description: 'A cutting-edge AI-powered SaaS platform that transforms images using advanced machine learning algorithms. Built with modern web technologies, it provides users with powerful image editing capabilities through an intuitive and beautiful interface.',
    longDescription: 'Imaginify is an AI-powered SaaS platform that delivers professional-grade image transformations using advanced machine learning models like CNNs, GANs, and Stable Diffusion. It offers real-time, high-quality image restoration, background removal, object removal, content-aware expansion, and style transfer with support for up to 8K resolution and batch processing.',
    image: '/projects/Imaginify/Picture1.png',
    images: [
      '/projects/Imaginify/Picture1.png',
      '/projects/Imaginify/Picture2.png',
      '/projects/Imaginify/Picture3.png',
      '/projects/Imaginify/Picture4.png',
      '/projects/Imaginify/Picture5.png',
      '/projects/Imaginify/Picture6.png'
    ],
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
    githubUrl: 'https://github.com/simoncampos1022/ai-sass-app',
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
    image: '/projects/Plante AI/Picture1.png',
    images: [
      '/projects/Plante AI/Picture1.png',
      '/projects/Plante AI/Picture2.png',
      '/projects/Plante AI/Picture3.png',
      '/projects/Plante AI/Picture4.png',
      '/projects/Plante AI/Picture5.png',
      '/projects/Plante AI/Picture6.png',
      '/projects/Plante AI/Picture7.png',
      '/projects/Plante AI/Picture8.png'
    ],
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
    githubUrl: 'https://github.com/simoncampos1022/food-ai-app',
    category: 'Mobile AI',
    status: 'Live',
    icon: Brain,
    gradient: 'from-green-500 to-teal-500'
  },
  {
    id: 3,
    title: 'UI-Butler',
    subtitle: 'Advanced Full-Stack Monorepo Architecture',
    description: 'Full-Stack monorepo using Turborepo with Nest.js backend microservices and Next.js frontend microservices. Features gRPC communication, Redis caching, and AI workflow management.',
    longDescription: 'UI-Butler is a comprehensive full-stack monorepo project showcasing modern microservices architecture. It includes Nest.js-based backend services with modular architecture, inter-service communication via gRPC, custom Redis-based caching, JWT authentication, BullMQ job processing, and AI integration with GEMINI AI response streaming.',
    image: '/projects/UI-Butler/diagram.png',
    images: [
      '/projects/UI-Butler/diagram.png'
    ],
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
    githubUrl: 'https://github.com/simoncampos1022/ui-bulter',
    category: 'Full-Stack',
    status: 'Live',
    icon: Code,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 4,
    title: 'Multimodal Agentic RAG System',
    subtitle: 'PDF Document Analysis with AI Agents',
    description: 'An Agentic RAG system that enhances traditional RAG by enabling multimodal PDF analysis. It processes not only text but also images, tables, and combined queries that mix visual and textual information.',
    longDescription: 'An Agentic RAG system that enhances traditional RAG by enabling multimodal PDF analysis. It processes not only text but also images, tables, and combined queries that mix visual and textual information. The architecture integrates LangGraph for intelligent agentic reasoning, Docling for deep PDF understanding, and Milvus for hybrid search with improved retrieval accuracy. A user-friendly web interface ensures smooth interaction. The system is designed for researchers, data scientists, and developers who require intelligent document analysis and question answering across large PDF collections containing diverse content.',
    image: '/projects/Multimodal Agentic RAG/Picture1.png',
    images: [
      '/projects/Multimodal Agentic RAG/Picture1.png',
      '/projects/Multimodal Agentic RAG/Picture2.png',
    ],
    technologies: ['LangChain', 'LangGraph', 'Docling', 'Milvus', 'Attu', 'Docker', 'OpenAI', 'HuggingFace', 'PIL', 'OpenCV', 'PyTorch', 'Flask'],
    features: [
      'End-to-end Agentic RAG workflow with LangGraph',
      'Multimodal PDF ingestion pipeline with OpenAI Vision',
      'Milvus vector store with BM25 hybrid retrieval',
      'Conversational memory and agent step tracing',
      'Flask-based web application with real-time visualization'
    ],
    liveUrl: '',
    githubUrl: 'https://github.com/simoncampos1022/RAG-System-arXivRAG-Multimodal-Conversational',
    category: 'NLP/LLM',
    status: 'In Development',
    icon: Brain,
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    id: 5,
    title: 'Vietnamese Legal Document Retrieval',
    subtitle: 'Semantic Search for Legal Documents',
    description: 'A semantic retrieval system for Vietnamese legal documents using Sentence Transformers, fine-tuned on custom data and evaluated with MTEB, supporting scalable vector search via FAISS.',
    longDescription: 'A semantic retrieval system for Vietnamese legal documents using Sentence Transformers, fine-tuned on custom data and evaluated with MTEB, supporting scalable vector search via FAISS. The system achieved strong benchmark results with NDCG@10 of 60.4% and MAP@10 of 53.6% on MTEB (BKAI Legal Retrieval), demonstrating effectiveness in legal information retrieval tasks.',
    image: '/projects/Vietnamese Legal Document Retrieval/Picture1.png',
    images: [
      '/projects/Vietnamese Legal Document Retrieval/Picture1.png'
    ],
    technologies: ['Python', 'PyTorch', 'SentenceTransformers', 'MTEB', 'Accelerate', 'Gradio', 'Docker', 'Pandas', 'FAISS'],
    features: [
      'Fine-tuned multilingual SBERT on 100K+ Vietnamese legal documents',
      'Achieved NDCG@10 of 60.4% and MAP@10 of 53.6% on MTEB',
      'Complete pipeline with data preprocessing and evaluation',
      'FAISS-based retrieval system with Gradio interface',
      'Docker containerization for reproducibility'
    ],
    liveUrl: 'https://huggingface.co/spaces/YuITC/Vietnamese-Legal-Doc-Retrieval',
    githubUrl: 'https://github.com/YuITC/Vietnamese-Legal-Doc-Retrieval',
    category: 'NLP/LLM',
    status: 'Live',
    icon: Database,
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    id: 6,
    title: 'Real-time Neural Style Transfer',
    subtitle: 'Artistic Image Transformation',
    description: 'A real-time neural style transfer application using feed-forward networks and OpenCV, deployed with Streamlit for instant artistic transformation on video feeds.',
    longDescription: 'A real-time neural style transfer application using feed-forward networks and OpenCV, deployed with Streamlit. The system uses a lightweight feed-forward CNN trained on MS-COCO and fine-tuned with artistic styles (e.g., Monet, Van Gogh). It integrates OpenCV for live webcam streaming and real-time frame processing, enabling seamless artistic transformation on video feeds.',
    image: '/projects/Real-time Neural Style Transfer/Picture1.png',
    images: [
      '/projects/Real-time Neural Style Transfer/Picture1.png'
    ],
    technologies: ['Python', 'PyTorch', 'VGG', 'TransformerNet', 'OpenCV', 'Numpy', 'Streamlit'],
    features: [
      'Real-time neural style transfer with lightweight CNN',
      'Live webcam streaming and frame processing',
      'Interactive Streamlit web interface',
      'Frame-by-frame normalization and optimization',
      'Low-latency style transfer for smooth rendering'
    ],
    liveUrl: 'https://realtime-style-transfer.streamlit.app/',
    githubUrl: 'https://github.com/YuITC/Realtime-Style-Transfer',
    category: 'Computer Vision',
    status: 'Live',
    icon: Zap,
    gradient: 'from-rose-500 to-pink-500'
  },
  {
    id: 7,
    title: 'Scene Text Recognition System',
    subtitle: 'OCR with YOLOv11m and CRNN',
    description: 'A scalable OCR system using YOLOv11m and CRNN with CTC loss, deployed via FastAPI + Ray Serve, supporting real-time OCR with GPU acceleration and an interactive Streamlit UI.',
    longDescription: 'A scalable OCR system using YOLOv11m and CRNN with CTC loss, deployed via FastAPI + Ray Serve, supporting real-time OCR with GPU acceleration and an interactive Streamlit UI. The system integrates YOLOv11m for text detection and CRNN (ResNet34) for recognition, achieving ~88% precision on the ICDAR2003 benchmark.',
    image: '/projects/Scene Text Recognition/Picture1.png',
    images: [
      '/projects/Scene Text Recognition/Picture1.png'
    ],
    technologies: ['Python', 'PyTorch', 'YOLOv11m', 'OpenCV', 'CRNN', 'Scikit-learn', 'FastAPI', 'Ray Serve', 'Streamlit'],
    features: [
      'YOLOv11m + CRNN pipeline for text detection and recognition',
      '~88% precision on ICDAR2003 benchmark',
      'Scalable OCR API with FastAPI and Ray Serve',
      'GPU acceleration and autoscaling support',
      'Interactive Streamlit application for instant OCR'
    ],
    liveUrl: 'https://scene-text-recognition.streamlit.app/',
    githubUrl: 'https://github.com/YuITC/Scene-Text-Recognition',
    category: 'Computer Vision',
    status: 'Live',
    icon: Eye,
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    id: 8,
    title: 'Data Science Salary Prediction',
    subtitle: 'Glassdoor 2024 Analysis with ML & LLMs',
    description: 'This project predicts data science job salaries using 2024 Glassdoor data with both traditional machine learning and large language models (LLMs). It offers a comparison of predictive methods for salary estimation.',
    longDescription: 'This project predicts data science job salaries using 2024 Glassdoor data with both traditional machine learning and large language models (LLMs). It offers a comparison of predictive methods, helping professionals, recruiters, and researchers analyze salary trends. By incorporating job-related features, the project tackles the challenge of accurate salary estimation while exploring LLMs in regression tasks. An interactive Streamlit app delivers accessible predictions for technical and non-technical users alike.',
    image: '/projects/Data Science Salary Prediction/Picture1.png',
    images: [
      '/projects/Data Science Salary Prediction/Picture1.png',
      '/projects/Data Science Salary Prediction/Picture2.png'
    ],
    technologies: ['Selenium', 'Pandas', 'NumPy', 'Scikit-learn', 'XGBoost', 'Optuna', 'PyTorch', 'Transformers', 'PEFT (QLoRA)', 'SFT', 'OpenAI SDK', 'Hugging Face', 'Weights & Biases'],
    features: [
      'Comprehensive data crawling and preprocessing from Glassdoor 2024',
      'Achieved R² = 0.82 using XGBoost vs Linear Regression baseline (R² = 0.71)',
      'Advanced hyperparameter tuning with Optuna',
      'LLM-based regression with OpenAI GPT-5 and LLaMA 3.1 fine-tuning',
      'Interactive Streamlit app with multiple modeling approaches'
    ],
    liveUrl: '',
    githubUrl: 'https://github.com/YuITC/2024-DataScience-Salaries-Analysis',
    category: 'Data Science',
    status: 'Completed',
    icon: Cloud,
    gradient: 'from-orange-500 to-red-500'
  },
  {
    id: 9,
    title: 'Dense Passage Retrieval',
    subtitle: 'Open-Domain Question Answering',
    description: 'PyTorch reimplementation of the paper "Dense Passage Retrieval for Open-Domain Question Answering" with modular design, low GPU optimization (T4), and accuracy improvements over the original paper.',
    longDescription: 'PyTorch reimplementation of the paper "Dense Passage Retrieval for Open-Domain Question Answering" with modular design, low GPU optimization (T4), and accuracy improvements over the original paper for enhanced usability and performance. The system uses dual-encoder Transformers for high-accuracy semantic search across large-scale QA datasets.',
    image: '/projects/Dense Passage Retrieval/Picture1.png',
    images: [
      '/projects/Dense Passage Retrieval/Picture1.png'
    ],
    technologies: ['Python', 'PyTorch', 'Transformers', 'Accelerate', 'FAISS', 'Numpy', 'Pandas', 'Matplotlib'],
    features: [
      'Modular dense passage retrieval with dual-encoder Transformers',
      '~1% improvement over original DPR baseline',
      'FAISS integration for efficient vector indexing',
      'Optimized for 16GB NVIDIA T4 GPU with mixed precision',
      'Memory-efficient PyTorch data pipelines'
    ],
    liveUrl: '',
    githubUrl: 'https://github.com/YuITC/Dense-Passage-Retrieval',
    category: 'NLP/LLM',
    status: 'Research',
    icon: Database,
    gradient: 'from-violet-500 to-purple-500'
  }
]

const categories = ['All', 'AI/ML', 'Mobile AI', 'Full-Stack', 'NLP/LLM', 'Computer Vision', 'Data Science']

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const handleProjectSelect = (project: typeof projects[0]) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
  }

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
                onClick={() => handleProjectSelect(project)}
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Project Image */}
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
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

                    {/* Image Gallery */}
                    {selectedProject.images && selectedProject.images.length > 0 && (
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Project Screenshots
                        </h4>
                        <div className="relative">
                          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
                            <Image
                              src={selectedProject.images[currentImageIndex]}
                              alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                              fill
                              className="object-contain"
                              sizes="(max-width: 768px) 100vw, 80vw"
                            />
                          </div>
                          
                          {selectedProject.images.length > 1 && (
                            <>
                              <button
                                onClick={() => setCurrentImageIndex((prev) => 
                                  prev === 0 ? selectedProject.images.length - 1 : prev - 1
                                )}
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
                              >
                                <ChevronLeft className="h-4 w-4" />
                              </button>
                              <button
                                onClick={() => setCurrentImageIndex((prev) => 
                                  prev === selectedProject.images.length - 1 ? 0 : prev + 1
                                )}
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
                              >
                                <ChevronRight className="h-4 w-4" />
                              </button>
                            </>
                          )}
                          
                          {selectedProject.images.length > 1 && (
                            <div className="flex justify-center mt-4 space-x-2">
                              {selectedProject.images.map((_, index) => (
                                <button
                                  key={index}
                                  onClick={() => setCurrentImageIndex(index)}
                                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                                    index === currentImageIndex 
                                      ? 'bg-primary-500' 
                                      : 'bg-gray-300 dark:bg-gray-600'
                                  }`}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    )}

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

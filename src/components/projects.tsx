'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, Eye, Code, Zap, X, ChevronLeft, ChevronRight } from 'lucide-react'
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
    category: 'FullStack',
    status: 'Live',
    gradient: 'from-green-500 to-teal-500'
  },
  {
    id: 3,
    title: 'Dream Market Landing',
    subtitle: 'Modern Trading Platform',
    description: 'Dream Market is a cutting-edge platform that enables users to trade on the outcome of future events using advanced algorithms and real-time data analysis.',
    longDescription: 'Dream Market is a cutting-edge platform that enables users to trade on the outcome of future events using advanced algorithms and real-time data analysis.',
    image: '/projects/Dream-Market-Landing/dream-market-landing.png',
    images: [
      '/projects/Dream-Market-Landing/dream-market-landing.png'
    ],
    technologies: ['React', 'Next.js', 'Tailwindcss', 'SSL/TLS', 'Vercel', 'Node.js', 'Webpack', 'D3', 'BullMQ'],
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
    liveUrl: 'https://dreams-market-modern-landing.vercel.app/',
    githubUrl: 'https://github.com/simoncampos1022/dreams-market-landing',
    category: 'Frontend',
    status: 'Live',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 4,
    title: 'AI Body Detection & Measurement',
    subtitle: 'Shopify Clothing Fit Finder',
    description: 'Computer vision system that extracts precise body measurements from a single front-facing photo to recommend well-fitting clothes on Shopify. Uses AI to analyze body shape and provide personalized clothing recommendations.',
    longDescription: 'An AI-powered clothing fit finder integrated with Shopify that helps users find perfectly fitting clothes using computer vision. The system processes a single clear front-facing photo to automatically detect key body points and estimate measurements including waist, hips, arms, and other dimensions. These measurements are seamlessly integrated with Shopify to recommend size-matched clothing items. The application uses advanced computer vision techniques with OpenCV and Mediapipe to analyze body shape without requiring special cameras or equipment. The workflow: user uploads a photo, AI model processes the image to extract measurements, data is sent to Shopify backend, and the platform displays recommended clothing that matches the measurements.',
    image: '/projects/Body-Detection-AI/output.png',
    images: [
      '/projects/Body-Detection-AI/output.png',
      '/projects/Body-Detection-AI/output1.jpg',
      '/projects/Body-Detection-AI/output2.jpg',
      '/projects/Body-Detection-AI/IMG_8446.jpg',
      '/projects/Body-Detection-AI/z-codebase.png'
    ],
    technologies: ['Python', 'OpenCV', 'Mediapipe', 'Computer Vision', 'FastAPI', 'Flutter', 'Shopify API', 'Deep Learning'],
    features: [
      'Photo-based body measurement extraction',
      'AI-powered body point detection',
      'Automatic measurement estimation (waist, hips, arms)',
      'Smart Shopify integration',
      'No special hardware required',
      'Personalized clothing recommendations',
      'Single photo processing',
      'Size-matched clothing suggestions'
    ],
    liveUrl: '',
    githubUrl: '',
    category: 'AI/ML',
    status: 'Completed',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    id: 5,
    title: 'Jobs3 Frontend',
    subtitle: 'Next.js Job Marketplace UI',
    description: '2024: Frontend developer for Jobs3. Implemented wallet integrations, responsive UI, admin panel, and high-fidelity designs from Figma.',
    longDescription: 'In 2024 I worked as a frontend developer on the Jobs3 marketplace (publicly available). You can check my accuracy in the attached image files — these are not screenshots of the live platform but screenshots of Figma, demonstrating precise execution of high‑fidelity UI designs. The project is developed in an agile manner; I contributed to updating the MVP to versions 1.0 and 2.0 with contracts, implementing new designs across client/freelancer and employer/employee flows.',
    image: '/projects/jobs3_frontend/image1-Metamask, Phantom.png',
    images: [
      '/projects/jobs3_frontend/image1-Metamask, Phantom.png',
      '/projects/jobs3_frontend/image2-tokens and transactions.png',
      '/projects/jobs3_frontend/image3-landing page.png',
      '/projects/jobs3_frontend/image4-admin page.png',
      '/projects/jobs3_frontend/image5-responsiveness.png',
      '/projects/jobs3_frontend/image6-UI.png'
    ],
    technologies: [
      'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'Redux Toolkit',
      'wagmi', 'viem', 'Solana Wallet Adapter', 'MetaMask', 'Phantom', 'GSAP',
      'ApexCharts', 'CKEditor', 'TanStack Query'
    ],
    features: [
      'Wallet integration (MetaMask, Phantom)',
      'Token and transaction UI workflows',
      'Visually appealing landing page',
      'User-friendly admin panel',
      'Responsive design (mobile, tablet, desktop)',
      'High-fidelity Figma design implementation'
    ],
    liveUrl: '',
    githubUrl: '',
    category: 'Frontend',
    status: 'Completed',
    gradient: 'from-sky-500 to-indigo-500'
  },
  {
    id: 6,
    title: 'Jobs3 Backend',
    subtitle: 'Node.js Backend for Job Marketplace',
    description: '2024: Backend developer for Jobs3. Designed APIs, integrated Pinecone/OpenAI/LangChain, Telegram alerts, and email notifications.',
    longDescription: 'In 2024 I worked as a backend developer on the Jobs3 marketplace (publicly available). The attached images are screenshots of real code, demonstrating the implemented features. The project is developed in an agile manner; I contributed to updating the MVP to versions 1.0 and 2.0 with contracts, adding new backend features across clients/freelancers and employers/employees.',
    image: '/projects/jobs3_backend/image1 ( api ).png',
    images: [
      '/projects/jobs3_backend/image1 ( api ).png',
      '/projects/jobs3_backend/image2 ( api ).png',
      '/projects/jobs3_backend/image3 ( pinecone, openai, langchain ).png',
      '/projects/jobs3_backend/image4 ( telegram api ).png',
      '/projects/jobs3_backend/image5 ( email alert ) .png'
    ],
    technologies: [
      'Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'AWS S3', 'Pinecone',
      'LangChain', 'OpenAI', 'Nodemailer', 'Telegram Bot API', 'Socket.IO',
      'Cron', 'Multer', 'Sharp'
    ],
    features: [
      'REST API design and implementation',
      'AI search with Pinecone + OpenAI + LangChain',
      'Telegram bot alerts for job postings',
      'Email notification system',
      'Scalable Node.js/Express architecture'
    ],
    liveUrl: '',
    githubUrl: '',
    category: 'Backend',
    status: 'Completed',
    gradient: 'from-amber-500 to-orange-600'
  },
  {
    id: 7,
    title: 'GoTrip - City Jabber',
    subtitle: 'Travel planning platform',
    description: 'City Jabber is a travel planning platform that helps users discover and explore cities around the world. It offers personalized recommendations for attractions, restaurants, and activities based on user preferences and interests.',
    longDescription: 'City Jabber is a travel planning platform that helps users discover and explore cities around the world. It offers personalized recommendations for attractions, restaurants, and activities based on user preferences and interests.',
    image: '/projects/City-Jabber/cityjabber (1).png',
    images: [
      '/projects/City-Jabber/cityjabber (1).png',
      '/projects/City-Jabber/cityjabber (2).png',
      '/projects/City-Jabber/cityjabber (3).png',
      '/projects/City-Jabber/cityjabber (4).png',
      '/projects/City-Jabber/cityjabber (5).png',
      '/projects/City-Jabber/cityjabber (6).png',
    ],
    technologies: [
      'Next.js', 'MongoDB', 'Bootstrap', 'GEO API', 'BigData', 'Search Algorithm', 'React Toolkit'
    ],
    features: [
      'Personalized travel recommendations',
      'City discovery and exploration',
      'Attraction and restaurant discovery',
      'Activity and event recommendations',
      'User profile and preferences management',
      'Social media integration',
      'Search functionality',
      'Filtering and sorting options',
      'Responsive design',
      'SEO optimization',
      'Performance optimization',
      'Security and data protection',
      'Scalability and reliability',
    ],
    liveUrl: '',
    githubUrl: '',
    category: 'FullStack',
    status: 'Completed',
    gradient: 'from-amber-500 to-orange-600'
  },
  {
    id: 8,
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
    githubUrl: 'https://github.com/simoncampos1022/Style-Transfer-Realtime',
    category: 'AI/ML',
    status: 'Live',
    gradient: 'from-rose-500 to-pink-500'
  },
  {
    id: 9,
    title: 'Outlook Account Creator Automation',
    subtitle: 'Web scraper and Automation tool',
    description: 'Created a web scraper and automation tool to create the outlook account automatically with using bypassing captcha and turning proxy.',
    longDescription: 'Created a web scraper and automation tool to create the outlook account automatically with using bypassing captcha and turning proxy.',
    image: '/projects/Outlook-Creator/outlook-creator.png',
    images: [
      '/projects/Outlook-Creator/outlook-creator.png'
    ],
    technologies: ['Puppeteer', 'Node.js', 'JavaScript', 'Proxy', 'Captcha', 'Outlook API'],
    features: [
      'Web scraper and automation tool to create the outlook account automatically with using bypassing captcha and turning proxy.',
      'Bypassing captcha and turning proxy',
      'Creating the outlook account automatically',
    ],
    liveUrl: 'https://drive.google.com/file/d/1JeCRS-JJ2K1p13_XWFFa1BCS1qOrMMdl/view?usp=drive_link',
    githubUrl: 'https://github.com/simoncampos1022/Outlook-auto-creator-puppeteer',
    category: 'FullStack',
    status: 'Completed',
    gradient: 'from-rose-500 to-pink-500'
  },
  {
    id: 10,
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
    githubUrl: 'https://github.com/simoncampos1022/DL-OCR-YOLOandCRNN',
    category: 'AI/ML',
    status: 'Live',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    id: 11,
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
    githubUrl: 'https://github.com/simoncampos1022/Data-Science-Job-Salary-Prediction',
    category: 'AI/ML',
    status: 'Completed',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    id: 12,
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
    githubUrl: 'https://github.com/simoncampos1022/DPR-Dense-Passage-Retrieval',
    category: 'AI/ML',
    status: 'Completed',
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    id: 13,
    title: 'Binance Historical Data Fetcher',
    subtitle: 'Free Candlestick Data Downloader',
    description: 'Python script to fetch free historical Binance Futures candlestick (OHLCV) data for any symbol and interval without API keys. Download years of data (2021–2025) for backtesting and analysis.',
    longDescription: 'A powerful Python script that easily fetches free historical Binance Futures candlestick (OHLCV candle) data. Download years of data (e.g., 2021–2025) for any symbol and interval — all without API keys or paid plans. Works with Binance Futures REST API, supports all timeframes (1m, 5m, 15m, 1h, 4h, 1d), handles full date ranges automatically, and appends & updates CSV files with rate-limit safety and auto sleep.',
    image: '',
    images: [],
    technologies: ['Python', 'Pandas', 'Requests', 'Binance API', 'CSV', 'OHLCV'],
    features: [
      'Free & No API Key Required',
      'Fetch from Binance Futures REST API',
      'Supports Any Symbol (BTCUSDT, ETHUSDT, etc.)',
      'All Timeframes Supported (1m to 1d)',
      'Handles Full Date Ranges Automatically',
      'Appends & Updates CSV Files',
      'Rate-Limit Safe with Auto Sleep',
      'Clean & Readable Data Output'
    ],
    liveUrl: '',
    githubUrl: 'https://github.com/simoncampos1022/binance-free-historical-candlestick-data-ingestion-module',
    category: 'Trading',
    status: 'Live',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    id: 14,
    title: 'Bitget Historical Data Fetcher',
    subtitle: 'Free Futures Candlestick Downloader',
    description: 'Python script to fetch historical candlestick (OHLCV) data from Bitget Futures API for any trading pair and interval — completely free without API keys.',
    longDescription: 'Easily fetch historical candlestick (OHLCV) data from the Bitget Futures API for any trading pair and interval — completely free and without API keys. Uses Bitget API v2 endpoint for reliable data ingestion. The script fetches in reverse (from end date backwards) due to API limitations, with safe rate limiting at 0.2 seconds per request. Data includes open, high, low, close, volume, quote_volume, and timestamp (UTC).',
    image: '',
    images: [],
    technologies: ['Python', 'Pandas', 'Requests', 'Bitget API', 'CSV', 'OHLCV'],
    features: [
      'Free & No API Key Required',
      'Fetch from Bitget Futures API v2',
      'Supports Any Trading Pair',
      'All Intervals Supported (1m to 1D)',
      'Automatic Date Range Handling',
      'CSV Export with Auto-Append',
      'Rate-Limit Safe Implementation',
      'Reverse Fetching for API Optimization'
    ],
    liveUrl: '',
    githubUrl: 'https://github.com/simoncampos1022/bitget-free-historical-candlestick-data-ingestion-module',
    category: 'Trading',
    status: 'Live',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 15,
    title: 'Blofin Historical Data Fetcher',
    subtitle: 'Free Candlestick Data Tool',
    description: 'Python script to fetch free historical candlestick (OHLCV) data from Blofin exchange for any trading pair and interval without authentication.',
    longDescription: 'A Python-based tool to easily fetch free historical candlestick (OHLCV) data from the Blofin exchange API for any trading pair and interval. Supports futures and spot markets without requiring API keys or authentication. Automatically handles pagination, rate limiting, and data formatting into clean CSV files for backtesting, analysis, and machine learning applications.',
    image: '',
    images: [],
    technologies: ['Python', 'Pandas', 'Requests', 'Blofin API', 'CSV', 'OHLCV'],
    features: [
      'Free & No API Key Required',
      'Fetch from Blofin Exchange API',
      'Supports Futures and Spot Markets',
      'All Timeframes Supported',
      'Automatic Pagination Handling',
      'CSV Export with Clean Data',
      'Rate-Limit Safe Operations',
      'Historical Data for Backtesting'
    ],
    liveUrl: '',
    githubUrl: 'https://github.com/simoncampos1022/blofin-free-historical-candlestick-data-ingestion-module',
    category: 'Trading',
    status: 'Live',
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    id: 16,
    title: 'Chart Pattern Detection YOLO',
    subtitle: 'AI-Powered Trading Pattern Recognition',
    description: 'YOLO-based pattern detection system for swing trading that identifies chart patterns (Cup-and-Handle, Double Bottom, Head and Shoulders) and candlestick formations (Marubozu, Morning Star, Doji) in real-time.',
    longDescription: 'Advanced pattern detection system using YOLO (You Only Look Once) model for automated chart pattern recognition in swing trading. The system uses two specialized YOLO models: one for large-scale chart patterns (Cup-and-Handle, Double Bottom, Head and Shoulders) over longer timeframes, and another for candlestick patterns (Marubozu, Morning Star, Doji) for precise entry/exit points. YOLO processes charts in real-time by dividing price charts into grids, predicting bounding boxes around detected patterns with confidence scores, and overlaying visual cues on charts for informed trading decisions.',
    image: '/projects/Chart-Pattern-Detection-YOLO/yolo1.png',
    images: [
      '/projects/Chart-Pattern-Detection-YOLO/yolo1.png',
      '/projects/Chart-Pattern-Detection-YOLO/yolo2.png',
      '/projects/Chart-Pattern-Detection-YOLO/yolo3.png',
      '/projects/Chart-Pattern-Detection-YOLO/yolo4.png'
    ],
    technologies: ['Python', 'YOLO', 'Computer Vision', 'PyTorch', 'OpenCV', 'NumPy', 'Pandas', 'Trading Algorithms'],
    features: [
      'Real-time chart pattern detection',
      'Dual YOLO models for macro and micro patterns',
      'Cup-and-Handle, Double Bottom, Head and Shoulders detection',
      'Candlestick pattern recognition (Marubozu, Morning Star, Doji)',
      'Bounding box prediction with confidence scores',
      'Automated pattern visualization on charts',
      'High-speed processing for swing trading',
      'Trained on extensive historical chart datasets'
    ],
    liveUrl: '',
    githubUrl: '',
    category: 'Trading',
    status: 'Live',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 17,
    title: 'Forex Trading Strategy Backtester',
    subtitle: 'EUR/USD Backtesting Framework',
    description: 'Python-based backtesting framework for forex trading strategies on EUR/USD. Simulates trading cycles with take-profit, stop-loss, and dynamic trigger levels (X1, X2) using historical OHLCV data.',
    longDescription: 'A comprehensive Python backtesting framework designed specifically for forex trading strategies on the EUR/USD currency pair. The system simulates trading cycles based on historical trade entry times and OHLCV data, evaluating both buy and sell trades with configurable pip-based take-profit (TP), stop-loss (SL), and additional trigger levels (X1 and X2) for dynamic trade management. Features flexible timestamp parsing for multiple formats, maximum holding period (5 days default), robust error handling, and generates detailed CSV reports with trade outcomes. The strategy incorporates dynamic TP adjustments: if price moves 10 pips against position (X1 trigger), a new position is simulated with TP reset to entry price; if price moves 25 pips total (X2 trigger), another position is simulated with TP set to X1 trigger price.',
    image: '',
    images: [],
    technologies: ['Python', 'Pandas', 'Pytz', 'CSV', 'OHLCV', 'Forex Trading', 'Backtesting'],
    features: [
      'Flexible timestamp parsing (M/D/Y or D/M/Y formats)',
      'Trade simulation with configurable pip-based TP/SL',
      'Dynamic trade management with X1 and X2 trigger levels',
      'Maximum holding period (5 days default)',
      'Robust error handling and logging',
      'CSV output with detailed trade performance metrics',
      'Supports both buy and sell trades',
      'EUR/USD 1-minute interval backtesting'
    ],
    liveUrl: '',
    githubUrl: 'https://github.com/simoncampos1022/Forex-Trading-Strategy-Backtester',
    category: 'Trading',
    status: 'Live',
    gradient: 'from-red-500 to-orange-500'
  },
  {
    id: 18,
    title: 'Crypto Sentiment Data Ingestion',
    subtitle: 'AI Trading Sentiment Collector',
    description: 'Asynchronous Python system to collect, analyze, and store crypto sentiment data from CryptoPanic, Reddit, CoinMarketCap, and Twitter. Uses FinBERT for financial sentiment analysis with real-time updates every 15 minutes.',
    longDescription: 'A modular, asynchronous Python application designed to aggregate real-time sentiment data from various crypto news and social media platforms for AI trading systems. The system fetches posts, tweets, and news articles from CryptoPanic, Reddit, CoinMarketCap, Twitter, and RSS feeds, processes them through FinBERT (a state-of-the-art financial sentiment analysis model), and stores results in JSON and Parquet formats. Features asynchronous data fetching for efficient concurrent API calls, duplicate detection to avoid redundancy, configurable tracked currencies and accounts, atomic JSON saving with up to 5000 records, scheduled runs every 15 minutes aligned to quarter hours, and robust error handling with comprehensive logging for production readiness.',
    image: '',
    images: [],
    technologies: ['Python', 'FinBERT', 'Transformers', 'PyTorch', 'Pandas', 'Asyncio', 'Tweepy', 'Aiohttp', 'Parquet', 'Reddit API', 'Twitter API'],
    features: [
      'Asynchronous data fetching from multiple sources',
      'Multi-source support (CryptoPanic, Reddit, CMC, Twitter, RSS)',
      'FinBERT financial sentiment analysis',
      'Data persistence with JSON and Parquet exports',
      'Duplicate detection and deduplication',
      'Configurable tracked currencies and accounts',
      'Scheduled runs every 15 minutes',
      'Robust error handling and logging'
    ],
    liveUrl: '',
    githubUrl: '',
    category: 'Trading',
    status: 'Live',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    id: 19,
    title: 'TimeMixer++ Price Forecasting',
    subtitle: 'Short-Term Market Prediction Model',
    description: 'State-of-the-art time series forecasting model for accurate short-term price prediction in financial markets. Leverages multi-scale and multi-resolution approach to capture complex temporal patterns across stocks, ETFs, forex, and crypto.',
    longDescription: 'TimeMixer++ is a cutting-edge time series pattern machine (TSPM) designed for high-accuracy short-term price forecasting in financial markets. The model employs four key components: Multi-Resolution Time Imaging (MRTI) to transform time series data into multi-resolution time images capturing patterns in temporal and frequency domains; Time Image Decomposition (TID) using dual-axis attention to disentangle seasonal and trend patterns; Multi-Scale Mixing (MCM) to hierarchically aggregate patterns across different temporal scales from microscopic to macroscopic information; and Multi-Resolution Mixing (MRM) to adaptively integrate representations across different resolutions. These components enable TimeMixer++ to capture fine-scale market reactions and achieve state-of-the-art performance, outperforming traditional models like ARCH, GARCH, LSTM, and GRU in handling the non-linear dynamics of financial time series.',
    image: '/projects/Timeseries-Forecasting-TimeMixerPlus/timemixer1.png',
    images: [
      '/projects/Timeseries-Forecasting-TimeMixerPlus/timemixer1.png',
      '/projects/Timeseries-Forecasting-TimeMixerPlus/timemixer2.png',
      '/projects/Timeseries-Forecasting-TimeMixerPlus/timemixer3.png'
    ],
    technologies: ['Python', 'PyTorch', 'Time Series Forecasting', 'Deep Learning', 'Transformers', 'Multi-Scale Analysis', 'Financial ML'],
    features: [
      'Multi-Resolution Time Imaging (MRTI)',
      'Time Image Decomposition (TID) with dual-axis attention',
      'Multi-Scale Mixing (MCM) for hierarchical aggregation',
      'Multi-Resolution Mixing (MRM) for adaptive integration',
      'Short-term price prediction for stocks, ETFs, forex, crypto',
      'Captures fine-scale market reactions',
      'Disentangles seasonal and trend patterns',
      'State-of-the-art forecasting performance'
    ],
    liveUrl: '',
    githubUrl: '',
    category: 'Trading',
    status: 'Live',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    id: 20,
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
    category: 'AI/ML',
    status: 'Completed',
    gradient: 'from-indigo-500 to-purple-500'
  },
]

const categories = ['All', 'AI/ML', 'Frontend', 'Backend', 'FullStack', 'Trading']

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const mapCategory = (category: string): 'AI/ML' | 'Frontend' | 'Backend' | 'FullStack' | 'Trading' => {
    const c = category.toLowerCase()
    if (c === 'full-stack' || c === 'full stack') return 'FullStack'
    if (c === 'frontend') return 'Frontend'
    if (c === 'backend') return 'Backend'
    if (c === 'trading') return 'Trading'
    if (['ai/ml', 'mobile ai', 'nlp/llm', 'computer vision', 'data science'].includes(c)) return 'AI/ML'
    return 'AI/ML'
  }

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => mapCategory(project.category) === selectedCategory)

  const handleProjectSelect = (project: typeof projects[0]) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
  }

  return (
    <section id="projects" className="section-padding night-sky-content">
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
            className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-2"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base rounded-full font-medium transition-all duration-300 ${
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
                <div className="bg-white dark:bg-gray-800 rounded-xl overflow-visible shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col relative">
                  {/* Star Image - positioned relative to card */}
                  <div className="absolute -top-3 -left-3 z-50 rotate-45">
                    <Image
                      src="/projects/star.png"
                      alt="Star"
                      width={32}
                      height={32}
                      className="h-8 w-8"
                    />
                  </div>
                  {/* Project Image */}
                  <div className="h-48 relative overflow-hidden flex-shrink-0 rounded-t-xl">
                    {project.image ? (
                      <>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                      </>
                    ) : (
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} flex items-center justify-center p-6`}>
                        <h3 className="text-white text-2xl font-bold text-center leading-tight">
                          {project.title}
                        </h3>
                      </div>
                    )}
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Live' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-yellow-500 text-white'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
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
                      {project.technologies.slice(0, 6).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 6 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md">
                          +{project.technologies.length - 6} more
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      {
                        project.liveUrl && (
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
                        )
                      }
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
                className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto mx-2 sm:mx-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-4 sm:mb-6 gap-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 break-words">
                        {selectedProject.title}
                      </h3>
                      <p className="text-sm sm:text-base text-primary-600 dark:text-primary-400 font-medium break-words">
                        {selectedProject.subtitle}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 flex-shrink-0 ml-2"
                      aria-label="Close modal"
                    >
                      <X className="h-5 w-5 sm:h-6 sm:w-6" />
                    </button>
                  </div>

                    <div className="space-y-4 sm:space-y-6">
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
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

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      {selectedProject.liveUrl && (
                        <motion.a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center justify-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200 font-medium text-sm sm:text-base"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>View Live</span>
                        </motion.a>
                      )}
                      {selectedProject.githubUrl && (
                        <motion.a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center justify-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 font-medium text-sm sm:text-base"
                        >
                          <Github className="h-4 w-4" />
                          <span>View Code</span>
                        </motion.a>
                      )}
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

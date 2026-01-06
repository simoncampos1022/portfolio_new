export interface Project {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  images: string[]
  technologies: string[]
  features: string[]
  liveUrl: string
  githubUrl: string
  category: string
  gradient: string
}

export const projects: Project[] = [
  // Project 1: FxUtopia - Forex & Crypto Trading Hub API - Images: /public/projects/FxUtopia/ (NO IMAGES YET)
  {
    id: 1,
    title: 'FxUtopia - Forex & Crypto Trading Hub API',
    subtitle: 'FastAPI Backend for Trading Community Platform',
    description: 'A comprehensive FastAPI backend for a Forex & Crypto trading community platform featuring authentication, community forums, educational content, marketplace, reviews, signals, and economic calendar.',
    image: '/projects/FxUtopia/6.png',
    images: [
      '/projects/FxUtopia/1.png',
      '/projects/FxUtopia/2.png',
      '/projects/FxUtopia/3.png',
      '/projects/FxUtopia/4.png',
      '/projects/FxUtopia/5.png',
      '/projects/FxUtopia/6.png',
    ],
    technologies: [
      'FastAPI', 'PostgreSQL', 'Redis', 'SQLAlchemy', 'Alembic', 'Celery',
      'JWT', 'Pydantic', 'Docker', 'WebSocket', 'Python', 'Pytest',
      'OAuth2', 'Email Verification', '2FA', 'Rate Limiting', 'CORS',
      'File Upload', 'Background Tasks', 'Full-text Search', 'REST API'
    ],
    features: [
      'JWT-based authentication with refresh tokens and social login',
      'Community forums with threaded comments and reactions',
      'Educational content system with courses and progress tracking',
      'Marketplace for trading tools (EAs, bots, indicators)',
      'Trading signals with subscription management and leaderboards',
      'Real-time messaging via WebSocket',
      'Redis caching and Celery background task processing',
      'Full-text search across posts and articles'
    ],
    liveUrl: 'https://www.fxutopia.com/',
    githubUrl: '',
    category: 'Backend',
    gradient: 'from-emerald-600 to-green-600'
  },
  // Project 2: Jifunze - High-Performance E-Learning Platform - Images: /public/projects/Jifunze/ (NO IMAGES YET)
  {
    id: 2,
    title: 'Jifunze - High-Performance E-Learning Platform',
    subtitle: 'Django E-Learning Platform with Real-time Communication',
    description: 'A high-performance, scalable e-learning platform built with Django featuring real-time WebSocket communication, Redis caching, and AI-ready architecture designed to handle thousands of concurrent users.',
    image: '/projects/Jifunze/1.png',
    images: [
      '/projects/Jifunze/1.png',
    ],
    technologies: [
      'Django', 'Python', 'PostgreSQL', 'Redis', 'Docker', 'Docker Compose',
      'WebSocket', 'Django Channels', 'Nginx', 'uWSGI', 'Daphne', 'ASGI',
      'REST API', 'Django REST Framework', 'Celery', 'SSL/TLS', 'CSRF',
      'Connection Pooling', 'Load Balancing', 'Caching', 'Real-time Communication'
    ],
    features: [
      'Asynchronous WebSocket communication with Django Channels',
      'Redis caching layer with 15-minute cache middleware',
      'PostgreSQL database with connection pooling and query optimization',
      'Nginx reverse proxy with SSL termination and load balancing',
      'Containerized deployment with Docker Compose',
      'Multi-format content support (text, video, image, files)',
      'Real-time course chat rooms with persistent messaging',
      'Performance optimizations for 1000+ concurrent users'
    ],
    liveUrl: '',
    githubUrl: 'https://github.com/simoncampos1022/EduPlatform-Django',
    category: 'Backend',
    gradient: 'from-blue-600 to-indigo-600'
  },
  // Project 3: YouTube Analytics ETL Pipeline - Images: /public/projects/YouTube-Analytics-ETL-Pipeline/ (NO IMAGES YET)
  {
    id: 3,
    title: 'YouTube Analytics ETL Pipeline',
    subtitle: 'Automated ETL Pipeline with Sentiment Analysis & Power BI Visualization',
    description: 'Developed an ETL pipeline for YouTube channel analytics using YouTube API, sentiment analysis with Hugging Face RoBERTa model, and MySQL for data storage. Automated workflows with Apache Airflow and Docker on AWS.',
    image: '/projects/YouTube-Analytics-ETL-Pipeline/0.png',
    images: [
      '/projects/YouTube-Analytics-ETL-Pipeline/0.png',
      '/projects/YouTube-Analytics-ETL-Pipeline/1.png',
      '/projects/YouTube-Analytics-ETL-Pipeline/2.png',
      '/projects/YouTube-Analytics-ETL-Pipeline/3.png',
      '/projects/YouTube-Analytics-ETL-Pipeline/4.png',
    ],
    technologies: [
      'Python', 'Pandas', 'MySQL', 'Apache Airflow', 'Docker', 'AWS EC2',
      'AWS RDS', 'YouTube Data API', 'Hugging Face', 'RoBERTa', 'Gradio',
      'Power BI', 'ETL Pipeline', 'Sentiment Analysis', 'Data Engineering',
      'SSH Tunneling', 'Jupyter Notebook', 'REST API', 'Data Visualization'
    ],
    features: [
      'Automated ETL pipeline with Apache Airflow orchestration',
      'YouTube Data API integration for multi-channel analytics',
      'Sentiment analysis using RoBERTa model (125M parameters)',
      'Hugging Face Spaces deployment with Gradio API',
      'MySQL database on AWS RDS for persistent data storage',
      'Docker containerization for scalable deployment',
      'Interactive Power BI dashboards with real-time data',
      'Comparative channel performance analysis'
    ],
    liveUrl: '',
    githubUrl: 'https://github.com/simoncampos1022/youtube-analytics-etl-pipeline',
    category: 'Backend',
    gradient: 'from-red-600 to-pink-600'
  },
  // Project 4: Imaginify - Images: /public/projects/Imaginify/
  {
    id: 4,
    title: 'Imaginify',
    subtitle: 'AI-Powered Image Transformation Platform',
    description: 'A cutting-edge AI-powered SaaS platform that transforms images using advanced machine learning algorithms. Built with modern web technologies, it provides users with powerful image editing capabilities through an intuitive and beautiful interface.',
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
    gradient: 'from-purple-500 to-pink-500'
  },
  // Project 5: Plante AI - Images: /public/projects/Plante AI/
  {
    id: 5,
    title: 'Plante AI',
    subtitle: 'Smart Meal Analysis App',
    description: 'An innovative Flutter application that revolutionizes how we understand and improve our eating habits through advanced AI-powered meal analysis. Simply take a photo of your meal, and our intelligent system will provide comprehensive insights.',
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
    category: 'full-stack',
    gradient: 'from-green-500 to-teal-500'
  },
  // Project 6: Dream Market Landing - Images: /public/projects/Dream-Market-Landing/
  {
    id: 6,
    title: 'Dream Market Landing',
    subtitle: 'Modern Trading Platform',
    description: 'Dream Market is a cutting-edge platform that enables users to trade on the outcome of future events using advanced algorithms and real-time data analysis.',
    image: '/projects/Dream-Market-Landing/0.png',
    images: [
      '/projects/Dream-Market-Landing/0.png',
      '/projects/Dream-Market-Landing/1.png',
      '/projects/Dream-Market-Landing/2.png',
      '/projects/Dream-Market-Landing/3.png',
      '/projects/Dream-Market-Landing/4.png',
      '/projects/Dream-Market-Landing/5.png',
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
    gradient: 'from-blue-500 to-cyan-500'
  },
  // Project 7: AI Body Detection & Measurement - Images: /public/projects/Body-Detection-AI/
  {
    id: 7,
    title: 'AI Body Detection & Measurement',
    subtitle: 'Shopify Clothing Fit Finder',
    description: 'Computer vision system that extracts precise body measurements from a single front-facing photo to recommend well-fitting clothes on Shopify. Uses AI to analyze body shape and provide personalized clothing recommendations.',
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
    gradient: 'from-pink-500 to-rose-500'
  },
  // Project 8: Jobs3 Frontend - Images: /public/projects/jobs3_frontend/
  {
    id: 8,
    title: 'Jobs3 Frontend',
    subtitle: 'Next.js Job Marketplace UI',
    description: '2024: Frontend developer for Jobs3. Implemented wallet integrations, responsive UI, admin panel, and high-fidelity designs from Figma.',
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
    gradient: 'from-sky-500 to-indigo-500'
  },
  // Project 9: Jobs3 Backend - Images: /public/projects/jobs3_backend/
  {
    id: 9,
    title: 'Jobs3 Backend',
    subtitle: 'Node.js Backend for Job Marketplace',
    description: '2024: Backend developer for Jobs3. Designed APIs, integrated Pinecone/OpenAI/LangChain, Telegram alerts, and email notifications.',
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
    gradient: 'from-amber-500 to-orange-600'
  },
  // Project 10: GoTrip - City Jabber - Images: /public/projects/City-Jabber/
  {
    id: 10,
    title: 'GoTrip - City Jabber',
    subtitle: 'Travel planning platform',
    description: 'City Jabber is a travel planning platform that helps users discover and explore cities around the world. It offers personalized recommendations for attractions, restaurants, and activities based on user preferences and interests.',
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
      'Search functionality',
      'Filtering and sorting options',
      'Responsive design'
    ],
    liveUrl: '',
    githubUrl: '',
    category: 'full-stack',
    gradient: 'from-amber-500 to-orange-600'
  },
  // Project 11: Real-time Neural Style Transfer - Images: /public/projects/Real-time Neural Style Transfer/
  {
    id: 11,
    title: 'Real-time Neural Style Transfer',
    subtitle: 'Artistic Image Transformation',
    description: 'A real-time neural style transfer application using feed-forward networks and OpenCV, deployed with Streamlit for instant artistic transformation on video feeds.',
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
    gradient: 'from-rose-500 to-pink-500'
  },
  // Project 12: Outlook Account Creator Automation - Images: /public/projects/Outlook-Creator/
  {
    id: 12,
    title: 'Outlook Account Creator Automation',
    subtitle: 'Web scraper and Automation tool',
    description: 'Created a web scraper and automation tool to create the outlook account automatically with using bypassing captcha and turning proxy.',
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
    category: 'full-stack',
    gradient: 'from-rose-500 to-pink-500'
  },
  // Project 13: Scene Text Recognition System - Images: /public/projects/Scene Text Recognition/
  {
    id: 13,
    title: 'Scene Text Recognition System',
    subtitle: 'OCR with YOLOv11m and CRNN',
    description: 'A scalable OCR system using YOLOv11m and CRNN with CTC loss, deployed via FastAPI + Ray Serve, supporting real-time OCR with GPU acceleration and an interactive Streamlit UI.',
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
    gradient: 'from-cyan-500 to-blue-500'
  },
  // Project 14: Data Science Salary Prediction - Images: /public/projects/Data Science Salary Prediction/
  {
    id: 14,
    title: 'Data Science Salary Prediction',
    subtitle: 'Glassdoor 2024 Analysis with ML & LLMs',
    description: 'This project predicts data science job salaries using 2024 Glassdoor data with both traditional machine learning and large language models (LLMs). It offers a comparison of predictive methods for salary estimation.',
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
    gradient: 'from-orange-500 to-red-500'
  },
  // Project 15: Dense Passage Retrieval - Images: /public/projects/Dense Passage Retrieval/
  {
    id: 15,
    title: 'Dense Passage Retrieval',
    subtitle: 'Open-Domain Question Answering',
    description: 'PyTorch reimplementation of the paper "Dense Passage Retrieval for Open-Domain Question Answering" with modular design, low GPU optimization (T4), and accuracy improvements over the original paper.',
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
    gradient: 'from-violet-500 to-purple-500'
  },
  // Project 16: Binance Historical Data Fetcher - Images: /public/projects/Binance-Historical-Data-Fetcher/ (NO IMAGES YET)
  {
    id: 16,
    title: 'Binance Historical Data Fetcher',
    subtitle: 'Free Candlestick Data Downloader',
    description: 'Python script to fetch free historical Binance Futures candlestick (OHLCV) data for any symbol and interval without API keys. Download years of data (2021–2025) for backtesting and analysis.',
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
    gradient: 'from-orange-500 to-blue-500'
  },
  // Project 17: Bitget Historical Data Fetcher - Images: /public/projects/Bitget-Historical-Data-Fetcher/ (NO IMAGES YET)
  {
    id: 17,
    title: 'Bitget Historical Data Fetcher',
    subtitle: 'Free Futures Candlestick Downloader',
    description: 'Python script to fetch historical candlestick (OHLCV) data from Bitget Futures API for any trading pair and interval — completely free without API keys.',
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
    gradient: 'from-blue-500 to-cyan-500'
  },
  // Project 18: Blofin Historical Data Fetcher - Images: /public/projects/Blofin-Historical-Data-Fetcher/ (NO IMAGES YET)
  {
    id: 18,
    title: 'Blofin Historical Data Fetcher',
    subtitle: 'Free Candlestick Data Tool',
    description: 'Python script to fetch free historical candlestick (OHLCV) data from Blofin exchange for any trading pair and interval without authentication.',
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
    gradient: 'from-green-500 to-purple-500'
  },
  // Project 19: Chart Pattern Detection YOLO - Images: /public/projects/Chart-Pattern-Detection-YOLO/
  {
    id: 19,
    title: 'Chart Pattern Detection YOLO',
    subtitle: 'AI-Powered Trading Pattern Recognition',
    description: 'YOLO-based pattern detection system for swing trading that identifies chart patterns (Cup-and-Handle, Double Bottom, Head and Shoulders) and candlestick formations (Marubozu, Morning Star, Doji) in real-time.',
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
    gradient: 'from-purple-500 to-pink-500'
  },
  // Project 20: Forex Trading Strategy Backtester - Images: /public/projects/Forex-Trading-Strategy-Backtester/ (NO IMAGES YET)
  {
    id: 20,
    title: 'Forex Trading Strategy Backtester',
    subtitle: 'EUR/USD Backtesting Framework',
    description: 'Python-based backtesting framework for forex trading strategies on EUR/USD. Simulates trading cycles with take-profit, stop-loss, and dynamic trigger levels (X1, X2) using historical OHLCV data.',
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
    gradient: 'from-red-500 to-orange-500'
  },
  // Project 21: Crypto Sentiment Data Ingestion - Images: /public/projects/Crypto-Sentiment-Data-Ingestion/ (NO IMAGES YET)
  {
    id: 21,
    title: 'Crypto Sentiment Data Ingestion',
    subtitle: 'AI Trading Sentiment Collector',
    description: 'Asynchronous Python system to collect, analyze, and store crypto sentiment data from CryptoPanic, Reddit, CoinMarketCap, and Twitter. Uses FinBERT for financial sentiment analysis with real-time updates every 15 minutes.',
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
    gradient: 'from-orange-500 to-purple-500'
  },
  // Project 22: TimeMixer++ Price Forecasting - Images: /public/projects/Timeseries-Forecasting-TimeMixerPlus/
  {
    id: 22,
    title: 'TimeMixer++ Price Forecasting',
    subtitle: 'Short-Term Market Prediction Model',
    description: 'State-of-the-art time series forecasting model for accurate short-term price prediction in financial markets. Leverages multi-scale and multi-resolution approach to capture complex temporal patterns across stocks, ETFs, forex, and crypto.',
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
    gradient: 'from-cyan-500 to-blue-500'
  },
  // Project 23: Multimodal Agentic RAG System - Images: /public/projects/Multimodal Agentic RAG/
  {
    id: 23,
    title: 'Multimodal Agentic RAG System',
    subtitle: 'PDF Document Analysis with AI Agents',
    description: 'An Agentic RAG system that enhances traditional RAG by enabling multimodal PDF analysis. It processes not only text but also images, tables, and combined queries that mix visual and textual information.',
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
    gradient: 'from-indigo-500 to-purple-500'
  },
  // Project 24: Retail Store Sample App - GitOps with Amazon EKS Auto Mode - Images: /public/projects/Retail-Store-Sample-App-GitOps/ (NO IMAGES YET)
  {
    id: 24,
    title: 'Retail Store Sample App - GitOps with Amazon EKS Auto Mode',
    subtitle: 'AWS Containers Retail Sample - GitOps Edition',
    description: 'Modern microservices architecture deployed on AWS EKS using GitOps principles with automated CI/CD pipeline. Features 5 microservices (UI, Catalog, Cart, Orders, Checkout) with full production workflow.',
    image: '/projects/Retail-Store-Sample-App-GitOps/0.png',
    images: [
      '/projects/Retail-Store-Sample-App-GitOps/0.png',
      '/projects/Retail-Store-Sample-App-GitOps/1.gif',
      '/projects/Retail-Store-Sample-App-GitOps/2.png',
      '/projects/Retail-Store-Sample-App-GitOps/3.png',
      '/projects/Retail-Store-Sample-App-GitOps/4.png',
    ],
    technologies: [
      'AWS EKS', 'Terraform', 'Kubernetes', 'ArgoCD', 'Helm', 'Docker', 
      'GitHub Actions', 'ECR', 'Java', 'Spring Boot', 'Go', 'Node.js', 
      'NestJS', 'NGINX Ingress', 'Cert Manager', 'GitOps', 'CI/CD', 
      'Microservices', 'VPC', 'IAM', 'CloudWatch'
    ],
    features: [
      'GitOps workflow with ArgoCD for automated deployments',
      '5 microservices architecture (UI, Catalog, Cart, Orders, Checkout)',
      'Automated CI/CD pipeline with GitHub Actions',
      'Private ECR registry with commit hash tagging',
      'Terraform infrastructure as code',
      'EKS Auto Mode cluster with managed node groups',
      'NGINX Ingress Controller for load balancing',
      'Helm charts for application deployment'
    ],
    liveUrl: '',
    githubUrl: '',
    category: 'DevOps',
    gradient: 'from-blue-600 to-indigo-600'
  },
  // Project 25: Serverless Todo App - DevOps AWS Project - Images: /public/projects/Serverless-Todo-App-DevOps/ (NO IMAGES YET)
  {
    id: 25,
    title: 'Serverless Todo App - DevOps AWS Project',
    subtitle: 'Enterprise-Grade Serverless Architecture with CI/CD',
    description: 'A comprehensive DevOps implementation showcasing modern serverless architecture, automated CI/CD pipelines, and Infrastructure as Code (IaC) practices for a todo application on AWS.',
    image: '',
    images: [],
    technologies: [
      'AWS Lambda', 'API Gateway', 'DynamoDB', 'Terraform', 'GitHub Actions', 
      'CloudFront', 'S3', 'React', 'Next.js', 'Node.js', 'IAM', 'CloudWatch',
      'Infrastructure as Code', 'CI/CD', 'Serverless', 'GitOps', 'Docker',
      'AWS CLI', 'ES Modules', 'CORS', 'SSL/TLS'
    ],
    features: [
      '100% serverless architecture with AWS Lambda and API Gateway',
      'Infrastructure as Code with Terraform modules',
      'Automated CI/CD pipelines with GitHub Actions',
      'Multi-environment support (dev/staging/production)',
      'React SPA frontend with CloudFront CDN distribution',
      'DynamoDB NoSQL database with pay-per-request billing',
      'Security-first design with IAM roles and least privilege',
      'CloudWatch monitoring and alerting integration'
    ],
    liveUrl: '',
    githubUrl: '',
    category: 'DevOps',
    gradient: 'from-blue-600 to-green-600'
  },
  
]


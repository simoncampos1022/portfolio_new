# Portfolio Website - Simon Degala Campos

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)
![React](https://img.shields.io/badge/React-18.3-61dafb?style=for-the-badge&logo=react)

**A modern, high-performance portfolio website showcasing expertise in AI backend development, full-stack solutions, and software engineering.**

[Live Demo](#) • [Documentation](#documentation) • [Report Bug](#issues) • [Request Feature](#issues)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)
- [Performance](#performance)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🎯 Overview

This portfolio website is a comprehensive showcase of professional experience, technical skills, and project portfolio. Built with modern web technologies, it features a responsive design, smooth animations, and optimized performance for an exceptional user experience across all devices.

### Key Highlights

- **Modern Architecture**: Built with Next.js 15 App Router for optimal performance
- **Type-Safe**: Full TypeScript implementation for robust code quality
- **Responsive Design**: Mobile-first approach with seamless cross-device compatibility
- **SEO Optimized**: Server-side rendering and meta tag optimization
- **Accessible**: WCAG 2.1 compliant with semantic HTML and ARIA labels
- **Dark Mode**: System-aware theme switching with persistent user preferences

---

## ✨ Features

### Core Features

- **🎨 Modern UI/UX**
  - Clean, professional design with gradient accents
  - Smooth page transitions and micro-interactions
  - Interactive hover effects and animations
  - Custom night sky background with animated stars

- **📱 Fully Responsive**
  - Mobile-first responsive design
  - Optimized layouts for tablets and desktops
  - Touch-friendly navigation and interactions
  - Adaptive typography and spacing

- **🌓 Theme Support**
  - Light and dark mode toggle
  - System preference detection
  - Persistent theme selection
  - Smooth theme transitions

- **⚡ Performance Optimized**
  - Server-side rendering (SSR)
  - Image optimization with Next.js Image component
  - Code splitting and lazy loading
  - Optimized bundle size

- **🔍 SEO Friendly**
  - Semantic HTML structure
  - Meta tags and Open Graph support
  - Structured data markup
  - Sitemap and robots.txt ready

### Section Features

- **Hero Section**: Compelling introduction with call-to-action buttons
- **About Section**: Professional background and key achievements
- **Skills Section**: Interactive skill categories with technology icons
- **Projects Section**: 
  - Filterable project gallery by category
  - Detailed project modals with image galleries
  - Live demo and GitHub links
  - Technology stack badges
- **Experience Section**: Timeline view of professional work history
- **Education Section**: Academic background and achievements
- **Contact Section**: Contact form and social media links

---

## 🛠️ Tech Stack

### Frontend Framework & Libraries

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 15.5.3 | React framework with App Router |
| **React** | 18.3.1 | UI library |
| **TypeScript** | 5.7.2 | Type-safe JavaScript |
| **Tailwind CSS** | 3.4.15 | Utility-first CSS framework |
| **Framer Motion** | 11.18.2 | Animation library |
| **next-themes** | 0.4.6 | Theme management |

### Icons & UI Components

- **Lucide React**: Modern icon library
- **React Simple Icons**: Technology brand icons
- **Custom Components**: Reusable UI components

### Development Tools

- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing
- **TypeScript**: Static type checking

---

## 📁 Project Structure

```
portfolio_new/
├── public/                          # Static assets
│   ├── background/                  # Background images
│   ├── education/                   # Education-related images
│   ├── experience/                  # Company logos
│   ├── photo/                       # Profile photos
│   ├── projects/                    # Project screenshots
│   └── resume/                      # Resume PDF
│
├── src/
│   ├── app/                         # Next.js App Router
│   │   ├── globals.css             # Global styles
│   │   ├── layout.tsx              # Root layout
│   │   └── page.tsx                # Home page
│   │
│   ├── components/                  # React components
│   │   ├── about.tsx               # About section
│   │   ├── contact.tsx             # Contact form
│   │   ├── education.tsx           # Education section
│   │   ├── experience.tsx          # Work experience
│   │   ├── footer.tsx              # Footer component
│   │   ├── hero.tsx                # Hero section
│   │   ├── navbar.tsx              # Navigation bar
│   │   ├── night-sky.tsx           # Animated background
│   │   ├── projects.tsx            # Projects showcase
│   │   ├── section-divider.tsx     # Section separators
│   │   ├── skills.tsx              # Skills section
│   │   ├── progress-sidebar.tsx    # Scroll progress
│   │   └── theme-provider.tsx      # Theme context
│   │
│   └── lib/                         # Utility functions
│       └── utils.ts                # Helper functions
│
├── next.config.js                   # Next.js configuration
├── tailwind.config.js               # Tailwind CSS configuration
├── tsconfig.json                    # TypeScript configuration
├── postcss.config.js                # PostCSS configuration
└── package.json                     # Dependencies and scripts
```

### Component Architecture

- **Layout Components**: `layout.tsx`, `navbar.tsx`, `footer.tsx`
- **Section Components**: `hero.tsx`, `about.tsx`, `skills.tsx`, `projects.tsx`, etc.
- **UI Components**: `section-divider.tsx`, `progress-sidebar.tsx`
- **Provider Components**: `theme-provider.tsx`, `night-sky.tsx`

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: 18.x or higher
- **npm**: 9.x or higher (or yarn/pnpm)
- **Git**: For version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/simoncampos1022/portfolio_new.git
   cd portfolio_new
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

---

## 💻 Development

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Create optimized production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint to check code quality |

### Development Guidelines

1. **Code Style**
   - Follow TypeScript best practices
   - Use functional components with hooks
   - Maintain consistent naming conventions
   - Write self-documenting code

2. **Component Structure**
   - Keep components focused and reusable
   - Extract logic into custom hooks when needed
   - Use TypeScript interfaces for props
   - Implement proper error boundaries

3. **Styling**
   - Use Tailwind CSS utility classes
   - Follow mobile-first approach
   - Maintain consistent spacing and typography
   - Use CSS variables for theme colors

4. **Performance**
   - Optimize images before adding to public folder
   - Use Next.js Image component for images
   - Implement code splitting for large components
   - Lazy load components below the fold

---

## 🚢 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Deploy**
   - Click "Deploy"
   - Your site will be live in minutes

### Other Platforms

#### Netlify
```bash
# Build command
npm run build

# Publish directory
.next
```

#### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## ⚡ Performance

### Optimization Features

- **Image Optimization**: Next.js Image component with automatic format conversion
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Components and images load on demand
- **Font Optimization**: Self-hosted fonts with display swap
- **Bundle Analysis**: Use `@next/bundle-analyzer` for bundle size analysis

### Performance Metrics

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1

### Monitoring

Consider integrating:
- **Vercel Analytics**: Built-in performance monitoring
- **Google Analytics**: User behavior tracking
- **Sentry**: Error tracking and monitoring

---

## 🎨 Customization

### Personal Information

Update the following files with your information:

1. **Hero Section** (`src/components/hero.tsx`)
   - Name, title, description
   - Profile photo path
   - CTA button links

2. **About Section** (`src/components/about.tsx`)
   - Personal story
   - Statistics
   - Key highlights

3. **Skills** (`src/components/skills.tsx`)
   - Skill categories
   - Technologies and tools

4. **Projects** (`src/components/projects.tsx`)
   - Project data array
   - Images and descriptions
   - Links and technologies

5. **Experience** (`src/components/experience.tsx`)
   - Work history
   - Company information
   - Achievements

6. **Education** (`src/components/education.tsx`)
   - Academic background
   - Projects and achievements

7. **Contact** (`src/components/contact.tsx`)
   - Contact information
   - Social media links

### Styling

1. **Colors** (`tailwind.config.js`)
   ```javascript
   colors: {
     primary: { /* your primary color */ },
     secondary: { /* your secondary color */ }
   }
   ```

2. **Fonts** (`src/app/layout.tsx`)
   - Update Google Fonts imports
   - Modify font variables

3. **Global Styles** (`src/app/globals.css`)
   - Custom CSS variables
   - Global utility classes

### Adding New Sections

1. Create component in `src/components/`
2. Import and add to `src/app/page.tsx`
3. Add navigation link in `src/components/navbar.tsx`
4. Update section IDs for smooth scrolling

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
   - Follow code style guidelines
   - Write meaningful commit messages
   - Test your changes thoroughly
4. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Contribution Guidelines

- Write clear commit messages
- Update documentation as needed
- Add tests for new features
- Ensure all checks pass
- Be respectful and professional

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### What you can do:

- ✅ Use commercially
- ✅ Modify
- ✅ Distribute
- ✅ Private use

### What you cannot do:

- ❌ Hold liable
- ❌ Use trademark

---

## 📞 Contact

**Simon Degala Campos** - Senior Software Engineer | Backend & Python Expert

- 📧 **Email**: [simon.campos1022@gmail.com](mailto:simon.campos1022@gmail.com)
- 💼 **LinkedIn**: [Simon Degala Campos](https://www.linkedin.com/in/simon-degala-campos-08965238a)
- 💻 **GitHub**: [@simoncampos1022](https://github.com/simoncampos1022)
- 📱 **Telegram**: [@simoncampos1022](https://t.me/simoncampos1022)
- 📱 **WhatsApp**: [+639634160157](https://wa.me/639634160157)
- 🌐 **Discord**: [simoncampos1022](https://discord.com/users/591375710971625598)

### Project Links

- 🌐 **Live Website**: [Portfolio](https://your-portfolio-url.com)
- 📖 **Documentation**: [Wiki](https://github.com/simoncampos1022/portfolio_new/wiki)
- 🐛 **Issue Tracker**: [Issues](https://github.com/simoncampos1022/portfolio_new/issues)

---

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing framework
- **Vercel** - For hosting and deployment platform
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For smooth animations
- **Lucide** - For beautiful icons

---

<div align="center">

**Built with ❤️ by [Simon Degala Campos](https://github.com/simoncampos1022)**

⭐ Star this repo if you find it helpful!

[⬆ Back to Top](#portfolio-website---simon-degala-campos)

</div>

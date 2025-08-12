# Fernando Torres - Personal Website

A modern personal website built with Next.js 14, featuring an AI journey blog, project showcase, and professional portfolio. Currently live at [fernandotn.github.io](https://fernandotn.github.io).

## ✨ Features

- **🏠 Landing Page** - Hero section with professional stats and featured content
- **👤 About Page** - Professional timeline, bio, achievements, and downloadable CV
- **📝 AI Journey Blog** - MDX-based articles with tag filtering, RSS feed, and reading time estimates
- **🚀 Projects Showcase** - Grid of selected ventures with detailed case studies
- **📧 Newsletter** - Subscription system for AI and tech insights
- **🎨 Modern Design** - Dark/light mode toggle, responsive design, and smooth animations
- **⚡ Performance** - Optimized for Core Web Vitals with sub-second load times
- **🔍 SEO Optimized** - Open Graph cards, structured data, and sitemap generation

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Content**: MDX with Contentlayer for type-safe content management
- **Icons**: Lucide React for consistent iconography
- **Deployment**: GitHub Pages with automated CI/CD
- **Analytics**: Google Analytics 4 integration
- **Email**: Mailchimp API integration (configurable)

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or later
- npm or pnpm (recommended)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/FernandoTN/fernandotn.github.io.git
   cd fernandotn.github.io
   ```

2. **Install dependencies**

   ```bash
   npm install --legacy-peer-deps
   ```

3. **Set up environment variables** (optional)

   ```bash
   cp .env.example .env.local
   ```

   Configure your environment variables:

   ```env
   # Analytics
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

   # Mailchimp Newsletter (optional)
   MAILCHIMP_API_KEY=your_mailchimp_api_key
   MAILCHIMP_SERVER_PREFIX=us1
   MAILCHIMP_LIST_ID=your_list_id

   # Site Configuration
   NEXT_PUBLIC_SITE_URL=https://fernandotn.github.io
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
fernandotn.github.io/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page with timeline
│   ├── api/               # API routes (newsletter)
│   ├── blog/              # Blog pages and post details
│   ├── projects/          # Projects showcase
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with theme provider
│   └── page.tsx           # Homepage with hero and featured content
├── components/            # Reusable React components
│   ├── ui/               # Base UI components (Button, Badge, etc.)
│   ├── navbar.tsx        # Navigation with dark mode toggle
│   ├── footer.tsx        # Footer with social links
│   ├── hero.tsx          # Landing page hero section
│   └── ...               # Feature-specific components
├── content/              # MDX content files
│   ├── blog/            # Blog posts in MDX format
│   └── projects/        # Project case studies
├── lib/                 # Utility functions
│   ├── utils.ts         # Common utilities
│   ├── metadata.ts      # SEO metadata helpers
│   └── analytics.ts     # Analytics tracking functions
├── public/              # Static assets
│   ├── images/          # Images and media files
│   └── ...              # Favicons, OG images, etc.
├── .github/workflows/   # GitHub Actions for deployment
└── scripts/             # Build and utility scripts
```

## ✍️ Content Management

### Adding Blog Posts

1. Create a new MDX file in `content/blog/`
2. Use the following frontmatter template:

```mdx
---
title: 'Your Post Title'
summary: 'Brief description of the post content'
publishedAt: '2025-08-05'
tags: ['AI', 'Machine Learning', 'Startups']
featured: true
author: 'Fernando Torres'
---

Your content here using MDX syntax...
```

### Adding Projects

1. Create a new MDX file in `content/projects/`
2. Use the following frontmatter template:

```mdx
---
title: 'Project Name'
summary: 'Brief project description'
image: '/images/projects/project-name.jpg'
technologies: ['Next.js', 'Python', 'AWS']
github: 'https://github.com/username/repo'
website: 'https://project-website.com'
featured: true
order: 1
---

Detailed project description and case study...
```

## 🎨 Customization

### Design System

The site uses a custom design system built on Tailwind CSS:

- **Colors**: Customizable color palette in `tailwind.config.js`

## 🔧 Configuration and Updates

- New static pages: `/contact`, `/privacy`, `/terms`.
- Newsletter/Contact configured via `NEXT_PUBLIC_NEWSLETTER_ENDPOINT` (e.g., Formspree endpoint). If unset, UI falls back to a mailto link.
- CV download: place your PDF at `public/fernando-torres-cv.pdf` to enable the Download buttons.
- Domain alignment: default `NEXT_PUBLIC_SITE_URL` and metadata use `https://fernandotn.github.io` for GitHub Pages.
- Legacy `index.html` placeholder moved out of the repo root to avoid conflicts; see `static-placeholder/README.md`.
- **Typography**: Inter font with consistent type scale
- **Spacing**: Harmonious spacing system
- **Components**: Reusable UI components with variants

### Dark Mode

Automatic dark/light mode switching with:

- System preference detection
- Manual toggle in navigation
- Persistent user preference storage

## 🚀 Deployment

### GitHub Pages (Current Setup)

The site automatically deploys to GitHub Pages when you push to the `main` branch:

1. **GitHub Actions** builds the site
2. **Static files** are generated and deployed
3. **Live at** [fernandotn.github.io](https://fernandotn.github.io)

### Alternative Deployment Options

- **Vercel**: Connect your repository for automatic deployments
- **Netlify**: Drag and drop the `out` folder after building
- **Custom Server**: Use `npm run build` and serve the `out` directory

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Automatic WebP conversion and lazy loading
- **Code Splitting**: Automatic route-based code splitting

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format code with Prettier
npm run type-check   # Run TypeScript checks

# Content Generation
npm run sitemap      # Generate sitemap.xml
npm run rss          # Generate RSS feed
```

### Code Quality Tools

- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type safety
- **Husky** for git hooks
- **Commitlint** for conventional commits

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit using conventional commits (`git commit -m 'feat: add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 📝 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## 📧 Contact

- **Website**: [fernandotn.github.io](https://fernandotn.github.io)
- **Email**: hello@fernandotorres.io
- **Twitter**: [@fernandotorres](https://twitter.com/fernandotorres)
- **LinkedIn**: [fernandotorres](https://linkedin.com/in/fernandotorres)

---

Built with ❤️ by Fernando Torres using Next.js, TypeScript, and Tailwind CSS.

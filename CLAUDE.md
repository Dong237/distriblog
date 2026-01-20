# DistriBlog - Personal Blog Project

> LLM Engineer's personal blog built with Next.js + Nextra

## Quick Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run start    # Run production build
```

## Architecture

```
DistriBlog/
├── pages/              # MDX pages and blog posts
│   ├── index.mdx       # Homepage
│   ├── about.mdx       # About page
│   └── posts/          # Blog posts directory
│       └── *.mdx       # Individual blog posts
├── components/         # React components
│   └── LiveCode.jsx    # Interactive code editor component
├── public/             # Static assets (images, etc.)
├── theme.config.jsx    # Nextra blog theme configuration
└── next.config.mjs     # Next.js configuration
```

## Key Files

| File | Purpose |
|------|---------|
| `theme.config.jsx` | Blog metadata, nav links, footer |
| `components/LiveCode.jsx` | Interactive code demos using react-live |
| `pages/posts/*.mdx` | Blog posts (Markdown + JSX) |

## Writing Blog Posts

1. Create a new `.mdx` file in `pages/posts/`
2. Add frontmatter at the top:
   ```yaml
   ---
   title: Your Post Title
   date: 2025-01-20
   description: Brief description for SEO
   tag: topic1, topic2
   author: Your Name
   ---
   ```
3. Write content in Markdown
4. Import components for interactivity:
   ```jsx
   import { LiveCode } from '../../components/LiveCode'

   <LiveCode code={`your code here`} />
   ```

## Tech Stack

- **Framework**: Next.js 16 + React 19
- **Blog Theme**: Nextra Blog Theme
- **Interactive Code**: react-live
- **Styling**: Theme defaults (customizable via CSS)

## Deployment

Recommended: Vercel (one-click deploy)
1. Push to GitHub
2. Connect repo to Vercel
3. Auto-deploys on every push

## Current Sprint

- [x] Initial project setup
- [x] Interactive code demos
- [ ] Customize theme colors/styling
- [ ] Add more blog posts
- [ ] Deploy to Vercel

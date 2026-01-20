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
├── pages/                 # Pages and blog posts (MDX)
│   ├── _app.jsx           # Custom App component
│   ├── index.mdx          # Homepage
│   ├── about.mdx          # About page
│   └── posts/             # Blog posts directory
│       └── *.mdx          # Individual blog posts
├── components/            # React components
│   └── LiveCode.jsx       # Interactive code editor (react-live)
├── public/                # Static assets (images, etc.)
├── theme.config.jsx       # Nextra blog theme configuration
└── next.config.mjs        # Next.js + Nextra configuration
```

## Key Files

| File | Purpose |
|------|---------|
| `theme.config.jsx` | Blog metadata, nav links, footer, dark mode |
| `components/LiveCode.jsx` | Interactive code demos using react-live |
| `pages/posts/*.mdx` | Blog posts (Markdown + JSX) |
| `pages/_app.jsx` | Custom App, imports theme styles |

## Writing Blog Posts

1. Create a new `.mdx` file in `pages/posts/`
2. Add frontmatter at the top:
   ```yaml
   ---
   title: Your Post Title
   date: 2025/1/20
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
   For components that need `render()`, add `noInline={true}`:
   ```jsx
   <LiveCode code={`function Demo() {...} render(<Demo />)`} noInline={true} />
   ```

## Tech Stack

- **Framework**: Next.js 14 + React 18
- **Blog Theme**: Nextra 3 Blog Theme
- **Interactive Code**: react-live
- **Styling**: Nextra theme defaults (customizable)

## Deployment

Recommended: Vercel (one-click deploy)
1. Push to GitHub
2. Connect repo to Vercel
3. Auto-deploys on every push

Alternative: Netlify, Cloudflare Pages, GitHub Pages

## Customization

### Theme Config (`theme.config.jsx`)
- Update `navs` array for navigation links
- Modify `footer` for copyright info
- Set `darkMode: true/false` to enable/disable

### Styling
- Add custom CSS in `pages/_app.jsx`
- Override theme styles with CSS custom properties

## Current Sprint

- [x] Initial project setup
- [x] Interactive code demos with react-live
- [x] Sample blog post with demo
- [ ] Customize theme colors/styling
- [ ] Add more blog posts
- [ ] Deploy to Vercel
- [ ] Add custom domain

# DistriBlog - Personal Blog Project

> LLM Engineer's personal blog built with Next.js + Nextra, styled after Anthropic's engineering blog

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
│   ├── _app.jsx           # Custom App with layout wrapper
│   ├── index.jsx          # Custom homepage with hero + post list
│   ├── about.mdx          # About page
│   └── posts/             # Blog posts directory
│       └── *.mdx          # Individual blog posts
├── components/            # React components
│   ├── Header.jsx         # Site header with nav + dark mode toggle
│   ├── Footer.jsx         # Site footer with social links
│   ├── ArticleCard.jsx    # Post card for listing
│   ├── PostList.jsx       # Posts listing component
│   └── LiveCode.jsx       # Interactive code editor (react-live)
├── styles/
│   └── globals.css        # Anthropic-style theme (cream/dark mode)
├── public/                # Static assets (images, etc.)
├── theme.config.jsx       # Nextra blog theme configuration
└── next.config.mjs        # Next.js + Nextra configuration
```

## Key Files

| File | Purpose |
|------|---------|
| `styles/globals.css` | Full design system (typography, colors, layout) |
| `components/Header.jsx` | Navigation with logo, links, social icons, dark mode |
| `components/Footer.jsx` | Footer with social links |
| `components/ArticleCard.jsx` | Post card with title, date, description, tags |
| `pages/index.jsx` | Custom homepage with hero section |
| `pages/_app.jsx` | Layout wrapper with Header + Footer |
| `theme.config.jsx` | Nextra SEO config (minimal, uses custom layout) |
| `components/LiveCode.jsx` | Interactive code demos using react-live |
| `pages/posts/*.mdx` | Blog posts (Markdown + JSX) |

## Design System

### Colors
- **Light mode**: Cream background `#FAF7F2`, dark text `#1a1a1a`
- **Dark mode**: Warm dark `#1a1816`, light text `#f5f5f4`
- CSS custom properties in `:root` and `.dark`

### Typography
- **Headings**: Georgia (serif) for editorial feel
- **Body**: Inter (sans-serif) for readability
- **Code**: JetBrains Mono / system monospace

### Layout
- Content max-width: 720px
- Sticky header with blur backdrop
- Responsive mobile design

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
- **Blog Theme**: Nextra 3 Blog Theme (with custom components)
- **Interactive Code**: react-live
- **Styling**: Custom CSS design system
- **Frontmatter Parsing**: gray-matter

## Deployment

Recommended: Vercel (one-click deploy)
1. Push to GitHub
2. Connect repo to Vercel
3. Auto-deploys on every push

Alternative: Netlify, Cloudflare Pages, GitHub Pages

## Customization

### Personalizing the Blog
- Update `components/Header.jsx`: Change site title, social links
- Update `components/Footer.jsx`: Change social links
- Update `pages/index.jsx`: Customize hero title/subtitle
- Update social URLs in header/footer (search for `your-username`)

### Theme Colors
Edit CSS custom properties in `styles/globals.css`:
```css
:root {
  --bg-primary: #FAF7F2;
  --text-primary: #1a1a1a;
  --accent-color: #d97706;
  /* etc. */
}
```

## Current Sprint

- [x] Initial project setup
- [x] Interactive code demos with react-live
- [x] Sample blog post with demo
- [x] Anthropic-style redesign with custom components
- [x] Cream/dark mode theme
- [x] Custom header/footer
- [x] Hero section homepage
- [ ] Add more blog posts
- [ ] Deploy to Vercel
- [ ] Add custom domain
- [ ] Personalize social links and branding

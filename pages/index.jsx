import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ArticleCard from '../components/ArticleCard'

// Hero Section Component
function Hero() {
  return (
    <section className="hero-section">
      <h1 className="hero-title">LLM Engineering Notes</h1>
      <p className="hero-subtitle">
        Thoughts on building intelligent systems, one prompt at a time.
      </p>
      <div className="hero-buttons">
        <Link href="/about" className="hero-btn hero-btn-primary">
          About Me
        </Link>
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-btn hero-btn-secondary"
        >
          GitHub
        </a>
      </div>
    </section>
  )
}

// Posts Section Component
function PostsSection({ posts }) {
  if (!posts || posts.length === 0) {
    return (
      <section className="posts-section">
        <h2 className="posts-header">Recent Posts</h2>
        <p style={{ color: 'var(--text-muted)' }}>No posts yet. Check back soon!</p>
      </section>
    )
  }

  // Sort posts by date (newest first)
  const sortedPosts = [...posts].sort((a, b) => {
    const dateA = new Date(a.date || '1970-01-01')
    const dateB = new Date(b.date || '1970-01-01')
    return dateB - dateA
  })

  // First post is featured
  const [featuredPost, ...otherPosts] = sortedPosts

  return (
    <section className="posts-section">
      <h2 className="posts-header">Recent Posts</h2>
      <div className="posts-list">
        {featuredPost && (
          <ArticleCard post={featuredPost} featured={true} />
        )}
        {otherPosts.map((post, index) => (
          <ArticleCard key={post.slug || index} post={post} />
        ))}
      </div>
    </section>
  )
}

export default function HomePage({ posts }) {
  return (
    <div className="main-content">
      <Hero />
      <PostsSection posts={posts} />
    </div>
  )
}

// Get posts at build time
export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'pages/posts')

  let posts = []

  try {
    const filenames = fs.readdirSync(postsDirectory)

    posts = filenames
      .filter(filename => filename.endsWith('.mdx') || filename.endsWith('.md'))
      .map(filename => {
        const filePath = path.join(postsDirectory, filename)
        const fileContents = fs.readFileSync(filePath, 'utf8')
        const { data: frontMatter } = matter(fileContents)

        const slug = filename.replace(/\.mdx?$/, '')

        return {
          slug,
          href: `/posts/${slug}`,
          title: frontMatter.title || slug,
          date: frontMatter.date || null,
          description: frontMatter.description || '',
          tag: frontMatter.tag || '',
          author: frontMatter.author || ''
        }
      })
  } catch (error) {
    console.error('Error reading posts:', error)
  }

  return {
    props: {
      posts
    }
  }
}

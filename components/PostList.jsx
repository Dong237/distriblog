import ArticleCard from './ArticleCard'

export default function PostList({ posts }) {
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
    const dateA = new Date(a.frontMatter?.date || a.date)
    const dateB = new Date(b.frontMatter?.date || b.date)
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
          <ArticleCard key={post.route || index} post={post} />
        ))}
      </div>
    </section>
  )
}

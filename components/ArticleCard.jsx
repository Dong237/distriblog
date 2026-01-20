import Link from 'next/link'

function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export default function ArticleCard({ post, featured = false }) {
  const { title, date, description, tag } = post.frontMatter || post
  const href = post.route || post.href || `/posts/${post.slug}`

  // Parse tags from comma-separated string
  const tags = tag ? tag.split(',').map(t => t.trim()) : []

  return (
    <article className={`article-card ${featured ? 'featured' : ''}`}>
      <time className="article-card-date" dateTime={date}>
        {formatDate(date)}
      </time>
      <h2 className="article-card-title">
        <Link href={href}>
          {title}
        </Link>
      </h2>
      {description && (
        <p className="article-card-description">
          {description}
        </p>
      )}
      {tags.length > 0 && (
        <div className="article-card-tags">
          {tags.map((tagName, index) => (
            <span key={index} className="article-card-tag">
              {tagName}
            </span>
          ))}
        </div>
      )}
    </article>
  )
}

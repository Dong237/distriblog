export default {
  // Hide default Nextra footer since we have our own
  footer: null,

  // SEO and meta tags
  head: ({ title, meta }) => (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
      <meta name="theme-color" content="#FAF7F2" />
    </>
  ),

  // Read more link text
  readMore: 'Read More →',

  // Hide default post footer
  postFooter: null,

  // Enable dark mode (handled by our custom toggle)
  darkMode: true,

  // Hide default nav since we have custom Header
  navs: [],
}

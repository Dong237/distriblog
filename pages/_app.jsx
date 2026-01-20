import 'nextra-theme-blog/style.css'
import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect } from 'react'

// Initialize theme from localStorage or system preference
function useThemeInit() {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])
}

export default function App({ Component, pageProps }) {
  useThemeInit()

  return (
    <div className="layout-wrapper">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

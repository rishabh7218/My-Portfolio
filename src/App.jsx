import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className='bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300'>
        
        {/* Navbar */}
        <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

        {/* Theme Toggle */}
        <motion.button
          onClick={() => setDarkMode(!darkMode)}
          className='fixed bottom-8 right-8 p-3 bg-sky-500 hover:bg-sky-600 text-white rounded-full shadow-lg z-40'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label='Toggle dark mode'
        >
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </motion.button>

        {/* Main Content */}
        <main className='overflow-x-hidden'>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Education />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}

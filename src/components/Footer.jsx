import { motion } from 'framer-motion'
import { FaHeart, FaArrowUp } from 'react-icons/fa'
import { portfolioData } from '../data/portfolioData'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-slate-900 dark:bg-slate-950 text-white py-12 px-4'>
      <div className='max-w-6xl mx-auto w-full'>
        
        {/* Main Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='grid md:grid-cols-3 gap-12 mb-12'
        >
          
          {/* About */}
          <div>
            <h3 className='text-2xl font-bold text-sky-400 mb-4'>Rishabh Patel</h3>
            <p className='text-slate-400 leading-relaxed'>
              Data Analyst passionate about transforming raw data into actionable business insights. Specialized in Power BI, SQL, and advanced analytics.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-bold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              {['LinkedIn', 'GitHub', 'Email'].map((link, idx) => (
                <li key={idx}>
                  <motion.a
                    href={
                      link === 'LinkedIn' ? portfolioData.linkedin :
                      link === 'GitHub' ? portfolioData.github :
                      `mailto:${portfolioData.email}`
                    }
                    target='_blank'
                    rel='noopener noreferrer'
                    whileHover={{ x: 5 }}
                    className='text-slate-400 hover:text-sky-400 transition-colors'
                  >
                    {link} →
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className='text-lg font-bold mb-4'>Contact</h3>
            <div className='space-y-3 text-slate-400'>
              <p>📧 {portfolioData.email}</p>
              <p>📱 {portfolioData.phone}</p>
              <p>📍 {portfolioData.location}</p>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className='border-t border-slate-700 mb-8'></div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm'
        >
          
          {/* Copyright */}
          <p className='flex items-center gap-1 mb-4 md:mb-0'>
            © {currentYear} Rishabh Patel. Made with <FaHeart className='text-red-500 mx-1' /> using React & Tailwind CSS
          </p>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className='flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors'
          >
            Back to Top <FaArrowUp />
          </motion.button>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className='mt-8 pt-8 border-t border-slate-700 text-center text-xs text-slate-500'
        >
          <p>Built with React • Vite • Tailwind CSS • Framer Motion</p>
        </motion.div>
      </div>
    </footer>
  )
}

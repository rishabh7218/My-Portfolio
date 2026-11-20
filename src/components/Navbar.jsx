import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import { FaTimes, FaBars } from 'react-icons/fa'

export default function Navbar({ mobileMenuOpen, setMobileMenuOpen }) {
  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Education', 'Contact']

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className='fixed top-0 w-full bg-white dark:bg-slate-900 shadow-lg z-50 transition-colors duration-300'
    >
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className='text-2xl font-bold text-sky-500'
          >
            RP
          </motion.div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex gap-8'>
            {navItems.map((item, idx) => (
              <ScrollLink
                key={idx}
                to={item.toLowerCase()}
                smooth={true}
                offset={-64}
                duration={500}
                className='text-slate-700 dark:text-slate-300 hover:text-sky-500 cursor-pointer transition-colors'
              >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                >
                  {item}
                </motion.span>
              </ScrollLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className='md:hidden text-slate-700 dark:text-slate-300'
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='md:hidden pb-4 border-t border-slate-200 dark:border-slate-700'
          >
            {navItems.map((item, idx) => (
              <ScrollLink
                key={idx}
                to={item.toLowerCase()}
                smooth={true}
                offset={-64}
                duration={500}
                className='block py-2 text-slate-700 dark:text-slate-300 hover:text-sky-500 cursor-pointer'
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </ScrollLink>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { portfolioData } from '../data/portfolioData'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id='home' className='min-h-screen flex items-center justify-center pt-16 px-4 bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800'>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className='text-center max-w-4xl'
      >
        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className='text-6xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4'
        >
          Rishabh Patel
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={itemVariants}
          className='text-2xl md:text-3xl text-sky-600 dark:text-sky-400 font-semibold mb-6'
        >
          {portfolioData.title}
        </motion.p>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className='text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed'
        >
          {portfolioData.bio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className='flex flex-col sm:flex-row gap-4 justify-center mb-12'
        >
          <motion.a
            href='#projects'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='btn-primary'
          >
            View My Work
          </motion.a>
          <motion.a
            href={`mailto:${portfolioData.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='btn-secondary'
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className='flex gap-6 justify-center text-3xl'
        >
          <motion.a
            href={portfolioData.linkedin}
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ scale: 1.2, color: '#0ea5e9' }}
            className='text-slate-600 dark:text-slate-400 hover:text-sky-500 transition-colors'
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href={portfolioData.github}
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ scale: 1.2 }}
            className='text-slate-600 dark:text-slate-400 hover:text-sky-500 transition-colors'
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href={`mailto:${portfolioData.email}`}
            whileHover={{ scale: 1.2 }}
            className='text-slate-600 dark:text-slate-400 hover:text-sky-500 transition-colors'
          >
            <FaEnvelope />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className='mt-12'
        >
          <p className='text-slate-500 dark:text-slate-400'>Scroll to explore</p>
        </motion.div>
      </motion.div>
    </section>
  )
}

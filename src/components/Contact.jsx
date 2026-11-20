import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'
import { portfolioData } from '../data/portfolioData'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Create mailto link
    const subject = encodeURIComponent(formData.subject)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    window.location.href = `mailto:${portfolioData.email}?subject=${subject}&body=${body}`
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id='contact' className='min-h-screen flex items-center py-20 px-4 bg-slate-50 dark:bg-slate-900'>
      <div className='max-w-5xl mx-auto w-full'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className='section-title'>Get In Touch</h2>
          <p className='section-subtitle'>Let's connect and explore opportunities together</p>

          <div className='grid md:grid-cols-2 gap-12'>
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='space-y-8'
            >
              <div className='card hover:shadow-lg'>
                <div className='flex items-center gap-4'>
                  <FaEnvelope className='text-sky-500 text-2xl flex-shrink-0' />
                  <div>
                    <p className='text-sm text-slate-600 dark:text-slate-400'>Email</p>
                    <a href={`mailto:${portfolioData.email}`} className='text-lg font-semibold text-slate-900 dark:text-white hover:text-sky-500'>
                      {portfolioData.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className='card hover:shadow-lg'>
                <div className='flex items-center gap-4'>
                  <FaPhone className='text-green-500 text-2xl flex-shrink-0' />
                  <div>
                    <p className='text-sm text-slate-600 dark:text-slate-400'>Phone</p>
                    <a href={`tel:${portfolioData.phone}`} className='text-lg font-semibold text-slate-900 dark:text-white hover:text-green-500'>
                      {portfolioData.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className='card hover:shadow-lg'>
                <div className='flex items-center gap-4'>
                  <FaMapMarkerAlt className='text-red-500 text-2xl flex-shrink-0' />
                  <div>
                    <p className='text-sm text-slate-600 dark:text-slate-400'>Location</p>
                    <p className='text-lg font-semibold text-slate-900 dark:text-white'>
                      {portfolioData.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className='pt-8'>
                <p className='font-semibold text-slate-900 dark:text-white mb-4'>Connect on Social Media</p>
                <div className='flex gap-4'>
                  <motion.a
                    href={portfolioData.linkedin}
                    target='_blank'
                    rel='noopener noreferrer'
                    whileHover={{ scale: 1.2 }}
                    className='w-12 h-12 bg-sky-500 hover:bg-sky-600 rounded-full flex items-center justify-center text-white text-xl transition-colors'
                  >
                    <FaLinkedin />
                  </motion.a>
                  <motion.a
                    href={portfolioData.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    whileHover={{ scale: 1.2 }}
                    className='w-12 h-12 bg-slate-700 hover:bg-slate-800 dark:bg-slate-600 dark:hover:bg-slate-500 rounded-full flex items-center justify-center text-white text-xl transition-colors'
                  >
                    <FaGithub />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className='space-y-4'
            >
              <div>
                <label className='block text-sm font-semibold text-slate-900 dark:text-white mb-2'>
                  Name
                </label>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-sky-500 focus:outline-none transition-colors'
                  placeholder='Your Name'
                />
              </div>

              <div>
                <label className='block text-sm font-semibold text-slate-900 dark:text-white mb-2'>
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-sky-500 focus:outline-none transition-colors'
                  placeholder='Your Email'
                />
              </div>

              <div>
                <label className='block text-sm font-semibold text-slate-900 dark:text-white mb-2'>
                  Subject
                </label>
                <input
                  type='text'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-sky-500 focus:outline-none transition-colors'
                  placeholder='Message Subject'
                />
              </div>

              <div>
                <label className='block text-sm font-semibold text-slate-900 dark:text-white mb-2'>
                  Message
                </label>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows='5'
                  className='w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-sky-500 focus:outline-none transition-colors resize-none'
                  placeholder='Your Message'
                ></textarea>
              </div>

              <motion.button
                type='submit'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='w-full btn-primary'
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

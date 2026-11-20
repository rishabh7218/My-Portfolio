import { motion } from 'framer-motion'
import { FaAward, FaCertificate } from 'react-icons/fa'
import { portfolioData } from '../data/portfolioData'

const categoryColors = {
  'Data Analytics': 'from-blue-500 to-cyan-500',
  'Cloud': 'from-purple-500 to-pink-500',
  'AI & Data': 'from-green-500 to-emerald-500',
  'Cybersecurity': 'from-red-500 to-orange-500',
  'Networking': 'from-yellow-500 to-orange-500',
  'Linux': 'from-gray-700 to-gray-900'
}

export default function Certifications() {
  const groupedCerts = portfolioData.certifications.reduce((acc, cert) => {
    const category = cert.category
    if (!acc[category]) acc[category] = []
    acc[category].push(cert)
    return acc
  }, {})

  return (
    <section id='certifications' className='min-h-screen flex items-center py-20 px-4 bg-slate-50 dark:bg-slate-900'>
      <div className='max-w-6xl mx-auto w-full'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className='section-title'>Certifications & Achievements</h2>
          <p className='section-subtitle'>{portfolioData.certifications.length}+ professional certifications</p>

          {/* Certifications by Category */}
          <div className='space-y-12'>
            {Object.entries(groupedCerts).map(([category, certs], categoryIdx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIdx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className='flex items-center gap-3 mb-6'>
                  <div className={`h-1 w-8 bg-gradient-to-r ${categoryColors[category] || 'from-sky-500 to-blue-500'}`}></div>
                  <h3 className='text-2xl font-bold text-slate-900 dark:text-white'>{category}</h3>
                  <span className='text-sm font-semibold text-sky-500 bg-sky-100 dark:bg-sky-900 px-3 py-1 rounded-full'>
                    {certs.length}
                  </span>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                  {certs.map((cert, certIdx) => (
                    <motion.div
                      key={cert.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: (categoryIdx * 0.1) + (certIdx * 0.05) }}
                      viewport={{ once: true }}
                      whileHover={{ translateY: -5 }}
                      className='card border-t-4 border-sky-500 group'
                    >
                      <div className='flex items-start gap-3 mb-3'>
                        <FaCertificate className='text-sky-500 text-xl flex-shrink-0 mt-1' />
                        <div className='flex-1'>
                          <h4 className='font-semibold text-slate-900 dark:text-white text-sm leading-tight'>
                            {cert.title}
                          </h4>
                        </div>
                      </div>
                      <p className='text-xs text-slate-600 dark:text-slate-400 mb-2'>
                        <strong>Issuer:</strong> {cert.issuer}
                      </p>
                      <p className='text-xs text-slate-500 dark:text-slate-500'>
                        {cert.date}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className='mt-12 card bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
          >
            <div className='flex items-center gap-4 mb-6'>
              <FaAward className='text-4xl' />
              <div>
                <h3 className='text-2xl font-bold'>Achievement Highlights</h3>
              </div>
            </div>
            <ul className='grid md:grid-cols-2 gap-4 text-sm'>
              <li className='flex gap-2'>
                <span>✓</span>
                <span>Certified by industry leaders: Tata, Deloitte, Microsoft, Cisco</span>
              </li>
              <li className='flex gap-2'>
                <span>✓</span>
                <span>Completed advanced simulations in Data Analytics and AI</span>
              </li>
              <li className='flex gap-2'>
                <span>✓</span>
                <span>Expertise across Data, Cloud, Cybersecurity, and Networking</span>
              </li>
              <li className='flex gap-2'>
                <span>✓</span>
                <span>Continuous learner with latest industry certifications</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id='experience' className='min-h-screen flex items-center py-20 px-4 bg-white dark:bg-slate-950'>
      <div className='max-w-5xl mx-auto w-full'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className='section-title'>Experience & Internships</h2>
          <p className='section-subtitle'>Professional growth through industry simulations and virtual internships</p>

          <div className='space-y-8'>
            {portfolioData.experience.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className='card border-l-4 border-sky-500'
              >
                <div className='flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4'>
                  <div>
                    <h3 className='text-2xl font-bold text-slate-900 dark:text-white'>
                      {exp.title}
                    </h3>
                    <p className='text-lg text-sky-500 font-semibold'>{exp.company}</p>
                    <p className='text-sm text-slate-600 dark:text-slate-400 italic'>
                      {exp.description}
                    </p>
                  </div>
                  <div className='text-right'>
                    <p className='text-sm font-semibold text-slate-600 dark:text-slate-400 bg-sky-100 dark:bg-sky-900 px-3 py-1 rounded-full whitespace-nowrap'>
                      {exp.date}
                    </p>
                  </div>
                </div>

                {/* Achievements */}
                <div className='space-y-2'>
                  {exp.bullets.map((bullet, bulletIdx) => (
                    <motion.div
                      key={bulletIdx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (idx * 0.1) + (bulletIdx * 0.05) }}
                      viewport={{ once: true }}
                      className='flex gap-3'
                    >
                      <span className='text-sky-500 flex-shrink-0 mt-1'>→</span>
                      <span className='text-slate-600 dark:text-slate-400'>{bullet}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className='mt-12 bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-lg p-8'
          >
            <div className='grid md:grid-cols-3 gap-8 text-center'>
              <div>
                <p className='text-4xl font-bold mb-2'>5</p>
                <p className='text-blue-100'>Internships Completed</p>
              </div>
              <div>
                <p className='text-4xl font-bold mb-2'>12+</p>
                <p className='text-blue-100'>Skills Acquired</p>
              </div>
              <div>
                <p className='text-4xl font-bold mb-2'>100%</p>
                <p className='text-blue-100'>Success Rate</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

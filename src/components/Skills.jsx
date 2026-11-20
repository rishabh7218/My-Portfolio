import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'

export default function Skills() {
  return (
    <section id='skills' className='min-h-screen flex items-center py-20 px-4 bg-white dark:bg-slate-950'>
      <div className='max-w-5xl mx-auto w-full'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className='section-title'>Technical Skills</h2>
          <p className='section-subtitle'>Tools and technologies I work with</p>

          <div className='grid md:grid-cols-2 gap-8'>
            {portfolioData.skills.map((skillGroup, idx) => (
              <motion.div
                key={skillGroup.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className='card'
              >
                <h3 className='text-2xl font-bold text-sky-500 mb-4'>{skillGroup.category}</h3>
                <div className='space-y-3'>
                  {skillGroup.items.map((skill, itemIdx) => (
                    <motion.div
                      key={itemIdx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (idx * 0.1) + (itemIdx * 0.05) }}
                      viewport={{ once: true }}
                      className='flex items-start gap-3'
                    >
                      <span className='text-sky-500 text-xl mt-1'>•</span>
                      <span className='text-slate-600 dark:text-slate-400'>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Proficiency Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className='mt-12 card bg-gradient-to-r from-sky-500 to-blue-600 text-white'
          >
            <h3 className='text-2xl font-bold mb-4'>Key Proficiencies</h3>
            <div className='grid md:grid-cols-3 gap-6'>
              <div>
                <p className='text-4xl font-bold mb-2'>14+</p>
                <p className='text-blue-100'>Professional Certifications</p>
              </div>
              <div>
                <p className='text-4xl font-bold mb-2'>2</p>
                <p className='text-blue-100'>Major Industry Simulations</p>
              </div>
              <div>
                <p className='text-4xl font-bold mb-2'>100%</p>
                <p className='text-blue-100'>Data-Driven Approach</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

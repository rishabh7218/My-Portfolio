import { motion } from 'framer-motion'
import { FaGraduationCap, FaCalendar } from 'react-icons/fa'
import { portfolioData } from '../data/portfolioData'

export default function Education() {
  return (
    <section id='education' className='min-h-screen flex items-center py-20 px-4 bg-white dark:bg-slate-950'>
      <div className='max-w-5xl mx-auto w-full'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className='section-title'>Education</h2>
          <p className='section-subtitle'>Academic achievements and credentials</p>

          <div className='space-y-8'>
            {portfolioData.education.map((edu, idx) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className='card border-l-4 border-green-500 hover:shadow-lg'
              >
                <div className='flex flex-col md:flex-row md:justify-between md:items-start gap-4'>
                  
                  {/* Left Content */}
                  <div className='flex-1'>
                    <div className='flex items-center gap-3 mb-2'>
                      <FaGraduationCap className='text-green-500 text-2xl' />
                      <h3 className='text-2xl font-bold text-slate-900 dark:text-white'>
                        {edu.degree}
                      </h3>
                    </div>
                    
                    <p className='text-lg text-green-600 dark:text-green-400 font-semibold mb-1'>
                      {edu.school}
                    </p>
                    
                    {edu.university && (
                      <p className='text-slate-600 dark:text-slate-400 mb-2'>
                        {edu.university}
                      </p>
                    )}
                    
                    {edu.details && (
                      <p className='text-sm text-slate-600 dark:text-slate-400 mb-3'>
                        {edu.details}
                      </p>
                    )}
                  </div>

                  {/* Right Stats */}
                  <div className='space-y-3 text-right md:text-left'>
                    <div className='flex items-center gap-2 md:justify-end'>
                      <FaCalendar className='text-sky-500 text-lg' />
                      <p className='font-semibold text-slate-700 dark:text-slate-300'>
                        {edu.year}
                      </p>
                    </div>
                    
                    {edu.gpa && (
                      <div className='bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg font-semibold'>
                        CGPA: {edu.gpa}
                      </div>
                    )}
                    
                    {edu.honors && (
                      <div className='bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-lg font-semibold text-sm'>
                        {edu.honors}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Academic Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className='mt-12 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg p-8'
          >
            <h3 className='text-2xl font-bold mb-6'>Academic Excellence</h3>
            <div className='grid md:grid-cols-3 gap-8'>
              <div>
                <p className='text-4xl font-bold mb-2'>7.29</p>
                <p className='text-green-100'>Current CGPA (B.Tech)</p>
              </div>
              <div>
                <p className='text-4xl font-bold mb-2'>First</p>
                <p className='text-green-100'>Division Classification</p>
              </div>
              <div>
                <p className='text-4xl font-bold mb-2'>RGPV</p>
                <p className='text-green-100'>Top-tier Technical University</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

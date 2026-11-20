import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'

export default function About() {
  return (
    <section id='about' className='min-h-screen flex items-center py-20 px-4 bg-slate-50 dark:bg-slate-900'>
      <div className='max-w-5xl mx-auto w-full'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className='section-title'>About Me</h2>
          <p className='section-subtitle'>Data-driven professional with passion for analytics</p>

          <div className='grid md:grid-cols-2 gap-12 items-center'>
            
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='space-y-6'
            >
              <p className='text-lg text-slate-600 dark:text-slate-400 leading-relaxed'>
                I'm a B.Tech Computer Science graduate from RGPV Bhopal (CGPA: 7.29, First Division) with a strong foundation in data analytics, business intelligence, and MIS reporting.
              </p>
              
              <p className='text-lg text-slate-600 dark:text-slate-400 leading-relaxed'>
                My journey in data analysis began with building interactive dashboards that turned complex datasets into actionable business insights. Over the past two years, I've honed my skills in Power BI, Advanced Excel, SQL, and Python through real-world projects and industry simulations with Tata, Deloitte, and Microsoft.
              </p>
              
              <p className='text-lg text-slate-600 dark:text-slate-400 leading-relaxed'>
                What drives me is the intersection of data, storytelling, and decision-making. I don't just create reports—I craft narratives from numbers that help stakeholders understand the "why" behind the "what."
              </p>
            </motion.div>

            {/* Right Column - Quick Facts */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='space-y-6'
            >
              <div className='card'>
                <h3 className='text-2xl font-bold text-sky-500 mb-2'>Location</h3>
                <p className='text-slate-600 dark:text-slate-400'>{portfolioData.location}</p>
              </div>

              <div className='card'>
                <h3 className='text-2xl font-bold text-sky-500 mb-2'>Email</h3>
                <p className='text-slate-600 dark:text-slate-400'>{portfolioData.email}</p>
              </div>

              <div className='card'>
                <h3 className='text-2xl font-bold text-sky-500 mb-2'>Phone</h3>
                <p className='text-slate-600 dark:text-slate-400'>{portfolioData.phone}</p>
              </div>

              <div className='card'>
                <h3 className='text-2xl font-bold text-sky-500 mb-2'>Status</h3>
                <p className='text-slate-600 dark:text-slate-400'>Open to work across India</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

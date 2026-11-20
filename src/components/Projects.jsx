import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { portfolioData } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id='projects' className='min-h-screen flex items-center py-20 px-4 bg-slate-50 dark:bg-slate-900'>
      <div className='max-w-6xl mx-auto w-full'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className='section-title'>Featured Projects</h2>
          <p className='section-subtitle'>Portfolio of data analytics and BI solutions</p>

          <div className='grid md:grid-cols-2 gap-8'>
            {portfolioData.projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className='card hover:shadow-2xl group'
              >
                {/* Project Image Placeholder */}
                <div className='w-full h-48 bg-gradient-to-br from-sky-400 to-blue-600 rounded-lg mb-6 flex items-center justify-center overflow-hidden'>
                  <div className='text-white text-center'>
                    <div className='text-4xl mb-2'>📊</div>
                    <p className='text-sm'>{project.title}</p>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className='text-2xl font-bold text-slate-900 dark:text-white mb-2'>
                  {project.title}
                </h3>

                {/* Description */}
                <p className='text-slate-600 dark:text-slate-400 mb-4'>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className='mb-4 flex flex-wrap gap-2'>
                  {project.technologies.map((tech, techIdx) => (
                    <span key={techIdx} className='skill-tag'>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Achievements */}
                <div className='mb-6 space-y-2'>
                  <p className='font-semibold text-slate-900 dark:text-white'>Key Achievements:</p>
                  {project.achievements.map((achievement, achIdx) => (
                    <div key={achIdx} className='flex gap-2 text-sm text-slate-600 dark:text-slate-400'>
                      <span className='text-sky-500 flex-shrink-0'>✓</span>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className='flex gap-4 pt-4 border-t border-slate-200 dark:border-slate-700'>
                  <motion.a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    whileHover={{ scale: 1.1 }}
                    className='flex items-center gap-2 text-sky-500 hover:text-sky-600 font-semibold'
                  >
                    <FaGithub /> View Code
                  </motion.a>
                  <motion.a
                    href='#'
                    whileHover={{ scale: 1.1 }}
                    className='flex items-center gap-2 text-sky-500 hover:text-sky-600 font-semibold'
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

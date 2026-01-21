import { motion } from 'framer-motion'
import emailIcon from '../assets/icons/email.svg'
import githubIcon from '../assets/icons/github.svg'
import linkedinIcon from '../assets/icons/linkedin.svg'

export default function Contact() {
  return (
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-3xl font-semibold mb-10"
          >
            Get in touch
          </motion.h2>

          <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.8, ease: 'easeOut' }}
              className="flex flex-wrap items-center justify-center gap-8 text-slate-700"
          >
            {/* Email */}
            <a
                href="mailto:saptarshii.sd@gmail.com"
                className="flex items-center gap-3 hover:text-primary transition-colors"
            >
              <img src={emailIcon} className="w-12 h-12" />
              <span>Email me</span>
            </a>

            {/* LinkedIn */}
            <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:underline"
            >
              <img src={linkedinIcon} className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:underline"
            >
              <img src={githubIcon} className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </motion.div>
        </div>
      </section>
  )
}

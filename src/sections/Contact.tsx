import { motion } from 'framer-motion'
import emailIcon from '../assets/icons/mail.png'
import phoneIcon from '../assets/icons/phone.png'
import githubIcon from '../assets/icons/github.svg'
import linkedinIcon from '../assets/icons/linkedin.svg'

export default function Contact() {
  return (
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">

          {/* Compact Contact Card */}
          <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="
            rounded-2xl
          bg-white
            border border-slate-200
            px-8 py-10
            text-center
          "
          >
            {/* Title */}
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">
              Contact me
            </h2>

            <p className="text-slate-600 mb-6 text-sm">
              Open to backend roles, collaborations, and interesting conversations.
            </p>

              {/* Email + Phone */}
              <div className="flex flex-col items-center gap-2">
                  <a
                      href="mailto:saptarshii.sd@gmail.com"
                      className="
                          flex items-center gap-2
                          text-sm
                          text-slate-700
                          hover:text-slate-900
                          hover:underline
                          transition
                        "
                  >
                      <img src={emailIcon} className="w-5 h-5 opacity-100" />
                      <span className="font-medium">
                          saptarshii.sd@gmail.com
                      </span>
                  </a>

                  <a
                      href="tel:+917797082347"
                      className="
                          flex items-center gap-2
                          text-sm
                          text-slate-700
                          hover:text-slate-900
                          hover:underline
                          transition
                        "
                  >
                      <img src={phoneIcon} className="w-5 h-5 opacity-100" />
                      <span className="font-medium">
      +91&nbsp;7797082347
    </span>
                  </a>
              </div>




              {/* Divider */}
            <div className="my-6 h-px bg-primary/10" />

            {/* Minimal Form */}
            <form
                className="flex flex-col sm:flex-row gap-3 justify-center"
                onSubmit={(e) => e.preventDefault()}
            >
              <input
                  type="email"
                  placeholder="Your email"
                  className="
                w-full sm:w-64
                rounded-lg
                px-3 py-2
                text-sm
                bg-white
                border
                border-slate-200
                focus:outline-none
                focus:ring-2
                focus:ring-primary/30
              "
              />

              <button
                  type="submit"
                  className="
                px-5 py-2
                rounded-lg
                bg-primary
                text-white
                text-sm
                font-medium
                hover:bg-primary/90
                transition
              "
              >
                Say hello
              </button>
            </form>

            {/* Social links */}
            <div className="mt-6 flex justify-center gap-6 text-sm">
              <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-600 hover:text-primary transition"
              >
                <img src={linkedinIcon} className="w-4 h-4" />
                LinkedIn
              </a>

              <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-600 hover:text-primary transition"
              >
                <img src={githubIcon} className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </motion.div>

        </div>
      </section>
  )
}

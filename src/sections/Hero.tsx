import { motion } from 'framer-motion'
import profile from '../assets/profile/profile.jpg'

export default function Hero() {
  return (
      <section className="min-h-screen px-6 pt-16 pb-20 bg-gradient-to-b from-slate-50 to-white">

      <div className="max-w-4xl mx-auto">

          {/* Image */}
          <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="relative mb-8 w-44 h-44"
          >
            <div className="absolute inset-0 rounded-full ring-2 ring-primary/40 pointer-events-none" />
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-200">
              <img
                  src={profile}
                  alt="Saptarshi Das"
                  className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold"
          >
            Saptarshi Das
          </motion.h1>

          {/* Role */}
          <motion.h2
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="mt-3 text-xl font-medium text-primary"
          >
            Backend Engineer
          </motion.h2>

          {/* Description */}
          <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-6 text-lg text-slate-600 max-w-2xl"
          >
            Building scalable, event-driven integration platforms
            and data pipelines using Java, Spring Boot, and distributed systems.
          </motion.p>

          {/* Skills — PART OF HERO */}
          <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="mt-10 space-y-3 text-slate-700"
          >
            <p><strong>Languages:</strong> <strong>Java</strong>, Python</p>
            <p><strong>Backend & Frameworks:</strong> <strong>Spring Boot</strong>, Spring MVC, Spring Data JPA, Hibernate</p>
            <p><strong>Architecture:</strong> Event-driven systems, Microservices, REST APIs</p>
            <p><strong>Messaging & Data:</strong> <strong>Kafka</strong>, <strong>ActiveMQ</strong>, Redis</p>
            <p><strong>Databases:</strong> MySQL, MongoDB</p>
            <p><strong>DevOps:</strong> Docker, <strong>Nginx</strong>, Git, Jenkins, Linux</p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-14 flex"
          >
            <motion.span
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                className="text-sm text-slate-400"
            >
              ↓ Scroll
            </motion.span>
          </motion.div>

        </div>
      </section>
  )
}

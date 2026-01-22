import { motion } from 'framer-motion'

const skills = [
  'Java',
  'Python',
  'Spring Boot',
  'Spring MVC',
  'REST APIs',
  'Spring Data JPA',
  'Hibernate / JPA',
  'Event-driven Architecture',
  'Microservices',
  'Asynchronous Processing',
  'Kafka',
  'ActiveMQ',
  'Redis',
  'ETL Pipelines',
  'Data Migration',
  'Integrations',
  'MySQL',
  'MongoDB',
  'Docker',
  'Nginx',
  'Git',
  'Jenkins',
  'Linux',
  'Logging',
  'Monitoring',
  'Kibana',
  'Elastic',
  'Performance Tuning',
]

/* Animation variants */
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
}

export default function Skills() {
  return (
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-10">



          <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
          >
            {skills.map((skill) => (
                <motion.span
                    key={skill}
                    variants={item}
                    className="
                px-4 py-1.5
                rounded-full
                bg-primary
                text-white
                text-sm
                font-medium
                tracking-wide
                hover:bg-primary/90
                transition-colors
              "
                >
                  {skill}
                </motion.span>
            ))}
          </motion.div>

        </div>
      </section>
  )
}

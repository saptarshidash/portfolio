
import { motion } from 'framer-motion'

export default function Skills() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold"
        >
          Skills
        </motion.h2>

        <div className="space-y-3 text-slate-700 leading-relaxed">
          <p><strong>Languages:</strong> <strong>Java</strong>, Python</p>
          <p><strong>Backend & Frameworks:</strong> <strong>Spring Boot</strong>, Spring MVC, Spring Data JPA, Hibernate / JPA</p>
          <p><strong>Architecture & Patterns:</strong> Event-driven architecture, Microservices, REST APIs, Asynchronous processing</p>
          <p><strong>Messaging & Streaming:</strong> <strong>Kafka</strong>, <strong>ActiveMQ</strong>, Redis</p>
          <p><strong>Data & Integrations:</strong> ETL pipelines, Data migration, External system integrations (ATS, CRM)</p>
          <p><strong>Databases:</strong> MySQL, MongoDB</p>
          <p><strong>DevOps & Tooling:</strong> Docker, <strong>Nginx</strong>, Git, Jenkins, Linux</p>
          <p><strong>Observability & Ops:</strong> Logging, Monitoring, Error reporting, Performance tuning</p>
        </div>
      </div>
    </section>
  )
}

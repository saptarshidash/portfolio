
import { motion } from 'framer-motion'

export default function Experience() {
  return (
      <section className="py-20 px-6 bg-slate-50">
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-4xl mx-auto relative"
        >

        {/* Timeline line starts from center of first dot */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: 'calc(100% - 24px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="absolute left-[11px] top-[36px] w-px bg-primary"
        />

        <h2 className="text-3xl font-semibold mb-14">Experience</h2>

        {/* WorkLLama */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative pl-12 mb-16"
        >
          <span className="absolute left-[6px] top-[6px] w-3 h-3 rounded-full bg-primary" />
          <h3 className="text-xl font-semibold">Software Engineer — WorkLLama</h3>
          <p className="text-sm text-slate-500 mb-4">May 2022 – Present</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>Implemented and managed <strong>10+ event-driven microservices</strong> integrating WorkLLama with ATS platforms including Bullhorn, Salesforce TargetRecruit, eRecruit, and SAP Fieldglass.</li>
            <li>Designed and implemented an <strong>event router</strong> using ActiveMQ for asynchronous internal communication.</li>
            <li>Developed a <strong>core integration mapping framework</strong> using Spring Expression Language and reflection.</li>
            <li>Built a <strong>robust internal error reporting framework</strong> for proactive issue detection.</li>
            <li>Engineered a <strong>data migration framework</strong> (Python, Jinja, YAML) migrating millions of records, reducing onboarding time by <strong>70%</strong>.</li>
            <li>Designed an <strong>automated entity update framework</strong> using Spring JPA Specifications and JSON-based criteria.</li>
            <li>Developed a <strong>Kafka-based ETL service</strong> for real-time ingestion into analytics systems.</li>
            <li>Implemented <strong>Redis caching</strong> reducing redundant API calls by <strong>40%+</strong>.</li>
          </ul>
        </motion.div>

        {/* Cognizant */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative pl-12"
        >
          <span className="absolute left-[6px] top-[6px] w-3 h-3 rounded-full bg-primary" />
          <h3 className="text-xl font-semibold">Programmer Analyst — Cognizant</h3>
          <p className="text-sm text-slate-500 mb-4">July 2021 – April 2022</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>Developed backend services using Java and Spring Boot for a scalable food delivery application.</li>
            <li>Implemented <strong>30+ REST APIs</strong> in collaboration with cross-functional teams.</li>
            <li>Improved reliability through unit testing with JUnit, reducing bugs by <strong>15%</strong>.</li>
          </ul>
        </motion.div>
        </motion.div>
      </section>
  )
}

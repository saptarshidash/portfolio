import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import profile from '../assets/profile/profile.jpg'
import cover from '../assets/cover/cover.svg'

const FULL_TEXT =
    "Backend Java Engineer with 4.8+ years of experience building scalable, event-driven systems and high-performance microservices for large-scale, high-traffic platforms. Specialized in Java and Spring Boot, with a proven track record of delivering reliable APIs, optimizing data pipelines, and driving system efficiency through clean architecture and automation."

export default function Hero() {
    const [displayedText, setDisplayedText] = useState('')
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (index < FULL_TEXT.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + FULL_TEXT[index])
                setIndex((prev) => prev + 1)
            }, 18)

            return () => clearTimeout(timeout)
        }
    }, [index])

    return (
        <section className="relative bg-white">

            {/* COVER */}
            <div
                className="h-[280px] w-full bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url(${cover})` }}
            />

            {/* CONTENT */}
            <div className="px-6">
                <div className="max-w-4xl mx-auto relative">

                    {/* Profile Image (overlapping cover) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        className="relative -mt-20 mb-6 w-44 h-44"
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
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="text-4xl font-bold relative inline-block
              after:absolute after:left-0 after:-bottom-2
              after:w-12 after:h-[3px] after:bg-primary/70 after:rounded-full"
                    >
                        Saptarshi Das
                    </motion.h1>

                    {/* Role */}
                    <motion.h2
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }}
                        className="mt-4 text-xl font-medium text-primary"
                    >
                        Backend Engineer
                    </motion.h2>

                    {/* Typed Description */}
                    <p className="mt-6 text-lg text-slate-600 max-w-2xl">
                        {displayedText}
                        <span className="inline-block w-[1ch] animate-pulse">|</span>
                    </p>


                </div>
            </div>
        </section>
    )
}

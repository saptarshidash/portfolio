import Hero from './sections/Hero'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Contact from './sections/Contact'

export default function App() {
    return (
        <main className="overflow-x-hidden">
            <Hero />
            <Skills />
            <Experience />
            <Contact />
        </main>
    )
}

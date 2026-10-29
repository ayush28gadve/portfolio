import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Tools from "@/components/Tools";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <main className="relative min-h-screen bg-[#030014]">
            <Navbar />

            {/* Cinematic Hero Section */}
            <Hero />

            {/* Premium Content Sections */}
            <div className="relative z-20 bg-[#030014]">
                <div id="about" />
                <About />
                <Skills />
                <div id="projects" />
                <Projects />
                <div id="certifications" />
                <Certifications />
                <Tools />
                <Contact />
            </div>
        </main>
    );
}

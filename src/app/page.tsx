import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Tools from "@/components/Tools";
import Contact from "@/components/Contact";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";

export default function Home() {
    return (
        <main className="relative min-h-screen bg-[#0a0a0a]">
            <Navbar />

            {/* 3D Moving Image Hero Section */}
            <div className="relative z-10">
                <ScrollyCanvas />
                <Overlay />
            </div>

            {/* Premium Content Sections (Appear after scroll) */}
            <div className="relative z-20 bg-[#0a0a0a] -mt-screen"> {/* Negative margin to blend if needed, or just let it follow */}
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

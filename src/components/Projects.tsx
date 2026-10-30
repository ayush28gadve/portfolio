"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Sparkles, Bot, Globe, Layers, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Project {
    id: number;
    title: string;
    category: "AI & Automation" | "Websites" | "Custom Software";
    desc: string;
    fullDesc: string;
    images: string[];
    tags: string[];
    link?: string;
    github?: string;
    highlight?: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Aiva — WhatsApp AI Front-Desk & Booking Agent",
        category: "AI & Automation",
        desc: "Autonomous AI receptionist that qualifies leads, books consultations, and syncs CRMs on WhatsApp 24/7.",
        fullDesc: `Aiva is an intelligent AI-powered front-desk assistant built directly into WhatsApp to automate appointment bookings, customer consultations, and follow-ups. Designed for healthcare clinics, consulting practices, and appointment-driven businesses, Aiva engages leads in real time, responds in natural language across multiple languages (including English, Hindi, and Spanish), checks doctor and team availability, and securely confirms appointments in under 3 seconds.

The system updates internal CRMs automatically, sends 24-hour reminder notifications to eliminate no-shows, and delivers proactive smart suggestions during conversations to maximize booking conversion rates. Built with enterprise-grade security standards (SOC 2 Type II and HIPAA-aligned architecture), Aiva frees administrative staff from repetitive inquiries while ensuring zero missed customer leads.`,
        images: ["/projects/aiva-ai.jpg"],
        tags: ["AI Agents", "WhatsApp API", "n8n Automation", "CRM Sync", "Next.js"],
        highlight: "Automated Appointments on WhatsApp",
        link: "#contact"
    },
    {
        id: 2,
        title: "TuitionFlow AI — Autonomous Lead & Enrollment Assistant",
        category: "AI & Automation",
        desc: "24/7 conversational AI agent that qualifies coaching enquiries, schedules trial classes, and syncs student records.",
        fullDesc: `TuitionFlow AI is a high-converting, live AI assistant platform created for coaching institutes, tuition academies, and private education providers. It turns static websites into dynamic lead conversion engines with an interactive AI concierge that answers fee queries, curriculum questions, and batch timings within seconds.

Even while business owners are asleep, TuitionFlow autonomously qualifies interested parents and students, books trial sessions, and writes enriched lead data straight into the institute's CRM and email sequences. The platform demonstrates real-time conversational intelligence with instant lead capture, automated notifications, and seamless calendar synchronization.`,
        images: ["/projects/tuitionflow-ai.jpg"],
        tags: ["Generative AI", "LLM Orchestration", "Lead Capture", "Next.js", "CRM Integration"],
        highlight: "24/7 Lead Qualification & CRM Sync",
        link: "#contact"
    },
    {
        id: 3,
        title: "Akshay Computers — Enterprise IT Solutions Portal",
        category: "Websites",
        desc: "High-credibility corporate website with one-click WhatsApp lead capture for a 35+ year legacy IT provider.",
        fullDesc: `A modern, high-performance business website developed for Akshay Computers, an established IT infrastructure, CCTV, hardware repairs, and networking security provider trusted for over 35 years in Chhatrapati Sambhajinagar.

The website was architected to bridge offline brand legacy with digital conversion. It features a clean, responsive aesthetic showcasing hardware solutions, enterprise networking setups, and surveillance systems. Engineered with immediate call-to-action touchpoints—including direct WhatsApp chat integration and one-click calling—the platform dramatically streamlines commercial and residential service enquiries.`,
        images: ["/projects/akshay-computers.jpg"],
        tags: ["Next.js", "Business Website", "Tailwind CSS", "WhatsApp Integration", "SEO"],
        highlight: "Trusted for 35+ Years",
        link: "#contact"
    },
    {
        id: 4,
        title: "ConceptTwin — Adaptive STEM Learning Platform",
        category: "Custom Software",
        desc: "Interactive physics & mechanics conceptual mastery platform tailored for competitive examinations (JEE/NEET).",
        fullDesc: `ConceptTwin is an advanced digital learning application engineered to help STEM students build deep, adaptive mastery in physics mechanics and solve complex conceptual transfer problems for competitive exams like JEE and NEET.

The platform features an intuitive configuration workspace where students specify class levels, exam targets, and topic modules (such as Free-Body Diagrams, Newton's Laws, and Friction). It guides learners through personalized diagnostic simulations, targeted concept verification, and interactive problem sets designed to identify and bridge fundamental cognitive gaps before testing.`,
        images: ["/projects/concept-twin.png"],
        tags: ["React.js", "TypeScript", "EdTech Platform", "Interactive Simulations", "State Management"],
        highlight: "Adaptive Conceptual Mastery Engine",
        link: "#contact"
    },
    {
        id: 5,
        title: "Popular Sanskrit Academy — Heritage Learning Portal",
        category: "Websites",
        desc: "Serene, high-converting digital presence and course enrollment portal for traditional Indian education.",
        fullDesc: `A bespoke educational web platform designed for Popular Sanskrit Shloka Classes in Chhatrapati Sambhajinagar. The project celebrates the blend of ancient wisdom and modern living, featuring courses in Sanskrit shlokas, yoga, meditation, and value-based learning.

The website combines warm, minimalist typography with an authentic cultural visual identity. It features transparent program breakdowns, student community metrics (1,200+ students, 15+ years experience), and frictionless direct enrollment channels via phone and registration forms to make heritage learning accessible across all age groups.`,
        images: ["/projects/sanskrit-shloka.jpg"],
        tags: ["Web Development", "UI/UX Design", "Course Enrollment", "Branding", "Responsive Web"],
        highlight: "Ancient Wisdom · Modern Living",
        link: "#contact"
    },
    {
        id: 6,
        title: "CityPulse — Smart City Issue Management Platform",
        category: "Custom Software",
        desc: "AI-driven civic issue reporting and municipal management platform with live mapping and department routing.",
        fullDesc: `CityPulse is a smart, AI-driven civic issue reporting and management platform designed to bridge the gap between citizens and municipal corporations. The platform enables citizens to report real-world city issues such as infrastructure problems, sanitation, water supply, electricity, roads, and public safety through a modern and intuitive web interface.

Citizens can report complaints using text, voice-to-text input, photos, and videos, with the system automatically capturing the exact GPS location of the issue. A live interactive city map visualizes reported problems in real time, allowing users to track the status of complaints from submission to resolution.

CityPulse integrates AI and machine learning to intelligently classify complaints by department, predict issue severity, and forward them to the appropriate municipal authority with route optimization for maintenance crews.`,
        images: [
            "/projects/citypulse-1.png",
            "/projects/citypulse-2.png",
            "/projects/citypulse-3.png",
            "/projects/citypulse-4.png",
            "/projects/citypulse-5.png"
        ],
        tags: ["React.js", "Node.js", "MongoDB", "AI/ML", "Google Maps API"],
        highlight: "AI-Powered Civic Infrastructure",
        link: "#contact"
    },
    {
        id: 7,
        title: "HealthTech — Clinical Operations & Patient Portal",
        category: "Custom Software",
        desc: "Comprehensive healthcare management platform connecting doctors and patients with secure records.",
        fullDesc: `HealthTech is a comprehensive healthcare management web application designed to digitally connect doctors and patients through a secure and centralized system. The platform enables efficient handling of patient medical data, making healthcare records easily accessible, organized, and transparent.

The system allows doctors to manage medical reports, prescriptions, visit history, clinical comments, and billing details, while patients can securely view their health records, prescriptions, treatment history, visit dates, and payment information from their own dashboard.

With role-based access, HealthTech ensures data privacy and controlled information flow between doctors and patients, reducing manual paperwork and improving communication.`,
        images: [
            "/projects/healthtech-1.png",
            "/projects/healthtech-2.png",
            "/projects/healthtech-3.png",
            "/projects/healthtech-4.png"
        ],
        tags: ["React.js", "Node.js", "MongoDB", "Express.js", "TailwindCSS"],
        highlight: "Secure Healthcare System",
        link: "#contact"
    },
    {
        id: 8,
        title: "Nutrition Planner — Personalized Dietary Engine",
        category: "AI & Automation",
        desc: "Intelligent AI-based nutrition planning platform delivering custom meal recommendations and progress tracking.",
        fullDesc: `Nutrition Planner is an intelligent, AI- and ML-based web application designed to help users achieve their health and fitness goals through personalized nutrition planning. The platform collects essential user information such as age, height, weight, lifestyle, and fitness goals and analyzes this data to generate a customized diet plan.

Using data-driven insights, the system creates personalized meal plans tailored to individual needs, helping users make better dietary decisions. The application continuously tracks user progress, allowing users to monitor their nutritional journey and adjust plans based on changing goals.`,
        images: [
            "/projects/nutrition-planner-1.png",
            "/projects/nutrition-planner-2.png"
        ],
        tags: ["React.js", "Node.js", "MongoDB", "Express.js", "AI/ML"],
        highlight: "AI-Powered Diet Insights",
        link: "#contact"
    },
    {
        id: 9,
        title: "Smart Complaint Sorter",
        category: "Custom Software",
        desc: "Full-stack complaint management system with automated priority classification and analytics.",
        fullDesc: `A full-stack web application designed to efficiently collect, manage, and organize user complaints. The system allows users to submit complaints through a clean and responsive interface, which are securely stored in a database. Built with the vision of integrating AI & Machine Learning to automatically analyze, categorize, and prioritize complaints.`,
        images: ["/projects/smart-complaint-sorter.png"],
        tags: ["React.js", "Node.js", "MongoDB", "Express.js"],
        highlight: "Automated Ticket Triage",
        link: "#contact"
    }
];

const categories = ["All", "AI & Automation", "Websites", "Custom Software"] as const;

export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    const selectedProject = projects.find(p => p.id === selectedId);

    // Strict Lock body scroll when modal is open
    useEffect(() => {
        if (selectedId) {
            document.body.style.setProperty("overflow", "hidden", "important");
            document.documentElement.style.setProperty("overflow", "hidden", "important");
        } else {
            document.body.style.removeProperty("overflow");
            document.documentElement.style.removeProperty("overflow");
            document.body.style.overflow = "unset";
            document.documentElement.style.overflow = "unset";
        }
        return () => {
            document.body.style.removeProperty("overflow");
            document.documentElement.style.removeProperty("overflow");
            document.body.style.overflow = "unset";
            document.documentElement.style.overflow = "unset";
        };
    }, [selectedId]);

    // Reset image index when modal opens
    if (selectedId && selectedProject && currentImageIndex >= selectedProject.images.length) {
        setCurrentImageIndex(0);
    }

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedProject) {
            setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
        }
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedProject) {
            setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
        }
    };

    return (
        <section id="projects" className="relative py-28 md:py-32 px-6 overflow-hidden bg-[#030014]">
            {/* Ambient Background with Premium Gradients */}
            <div className="absolute -top-20 -right-20 w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[140px] opacity-40 mix-blend-screen pointer-events-none" />
            <div className="absolute top-1/2 -left-20 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] opacity-30 mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-0 right-1/3 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[120px] opacity-30 pointer-events-none" />

            {/* Content Container */}
            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-4 inline-block"
                    >
                        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            PORTFOLIO SHOWCASE
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.18] mb-5"
                    >
                        Featured{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                            Projects & Case Studies
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base sm:text-lg text-neutral-300/90 leading-relaxed font-normal"
                    >
                        Real client websites, AI automation agents, and custom web applications built for business impact, lead conversion, and operational speed.
                    </motion.p>

                    {/* Category Filter Pills */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8"
                    >
                        {categories.map((cat) => {
                            const isActive = selectedCategory === cat;
                            return (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border ${
                                        isActive
                                            ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105"
                                            : "bg-white/5 text-neutral-300 border-white/10 hover:border-white/25 hover:text-white hover:bg-white/10"
                                    }`}
                                >
                                    {cat}
                                </button>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                                onClick={() => { setSelectedId(project.id); setCurrentImageIndex(0); }}
                                whileHover={{ y: -6 }}
                                className="group relative cursor-pointer flex flex-col h-full rounded-2xl sm:rounded-3xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden backdrop-blur-md"
                            >
                                {/* Card Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                {/* Project Image with Browser Mockup Aspect Ratio */}
                                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40 border-b border-white/10">
                                    <Image
                                        src={project.images[0]}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Gradient overlay to ensure card text readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                                    {/* Category Pill Tag */}
                                    <div className="absolute top-3 left-3 z-20">
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-black/70 backdrop-blur-md border border-white/15 text-neutral-200">
                                            {project.category === "AI & Automation" && <Bot className="w-3 h-3 text-purple-400" />}
                                            {project.category === "Websites" && <Globe className="w-3 h-3 text-blue-400" />}
                                            {project.category === "Custom Software" && <Layers className="w-3 h-3 text-indigo-400" />}
                                            <span>{project.category}</span>
                                        </span>
                                    </div>

                                    {/* Quick View Button on Hover */}
                                    <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white">
                                            <ArrowUpRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>

                                {/* Content Details */}
                                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between relative z-10">
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors line-clamp-1">
                                            {project.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-neutral-300/85 line-clamp-2 leading-relaxed mb-4">
                                            {project.desc}
                                        </p>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                                        {project.tags.slice(0, 3).map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-white/5 text-neutral-400 border border-white/5"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                        {project.tags.length > 3 && (
                                            <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-white/5 text-neutral-500">
                                                +{project.tags.length - 3}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Modal Detail View */}
                <AnimatePresence>
                    {selectedId && selectedProject && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedId(null)}
                                className="absolute inset-0 bg-black/85 backdrop-blur-md"
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                transition={{ duration: 0.3 }}
                                className="relative w-full max-w-5xl bg-[#030014] border border-white/15 rounded-3xl overflow-hidden shadow-2xl z-50 flex flex-col md:grid md:grid-cols-12 max-h-[90vh]"
                            >
                                {/* Ambient Gradients inside modal */}
                                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
                                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

                                {/* Close Button */}
                                <button
                                    onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                                    className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-colors border border-white/10 backdrop-blur-md"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                {/* Left Side: Image Gallery */}
                                <div className="md:col-span-7 relative min-h-[260px] sm:min-h-[320px] md:min-h-full bg-black/60 flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
                                    <div className="relative w-full h-full p-4 sm:p-6 flex items-center justify-center">
                                        <Image
                                            src={selectedProject.images[currentImageIndex]}
                                            alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                                            fill
                                            className="object-contain p-2 sm:p-4"
                                            priority
                                        />
                                    </div>

                                    {/* Pagination Controls if multiple images */}
                                    {selectedProject.images.length > 1 && (
                                        <>
                                            <button
                                                onClick={prevImage}
                                                className="absolute left-3 p-2 rounded-full bg-black/60 hover:bg-white/20 text-white transition-all z-10 border border-white/10"
                                            >
                                                ←
                                            </button>
                                            <button
                                                onClick={nextImage}
                                                className="absolute right-3 p-2 rounded-full bg-black/60 hover:bg-white/20 text-white transition-all z-10 border border-white/10"
                                            >
                                                →
                                            </button>
                                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                                                {selectedProject.images.map((_, idx) => (
                                                    <div
                                                        key={idx}
                                                        className={`w-2 h-2 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-primary' : 'bg-white/30'}`}
                                                    />
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Right Side: Content & Actions */}
                                <div
                                    className="md:col-span-5 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between h-full bg-transparent relative z-10 max-h-[50vh] md:max-h-[85vh]"
                                    data-lenis-prevent
                                >
                                    <div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/25 text-blue-300">
                                                {selectedProject.category}
                                            </span>
                                            {selectedProject.highlight && (
                                                <span className="text-[11px] font-mono text-emerald-400">
                                                    • {selectedProject.highlight}
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
                                            {selectedProject.title}
                                        </h3>

                                        <p className="text-sm font-medium text-neutral-300 mb-5 leading-snug">
                                            {selectedProject.desc}
                                        </p>

                                        <div className="text-xs sm:text-sm text-neutral-300/90 leading-relaxed mb-6 whitespace-pre-line space-y-3 font-normal">
                                            {selectedProject.fullDesc}
                                        </div>

                                        <div className="mb-6">
                                            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2.5">
                                                Technologies & Integrations
                                            </h4>
                                            <div className="flex flex-wrap gap-1.5">
                                                {selectedProject.tags.map(tag => (
                                                    <span key={tag} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-neutral-300">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action CTAs */}
                                    <div className="pt-4 border-t border-white/10 mt-auto flex flex-col sm:flex-row gap-3">
                                        <Link
                                            href="#contact"
                                            onClick={() => setSelectedId(null)}
                                            className="flex-1 px-5 py-3 rounded-full bg-white text-black font-semibold text-sm flex items-center justify-center gap-2 hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                                        >
                                            <span>Discuss Similar Project</span>
                                            <ArrowUpRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}

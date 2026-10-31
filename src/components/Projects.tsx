"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
    X,
    ExternalLink,
    Sparkles,
    Bot,
    Globe,
    Layers,
    ArrowUpRight,
    ArrowRight,
    ChevronDown,
    ChevronUp,
    SlidersHorizontal,
} from "lucide-react";
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
        link: "#contact",
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
        link: "#contact",
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
        link: "#contact",
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
        link: "#contact",
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
        link: "#contact",
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
            "/projects/citypulse-5.png",
        ],
        tags: ["React.js", "Node.js", "MongoDB", "AI/ML", "Google Maps API"],
        highlight: "AI-Powered Civic Infrastructure",
        link: "#contact",
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
            "/projects/healthtech-4.png",
        ],
        tags: ["React.js", "Node.js", "MongoDB", "Express.js", "TailwindCSS"],
        highlight: "Secure Healthcare System",
        link: "#contact",
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
            "/projects/nutrition-planner-2.png",
        ],
        tags: ["React.js", "Node.js", "MongoDB", "Express.js", "AI/ML"],
        highlight: "AI-Powered Diet Insights",
        link: "#contact",
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
        link: "#contact",
    },
];

const categoryTabs = [
    { label: "All", count: projects.length },
    { label: "AI & Automation", count: projects.filter((p) => p.category === "AI & Automation").length },
    { label: "Websites", count: projects.filter((p) => p.category === "Websites").length },
    { label: "Custom Software", count: projects.filter((p) => p.category === "Custom Software").length },
] as const;

// Staggered vertical offsets inspired by the reference CSS nth-child layout
const STAGGER_OFFSETS = [
    "-translate-y-3",
    "translate-y-6",
    "-translate-y-6",
    "translate-y-4",
    "-translate-y-4",
    "translate-y-5",
    "-translate-y-2",
    "translate-y-3",
    "-translate-y-5",
];

export default function Projects() {
    const shouldReduceMotion = useReducedMotion();
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const [showAll, setShowAll] = useState(false);

    // Filter projects based on active category
    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter((p) => p.category === selectedCategory);

    // Initial limit: 6 featured projects in the primary row, expand to all on toggle
    const displayedProjects = selectedCategory === "All" && !showAll
        ? filteredProjects.slice(0, 6)
        : filteredProjects;

    const selectedProject = projects.find((p) => p.id === selectedId);

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

    // Handle Escape key to close modal
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setSelectedId(null);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

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
        <section id="projects" className="relative py-28 md:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#030014]">
            {/* Ambient Background with Cosmic Gradients */}
            <div className="absolute -top-28 -right-20 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[150px] opacity-40 mix-blend-screen pointer-events-none" />
            <div className="absolute top-1/2 -left-28 w-[650px] h-[650px] bg-blue-600/15 rounded-full blur-[150px] opacity-35 mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[130px] opacity-30 pointer-events-none" />

            {/* Content Container */}
            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
                    <motion.div
                        initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-4 inline-block"
                    >
                        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                            <SlidersHorizontal className="w-3.5 h-3.5 text-blue-400" />
                            INTERACTIVE EXPANDING SHOWCASE
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
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
                        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base sm:text-lg text-neutral-300/90 leading-relaxed font-normal"
                    >
                        Hover over any project panel to expand it horizontally. Neighboring cards contract smoothly to reveal the active case study.
                    </motion.p>

                    {/* Category Filter Pills */}
                    <motion.div
                        initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8"
                    >
                        {categoryTabs.map((cat) => {
                            const isActive = selectedCategory === cat.label;
                            return (
                                <button
                                    key={cat.label}
                                    onClick={() => {
                                        setSelectedCategory(cat.label);
                                        setShowAll(false);
                                        setHoveredId(null);
                                    }}
                                    className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border ${
                                        isActive
                                            ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.25)] scale-105"
                                            : "bg-white/5 text-neutral-300 border-white/10 hover:border-white/25 hover:text-white hover:bg-white/10"
                                    }`}
                                >
                                    <span>{cat.label}</span>
                                    <span
                                        className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
                                            isActive
                                                ? "bg-black/15 text-black font-bold"
                                                : "bg-white/10 text-neutral-400"
                                        }`}
                                    >
                                        {cat.count}
                                    </span>
                                </button>
                            );
                        })}
                    </motion.div>
                </div>

                {/* ============================================================== */}
                {/* HORIZONTAL EXPANDING FLEX CARDS GALLERY                        */}
                {/* Desktop: Animated flexbox row where hovered card expands       */}
                {/* Mobile: Touch-friendly horizontal swipe or responsive stack    */}
                {/* ============================================================== */}
                <div
                    onMouseLeave={() => setHoveredId(null)}
                    className="hidden md:flex w-full h-[520px] lg:h-[580px] gap-3 lg:gap-4 items-stretch py-8"
                >
                    {displayedProjects.map((project, index) => {
                        const isHovered = hoveredId === project.id;
                        const isAnyHovered = hoveredId !== null;
                        const staggerClass = shouldReduceMotion ? "" : STAGGER_OFFSETS[index % STAGGER_OFFSETS.length];

                        // Flexible width ratio:
                        // When hovered, active card gets flex-[5] (~50-55% width).
                        // Inactive cards contract to flex-[0.8] (~8-10% width).
                        // When no card is hovered, all cards share equal flex-[1].
                        const flexStyle = isHovered
                            ? "flex-[5]"
                            : isAnyHovered
                            ? "flex-[0.8]"
                            : "flex-[1]";

                        // Opacity: active card 100%, inactive cards 35-40%, resting cards 90-100%
                        const opacityStyle = isHovered
                            ? "opacity-100"
                            : isAnyHovered
                            ? "opacity-35 hover:opacity-75"
                            : "opacity-90 hover:opacity-100";

                        // Vertical stagger resets to translate-y-0 when hovered
                        const currentTransform = isHovered
                            ? "translate-y-0 scale-[1.01]"
                            : isAnyHovered
                            ? `${staggerClass} scale-[0.98]`
                            : staggerClass;

                        return (
                            <div
                                key={project.id}
                                onMouseEnter={() => setHoveredId(project.id)}
                                onClick={() => {
                                    setSelectedId(project.id);
                                    setCurrentImageIndex(0);
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        setSelectedId(project.id);
                                    }
                                }}
                                tabIndex={0}
                                role="button"
                                aria-label={`View ${project.title}`}
                                style={{
                                    transition: shouldReduceMotion
                                        ? "opacity 300ms ease"
                                        : "flex 700ms cubic-bezier(0.25, 1, 0.5, 1), transform 700ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease, border-color 300ms ease",
                                }}
                                className={`group relative h-full rounded-2xl lg:rounded-3xl overflow-hidden cursor-pointer border select-none ${flexStyle} ${opacityStyle} ${currentTransform} ${
                                    isHovered
                                        ? "border-primary/60 shadow-[0_25px_60px_-10px_rgba(59,130,246,0.45)] z-30"
                                        : "border-white/10 hover:border-white/25 shadow-[0_15px_35px_rgba(0,0,0,0.6)] z-10"
                                } bg-[#07051a]`}
                            >
                                {/* Full-bleed Project Screenshot with Zoom on Hover */}
                                <div className="absolute inset-0 w-full h-full">
                                    <Image
                                        src={project.images[0]}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 1200px) 70vw, 55vw"
                                        className={`object-cover object-top transition-transform duration-700 ease-out ${
                                            isHovered ? "scale-105" : "scale-100"
                                        }`}
                                    />
                                    {/* Multi-stage gradient scrim for text legibility */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/60 to-transparent transition-opacity duration-500 ${
                                            isHovered ? "opacity-95" : "opacity-75"
                                        }`}
                                    />
                                    {/* Subtle Glass Rim & Vignette */}
                                    <div className="absolute inset-0 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.2)] pointer-events-none" />
                                </div>

                                {/* ============================================================== */}
                                {/* EXPANDED CARD STATE (Visible when this card is active)         */}
                                {/* ============================================================== */}
                                <div
                                    className={`absolute inset-0 p-6 lg:p-8 flex flex-col justify-between z-20 transition-all duration-500 ${
                                        isHovered
                                            ? "opacity-100 pointer-events-auto delay-150"
                                            : "opacity-0 pointer-events-none"
                                    }`}
                                >
                                    {/* Top Metadata Bar */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-black/75 backdrop-blur-md border border-white/20 text-neutral-200">
                                                {project.category === "AI & Automation" && (
                                                    <Bot className="w-3.5 h-3.5 text-purple-400" />
                                                )}
                                                {project.category === "Websites" && (
                                                    <Globe className="w-3.5 h-3.5 text-blue-400" />
                                                )}
                                                {project.category === "Custom Software" && (
                                                    <Layers className="w-3.5 h-3.5 text-indigo-400" />
                                                )}
                                                <span>{project.category}</span>
                                            </span>
                                            {project.highlight && (
                                                <span className="hidden sm:inline-block text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                                                    {project.highlight}
                                                </span>
                                            )}
                                        </div>

                                        <span className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.6)]">
                                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                        </span>
                                    </div>

                                    {/* Bottom Content Area */}
                                    <div className="max-w-xl">
                                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight tracking-tight drop-shadow-sm">
                                            {project.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-neutral-300/90 leading-relaxed mb-4 line-clamp-2">
                                            {project.desc}
                                        </p>

                                        {/* Tech Badges & CTA */}
                                        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10">
                                            <div className="flex flex-wrap gap-1.5">
                                                {project.tags.slice(0, 4).map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-white/10 text-neutral-200 border border-white/10 backdrop-blur-sm"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
                                                <span>View Case Study</span>
                                                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* ============================================================== */}
                                {/* CONTRACTED CARD STATE (Vertical label visible when not hovered) */}
                                {/* ============================================================== */}
                                <div
                                    className={`absolute inset-0 p-4 flex flex-col justify-between items-center z-10 transition-opacity duration-300 ${
                                        isHovered ? "opacity-0 pointer-events-none" : "opacity-100"
                                    }`}
                                >
                                    {/* Top Number / Icon */}
                                    <span className="text-[11px] font-mono text-neutral-400 px-2 py-0.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
                                        0{index + 1}
                                    </span>

                                    {/* Vertical Rotated Project Title (Architectural Accordion Look) */}
                                    <div className="flex-1 flex items-center justify-center my-4 overflow-hidden">
                                        <span
                                            style={{ writingMode: "vertical-rl" }}
                                            className="text-xs lg:text-sm font-semibold tracking-wider text-neutral-300 whitespace-nowrap rotate-180 truncate max-h-[280px]"
                                        >
                                            {project.title.split("—")[0].trim()}
                                        </span>
                                    </div>

                                    {/* Bottom Mini Category Icon */}
                                    <div className="w-7 h-7 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-neutral-400">
                                        {project.category === "AI & Automation" && <Bot className="w-3.5 h-3.5 text-purple-400" />}
                                        {project.category === "Websites" && <Globe className="w-3.5 h-3.5 text-blue-400" />}
                                        {project.category === "Custom Software" && <Layers className="w-3.5 h-3.5 text-indigo-400" />}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* ============================================================== */}
                {/* MOBILE / TABLET FALLBACK: Touch-Friendly Carousel Grid         */}
                {/* ============================================================== */}
                <div className="md:hidden flex flex-col gap-6">
                    {displayedProjects.map((project, index) => (
                        <div
                            key={project.id}
                            onClick={() => {
                                setSelectedId(project.id);
                                setCurrentImageIndex(0);
                            }}
                            className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#07051a] shadow-xl cursor-pointer"
                        >
                            <div className="relative aspect-[16/10] w-full">
                                <Image
                                    src={project.images[0]}
                                    alt={project.title}
                                    fill
                                    className="object-cover object-top"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/40 to-transparent" />
                                <div className="absolute top-3 left-3">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-black/75 backdrop-blur-md border border-white/15 text-neutral-200">
                                        {project.category === "AI & Automation" && <Bot className="w-3 h-3 text-purple-400" />}
                                        {project.category === "Websites" && <Globe className="w-3 h-3 text-blue-400" />}
                                        {project.category === "Custom Software" && <Layers className="w-3 h-3 text-indigo-400" />}
                                        <span>{project.category}</span>
                                    </span>
                                </div>
                                <div className="absolute top-3 right-3">
                                    <span className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center shadow-md">
                                        <ArrowUpRight className="w-3.5 h-3.5" />
                                    </span>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="text-base font-bold text-white mb-1.5">{project.title}</h3>
                                <p className="text-xs text-neutral-300/85 line-clamp-2 mb-3">{project.desc}</p>
                                <div className="flex flex-wrap gap-1">
                                    {project.tags.slice(0, 3).map((tag) => (
                                        <span key={tag} className="px-2 py-0.5 rounded text-[10px] bg-white/5 border border-white/5 text-neutral-400">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* "View All Projects" / "Show Less" Expand Toggle */}
                {selectedCategory === "All" && filteredProjects.length > 6 && (
                    <div className="mt-14 text-center">
                        <button
                            onClick={() => {
                                setShowAll((prev) => !prev);
                                setHoveredId(null);
                            }}
                            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md text-sm font-semibold text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.06)] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] active:scale-95"
                        >
                            {showAll ? (
                                <>
                                    <span>Show Less Featured Projects</span>
                                    <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 text-blue-400" />
                                </>
                            ) : (
                                <>
                                    <span>View All Projects ({filteredProjects.length})</span>
                                    <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5 text-blue-400" />
                                </>
                            )}
                        </button>
                    </div>
                )}

                {/* Polished Project Detail Modal */}
                <AnimatePresence>
                    {selectedId && selectedProject && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
                            {/* Backdrop with Blur */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedId(null)}
                                className="absolute inset-0 bg-black/85 backdrop-blur-md"
                            />

                            {/* Modal Card */}
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
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedId(null);
                                    }}
                                    className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-colors border border-white/10 backdrop-blur-md"
                                    aria-label="Close case study modal"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                {/* Left Side: Image Gallery */}
                                <div className="md:col-span-7 relative min-h-[260px] sm:min-h-[320px] md:min-h-full bg-black/75 flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
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
                                                aria-label="Previous image"
                                            >
                                                ←
                                            </button>
                                            <button
                                                onClick={nextImage}
                                                className="absolute right-3 p-2 rounded-full bg-black/60 hover:bg-white/20 text-white transition-all z-10 border border-white/10"
                                                aria-label="Next image"
                                            >
                                                →
                                            </button>
                                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                                                {selectedProject.images.map((_, idx) => (
                                                    <div
                                                        key={idx}
                                                        className={`w-2 h-2 rounded-full transition-colors ${
                                                            idx === currentImageIndex ? "bg-primary" : "bg-white/30"
                                                        }`}
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
                                                {selectedProject.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-neutral-300"
                                                    >
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

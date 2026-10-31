"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
    X,
    ExternalLink,
    Bot,
    Globe,
    Layers,
    ArrowUpRight,
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    Compass,
    Sparkles,
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

export default function Projects() {
    const shouldReduceMotion = useReducedMotion();
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    // Active project pool according to selected category
    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter((p) => p.category === selectedCategory);

    // -------------------------------------------------------------------------
    // 3D CONCAVE CYLINDER GEOMETRY & DRAG PHYSICS
    // -------------------------------------------------------------------------
    const containerRef = useRef<HTMLDivElement>(null);
    const [rotation, setRotation] = useState(0);
    const isDraggingRef = useRef(false);
    const startXRef = useRef(0);
    const startRotRef = useRef(0);
    const dragDistanceRef = useRef(0);
    const velocityRef = useRef(0);
    const lastXRef = useRef(0);
    const lastTimeRef = useRef(0);
    const animFrameRef = useRef<number | null>(null);
    const [isHoveredOverStage, setIsHoveredOverStage] = useState(false);

    // Dynamic radius based on viewport width
    const [cylinderRadius, setCylinderRadius] = useState(580);

    useEffect(() => {
        const updateRadius = () => {
            if (window.innerWidth < 640) {
                setCylinderRadius(360);
            } else if (window.innerWidth < 1024) {
                setCylinderRadius(480);
            } else {
                setCylinderRadius(580);
            }
        };
        updateRadius();
        window.addEventListener("resize", updateRadius);
        return () => window.removeEventListener("resize", updateRadius);
    }, []);

    // Angular distribution: spacing between each card along the cylinder circumference
    const totalItems = filteredProjects.length;
    const angleStep = totalItems > 0 ? 360 / Math.max(totalItems, 6) : 60;

    // Smooth continuous auto-drift: swift continuous round speed (approx 11-12 degrees per second)
    useEffect(() => {
        if (shouldReduceMotion) return;

        let lastTimestamp = performance.now();
        const loop = (time: number) => {
            const dt = (time - lastTimestamp) / 1000;
            lastTimestamp = time;

            if (!isDraggingRef.current && !selectedId) {
                // If hovered directly over a card, slow down to give time to click; otherwise spin at swift speed (~11.5 deg/s)
                const speed = hoveredId !== null ? 2.5 : 11.5;
                setRotation((prev) => prev - speed * dt);
            }

            animFrameRef.current = requestAnimationFrame(loop);
        };

        animFrameRef.current = requestAnimationFrame(loop);
        return () => {
            if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
        };
    }, [hoveredId, selectedId, shouldReduceMotion]);

    // Pointer events for intuitive drag / swipe around the concave wall
    const handlePointerDown = (e: React.PointerEvent) => {
        isDraggingRef.current = true;
        startXRef.current = e.clientX;
        startRotRef.current = rotation;
        lastXRef.current = e.clientX;
        lastTimeRef.current = performance.now();
        dragDistanceRef.current = 0;
        velocityRef.current = 0;
    };

    const handlePointerMove = (e: React.PointerEvent) => {
        if (!isDraggingRef.current) return;
        const deltaX = e.clientX - startXRef.current;
        dragDistanceRef.current = Math.abs(deltaX);

        // Responsive drag sensitivity: 0.22 degrees per pixel
        const newRot = startRotRef.current + deltaX * 0.22;
        setRotation(newRot);

        const now = performance.now();
        const dt = now - lastTimeRef.current;
        if (dt > 10) {
            velocityRef.current = (e.clientX - lastXRef.current) / dt;
            lastXRef.current = e.clientX;
            lastTimeRef.current = now;
        }
    };

    const handlePointerUp = () => {
        if (!isDraggingRef.current) return;
        isDraggingRef.current = false;

        // Apply momentum on release
        if (Math.abs(velocityRef.current) > 0.3 && !shouldReduceMotion) {
            const momentum = velocityRef.current * 16;
            setRotation((prev) => prev + momentum);
        }
    };

    const rotateBy = (deltaDeg: number) => {
        setRotation((prev) => prev + deltaDeg);
    };

    // Keyboard navigation (Left / Right arrow keys)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedId) return;
            if (e.key === "ArrowLeft") {
                rotateBy(angleStep);
            } else if (e.key === "ArrowRight") {
                rotateBy(-angleStep);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [angleStep, selectedId]);

    // Modal scroll lock
    const selectedProject = projects.find((p) => p.id === selectedId);

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

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setSelectedId(null);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

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
        <section
            id="projects"
            className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#030014] select-none"
        >
            {/* Ambient Background Glows */}
            <div className="absolute -top-32 -right-20 w-[450px] h-[450px] bg-purple-600/15 rounded-full blur-[140px] opacity-40 mix-blend-screen pointer-events-none" />
            <div className="absolute top-1/2 -left-28 w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-[140px] opacity-35 mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-6 right-1/4 w-[380px] h-[380px] bg-indigo-500/10 rounded-full blur-[120px] opacity-25 pointer-events-none" />

            {/* Reflective Ground Glow */}
            <div className="absolute bottom-4 inset-x-0 h-28 bg-gradient-to-t from-primary/10 via-accent/5 to-transparent blur-2xl pointer-events-none -z-10" />

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
                    <motion.div
                        initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-3 inline-block"
                    >
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                            <Compass className="w-3 h-3 text-blue-400" />
                            3D CONCAVE CYLINDER GALLERY
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-[1.2] mb-3"
                    >
                        Featured{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                            Projects & 3D Wall
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="text-xs sm:text-sm text-neutral-300/85 leading-relaxed font-normal max-w-2xl mx-auto"
                    >
                        A continuous gallery wall curving seamlessly around the viewer. Drag horizontally or click any project to inspect the case study.
                    </motion.p>

                    {/* Category Filter Pills */}
                    <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-5">
                        {categoryTabs.map((cat) => {
                            const isActive = selectedCategory === cat.label;
                            return (
                                <button
                                    key={cat.label}
                                    onClick={() => {
                                        setSelectedCategory(cat.label);
                                        setRotation(0);
                                        setHoveredId(null);
                                    }}
                                    className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 border ${
                                        isActive
                                            ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.25)] scale-105"
                                            : "bg-white/5 text-neutral-300 border-white/10 hover:border-white/25 hover:text-white hover:bg-white/10"
                                    }`}
                                >
                                    <span>{cat.label}</span>
                                    <span
                                        className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
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
                    </div>
                </div>

                {/* ============================================================== */}
                {/* 3D CONCAVE CYLINDRICAL STAGE (Balanced Medium Scale)           */}
                {/* ============================================================== */}
                <div
                    ref={containerRef}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    onPointerCancel={handlePointerUp}
                    onMouseEnter={() => setIsHoveredOverStage(true)}
                    onMouseLeave={() => {
                        setIsHoveredOverStage(false);
                        handlePointerUp();
                    }}
                    className="relative w-full h-[370px] sm:h-[420px] md:h-[470px] flex items-center justify-center cursor-grab active:cursor-grabbing touch-pan-y"
                    style={{
                        perspective: "1300px",
                        perspectiveOrigin: "50% 50%",
                    }}
                >
                    {/* Concave Carousel Hub */}
                    <div
                        style={{
                            transformStyle: "preserve-3d",
                            transform: `translateZ(-${cylinderRadius + 50}px) rotateY(${rotation}deg)`,
                            transition: isDraggingRef.current ? "none" : "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                        className="relative w-full h-full flex items-center justify-center pointer-events-none"
                    >
                        {filteredProjects.map((project, index) => {
                            const cardAngle = index * angleStep;
                            // Calculate current angle relative to camera front (0 deg = facing viewer)
                            const netAngle = ((cardAngle + rotation) % 360 + 540) % 360 - 180;
                            const isHovered = hoveredId === project.id;

                            // Scale & Opacity based on distance from front
                            const distanceFactor = Math.cos((netAngle * Math.PI) / 180);
                            const baseScale = Math.max(0.7, Math.min(1.0, 0.7 + distanceFactor * 0.3));
                            const baseOpacity = Math.max(0.28, Math.min(1, 0.28 + distanceFactor * 0.72));

                            return (
                                <div
                                    key={project.id}
                                    style={{
                                        position: "absolute",
                                        transformStyle: "preserve-3d",
                                        transform: `rotateY(${cardAngle}deg) translateZ(${cylinderRadius}px) scale(${
                                            isHovered ? baseScale * 1.05 : baseScale
                                        })`,
                                        opacity: isHovered ? 1 : baseOpacity,
                                        zIndex: isHovered ? 50 : Math.round(distanceFactor * 30) + 10,
                                        transition: isDraggingRef.current
                                            ? "opacity 0.2s ease"
                                            : "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease",
                                    }}
                                    onMouseEnter={() => setHoveredId(project.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                    onClick={(e) => {
                                        if (dragDistanceRef.current > 6) {
                                            e.preventDefault();
                                            return;
                                        }
                                        setSelectedId(project.id);
                                        setCurrentImageIndex(0);
                                    }}
                                    className="pointer-events-auto w-[220px] sm:w-[265px] md:w-[305px] rounded-2xl p-3 sm:p-3.5 bg-[#07051a]/95 backdrop-blur-2xl border border-white/15 hover:border-primary/60 transition-colors shadow-[0_20px_45px_rgba(0,0,0,0.85)] flex flex-col justify-between cursor-pointer group"
                                >
                                    {/* Physical Bevel Rim */}
                                    <div className="absolute inset-0 rounded-2xl pointer-events-none shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.25),inset_1px_0_1px_0_rgba(255,255,255,0.1)]" />

                                    {/* Hover Ambient Glow */}
                                    <div
                                        className={`absolute -inset-1 rounded-[22px] bg-gradient-to-r from-blue-500/25 via-purple-500/20 to-indigo-500/25 blur-xl transition-opacity duration-300 pointer-events-none -z-10 ${
                                            isHovered ? "opacity-100" : "opacity-0"
                                        }`}
                                    />

                                    {/* Browser-styled Screenshot Frame */}
                                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-black/80 border border-white/10 mb-2.5 shadow-inner">
                                        {/* Chrome top bar */}
                                        <div className="absolute top-0 inset-x-0 h-5 px-2.5 bg-black/60 backdrop-blur-md border-b border-white/10 z-20 flex items-center justify-between">
                                            <div className="flex items-center gap-1.5">
                                                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-400/80" />
                                                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-400/80" />
                                                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400/80" />
                                            </div>
                                            <span className="text-[10px] font-mono text-neutral-400 truncate max-w-[120px] px-1.5 rounded bg-white/5 border border-white/5">
                                                {project.highlight || project.category}
                                            </span>
                                            <div className="w-4" />
                                        </div>

                                        <Image
                                            src={project.images[0]}
                                            alt={project.title}
                                            fill
                                            sizes="(max-width: 768px) 265px, 305px"
                                            className="object-cover object-top pt-5 transition-transform duration-700 ease-out group-hover:scale-105"
                                        />

                                        {/* Vignette */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/90 via-[#030014]/15 to-transparent opacity-70 group-hover:opacity-30 transition-opacity pointer-events-none" />

                                        {/* Category Pill */}
                                        <div className="absolute bottom-2 left-2 z-20">
                                            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-black/80 backdrop-blur-md border border-white/20 text-neutral-200 shadow-sm">
                                                {project.category === "AI & Automation" && (
                                                    <Bot className="w-3 h-3 text-purple-400" />
                                                )}
                                                {project.category === "Websites" && (
                                                    <Globe className="w-3 h-3 text-blue-400" />
                                                )}
                                                {project.category === "Custom Software" && (
                                                    <Layers className="w-3 h-3 text-indigo-400" />
                                                )}
                                                <span className="truncate max-w-[95px]">{project.category}</span>
                                            </span>
                                        </div>

                                        {/* Quick View Button */}
                                        <div className="absolute bottom-2 right-2 z-20 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                                            <span className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center shadow-md">
                                                <ArrowUpRight className="w-3 h-3" />
                                            </span>
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-sm sm:text-base font-bold text-white mb-1 group-hover:text-blue-300 transition-colors line-clamp-1 tracking-tight">
                                                {project.title}
                                            </h3>
                                            <p className="text-xs text-neutral-300/85 line-clamp-2 leading-relaxed mb-2.5">
                                                {project.desc}
                                            </p>
                                        </div>

                                        {/* Tags & Action Link */}
                                        <div className="flex items-center justify-between gap-1.5 pt-2 border-t border-white/10 mt-auto">
                                            <div className="flex flex-wrap gap-1">
                                                {project.tags.slice(0, 2).map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-white/5 text-neutral-400 border border-white/5 truncate max-w-[85px]"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-400 group-hover:text-blue-300 transition-colors shrink-0">
                                                <span>View</span>
                                                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Navigation Arrows on Left and Right of Concave Wall */}
                    <button
                        onClick={() => rotateBy(angleStep)}
                        className="absolute left-1 sm:left-4 z-40 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-white/20 text-white backdrop-blur-md border border-white/15 transition-all hover:scale-110 shadow-lg"
                        aria-label="Rotate left"
                    >
                        <ChevronLeft className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                    </button>
                    <button
                        onClick={() => rotateBy(-angleStep)}
                        className="absolute right-1 sm:right-4 z-40 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-white/20 text-white backdrop-blur-md border border-white/15 transition-all hover:scale-110 shadow-lg"
                        aria-label="Rotate right"
                    >
                        <ChevronRight className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                    </button>
                </div>

                {/* Drag Guidance Cue */}
                <div className="text-center mt-3 text-[11px] text-neutral-400 flex items-center justify-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                    <span>Drag horizontally or use arrow keys (← / →) to rotate the 3D gallery wall</span>
                </div>

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

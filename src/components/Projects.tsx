"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Project {
    id: number;
    title: string;
    desc: string;
    fullDesc: string;
    images: string[];
    tags: string[];
    link?: string;
    github?: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Smart Complaint Sorter",
        desc: "Full-stack complaint management system with planned AI integration.",
        fullDesc: "A full-stack web application designed to efficiently collect, manage, and organize user complaints. The system allows users to submit complaints through a clean and responsive interface, which are securely stored in a database. Built with the vision of integrating AI & Machine Learning to automatically analyze, categorize, and prioritize complaints. Future Scope includes AI/ML-based classification and priority detection.",
        images: ["/projects/smart-complaint-sorter.png"],
        tags: ["React.js", "Node.js", "MongoDB", "Express.js"],
        link: "#",
        github: "#"
    },
    {
        id: 2,
        title: "HealthTech",
        desc: "Comprehensive healthcare management platform for doctors and patients.",
        fullDesc: `HealthTech is a comprehensive healthcare management web application designed to digitally connect doctors and patients through a secure and centralized system. The platform enables efficient handling of patient medical data, making healthcare records easily accessible, organized, and transparent.

The system allows doctors to manage medical reports, prescriptions, visit history, clinical comments, and billing details, while patients can securely view their health records, prescriptions, treatment history, visit dates, and payment information from their own dashboard.

With role-based access, HealthTech ensures data privacy and controlled information flow between doctors and patients. The platform focuses on simplifying medical record management, reducing manual paperwork, and improving communication between healthcare providers and patients through a modern, user-friendly web interface.`,
        images: [
            "/projects/healthtech-1.png",
            "/projects/healthtech-2.png",
            "/projects/healthtech-3.png",
            "/projects/healthtech-4.png"
        ],
        tags: ["React.js", "Node.js", "MongoDB", "Express.js", "TailwindCSS"],
        link: "#",
        github: "#"
    },
    {
        id: 3,
        title: "Nutrition Planner",
        desc: "AI-based personalized nutrition planning platform.",
        fullDesc: `Nutrition Planner is an intelligent, AI- and ML-based web application designed to help users achieve their health and fitness goals through personalized nutrition planning. The platform collects essential user information such as age, height, weight, lifestyle, and fitness goals (weight gain, weight loss, or maintenance) and analyzes this data to generate a customized diet plan.

Using data-driven insights, the system creates personalized meal plans tailored to individual needs, helping users make better dietary decisions. The application continuously tracks user progress, allowing users to monitor their nutritional journey, stay consistent, and adjust plans based on changing goals or performance.

The platform features a clean, modern interface with secure authentication, ensuring a smooth user experience from onboarding to daily usage. With built-in goal setting and progress tracking, the Nutrition Planner acts as a digital health companion, combining technology and nutrition science to promote a healthier lifestyle through smart automation and AI-powered recommendations.`,
        images: [
            "/projects/nutrition-planner-1.png",
            "/projects/nutrition-planner-2.png"
        ],
        tags: ["React.js", "Node.js", "MongoDB", "Express.js", "AI/ML"],
        link: "#",
        github: "#"
    },
    {
        id: 4,
        title: "CityPulse",
        desc: "AI-driven civic issue reporting and management platform.",
        fullDesc: `CityPulse is a smart, AI-driven civic issue reporting and management platform designed to bridge the gap between citizens and municipal corporations. The platform enables citizens to report real-world city issues such as infrastructure problems, sanitation, water supply, electricity, roads, and public safety through a modern and intuitive web interface.

Citizens can report complaints using text, voice-to-text input, photos, and videos, with the system automatically capturing the exact GPS location of the issue. A live interactive city map visualizes reported problems in real time, allowing users to track the status of complaints from submission to resolution. Users also receive real-time updates, notifications, and can engage in community discussions, comments, and voting to highlight critical issues.

CityPulse integrates AI and machine learning to intelligently analyze complaints. The system automatically classifies issues by department (such as water, electricity, roads, or maintenance), predicts issue severity, and forwards the complaint to the appropriate municipal authority. Advanced AI features like severity prediction, community impact analysis, smart route optimization for maintenance crews, and an AI chatbot enhance operational efficiency and decision-making.

The platform offers two dedicated dashboards:
Citizen Dashboard for reporting issues, tracking progress, viewing maps, and participating in discussions.
Municipal Admin Dashboard for reviewing, prioritizing, assigning, and resolving complaints with analytics and real-time insights.

With its clean UI, role-based access, AI-powered automation, and real-time tracking, CityPulse provides a scalable digital solution for smarter cities and faster civic issue resolution.`,
        images: [
            "/projects/citypulse-1.png",
            "/projects/citypulse-2.png",
            "/projects/citypulse-3.png",
            "/projects/citypulse-4.png",
            "/projects/citypulse-5.png"
        ],
        tags: ["React.js", "Node.js", "MongoDB", "Express.js", "AI/ML", "Google Maps API"],
        link: "#",
        github: "#"
    }
];

export default function Projects() {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const selectedProject = projects.find(p => p.id === selectedId);

    // Strict Lock body scroll when modal is open
    useEffect(() => {
        if (selectedId) {
            document.body.style.setProperty('overflow', 'hidden', 'important');
            document.documentElement.style.setProperty('overflow', 'hidden', 'important');
        } else {
            document.body.style.removeProperty('overflow');
            document.documentElement.style.removeProperty('overflow');
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
        }
        return () => {
            document.body.style.removeProperty('overflow');
            document.documentElement.style.removeProperty('overflow');
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
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
        <section className="relative py-24 px-6 overflow-hidden">
            {/* Ambient Background with Premium Gradients */}
            <div className="absolute inset-0 bg-[#030014]" /> {/* Deep Cosmic Black/Purple Base */}

            {/* Gradient Orbs */}
            <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] opacity-40 mix-blend-screen" />
            <div className="absolute top-1/2 -left-20 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] opacity-30 mix-blend-screen" />
            <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[100px] opacity-30" />

            {/* Content Container */}
            <div className="container mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-16"
                >
                    Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Projects</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            layoutId={`card-container-${project.id}`}
                            onClick={() => { setSelectedId(project.id); setCurrentImageIndex(0); }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10 }}
                            viewport={{ once: true }}
                            className="group relative cursor-pointer"
                        >
                            {/* Card Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="aspect-square rounded-2xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-primary/50 transition-colors relative z-10 backdrop-blur-sm">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                                <Image
                                    src={project.images[0]}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{project.title}</h3>
                                    <p className="text-sm text-gray-300 line-clamp-2">{project.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedId && selectedProject && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedId(null)}
                                className="absolute inset-0 bg-black/90 backdrop-blur-md"
                            />
                            <motion.div
                                layoutId={`card-container-${selectedId}`}
                                className="relative w-full max-w-5xl bg-[#030014] border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-50 flex flex-col md:grid md:grid-cols-2 h-[85vh] md:h-[80vh]"
                            >
                                {/* Modal Background Gradients */}
                                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
                                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

                                <button
                                    onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                                    className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-white/20 text-white z-50 transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                <div className="relative h-64 md:h-full w-full bg-black/30 flex items-center justify-center overflow-hidden border-r border-white/5">
                                    <Image
                                        src={selectedProject.images[currentImageIndex]}
                                        alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                                        fill
                                        className="object-contain p-4 md:p-8"
                                    />

                                    {selectedProject.images.length > 1 && (
                                        <>
                                            <button
                                                onClick={prevImage}
                                                className="absolute left-4 p-2 rounded-full bg-black/50 hover:bg-white/20 text-white transition-opacity z-10"
                                            >
                                                ←
                                            </button>
                                            <button
                                                onClick={nextImage}
                                                className="absolute right-4 p-2 rounded-full bg-black/50 hover:bg-white/20 text-white transition-opacity z-10"
                                            >
                                                →
                                            </button>
                                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                                {selectedProject.images.map((_, idx) => (
                                                    <div
                                                        key={idx}
                                                        className={`w-2 h-2 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-primary' : 'bg-white/20'}`}
                                                    />
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>

                                <div
                                    className="p-8 overflow-y-auto custom-scrollbar flex flex-col h-full bg-transparent relative z-10"
                                    data-lenis-prevent
                                >
                                    <h3 className="text-3xl font-bold mb-2 text-white">{selectedProject.title}</h3>
                                    <p className="text-primary font-medium mb-6">{selectedProject.desc}</p>

                                    <p className="text-gray-300 leading-relaxed mb-8 whitespace-pre-line">
                                        {selectedProject.fullDesc}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {selectedProject.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-400">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4 mt-auto">
                                        <Link href={selectedProject.link || "#"} className="flex-1 px-6 py-3 rounded-xl bg-primary text-white font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
                                            <ExternalLink className="w-4 h-4" /> Live Demo
                                        </Link>
                                        <Link href={selectedProject.github || "#"} className="flex-1 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
                                            <Github className="w-4 h-4" /> Source Code
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

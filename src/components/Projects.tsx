"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Project {
    id: number;
    title: string;
    desc: string;
    fullDesc: string;
    image: string;
    tags: string[];
    link?: string;
    github?: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "NovaAI - Automation Platform",
        desc: "AI-powered workflow automation tool for startups.",
        fullDesc: "A comprehensive SaaS platform that helps startups automate their daily workflows using customizable AI agents. Built with Next.js, LangChain, and Supabase.",
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1000&auto=format&fit=crop",
        tags: ["Next.js", "AI Agents", "Supabase", "Tailwind"],
        link: "#",
        github: "#"
    },
    {
        id: 2,
        title: "Scrollytelling Portfolio",
        desc: "Cinematic personal portfolio with 3D effects.",
        fullDesc: "My previous portfolio featuring complex scroll-linked animations, 3D canvas effects, and premium motion design.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
        tags: ["React", "Three.js", "GSAP", "Framer Motion"],
        link: "#",
        github: "#"
    },
    {
        id: 3,
        title: "CyberRisk Analyzer",
        desc: "Real-time threat detection using ML.",
        fullDesc: "A machine learning pipeline that analyzes network traffic patterns to detect potential security threats in real-time.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
        tags: ["Python", "TensorFlow", "FastAPI", "React"],
        link: "#",
        github: "#"
    }
];

export default function Projects() {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const selectedProject = projects.find(p => p.id === selectedId);

    return (
        <section className="relative py-20 px-6">
            <div className="container mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-16"
                >
                    Featured <span className="text-primary">Projects</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            layoutId={`card-container-${project.id}`}
                            onClick={() => setSelectedId(project.id)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10 }}
                            viewport={{ once: true }}
                            className="group relative cursor-pointer"
                        >
                            <div className="aspect-square rounded-2xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-primary/50 transition-colors">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-sm text-gray-300 line-clamp-1">{project.desc}</p>
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
                                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                            />
                            <motion.div
                                layoutId={`card-container-${selectedId}`}
                                className="relative w-full max-w-2xl bg-[#111] border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-50"
                            >
                                <button
                                    onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                                    className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-white/20 text-white z-50 transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                <div className="relative h-64 md:h-80">
                                    <Image
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent" />
                                </div>

                                <div className="p-8">
                                    <h3 className="text-3xl font-bold mb-2">{selectedProject.title}</h3>
                                    <p className="text-primary font-medium mb-6">{selectedProject.desc}</p>

                                    <p className="text-gray-300 leading-relaxed mb-8">
                                        {selectedProject.fullDesc}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {selectedProject.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-400">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
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

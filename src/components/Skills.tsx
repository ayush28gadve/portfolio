"use client";

import { motion } from "framer-motion";
import { Code, Brain, Zap, Terminal, Database, Palette } from "lucide-react";

const skills = [
    {
        icon: Code,
        title: "AI-Powered Web Dev",
        desc: "Building modern websites faster with AI coding assistants.",
    },
    {
        icon: Brain,
        title: "AI Content & Assets",
        desc: "Generating high-quality digital assets using GenAI.",
    },
    {
        icon: Zap,
        title: "Automation",
        desc: "Streamlining workflows with AI agents and scripts.",
    },
    {
        icon: Terminal,
        title: "Python & Scripting",
        desc: "Backend logic and data processing for AI apps.",
    },
    {
        icon: Palette,
        title: "UI/UX Design",
        desc: "Creating premium, user-centric interfaces.",
    },
    {
        icon: Database,
        title: "Data-Driven Logic",
        desc: "Integrating data insights into digital products.",
    },
];

export default function Skills() {
    return (
        <section id="skills" className="relative py-24 px-6 overflow-hidden">
            {/* Ambient Background with Premium Gradients */}
            <div className="absolute inset-0 bg-[#030014]" /> {/* Deep Cosmic Black/Purple Base */}

            {/* Gradient Orbs */}
            <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[100px] opacity-40 mix-blend-screen" />
            <div className="absolute top-1/2 -right-20 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] opacity-30 mix-blend-screen" />
            <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[100px] opacity-30" />

            {/* Content Container */}
            <div className="container mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-16"
                >
                    Expertise & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Skills</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="relative group cursor-default"
                        >
                            {/* Card Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Card Content */}
                            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 h-full backdrop-blur-sm">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                                    <skill.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-300 transition-colors">
                                    {skill.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {skill.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

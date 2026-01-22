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
        <section id="skills" className="relative py-20 px-6 bg-black/20">
            <div className="container mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-16"
                >
                    Expertise & <span className="text-primary">Skills</span>
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
                            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-primary/50 transition-all group cursor-default"
                        >
                            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                                <skill.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                {skill.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {skill.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

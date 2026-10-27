"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Globe, Cpu, Code2, Zap, Bot, GitBranch, Sparkles } from "lucide-react";

export default function About() {
    const shouldReduceMotion = useReducedMotion();

    const bottomCards = [
        {
            icon: Globe,
            title: "Web Experiences",
            description: "Responsive websites built around usability, performance, and business goals.",
            accent: "from-blue-500/20 to-cyan-500/10",
            iconColor: "text-blue-400",
            hoverBorder: "group-hover:border-blue-500/40",
            hoverText: "group-hover:text-blue-300",
        },
        {
            icon: Cpu,
            title: "Intelligent Automation",
            description: "AI agents and connected workflows that reduce repetitive work.",
            accent: "from-purple-500/20 to-indigo-500/10",
            iconColor: "text-indigo-400",
            hoverBorder: "group-hover:border-indigo-500/40",
            hoverText: "group-hover:text-indigo-300",
        },
        {
            icon: Code2,
            title: "Clean Architecture",
            description: "Maintainable applications, reliable integrations, and scalable foundations.",
            accent: "from-pink-500/20 to-purple-500/10",
            iconColor: "text-purple-400",
            hoverBorder: "group-hover:border-purple-500/40",
            hoverText: "group-hover:text-purple-300",
        },
    ];

    return (
        <section id="about" className="relative py-28 md:py-32 px-6 overflow-hidden">
            {/* Ambient Background & Glow */}
            <div className="absolute inset-0 bg-[#030014]" />
            <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[130px] mix-blend-screen opacity-40 pointer-events-none" />
            <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[130px] mix-blend-screen opacity-40 pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

                    {/* Main Intro Card */}
                    <motion.div
                        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="lg:col-span-7 xl:col-span-8 p-8 sm:p-10 md:p-12 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-md relative overflow-hidden group hover:border-purple-500/30 transition-colors duration-500 flex flex-col justify-between"
                    >
                        {/* Subtle Card Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="relative z-10">
                            {/* Section Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-6">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                Who I Am
                            </div>

                            {/* Headline */}
                            <motion.h3
                                initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.18] mb-6 text-balance"
                            >
                                I build{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                                    digital experiences
                                </span>
                                . I automate what{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                                    slows businesses down
                                </span>
                                .
                            </motion.h3>

                            {/* Supporting Paragraphs */}
                            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-neutral-300/90 font-normal max-w-2xl">
                                <p>
                                    I develop modern websites, full-stack applications, and AI-powered automations that turn complex workflows into practical digital solutions.
                                </p>
                                <p className="text-neutral-400">
                                    From web development to intelligent integrations, I combine engineering, thoughtful design, and automation to help businesses work smarter.
                                </p>
                            </div>
                        </div>

                        {/* Core Capabilities Pills */}
                        <div className="pt-8 mt-8 border-t border-white/10 flex flex-wrap items-center gap-2 relative z-10">
                            {[
                                "Full-Stack Development",
                                "Business Websites",
                                "AI Chatbots & Agents",
                                "n8n Workflows",
                                "API Integrations",
                            ].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-neutral-300 border border-white/10 hover:border-purple-400/40 hover:text-white transition-colors"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right-Hand Feature Card: Intelligent Automation */}
                    <motion.div
                        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
                        className="lg:col-span-5 xl:col-span-4 p-8 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-md flex flex-col justify-between relative overflow-hidden group hover:border-blue-500/40 transition-all duration-500"
                    >
                        {/* Glow and radial ambience */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        {/* Visual: Connected Workflow Nodes / AI Automation Pipeline */}
                        <div className="relative z-10 w-full mb-6">
                            {/* Live Pipeline Badge */}
                            <div className="flex items-center justify-between mb-5">
                                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-semibold text-emerald-400">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                    Active Pipeline
                                </div>
                                <span className="text-[11px] font-mono text-neutral-400">n8n • APIs • LLM</span>
                            </div>

                            {/* Node Pipeline Diagram */}
                            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 relative overflow-hidden">
                                <div className="flex flex-col gap-3 relative">
                                    {/* Node 1: Event Trigger */}
                                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.05] border border-white/10 group/node hover:border-blue-400/30 transition-colors">
                                        <div className="flex items-center gap-2.5">
                                            <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs">
                                                <Zap className="w-3.5 h-3.5" />
                                            </div>
                                            <div>
                                                <div className="text-xs font-semibold text-white">Event Trigger</div>
                                                <div className="text-[10px] text-neutral-400">API Webhook / Form</div>
                                            </div>
                                        </div>
                                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">200 OK</span>
                                    </div>

                                    {/* Animated Connector Line 1 */}
                                    <div className="flex items-center justify-center my--1 relative h-4">
                                        <div className="w-0.5 h-full bg-gradient-to-b from-blue-400 to-purple-400" />
                                        <motion.div
                                            animate={shouldReduceMotion ? {} : { y: [-6, 6] }}
                                            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                                            className="absolute w-1.5 h-1.5 rounded-full bg-blue-300 shadow-[0_0_8px_#60a5fa]"
                                        />
                                    </div>

                                    {/* Node 2: AI Agent & Logic Core */}
                                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                                        <div className="flex items-center gap-2.5">
                                            <div className="w-7 h-7 rounded-lg bg-purple-500/25 text-purple-300 flex items-center justify-center text-xs">
                                                <Bot className="w-3.5 h-3.5" />
                                            </div>
                                            <div>
                                                <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                                                    AI Agent Reasoning
                                                    <Sparkles className="w-3 h-3 text-purple-400" />
                                                </div>
                                                <div className="text-[10px] text-neutral-400">LLM Analysis & Logic</div>
                                            </div>
                                        </div>
                                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">Streaming</span>
                                    </div>

                                    {/* Animated Connector Line 2 */}
                                    <div className="flex items-center justify-center my--1 relative h-4">
                                        <div className="w-0.5 h-full bg-gradient-to-b from-purple-400 to-indigo-400" />
                                        <motion.div
                                            animate={shouldReduceMotion ? {} : { y: [-6, 6] }}
                                            transition={{ duration: 1.6, delay: 0.8, repeat: Infinity, ease: "easeInOut" }}
                                            className="absolute w-1.5 h-1.5 rounded-full bg-purple-300 shadow-[0_0_8px_#c084fc]"
                                        />
                                    </div>

                                    {/* Node 3: Automated Action & Sync */}
                                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.05] border border-white/10 group/node hover:border-indigo-400/30 transition-colors">
                                        <div className="flex items-center gap-2.5">
                                            <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs">
                                                <GitBranch className="w-3.5 h-3.5" />
                                            </div>
                                            <div>
                                                <div className="text-xs font-semibold text-white">Automated Output</div>
                                                <div className="text-[10px] text-neutral-400">CRM • Database • Email</div>
                                            </div>
                                        </div>
                                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">Success</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card Copy */}
                        <div className="relative z-10 mt-auto">
                            <h4 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
                                Intelligent Automation
                            </h4>
                            <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                                Connecting tools, automating repetitive workflows, and building AI-powered systems.
                            </p>
                        </div>
                    </motion.div>

                    {/* Bottom Capability Cards (3 cards spanning full width) */}
                    <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                        {bottomCards.map((card, index) => {
                            const IconComponent = card.icon;
                            return (
                                <motion.div
                                    key={card.title}
                                    initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                                    whileHover={shouldReduceMotion ? {} : { y: -6, scale: 1.01 }}
                                    className={`relative p-7 sm:p-8 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-md cursor-default group overflow-hidden ${card.hoverBorder} transition-all duration-300 flex flex-col justify-between`}
                                >
                                    {/* Hover Glow Background */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${card.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                                    />

                                    <div className="relative z-10">
                                        <div
                                            className={`w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 ${card.iconColor} group-hover:scale-110 transition-transform duration-300`}
                                        >
                                            <IconComponent className="w-6 h-6" />
                                        </div>
                                        <h4
                                            className={`text-xl font-bold text-white mb-2 ${card.hoverText} transition-colors tracking-tight`}
                                        >
                                            {card.title}
                                        </h4>
                                        <p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors leading-relaxed">
                                            {card.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}


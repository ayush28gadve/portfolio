"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Sparkles, Code2, Bot } from "lucide-react";

export default function Hero() {
    const shouldReduceMotion = useReducedMotion();

    const fadeInVariants: Variants = {
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                delay: shouldReduceMotion ? 0 : custom * 0.15,
                ease: "easeOut",
            },
        }),
    };

    return (
        <section
            id="hero"
            aria-label="Hero Introduction"
            className="relative min-h-[100dvh] w-full flex items-center overflow-hidden bg-[#030014]"
        >
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <Image
                    src="/images/hero-portrait.png"
                    alt="Ayush Gadve - Full-Stack Developer & AI Automation Specialist"
                    fill
                    priority
                    quality={90}
                    sizes="100vw"
                    className="object-cover object-[72%_center] sm:object-[68%_center] md:object-[65%_center] lg:object-[60%_center] xl:object-right"
                />

                {/* Left & Center Scrim: Rich Navy/Purple gradient behind the text for maximum legibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#030014] via-[#030014]/90 sm:via-[#030014]/80 md:via-[#030014]/65 lg:via-[#030014]/50 to-transparent" />

                {/* Mobile Radial Darkening to ensure text pops over image elements on smaller screens */}
                <div className="absolute inset-0 bg-radial-gradient sm:hidden bg-[#030014]/60" />

                {/* Top Vignette for Navbar legibility */}
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#030014]/80 via-[#030014]/40 to-transparent" />

                {/* Bottom Smooth Transition into About section */}
                <div className="absolute inset-x-0 bottom-0 h-32 md:h-44 bg-gradient-to-t from-[#030014] via-[#030014]/80 to-transparent" />

                {/* Subtle Ambient Accent Glows (Cyan/Blue & Purple) */}
                <div className="absolute -top-24 left-10 w-96 h-96 bg-primary/15 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[140px] pointer-events-none" />
            </div>

            {/* Foreground Content */}
            <div className="container relative z-10 mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pt-24 pb-16 sm:py-28 md:py-32 flex items-center min-h-[100dvh]">
                <div className="max-w-2xl lg:max-w-3xl">
                    {/* Eyebrow Pill */}
                    <motion.div
                        custom={1}
                        variants={fadeInVariants}
                        initial="hidden"
                        animate="visible"
                        className="mb-5 sm:mb-6"
                    >
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                            </span>
                            <span>FULL-STACK DEVELOPMENT · AI AUTOMATION</span>
                        </div>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        custom={2}
                        variants={fadeInVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.12] mb-6 drop-shadow-sm"
                    >
                        I build digital experiences.{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                            I automate what slows businesses down.
                        </span>
                    </motion.h1>

                    {/* Supporting Text */}
                    <motion.p
                        custom={3}
                        variants={fadeInVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-base sm:text-lg md:text-xl text-neutral-300/95 leading-relaxed max-w-xl mb-8 sm:mb-10 font-normal drop-shadow"
                    >
                        I develop modern websites, full-stack applications, and AI-powered automations that turn complex workflows into practical digital solutions.
                    </motion.p>

                    {/* Action CTAs */}
                    <motion.div
                        custom={4}
                        variants={fadeInVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5"
                    >
                        <Link
                            href="#contact"
                            className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white text-black font-semibold text-base sm:text-lg hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:shadow-[0_0_35px_rgba(255,255,255,0.45)] hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <span>Start a Project</span>
                            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="#projects"
                            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-semibold text-base sm:text-lg hover:bg-white/10 hover:border-white/35 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <span>Explore My Work</span>
                        </Link>
                    </motion.div>

                    {/* Quick Micro-Badges / Trust Indicators */}
                    <motion.div
                        custom={5}
                        variants={fadeInVariants}
                        initial="hidden"
                        animate="visible"
                        className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-neutral-400 font-medium"
                    >
                        <div className="flex items-center gap-2">
                            <Code2 className="w-4 h-4 text-blue-400" />
                            <span>Custom Full-Stack Apps</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Bot className="w-4 h-4 text-purple-400" />
                            <span>AI Agents & Workflows</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-amber-300" />
                            <span>High-Performance UI/UX</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

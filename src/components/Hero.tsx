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
            <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
                {/* 
                  Positioning: On tablet and desktop, anchor right and shift slightly off-screen to the right 
                  so subject sits farther to the right, freeing up dark negative space on the left.
                */}
                <div className="absolute inset-0 w-full sm:w-[105%] md:w-[108%] lg:w-[110%] xl:w-[112%] sm:-right-[5%] md:-right-[8%] lg:-right-[10%] xl:-right-[12%] left-auto h-full">
                    <Image
                        src="/images/hero-portrait.png"
                        alt="Ayush Gadve - Full-Stack Developer & AI Automation Specialist"
                        fill
                        priority
                        quality={95}
                        sizes="100vw"
                        className="object-cover object-[75%_25%] sm:object-[78%_center] md:object-[79%_center] lg:object-[80%_center] xl:object-[82%_center]"
                    />
                </div>

                {/* Left & Center Scrim: Rich Navy/Purple gradient behind text, clearing completely before the face on desktop */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#030014] via-[#030014]/90 via-30% sm:via-40% md:via-[#030014]/80 md:via-45% lg:via-[#030014]/70 lg:via-48% to-transparent to-60% sm:to-65% md:to-70%" />

                {/* Mobile Scrim: Balanced vertical fade to ensure high text contrast while keeping the portrait visible */}
                <div className="absolute inset-0 sm:hidden bg-gradient-to-b from-[#030014]/85 via-[#030014]/70 to-[#030014]/95" />

                {/* Top Vignette for Navbar legibility */}
                <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#030014]/85 via-[#030014]/40 to-transparent" />

                {/* Bottom Smooth Transition into About section */}
                <div className="absolute inset-x-0 bottom-0 h-24 md:h-36 bg-gradient-to-t from-[#030014] via-[#030014]/70 to-transparent" />

                {/* Subtle Ambient Glows - shifted left to not haze the face */}
                <div className="absolute -top-24 left-4 w-80 h-80 bg-primary/10 rounded-full blur-[130px] pointer-events-none" />
                <div className="absolute bottom-1/4 left-10 w-72 h-72 bg-accent/10 rounded-full blur-[130px] pointer-events-none" />
            </div>

            {/* Foreground Content */}
            <div className="container relative z-10 mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pt-24 pb-8 sm:pt-28 sm:pb-10 md:pt-28 md:pb-12 flex items-center min-h-[100dvh]">
                <div className="max-w-xl lg:max-w-[540px] xl:max-w-[580px]">
                    {/* Eyebrow Pill */}
                    <motion.div
                        custom={1}
                        variants={fadeInVariants}
                        initial="hidden"
                        animate="visible"
                        className="mb-4 sm:mb-5"
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
                        className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] font-black tracking-tight text-white leading-[1.15] sm:leading-[1.12] mb-5 drop-shadow-sm"
                    >
                        <span>I build digital experiences.</span>{" "}
                        <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                            I automate what slows businesses down.
                        </span>
                    </motion.h1>

                    {/* Supporting Text */}
                    <motion.p
                        custom={3}
                        variants={fadeInVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-base sm:text-lg text-neutral-300/95 leading-relaxed max-w-lg mb-7 sm:mb-8 font-normal drop-shadow"
                    >
                        I develop modern websites, full-stack applications, and AI-powered automations that turn complex workflows into practical digital solutions.
                    </motion.p>

                    {/* Action CTAs */}
                    <motion.div
                        custom={4}
                        variants={fadeInVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
                    >
                        <Link
                            href="#contact"
                            className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black font-semibold text-base hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:shadow-[0_0_35px_rgba(255,255,255,0.45)] hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <span>Start a Project</span>
                            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="#projects"
                            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-semibold text-base hover:bg-white/10 hover:border-white/35 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
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
                        className="mt-8 sm:mt-9 pt-5 sm:pt-6 border-t border-white/10 flex flex-wrap items-center gap-5 sm:gap-6 text-xs sm:text-sm text-neutral-400 font-medium"
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

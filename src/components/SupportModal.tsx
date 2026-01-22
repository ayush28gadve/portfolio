"use client";

import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { X, Phone, Mail, Linkedin, Instagram, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface SupportModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const contactDetails = [
    {
        icon: Phone,
        label: "Contact Number",
        value: "+91 7972082364",
        href: "tel:+917972082364",
        color: "text-green-400",
        gradient: "from-green-400/20 to-emerald-600/20"
    },
    {
        icon: Mail,
        label: "Email Address",
        value: "ayushgadve106@gmail.com",
        href: "mailto:ayushgadve106@gmail.com",
        color: "text-blue-400",
        gradient: "from-blue-400/20 to-cyan-600/20"
    },
    {
        icon: Github,
        label: "GitHub",
        value: "ayush28gadve",
        href: "https://github.com/ayush28gadve?tab=overview&from=2025-12-01&to=2025-12-31",
        color: "text-purple-400",
        gradient: "from-purple-400/20 to-violet-600/20"
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        value: "Ayush Gadve",
        href: "https://www.linkedin.com/in/ayush-gadve-16b182327/",
        color: "text-blue-500",
        gradient: "from-blue-500/20 to-indigo-600/20"
    },
    {
        icon: Instagram,
        label: "Instagram",
        value: "@ayush.gadve",
        href: "https://www.instagram.com/ayush.gadve/",
        color: "text-pink-500",
        gradient: "from-pink-500/20 to-rose-600/20"
    }
];

export default function SupportModal({ isOpen, onClose }: SupportModalProps) {
    // 3D Motion Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        x.set(clientX - centerX);
        y.set(clientY - centerY);
    }

    // Rotations based on mouse position
    const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
    const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 perspective-1000">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/90 backdrop-blur-md"
                    />

                    {/* 3D Container */}
                    <motion.div
                        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={() => { x.set(0); y.set(0); }}
                        initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
                        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                        exit={{ opacity: 0, scale: 0.8, rotateX: -20 }}
                        className="relative w-full max-w-lg"
                    >
                        {/* Holographic Border */}
                        <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-[32px] blur-sm opacity-50 animate-pulse" />

                        <div className="relative bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-[30px] p-8 overflow-hidden shadow-2xl">
                            {/* Sci-Fi Grid Background */}
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

                            {/* Floating Orbs */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10 animate-pulse" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px] -z-10 animate-pulse delay-700" />

                            {/* Header */}
                            <div className="flex items-center justify-between mb-8 relative z-10">
                                <div>
                                    <h2 className="text-3xl font-bold text-white tracking-tight">Connect<span className="text-primary">.me</span></h2>
                                    <p className="text-sm text-neutral-400 font-mono mt-1">ESTABLISHING SECURE LINK...</p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-all border border-white/5 hover:border-white/20 hover:scale-110 active:scale-95"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Contact Grid */}
                            <div className="space-y-3 relative z-10">
                                {contactDetails.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 overflow-hidden hover:border-primary/30 transition-all duration-300"
                                        >
                                            {/* Hover Gradient Background */}
                                            <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                            {/* Icon */}
                                            <div className={`relative p-3 rounded-xl bg-black/40 border border-white/10 ${item.color} group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                                                <item.icon className="w-5 h-5" />
                                            </div>

                                            {/* Text */}
                                            <div className="relative flex-1">
                                                <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest mb-0.5">{item.label}</p>
                                                <p className="text-neutral-200 font-medium group-hover:text-white transition-colors">{item.value}</p>
                                            </div>

                                            {/* External Link Icon */}
                                            <div className="relative p-2 rounded-full bg-white/5 text-neutral-500 group-hover:text-white group-hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0">
                                                <ExternalLink className="w-4 h-4" />
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Footer */}
                            <div className="mt-8 pt-6 border-t border-white/5 text-center relative z-10">
                                <p className="text-[10px] text-neutral-600 font-mono tracking-widest uppercase">
                                    System Status: Online & Ready to Collaborate
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

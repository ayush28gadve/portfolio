"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="relative py-24 px-6 overflow-hidden">
            {/* Integrated Premium Background */}
            <div className="absolute inset-0 bg-[#030014]" />

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] opacity-30 mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] opacity-20 mix-blend-screen pointer-events-none" />

            <div className="container mx-auto max-w-4xl text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter"
                >
                    Let's Work <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Together.</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
                >
                    Have a project in mind? Let's turn your idea into a premium digital solution.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <a
                        href="mailto:ayushgadve106@gmail.com"
                        className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold text-lg flex items-center justify-center gap-2 hover:bg-gray-200 transition-all hover:scale-105"
                    >
                        <Mail className="w-5 h-5" /> ayushgadve106@gmail.com
                    </a>
                    <a
                        href="https://wa.me/917972082364"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white font-semibold text-lg flex items-center justify-center gap-2 hover:bg-white/10 hover:border-purple-500/50 transition-all hover:scale-105"
                    >
                        <MessageCircle className="w-5 h-5" /> +91 7972082364
                    </a>
                </motion.div>

                <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                    <p>© 2026 Ayush Gadve. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="https://www.linkedin.com/in/ayush-gadve-16b182327/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
                        <button
                            onClick={() => alert("Twitter/X profile is coming soon!")}
                            className="hover:text-primary transition-colors cursor-not-allowed opacity-50"
                        >
                            Twitter
                        </button>
                        <a href="https://www.instagram.com/ayush.gadve/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

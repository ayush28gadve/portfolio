"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Code2, Cpu, Globe } from "lucide-react";

export default function About() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section id="about" className="relative py-32 px-6 overflow-hidden">
            {/* Premium Background Integration */}
            <div className="absolute inset-0 bg-[#030014]" />

            <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[128px] mix-blend-screen opacity-40 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[128px] mix-blend-screen opacity-40 pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Main Intro Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-8 p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden group hover:border-purple-500/30 transition-colors duration-500"
                    >
                        {/* Card Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-6 flex items-center gap-2 relative z-10">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            Who I Am
                        </h2>

                        <h3 className="text-3xl md:text-5xl font-medium leading-tight text-white mb-8 relative z-10">
                            I'm a <span className="text-white font-bold">CSE Student</span> fusing
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Creative Engineering</span> with
                            Artificial Intelligence.
                        </h3>

                        <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl relative z-10">
                            I don't just write code; I build digital ecosystems. By combining modern web frameworks with advanced AI agents,
                            I create solutions that are not only functional but intelligent. My focus is on <span className="text-white">speed, scalability, and impact</span>.
                        </p>

                        <AnimatePresence>
                            {isExpanded && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="overflow-hidden relative z-10"
                                >
                                    <div className="pt-6 space-y-6 text-neutral-400 border-t border-white/10 mt-6 text-lg leading-relaxed">
                                        <div>
                                            <strong className="text-white block mb-2 text-xl">Engineering & execution</strong>
                                            <p>
                                                I am an avid builder with extensive experience in **Hackathons**. I thrive in high-pressure environments, building **real-world solutions** under strict time constraints. My portfolio is built on a foundation of shipping numerous complex projects, proving that I don't just write code—I deliver results.
                                            </p>
                                        </div>
                                        <div>
                                            <strong className="text-white block mb-2 text-xl">Specialized AI Training</strong>
                                            <p>
                                                My expertise extends beyond standard web dev. I have undergone rigorous training in **AI WITH MACHINE LEARNING** through a specialized online program by **IIT Kanpur**. This academic backing allows me to integrate genuine data science principles into modern applications.
                                            </p>
                                        </div>
                                        <div>
                                            <strong className="text-white block mb-2 text-xl">Beyond the Code</strong>
                                            <p>
                                                A great product needs to be seen. With a strong grasp of **Digital Marketing**, I understand the full lifecycle of a digital product—from development to user acquisition. I build with an understanding of SEO, brand positioning, and market impact.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="mt-8 flex items-center gap-2 text-sm font-bold text-primary hover:text-white transition-colors uppercase tracking-wider relative z-10"
                        >
                            {isExpanded ? "Read Less" : "Read More"}
                            <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-45" : "rotate-0"}`} />
                        </button>
                    </motion.div>

                    {/* Stat / Highlight Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="lg:col-span-4 p-8 rounded-3xl border border-white/10 backdrop-blur-md flex flex-col justify-between relative overflow-hidden group hover:border-blue-500/30 transition-colors"
                        style={{
                            backgroundImage: "url('/about/ai-feature.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                    >
                        {/* Card Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Dark Overlay for readability */}
                        <div className="absolute inset-0 bg-black/60 transition-opacity duration-300 group-hover:bg-black/50 z-0" />

                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 relative z-10 backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform duration-300">
                            <Cpu className="w-6 h-6 text-white" />
                        </div>
                        <div className="relative z-10">
                            <h4 className="text-4xl font-bold text-white mb-2">AI-First</h4>
                            <p className="text-sm text-neutral-200 font-medium">
                                Leveraging LLMs & Agents to automate complex workflows.
                            </p>
                        </div>
                    </motion.div>

                    {/* Quote / Philosophy Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-5 p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 relative hover:border-pink-500/30 transition-colors group"
                    >
                        <div className="absolute top-6 right-6 text-6xl text-white/5 font-serif group-hover:text-white/10 transition-colors">"</div>
                        <p className="text-xl text-neutral-300 italic relative z-10 leading-relaxed group-hover:text-white transition-colors">
                            Instead of overcomplicating things, I believe in delivering fast, practical, and result-driven solutions.
                        </p>
                        <div className="mt-6 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 ring-2 ring-transparent group-hover:ring-white/20 transition-all" />
                            <div>
                                <p className="text-sm font-bold text-white">Ayush Gadve</p>
                                <p className="text-xs text-neutral-500">Developer & Designer</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Features Bento Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                        <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-default group hover:border-blue-500/30">
                            <Globe className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                            <h4 className="text-lg font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">Web Experiences</h4>
                            <p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">Immersive, high-performance websites.</p>
                        </div>
                        <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-default group hover:border-purple-500/30">
                            <Code2 className="w-8 h-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                            <h4 className="text-lg font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">Clean Architecture</h4>
                            <p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">Scalable, maintainable codebases.</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

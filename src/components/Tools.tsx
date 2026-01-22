"use client";

import { motion } from "framer-motion";

const tools = [
    "Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Python", "TensorFlow", "LangChain", "OpenAI API", "Supabase", "Figma", "Git"
];

export default function Tools() {
    return (
        <section className="relative py-20 px-6 overflow-hidden">
            <div className="container mx-auto text-center mb-10">
                <h2 className="text-2xl font-bold text-white/50 uppercase tracking-widest">
                    Powering My Work
                </h2>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex gap-8">
                    {[...tools, ...tools].map((tool, index) => (
                        <span
                            key={index}
                            className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 mx-4 uppercase"
                        >
                            {tool}
                        </span>
                    ))}
                </div>

                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-8">
                    {[...tools, ...tools].map((tool, index) => (
                        <span
                            key={index}
                            className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 mx-4 uppercase"
                        >
                            {tool}
                        </span>
                    ))}
                </div>
            </div>

            {/* Gradient fade on sides */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
        </section>
    );
}

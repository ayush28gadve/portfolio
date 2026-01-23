"use client";

import { motion } from "framer-motion";

const tools = [
    "Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Python", "TensorFlow", "LangChain", "OpenAI API", "Supabase", "Figma", "Git"
];

export default function Tools() {
    return (
        <section className="relative py-24 px-6 overflow-hidden">
            {/* Amber/Blue/Purple Gradients for Tools Section to differentiate slightly but keep theme */}
            <div className="absolute inset-0 bg-[#030014]" />

            <div className="absolute -top-20 right-20 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] opacity-30 mix-blend-screen" />
            <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] opacity-30 mix-blend-screen" />

            <div className="container mx-auto text-center mb-16 relative z-10">
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 uppercase tracking-[0.2em]">
                    Powering My Work
                </h2>
            </div>

            <div className="relative flex overflow-x-hidden group z-10">
                <div className="animate-marquee whitespace-nowrap flex gap-8">
                    {[...tools, ...tools].map((tool, index) => (
                        <span
                            key={index}
                            className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-white/5 mx-4 uppercase hover:from-purple-400 hover:to-blue-400 transition-colors duration-500 cursor-default"
                        >
                            {tool}
                        </span>
                    ))}
                </div>

                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-8">
                    {[...tools, ...tools].map((tool, index) => (
                        <span
                            key={index}
                            className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-white/5 mx-4 uppercase hover:from-purple-400 hover:to-blue-400 transition-colors duration-500 cursor-default"
                        >
                            {tool}
                        </span>
                    ))}
                </div>
            </div>

            {/* Gradient fade on sides */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030014] to-transparent z-20" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030014] to-transparent z-20" />
        </section>
    );
}

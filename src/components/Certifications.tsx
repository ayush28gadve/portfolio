"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, X, ZoomIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Certification {
    title: string;
    issuer: string;
    desc: string;
    image: string;
    link: string;
}

const certifications: Certification[] = [
    {
        title: "AI with Machine Learning",
        issuer: "IIT Kanpur (Ethical Edufabrica) • Feb-Mar 2025",
        desc: "Specialized training program on Artificial Intelligence with Machine Learning. Conducted in association with Antaragni, IIT Kanpur. Covered advanced ML algorithms, neural networks, and applications.",
        image: "/certificates/iit-kanpur-ai-ml-2025.png",
        link: "/certificates/iit-kanpur-ai-ml-2025.png"
    },
    {
        title: "Smart India Hackathon 2025",
        issuer: "Ministry of Education • Sept 2025",
        desc: "Certificate of Appreciation for successfull participation in the Internal Hackathon for Smart India Hackathon 2025.",
        image: "/certificates/sih-2025.png",
        link: "/certificates/sih-2025.png"
    },
    {
        title: "AI & ML with Data Science",
        issuer: "IIT Madras (Mechanica) • Feb-Mar 2025",
        desc: "Online training program on AI & ML with Data Science conducted by Edutech Lipi in association with Mechanica 2025, IIT Madras.",
        image: "/certificates/iit-madras-ds-2025.png",
        link: "/certificates/iit-madras-ds-2025.png"
    },
    {
        title: "Generative AI Model (Completion)",
        issuer: "NxtWave • April 2025",
        desc: "Successfully completed the hands-on project 'Build Your Own Generative AI Model', mastering skills essential in the AI era.",
        image: "/certificates/nxtwave-completion.jpg",
        link: "/certificates/nxtwave-completion.jpg"
    },
    {
        title: "Generative AI Model (Participation)",
        issuer: "NxtWave • April 2025",
        desc: "Certificate of Participation for the workshop on building Generative AI models, conducted by AI expert Mr. Abhinav Devaguptapu.",
        image: "/certificates/nxtwave-participation.jpg",
        link: "/certificates/nxtwave-participation.jpg"
    }
];

export default function Certifications() {
    const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

    // Strict Lock body scroll when modal is open
    useEffect(() => {
        if (selectedCert) {
            document.body.style.setProperty('overflow', 'hidden', 'important');
            document.documentElement.style.setProperty('overflow', 'hidden', 'important');
        } else {
            document.body.style.removeProperty('overflow');
            document.documentElement.style.removeProperty('overflow');
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
        }
        return () => {
            document.body.style.removeProperty('overflow');
            document.documentElement.style.removeProperty('overflow');
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
        };
    }, [selectedCert]);

    return (
        <section id="certifications" className="relative py-24 px-6 overflow-hidden">
            {/* Ambient Background with Premium Gradients */}
            <div className="absolute inset-0 bg-[#030014]" /> {/* Deep Cosmic Black/Purple Base */}

            {/* Gradient Orbs - Reversed positions for visual variety */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] opacity-30 mix-blend-screen" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] opacity-30 mix-blend-screen" />
            <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-pink-500/10 rounded-full blur-[80px] opacity-30" />

            <div className="container mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-16"
                >
                    Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Awards</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            layoutId={`cert-card-${index}`}
                            onClick={() => setSelectedCert(cert)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative cursor-pointer"
                        >
                            {/* Card Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="h-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-colors backdrop-blur-sm relative z-10 flex flex-col">
                                <div className="relative h-48 w-full bg-white/5 border-b border-white/5">
                                    <Image
                                        src={cert.image}
                                        alt={cert.title}
                                        fill
                                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Overlay for Click hint */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="flex items-center gap-2 text-white font-medium px-4 py-2 rounded-full bg-primary/20 border border-primary/50 backdrop-blur-sm">
                                            <ZoomIn className="w-4 h-4" /> View Details
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-300 transition-colors">{cert.title}</h3>
                                    <p className="text-primary text-sm font-medium mb-3">{cert.issuer}</p>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                                        {cert.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedCert && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedCert(null)}
                                className="absolute inset-0 bg-black/90 backdrop-blur-md"
                            />
                            <motion.div
                                layoutId={`cert-card-${certifications.indexOf(selectedCert)}`}
                                className="relative w-full max-w-5xl bg-[#030014] border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-50 flex flex-col md:grid md:grid-cols-2 h-[85vh] md:h-[80vh]"
                            >
                                {/* Modal Background Gradients */}
                                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
                                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

                                <button
                                    onClick={(e) => { e.stopPropagation(); setSelectedCert(null); }}
                                    className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-white/20 text-white z-50 transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                <div className="relative h-64 md:h-full w-full bg-black/30 flex items-center justify-center overflow-hidden p-8 border-r border-white/5">
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={selectedCert.image}
                                            alt={selectedCert.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>

                                <div
                                    className="p-8 overflow-y-auto custom-scrollbar flex flex-col h-full bg-transparent relative z-10"
                                    data-lenis-prevent
                                >
                                    <h3 className="text-3xl font-bold mb-2 text-white">{selectedCert.title}</h3>
                                    <p className="text-primary font-medium mb-6">{selectedCert.issuer}</p>

                                    <p className="text-gray-300 leading-relaxed mb-8 whitespace-pre-line text-lg">
                                        {selectedCert.desc}
                                    </p>

                                    <div className="mt-auto pt-6 border-t border-white/10">
                                        <Link href={selectedCert.link} target="_blank" className="w-full px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
                                            <ExternalLink className="w-4 h-4" /> Open Full Image
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}

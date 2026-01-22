"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, X, ZoomIn } from "lucide-react";
import Image from "next/image";

const certs = [
    {
        title: "AI with Machine Learning",
        issuer: "IIT Kanpur (Ethical Edufabrica)",
        description: "Specialized training program on Artificial Intelligence with Machine Learning. Conducted in association with Antaragni, IIT Kanpur.",
        date: "Feb-Mar 2025",
        image: "/certificates/iit-kanpur-ai-ml-2025.png",
    },
    {
        title: "Smart India Hackathon 2025",
        issuer: "Ministry of Education",
        description: "Certificate of Appreciation for successfull participation in the Internal Hackathon for SIH 2025 organized by MIT.",
        date: "Sept 2025",
        image: "/certificates/sih-2025.png",
    },
    {
        title: "AI & ML with Data Science",
        issuer: "IIT Madras (Mechanica)",
        description: "Online training program on AI & ML with Data Science conducted by Edutech Life in association with Mechanica 2025, IIT Madras.",
        date: "Feb-Mar 2025",
        image: "/certificates/iit-madras-ds-2025.png",
    },
    {
        title: "Generative AI Model (Completion)",
        issuer: "NxtWave",
        description: "Successfully completed the hands-on project 'Build Your Own Generative AI Model', mastering skills essential in the AI era.",
        date: "April 2025",
        image: "/certificates/nxtwave-completion.jpg",
    },
    {
        title: "Generative AI Model (Participation)",
        issuer: "NxtWave",
        description: "Certificate of Participation for the workshop on building Generative AI models, conducted by AI expert Mr. Abhinav Devaguptapu.",
        date: "April 2025",
        image: "/certificates/nxtwave-participation.jpg",
    },
];

export default function Certifications() {
    const [selectedCert, setSelectedCert] = useState<typeof certs[0] | null>(null);

    return (
        <section className="relative py-32 px-6">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Certifications & <span className="text-primary">Awards</span>
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">
                        Recognition of my technical expertise and commitment to continuous learning in AI and Engineering.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certs.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-primary/50 transition-colors cursor-pointer"
                            onClick={() => setSelectedCert(cert)}
                        >
                            {/* Image Thumbnail */}
                            <div className="aspect-video relative overflow-hidden">
                                <Image
                                    src={cert.image}
                                    alt={cert.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <ZoomIn className="text-white w-8 h-8" />
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-start justify-between mb-2">
                                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{cert.title}</h3>
                                    <Award className="w-5 h-5 text-primary" />
                                </div>
                                <p className="text-sm font-semibold text-neutral-300 mb-2">{cert.issuer} • {cert.date}</p>
                                <p className="text-sm text-neutral-500 line-clamp-2">{cert.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCert(null)}
                        className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 cursor-zoom-out"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-hidden bg-[#1a1a1a]"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
                        >
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="relative aspect-[4/3] lg:aspect-auto h-[50vh] lg:h-auto bg-black">
                                    <Image
                                        src={selectedCert.image}
                                        alt={selectedCert.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="p-8 lg:p-12 flex flex-col justify-center">
                                    <h3 className="text-3xl font-bold text-white mb-2">{selectedCert.title}</h3>
                                    <p className="text-primary font-semibold text-lg mb-6">{selectedCert.issuer} • {selectedCert.date}</p>
                                    <p className="text-neutral-300 text-lg leading-relaxed mb-8">
                                        {selectedCert.description}
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-400">
                                            Verified Credential
                                        </div>
                                        <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-400">
                                            ID: XXX-XXXX-XXXX
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

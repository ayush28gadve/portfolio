"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, X, ZoomIn, MoveHorizontal, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FlexCarousel from "./FlexCarousel";

interface Certification {
    title: string;
    issuer: string;
    desc: string;
    image: string;
    link: string;
    highlight?: string;
}

const certifications: Certification[] = [
    {
        title: "Bharatiya Antariksh Hackathon 2025",
        issuer: "ISRO • 2025",
        desc: "Certificate of Acknowledgement for successfully submitting an idea for the Bharatiya Antariksh Hackathon 2025. This participation reflects innovation, curiosity, and commitment in solving real-world challenges of space and technology. Acknowledged contribution to India's space innovation journey.",
        image: "/certificates/isro-hackathon-2025.png",
        link: "/certificates/isro-hackathon-2025.png",
        highlight: "National Space Hackathon",
    },
    {
        title: "AI with Machine Learning",
        issuer: "IIT Kanpur (Ethical Edufabrica) • Feb-Mar 2025",
        desc: "Specialized training program on Artificial Intelligence with Machine Learning. Conducted in association with Antaragni, IIT Kanpur. Covered advanced ML algorithms, neural networks, and applications.",
        image: "/certificates/iit-kanpur-ai-ml-2025.png",
        link: "/certificates/iit-kanpur-ai-ml-2025.png",
        highlight: "IIT Kanpur Specialized",
    },
    {
        title: "Smart India Hackathon 2025",
        issuer: "Ministry of Education • Sept 2025",
        desc: "Certificate of Appreciation for successful participation in the Internal Hackathon for Smart India Hackathon 2025, solving nationwide technical challenges.",
        image: "/certificates/sih-2025.png",
        link: "/certificates/sih-2025.png",
        highlight: "Ministry of Education",
    },
    {
        title: "AI & ML with Data Science",
        issuer: "IIT Madras (Mechanica) • Feb-Mar 2025",
        desc: "Online training program on AI & ML with Data Science conducted by Edutech Lipi in association with Mechanica 2025, IIT Madras.",
        image: "/certificates/iit-madras-ds-2025.png",
        link: "/certificates/iit-madras-ds-2025.png",
        highlight: "IIT Madras Mechanica",
    },
    {
        title: "Generative AI Model (Completion)",
        issuer: "NxtWave • April 2025",
        desc: "Successfully completed the hands-on project 'Build Your Own Generative AI Model', mastering foundational LLM prompting and generative architecture skills.",
        image: "/certificates/nxtwave-completion.jpg",
        link: "/certificates/nxtwave-completion.jpg",
        highlight: "Hands-on GenAI",
    },
    {
        title: "Generative AI Model (Participation)",
        issuer: "NxtWave • April 2025",
        desc: "Certificate of Participation for the intensive masterclass on building Generative AI models, conducted by industry AI expert Mr. Abhinav Devaguptapu.",
        image: "/certificates/nxtwave-participation.jpg",
        link: "/certificates/nxtwave-participation.jpg",
        highlight: "Expert Masterclass",
    },
];

const PRESETS = [
    { id: "liquid", label: "Liquid Wave" },
    { id: "ribbon", label: "Smooth Ribbon" },
    { id: "vortex", label: "Vortex Tilt" },
    { id: "arch", label: "Curved Arch" },
] as const;

export default function Certifications() {
    const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [preset, setPreset] = useState<"liquid" | "ribbon" | "vortex" | "arch">("liquid");

    const certItems = certifications.map((cert) => ({
        src: cert.image,
        alt: cert.title,
        title: cert.title,
        subtitle: cert.issuer,
    }));

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedCert) {
            document.body.style.setProperty("overflow", "hidden", "important");
            document.documentElement.style.setProperty("overflow", "hidden", "important");
        } else {
            document.body.style.removeProperty("overflow");
            document.documentElement.style.removeProperty("overflow");
            document.body.style.overflow = "unset";
            document.documentElement.style.overflow = "unset";
        }
        return () => {
            document.body.style.removeProperty("overflow");
            document.documentElement.style.removeProperty("overflow");
            document.body.style.overflow = "unset";
            document.documentElement.style.overflow = "unset";
        };
    }, [selectedCert]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setSelectedCert(null);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const activeCert = certifications[activeIndex] || certifications[0];

    return (
        <section id="certifications" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#030014] select-none">
            {/* Ambient Background with Cosmic Gradients */}
            <div className="absolute top-1/4 -left-20 w-[550px] h-[550px] bg-blue-600/15 rounded-full blur-[140px] opacity-35 mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-10 -right-20 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[160px] opacity-35 mix-blend-screen pointer-events-none" />
            <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] opacity-25 pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-3 inline-block"
                    >
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md text-xs sm:text-sm font-semibold tracking-wider uppercase text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
                            <Award className="w-3.5 h-3.5 text-purple-400" />
                            VERIFIED CREDENTIALS & HONORS
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.2] mb-4"
                    >
                        Certifications &{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400">
                            Awards
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="text-sm sm:text-base text-neutral-300/85 leading-relaxed font-normal max-w-2xl mx-auto"
                    >
                        Interactive WebGL flex carousel. Drag or scroll horizontally through recognized achievements from ISRO, IIT Kanpur, IIT Madras, and leading tech academies.
                    </motion.p>

                    {/* Lens Preset Selector */}
                    <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
                        {PRESETS.map((p) => {
                            const isActive = preset === p.id;
                            return (
                                <button
                                    key={p.id}
                                    onClick={() => setPreset(p.id)}
                                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 border ${
                                        isActive
                                            ? "bg-purple-500/20 text-purple-200 border-purple-400/60 shadow-[0_0_15px_rgba(168,85,247,0.25)] scale-105"
                                            : "bg-white/5 text-neutral-400 border-white/10 hover:border-white/20 hover:text-white hover:bg-white/10"
                                    }`}
                                >
                                    <span>{p.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* ============================================================== */}
                {/* REACT BITS <FlexCarousel /> STAGE                              */}
                {/* ============================================================== */}
                <div className="relative w-full h-[460px] sm:h-[520px] md:h-[580px] rounded-3xl bg-[#07051a]/60 border border-white/10 backdrop-blur-md overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
                    {/* Ambient Glow behind carousel lens */}
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-blue-500/5 pointer-events-none" />

                    <FlexCarousel
                        items={certItems}
                        preset={preset}
                        intro="rise"
                        cardHeight={0.52}
                        gap={16}
                        radius={16}
                        squeeze={0.2}
                        focusOnClick={true}
                        captions={true}
                        captureWheel={true}
                        onChange={(idx) => setActiveIndex(idx)}
                        onSelect={(idx) => {
                            setSelectedCert(certifications[idx]);
                        }}
                    />

                    {/* Quick Expand Button on Top-Right */}
                    <div className="absolute top-4 right-4 z-20">
                        <button
                            onClick={() => setSelectedCert(activeCert)}
                            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/60 hover:bg-white/15 text-white text-xs font-semibold backdrop-blur-md border border-white/15 transition-all hover:scale-105 shadow-lg"
                        >
                            <ZoomIn className="w-3.5 h-3.5 text-blue-400" />
                            <span>View Details</span>
                        </button>
                    </div>
                </div>

                {/* Interaction Hints & Bottom Status Bar */}
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
                    <div className="flex items-center gap-2 text-xs text-neutral-400">
                        <MoveHorizontal className="w-4 h-4 text-purple-400 animate-pulse" />
                        <span>Drag horizontally or use mouse wheel to scroll • Click active certificate to inspect</span>
                    </div>

                    {activeCert && (
                        <button
                            onClick={() => setSelectedCert(activeCert)}
                            className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            <span>Inspect &quot;{activeCert.title}&quot;</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                    )}
                </div>

                {/* ============================================================== */}
                {/* CERTIFICATE DETAIL MODAL                                       */}
                {/* ============================================================== */}
                <AnimatePresence>
                    {selectedCert && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedCert(null)}
                                className="absolute inset-0 bg-black/90 backdrop-blur-md"
                            />

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                transition={{ duration: 0.3 }}
                                className="relative w-full max-w-4xl max-h-[90vh] bg-[#07051a] border border-white/15 rounded-3xl overflow-hidden shadow-2xl z-50 flex flex-col md:grid md:grid-cols-2"
                            >
                                {/* Ambient Background Glow inside modal */}
                                <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />
                                <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-blue-600/15 rounded-full blur-[100px] pointer-events-none" />

                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedCert(null)}
                                    className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-white/20 text-white z-50 transition-colors border border-white/10"
                                    aria-label="Close modal"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                {/* Certificate Image Preview */}
                                <div className="relative h-64 md:h-full w-full bg-black/40 flex items-center justify-center p-6 sm:p-8 border-b md:border-b-0 md:border-r border-white/10">
                                    <div className="relative w-full h-full min-h-[220px]">
                                        <Image
                                            src={selectedCert.image}
                                            alt={selectedCert.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Certificate Description and Metadata */}
                                <div className="p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-[85vh] relative z-10" data-lenis-prevent>
                                    <div>
                                        {selectedCert.highlight && (
                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-purple-500/15 border border-purple-500/30 text-purple-300 mb-3">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                                                {selectedCert.highlight}
                                            </span>
                                        )}
                                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
                                            {selectedCert.title}
                                        </h3>
                                        <p className="text-blue-400 text-sm font-semibold mb-6">
                                            {selectedCert.issuer}
                                        </p>

                                        <div className="border-t border-white/10 pt-4 mb-6">
                                            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                                                Credential Details
                                            </h4>
                                            <p className="text-neutral-300 text-sm leading-relaxed whitespace-pre-line">
                                                {selectedCert.desc}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                                        <Link
                                            href={selectedCert.link}
                                            target="_blank"
                                            className="flex-1 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                                        >
                                            <ExternalLink className="w-4 h-4 text-blue-400" />
                                            <span>Open Full High-Res Image</span>
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

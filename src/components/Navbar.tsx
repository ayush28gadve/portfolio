"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MoveRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SupportModal from "./SupportModal";
import clsx from "clsx";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Support", href: "#support" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [supportOpen, setSupportOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href === "#support") {
            e.preventDefault();
            setSupportOpen(true);
            setMobileMenuOpen(false); // Close mobile menu if open
        } else {
            // For other links, let default behavior happen (smooth scroll via CSS or lenis usually handles anchors)
            // If manual handling is needed, add it here.
            setMobileMenuOpen(false);
        }
    };

    return (
        <>
            <header
                className={clsx(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                    scrolled
                        ? "bg-transparent backdrop-blur-md border-white/5 py-4"
                        : "bg-transparent border-transparent py-6"
                )}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <Link href="/" className="text-xl font-bold tracking-tighter flex items-center gap-2">
                        {/* Custom Logo for Ayush Gadve */}
                        <div className="w-10 h-10 relative flex items-center justify-center">
                            <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current" xmlns="http://www.w3.org/2000/svg">
                                <path d="M50 0 L100 100 L0 100 Z" fill="none" stroke="currentColor" strokeWidth="5" />
                                <path d="M50 20 L80 80 L20 80 Z" fill="currentColor" opacity="0.5" />
                            </svg>
                            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-black tracking-tighter mix-blend-difference text-white">
                                AG
                            </span>
                        </div>
                        <span className="text-white">Ayush Gadve</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            href="#contact"
                            className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition-all"
                        >
                            Let's Talk
                            <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-xl border-b border-white/10 p-6 md:hidden flex flex-col gap-4"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="text-lg font-medium text-white/80 hover:text-white"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="#contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-white text-black font-medium"
                            >
                                Let's Talk <MoveRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            <SupportModal isOpen={supportOpen} onClose={() => setSupportOpen(false)} />
        </>
    );
}

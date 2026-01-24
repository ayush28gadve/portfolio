"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MoveRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SupportModal from "./SupportModal";
import clsx from "clsx";
import Image from "next/image";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Support", href: "#support" },
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [supportOpen, setSupportOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // "visible till I build digital experiences"
            // That text appears around 20-40% of the 500vh hero section.
            // Let's say we hide it after 1.5 viewports (approx 1200px) to be safe.
            // Or whenever the user feels they have "scrolled down".
            // User said: "navbar should be fixed at top only .. because it is getting merged when we scroll it down"
            // So if we scroll past the initial top area, it should vanish.
            const threshold = window.innerHeight * 1.2;
            setIsVisible(window.scrollY < threshold);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href === "#support") {
            e.preventDefault();
            setSupportOpen(true);
            setMobileMenuOpen(false);
        } else {
            setMobileMenuOpen(false);
        }
    };

    return (
        <>
            <motion.header
                initial={{ opacity: 1, y: 0 }}
                animate={{
                    opacity: isVisible ? 1 : 0,
                    y: isVisible ? 0 : -100,
                    pointerEvents: isVisible ? "auto" : "none"
                }}
                transition={{ duration: 0.5 }}
                className="fixed top-0 left-0 right-0 z-50 py-2"
            >
                <div className="w-full px-4 md:px-10 flex items-center justify-between">
                    <Link href="/" className="text-xl font-bold tracking-tighter flex items-center gap-3">
                        {/* Custom Logo Image */}
                        <div className="relative w-32 h-32 md:w-44 md:h-44">
                            <Image
                                src="/ag-logo-v2.png"
                                alt="Ayush Gadve Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
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
            </motion.header>

            <SupportModal isOpen={supportOpen} onClose={() => setSupportOpen(false)} />
        </>
    );
}

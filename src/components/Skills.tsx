"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
    Globe,
    Bot,
    Layers,
    ArrowRight,
    CheckCircle2,
    Zap,
    Sparkles,
    TrendingUp,
    Clock,
    Database,
    ShieldCheck,
    Cpu,
    ExternalLink
} from "lucide-react";

export default function Services() {
    const shouldReduceMotion = useReducedMotion();

    const getFadeProps = (delayIndex: number) => ({
        initial: shouldReduceMotion ? false : { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: {
            duration: 0.5,
            delay: shouldReduceMotion ? 0 : delayIndex * 0.1,
            ease: "easeOut" as const,
        },
    });

    return (
        <section id="services" className="relative py-28 md:py-32 px-6 overflow-hidden bg-[#030014]">
            {/* Anchor for backward compatibility with existing #skills nav link */}
            <div id="skills" className="absolute -top-20" />

            {/* Ambient Lighting & Glows matching the site's dark navy/purple/blue palette */}
            <div className="absolute top-10 left-1/4 w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                    <motion.div
                        {...getFadeProps(1)}
                        className="mb-4 inline-block"
                    >
                        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            WHAT I CAN HELP YOU ACHIEVE
                        </span>
                    </motion.div>

                    <motion.h2
                        {...getFadeProps(2)}
                        className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.18] mb-6"
                    >
                        Less manual work.{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                            Better digital experiences.
                        </span>{" "}
                        More room to grow.
                    </motion.h2>

                    <motion.p
                        {...getFadeProps(3)}
                        className="text-base sm:text-lg text-neutral-300/90 leading-relaxed font-normal"
                    >
                        From customer-facing websites to intelligent business automation, I build practical digital solutions that help businesses attract customers, operate efficiently, and scale with confidence.
                    </motion.p>
                </div>

                {/* Asymmetric Bento Showcase */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-12">
                    {/* ============================================================== */}
                    {/* SERVICE 1: Websites That Win Customers (7 cols on Desktop)      */}
                    {/* ============================================================== */}
                    <motion.div
                        {...getFadeProps(4)}
                        whileHover={shouldReduceMotion ? {} : { y: -4 }}
                        className="lg:col-span-7 rounded-3xl bg-white/[0.03] border border-white/10 p-7 sm:p-9 backdrop-blur-md relative overflow-hidden group hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between"
                    >
                        {/* Glow on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="relative z-10">
                            {/* Card Header & Badge */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-blue-500/15 border border-blue-500/25 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform duration-300">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300">
                                    Customer Growth
                                </span>
                            </div>

                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-200 transition-colors">
                                Websites That Win Customers
                            </h3>

                            <p className="text-sm sm:text-base text-neutral-300/90 leading-relaxed mb-6">
                                Build credibility, attract potential customers, generate qualified enquiries, and provide an effortless user experience that turns visitors into repeat clients.
                            </p>

                            {/* Technical Capabilities List */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                                {[
                                    "Business websites & landing pages",
                                    "Conversion-focused UI/UX design",
                                    "E-commerce websites",
                                    "Responsive, fast, SEO-conscious development",
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300 font-medium">
                                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Meaningful Visual: Responsive Storefront / High-Converting Page Preview */}
                            <div className="p-4 sm:p-5 rounded-2xl bg-black/50 border border-white/10 mb-6 group/preview hover:border-blue-400/30 transition-colors">
                                {/* Browser Chrome Bar */}
                                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                                    </div>
                                    <span className="text-[11px] font-mono text-neutral-400 px-3 py-0.5 rounded-full bg-white/5 border border-white/5">
                                        https://yourbusiness.com
                                    </span>
                                    <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                                        <TrendingUp className="w-3.5 h-3.5" />
                                        <span>+42% Enquiries</span>
                                    </div>
                                </div>

                                {/* Mini Hero / Storefront Layout */}
                                <div className="space-y-3">
                                    <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-r from-blue-950/40 via-purple-950/20 to-black/40 border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                                        <div>
                                            <div className="text-xs font-bold text-white mb-0.5">High-Performance Customer Portal</div>
                                            <div className="text-[11px] text-neutral-400">Optimized for search engines, speed, and clear conversion paths.</div>
                                        </div>
                                        <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-blue-500 text-white shrink-0 shadow-[0_0_12px_rgba(59,130,246,0.5)]">
                                            Book Consultation
                                        </span>
                                    </div>

                                    {/* Metrics Row */}
                                    <div className="grid grid-cols-3 gap-2 text-center">
                                        <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5">
                                            <div className="text-sm font-bold text-white">99/100</div>
                                            <div className="text-[10px] text-neutral-400">PageSpeed</div>
                                        </div>
                                        <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5">
                                            <div className="text-sm font-bold text-emerald-400">&lt; 0.8s</div>
                                            <div className="text-[10px] text-neutral-400">Load Time</div>
                                        </div>
                                        <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5">
                                            <div className="text-sm font-bold text-blue-400">100%</div>
                                            <div className="text-[10px] text-neutral-400">Responsive</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Link */}
                        <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between">
                            <span className="text-xs text-neutral-400">Attract qualified buyers with a tailored site</span>
                            <Link
                                href="#contact"
                                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group/link"
                            >
                                <span>Discuss Your Website</span>
                                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* ============================================================== */}
                    {/* SERVICE 2: AI Automation That Saves Time (5 cols on Desktop)     */}
                    {/* ============================================================== */}
                    <motion.div
                        {...getFadeProps(5)}
                        whileHover={shouldReduceMotion ? {} : { y: -4 }}
                        className="lg:col-span-5 rounded-3xl bg-white/[0.03] border border-white/10 p-7 sm:p-9 backdrop-blur-md relative overflow-hidden group hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between"
                    >
                        {/* Glow on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="relative z-10">
                            {/* Card Header & Badge */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-purple-500/15 border border-purple-500/25 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform duration-300">
                                    <Bot className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300">
                                    Operational Efficiency
                                </span>
                            </div>

                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight group-hover:text-purple-200 transition-colors">
                                AI Automation That Saves Time
                            </h3>

                            <p className="text-sm sm:text-base text-neutral-300/90 leading-relaxed mb-6">
                                Reduce repetitive manual work, respond to business enquiries 24/7 in seconds, connect your business tools, and let your team focus on high-value tasks.
                            </p>

                            {/* Technical Capabilities List */}
                            <div className="space-y-2 mb-6">
                                {[
                                    "AI chatbots & conversational assistants",
                                    "AI agents & intelligent workflows",
                                    "n8n workflow automation",
                                    "API integrations & connected business tools",
                                    "Lead capture & follow-up automation",
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300 font-medium">
                                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Meaningful Visual: Trigger -> AI Processing -> Automated Action Pipeline */}
                            <div className="p-4 rounded-2xl bg-black/50 border border-white/10 mb-6">
                                <div className="flex items-center justify-between mb-3 text-[11px] font-mono text-neutral-400">
                                    <span>AUTOMATED PIPELINE</span>
                                    <span className="text-emerald-400 flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        <span>Instant Response</span>
                                    </span>
                                </div>

                                <div className="space-y-2 relative">
                                    {/* Step 1: Customer Lead */}
                                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.04] border border-white/5 text-xs">
                                        <div className="flex items-center gap-2">
                                            <Zap className="w-3.5 h-3.5 text-amber-400" />
                                            <span className="text-white font-medium">New Customer Enquiry</span>
                                        </div>
                                        <span className="text-[10px] text-neutral-400 font-mono">Website / WhatsApp</span>
                                    </div>

                                    {/* Arrow / Connector */}
                                    <div className="flex justify-center -my-1">
                                        <div className="w-0.5 h-3 bg-gradient-to-b from-amber-400 to-purple-400" />
                                    </div>

                                    {/* Step 2: AI Agent Qualifies & Drafts */}
                                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-purple-500/15 border border-purple-500/30 text-xs shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                                        <div className="flex items-center gap-2">
                                            <Sparkles className="w-3.5 h-3.5 text-purple-300 animate-pulse" />
                                            <span className="text-purple-200 font-medium">AI Agent Qualifies & Answers</span>
                                        </div>
                                        <span className="text-[10px] font-mono text-purple-300 bg-purple-500/20 px-1.5 py-0.5 rounded">&lt; 3s</span>
                                    </div>

                                    {/* Arrow / Connector */}
                                    <div className="flex justify-center -my-1">
                                        <div className="w-0.5 h-3 bg-gradient-to-b from-purple-400 to-emerald-400" />
                                    </div>

                                    {/* Step 3: Synced to CRM & Team Alerted */}
                                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.04] border border-white/5 text-xs">
                                        <div className="flex items-center gap-2">
                                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                                            <span className="text-white font-medium">CRM Synced & Team Notified</span>
                                        </div>
                                        <span className="text-[10px] text-emerald-400 font-mono">100% Automated</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Link */}
                        <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between">
                            <span className="text-xs text-neutral-400">Save 10–20 hours every week</span>
                            <Link
                                href="#contact"
                                className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors group/link"
                            >
                                <span>Discuss Automation</span>
                                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* ============================================================== */}
                    {/* SERVICE 3: Software Built Around Your Business (Full 12 cols)    */}
                    {/* ============================================================== */}
                    <motion.div
                        {...getFadeProps(6)}
                        whileHover={shouldReduceMotion ? {} : { y: -4 }}
                        className="lg:col-span-12 rounded-3xl bg-white/[0.03] border border-white/10 p-7 sm:p-9 md:p-10 backdrop-blur-md relative overflow-hidden group hover:border-indigo-500/40 transition-all duration-300"
                    >
                        {/* Glow on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            {/* Left Text Column */}
                            <div className="lg:col-span-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform duration-300">
                                        <Layers className="w-6 h-6" />
                                    </div>
                                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
                                        Custom Operations
                                    </span>
                                </div>

                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight group-hover:text-indigo-200 transition-colors">
                                    Software Built Around Your Business
                                </h3>

                                <p className="text-sm sm:text-base text-neutral-300/90 leading-relaxed mb-6">
                                    Replace disconnected spreadsheets, messy manual handoffs, and generic software subscriptions with tailor-made systems configured around your exact business logic.
                                </p>

                                {/* Technical Capabilities Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                                    {[
                                        "Full-stack web applications",
                                        "Custom business software & dashboards",
                                        "CRM & management systems",
                                        "Database-driven applications",
                                        "Backend development & API integrations",
                                    ].map((item) => (
                                        <div key={item} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300 font-medium">
                                            <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href="#contact"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group/link"
                                >
                                    <span>Discuss Custom Software</span>
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                </Link>
                            </div>

                            {/* Right Meaningful Visual: Miniature Custom Business Dashboard */}
                            <div className="lg:col-span-6">
                                <div className="p-5 sm:p-6 rounded-2xl bg-black/60 border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] relative overflow-hidden">
                                    {/* Dashboard Header Bar */}
                                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                                        <div className="flex items-center gap-2.5">
                                            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center font-bold text-xs">
                                                CRM
                                            </div>
                                            <div>
                                                <div className="text-xs font-semibold text-white">Operations Management Suite</div>
                                                <div className="text-[10px] text-neutral-400">All tools connected into one source of truth</div>
                                            </div>
                                        </div>
                                        <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                            Live System
                                        </span>
                                    </div>

                                    {/* Dashboard Metric Tiles */}
                                    <div className="grid grid-cols-3 gap-3 mb-4">
                                        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                                            <div className="text-[10px] text-neutral-400 uppercase font-medium">Workflow Sync</div>
                                            <div className="text-base sm:text-lg font-bold text-white mt-0.5">100%</div>
                                            <div className="text-[10px] text-emerald-400 mt-0.5">Zero manual entry</div>
                                        </div>
                                        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                                            <div className="text-[10px] text-neutral-400 uppercase font-medium">Daily Hours Saved</div>
                                            <div className="text-base sm:text-lg font-bold text-indigo-300 mt-0.5">~3.5 hrs</div>
                                            <div className="text-[10px] text-neutral-400 mt-0.5">Per team member</div>
                                        </div>
                                        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                                            <div className="text-[10px] text-neutral-400 uppercase font-medium">Database Latency</div>
                                            <div className="text-base sm:text-lg font-bold text-blue-300 mt-0.5">42 ms</div>
                                            <div className="text-[10px] text-neutral-400 mt-0.5">Realtime query</div>
                                        </div>
                                    </div>

                                    {/* Data Pipeline Activity Log */}
                                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                                        <div className="text-[10px] font-mono text-neutral-400 uppercase flex items-center justify-between">
                                            <span>Recent Processed Activity</span>
                                            <span className="text-neutral-500">Auto-Refreshed</span>
                                        </div>
                                        <div className="flex items-center justify-between text-xs py-1 border-b border-white/5">
                                            <span className="text-neutral-300">New Client Onboarding Triggered</span>
                                            <span className="font-mono text-[10px] text-emerald-400">Completed</span>
                                        </div>
                                        <div className="flex items-center justify-between text-xs py-1 border-b border-white/5">
                                            <span className="text-neutral-300">Invoice & Contract Auto-Generated</span>
                                            <span className="font-mono text-[10px] text-blue-400">Sent to Client</span>
                                        </div>
                                        <div className="flex items-center justify-between text-xs pt-1">
                                            <span className="text-neutral-300">Weekly Business Report Compiled</span>
                                            <span className="font-mono text-[10px] text-purple-400">Delivered</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Unified Bottom Call To Action Banner */}
                <motion.div
                    {...getFadeProps(7)}
                    className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-indigo-900/20 border border-white/10 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
                >
                    <div className="max-w-xl">
                        <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                            Ready to turn manual bottlenecks into growth?
                        </h4>
                        <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                            Tell me about your business goals and where your team spends too much manual time. Let's design a solution that actually moves the needle.
                        </p>
                    </div>

                    <Link
                        href="#contact"
                        className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white text-black font-semibold text-base hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:shadow-[0_0_35px_rgba(255,255,255,0.45)] hover:scale-[1.02] active:scale-[0.98] shrink-0"
                    >
                        <span>Discuss Your Project</span>
                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

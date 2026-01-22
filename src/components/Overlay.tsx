"use client";

import { useScroll, useTransform, motion } from "framer-motion";

export default function Overlay() {
    const { scrollYProgress } = useScroll();

    // Opacity transforms for different sections
    const opacity1 = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const opacity2 = useTransform(scrollYProgress, [0.2, 0.4, 0.6], [0, 1, 0]);
    const opacity3 = useTransform(scrollYProgress, [0.6, 0.8, 1], [0, 1, 0]);

    // Parallax Y transforms to make text move slightly different speed than scroll (sticky context)
    // Actually, since the container is sticky at 500vh, the overlay needs to be fixed or sticky too?
    // The user said "Overlay text sections that sit *on top* of the canvas".
    // If ScrollyCanvas has sticky canvas, Overlay elements should probably be fixed or sticky *within* the same container
    // OR the Overlay component should be INSIDE ScrollyCanvas? 
    // The user requested separate components.
    // Best approach: Overlay is absolute positioned on top of the sticky container in page.tsx?
    // But page.tsx has ScrollyCanvas then Overlay then Projects.
    // If ScrollyCanvas takes 500vh space, Overlay must be absolute full width/height of that 500vh container 
    // OR Overlay is fixed position?
    // If Overlay is fixed, it will stay on screen.
    // Let's make Overlay `fixed inset-0 pointer-events-none` so it sits on top.

    return (
        <div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-10 flex flex-col justify-center items-center mix-blend-difference text-white">
            {/* Section 1 */}
            <motion.div
                style={{ opacity: opacity1 }}
                className="absolute text-center"
            >
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">AYUSH GADVE</h1>
                <p className="text-xl md:text-2xl font-light mt-4 tracking-widest text-neutral-400">CREATIVE DEVELOPER</p>
            </motion.div>

            {/* Section 2 */}
            <motion.div
                style={{ opacity: opacity2 }}
                className="absolute left-[10%] top-[60%] max-w-lg"
            >
                <h2 className="text-5xl md:text-7xl font-bold leading-tight">I build digital experiences.</h2>
            </motion.div>

            {/* Section 3 */}
            <motion.div
                style={{ opacity: opacity3 }}
                className="absolute right-[10%] text-right max-w-lg"
            >
                <h2 className="text-5xl md:text-7xl font-bold leading-tight">Bridging design & engineering.</h2>
            </motion.div>
        </div>
    );
}

"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useMotionValueEvent, useTransform } from "framer-motion";

const FRAME_COUNT = 80;

export default function ScrollyCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Fix: Bind scroll progress to this specific container, not the whole page
    // This ensures frames 0-79 play fully within the 500vh section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const imgs: HTMLImageElement[] = [];

        // Assuming filenames are frame_00_delay-0.1s.webp to frame_79...
        for (let i = 0; i < FRAME_COUNT; i++) {
            const img = new Image();
            const indexStr = i.toString().padStart(2, "0");
            img.src = `/sequence/frame_${indexStr}_delay-0.1s.webp`;

            img.onload = () => {
                loadedCount++;
                if (loadedCount === FRAME_COUNT) {
                    setIsLoaded(true);
                }
            };
            imgs.push(img);
        }
        setImages(imgs);
    }, []);

    // Draw frame based on index
    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || !images[index]) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = images[index];
        const cw = canvas.width;
        const ch = canvas.height;
        const iw = img.width;
        const ih = img.height;

        // "Full frame should get used" -> Cover (Math.max)
        const scale = Math.max(cw / iw, ch / ih);
        const x = (cw - iw * scale) / 2;
        const y = (ch - ih * scale) / 2;

        ctx.clearRect(0, 0, cw, ch);
        ctx.drawImage(img, x, y, iw * scale, ih * scale);
    };

    // Resize handler
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const handleResize = () => {
            // Set canvas size to match visual size * dpr
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();

            // We want the canvas to match the viewport size since it's h-screen w-full sticky
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;

            // Attempt to re-render current frame if we have one
            // Since we don't track current index in state, we might miss a frame until scroll
            // But typically scrollYProgress triggers a change on resize? No.
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Initial size

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Sync scroll to frame
    const currentIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

    useMotionValueEvent(currentIndex, "change", (latest) => {
        if (isLoaded) {
            const index = Math.floor(latest);
            requestAnimationFrame(() => renderFrame(index));
        }
    });

    // Initial draw when loaded
    useEffect(() => {
        if (isLoaded) {
            // Trigger a render of the first frame
            renderFrame(0);
        }
    }, [isLoaded]);

    return (
        <div ref={containerRef} className="h-[500vh] w-full bg-[#121212]">
            <div className="sticky top-0 h-[100dvh] w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="h-full w-full block object-cover"
                    style={{ width: "100%", height: "100%" }}
                />
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center text-white z-50 bg-[#121212]">
                        <h2 className="text-2xl font-light tracking-widest animate-pulse">LOADING SEQUENCE</h2>
                    </div>
                )}
            </div>
        </div>
    );
}

"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function AnimatedHero() {
    return (
        <div className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-800">
            {/* 🔹 BACKGROUND VIDEO */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-80 blur-[2px]"
                >
                    <source src="/video/home.mp4" type="video/mp4" />
                </video>
                {/* Dark gradient overlay for text visibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />

                {/* Grainy Noise Overlay for Texture */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
            </div>

            {/* 🔹 CONTENT OVERLAY */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white mt-16 md:mt-20">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center"
                >
                    {/* Tagline */}
                    <motion.div
                        variants={fadeUp}
                        className="flex items-center gap-2 mb-8 border border-white/30 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md"
                    >
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                        <span className="text-xs font-bold uppercase tracking-widest text-green-300">NEXT-GENERATION HYDROGEN PLATFORM</span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        variants={fadeUp}
                        className="text-3xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]"
                    >
                        Engineering the Flow of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                            Clean Energy
                        </span>
                    </motion.h1>

                    {/* Subhead */}
                    <motion.p
                        variants={fadeUp}
                        className="text-xl md:text-2xl lg:text-3xl text-slate-100 leading-relaxed max-w-3xl mx-auto mb-10 font-light"
                    >
                        HELIONYX is developing a next-generation hydrogen production platform designed to fundamentally reduce energy consumption and unlock economically viable green hydrogen for industrial deployment.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        variants={fadeUp}
                        className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
                    >
                        <Link
                            href="/contact"
                            className="group px-6 py-3 md:px-8 md:py-4 bg-blue-600 text-white font-bold uppercase tracking-widest text-xs md:text-sm rounded-sm hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/50 flex items-center justify-center gap-2"
                        >
                            Talk to Us
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/technology"
                            className="px-6 py-3 md:px-8 md:py-4 bg-transparent border border-white/20 text-white font-bold uppercase tracking-widest text-xs md:text-sm rounded-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
                        >
                            <Play className="w-4 h-4 fill-current" />
                            Technology Overview
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

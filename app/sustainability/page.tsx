"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, Droplets, Zap, ShieldCheck, Globe2, BarChart3, Layers, Recycle } from "lucide-react";

export default function SustainabilityPage() {
    return (
        <main className="bg-white min-h-screen text-slate-900 selection:bg-blue-100">
            <Navbar />

            {/* 🔹 HERO SECTION */}
            <div className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-800">
                {/* Background Video */}
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-80 blur-[2px]"
                    >
                        <source src="/video/Sustainable_Energy_Visual_Generation.mp4" type="video/mp4" />
                    </video>
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
                    {/* Grainy Noise Overlay for Texture */}
                    <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white mt-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-green-400 font-bold tracking-widest text-xs uppercase mb-6 block"
                    >
                        Sustainability
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight"
                    >
                        Sustainability Built Into the <span className="text-green-500">Economics</span>
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="space-y-6 max-w-3xl mx-auto"
                    >
                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                            HELIONYX approaches sustainability as an engineering and system-design challenge — reducing emissions by fundamentally lowering the energy required to produce industrial hydrogen, rather than relying on offsets or temporary policy support.
                        </p>
                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-semibold">
                            Sustainability, in our view, must scale with industry. That requires systems that are efficient, resilient, and economically viable under real operating conditions.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* 🔹 SECTION 1: OUR SUSTAINABILITY PHILOSOPHY */}
            <AnimatedSection className="py-12 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">Sustainability by design, not by offset</h2>
                        <div className="space-y-6 text-lg text-slate-600">
                            <p>
                                For industrial decarbonization to scale globally, sustainability must be structural, not cosmetic. Offset-driven approaches may address short-term accounting needs, but they do not solve the underlying energy and emissions challenge at industrial scale.
                            </p>
                            <h4 className="font-bold text-slate-900">HELIONYX embeds sustainability directly into system design by focusing on:</h4>
                            <ul className="space-y-3">
                                <li className="flex gap-3 items-center">
                                    <Zap className="w-5 h-5 text-green-600 shrink-0" />
                                    <span>Reducing electricity intensity at the source</span>
                                </li>
                                <li className="flex gap-3 items-center">
                                    <Recycle className="w-5 h-5 text-green-600 shrink-0" />
                                    <span>Improving end-to-end system efficiency</span>
                                </li>
                                <li className="flex gap-3 items-center">
                                    <Layers className="w-5 h-5 text-green-600 shrink-0" />
                                    <span>Enabling deployment with significantly lower renewable overbuild</span>
                                </li>
                            </ul>
                            <div className="p-4 bg-green-50 border border-green-100 rounded text-green-800 text-sm font-medium">
                                Lower energy input reduces emissions across the entire value chain, including power generation, transmission, land use, and infrastructure requirements. This creates sustainability outcomes that are durable, measurable, and scalable.
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[250px] md:h-[400px] w-full rounded-lg overflow-hidden shadow-xl bg-white border border-slate-100">
                        <Image
                            src="/images/Sustainability/abstract-power-tower.jpeg"
                            alt="Sustainability Philosophy"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 SECTION 2: LOWER ENERGY, LOWER EMISSIONS */}
            <AnimatedSection className="py-12 md:py-24 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative h-[300px] md:h-[500px] w-full rounded-lg overflow-hidden shadow-xl bg-white border border-slate-100">
                        <Image
                            src="/images/Sustainability/43247_2021_97_Fig1_HTML.png"
                            alt="Lower Energy Emissions Chart"
                            fill
                            className="object-contain p-4"
                        />
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">Energy efficiency is the biggest sustainability lever</h2>
                        <p className="text-lg text-slate-600 mb-6">
                            In green hydrogen systems, electricity consumption is the dominant driver of lifecycle emissions, even when renewable power is used.
                        </p>
                        <div className="mb-8 p-6 bg-white border border-slate-200 rounded-lg shadow-sm">
                            <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-4">
                                <div>
                                    <span className="block text-sm text-red-500 font-bold uppercase">Conventional</span>
                                    <span className="text-2xl font-bold text-slate-900">50–55 <span className="text-base text-slate-500 font-normal">kWh/kg</span></span>
                                </div>
                                <ArrowRight className="text-slate-300" />
                                <div className="text-right">
                                    <span className="block text-sm text-green-500 font-bold uppercase">Helionyx</span>
                                    <span className="text-2xl font-bold text-slate-900">30–35 <span className="text-base text-slate-500 font-normal">kWh/kg</span></span>
                                </div>
                            </div>
                            <p className="text-sm text-slate-600">
                                Conventional electrolysis typically requires 50–55 kWh per kilogram of hydrogen, driving high upstream energy demand and associated system impacts.
                            </p>
                        </div>

                        <h4 className="font-bold text-slate-900 mb-4">By reducing energy input to 30–35 kWh/kg, HELIONYX enables:</h4>
                        <ul className="space-y-3">
                            <li className="flex gap-3 items-center text-slate-700">
                                <Leaf className="w-5 h-5 text-green-500 shrink-0" />
                                <span>Significantly lower lifecycle emissions per kilogram of hydrogen</span>
                            </li>
                            <li className="flex gap-3 items-center text-slate-700">
                                <Leaf className="w-5 h-5 text-green-500 shrink-0" />
                                <span>Reduced renewable generation and storage requirements</span>
                            </li>
                            <li className="flex gap-3 items-center text-slate-700">
                                <Leaf className="w-5 h-5 text-green-500 shrink-0" />
                                <span>Lower transmission losses and infrastructure strain</span>
                            </li>
                        </ul>
                        <p className="text-slate-600 mt-6 italic">
                            This efficiency-first approach improves sustainability without compromising reliability, output quality, or industrial scalability.
                        </p>
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 SECTION 3: SYSTEM-LEVEL IMPACT */}
            <AnimatedSection className="py-12 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">Beyond carbon intensity</h2>
                        <p className="text-lg text-slate-600 mb-6">
                            True sustainability extends beyond emissions metrics alone. HELIONYX’s lower energy intensity delivers system-level benefits, including:
                        </p>
                        <ul className="grid gap-4">
                            <li className="bg-slate-50 p-5 rounded-lg border border-slate-100">
                                <h4 className="font-bold text-slate-900 mb-1">Reduced Land Footprint</h4>
                                <p className="text-sm text-slate-600">For renewable assets and supporting infrastructure.</p>
                            </li>
                            <li className="bg-slate-50 p-5 rounded-lg border border-slate-100">
                                <h4 className="font-bold text-slate-900 mb-1">Lower Material Intensity</h4>
                                <p className="text-sm text-slate-600">Across equipment, cabling, and balance-of-plant.</p>
                            </li>
                            <li className="bg-slate-50 p-5 rounded-lg border border-slate-100">
                                <h4 className="font-bold text-slate-900 mb-1">Improved Grid Stability</h4>
                                <p className="text-sm text-slate-600">Through flexible, load-responsive operation.</p>
                            </li>
                        </ul>
                        <p className="mt-6 text-slate-600">
                            At scale, these effects compound, enabling hydrogen deployment that is less disruptive, more resilient, and easier to integrate into existing industrial and energy systems.
                        </p>
                    </div>
                    <div className="relative h-[450px] w-full rounded-lg overflow-hidden shadow-xl bg-white border border-slate-100">
                        <Image
                            src="/images/Sustainability/overlyolu-BoE8wkclT7A-unsplash.jpg"
                            alt="System Level Impact"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 SECTION 4 & 5: MATERIALS & RESOURCES */}
            <AnimatedSection className="py-12 md:py-24 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
                    {/* Materials */}
                    <div>
                        <div className="relative h-[200px] md:h-[300px] w-full rounded-lg overflow-hidden mb-8 shadow-md">
                            <Image
                                src="/images/Sustainability/front-view-man-with-wooden-blocks.jpg"
                                alt="Responsible Materials"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-slate-900">Designed for long-term sustainability</h3>
                        <p className="text-slate-600 mb-4">
                            HELIONYX avoids dependence on scarce, high-risk, or geopolitically sensitive materials such as platinum-group metals commonly used in electrolyzer systems.
                        </p>
                        <ul className="space-y-2 text-sm text-slate-700 mb-6">
                            <li className="flex gap-2 items-center"><ShieldCheck className="w-4 h-4 text-green-600" /> Reduces upstream mining and processing emissions</li>
                            <li className="flex gap-2 items-center"><ShieldCheck className="w-4 h-4 text-green-600" /> Improves long-term material availability</li>
                            <li className="flex gap-2 items-center"><ShieldCheck className="w-4 h-4 text-green-600" /> Lowers commodity price volatility exposure</li>
                        </ul>
                        <p className="text-sm text-slate-500 italic">
                            Systems are engineered for durability, maintainability, and modular replacement, extending operational life, reducing downtime, and minimizing lifecycle waste.
                        </p>
                    </div>

                    {/* Water/Resources */}
                    <div>
                        <div className="relative h-[200px] md:h-[300px] w-full rounded-lg overflow-hidden mb-8 shadow-md">
                            <Image
                                src="/images/Sustainability/smart-agriculture-iot-with-hand-planting-tree-background.jpg"
                                alt="Water & Resources"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-slate-900">Conscious deployment in resource-constrained environments</h3>
                        <p className="text-slate-600 mb-4">
                            Sustainable hydrogen deployment must account for local resource constraints, including water availability and infrastructure maturity.
                        </p>
                        <ul className="space-y-2 text-sm text-slate-700 mb-6">
                            <li className="flex gap-2 items-center"><Droplets className="w-4 h-4 text-blue-500" /> Efficient, system-level water management</li>
                            <li className="flex gap-2 items-center"><Droplets className="w-4 h-4 text-blue-500" /> Modular deployment close to demand centers</li>
                            <li className="flex gap-2 items-center"><Droplets className="w-4 h-4 text-blue-500" /> Reduced reliance on large centralized facilities</li>
                        </ul>
                        <p className="text-sm text-slate-500 italic">
                            This enables responsible deployment in industrial clusters, emerging markets, and regions with limited infrastructure, including India, without creating new environmental or social pressures.
                        </p>
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 SECTION 6: GLOBAL GOALS */}
            <AnimatedSection className="py-12 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative h-[250px] md:h-[400px] w-full rounded-lg overflow-hidden shadow-xl bg-white border border-slate-100">
                        <Image
                            src="/images/Sustainability/digital-screen-with-environment-day.jpg"
                            alt="Global Goals"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">Supporting real decarbonization pathways</h2>
                        <p className="text-lg text-slate-600 mb-6">
                            HELIONYX aligns with global and national decarbonization frameworks by enabling hydrogen solutions that are both economically and environmentally sustainable.
                        </p>
                        <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <Globe2 className="w-5 h-5 text-green-600" /> Alignment With:
                            </h4>
                            <ul className="space-y-3">
                                <li className="flex gap-3 items-center text-slate-700">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                    <span>National hydrogen missions and energy-transition strategies</span>
                                </li>
                                <li className="flex gap-3 items-center text-slate-700">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                    <span>Industrial net-zero and emissions-reduction roadmaps</span>
                                </li>
                                <li className="flex gap-3 items-center text-slate-700">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                    <span>Export-linked decarbonization and supply-chain requirements</span>
                                </li>
                            </ul>
                        </div>
                        <p className="mt-8 text-slate-600">
                            By addressing the cost and energy intensity of hydrogen production, HELIONYX supports real emissions reduction, not symbolic or accounting-based compliance.
                        </p>
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 SECTION 7: MEASURABLE IMPACT */}
            <AnimatedSection className="py-12 md:py-24 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">Focused on measurable results</h2>
                        <p className="text-lg text-slate-600 mb-6">
                            HELIONYX prioritizes sustainability outcomes that can be measured, verified, and scaled versus purely theoretical models.
                        </p>
                        <div className="space-y-6">
                            <div className="flex gap-4 p-4 bg-white rounded-lg border border-slate-200">
                                <BarChart3 className="w-8 h-8 text-green-600 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Measured</h4>
                                    <p className="text-sm text-slate-600">Using standard lifecycle methodologies for transparency and reporting.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 bg-white rounded-lg border border-slate-200">
                                <ShieldCheck className="w-8 h-8 text-green-600 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Verified</h4>
                                    <p className="text-sm text-slate-600">Across real-world operating conditions and diverse environments.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 bg-white rounded-lg border border-slate-200">
                                <Globe2 className="w-8 h-8 text-green-600 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Scaled</h4>
                                    <p className="text-sm text-slate-600">Deployment models that work across geographies and applications.</p>
                                </div>
                            </div>
                        </div>
                        <p className="mt-8 text-slate-600 font-medium">
                            Lower electricity input improves project-level carbon intensity, long-term operating stability, and financial sustainability simultaneously.
                        </p>
                    </div>
                    <div className="relative h-[450px] w-full rounded-lg overflow-hidden shadow-xl bg-white border border-slate-100">
                        <Image
                            src="/images/Sustainability/41561_2022_1043_Fig1_HTML.png"
                            alt="Measurable Impact Data"
                            fill
                            className="object-contain p-4"
                        />
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 FINAL CTA */}
            <div className="py-16 md:py-24 bg-slate-800 text-white text-center px-6">
                <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                    <span className="block text-white font-bold text-2xl mb-4">Sustainability at HELIONYX is not a separate initiative.</span>
                    It is the result of engineering systems that consume less energy, scale responsibly, and integrate cleanly into real industrial environments.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="px-6 py-3 md:px-8 md:py-4 bg-green-600 text-white font-bold rounded hover:bg-green-500 transition-colors text-sm md:text-base">
                        Explore the Technology
                    </button>
                    <button className="px-6 py-3 md:px-8 md:py-4 bg-transparent border border-white/20 text-white font-bold rounded hover:bg-white/10 transition-colors text-sm md:text-base">
                        View Partnership Models
                    </button>
                </div>
            </div>

            <Footer />
        </main>
    );
}

function ArrowRight({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
    )
}

"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Factory, Globe2, Leaf, Truck, Zap, Building2, Flame } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="bg-white min-h-screen text-slate-900 selection:bg-blue-100">
            <Navbar />

            {/* 🔹 HERO SECTION */}
            <div className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-800">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/about us/ABOUT US — Page Header Image.png"
                        alt="About Helionyx"
                        fill
                        className="object-cover opacity-80"
                        priority
                    />
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white mt-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-blue-400 font-bold tracking-widest text-xs uppercase mb-6 block"
                    >
                        About Helionyx
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight"
                    >
                        A Next-Generation Hydrogen Company <br /><span className="text-blue-500">Built on Proven Climate Technology</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto"
                    >
                        HELIONYX is a hydrogen technology and deployment platform developed through strategic partnerships in the climate-tech sector, focused on translating advanced energy systems into scalable, commercially viable hydrogen solutions.
                    </motion.p>
                </div>
            </div>

            {/* 🔹 SECTION 1: WHO WE ARE */}
            <AnimatedSection className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">Who We Are</h2>
                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                            <p>
                                HELIONYX is a clean hydrogen technology company focused on industrial-scale deployment, economic viability, and real-world execution.
                            </p>
                            <p>
                                The company was developed through partnerships with global green-technology organizations with operations across North America and Europe, and builds on a foundation of proprietary, IP-protected climate technologies.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                                <h4 className="font-bold text-blue-900 mb-2">HELIONYX’s role is clear:</h4>
                                <p className="text-blue-800 text-base">
                                    To convert advanced climate-tech capabilities into deployable hydrogen platforms aligned with industrial economics, infrastructure realities, and long-term sustainability goals.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl bg-white border border-slate-100">
                        <Image
                            src="/images/about us/building imag.png"
                            alt="Helionyx HQ"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 SECTION 2: OUR FOUNDATION */}
            <AnimatedSection className="py-24 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl bg-white border border-slate-100">
                        <Image
                            src="/images/about us/GLOBAL PRESENCE — USA • Canada • Germany.png"
                            alt="Global Presence"
                            fill
                            className="object-contain p-4"
                        />
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">Built on proven climate-technology foundations</h2>
                        <p className="text-lg text-slate-600 mb-6">
                            Our technology foundation focuses on developing integrated energy systems designed to deliver:
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex gap-3 items-center text-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                                <span>Emissions-free or ultra-low-emission operation</span>
                            </li>
                            <li className="flex gap-3 items-center text-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                                <span>Simplified installation and operational reliability</span>
                            </li>
                            <li className="flex gap-3 items-center text-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                                <span>Performance under extreme weather and grid conditions</span>
                            </li>
                            <li className="flex gap-3 items-center text-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                                <span>Long-term durability and industrial readiness</span>
                            </li>
                        </ul>
                        <p className="text-slate-600">
                            HELIONYX is built on this foundation, with a specific mandate to commercialize hydrogen and hydrogen-derived solutions using proven advanced technologies.
                        </p>
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 SECTION 3: TECHNOLOGY HERITAGE */}
            <AnimatedSection className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">Proven climate-technology capabilities</h2>
                        <p className="text-lg text-slate-600 mb-6">
                            HELIONYX leverages proven advanced technologies for:
                        </p>
                        <ul className="grid grid-cols-1 gap-3 mb-8">
                            <li className="flex gap-3 items-center bg-slate-50 p-4 rounded-lg border border-slate-100">
                                <Factory className="w-5 h-5 text-blue-600" />
                                <span className="font-medium text-slate-900">Carbon dioxide (CO₂) capture</span>
                            </li>
                            <li className="flex gap-3 items-center bg-slate-50 p-4 rounded-lg border border-slate-100">
                                <Leaf className="w-5 h-5 text-blue-600" />
                                <span className="font-medium text-slate-900">CO₂ conversion and reuse</span>
                            </li>
                            <li className="flex gap-3 items-center bg-slate-50 p-4 rounded-lg border border-slate-100">
                                <Zap className="w-5 h-5 text-blue-600" />
                                <span className="font-medium text-slate-900">Hydrogen and methanol production pathways</span>
                            </li>
                        </ul>
                        <p className="text-slate-600">
                            These technologies are designed as integrated systems, enabling closed-loop processes in which carbon is captured, reused, and converted into valuable energy products rather than released into the atmosphere.
                        </p>
                    </div>
                    <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl bg-white border border-slate-100">
                        <Image
                            src="/images/about us/TECHNOLOGY HERITAGE — IP-Protected Innovation.png"
                            alt="Technology Heritage"
                            fill
                            className="object-contain p-4"
                        />
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 SECTION 4 & 5: HYDROGEN & METHANOL + PATHWAYS */}
            <AnimatedSection className="py-24 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                        <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl bg-white border border-slate-100">
                            <Image
                                src="/images/about us/ARBON & HYDROGEN SYSTEMS — Clean Energy Pathways.png"
                                alt="Carbon & Hydrogen Systems"
                                fill
                                className="object-contain p-4"
                            />
                        </div>
                        <div>
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold mb-4 text-slate-900">Flexible production across feedstocks</h2>
                                <p className="text-slate-600 mb-4">
                                    HELIONYX supports hydrogen and methanol production from a range of feedstocks, including:
                                </p>
                                <ul className="text-sm grid grid-cols-2 gap-2 text-slate-700 font-medium mb-4">
                                    <li>• Associated petroleum gas (APG)</li>
                                    <li>• Flare gas</li>
                                    <li>• Landfill gas</li>
                                    <li>• Ethane and mixed streams</li>
                                </ul>
                                <p className="text-slate-600 text-sm italic">
                                    This flexibility enables deployment in environments where conventional hydrogen systems are inefficient, constrained, or uneconomical.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold mb-4 text-slate-900 border-t border-slate-200 pt-8">Green & Blue Hydrogen Pathways</h2>
                                <p className="text-slate-600 mb-4">
                                    HELIONYX supports both blue and green hydrogen strategies, allowing alignment with regional policy, infrastructure availability, and customer requirements.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex gap-3 items-start p-3 bg-blue-50/50 rounded">
                                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                                        <span className="text-slate-700 text-sm"><span className="font-bold text-blue-800">Blue hydrogen pathways</span> integrate carbon capture and reuse</span>
                                    </li>
                                    <li className="flex gap-3 items-start p-3 bg-green-50/50 rounded">
                                        <div className="w-2 h-2 rounded-full bg-green-600 mt-2 shrink-0" />
                                        <span className="text-slate-700 text-sm"><span className="font-bold text-green-800">Green hydrogen pathways</span> focus on ultra-low energy input and cost efficiency</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 SECTION 6: MOBILITY */}
            <AnimatedSection className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">Enabling hydrogen adoption beyond production</h2>
                        <p className="text-lg text-slate-600 mb-6">
                            HELIONYX also integrates advanced solutions for hydrogen mobility and infrastructure applications.
                        </p>
                        <h4 className="font-bold text-slate-900 mb-4">These include system concepts that enable:</h4>
                        <ul className="space-y-4 mb-8">
                            <li className="flex gap-3 items-center">
                                <Factory className="w-5 h-5 text-blue-600" />
                                <span className="text-slate-700">On-site hydrogen generation at fueling locations</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Truck className="w-5 h-5 text-blue-600" />
                                <span className="text-slate-700">Simplified hydrogen logistics</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Globe2 className="w-5 h-5 text-blue-600" />
                                <span className="text-slate-700">Support for passenger vehicles, commercial fleets, and buses</span>
                            </li>
                        </ul>
                        <p className="text-slate-600 font-medium">
                            The goal is to reduce infrastructure complexity while accelerating adoption of hydrogen in transport and logistics applications.
                        </p>
                    </div>
                    <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl bg-white border border-slate-100">
                        <Image
                            src="/images/about us/HYDROGEN FOR MOBILITY — Infrastructure & Transport.png"
                            alt="Hydrogen Mobility"
                            fill
                            className="object-contain p-4"
                        />
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 SECTION 7: BRANDS */}
            <AnimatedSection className="py-24 bg-slate-50 border-y border-slate-200">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-12 text-slate-900">HELIONYX and our ecosystem</h2>
                    <p className="text-lg text-slate-600 mb-12 max-w-3xl mx-auto">
                        HELIONYX is our specialized hydrogen technology and deployment platform, focusing on delivering industrial-scale solutions for the global energy transition.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                                <Zap className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">HELIONYX</h3>
                            <p className="text-slate-600 text-sm">Industrial-scale hydrogen production and deployment</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                                <Globe2 className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Global Partnerships</h3>
                            <p className="text-slate-600 text-sm">Technology development and deployment across North America and Europe</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                                <Flame className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Energy Solutions</h3>
                            <p className="text-slate-600 text-sm">Complementary energy conversion and mobility technologies</p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 SECTION 8 & 9: ENERGY CARRIER & MISSION */}
            <AnimatedSection className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
                    {/* Energy Carrier */}
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">Why Hydrogen Matters</h2>
                        <h4 className="text-lg font-bold text-slate-800 mb-4">Hydrogen offers compelling characteristics as a low-carbon energy carrier:</h4>
                        <ul className="space-y-4 mb-6">
                            <li className="flex gap-3 items-center text-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                <span>High gravimetric energy density</span>
                            </li>
                            <li className="flex gap-3 items-center text-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                <span>Compatibility with industrial heat, chemicals, and mobility</span>
                            </li>
                            <li className="flex gap-3 items-center text-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                <span>Ability to store and transport energy across time and distance</span>
                            </li>
                        </ul>
                        <p className="text-slate-600">
                            When produced using advanced conversion and low-carbon pathways, hydrogen can support large-scale energy needs with relatively efficient land and resource utilization.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="bg-gradient-to-br from-sky-100 to-blue-100 p-10 rounded-2xl text-slate-900 border border-blue-200">
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">Our Mission</h2>
                        <p className="text-lg text-slate-700 mb-8">
                            HELIONYX exists to bridge the gap between advanced climate technology and real-world hydrogen economics.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex gap-3 items-start">
                                <ArrowRight className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                                <span className="text-slate-800">Enable scalable, cost-effective hydrogen production</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <ArrowRight className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                                <span className="text-slate-800">Reduce emissions through carbon capture and reuse</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <ArrowRight className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                                <span className="text-slate-800">Support industrial decarbonization and clean mobility</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <ArrowRight className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                                <span className="text-slate-800">Contribute to a more resilient and sustainable global energy system</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </AnimatedSection>


            {/* 🔹 FINAL CTA */}
            <div className="py-24 bg-slate-50 text-center px-6 border-t border-slate-200">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900">HELIONYX is not just a technology company.</h2>
                <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto mb-10 leading-relaxed">
                    It is a deployment platform designed to turn climate innovation into practical, scalable hydrogen solutions.
                </p>
            </div>

            <Footer />
        </main>
    );
}

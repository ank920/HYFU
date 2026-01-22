"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
    Zap, Activity, ShieldCheck, Factory, Flame, Thermometer,
    Gauge, Server, Cpu, ArrowRight, ChevronDown, CheckCircle2,
    Layers, Atom, BarChart3, Lock
} from "lucide-react";

// --- Components ---

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
    return (
        <div className="border-b border-slate-200 last:border-0">
            <button
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
                onClick={onClick}
            >
                <span className={`text-lg md:text-xl font-bold transition-colors duration-300 ${isOpen ? "text-blue-600" : "text-slate-900 group-hover:text-blue-600"}`}>
                    {question}
                </span>
                <span className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    <ChevronDown className={`w-6 h-6 ${isOpen ? "text-blue-600" : "text-slate-400"}`} />
                </span>
            </button>
            <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                    <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
};

const FloatingSticker = ({ icon: Icon, color, delay, top, left, right, bottom }: any) => (
    <motion.div
        className={`absolute z-0 opacity-10 ${color}`}
        style={{ top, left, right, bottom }}
        animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
    >
        <Icon className="w-24 h-24 md:w-32 md:h-32" />
    </motion.div>
);

const SectionHeader = ({ label, title, description, light = false }: { label: string, title: string, description?: string, light?: boolean }) => (
    <div className="mb-12 md:mb-16 max-w-3xl">
        <span className={`font-bold tracking-widest text-xs uppercase mb-4 block ${light ? "text-blue-400" : "text-blue-600"}`}>
            {label}
        </span>
        <h2 className={`text-3xl md:text-5xl font-extrabold mb-6 leading-tight ${light ? "text-white" : "text-slate-900"}`}>
            {title}
        </h2>
        {description && (
            <p className={`text-lg md:text-xl leading-relaxed ${light ? "text-slate-300" : "text-slate-600"}`}>
                {description}
            </p>
        )}
    </div>
);

export default function TechnologyPage() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <main className="bg-white min-h-screen text-slate-900 selection:bg-blue-100 font-sans w-full overflow-x-hidden">
            <Navbar />

            {/* HERO SECTION */}
            <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/techno/hero img.png"
                        alt="HYFUX SOFC Platform"
                        fill
                        className="object-cover opacity-80"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
                    <div className="max-w-3xl">
                        <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-xs uppercase tracking-widest mb-6 backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                            Technology Platform
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
                            HYFUX Solid Oxide <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Fuel Cell (SOFC)</span> Platform
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
                            Explaining the science. Proving the performance.
                        </p>
                    </div>
                </div>
            </div>

            {/* INTRODUCTION */}
            <AnimatedSection className="py-12 md:py-20 bg-white border-b border-slate-100">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <p className="text-xl md:text-2xl font-light leading-relaxed text-slate-800 mb-8">
                        HYFUX’s technology platform is built on industrial-grade Solid Oxide Fuel Cell (SOFC) systems engineered for <span className="font-semibold text-blue-600">continuous, high-efficiency power generation</span>.
                    </p>
                    <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
                        Unlike combustion-based generation, HYFUX’s SOFC systems convert chemical energy directly into electricity, enabling step-change improvements in efficiency, emissions, and durability. The result is a power platform suited not for labs or pilots, but for real-world, mission-critical energy applications.
                    </p>
                </div>
            </AnimatedSection>

            {/* 1. TECHNOLOGY OVERVIEW */}
            <AnimatedSection className="py-12 md:py-16 bg-slate-50 relative overflow-hidden">
                <FloatingSticker icon={Atom} color="text-blue-500" top="5%" right="5%" delay={0} />
                <FloatingSticker icon={Activity} color="text-slate-400" bottom="10%" left="5%" delay={2} />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <SectionHeader
                        label="1. Technology Overview"
                        title="High-temperature electrochemical power, engineered for industry"
                        description="HYFUX’s SOFC platform is a high-temperature electrochemical power system that produces electricity through ionic transport rather than combustion."
                    />

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                Operating temperatures typically range between 700–850°C, enabling high reaction kinetics, internal fuel reforming, and exceptional electrical efficiency.
                            </p>

                            <div className="space-y-8">
                                <div className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 transition-all hover:-translate-y-1 hover:shadow-xl">
                                    <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <Activity className="w-5 h-5 text-blue-600" /> Core Characteristics
                                    </h3>
                                    <ul className="space-y-3">
                                        {[
                                            "Electrochemical (non-combustion) power generation",
                                            "High operating temperature → high efficiency",
                                            "Continuous baseload operation",
                                            "Minimal moving parts → low mechanical failure risk"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-slate-600">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 transition-all hover:-translate-y-1 hover:shadow-xl">
                                    <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <Zap className="w-5 h-5 text-blue-600" /> Technology Value
                                    </h3>
                                    <ul className="space-y-3">
                                        {[
                                            "Electrical efficiency materially higher than engines or turbines",
                                            "Ultra-low local emissions",
                                            "Stable output across wide load ranges"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-slate-600">
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="relative w-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-10 text-white shadow-2xl border-[6px] border-white">
                            <div className="text-center">
                                <h3 className="text-2xl font-bold mb-4">Business Impact</h3>
                                <p className="text-blue-100 text-lg leading-relaxed max-w-sm mx-auto">
                                    SOFCs shift power generation from fuel-burning machinery to solid-state energy conversion, fundamentally improving reliability and lifetime economics.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 2. WHAT IS SOFC */}
            <AnimatedSection className="py-12 md:py-16 bg-white relative overflow-hidden">
                <FloatingSticker icon={Zap} color="text-yellow-500" top="10%" left="10%" delay={1} />
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white bg-white">
                            <Image
                                src="/images/techno/What Is SOFC Technology.png"
                                alt="What is SOFC Technology"
                                fill
                                className="object-contain p-8"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <SectionHeader
                                label="2. The Fundamentals"
                                title="What Is SOFC Technology"
                                description="A Solid Oxide Fuel Cell generates electricity by transporting oxygen ions (O²⁻) through a solid ceramic electrolyte from cathode to anode."
                            />

                            <div className="bg-slate-50 rounded-3xl p-8 border border-white shadow-sm mb-8">
                                <h4 className="font-bold text-slate-900 mb-4">Key Components</h4>
                                <ul className="space-y-4">
                                    <li className="flex gap-4">
                                        <span className="font-bold text-blue-600 min-w-[100px]">Cathode</span>
                                        <span className="text-slate-600">Oxygen reduction</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="font-bold text-blue-600 min-w-[100px]">Electrolyte</span>
                                        <span className="text-slate-600">Oxygen-ion conducting ceramic</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="font-bold text-blue-600 min-w-[100px]">Anode</span>
                                        <span className="text-slate-600">Fuel oxidation</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="font-bold text-blue-600 min-w-[100px]">Interconnects</span>
                                        <span className="text-slate-600">Current collection and gas separation</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="space-y-2 text-slate-600">
                                <h4 className="font-bold text-slate-900 mb-2">Why High Temperature Matters</h4>
                                <p>• Enables fast ion conduction</p>
                                <p>• Allows internal reforming of hydrocarbons</p>
                                <p>• Eliminates need for precious metal catalysts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 3. HOW IT WORKS */}
            <AnimatedSection className="py-12 md:py-16 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
                <FloatingSticker icon={Factory} color="text-slate-500" bottom="5%" right="10%" delay={3} />
                <div className="max-w-7xl mx-auto px-6">
                    <SectionHeader
                        label="3. System Architecture"
                        title="How HYFUX SOFC Systems Work"
                        description="From fuel input to grid-quality AC power. HYFUX’s system architecture integrates the SOFC stack with a tightly engineered balance-of-plant (BoP)."
                    />

                    <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white mb-16 bg-white">
                        <Image
                            src="/images/techno/How HYFU SOFC Systems Work.jpg"
                            alt="How HYFUX Systems Work Diagram"
                            fill
                            className="object-contain p-4"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">System Flow</h3>
                            <div className="space-y-4">
                                {[
                                    "Fuel conditioning and pressure control",
                                    "Internal or external reforming (fuel-dependent)",
                                    "Electrochemical conversion in SOFC stacks",
                                    "DC power conditioning",
                                    "Inversion to grid-quality AC",
                                    "Thermal recovery and exhaust management"
                                ].map((step, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                                        <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 font-bold flex items-center justify-center text-sm">{i + 1}</div>
                                        <span className="text-slate-700 font-medium">{step}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-blue-900 text-white rounded-3xl p-10 flex flex-col justify-center h-fit shadow-2xl border-[6px] border-white">
                            <h3 className="text-2xl font-bold mb-6">System-Level Priorities</h3>
                            <ul className="space-y-6">
                                <li className="flex items-center gap-4">
                                    <Thermometer className="w-6 h-6 text-blue-400" />
                                    <span className="text-lg">Thermal stability</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <Gauge className="w-6 h-6 text-blue-400" />
                                    <span className="text-lg">Fuel utilization optimization</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <Zap className="w-6 h-6 text-blue-400" />
                                    <span className="text-lg">Electrical efficiency maximization</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <ShieldCheck className="w-6 h-6 text-blue-400" />
                                    <span className="text-lg">Fault-tolerant operation</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 4. PERFORMANCE COMPARISON */}
            <AnimatedSection className="py-12 md:py-16 bg-white relative overflow-hidden">
                <FloatingSticker icon={BarChart3} color="text-green-500" top="15%" right="15%" delay={1.5} />
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <SectionHeader
                                label="4. Structural Advantages"
                                title="Why SOFC Outperforms Conventional Power"
                                description="SOFCs behave more like solid-state electronics than rotating machinery—predictable, quiet, and stable."
                            />

                            <div className="mb-10">
                                <h4 className="font-bold text-slate-900 mb-4 text-lg">Key Structural Differences</h4>
                                <div className="flex gap-4">
                                    {["No flame front", "No piston/turbine", "No thermal shock"].map((item, i) => (
                                        <span key={i} className="px-4 py-2 bg-red-50 text-red-600 rounded-lg text-sm font-medium border border-red-100">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-slate-50 p-8 rounded-3xl border border-white shadow-sm">
                                <h4 className="font-bold text-slate-900 mb-6">Electrical Efficiency Comparison</h4>
                                <div className="space-y-6">
                                    <div>
                                        <div className="flex justify-between text-sm font-bold mb-2">
                                            <span className="text-blue-700">HYFUX SOFC</span>
                                            <span className="text-slate-900">~55–60%</span>
                                        </div>
                                        <div className="w-full bg-slate-200 rounded-full h-3">
                                            <div className="bg-blue-600 h-3 rounded-full w-[60%]"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm font-medium mb-2">
                                            <span className="text-slate-600">Gas Engine</span>
                                            <span className="text-slate-900">~35–42%</span>
                                        </div>
                                        <div className="w-full bg-slate-200 rounded-full h-3">
                                            <div className="bg-slate-400 h-3 rounded-full w-[42%]"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm font-medium mb-2">
                                            <span className="text-slate-600">Small Turbine</span>
                                            <span className="text-slate-900">~28–38%</span>
                                        </div>
                                        <div className="w-full bg-slate-200 rounded-full h-3">
                                            <div className="bg-slate-400 h-3 rounded-full w-[35%]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white bg-white">
                            <div className="absolute inset-0 bg-slate-50/30"></div>
                            <Image
                                src="/images/techno/Why SOFC Outperforms Conventional Power.webp"
                                alt="Efficiency Comparison"
                                fill
                                className="object-contain p-10 relative z-10"
                            />
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 5. STACK DESIGN */}
            <AnimatedSection className="py-12 md:py-16 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
                <FloatingSticker icon={Layers} color="text-blue-400" top="10%" left="5%" delay={0.5} />
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative h-[550px] w-full rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white bg-white">
                            <Image
                                src="/images/techno/Stack Design & Materials.png"
                                alt="Stack Design"
                                fill
                                className="object-contain p-6"
                            />
                        </div>
                        <div>
                            <SectionHeader
                                label="5. Materials Engineering"
                                title="Stack Design & Engineered Ceramics"
                                description="HYFUX SOFC stacks are multi-layer electrochemical assemblies optimized for ionic conductivity, mechanical stability, and thermal cycling resistance."
                            />

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-2xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-slate-100 group hover:border-blue-100 transition-colors">
                                    <Layers className="w-8 h-8 text-blue-600 mb-4" />
                                    <h4 className="font-bold text-slate-900 mb-2">Material System</h4>
                                    <ul className="text-sm text-slate-600 space-y-1">
                                        <li>• Electrolyte: YSZ-based ceramics</li>
                                        <li>• Anode: Nickel-ceramic cermet</li>
                                        <li>• Cathode: Mixed ionic-electronic oxides</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-slate-100 group hover:border-blue-100 transition-colors">
                                    <ShieldCheck className="w-8 h-8 text-blue-600 mb-4" />
                                    <h4 className="font-bold text-slate-900 mb-2">Design Focus</h4>
                                    <ul className="text-sm text-slate-600 space-y-1">
                                        <li>• Uniform temperature gradients</li>
                                        <li>• Gas sealing integrity</li>
                                        <li>• Long-term redox stability</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 6. FUEL FLEXIBILITY */}
            <AnimatedSection className="py-12 md:py-16 bg-white relative overflow-hidden">
                <FloatingSticker icon={Flame} color="text-orange-500" top="5%" right="5%" delay={2.5} />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 -skew-x-12 z-0"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <SectionHeader
                        label="6. Future Proof"
                        title="Fuel Flexibility & Hydrogen Readiness"
                        description="HYFUX SOFC systems are designed for fuel-agnostic electrochemical operation. Customers can deploy today on available fuels and transition to hydrogen without stranded assets."
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {[
                            { name: "Natural Gas", status: "Available Now", color: "bg-slate-800" },
                            { name: "Biogas / RNG", status: "Carbon Neutral", color: "bg-green-600" },
                            { name: "Hydrogen Blends", status: "Transition Ready", color: "bg-blue-600" },
                            { name: "Pure Hydrogen", status: "Future Proof", color: "bg-cyan-500" }
                        ].map((fuel, i) => (
                            <div key={i} className={`p-8 rounded-3xl text-white shadow-xl ${fuel.color} flex flex-col justify-between min-h-[180px] hover:scale-105 transition-transform duration-300`}>
                                <Flame className="w-8 h-8 opacity-80" />
                                <div>
                                    <h4 className="font-bold text-lg">{fuel.name}</h4>
                                    <span className="text-xs opacity-80 uppercase tracking-wider">{fuel.status}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white bg-white">
                        <Image
                            src="/images/techno/Fuel Flexibility & Hydrogen Readiness.jpg"
                            alt="Fuel Flexibility Diagram"
                            fill
                            className="object-contain p-6"
                        />
                    </div>
                </div>
            </AnimatedSection>

            {/* 7. PERFORMANCE & RELIABILITY */}
            <AnimatedSection className="py-12 md:py-16 bg-slate-900 text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="font-bold tracking-widest text-xs uppercase mb-4 block text-blue-400">
                                7. Industrial Duty
                            </span>
                            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                                Performance Metrics & Reliability
                            </h2>
                            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                                Designed for continuous industrial duty with no rotating machinery and redundant controls.
                            </p>

                            <div className="grid grid-cols-2 gap-8">
                                {[
                                    { label: "Electrical Efficiency", val: "55–60%" },
                                    { label: "CHP Efficiency", val: ">85%" },
                                    { label: "Availability", val: ">95%" },
                                    { label: "MTBF", val: ">40k hrs" }
                                ].map((stat, i) => (
                                    <div key={i} className="border-l-2 border-blue-500 pl-6">
                                        <div className="text-3xl font-bold mb-1">{stat.val}</div>
                                        <div className="text-sm text-slate-400 uppercase tracking-wider">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-[550px] w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-700 bg-slate-800">
                            <Image
                                src="/images/techno/Performance Metrics & Reliability.png"
                                alt="Performance Metrics Chart"
                                fill
                                className="object-contain p-6"
                            />
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 8. SAFETY & CONTROLS */}
            <AnimatedSection className="py-12 md:py-16 bg-white relative overflow-hidden">
                <FloatingSticker icon={ShieldCheck} color="text-blue-600" bottom="10%" left="10%" delay={1} />
                <div className="max-w-7xl mx-auto px-6">
                    <SectionHeader
                        label="8. Industrial-Grade Safety"
                        title="Safety, Controls & Monitoring"
                        description="High-temperature systems require control precision, not operator intervention. HYFUX systems incorporate multi-layered safety and control logic."
                    />

                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="grid gap-6">
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex gap-4">
                                <Lock className="w-10 h-10 text-red-500" />
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-2">Safety Architecture</h4>
                                    <ul className="text-sm text-slate-600 space-y-1">
                                        <li>• Continuous gas detection</li>
                                        <li>• Automated purge/isolation</li>
                                        <li>• Thermal runaway prevention</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex gap-4">
                                <Server className="w-10 h-10 text-blue-500" />
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-2">Control Systems</h4>
                                    <ul className="text-sm text-slate-600 space-y-1">
                                        <li>• Real-time SCADA integration</li>
                                        <li>• Predictive diagnostics</li>
                                        <li>• Remote monitoring center</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white bg-white">
                            <Image
                                src="/images/techno/Safety, Controls & Monitoring.gif"
                                alt="Controls Interface"
                                fill
                                unoptimized
                                className="object-contain p-6"
                            />
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 9. ROADMAP */}
            <AnimatedSection className="py-12 md:py-16 bg-slate-50 border-t border-slate-200">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900">Technology Roadmap</h2>
                    <p className="text-lg text-slate-600 mb-12">
                        HYFUX’s technology roadmap focuses on incremental, bankable improvements—improving cost, efficiency, and durability.
                    </p>

                    <div className="grid md:grid-cols-4 gap-4">
                        {[
                            "Higher power density stacks",
                            "Reduced degradation rates",
                            "Hydrogen-optimized operation",
                            "Lower BoP parasitics"
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col items-center gap-4 hover:-translate-y-2 transition-all duration-300">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold">{i + 1}</div>
                                <p className="font-bold text-slate-800 text-sm leading-snug">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* FAQ */}
            <div className="bg-white py-12 md:py-16 border-t border-slate-100">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Is SOFC technology proven or experimental?", a: "SOFCs have decades of development history and are now deployed in commercial industrial systems worldwide." },
                            { q: "Why does operating at high temperature help efficiency?", a: "Higher temperatures increase ionic conductivity and allow direct fuel utilization without extensive external reforming." },
                            { q: "Can SOFCs ramp power output quickly?", a: "They are optimized for baseload operation with controlled ramp rates, not fast transient cycling." },
                            { q: "How does degradation affect lifetime?", a: "Modern SOFC systems are engineered to limit degradation to low single-digit percentages per year under steady operation." },
                            { q: "Is hydrogen mandatory for SOFC operation?", a: "No. Hydrogen readiness enables future transition, but SOFCs operate efficiently on today’s fuels." }
                        ].map((faq, i) => (
                            <FAQItem
                                key={i}
                                question={faq.q}
                                answer={faq.a}
                                isOpen={openFAQ === i}
                                onClick={() => toggleFAQ(i)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}

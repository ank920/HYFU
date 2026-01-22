"use client";

import AnimatedHero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Zap, CheckCircle2, Factory, Layers, ShieldCheck, Leaf, Activity, BarChart3, Building2, Cpu, Truck, Stethoscope, ChevronDown, Globe, Wrench } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useState } from "react";

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

const SectionHeader = ({ label, title, description, light = false }: { label: string, title: string, description?: string, light?: boolean }) => (
    <div className="mb-12 md:mb-20 max-w-3xl">
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

export default function Home() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <main className="bg-white min-h-screen text-slate-900 selection:bg-blue-100 font-sans w-full overflow-x-hidden">
            <Navbar />

            {/* HERO SECTION */}
            <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-50">
                {/* Background Video/Image */}
                <div className="absolute inset-0 z-0 h-full w-full">
                    <Image
                        src="/images/home page/Real-life clean energy industrial facility.png"
                        alt="Real-life clean energy industrial facility"
                        fill
                        className="h-full w-full object-cover"
                        priority
                    />
                    {/* Premium Gradient Overlay - Removed White Layer */}
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400/20 rounded-full blur-[100px] animate-pulse"></div>
                    <div className="absolute top-1/2 -left-24 w-72 h-72 bg-cyan-400/10 rounded-full blur-[80px]"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center pt-20">
                    <div className="text-left animate-fade-in-up">
                        <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/80 backdrop-blur-md text-blue-700 font-bold text-xs uppercase tracking-widest mb-8 border border-blue-100 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                            Industrial & Infrastructure Power
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight text-slate-900">
                            High-Efficiency Solid Oxide <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500">Fuel Cell Platforms</span>
                        </h1>
                        <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light max-w-xl">
                            Reliable, low-carbon power engineered for continuous operation, fuel flexibility, and grid-independent performance.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5">
                            <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-600 hover:to-blue-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2 transform hover:-translate-y-0.5">
                                Request Briefing <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/technology" className="px-8 py-4 bg-white/80 backdrop-blur-sm border border-slate-200 hover:bg-white text-slate-900 font-bold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center">
                                View Specs
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* INTRO: HYFU OVERVIEW */}
            <AnimatedSection className="py-16 bg-gradient-to-b from-white to-blue-50/30 border-b border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-slate-50/50 opacity-50 z-0"></div>
                <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                    <p className="text-xl md:text-3xl font-light leading-relaxed text-slate-800 tracking-tight">
                        <span className="font-bold text-slate-900">HYFUX</span> is a clean-energy technology company focused on Solid Oxide Fuel Cell (SOFC) systems. Unlike intermittent renewables, our systems provide <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600">always-on power</span> with predictable performance and industrial-grade reliability.
                    </p>
                </div>
            </AnimatedSection>

            {/* 1. THE ENERGY CHALLENGE */}
            <AnimatedSection className="py-12 md:py-20 bg-slate-50 relative">
                {/* Decorative background blobs */}
                <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-start">
                        <div>
                            <SectionHeader
                                label="1. The Energy Challenge"
                                title="Industrial Power Needs Are Changing"
                                description="Global energy users face a convergence of challenges: rising costs, grid volatility, and decarbonization pressure."
                            />

                            <ul className="space-y-6 mb-10">
                                {[
                                    "Rising electricity costs and grid volatility",
                                    "Increasing pressure to decarbonize operations",
                                    "Demand for 24/7 power reliability",
                                    "Constraints on land, water, and grid capacity"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-5 p-5 bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-100 transition-all duration-300">
                                        <div className="bg-red-50 p-3 rounded-xl text-red-500 shadow-inner">
                                            <Activity className="w-5 h-5" />
                                        </div>
                                        <span className="text-lg text-slate-700 font-medium pt-1">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-lg blur opacity-20"></div>
                                <p className="relative bg-white p-6 rounded-lg text-slate-600 italic border-l-4 border-blue-600">
                                    Traditional solutions—diesel gensets, grid dependence, or large renewable installations—struggle to meet all four simultaneous requirements.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-8 mt-8 lg:mt-0">
                            {/* Image 1: Industrial Demand */}
                            <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl group border border-slate-100 bg-white">
                                <div className="relative h-[280px] w-full">
                                    <Image
                                        src="/images/home page/Industrial Power Needs Are Changing.jpg"
                                        alt="Industrial energy demand landscape"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="bg-white p-6 border-t border-slate-50">
                                    <p className="text-slate-900 font-bold text-lg uppercase tracking-wide">Complex Energy Landscape</p>
                                </div>
                            </div>

                            {/* Card 2: Resilience - Replaces Grid Infra Image */}
                            <div className="relative h-[240px] w-full ml-auto max-w-md rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white bg-gradient-to-br from-slate-900 to-blue-900 p-8 flex flex-col justify-center group -mt-16 z-20 hover:z-30 transition-all hover:-translate-y-2">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 border border-white/20">
                                        <ShieldCheck className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Grid Resilience</h3>
                                    <p className="text-blue-100 text-sm leading-relaxed">Secure your operations against increasing grid instability and outages.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 2. PLATFORM OVERVIEW */}
            <div className="bg-white text-slate-900 py-12 md:py-20 border-t border-slate-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-50 via-white to-white z-0"></div>

                <AnimatedSection className="max-w-7xl mx-auto px-6 relative z-10">
                    <SectionHeader
                        light={false}
                        label="2. Platform Overview"
                        title="High-Efficiency Electrochemical Power"
                        description="HYFUX systems generate electricity through electrochemical reactions, not combustion. This allows for superior efficiency and ultra-low emissions."
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                        {[
                            { label: "Electrical Efficiency", val: "~60%", sub: "AC, LHV (Estimated)", icon: Zap },
                            { label: "CHP Efficiency", val: ">85%", sub: "Combined Heat & Power", icon: Factory },
                            { label: "Availability", val: "Continuous", sub: "Steady Output", icon: Activity },
                            { label: "Reliability", val: "High", sub: "Minimal Moving Parts", icon: ShieldCheck },
                        ].map((stat, i) => (
                            <div key={i} className="group bg-white border border-slate-100 p-8 rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500">
                                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-500">
                                    <stat.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-500" />
                                </div>
                                <div className="text-4xl font-extrabold text-slate-900 mb-2">{stat.val}</div>
                                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">{stat.label}</div>
                                <div className="text-xs text-slate-400">{stat.sub}</div>
                            </div>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-2 relative w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-100 group bg-white flex flex-col">
                            <div className="relative h-[300px] w-full bg-slate-50 border-b border-slate-50">
                                <Image
                                    src="/images/home page/SOFC Working Principle.jpg"
                                    alt="SOFC Working Principle"
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Electrochemical Generation</h3>
                                <p className="text-slate-600 max-w-lg">Direct conversion from fuel to electron, bypassing the combustion cycle entirely.</p>
                            </div>
                        </div>
                        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-100 group bg-white flex flex-col">
                            <div className="relative h-[300px] w-full bg-slate-50 border-b border-slate-50">
                                <Image
                                    src="/images/home page/SOFC Stack Architecture.png"
                                    alt="SOFC Stack Architecture"
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>
                            <div className="p-8 mt-auto">
                                <h3 className="text-xl font-bold text-slate-900">Advanced Stack Design</h3>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>

            {/* 3. COMPARISON */}
            <AnimatedSection className="py-12 md:py-20 bg-blue-50/30 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="order-2 lg:order-1">
                            {/* Visual Comparison */}
                            <div className="relative h-[550px] w-full rounded-[2rem] overflow-hidden shadow-2xl border border-white bg-white">
                                <div className="absolute inset-0 bg-slate-50/50"></div>
                                <Image
                                    src="/images/home page/Fuel Cell vs Conventional.jpg"
                                    alt="Fuel Cell vs Conventional"
                                    fill
                                    className="object-contain p-10 relative z-10"
                                />
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <SectionHeader
                                label="3. Operational Advantage"
                                title="Why SOFCs Outperform"
                                description="Compared to internal combustion engines or gas turbines, SOFCs operate at high temperatures, enabling direct conversion of fuel to electricity."
                            />

                            <div className="space-y-4">
                                {[
                                    { title: "Direct Conversion", desc: "No mechanical energy loss." },
                                    { title: "Internal Reforming", desc: "Fuel flexibility within the stack." },
                                    { title: "Stable Efficiency", desc: "Consistent performance across load ranges." },
                                    { title: "Lower Maintenance", desc: "No pistons, no gears, no oil changes." }
                                ].map((feature, i) => (
                                    <div key={i} className="flex gap-5 items-start p-4 hover:bg-white rounded-xl transition-colors duration-300">
                                        <div className="bg-green-100 p-2 rounded-full mt-1 flex-shrink-0">
                                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg mb-1">{feature.title}</h4>
                                            <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 4. MODULAR ARCHITECTURE */}
            <AnimatedSection className="py-12 md:py-20 bg-white border-y border-slate-50">
                <div className="max-w-7xl mx-auto px-6 text-center mb-16">
                    <SectionHeader
                        label="4. Scalability"
                        title="Modular Architecture Designed for Scale"
                        description="From Hundreds of Kilowatts to Multi-Megawatts. Standardized power modules allow for rapid deployment and incremental expansion."
                    />
                </div>

                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
                    {[
                        { title: "Rapid Deployment", desc: "Factory-assembled units reduce on-site construction time.", icon: Layers },
                        { title: "Incremental Growth", desc: "Start with 1MW, expand to 4MW as demand grows.", icon: BarChart3 },
                        { title: "Factory Tested", desc: "Pre-validated reliability before shipping.", icon: ShieldCheck }
                    ].map((item, i) => (
                        <div key={i} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:-translate-y-2 flex flex-col h-full bg-gradient-to-br from-white to-slate-50/50">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-500 shadow-inner">
                                <item.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-lg">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </AnimatedSection>

            {/* 5. FUEL FLEXIBILITY - BENTO GRID STYLE */}
            <AnimatedSection className="py-12 md:py-20 bg-slate-50/80 relative">
                {/* Background decorative elements */}
                <div className="absolute top-1/3 left-0 w-full h-[500px] bg-gradient-to-r from-blue-50/50 to-transparent skew-y-6 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-1">
                            <SectionHeader
                                label="5. Future Proof"
                                title="Hydrogen-Ready by Design"
                                description="Operate on today's fuels and transition seamlessly to tomorrows Hydrogen logic without stranded assets."
                            />
                            <div className="bg-white p-8 rounded-2xl border-l-4 border-green-500 shadow-lg">
                                <h4 className="font-bold text-slate-900 mb-3 text-lg">Business Value</h4>
                                <p className="text-slate-600 text-base leading-relaxed">Immediate deployment using existing gas infrastructure, with a clear pathway to Net-Zero.</p>
                            </div>
                        </div>

                        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
                            <div className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-[240px]">
                                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center group-hover:bg-slate-900 transition-colors duration-300">
                                    <Factory className="w-6 h-6 text-slate-500 group-hover:text-white" />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-slate-900 mb-1">Natural Gas</h4>
                                    <p className="text-slate-500 font-medium">Current Infrastructure</p>
                                </div>
                            </div>
                            <div className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-[240px]">
                                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
                                    <Leaf className="w-6 h-6 text-green-600 group-hover:text-white" />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-slate-900 mb-1">Biogas / RNG</h4>
                                    <p className="text-slate-500 font-medium">Renewable Carbon Neutral</p>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-3xl shadow-xl flex flex-col justify-between h-[240px] text-white sm:col-span-2 relative overflow-hidden group">
                                <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-white/20 transition-all duration-700"></div>
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                                    <Zap className="w-6 h-6 text-white" />
                                </div>
                                <div className="relative z-10">
                                    <h4 className="text-3xl font-bold text-white mb-2">Hydrogen</h4>
                                    <p className="text-blue-100 font-medium text-lg">Future Pure H₂ Operation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 6 & 7. RELIABILITY & ENVIRONMENT */}
            <div className="bg-white text-slate-900 py-12 md:py-20 border-t border-slate-100">
                <AnimatedSection className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24">
                    <div>
                        <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-6 block">6. Reliability</span>
                        <h2 className="text-4xl font-extrabold mb-8 text-slate-900 leading-tight">Designed for 24/7 <br /> Industrial Duty</h2>
                        <ul className="space-y-8 mt-10">
                            {[
                                { val: ">95%", label: "Availability", desc: "Steady-state operation." },
                                { val: "40k+", label: "Operating Hours", desc: "MTBF (Estimated)." },
                                { val: "Annual", label: "Maintenance", desc: "Planned intervals." }
                            ].map((stat, i) => (
                                <li key={i} className="flex items-center gap-8 group">
                                    <span className="text-5xl font-extrabold text-slate-900 w-28 tracking-tighter group-hover:text-blue-600 transition-colors">{stat.val}</span>
                                    <div className="border-l-2 border-slate-100 pl-6 group-hover:border-blue-200 transition-colors">
                                        <h4 className="text-blue-600 font-bold uppercase text-xs tracking-widest mb-1">{stat.label}</h4>
                                        <p className="text-slate-500 font-medium">{stat.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <span className="text-green-600 font-bold text-xs uppercase tracking-widest mb-6 block">7. Environment</span>
                        <h2 className="text-4xl font-extrabold mb-8 text-slate-900 leading-tight">Clean Power Without Compromise</h2>
                        <div className="relative h-[350px] w-full rounded-[2rem] overflow-hidden mb-8 border border-slate-100 shadow-2xl group">
                            <Image
                                src="/images/home page/Clean Energy Landscape.jpg"
                                alt="Clean Energy Landscape"
                                fill
                                className="object-contain transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </div>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Near-zero NOx and SOx. No combustion particulates. HYFUX provides an immediate pathway to decarbonization.
                        </p>
                    </div>
                </AnimatedSection>
            </div>

            {/* 8. TARGET CUSTOMERS */}
            <AnimatedSection className="py-12 md:py-20 bg-blue-50/20">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionHeader
                        label="8. Use Cases"
                        title="Built for Mission-Critical Applications"
                        description="HYFUX serves industries where downtime is not an option."
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Data Centers", icon: Cpu, desc: "Ultra-reliable power for uptime-critical infrastructure." },
                            { title: "Manufacturing", icon: Factory, desc: "Efficient baseload for energy-intensive processes." },
                            { title: "Logistics", icon: Truck, desc: "Future-proof power for EV fleets and warehousing." },
                            { title: "Healthcare", icon: Stethoscope, desc: "Resilient microgrid solutions for life-safety systems." }
                        ].map((useCase, i) => (
                            <div key={i} className="group bg-white rounded-3xl p-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] transition-all duration-300 border border-slate-100 h-[260px] flex flex-col justify-between hover:bg-slate-50 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100 rounded-bl-[100px] opacity-50 group-hover:bg-blue-50 transition-colors duration-500 -mr-10 -mt-10"></div>
                                <div className="relative z-10 w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    <useCase.icon className="w-7 h-7 text-slate-700 group-hover:text-blue-600 transition-colors" />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{useCase.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{useCase.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* 9. COMMERCIAL MODEL */}
            <AnimatedSection className="py-12 md:py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <SectionHeader
                                label="9. Deployment"
                                title="Engineered for Real-World Adoption"
                            />
                            <div className="space-y-8">
                                <div className="flex gap-6 group">
                                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center font-bold text-xl flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">1</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-xl mb-1">Site Assessment & Engineering</h4>
                                        <p className="text-slate-600">Detailed planning for integration.</p>
                                    </div>
                                </div>
                                <div className="w-0.5 h-12 bg-slate-100 ml-6"></div>
                                <div className="flex gap-6 group">
                                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center font-bold text-xl flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">2</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-xl mb-1">Factory Assembly & Testing</h4>
                                        <p className="text-slate-600">Modular build for quality assurance.</p>
                                    </div>
                                </div>
                                <div className="w-0.5 h-12 bg-slate-100 ml-6"></div>
                                <div className="flex gap-6 group">
                                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center font-bold text-xl flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">3</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-xl mb-1">Installation & Commissioning</h4>
                                        <p className="text-slate-600">Rapid on-site deployment.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[450px] w-full rounded-[2rem] overflow-hidden shadow-2xl border-[8px] border-slate-50">
                            <Image
                                src="/images/home page/ngineering Planning.png"
                                alt="Engineering Planning"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 10. VISION & CTA */}
            <div className="relative py-24 bg-slate-50 overflow-hidden text-center border-t border-slate-200">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-white opacity-80"></div>
                    {/* Abstract background shapes */}
                    <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px]"></div>
                    <div className="absolute top-40 right-40 w-[400px] h-[400px] bg-cyan-100/50 rounded-full blur-[100px]"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6">
                    <span className="inline-block py-2 px-6 rounded-full bg-white border border-slate-200 text-blue-600 font-bold text-xs uppercase tracking-widest mb-8 shadow-sm">10. Our Vision</span>
                    <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-10 leading-[1.1] tracking-tight">
                        Building the Backbone of <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Clean Industrial Power.</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 my-16 text-left max-w-3xl mx-auto">
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
                            <h4 className="text-slate-900 font-bold mb-3 text-xl">Technical Goals</h4>
                            <p className="text-slate-600">Higher-density stacks, Hydrogen-optimized systems, and AI-driven performance optimization.</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
                            <h4 className="text-slate-900 font-bold mb-3 text-xl">Commercial Goals</h4>
                            <p className="text-slate-600">Cost reduction through operational scale, Global manufacturing footprint.</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link href="/contact" className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-xl hover:shadow-blue-600/30 text-lg hover:-translate-y-1">
                            Partner with HYFUX
                        </Link>
                        <Link href="/contact" className="px-10 py-5 bg-white border border-slate-200 text-slate-900 font-bold rounded-xl hover:bg-slate-50 transition-all shadow-md hover:shadow-xl text-lg hover:-translate-y-1">
                            Request Technical Briefing
                        </Link>
                    </div>
                </div>
            </div>

            {/* FAQ SECTION */}
            <div className="bg-white py-12 md:py-20 relative">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-4xl font-extrabold text-slate-900 mb-16 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Is HYFUX technology commercially ready?", a: "Yes. HYFUX focuses on deployable SOFC platforms engineered for industrial uptime and long operating life." },
                            { q: "Can HYFUX systems run on hydrogen today?", a: "They are hydrogen-ready and can operate on blended fuels, with full hydrogen capability as supply matures." },
                            { q: "How does SOFC efficiency compare to gas engines?", a: "SOFC systems deliver significantly higher electrical efficiency, especially at small-to-mid scale." },
                            { q: "What industries benefit most?", a: "Industries requiring continuous, reliable power with emissions constraints—data centers, healthcare, manufacturing." },
                            { q: "Does HYFUX replace renewables?", a: "No. HYFUX complements renewables by providing clean baseload power." }
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

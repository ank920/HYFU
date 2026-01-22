"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
    Activity, ArrowRight, BarChart3, Building2, CheckCircle2,
    ChevronDown, Cpu, Factory, Globe, HeartPulse, Layers,
    Leaf, ShieldCheck, Zap, TrendingUp, Coins, LayoutGrid, Lock
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

const SectionHeader = ({ label, title, description, light = false, className = "" }: { label: string, title: string, description?: string, light?: boolean, className?: string }) => (
    <div className={`mb-10 max-w-3xl ${className}`}>
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

export default function ApplicationsPage() {
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
                        src="/images/application/hero.jpg"
                        alt="HYFUX Applications"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
                    <div className="max-w-4xl text-left animate-fade-in-up">
                        <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-xs uppercase tracking-widest mb-6 backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                            3. Applications
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1]">
                            Where HYFUX Delivers <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Measurable User Value</span>
                        </h1>
                        <p className="text-lg md:text-3xl text-slate-200 font-light leading-relaxed mb-6">
                            Reliable power. Lower emissions. Predictable economics.
                        </p>
                    </div>
                </div>
            </div>

            {/* PAGE INTRODUCTION */}
            <AnimatedSection className="py-12 md:py-20 bg-white border-b border-slate-100">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <p className="text-xl md:text-2xl font-light leading-relaxed text-slate-800 mb-8">
                        HYFUX’s power platforms are designed around <span className="font-semibold text-blue-600">customer outcomes</span>, not theoretical performance.
                    </p>
                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                        In real-world energy environments—where uptime, cost stability, emissions compliance, and scalability matter—HYFUX systems deliver dispatchable, on-site power that performs consistently across industries.
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 inline-block text-left mb-8 shadow-sm">
                        <p className="text-slate-700 font-medium italic">
                            This page focuses exclusively on how customers use HYFUX systems, what problems they solve, and the business results achieved. There is no electrochemistry, no fuel-cell theory, and no manufacturing discussion—only applications, value creation, and use-case outcomes.
                        </p>
                    </div>
                    <p className="text-lg font-bold text-slate-900">
                        HYFUX systems are deployed where energy failure is expensive, interruptions are unacceptable, and long-term operating economics matter more than short-term incentives.
                    </p>
                </div>
            </AnimatedSection>

            {/* 1. APPLICATION FRAMEWORK */}
            <AnimatedSection className="py-12 md:py-20 bg-slate-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div className="order-2 lg:order-1">
                            {/* Diagram Image: Contain to prevent crop */}
                            <div className="relative w-full rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white group hover:shadow-2xl transition-all duration-500 p-6">
                                <div className="h-[400px] relative">
                                    <Image
                                        src="/images/application/Application Framework How Customers Use HYFU.jpg"
                                        alt="Application Framework Diagram"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="mt-4 pt-4 border-t border-slate-100">
                                    <h4 className="text-slate-900 font-bold text-lg mb-1">Revenue-Protecting Infrastructure</h4>
                                    <p className="text-slate-500 text-sm">Not experimental sustainability projects.</p>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <SectionHeader
                                label="1. Application Framework"
                                title="How Customers Use HYFUX"
                                description="Designed for on-site, behind-the-meter deployment. Across all applications, HYFUX systems follow a common deployment logic."
                            />

                            <div className="grid gap-6">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                            <Layers className="w-5 h-5" />
                                        </div>
                                        <h4 className="text-lg font-bold text-slate-900">Core Use Pattern</h4>
                                    </div>
                                    <ul className="space-y-3 text-slate-600 pl-2">
                                        {[
                                            "Installed on customer premises",
                                            "Operated as primary baseload power",
                                            "Grid used as secondary or backup",
                                            "Sized to cover critical or majority load"
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-3 items-start">
                                                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                                <span className="leading-snug">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-green-200 transition-colors">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                                            <BarChart3 className="w-5 h-5" />
                                        </div>
                                        <h4 className="text-lg font-bold text-slate-900">Customer Value Drivers</h4>
                                    </div>
                                    <ul className="space-y-3 text-slate-600 pl-2">
                                        {[
                                            "Energy cost predictability",
                                            "Reduced exposure to grid outages",
                                            "Lower emissions without operational trade-offs",
                                            "High utilization (not standby assets)"
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-3 items-start">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                                <span className="leading-snug">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 2. DATA CENTERS */}
            <AnimatedSection className="py-12 md:py-20 bg-white text-slate-900 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionHeader
                        label="2. Data Centers"
                        title="Continuous Power for Digital Infrastructure"
                        description="Data centers require uninterrupted, high-quality power. Even milliseconds of disruption can result in service downtime, SLA penalties, and reputational damage."
                    />

                    <div className="grid lg:grid-cols-2 gap-12 mb-12">
                        {/* Text Content */}
                        <div className="space-y-8">
                            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2 text-xl">
                                    <Cpu className="w-6 h-6 text-blue-600" /> How HYFUX is used
                                </h4>
                                <ul className="space-y-4">
                                    {["On-site baseload power (1–10+ MW scale)", "Grid as secondary source", "Diesel generators relegated to emergency-only use"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4 text-slate-700">
                                            <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0"></div>{item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white p-2 rounded-xl">
                                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <Activity className="w-5 h-5 text-green-600" /> Key Metrics
                                </h4>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { l: "Availability", v: "95%" },
                                        { l: "Diesel Use", v: "-90%" },
                                        { l: "Emissions", v: "Low" },
                                        { l: "Cost", v: "Stable" }
                                    ].map((item, i) => (
                                        <div key={i} className="bg-green-50 p-4 rounded-2xl text-center border border-green-100">
                                            <div className="font-bold text-xl text-slate-900">{item.v}</div>
                                            <div className="text-xs text-slate-500 font-bold uppercase">{item.l}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Use-Case Card - LIGHT THEME */}
                        <div className="bg-white border border-blue-200 p-8 rounded-3xl shadow-lg flex flex-col justify-center relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-[40px] -mr-16 -mt-16"></div>
                            <h4 className="font-bold text-2xl mb-4 flex items-center gap-3 relative z-10 text-blue-700"><Globe className="w-6 h-6" /> Use-Case Outcome</h4>
                            <p className="leading-relaxed text-slate-600 text-lg relative z-10 mb-6">
                                "A 5 MW data center campus deploys HYFUX systems to supply 70% of baseload demand, reducing grid dependence and cutting diesel generator runtime by &gt;90%."
                            </p>
                            <p className="text-sm text-slate-400 italic relative z-10 border-t border-slate-100 pt-4">Estimated — assumptions: Tier III facility, natural gas baseline.</p>
                        </div>
                    </div>

                    {/* Image Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-lg border border-slate-100 group">
                            <Image
                                src="/images/application/Data Centers.jpg"
                                alt="Data Center Facility"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-lg border border-slate-100 group">
                            <Image
                                src="/images/application/Data Centers2.webp"
                                alt="Server Racks"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 3. MANUFACTURING */}
            <AnimatedSection className="py-12 md:py-20 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionHeader
                        label="3. Manufacturing & Industrial"
                        title="Powering Continuous Processes"
                        description="Manufacturing facilities—especially continuous or semi-continuous processes—are highly sensitive to voltage fluctuations, power interruptions, and peak-demand charges."
                    />

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {/* CONTAINED IMAGE to fix zoom */}
                        <div className="relative w-full rounded-3xl overflow-hidden shadow-lg bg-white border border-slate-200 group p-2">
                            <div className="h-[350px] relative">
                                <Image
                                    src="/images/application/Manufacturing & Industrial Facilities.webp"
                                    alt="Industrial Facility"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="px-4 pb-2 bg-white">
                                <p className="font-bold text-slate-900 text-sm uppercase tracking-wide">Heavy Industry</p>
                            </div>
                        </div>
                        <div className="relative w-full rounded-3xl overflow-hidden shadow-lg bg-white border border-slate-200 group p-2">
                            <div className="h-[350px] relative">
                                <Image
                                    src="/images/application/Manufacturing & Industrial Facilities2.webp"
                                    alt="Industrial Facility Details"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="px-4 pb-2 bg-white">
                                <p className="font-bold text-slate-900 text-sm uppercase tracking-wide">Process Control</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform">
                            <Factory className="w-10 h-10 text-blue-600 mb-6" />
                            <h4 className="font-bold text-xl text-slate-900 mb-4">How HYFUX is used</h4>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex gap-3 text-sm"><CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5" /> Primary power source for critical lines</li>
                                <li className="flex gap-3 text-sm"><CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5" /> CHP integration for process heat</li>
                                <li className="flex gap-3 text-sm"><CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5" /> Peak-shaving & demand-charge reduction</li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform">
                            <ShieldCheck className="w-10 h-10 text-green-600 mb-6" />
                            <h4 className="font-bold text-xl text-slate-900 mb-4">Operational Value</h4>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex gap-3 text-sm"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" /> Reduced unplanned downtime</li>
                                <li className="flex gap-3 text-sm"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" /> Lower exposure to grid instability</li>
                                <li className="flex gap-3 text-sm"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" /> Improved energy cost forecasting</li>
                            </ul>
                        </div>
                        {/* Light Theme Card */}
                        <div className="bg-slate-50 p-8 rounded-3xl shadow-lg flex flex-col justify-center border border-slate-200">
                            <h4 className="font-bold text-xl mb-4 text-blue-600">Illustrative Outcome</h4>
                            <p className="leading-relaxed text-slate-700 mb-6 font-light">
                                "A specialty chemicals plant installs a 3 MW HYFUX system to stabilize power for sensitive production lines, achieving consistent output quality and reducing grid-related shutdowns."
                            </p>
                            <div className="w-full h-px bg-slate-200 mb-4"></div>
                            <p className="text-xs text-slate-500">Estimated — assumptions: 24/7 operation, grid volatility environment.</p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 4. HEALTHCARE */}
            <AnimatedSection className="py-12 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-slate-50 group">
                            <Image
                                src="/images/application/Healthcare Facilities.jpg"
                                alt="Healthcare Facilities"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <HeartPulse className="w-12 h-12 mb-4 text-red-500" />
                                <h3 className="text-3xl font-bold mb-2">Failure is not an option.</h3>
                                <p className="opacity-90">Absolute reliability for critical care.</p>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <SectionHeader
                                label="4. Healthcare Facilities"
                                title="Mission-Critical Power"
                                description="Hospitals and healthcare campuses require absolute reliability for ICUs, operating theaters, diagnostic equipment, and life-support systems."
                            />

                            <div className="space-y-6">
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <h5 className="font-bold text-slate-900 mb-3 uppercase text-xs tracking-wider text-blue-600">Usage Definition</h5>
                                    <ul className="space-y-3">
                                        {["On-site primary power for critical loads", "Integrated with existing UPS systems", "Diesel generators reserved for contingency"].map((item, i) => (
                                            <li key={i} className="flex gap-3 text-slate-700">
                                                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>{item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 rounded-xl bg-white border border-slate-200 text-center hover:border-blue-300 transition-colors shadow-sm">
                                        <div className="font-bold text-slate-900">Quiet</div>
                                        <div className="text-xs text-slate-500">Patient Friendly</div>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white border border-slate-200 text-center hover:border-blue-300 transition-colors shadow-sm">
                                        <div className="font-bold text-slate-900">Clean</div>
                                        <div className="text-xs text-slate-500">No Exhaust</div>
                                    </div>
                                </div>

                                <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
                                    <p className="text-slate-700 italic text-sm">
                                        "A regional hospital deploys a HYFUX system to supply continuous power to critical wings, improving resilience during grid outages."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 5. MICROGRIDS - REMOVED DARK BACKGROUND */}
            <AnimatedSection className="py-12 md:py-20 bg-slate-50 text-slate-900 relative">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <SectionHeader
                                light={false}
                                label="5. Microgrids"
                                title="Energy Independence"
                                description="Microgrids require stable, dispatchable generation to complement intermittent sources such as solar or wind."
                            />

                            <div className="grid gap-6 mb-10">
                                <div className="bg-white p-6 rounded-2xl flex gap-4 items-start shadow-sm border border-slate-200 hover:border-blue-300 transition-colors">
                                    <Zap className="w-8 h-8 text-yellow-500 shrink-0" />
                                    <div>
                                        <h4 className="text-xl font-bold mb-2 text-slate-900">Baseload Anchor</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">Provides predictable output regardless of weather, stabilizing the microgrid when renewables fluctuate.</p>
                                    </div>
                                </div>
                                <div className="bg-white p-6 rounded-2xl flex gap-4 items-start shadow-sm border border-slate-200 hover:border-blue-300 transition-colors">
                                    <LayoutGrid className="w-8 h-8 text-blue-500 shrink-0" />
                                    <div>
                                        <h4 className="text-xl font-bold mb-2 text-slate-900">High Utilization</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">Simplified control logic compared to managing standby generators that only run during faults.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image for Microgrids - FIXED ZOOM */}
                        <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-xl border border-white bg-white group p-4">
                            <Image
                                src="/images/application/Microgrids & Energy-Independent Sites.webp"
                                alt="Microgrid Application"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 6. COMMERCIAL CAMPUSES */}
            <AnimatedSection className="py-12 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <SectionHeader
                            label="6. Commercial Campuses"
                            title="Distributed Power for Dense Users"
                            description="Business parks, research centers, and mixed-use developments face rising utility tariffs and space constraints. HYFUX offers centralized on-site generation."
                            className="mx-auto"
                        />
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 mb-12">
                        {/* Diagram Image - FIXED ZOOM */}
                        <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-white p-4 group">
                            <Image
                                src="/images/application/Commercial Campuses & Mixed-Use Developments2.png"
                                alt="Commercial Campus Diagram"
                                fill
                                className="object-contain"
                            />
                            <div className="absolute bottom-4 left-4 bg-slate-50/90 backdrop-blur px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm border border-slate-200">Modern Office Parks</div>
                        </div>
                        <div className="flex flex-col gap-8">
                            <div className="relative h-[250px] rounded-3xl overflow-hidden shadow-xl border border-slate-100 group">
                                <Image
                                    src="/images/application/Commercial Campuses & Mixed-Use Developments.webp"
                                    alt="Mixed Use Development"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm">Mixed Use</div>
                            </div>
                            <div className="flex-1 bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col justify-center">
                                <h4 className="font-bold text-slate-900 text-xl mb-4">Customer Outcomes</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3"><Coins className="w-5 h-5 text-blue-600" /> <span className="text-slate-700">Reduced peak charges</span></li>
                                    <li className="flex items-center gap-3"><Leaf className="w-5 h-5 text-green-600" /> <span className="text-slate-700">Improved sustainability metrics</span></li>
                                    <li className="flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-slate-600" /> <span className="text-slate-700">Enhanced energy resilience</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 7. ECONOMICS */}
            <AnimatedSection className="py-12 md:py-20 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            {/* Chart Image - FIXED ZOOM */}
                            <div className="relative h-auto min-h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white bg-white p-4">
                                <Image
                                    src="/images/application/Energy Cost Optimization Use Cases.webp"
                                    alt="Energy Cost Optimization Chart"
                                    fill
                                    className="object-contain p-2"
                                />
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <SectionHeader
                                label="7. Economic Value"
                                title="Predictable Energy Economics"
                                description="HYFUX systems are designed for high utilization, enabling customers to amortize capital over continuous operation."
                            />

                            <div className="space-y-6">
                                <div className="flex gap-5">
                                    <div className="w-14 h-14 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center font-bold text-2xl shrink-0"><TrendingUp className="w-7 h-7" /></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg mb-1">High Load Factors</h4>
                                        <p className="text-slate-600 leading-relaxed">Lower cost per kWh through maximization of asset utility.</p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-2xl shrink-0"><Lock className="w-7 h-7" /></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg mb-1">Pricing Stability</h4>
                                        <p className="text-slate-600 leading-relaxed">Reduced exposure to volatile grid spot pricing.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                                <p className="text-slate-800 font-medium">
                                    "Facilities operating HYFUX systems at &gt;85% load factor achieve materially lower lifetime energy costs compared to grid + diesel combinations."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 8. SUSTAINABILITY - REMOVED DARK BACKGROUND */}
            <AnimatedSection className="py-12 md:py-20 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <SectionHeader
                                light={false}
                                label="8. Sustainability"
                                title="Decarbonization Without Compromise"
                                description="Meet corporate emissions targets and local air-quality regulations without sacrificing power quality."
                            />

                            <div className="grid gap-4 mb-8">
                                {[
                                    { t: "Low Local Emissions", d: "Near-zero NOx, SOx, and PM", i: Leaf, c: "text-green-600" },
                                    { t: "Hydrogen Ready", d: "Pathway to future Net-Zero", i: Zap, c: "text-blue-600" },
                                    { t: "Transparent ESG", d: "No hidden offsets needed", i: CheckCircle2, c: "text-cyan-600" }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-4 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-slate-100 transition-colors">
                                        <item.i className={`w-6 h-6 ${item.c} shrink-0`} />
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-sm">{item.t}</h4>
                                            <p className="text-slate-500 text-xs">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                                Operational decarbonization—not symbolic sustainability.
                            </div>
                        </div>

                        <div className="relative h-[550px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 bg-white p-4">
                            {/* Sustainability Image - FIXED ZOOM */}
                            <Image
                                src="/images/application/Sustainability & Compliance-Driven Deployments.jpg"
                                alt="Sustainability Goals"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 9. OUTCOMES SUMMARY */}
            <AnimatedSection className="py-12 md:py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <SectionHeader
                        label="9. Deployment Outcomes"
                        title="What Customers Consistently Achieve"
                        description="Common outcomes across all application types, assuming baseload operation and industrial O&M practices."
                        className="mx-auto"
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                        {[
                            { val: "95%", label: "Power Availability", color: "text-blue-600" },
                            { val: "Low", label: "Grid Dependency", color: "text-slate-900" },
                            { val: "Reduced", label: "Operational Risk", color: "text-slate-900" },
                            { val: "High", label: "Cost Predictability", color: "text-green-600" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-10 rounded-[2.5rem] hover:-translate-y-2 transition-transform duration-300 shadow-sm border border-slate-200 group">
                                <div className={`text-5xl font-extrabold mb-2 ${item.color} group-hover:scale-110 transition-transform duration-300`}>{item.val}</div>
                                <div className="text-slate-500 font-bold uppercase tracking-wider text-sm">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* FAQ */}
            <div className="bg-white py-12 md:py-20 border-t border-slate-200">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Are HYFUX systems used as backup or primary power?", a: "Primarily as primary baseload power, with the grid acting as backup." },
                            { q: "Can HYFUX support sensitive electronic loads?", a: "Yes. Systems deliver stable, grid-quality AC power suitable for sensitive equipment." },
                            { q: "Are applications limited to large facilities?", a: "No. Modular configurations allow deployment from hundreds of kW to multi-MW sites." },
                            { q: "Do customers still need diesel generators?", a: "Often yes, but only for rare contingency scenarios—not routine operation." },
                            { q: "Can HYFUX systems integrate with renewables?", a: "Yes. They pair effectively with solar, wind, and battery storage within microgrids." }
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

            <CTASection />
            <Footer />
        </main>
    );
}

const CTASection = () => (
    <div className="relative py-24 bg-blue-600 overflow-hidden text-center text-white">
        <div className="absolute inset-0 bg-blue-600">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-700 to-blue-500 opacity-50"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-[100px] pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
                Ready to stabilize your energy future?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Discuss your specific application requirements with our solutions engineering team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/contact" className="px-10 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-xl hover:shadow-2xl hover:bg-slate-50 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                    Start a Conversation <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
        </div>
    </div>
);

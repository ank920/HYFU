"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
    ShieldCheck, Target, Zap, Clock, TrendingUp, Users,
    Globe2, Award, ChevronDown, CheckCircle2, Factory
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

export default function AboutPage() {
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
                        src="/images/about us/hero.jpg"
                        alt="HYFUX Industrial Scale"
                        fill
                        className="object-cover"
                        priority
                    />

                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
                    <div className="max-w-4xl text-left animate-fade-in-up">
                        <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-xs uppercase tracking-widest mb-6 backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                            🏢 ABOUT US
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1]">
                            HYFUX — Building the Backbone of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Reliable, Low-Carbon Power</span>
                        </h1>
                    </div>
                </div>
            </div>

            {/* INTRO: MISSION & PHILOSOPHY (Section 1 & 2 Combined Conceptually) */}
            <AnimatedSection className="py-12 md:py-20 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Engineering First, Hype Last</h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
                            HYFUX is a clean-energy company focused on one clear mission: making reliable, low-carbon, on-site power practical at industrial scale.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            We work at the intersection of advanced fuel-cell systems, real-world energy needs, and long-term infrastructure thinking. Our focus is not on incremental improvements, but on structural change in how power is generated.
                        </p>

                        <div className="space-y-6">
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                <h4 className="font-bold text-blue-600 mb-3 flex items-center gap-2"><Target className="w-5 h-5" /> Our Mission</h4>
                                <p className="text-slate-700 leading-relaxed">
                                    To enable organizations to operate with continuous, high-efficiency power while materially reducing emissions and operational risk.
                                </p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2"><Award className="w-5 h-5 text-blue-600" /> Our Philosophy</h4>
                                <ul className="space-y-2 text-sm text-slate-600">
                                    <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-1.5" /> Measurable efficiency and availability</li>
                                    <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-1.5" /> Conservative design margins & operational simplicity</li>
                                    <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-1.5" /> Optimize for lifecycle value, not just upfront metrics</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-white p-2">
                        <Image
                            src="/images/about us/photo-1531545514256-b1400bc00f31.jpg"
                            alt="Engineering Excellence"
                            fill
                            className="object-cover rounded-xl"
                        />
                        <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg border border-slate-200">
                            <p className="font-bold text-slate-900 mb-2">Built for Performance</p>
                            <p className="text-sm text-slate-600">
                                "The result is technology that customers can depend on—and finance partners can underwrite."
                            </p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 3. WHAT MAKES HYFU DIFFERENT */}
            <AnimatedSection className="py-12 md:py-20 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative h-[450px] w-full rounded-3xl overflow-hidden shadow-xl border border-white bg-white p-6">
                        <Image
                            src="/images/about us/What Makes HYFU Different.webp"
                            alt="HYFUX Differentiation"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="order-1 lg:order-2">
                        <SectionHeader
                            label="3. Key Differentiators"
                            title="Focused on Real Deployment, Not Theoretical Capability"
                            description="We do not try to be everything to everyone. Instead, we focus on applications where reliability, efficiency, and emissions reduction directly translate into customer value."
                        />
                        <div className="space-y-4">
                            {[
                                { t: "Stationary Power", d: "Focused on behind-the-meter power where value is highest." },
                                { t: "High Utilization", d: "Designed for steady-state baseload, not standby operation." },
                                { t: "Repeatable Deployment", d: "Built for scale, moving away from one-off bespoke projects." }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm md:text-base">{item.t}</h4>
                                        <p className="text-sm text-slate-600">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 4. WHO WE SERVE */}
            <AnimatedSection className="py-12 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <SectionHeader
                            label="4. Who We Serve"
                            title="Customers with Zero Tolerance for Power Failure"
                            description="HYFUX serves organizations that view energy as mission-critical infrastructure. For these customers, power systems must work every day, without exception."
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "Data Center Operators", "Industrial Manufacturers",
                                "Healthcare Campuses", "Commercial Microgrids",
                                "Energy-Intensive Facilities"
                            ].map((customer, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors border border-slate-100">
                                    <Factory className="w-5 h-5 text-blue-600" />
                                    <span className="font-medium text-slate-700 text-sm">{customer}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-white p-6">
                        <Image
                            src="/images/about us/Who We Serve.jpg"
                            alt="Mission Critical Customers"
                            fill
                            className="object-cover rounded-xl"
                        />
                    </div>
                </div>
            </AnimatedSection>

            {/* 5. LONG-TERM VISION */}
            <AnimatedSection className="py-12 md:py-20 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative h-[500px] w-full rounded-3xl overflow-hidden shadow-xl border border-white bg-white p-6">
                        <Image
                            src="/images/about us/Our Long-Term Vision.jpg"
                            alt="Future Energy System"
                            fill
                            className="object-contain rounded-xl"
                        />
                    </div>
                    <div className="order-1 lg:order-2">
                        <SectionHeader
                            label="5. Long-Term Vision"
                            title="Preparing Today for Tomorrow’s Energy System"
                            description="We believe the future energy system will be distributed, resilient, and fuel-flexible—and HYFUX is positioning itself to be part of that foundation."
                        />
                        <div className="grid gap-4">
                            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                                <h4 className="font-bold text-blue-600 mb-1">Hydrogen-Ready Platforms</h4>
                                <p className="text-sm text-slate-600">Seamless transition from natural gas to low-carbon fuels.</p>
                            </div>
                            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                                <h4 className="font-bold text-blue-600 mb-1">Renewable Integration</h4>
                                <p className="text-sm text-slate-600">Firming variable wind and solar inputs with stable baseload.</p>
                            </div>
                            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                                <h4 className="font-bold text-blue-600 mb-1">Core Infrastructure</h4>
                                <p className="text-sm text-slate-600">Clean power as a standard asset class, not a niche experiment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 6. APPROACH TO GROWTH */}
            <AnimatedSection className="py-12 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <SectionHeader
                        label="6. Growth Strategy"
                        title="Scaling with Discipline"
                        description="HYFUX approaches growth deliberately. This disciplined approach ensures that growth strengthens the platform rather than diluting it."
                        className="mx-auto text-center"
                    />

                    <div className="relative h-[300px] md:h-[500px] w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-white mb-12">
                        <Image
                            src="/images/about us/Our Approach to Growth.png"
                            alt="Growth Strategy"
                            fill
                            className="object-contain p-4"
                        />
                    </div>

                    <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            { t: "Success-Led Scale", d: "Scale follows deployment success." },
                            { t: "Risk Reduction", d: "Partnerships reduce execution risk." },
                            { t: "Learning Loops", d: "Systems improve through operational learning." },
                            { t: "Reliability Focus", d: "Long-term reliability > rapid expansion." }
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                                <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                                <h4 className="font-bold text-slate-900 mb-2">{item.t}</h4>
                                <p className="text-xs text-slate-600">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* 7. RESPONSIBILITY & TRUST */}
            <AnimatedSection className="py-12 md:py-20 bg-slate-900 text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <ShieldCheck className="w-16 h-16 text-blue-500 mx-auto mb-6" />
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Trust is Built Over Decades, Not Quarters</h2>
                    <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                        As an energy infrastructure company, HYFUX understands the responsibility that comes with supplying power. We view every deployment as a long-term relationship, not a transaction.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
                        <div className="flex gap-4">
                            <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0" />
                            <span className="font-medium text-slate-100">Safety-first system design</span>
                        </div>
                        <div className="flex gap-4">
                            <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0" />
                            <span className="font-medium text-slate-100">Regulatory & environmental compliance</span>
                        </div>
                        <div className="flex gap-4">
                            <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0" />
                            <span className="font-medium text-slate-100">Transparent performance communication</span>
                        </div>
                        <div className="flex gap-4">
                            <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0" />
                            <span className="font-medium text-slate-100">Long-term customer support</span>
                        </div>
                    </div>
                </div>
            </AnimatedSection>


            {/* FAQ */}
            <div className="bg-white py-12 md:py-20 border-t border-slate-200">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">About HYFUX — FAQ</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Is HYFUX a technology developer or an energy company?", a: "HYFUX is both—a technology-driven company focused on delivering deployable energy infrastructure." },
                            { q: "Does HYFUX focus on one region or globally?", a: "HYFUX is structured to support global deployment through regional partnerships." },
                            { q: "Is HYFUX focused only on hydrogen?", a: "No. HYFUX systems are fuel-flexible today and hydrogen-ready for the future." },
                            { q: "What stage is HYFUX at?", a: "HYFUX is focused on commercial deployment and platform expansion, not early-stage research." },
                            { q: "How does HYFUX define success?", a: "By systems that run reliably, deliver value, and earn long-term customer trust." }
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

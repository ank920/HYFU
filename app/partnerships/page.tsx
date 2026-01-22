"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
    Handshake, Users, Settings, Wrench, Fuel, BarChart3, Globe,
    Building2, CheckCircle2, ChevronDown, ArrowRight, ShieldCheck, Zap
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

export default function PartnershipPage() {
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
                    {/* Using a general clean energy image for the hero background since a specific one wasn't provided for Hero */}
                    <Image
                        src="/images/partnership/hero.jpg"
                        alt="Partnership Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
                    <div className="max-w-4xl text-left animate-fade-in-up">
                        <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-700 font-bold text-xs uppercase tracking-widest mb-6 backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                            5. PARTNERSHIPS
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-[1.1]">
                            Building the SOFC Ecosystem <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-600">Through Strategic Collaboration</span>
                        </h1>
                        <p className="text-lg md:text-3xl text-slate-800 font-light leading-relaxed mb-8 max-w-2xl">
                            Scale is not built alone. It is built through aligned partnerships.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/contact" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/25">
                                Become a Partner
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* PAGE INTRODUCTION */}
            <AnimatedSection className="py-12 md:py-20 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Shared Risk, Shared Value</h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-6">
                            HYFUX’s partnership strategy is designed around a simple principle: complex energy systems scale fastest when risk, capability, and value creation are shared. No single organization can move the ecosystem forward independently.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed mb-6">
                            We partner selectively across the value chain to accelerate deployment, reduce project risk, and ensure long-term operational success. These are not branding exercises; they are execution enablers.
                        </p>
                        <div className="p-4 bg-slate-50 border-l-4 border-blue-600 rounded-r-lg">
                            <p className="font-medium text-slate-800">
                                This page outlines the five core partnership pillars through which HYFUX collaborates to scale SOFC adoption globally.
                            </p>
                        </div>
                    </div>
                    <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-white p-6">
                        <Image
                            src="images/partnership/Wh Partnershi Matters.jpg"
                            alt="Why Partnership Matters"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </AnimatedSection>

            {/* 1. STRATEGIC TECHNOLOGY */}
            <AnimatedSection className="py-12 md:py-20 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative h-[500px] w-full rounded-3xl overflow-hidden shadow-xl border border-white bg-white p-6">
                        <Image
                            src="images/partnership/Extending System Capability.png"
                            alt="Technology Partnerships"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="order-1 lg:order-2">
                        <SectionHeader
                            label="1. Technology & Platform"
                            title="Extending System Capability"
                            description="HYFUX collaborates with technology partners that strengthen system-level performance, reliability, and integration—without fragmenting platform ownership."
                        />

                        <div className="grid gap-6">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2"><Settings className="text-blue-600 w-5 h-5" /> Typical Partners</h4>
                                <ul className="space-y-2 text-sm text-slate-600">
                                    <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5" /> Power electronics & inverter specialists</li>
                                    <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5" /> Control systems & digital monitoring</li>
                                    <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5" /> Thermal management experts</li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2"><Zap className="text-blue-600 w-5 h-5" /> Value Created</h4>
                                <ul className="space-y-2 text-sm text-slate-600">
                                    <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5" /> Faster development cycles</li>
                                    <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5" /> Reduced integration risk</li>
                                    <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5" /> Higher system uptime and efficiency</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 2. EPC & DELIVERY */}
            <AnimatedSection className="py-12 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <SectionHeader
                            label="2. EPC & Project Delivery"
                            title="Turning Engineered Systems into Operational Assets"
                            description="Deployment success depends on execution quality. HYFUX works with EPC partners experienced in industrial energy infrastructure."
                        />
                        <div className="space-y-6">
                            <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 items-start">
                                <Wrench className="w-8 h-8 text-blue-600 mt-1 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-2">Partner Roles</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        Site engineering, permitting, civil/electrical installation, grid integration, commissioning, and handover.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 items-start">
                                <ShieldCheck className="w-8 h-8 text-green-600 mt-1 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-2">Customer Impact</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        Predictable delivery timelines, reduced safety risks, and parallel multi-site deployment.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-white p-6">
                        <Image
                            src="images/partnership/EPC & Project Delivery Partners.jpg"
                            alt="EPC Partners"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </AnimatedSection>

            {/* 3. FUEL & INFRASTRUCTURE */}
            <AnimatedSection className="py-12 md:py-20 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative h-[500px] w-full rounded-3xl overflow-hidden shadow-xl border border-white bg-white p-6">
                        <Image
                            src="/images/partnership/Fuel, Infrastructure & Hydrogen Ecosystem Partners.jpg"
                            alt="Fuel Ecosystem"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="order-1 lg:order-2">
                        <SectionHeader
                            label="3. Fuel & Infrastructure"
                            title="Fuel Security Today, Transition Readiness Tomorrow"
                            description="HYFUX partners across the fuel ecosystem to support multi-fuel operation and hydrogen transition."
                        />
                        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2"><Fuel className="w-5 h-5 text-blue-500" /> Partner Categories</h4>
                                    <div className="flex flex-wrap gap-2 text-sm text-slate-600">
                                        <span className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-full">Natural Gas / LNG</span>
                                        <span className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-full">Biogas</span>
                                        <span className="px-3 py-1 bg-blue-50 border border-blue-100 text-blue-700 rounded-full">Hydrogen Developers</span>
                                    </div>
                                </div>
                                <div className="border-t border-slate-100 pt-4">
                                    <h4 className="font-bold text-slate-900 mb-2">Strategic Value</h4>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        Customers can deploy immediately using existing infrastructure while maintaining a clear path to hydrogen adoption.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 4. CUSTOMER & DEPLOYMENT */}
            <AnimatedSection className="py-12 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionHeader
                        label="4. Customer & Deployment"
                        title="Co-Deploying with Value-Driven Partners"
                        description="HYFUX treats customers as deployment partners, not just buyers—especially in early and large-scale projects. This aligns incentives around uptime and performance."
                        className="mx-auto text-center"
                    />

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="grid gap-6">
                            {[
                                { t: "Anchor Customers", d: "Large-scale initial deployments that validate capability." },
                                { t: "Multi-Site Rollouts", d: "Frameworks for parallel deployment across facilities." },
                                { t: "Service Agreements", d: "Long-term performance and maintenance alignment." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                        <Users className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">{item.t}</h4>
                                        <p className="text-slate-600 text-sm">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                            <div className="mt-4 p-4 bg-blue-600 text-white rounded-xl text-center">
                                <p className="font-semibold text-sm">
                                    Customer Value: Priority access to roadmap & platform improvements.
                                </p>
                            </div>
                        </div>
                        <div className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-white p-6">
                            <Image
                                src="images/partnership/Co-Deploying with Value-Driven Partners.jpg"
                                alt="Target Deployment Partners"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 5. FINANCIAL & POLICY */}
            <AnimatedSection className="py-12 md:py-20 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative h-[500px] w-full rounded-3xl overflow-hidden shadow-xl border border-white bg-white p-6">
                        <Image
                            src="images/partnership/Unlocking Scale Through Alignment.jpg"
                            alt="Ecosystem Collaboration"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="order-1 lg:order-2">
                        <SectionHeader
                            label="5. Financial & Policy"
                            title="Unlocking Scale Through Alignment"
                            description="Scaling SOFC infrastructure requires coordination between technology, capital, and policy."
                        />
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-2xl border border-slate-200">
                                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <Building2 className="w-5 h-5 text-blue-600" /> Partnerships Include
                                </h4>
                                <ul className="grid grid-cols-1 gap-3 text-sm text-slate-700">
                                    <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-blue-400" /> Infrastructure & Clean Energy Investors</li>
                                    <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-blue-400" /> Energy-as-a-Service Providers</li>
                                    <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-blue-400" /> Government & Policy Stakeholders</li>
                                </ul>
                            </div>
                            <div className="bg-slate-900 text-white p-6 rounded-2xl">
                                <h4 className="font-bold mb-2 flex items-center gap-2"><BarChart3 className="w-5 h-5 text-green-400" /> Strategic Outcomes</h4>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    Improved bankability, shorter payback periods, and accelerated deployment at MW scale.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>


            {/* FAQ */}
            <div className="bg-white py-12 md:py-20 border-t border-slate-200">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Partnership FAQ</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Does HYFUX partner exclusively or non-exclusively?", a: "Partnership structures are flexible and designed around mutual value and deployment scale." },
                            { q: "Are partnerships regional or global?", a: "Both. HYFUX supports region-specific partnerships aligned with local energy markets." },
                            { q: "Can customers become long-term partners?", a: "Yes. Large customers often evolve into strategic deployment partners." },
                            { q: "Do partnerships affect system ownership?", a: "No. HYFUX retains platform integrity while enabling ecosystem collaboration." },
                            { q: "How does HYFUX select partners?", a: "Based on technical capability, execution track record, and long-term alignment." }
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

"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
    Mail, Phone, MapPin, Globe, CheckCircle2, ChevronDown,
    ArrowRight, MessageSquare, Briefcase, Settings, Zap
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

const ContactCard = ({ icon: Icon, title, desc, email, label }: { icon: any, title: string, desc: string, email: string, label: string }) => (
    <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
            <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
        </div>
        <span className="text-xs font-bold text-blue-600 tracking-widest uppercase mb-2 block">{label}</span>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 text-sm mb-6 leading-relaxed">{desc}</p>
        <a href={`mailto:${email}`} className="inline-flex items-center gap-2 text-slate-900 font-semibold hover:text-blue-600 transition-colors">
            <Mail className="w-4 h-4" /> {email}
        </a>
    </div>
);

export default function ContactPage() {
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
                        src="/images/contact/hero img.jpg"
                        alt="Contact HYFUX"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
                    <div className="max-w-4xl text-left animate-fade-in-up">
                        <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-xs uppercase tracking-widest mb-6 backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                            CONTACT US
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1]">
                            Start the Conversation. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Let’s Build Reliable Power Together.</span>
                        </h1>
                        <p className="text-xl md:text-3xl text-slate-200 font-light leading-relaxed mb-8 max-w-2xl">
                            Our team is structured to engage early, technically, and transparently for real energy deployments.
                        </p>
                    </div>
                </div>
            </div>

            {/* 1. HOW TO REACH HYFU */}
            <AnimatedSection className="py-12 md:py-20 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 mb-16">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Direct, Professional Communication</h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            We encourage direct contact. HYFUX does not route serious inquiries through automated systems. All qualified inquiries are typically acknowledged within 1–2 business days.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <ContactCard
                            icon={MessageSquare}
                            label="GENERAL INQUIRIES"
                            title="Initial Discussions"
                            desc="For introductions, high-level questions, and broader information request."
                            email="info@hyfux.energy"
                        />
                        <ContactCard
                            icon={Briefcase}
                            label="BUSINESS & PARTNERSHIPS"
                            title="Strategic Alignment"
                            desc="For strategic partnerships, EPC collaboration, and fuel ecosystem alignment."
                            email="partnerships@hyfux.energy"
                        />
                        <ContactCard
                            icon={Settings}
                            label="TECHNICAL TEAMS"
                            title="Deployment & Specs"
                            desc="For site evaluations, power requirements, and system integration details."
                            email="deployments@hyfux.energy"
                        />
                    </div>
                </div>
            </AnimatedSection>

            {/* 2. WHAT TO INCLUDE */}
            <AnimatedSection className="py-12 md:py-20 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative h-[500px] w-full rounded-3xl overflow-hidden shadow-xl border border-white bg-white p-6">
                        <Image
                            src="/images/contact/What to Include When Contacting Us.jpg"
                            alt="Project Details"
                            fill
                            className="object-contain rounded-xl"
                        />
                    </div>
                    <div className="order-1 lg:order-2">
                        <SectionHeader
                            label="2. Prepare for Success"
                            title="Help Us Accelerate the Conversation"
                            description="Providing a few key details upfront allows us to engage efficiently. HYFUX engagements are most productive when discussions start with real operating parameters."
                        />
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                            <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2"><CheckCircle2 className="text-blue-600" /> Helpful Information</h4>
                            <ul className="space-y-4">
                                {[
                                    "Facility type (Data Center, MFG, Healthcare)",
                                    "Location and Region",
                                    "Approximate Power Requirement (kW / MW)",
                                    "Intended Use (Baseload, Resilience, etc.)",
                                    "Estimated Deployment Timeline"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-slate-700 text-sm md:text-base border-b border-slate-50 pb-2 last:border-0 last:pb-0">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 3. WHO REACHES OUT */}
            <AnimatedSection className="py-12 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <SectionHeader
                            label="3. Our Audience"
                            title="We Work Directly with Decision-Makers"
                            description="If you are responsible for power reliability, energy cost, or emissions exposure, you are the right audience to speak with us."
                        />
                        <div className="grid gap-4">
                            {[
                                "Data Center Operators & Infrastructure Leads",
                                "Industrial Plant Managers",
                                "Healthcare Campus Operations",
                                "Utilities & Microgrid Developers",
                                "EPC Firms & Investors"
                            ].map((role, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
                                    <Zap className="w-5 h-5 text-blue-600" />
                                    <span className="font-semibold text-slate-800">{role}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-white p-6">
                        <Image
                            src="/images/contact/Who Typically Reaches Out.webp"
                            alt="Decision Makers"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </AnimatedSection>

            {/* 4. ENGAGEMENT PROCESS */}
            <AnimatedSection className="py-12 md:py-20 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="font-bold tracking-widest text-xs uppercase text-blue-400 mb-4 block">4. The Process</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">From First Contact to Next Steps</h2>
                        <p className="text-slate-300 text-lg">A structured, no-nonsense engagement process ensuring efficient use of time.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "01", t: "Introductory Discussion", d: "Understanding objectives, constraints, and use case." },
                            { step: "02", t: "Preliminary Fit Assessment", d: "Evaluating whether HYFUX systems are suitable." },
                            { step: "03", t: "Technical Deep Dive", d: "Power sizing, deployment model, and integration." },
                            { step: "04", t: "Next-Step Definition", d: "Site evaluation, partner alignment, commercial steps." }
                        ].map((item, i) => (
                            <div key={i} className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                                <div className="text-blue-500 font-mono text-xl mb-4 font-bold border-b border-white/10 pb-4 inline-block">{item.step}</div>
                                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">{item.t}</h4>
                                <p className="text-sm text-slate-400 leading-relaxed font-medium">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* 5. GLOBAL REACH */}
            <AnimatedSection className="py-12 md:py-20 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative h-[500px] w-full rounded-3xl overflow-hidden shadow-xl border border-white bg-white p-6">
                        <Image
                            src="/images/contact/Global Reach, Regional Engagement.jpg"
                            alt="Global Deployment"
                            fill
                            className="object-contain rounded-xl"
                        />
                    </div>
                    <div className="order-1 lg:order-2">
                        <SectionHeader
                            label="5. Global Scope"
                            title="Designed for Global Deployment, Executed Locally"
                            description="HYFUX engages globally while working through regional partners. This allows us to adapt to local grid conditions, regulations, and safety standards."
                        />
                        <div className="p-6 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-600/20">
                            < Globe className="w-8 h-8 mb-4 opacity-80" />
                            <h4 className="font-bold text-lg mb-2">Portfolio-Level Support</h4>
                            <p className="text-blue-100 text-sm leading-relaxed">
                                If your project spans multiple sites or regions, we are structured to support portfolio-level discussions, not just single deployments.
                            </p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* FAQ */}
            <div className="bg-white py-12 md:py-20 border-t border-slate-200">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Contact & Engagement FAQ</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Is HYFUX open to early-stage discussions?", a: "Yes—provided there is a real application or deployment intent." },
                            { q: "Do you respond to RFPs and tenders?", a: "Yes. Relevant documentation can be shared after initial qualification." },
                            { q: "Can we schedule a technical call directly?", a: "Yes. Technical calls are scheduled after a brief initial exchange." },
                            { q: "Do you work with advisors and consultants?", a: "Yes, particularly for infrastructure, energy, and industrial projects." },
                            { q: "Is HYFUX limited to certain geographies?", a: "No. Engagements are global, with region-specific execution." }
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

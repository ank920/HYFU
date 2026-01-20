"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Factory, Globe2, TrendingUp, Handshake, Users, Scale, ExternalLink, LineChart } from "lucide-react";

export default function PartnershipPage() {
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
                        <source src="/video/Abstract_Energy_Flow_Visualization.mp4" type="video/mp4" />
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
                        className="text-blue-400 font-bold tracking-widest text-xs uppercase mb-6 block"
                    >
                        Partnership
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight"
                    >
                        Strategic Partnerships for <br /><span className="text-blue-500">Industrial-Scale Deployment</span>
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="space-y-6 max-w-3xl mx-auto"
                    >
                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                            HELIONYX pursues structured, long-term partnerships to accelerate commercialization, align with regional market realities, and enable scalable, cost-efficient green hydrogen deployment across industrial markets.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* 🔹 SECTION 1: PARTNERSHIP STRATEGY */}
            <AnimatedSection className="py-12 md:py-24 bg-white">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900">Strategic joint-venture approach for market entry and scale</h2>
                    <p className="text-lg text-slate-600 font-medium mb-8">
                        HELIONYX follows a partnership-led commercialization strategy that combines deep technology innovation with strong execution capability.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                        Rather than deploying technology in isolation, we work with energy conglomerates, infrastructure leaders, industrial operators, and global ecosystem partners to translate technological advantage into repeatable commercial outcomes.
                    </p>
                    <div className="inline-block px-6 py-3 bg-blue-50 text-blue-800 rounded-full font-medium text-sm border border-blue-100">
                        This approach reduces execution risk, accelerates time-to-market, and supports long-term scale.
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 SECTION 2: INDIA-FIRST DEPLOYMENT STRATEGY */}
            <AnimatedSection className="py-12 md:py-24 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">India-first deployment approach</h2>
                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                            <p>
                                India represents one of the fastest-growing green hydrogen markets globally, driven by:
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-base">
                                <li className="flex gap-2 items-center"><div className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Strong national policy</li>
                                <li className="flex gap-2 items-center"><div className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Large industrial demand</li>
                                <li className="flex gap-2 items-center"><div className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Cost-sensitive economics</li>
                                <li className="flex gap-2 items-center"><div className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Export-linked growth</li>
                            </ul>

                            <p>HELIONYX is pursuing strategic partnerships with leading Indian institutions to anchor early deployment and build scalable manufacturing and operational capability.</p>

                            <h4 className="font-bold text-slate-900 pt-2">We work with:</h4>
                            <ul className="space-y-3">
                                <li className="flex gap-3 items-center">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                    <span>Energy and infrastructure majors</span>
                                </li>
                                <li className="flex gap-3 items-center">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                    <span>Large industrial hydrogen consumers</span>
                                </li>
                                <li className="flex gap-3 items-center">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                    <span>Government-supported and public-sector entities</span>
                                </li>
                                <li className="flex gap-3 items-center">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                    <span>Select international hydrogen ecosystem partners</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative h-[250px] md:h-[400px] w-full rounded-lg overflow-hidden shadow-xl bg-white border border-slate-100">
                        <Image
                            src="/images/partnership/INDIA-FIRST STRATEGY — Market Focus.png"
                            alt="India First Strategy"
                            fill
                            className="object-contain p-4"
                        />
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 SECTION 3: WHY PARTNERSHIP MATTERS */}
            <AnimatedSection className="py-12 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative h-[250px] md:h-[400px] w-full rounded-lg overflow-hidden shadow-xl bg-white border border-slate-100">
                        <Image
                            src="/images/partnership/WHY PARTNERSHIP MATTERS — Execution & Trust.png"
                            alt="Why Partnership Matters"
                            fill
                            className="object-contain p-4"
                        />
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">Why partnership is critical</h2>
                        <p className="text-lg text-slate-600 mb-6 font-medium">
                            The green hydrogen transition requires more than technology alone. Commercial success depends on execution capability, capital discipline, regulatory alignment, and customer access.
                        </p>
                        <h4 className="font-bold text-slate-900 mb-4">Strategic partnerships are essential to address:</h4>
                        <ul className="grid gap-4">
                            <li className="flex gap-3 items-center bg-slate-50 p-4 rounded-lg">
                                <TrendingUp className="w-6 h-6 text-blue-600" />
                                <span className="text-slate-900 font-medium">Market entry and speed of deployment</span>
                            </li>
                            <li className="flex gap-3 items-center bg-slate-50 p-4 rounded-lg">
                                <Users className="w-6 h-6 text-blue-600" />
                                <span className="text-slate-900 font-medium">Access to customers and long-term offtake</span>
                            </li>
                            <li className="flex gap-3 items-center bg-slate-50 p-4 rounded-lg">
                                <ShieldCheck className="w-6 h-6 text-blue-600" />
                                <span className="text-slate-900 font-medium">Regulatory navigation and approvals</span>
                            </li>
                            <li className="flex gap-3 items-center bg-slate-50 p-4 rounded-lg">
                                <Factory className="w-6 h-6 text-blue-600" />
                                <span className="text-slate-900 font-medium">Manufacturing scale-up and service infrastructure</span>
                            </li>
                        </ul>
                        <p className="mt-8 text-slate-600">
                            HELIONYX contributes technology leadership; partners contribute capital, execution strength, and market reach.
                        </p>
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 SECTION 4: PARTNERSHIP MODELS */}
            <AnimatedSection className="py-12 md:py-24 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-slate-900">Flexible Partnership Structures</h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                HELIONYX offers multiple collaboration models designed to align incentives, protect intellectual property, and support phased scale-up.
                            </p>
                            <div className="space-y-6">
                                <div className="border border-slate-200 bg-white p-5 rounded-lg">
                                    <h4 className="font-bold text-blue-600 mb-2">Technology Licensing + Manufacturing JV</h4>
                                    <ul className="text-sm text-slate-600 space-y-1">
                                        <li>• 51% HELIONYX / 49% Partner</li>
                                        <li>• IP protection with local manufacturing</li>
                                        <li>• Shared R&D and continuous optimization</li>
                                        <li>• Defined market or geographic exclusivity</li>
                                    </ul>
                                </div>
                                <div className="border border-slate-200 bg-white p-5 rounded-lg">
                                    <h4 className="font-bold text-slate-900 mb-2">Pilot Project Partnership</h4>
                                    <ul className="text-sm text-slate-600 space-y-1">
                                        <li>• Shared capital investment and risk</li>
                                        <li>• ~100 kg/day demonstration facility</li>
                                        <li>• Performance validation under real conditions</li>
                                        <li>• Regulatory pathway and customer engagement</li>
                                    </ul>
                                </div>
                                <div className="border border-slate-200 bg-white p-5 rounded-lg">
                                    <h4 className="font-bold text-slate-900 mb-2">Market Development Agreement</h4>
                                    <ul className="text-sm text-slate-600 space-y-1">
                                        <li>• Exclusive or semi-exclusive distribution rights</li>
                                        <li>• Joint sales and go-to-market execution</li>
                                        <li>• Technical training, service, and support</li>
                                        <li>• Customer financing facilitation</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[300px] md:h-[500px] w-full rounded-lg overflow-hidden border border-slate-200 bg-white">
                            <Image
                                src="/images/partnership/PARTNERSHIP MODELS — JV & Collaboration.png"
                                alt="Partnership Models"
                                fill
                                className="object-contain p-4"
                            />
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 SECTION 5: ECOSYSTEM & GLOBAL PARTNERS */}
            <AnimatedSection className="py-12 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative h-[250px] md:h-[400px] w-full rounded-lg overflow-hidden shadow-xl border border-slate-100 bg-white">
                        <Image
                            src="/images/partnership/ECOSYSTEM PARTNERS — Global Collaboration.png"
                            alt="Ecosystem Partners"
                            fill
                            className="object-contain p-4"
                        />
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">Ecosystem Partners (including global collaborators)</h2>
                        <p className="text-lg text-slate-600 mb-6 font-medium">
                            In addition to India-focused partnerships, HELIONYX collaborates with established international hydrogen ecosystem players that provide complementary expertise and global connectivity.
                        </p>

                        <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 mb-6">
                            <h4 className="text-xl font-bold text-blue-600 flex items-center gap-2 mb-2">
                                <Globe2 className="w-5 h-5" /> Global Technology Partners
                            </h4>
                            <p className="text-slate-600 text-sm mb-4">
                                A climate-technology organization operating across North America and Europe, focused on hydrogen and hydrogen-related systems.
                            </p>
                            <p className="text-slate-800 text-sm font-medium">
                                Our international partners contribute deployment experience, cross-border operational insight, and global connectivity, strengthening HELIONYX's worldwide perspective.
                            </p>
                        </div>

                        <h4 className="font-bold text-slate-900 mb-2">These ecosystem partnerships support:</h4>
                        <ul className="text-slate-600 text-sm grid grid-cols-2 gap-2">
                            <li className="flex gap-2 items-center">• Knowledge transfer per region</li>
                            <li className="flex gap-2 items-center">• Shared technical learnings</li>
                            <li className="flex gap-2 items-center">• Future commercial opportunities</li>
                        </ul>
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 SECTION 6: PROPOSED JV STRUCTURE */}
            <AnimatedSection className="py-12 md:py-24 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">Balanced Joint-Venture Framework</h2>
                        <p className="text-lg text-slate-600 mb-8">
                            A representative JV structure combines technology leadership with market access and operational capability.
                        </p>

                        <div className="space-y-6 mb-8">
                            <div className="p-6 border border-slate-200 rounded-lg bg-white">
                                <h4 className="text-xl font-bold text-blue-600 mb-2">51% — HELIONYX</h4>
                                <p className="text-slate-600">Technology ownership, IP stewardship, system architecture, and continuous innovation.</p>
                            </div>
                            <div className="p-6 border border-slate-200 rounded-lg bg-white">
                                <h4 className="text-xl font-bold text-slate-700 mb-2">49% — Strategic Partner</h4>
                                <p className="text-slate-600">Manufacturing, distribution, capital deployment, regulatory engagement, and customer access.</p>
                            </div>
                        </div>

                        <div className="p-4 bg-blue-50 rounded text-sm text-blue-800 font-medium text-center">
                            This structure ensures long-term alignment, IP protection, and scalable replication.
                        </div>
                    </div>
                    <div className="relative h-[250px] md:h-[450px] w-full rounded-lg overflow-hidden shadow-xl border border-slate-100 bg-white">
                        <Image
                            src="/images/partnership/JV STRUCTURE — Balanced Ownership.png"
                            alt="JV Structure"
                            fill
                            className="object-contain p-6"
                        />
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 SECTION 7: WHAT EACH PARTNER BRINGS */}
            <AnimatedSection className="py-12 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">What Each Partner Brings</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                            <h4 className="text-2xl font-bold text-blue-600 mb-6 border-b border-blue-200 pb-4">HELIONYX Contributes</h4>
                            <ul className="space-y-4 text-slate-700">
                                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> Proprietary hydrogen production technology</li>
                                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> Process design and system integration</li>
                                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> Technical training and operational support</li>
                                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> Continuous R&D and performance optimization</li>
                                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> Global deployment best practices</li>
                            </ul>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                            <h4 className="text-2xl font-bold text-slate-800 mb-6 border-b border-slate-200 pb-4">Strategic Partner Contributes</h4>
                            <ul className="space-y-4 text-slate-700">
                                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-slate-500 shrink-0" /> Capital investment</li>
                                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-slate-500 shrink-0" /> Manufacturing infrastructure</li>
                                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-slate-500 shrink-0" /> Distribution and service networks</li>
                                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-slate-500 shrink-0" /> Government and regulatory relationships</li>
                                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-slate-500 shrink-0" /> Customer access and offtake agreements</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 SECTION 8: KEY BENEFITS */}
            <AnimatedSection className="py-12 md:py-24 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">Key Benefits for Partners</h2>
                    <div className="relative h-[250px] md:h-[400px] w-full rounded-lg overflow-hidden shadow-lg border border-slate-100 bg-white">
                        <Image
                            src="/images/partnership/KEY BENEFITS — Growth & Value.png"
                            alt="Key Benefits"
                            fill
                            className="object-contain p-6"
                        />
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                        {[
                            "First-mover advantage in a rapidly scaling hydrogen market",
                            "Structural cost advantage driven by lower energy input",
                            "Technology differentiation beyond commoditized electrolyzer solutions",
                            "Policy alignment with national hydrogen initiatives",
                            "Long-term growth exposure to industrial decarbonization",
                            "Measurable ESG impact tied to real emissions reduction"
                        ].map((benefit, i) => (
                            <div key={i} className="flex gap-4 p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <TrendingUp className="w-5 h-5 text-green-500 shrink-0" />
                                <span className="text-slate-800 text-sm font-medium">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 SECTION 9: TARGET PARTNERS IN INDIA */}
            <AnimatedSection className="py-12 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">Target Partner Profile</h2>
                        <h4 className="text-lg font-bold text-slate-800 mb-4">HELIONYX seeks partners with:</h4>
                        <ul className="space-y-4 text-lg text-slate-600 mb-8">
                            <li className="flex gap-3 items-center"><CheckCircle2 className="text-blue-600 w-5 h-5" /> Industrial-scale execution capability</li>
                            <li className="flex gap-3 items-center"><CheckCircle2 className="text-blue-600 w-5 h-5" /> Strong balance sheets and capital discipline</li>
                            <li className="flex gap-3 items-center"><CheckCircle2 className="text-blue-600 w-5 h-5" /> Government and regulatory engagement</li>
                            <li className="flex gap-3 items-center"><CheckCircle2 className="text-blue-600 w-5 h-5" /> Long-term strategic orientation</li>
                        </ul>
                        <div className="p-4 md:p-6 bg-slate-50 border border-slate-200 rounded-lg shadow-sm">
                            <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2 text-base md:text-lg">
                                <Users className="w-5 h-5 text-blue-600" />
                                Representative Organizations
                            </h4>
                            <p className="text-slate-600 text-sm font-medium mb-4">
                                Leading industrial enterprises with capital scale, operational expertise, and long-term strategic commitments to energy transition.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                                <div className="flex items-center gap-2 bg-white p-2 rounded border border-slate-100">
                                    <div className="p-1.5 bg-blue-100 text-blue-600 rounded">
                                        <Factory className="w-4 h-4" />
                                    </div>
                                    <span className="text-xs font-semibold text-slate-700">Heavy Industry</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white p-2 rounded border border-slate-100">
                                    <div className="p-1.5 bg-green-100 text-green-600 rounded">
                                        <TrendingUp className="w-4 h-4" />
                                    </div>
                                    <span className="text-xs font-semibold text-slate-700">Energy Utilities</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white p-2 rounded border border-slate-100">
                                    <div className="p-1.5 bg-amber-100 text-amber-600 rounded">
                                        <Globe2 className="w-4 h-4" />
                                    </div>
                                    <span className="text-xs font-semibold text-slate-700">Global Logistics</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white p-2 rounded border border-slate-100">
                                    <div className="p-1.5 bg-purple-100 text-purple-600 rounded">
                                        <ShieldCheck className="w-4 h-4" />
                                    </div>
                                    <span className="text-xs font-semibold text-slate-700">Public Sector</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl border border-slate-100 bg-white">
                        <Image
                            src="/images/partnership/TARGET PARTNERS — Enterprise Scale.png"
                            alt="Target Partners"
                            fill
                            className="object-contain p-6"
                        />
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 SECTION 10: STRATEGIC INVESTMENT OPPORTUNITY */}
            <AnimatedSection className="py-12 md:py-24 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">Strategic Investment Opportunity</h2>
                        <p className="text-slate-600 mb-8 text-lg">
                            Investment structures are designed to support phased deployment and risk-managed scaling.
                        </p>
                        <ul className="grid grid-cols-2 gap-4 mb-8">
                            <li className="bg-white p-5 rounded border border-slate-200 shadow-sm">
                                <span className="block text-3xl font-bold text-blue-600 mb-1">$25-50M</span>
                                <span className="text-sm text-slate-500 font-medium leading-tight block">Strategic JV investment</span>
                            </li>
                            <li className="bg-white p-5 rounded border border-slate-200 shadow-sm">
                                <span className="block text-3xl font-bold text-blue-600 mb-1">25-49%</span>
                                <span className="text-sm text-slate-500 font-medium leading-tight block">Equity participation</span>
                            </li>
                            <li className="bg-white p-5 rounded border border-slate-200 shadow-sm">
                                <span className="block text-3xl font-bold text-blue-600 mb-1">15-25x</span>
                                <span className="text-sm text-slate-500 font-medium leading-tight block">Long-term return potential (indicative)</span>
                            </li>
                            <li className="bg-white p-5 rounded border border-slate-200 shadow-sm">
                                <span className="block text-3xl font-bold text-blue-600 mb-1">3-5 Yrs</span>
                                <span className="text-sm text-slate-500 font-medium leading-tight block">Project-level payback horizon</span>
                            </li>
                        </ul>
                    </div>
                    <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl border border-slate-100 bg-white">
                        <Image
                            src="/images/partnership/INVESTMENT OPPORTUNITY — Capital & Confidence.png"
                            alt="Investment Opportunity"
                            fill
                            className="object-contain p-6"
                        />
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 SECTION 11: CLEAR EXIT STRATEGY */}
            <AnimatedSection className="py-12 md:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-8 text-slate-900">Clear Exit Strategy</h2>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 p-8 rounded-2xl relative overflow-hidden">
                        <LineChart className="absolute top-4 right-4 text-blue-100 w-24 h-24" />
                        <h3 className="text-2xl font-bold text-blue-800 mb-4">IPO Pathway (2028-2030)</h3>
                        <p className="text-lg text-slate-700 max-w-2xl mx-auto">
                            Potential listings on <span className="font-bold text-slate-900">NSE/BSE (India)</span> and <span className="font-bold text-slate-900">NASDAQ (US)</span>, with a targeted revenue run-rate of <span className="font-bold text-green-600">$500M+</span> supporting clear exit optionality for early strategic investors.
                        </p>
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 SECTION 12: ROADMAP */}
            <AnimatedSection className="py-12 md:py-24 bg-slate-50 border-t border-slate-200">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">Three-Phase Deployment Roadmap</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Phase 1 */}
                        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm relative overflow-hidden">
                            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2 block">2025-26</span>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Phase 1: Pilot</h3>
                            <ul className="space-y-2 text-sm text-slate-600 mb-6">
                                <li>• ~100 kg/day demo facility</li>
                                <li>• Technical validation & reliability</li>
                                <li>• Regulatory engagement</li>
                            </ul>
                            <div className="pt-4 border-t border-slate-100 font-bold text-slate-900">$15–20M Investment</div>
                        </div>
                        {/* Phase 2 */}
                        <div className="bg-white p-6 rounded-lg border-2 border-blue-600 shadow-lg relative overflow-hidden transform md:-translate-y-4">
                            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2 block">2026-27</span>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Phase 2: JV Formation</h3>
                            <ul className="space-y-2 text-sm text-slate-600 mb-6">
                                <li>• JV finalization & governance</li>
                                <li>• Local manufacturing setup</li>
                                <li>• Supply-chain activation</li>
                            </ul>
                            <div className="pt-4 border-t border-slate-100 font-bold text-slate-900">$50–75M Investment</div>
                        </div>
                        {/* Phase 3 */}
                        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm relative overflow-hidden">
                            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2 block">2027-28</span>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Phase 3: Scale-Up</h3>
                            <ul className="space-y-2 text-sm text-slate-600 mb-6">
                                <li>• Commercial facilities (~1 tonne/day)</li>
                                <li>• Multi-site deployment</li>
                                <li>• Distribution network expansion</li>
                            </ul>
                            <div className="pt-4 border-t border-slate-100 font-bold text-slate-900">$100–150M Investment</div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>


            {/* 🔹 FINAL CTA */}
            <div className="py-16 md:py-24 bg-slate-800 text-white text-center px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Partner?</h2>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                    Let’s build a scalable, commercially viable green hydrogen future together.
                </p>
                <div className="flex justify-center flex-col sm:flex-row gap-4">
                    <button className="px-6 py-3 md:px-8 md:py-4 bg-blue-600 text-white font-bold rounded hover:bg-blue-500 transition-colors text-sm md:text-base">
                        Schedule Discussion
                    </button>
                    <button className="px-6 py-3 md:px-8 md:py-4 bg-transparent border border-white/20 text-white font-bold rounded hover:bg-white/10 transition-colors text-sm md:text-base">
                        Request Partnership Brief
                    </button>
                </div>
            </div>

            <Footer />
        </main>
    );
}

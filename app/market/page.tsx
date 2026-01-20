"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe2, TrendingUp, Zap, Anchor, BarChart3, Factory } from "lucide-react";

import { motion } from "framer-motion";

export default function MarketPage() {
    return (
        <main className="bg-white min-h-screen text-slate-900 selection:bg-blue-100">
            <Navbar />

            {/* 🔹 HERO SECTION (IMAGE + DARK OVERLAY) */}
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
                        <source src="/video/market.mp4" type="video/mp4" />
                    </video>
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
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
                        Market Opportunity
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 md:mb-8 leading-tight"
                    >
                        Decarbonization Is <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Becoming Structural</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto"
                    >
                        Industrial <span className="text-green-300">decarbonization</span> is transitioning from voluntary ambition to <span className="text-blue-300">mandatory economics</span>, creating sustained demand for <span className="text-green-400 font-semibold">low-carbon inputs</span> across global supply chains.
                    </motion.p>
                </div>
            </div>

            {/* 🔹 SECTION 1: STRUCTURAL PRESSURE */}
            <AnimatedSection className="py-12 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">Global decarbonization pressure is structural</h2>
                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                            <p>
                                Industrial decarbonization is no longer driven only by voluntary targets. Regulatory frameworks, investor expectations, and customer procurement requirements are converging.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-3 items-start">
                                    <Globe2 className="w-6 h-6 text-blue-600 mt-1 shrink-0" />
                                    <span>Export markets increasingly require verified emissions reductions</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <BarChart3 className="w-6 h-6 text-blue-600 mt-1 shrink-0" />
                                    <span>Industrial buyers face carbon pricing and disclosure mandates</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <Anchor className="w-6 h-6 text-blue-600 mt-1 shrink-0" />
                                    <span>Long-term contracts favor suppliers with credible decarbonization pathways</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative h-[250px] md:h-[400px] w-full rounded-lg overflow-hidden shadow-xl border border-slate-100">
                        <Image
                            src="/images/market/GLOBAL MARKET — International Opportunity.png"
                            alt="Global Market Opportunity"
                            fill
                            className="object-contain bg-white p-4"
                        />
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 SECTION 2: WHY HYDROGEN MATTERS (SECTOR GRID) */}
            <AnimatedSection className="py-12 md:py-24 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">Hydrogen’s role in hard-to-abate sectors</h2>
                        <p className="text-lg text-slate-600">
                            Certain industrial processes require high-temperature heat or molecular reducing agents where electrification alone is not viable. In these sectors, hydrogen is structural.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Steel */}
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                            <div className="relative h-40 w-full mb-4 rounded overflow-hidden bg-slate-50">
                                <Image src="/images/market/Introduction-to-Hydrogen-Based-Steel-Plant-Green-Steel-Revolution.jpg" alt="Green Steel" fill className="object-contain" />
                            </div>
                            <h4 className="font-bold text-slate-900 mb-2">Steel & Ironmaking</h4>
                            <p className="text-sm text-slate-600">Direct reduced iron pathways.</p>
                        </div>
                        {/* Refining */}
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                            <div className="relative h-40 w-full mb-4 rounded overflow-hidden">
                                <Image src="/images/market/4-hydrocracking-flow-with-filters20200717.gif" alt="Refining" fill className="object-contain" />
                            </div>
                            <h4 className="font-bold text-slate-900 mb-2">Refining</h4>
                            <p className="text-sm text-slate-600">Desulfurization & hydrocracking.</p>
                        </div>
                        {/* Ammonia */}
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                            <div className="relative h-40 w-full mb-4 rounded overflow-hidden">
                                <Image src="/images/market/AMMONIA & FERTILIZERS — Green Ammonia Market.png" alt="Green Ammonia" fill className="object-contain p-2" />
                            </div>
                            <h4 className="font-bold text-slate-900 mb-2">Ammonia</h4>
                            <p className="text-sm text-slate-600">Fertilizers & chemical feedstocks.</p>
                        </div>
                        {/* Heavy Industry */}
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                            <div className="relative h-40 w-full mb-4 rounded overflow-hidden">
                                <Image src="/images/market/Hydrogen-Industry-Breakdown.jpg" alt="Industry Breakdown" fill className="object-contain" />
                            </div>
                            <h4 className="font-bold text-slate-900 mb-2">Heavy Industry</h4>
                            <p className="text-sm text-slate-600">High-grade industrial heat.</p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 SECTION 3: LIMITATIONS */}
            <AnimatedSection className="py-12 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="order-2 lg:order-1 relative h-[300px] md:h-[500px] w-full rounded-lg overflow-hidden shadow-xl border border-slate-100">
                        <Image
                            src="/images/market/WHY APPLICATION FOCUS MATTERS — Economics Problem.png"
                            alt="Economics Problem"
                            fill
                            className="object-contain bg-slate-50 p-4"
                        />
                    </div>
                    <div className="order-1 lg:order-2">
                        <span className="text-red-600 font-bold tracking-widest text-xs uppercase mb-4 block">The Current Bottleneck</span>
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">Why incremental efficiency is not enough</h2>
                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                            <p>
                                Many green hydrogen initiatives focus on marginal improvements to electrolyzers. While technically meaningful, these often fail to change project economics at scale.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-3 items-center"><span className="text-red-500 font-bold">×</span> Small efficiency gains do not offset high electricity costs</li>
                                <li className="flex gap-3 items-center"><span className="text-red-500 font-bold">×</span> Capital intensity remains a deployment barrier</li>
                                <li className="flex gap-3 items-center"><span className="text-red-500 font-bold">×</span> Project bankability depends on sustained cost advantage</li>
                            </ul>
                            <div className="p-6 bg-slate-50 border-l-4 border-slate-900 mt-6">
                                <p className="text-slate-900 font-medium">
                                    HELIONYX is designed around a different premise: achieving a step-change in energy input, rather than incremental optimization.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 SECTION 4: COST CURVES */}
            <AnimatedSection className="py-12 md:py-24 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">Cost curves and industrial adoption</h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            Industrial adoption follows consistent economic patterns: early pilots validate feasibility, but adoption accelerates only after cost parity is reached.
                        </p>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            For green hydrogen, this inflection point centers around the <strong className="text-slate-900">$2/kg production threshold</strong>. Below this level, hydrogen transitions from a decarbonization experiment to a competitive industrial input.
                        </p>
                    </div>
                    <div className="relative h-[250px] md:h-[400px] w-full rounded-lg overflow-hidden shadow-xl border border-slate-100 bg-white">
                        <Image
                            src="/images/market/Where Hydrogen Economics Finally Work.png"
                            alt="Hydrogen Economics"
                            fill
                            className="object-contain p-4"
                        />
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 SECTION 5: POWER AVAILABILITY */}
            <AnimatedSection className="py-12 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="order-2 lg:order-1 relative h-[250px] md:h-[400px] w-full rounded-lg overflow-hidden shadow-xl border border-slate-100 bg-white">
                        <Image
                            src="/images/market/ENERGY SYSTEM INTEGRATION — Grid & Renewables.png"
                            alt="Grid Integration"
                            fill
                            className="object-contain p-4"
                        />
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">Power availability is a gating factor</h2>
                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                            <p>
                                In many regions, deployment is constrained by access to affordable electricity regarding grid congestion and intermittent renewable availability.
                            </p>
                            <p>
                                <strong className="text-slate-900">Reducing electricity intensity per kilogram:</strong>
                            </p>
                            <ul className="grid gap-3">
                                <li className="flex gap-3 items-center"><Zap className="text-yellow-500 w-5 h-5" /> Lowers total power requirements</li>
                                <li className="flex gap-3 items-center"><Zap className="text-yellow-500 w-5 h-5" /> Improves utilization of renewables</li>
                                <li className="flex gap-3 items-center"><Zap className="text-yellow-500 w-5 h-5" /> Enables deployment in grid-constrained regions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 SECTION 6: EXPORT & INDIA */}
            <AnimatedSection className="py-12 md:py-24 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">India’s role in global hydrogen markets</h2>
                        <p className="text-lg text-slate-600 mb-6">
                            India’s strategy includes both domestic decarbonization and export potential. Cost-efficient production improves delivered competitiveness and long-term supply reliability.
                        </p>
                        <h4 className="font-bold text-slate-900 mb-4">Export-linked opportunities include:</h4>
                        <ul className="space-y-3 text-slate-700 mb-8">
                            <li className="flex gap-3 items-start">
                                <ArrowRight className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                                <span>Green ammonia for international fertilizer markets</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <ArrowRight className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                                <span>Hydrogen-based fuels and derivatives</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <ArrowRight className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                                <span>Low-carbon industrial inputs embedded in global supply chains</span>
                            </li>
                        </ul>
                        <div className="relative h-[200px] md:h-[300px] w-full rounded-lg overflow-hidden shadow-lg bg-white mb-6">
                            <Image
                                src="/images/market/INDIA MARKET — Strategic Growth.png"
                                alt="India Market Growth"
                                fill
                                className="object-contain p-4"
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">Ammonia & Export Derivatives</h2>
                        <p className="text-lg text-slate-600 mb-6">
                            Hydrogen is the primary feedstock for green ammonia and methanol, enabling the export of renewable energy to demand centers.
                        </p>
                        <h4 className="font-bold text-slate-900 mb-4">Cost-efficient production improves:</h4>
                        <ul className="space-y-3 text-slate-700 mb-8">
                            <li className="flex gap-3 items-start">
                                <ArrowRight className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                                <span>Delivered cost competitiveness</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <ArrowRight className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                                <span>Reliability of long-term supply</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <ArrowRight className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                                <span>Viability of export-linked offtake structures</span>
                            </li>
                        </ul>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative h-32 w-full bg-white rounded border border-slate-200 overflow-hidden">
                                <Image src="/images/market/ThyssenKrupp-NH3-Event-renewable-ammonia.png" alt="Ammonia Event" fill className="object-cover" />
                            </div>
                            <div className="relative h-32 w-full bg-white rounded border border-slate-200 overflow-hidden">
                                <Image src="/images/market/Renewable Power to NH3.jpg" alt="Power to NH3" fill className="object-cover" />
                            </div>
                            <div className="relative h-32 w-full bg-white rounded border border-slate-200 overflow-hidden col-span-2">
                                <Image src="/images/market/Direct-ammonia-synthesis-by-alkaline-membrane-image.webp" alt="Ammonia Synthesis" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 SECTION 7: FINANCING */}
            <AnimatedSection className="py-12 md:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6 md:mb-8 text-slate-900">Financing and bankability</h2>
                    <p className="text-lg text-slate-600 mb-12">
                        Lenders evaluate predictability, scalability, and technology risk. Platforms that materially reduce electricity input improve bankability by stabilizing OPEX.
                    </p>
                    <div className="relative h-[250px] md:h-[400px] w-full rounded-lg overflow-hidden shadow-xl border border-slate-100 bg-white">
                        <Image
                            src="/images/market/green-hydrogen-market-size.webp"
                            alt="Market Size & Financing"
                            fill
                            className="object-contain p-6"
                        />
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 SECTION 8: CLUSTER DEPLOYMENT */}
            <AnimatedSection className="py-12 md:py-24 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">Regional and cluster-based deployment</h2>
                        <ul className="space-y-4 text-lg text-slate-600">
                            <li className="flex gap-3 items-center"><Factory className="text-slate-400 w-5 h-5" /> Shared infrastructure</li>
                            <li className="flex gap-3 items-center"><Factory className="text-slate-400 w-5 h-5" /> Higher utilization rates</li>
                            <li className="flex gap-3 items-center"><Factory className="text-slate-400 w-5 h-5" /> Reduced logistics costs</li>
                            <li className="flex gap-3 items-center"><Factory className="text-slate-400 w-5 h-5" /> Coordinated decarbonization</li>
                        </ul>
                    </div>
                    <div className="relative h-[250px] md:h-[400px] w-full rounded-lg overflow-hidden shadow-xl bg-white">
                        <Image
                            src="/images/market/DISTRIBUTED & ON-SITE HYDROGEN — Modular & Local.png"
                            alt="Cluster Deployment"
                            fill
                            className="object-contain p-4"
                        />
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 SECTION 9 & 10: FUTURE & POSITIONING */}
            <AnimatedSection className="py-12 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">Long-Term Demand</h2>
                        <p className="text-slate-600 mb-6">Beyond 2030, demand expands into synthetic fuels, storage, and emerging processes.</p>
                        <div className="relative h-64 w-full rounded-lg overflow-hidden border border-slate-200 bg-slate-50">
                            <Image src="/images/market/hydrogen-fuel-cell-tri-generation.webp" alt="Future Tech" fill className="object-contain" />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">Strategic Positioning</h2>
                        <p className="text-slate-600 mb-6">
                            The market is transitioning from policy-driven pilots to economics-driven deployment. HELIONYX addresses the central constraint: production cost.
                        </p>
                        <div className="relative h-64 w-full rounded-lg overflow-hidden border border-slate-200">
                            <Image src="/images/market/dville-a6-opt.webp" alt="Strategic Plant" fill className="object-contain" />
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 FINAL CTA */}
            <div className="py-24 bg-gradient-to-br from-sky-200 to-blue-200 text-slate-900 text-center px-6 border-t border-blue-400/50">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">Establish Your Position</h2>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/technology" className="px-6 py-3 md:px-8 md:py-4 bg-blue-600 text-white font-bold rounded hover:bg-blue-500 transition-colors text-sm md:text-base">
                        Explore the Technology
                    </Link>
                    <Link href="/partnership" className="px-6 py-3 md:px-8 md:py-4 bg-transparent border border-slate-400 text-slate-900 font-bold rounded hover:bg-slate-300/50 transition-colors text-sm md:text-base">
                        View Partnership Models
                    </Link>
                </div>
            </div>

            <Footer />
        </main>
    );
}

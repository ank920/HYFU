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
    Leaf, ShieldCheck, Zap, TrendingUp, Coins, LayoutGrid, Lock, Scale
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

export default function MarketPage() {
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
                        src="/images/market/hero.jpg"
                        alt="Global Scale Market"
                        fill
                        className="object-cover blur-[3px]"
                        priority
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
                    <div className="max-w-4xl text-left animate-fade-in-up">
                        <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-xs uppercase tracking-widest mb-6 backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                            MARKETS & SCALE
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1]">
                            The Commercial Opportunity <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">for SOFC at Global Scale</span>
                        </h1>
                        <p className="text-lg md:text-3xl text-slate-200 font-light leading-relaxed mb-6">
                            Where demand is forming. How fast it is growing. Why scale is inevitable.
                        </p>
                    </div>
                </div>
            </div>

            {/* PAGE INTRODUCTION */}
            <AnimatedSection className="py-12 md:py-20 bg-white border-b border-slate-100">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <p className="text-xl md:text-2xl font-light leading-relaxed text-slate-800 mb-8">
                        HYFUX operates in a market that is no longer speculative. The global Solid Oxide Fuel Cell (SOFC) market is entering a <span className="font-semibold text-blue-600">scale phase</span>, driven by structural shifts in energy demand: grid instability, data-center growth, industrial electrification, hydrogen policy support, and decarbonization mandates.
                    </p>
                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                        This page translates independent market data into clear commercial insight: how large the market is, how fast it is growing, which segments matter, and where capital is concentrating.
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 inline-block text-left mb-8 shadow-sm">
                        <p className="text-slate-700 font-medium italic">
                            This is a markets and scale page, not a technology explainer. There is no electrochemistry, no stack theory, and no manufacturing detail—only commercial reality, adoption signals, and scale dynamics.
                        </p>
                    </div>
                </div>
            </AnimatedSection>

            {/* 1. GLOBAL MARKET SIZE */}
            <AnimatedSection className="py-12 md:py-20 bg-slate-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div className="order-2 lg:order-1">
                            <div className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-xl border border-white bg-white p-6">
                                <Image
                                    src="/images/market/Global SOFC Market Size & Growth Trajectory.webp"
                                    alt="Global SOFC Market Size"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <SectionHeader
                                label="1. Global SOFC Market Size"
                                title="A Market Moving from Billions to Hundreds of Billions"
                                description="This growth rate places SOFCs among the fastest-scaling power generation technologies globally, outperforming most conventional distributed energy assets."
                            />

                            <div className="grid gap-6">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                    <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2"><BarChart3 className="text-blue-600" /> Independent Analysis (Roots Analysis)</h4>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                                            <span className="text-slate-600">Market Size (2026)</span>
                                            <span className="font-bold text-slate-900">USD 3.19 Billion</span>
                                        </div>
                                        <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                                            <span className="text-slate-600">Projected (2040)</span>
                                            <span className="font-bold text-slate-900">USD 143.66 Billion</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-slate-600">CAGR (2026–2040)</span>
                                            <span className="font-bold text-green-600 text-xl">31.25%</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 bg-blue-50 bg-opacity-50 rounded-2xl border border-blue-100">
                                    <h5 className="font-bold text-slate-900 mb-2 text-sm uppercase">Why This Matters</h5>
                                    <ul className="space-y-2 text-slate-700 text-sm">
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5" /> Sustained 30%+ CAGR signals structural demand.</li>
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5" /> Expansion driven by use-case pull, not just subsidies.</li>
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5" /> Favors platforms that scale early.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 2. DRIVING FORCES */}
            <AnimatedSection className="py-12 md:py-20 bg-white relative">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionHeader
                        label="2. Market Drivers"
                        title="Demand-Side Forces Are Converging"
                        description="Key macro drivers behind SOFC adoption."
                        className="mx-auto text-center"
                    />

                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { t: "Clean Reliance", d: "Corporates need low-emission power without intermittency.", i: Leaf },
                                { t: "Fuel Flexibility", d: "De-risks regional constraints (Natural Gas, Biogas, Hydrogen).", i: Layers },
                                { t: "Grid Unreliability", d: "Data centers & factories moving power on-site.", i: Zap },
                                { t: "Policy Alignment", d: "Subsidies shorten payback periods.", i: Scale }
                            ].map((item, i) => (
                                <div key={i} className="p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-lg transition-all duration-300">
                                    <item.i className="w-8 h-8 text-blue-600 mb-4" />
                                    <h4 className="font-bold text-slate-900 mb-2">{item.t}</h4>
                                    <p className="text-slate-600 text-sm">{item.d}</p>
                                </div>
                            ))}
                        </div>
                        <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-white p-6">
                            <Image
                                src="/images/market/What Is Driving Market Expansion.png"
                                alt="Market Drivers"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 3. MARKET SEGMENTATION */}
            <AnimatedSection className="py-12 md:py-20 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative h-[500px] w-full rounded-3xl overflow-hidden shadow-xl border border-white bg-white p-6">
                            <Image
                                src="/images/market/Market Segmentation by Application.webp" // Prioritize webp
                                alt="Market Segmentation"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <SectionHeader
                                label="3. Segmentation"
                                title="Stationary Power Dominates"
                                description="Stationary applications: 60.40% of total SOFC market (2026). Portable segments grow in units, but stationary drives revenue."
                            />

                            <div className="space-y-6">
                                <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                    <h5 className="font-bold text-slate-900 mb-3">Why Stationary Dominates</h5>
                                    <ul className="space-y-2 text-slate-600">
                                        <div className="flex justify-between border-b border-slate-50 py-2"><span>System Size</span><span className="font-semibold text-blue-600">MW-scale</span></div>
                                        <div className="flex justify-between border-b border-slate-50 py-2"><span>Utilization</span><span className="font-semibold text-blue-600">Continuous (24/7)</span></div>
                                        <div className="flex justify-between py-2"><span>Pricing</span><span className="font-semibold text-blue-600">Premium for Quality</span></div>
                                    </ul>
                                </div>
                                <div className="p-6 bg-slate-100 rounded-2xl">
                                    <h5 className="font-bold text-slate-900 text-sm uppercase mb-2">Key Growth Contributors</h5>
                                    <div className="flex flex-wrap gap-2">
                                        {["Data Centers", "Industrial Microgrids", "Commercial Campuses", "Distributed Gen"].map((tag, i) => (
                                            <span key={i} className="px-3 py-1 bg-white rounded-full text-xs font-bold text-slate-600 border border-slate-200 shadow-sm">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 4. END-USER DEMAND */}
            <AnimatedSection className="py-12 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionHeader
                        label="4. End-User Demand"
                        title="Where Adoption Is Concentrated"
                        description="SOFC adoption is led by high-value energy users who face high downtime costs and high energy intensity."
                        className="mx-auto text-center"
                    />

                    <div className="grid lg:grid-cols-2 gap-12 mb-12">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative h-[250px] rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-white p-2">
                                <Image src="/images/market/End-User Demand.webp" alt="End User Demand Chart" fill className="object-contain" />
                            </div>
                            <div className="relative h-[250px] rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-white p-2">
                                <Image src="/images/market/End-User Demand2.png" alt="End User Demand Graph" fill className="object-contain" />
                            </div>
                            <div className="col-span-2 relative h-[300px] rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-white p-2">
                                <Image src="/images/market/End-User Demand.avif" alt="End User Demand Overview" fill className="object-contain" />
                            </div>
                        </div>

                        <div className="flex flex-col justify-center space-y-8">
                            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                                <h4 className="text-xl font-bold text-slate-900 mb-4">Primary Segments</h4>
                                <ul className="space-y-3">
                                    {["Commercial & Industrial Facilities", "Data Centers (High Growth)", "Utilities & Energy Service Providers", "Defense & Critical Infrastructure"].map((item, i) => (
                                        <li key={i} className="flex gap-3 text-slate-700">
                                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 shrink-0"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-blue-600 text-white p-8 rounded-3xl shadow-xl">
                                <h4 className="font-bold text-xl mb-2 flex items-center gap-2"><Activity className="w-6 h-6" /> Market Insight</h4>
                                <p className="leading-relaxed opacity-90">
                                    "SOFC adoption correlates more strongly with uptime sensitivity than with energy price alone."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 5. REGIONAL DYNAMICS */}
            <AnimatedSection className="py-12 md:py-20 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <SectionHeader
                                label="5. Regional Dynamics"
                                title="Asia-Pacific Leads in Scale"
                                description="Asia-Pacific: ~40.21% share. Driven by rapid industrialization, data-center buildout, and strong government support (Japan, Korea, China)."
                            />
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-6">
                                <p className="text-slate-700 text-sm leading-relaxed">
                                    <span className="font-bold text-blue-600">Example:</span> Japan’s ~USD 3 billion hydrogen infrastructure commitment directly supports fuel-flexible SOFC deployments using LNG today and green hydrogen tomorrow.
                                </p>
                            </div>
                        </div>
                        <div className="grid gap-6">
                            <div className="relative h-[300px] w-full rounded-2xl overflow-hidden shadow-xl border border-white bg-white p-4">
                                <Image src="/images/market/Regional Market Dynamics.webp" alt="Regional Share" fill className="object-contain" />
                            </div>
                            <div className="relative h-[300px] w-full rounded-2xl overflow-hidden shadow-xl border border-white bg-white p-4">
                                <Image src="/images/market/Regional Market Dynamics2.jpg" alt="Regional Growth Map" fill className="object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 6. CAPITAL & INVESTMENT */}
            <AnimatedSection className="py-12 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-white p-6">
                        <Image
                            src="/images/market/Capital, Investment & Commercial Momentum.jpg"
                            alt="Capital Flow"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="order-1 lg:order-2">
                        <SectionHeader
                            label="6. Capital Momentum"
                            title="Flowing Toward Deployment"
                            description="Capital is flowing toward deployment, not pilots. SOFCs are transitioning from a 'technology category' to an infrastructure asset class."
                        />
                        <div className="space-y-4">
                            <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                                <Building2 className="w-8 h-8 text-slate-400 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm">Large Partnerships</h4>
                                    <p className="text-slate-600 text-sm">Multi-billion-dollar frameworks for data centers.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                                <Factory className="w-8 h-8 text-slate-400 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm">Manufacturing Expansion</h4>
                                    <p className="text-slate-600 text-sm">New facilities supporting hundreds of MW/year.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                                <Coins className="w-8 h-8 text-slate-400 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm">Strategic Investors</h4>
                                    <p className="text-slate-600 text-sm">Clean energy funds & sovereign programs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 7. BALANCE OF PLANT */}
            <AnimatedSection className="py-12 md:py-20 bg-slate-50 border-y border-slate-200">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <SectionHeader
                        label="7. Balance-of-Plant"
                        title="Where Value Concentrates"
                        description="The Balance of Plant (BoP) segment holds the largest share by component."
                        className="mx-auto"
                    />
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            <div className="col-span-2">
                                <h4 className="text-xl font-bold text-slate-900 mb-4">Why BoP Drives Success</h4>
                                <ul className="space-y-3 text-slate-600">
                                    <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500" /> System efficiency & load-following</li>
                                    <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500" /> Reliability & Uptime</li>
                                    <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500" /> Site-specific customization</li>
                                </ul>
                            </div>
                            <div className="flex flex-col justify-center border-l border-slate-100 pl-8">
                                <p className="text-lg font-bold text-blue-600 mb-2">Implication</p>
                                <p className="text-slate-600 text-sm italic">
                                    "Winning requires system-level engineering excellence, not just cell performance."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 8. COMPETITIVE LANDSCAPE */}
            <AnimatedSection className="py-12 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionHeader
                        label="8. Competitive Landscape"
                        title="A Diverse Ecosystem of Global Players"
                        description="The global SOFC market is supported by a robust mix of established industrial giants and specialized innovators. From stack manufacturing to full system integration, the ecosystem is categorized by technology type and regional strength, reflecting a mature supply chain ready for global scale."
                        className="mx-auto text-center"
                    />

                    <div className="max-w-5xl mx-auto">
                        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 mb-8">
                            <h4 className="font-bold text-slate-900 mb-4 text-lg">Market Ecosystem Analysis</h4>
                            <div className="grid md:grid-cols-2 gap-8 text-slate-700 leading-relaxed">
                                <p>
                                    The landscape is segmented by <strong>Region</strong> (North America, Europe, Asia Pacific) and <strong>Value Chain Role</strong>. North America and Europe lead in system innovation and large-scale stationary deployment, driven by companies like Bloom Energy and Ceres.
                                </p>
                                <p>
                                    Asia Pacific is a powerhouse for manufacturing scale and residential adoption (Ene-Farm), with major congratulations from industrial conglomerates like Mitsubishi and Aisin. This regional specialization creates a complementary global supply chain.
                                </p>
                            </div>
                        </div>

                        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-white p-6">
                            <Image
                                src="/images/market/solid-oxide-fuel-cell-market-by-example-players-2026.webp"
                                alt="Major Players Map"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="text-center text-slate-400 text-sm mt-4">
                            Global SOFC Market: Key players categorized by region and technology focus.
                        </p>
                    </div>
                </div>
            </AnimatedSection>

            {/* 9. CHALLENGES */}
            <AnimatedSection className="py-12 md:py-20 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <SectionHeader
                                label="9. Challenges & Constraints"
                                title="Real Constraints Shaping Scale"
                                description="High-temp materials, competition from batteries, and workforce shortages. These challenges don't cap the market—they define who wins."
                            />
                            <div className="space-y-4">
                                <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-200">
                                    <h5 className="font-bold text-slate-900 mb-1">Standardized Platforms</h5>
                                    <p className="text-xs text-slate-500">Market Response</p>
                                </div>
                                <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-200">
                                    <h5 className="font-bold text-slate-900 mb-1">Volume Production</h5>
                                    <p className="text-xs text-slate-500">Market Response</p>
                                </div>
                                <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-200">
                                    <h5 className="font-bold text-slate-900 mb-1">Subsidy Integration</h5>
                                    <p className="text-xs text-slate-500">Market Response</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-6">
                            <div className="relative h-[300px] w-full rounded-2xl overflow-hidden shadow-xl border border-white bg-white p-4">
                                <Image src="/images/market/Market Challenges & Constraints.png" alt="Challenges Diagram" fill className="object-contain" />
                            </div>
                            <div className="relative h-[300px] w-full rounded-2xl overflow-hidden shadow-xl border border-white bg-white p-4">
                                <Image src="/images/market/Market Challenges & Constraints2.jpg" alt="Constraints Graph" fill className="object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 10. HYFU VISION */}
            <AnimatedSection className="py-12 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-white p-6">
                            <Image
                                src="/images/market/What Market Scale Means for HYFU.webp"
                                alt="HYFUX Scale Vision"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <SectionHeader
                                label="10. Implication for HYFUX"
                                title="Scale Is No Longer Optional"
                                description="The next decade will separate platforms built for repeatable deployment from technologies that remain niche."
                            />
                            <div className="p-8 bg-blue-600 text-white rounded-3xl shadow-lg">
                                <h4 className="text-2xl font-bold mb-4">Deploy Phase</h4>
                                <p className="leading-relaxed opacity-90">
                                    HYFUX positions itself for the deployment phase of the SOFC market, where scale, reliability, and customer value determine leadership.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* FAQ */}
            <div className="bg-slate-50 py-12 md:py-20 border-t border-slate-200">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: "How fast is the SOFC market really growing?", a: "At ~31% CAGR from 2026 to 2040, among the fastest in clean energy infrastructure." },
                            { q: "Which segment matters most commercially?", a: "Stationary power applications, representing over 60% of market value." },
                            { q: "Which region leads adoption?", a: "Asia-Pacific, driven by industrial demand and government support." },
                            { q: "Is growth driven only by subsidies?", a: "No. Reliability, grid constraints, and data-center demand are primary drivers." },
                            { q: "What limits scale today?", a: "Materials supply, skilled labor, and upfront costs—but these are actively being addressed." }
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

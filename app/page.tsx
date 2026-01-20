"use client";

import AnimatedHero from "@/components/Hero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap, BarChart3, Layers, Globe2, ShieldCheck, Factory, TrendingUp } from "lucide-react";

export default function Home() {
    return (
        <main className="bg-white min-h-screen text-slate-900 selection:bg-blue-100 font-sans w-full overflow-x-hidden">
            <Navbar />
            <AnimatedHero />

            {/* 🔹 PERFORMANCE SNAPSHOT (Metrics) */}
            <div className="relative z-20 px-6 bg-slate-50 py-12 md:py-24 border-b border-slate-200">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-8 md:mb-16">
                        <span className="text-blue-600 font-bold tracking-widest text-xs uppercase block mb-3">Performance Snapshot</span>
                        <h2 className="text-2xl md:text-4xl font-bold text-slate-900">Early indicators that define our approach</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* MetricCards - SOFC Focused */}
                        {[
                            { val: ">85%", label: "Electrical Efficiency", sub: "Superior LHV efficiency via SOFC technology", icon: Zap },
                            { val: "< 35", label: "kWh / kg H₂", sub: "High-temperature steam electrolysis advantage", icon: CheckCircle2 },
                            { val: "Reversible", label: "Power & H₂", sub: "Dual-mode operation for grid balancing", icon: Layers },
                            { val: "Modular", label: "Stack Design", sub: "Scalable kW to MW factory-built blocks", icon: BarChart3 },
                        ].map((m, i) => (
                            <div key={i} className="bg-white border border-slate-200 p-6 md:p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <m.icon className="w-8 h-8 text-green-600 mb-6" />
                                <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">{m.val}</h3>
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">{m.label}</p>
                                <p className="text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 mt-3">{m.sub}</p>
                            </div>
                        ))}
                    </div>

                    {/* Performance Visuals */}
                    <div className="mt-8 md:mt-16 grid md:grid-cols-2 gap-4 md:gap-8">
                        <div className="relative h-[250px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
                            <Image
                                src="/images/home page/Metrics-driven, confidence, industrial-grade performance..png"
                                alt="Metrics Driven Performance"
                                fill
                                className="object-cover"
                            />
                            {/* TODO: image missing: /images/home page/Metrics-driven, confidence, industrial-grade performance..png */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                                <h4 className="font-bold text-lg">Industrial-Grade Stake</h4>
                            </div>
                        </div>
                        <div className="relative h-[250px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
                            <Image
                                src="/images/home page/Economics & Efficiency Visual.png"
                                alt="Economics Efficiency"
                                fill
                                className="object-cover"
                            />
                            {/* TODO: image missing: /images/home page/Economics & Efficiency Visual.png */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                                <h4 className="font-bold text-lg">Heat Integration Efficiency</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 🔹 THE STRUCTURAL CONSTRAINT */}
            <AnimatedSection className="bg-white py-16 md:py-32">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div>
                        <span className="text-red-600 font-bold tracking-widest text-xs uppercase mb-4 block">The Efficiency Constraint</span>
                        <h2 className="text-3xl md:text-6xl font-extrabold mb-6 md:mb-10 text-slate-900 leading-[1.1]">Liquid water is hard <br className="hidden lg:block" /> to split.</h2>
                        <div className="space-y-6 md:space-y-8 text-base md:text-lg text-slate-600 leading-relaxed font-light">
                            <p>
                                Conventional electrolysis (PEM & Alkaline) suffers from a massive thermodynamic penalty: <span className="text-slate-900 font-semibold">the phase change energy requirement.</span> Splitting liquid water requires ~30-40% more electrical energy than splitting steam.
                            </p>
                            <p>
                                By operating on liquid water, existing legacy technologies are physically mandated to waste vast amounts of electricity as low-grade heat.
                                <br /><span className="italic text-red-500 font-medium">Physics dictates the floor for PEM efficiency.</span>
                            </p>
                        </div>
                    </div>

                    {/* Visual Stack for Constraint */}
                    <div className="space-y-4 md:space-y-8">
                        <div className="relative h-[250px] md:h-[300px] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-100 transform hover:scale-[1.02] transition-transform duration-500">
                            <Image
                                src="/images/home page/Why Green Hydrogen Still Struggles to Scale.png"
                                alt="Scaling Challenge"
                                fill
                                className="object-cover"
                            />
                            {/* TODO: image missing: /images/home page/Why Green Hydrogen Still Struggles to Scale.png */}
                        </div>
                        <div className="relative h-[250px] md:h-[300px] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-100 transform hover:scale-[1.02] transition-transform duration-500 delay-100">
                            <Image
                                src="/images/home page/new.png"
                                alt="Hydrogen Costs"
                                fill
                                className="object-contain bg-white p-4"
                            />
                            {/* TODO: image missing: /images/home page/new.png */}
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 WHY EXISTING APPROACHES FALL SHORT */}
            <AnimatedSection className="bg-slate-50 py-16 md:py-32 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
                        <span className="text-slate-500 font-bold tracking-widest text-xs uppercase mb-4 block">Legacy Tech Limitations</span>
                        <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 text-slate-900">Optimization is not transformation</h2>
                        <p className="text-base md:text-xl text-slate-600">Better catalysts in a PEM stack cannot recover the energy lost to the enthalpy of vaporization.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
                        {/* Left: Diagram */}
                        <div className="relative h-[300px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl bg-white border border-slate-200">
                            <Image
                                src="/images/home page/enduring-closed-brayton-combined-power-cycle.webp"
                                alt="Current Process Limitations"
                                fill
                                className="object-contain p-4 md:p-6"
                            />
                            {/* TODO: image missing: /images/home page/enduring-closed-brayton-combined-power-cycle.webp */}
                        </div>

                        {/* Right: Premise Box */}
                        <div className="bg-slate-100 text-slate-900 p-6 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden group">
                            {/* Abstract Background */}
                            <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 mix-blend-overlay"></div>

                            <div className="relative z-10">
                                <p className="text-blue-600 text-xs md:text-sm font-bold uppercase tracking-widest mb-4 md:mb-6">HYFUX Advantage</p>
                                <h3 className="text-2xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight text-slate-900">Don't fight physics. Use it.</h3>
                                <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mb-6 md:mb-8"></div>
                                <p className="text-slate-700 text-base md:text-lg">
                                    HYFUX Solid Oxide systems use steam, not liquid water. By adding heat, we reduce the electrical work required to split the bond, achieving efficiencies impossible for PEM.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 OUR APPROACH (The Process) */}
            <AnimatedSection className="bg-white py-16 md:py-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div>
                            <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-4 block">The Process Architecture</span>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 text-slate-900">Solid Oxide Physics</h2>
                            <div className="space-y-6 md:space-y-8 text-base md:text-lg text-slate-600 leading-relaxed">
                                <p>
                                    HYFUX deploys High-Temperature Steam Electrolysis (HTSE). We operate at 700°C–850°C, where the thermodynamics of water splitting become favorable.
                                </p>
                                <p>
                                    A significant portion of the energy needed to break the H₂O bond is supplied as heat—often waste industrial heat—drastically cutting the electrical load.
                                </p>
                                <div className="border-l-4 border-blue-600 pl-6 py-2">
                                    <p className="font-semibold text-slate-900 text-lg md:text-xl">
                                        &gt;90% Efficiency (LHV) on a stack level.
                                    </p>
                                </div>
                                <p className="font-serif italic text-slate-500 text-base md:text-lg">
                                    "We trade expensive electricity for cheap heat."
                                </p>
                            </div>
                        </div>

                        {/* Process Visuals Grid */}
                        <div className="grid gap-4 md:gap-6">
                            <div className="relative h-[250px] md:h-[300px] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-white">
                                <Image
                                    src="/images/home page/Hydrogen-Diagram.jpg"
                                    alt="Process Diagram"
                                    fill
                                    className="object-contain p-4"
                                />
                                {/* TODO: image missing: /images/home page/Hydrogen-Diagram.jpg */}
                            </div>
                            <div className="relative h-[200px] md:h-[250px] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-white">
                                <Image
                                    src="/images/home page/green-hydrogen-for-industry-decarbonization-process-infographics.jpg"
                                    alt="Process Infographic"
                                    fill
                                    className="object-contain p-4"
                                />
                                {/* TODO: image missing: /images/home page/green-hydrogen-for-industry-decarbonization-process-infographics.jpg */}
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 POSITIONING (Not an Electrolyzer) */}
            <AnimatedSection className="relative py-16 md:py-32 bg-blue-100 text-slate-900 isolation-auto">
                {/* Background Image Parallax */}
                {/* Background Gradient - Cleaner, Premium */}
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-100 via-sky-100/40 to-blue-100" />
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-100 via-transparent to-blue-100" />

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    <div className="mb-10 md:mb-14">
                        <span className="text-green-600 font-bold tracking-widest text-xs uppercase mb-4 block">Grid Interaction</span>
                        <h2 className="text-3xl md:text-7xl font-extrabold mb-6 md:mb-8 tracking-tight text-slate-900">Reversible <br />Power & Hydrogen.</h2>
                        <p className="text-lg md:text-2xl text-slate-600 font-light max-w-3xl mx-auto leading-relaxed">
                            HYFUX systems are not just consumers. They are reversible assets that can generate power when the grid needs it, and storage when it doesn't.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 md:gap-8 text-left">
                        {[
                            { title: "Grid Balancing", desc: "Absorb excess renewable peaks, dispatch power during deficits.", icon: Zap },
                            { title: "Fuel Flexible", desc: "Operate on Hydrogen, Ammonia, or Natural Gas blends.", icon: Layers },
                            { title: "High Quality Heat", desc: "Generate high-grade steam for industrial processes alongside H₂.", icon: Factory },
                        ].map((item, i) => (
                            <div key={i} className="bg-white border border-slate-200 p-6 md:p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
                                <item.icon className="w-10 h-10 md:w-12 md:h-12 text-blue-600 mb-4 md:mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-lg md:text-xl font-bold mb-2 text-slate-900">{item.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Built to Enable Industry Banner */}
                    <div className="mt-12 md:mt-20 relative h-[180px] md:h-[250px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                        <Image
                            src="/images/home page/BUILT TO ENABLE INDUSTRY.png"
                            alt="Built To Enable Industry"
                            fill
                            className="object-cover blur-[3px] scale-105 group-hover:blur-none group-hover:scale-110 transition-all duration-700"
                        />
                        {/* TODO: image missing: /images/home page/BUILT TO ENABLE INDUSTRY.png */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-all duration-700 flex items-center justify-center">
                            <h3 className="text-2xl md:text-4xl font-bold text-white tracking-widest uppercase text-center drop-shadow-2xl">Energy Security <br />& Independence</h3>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 PROVEN PERFORMANCE TABLE + INDIA STRATEGY */}
            <div className="bg-gradient-to-br from-sky-100 to-blue-100 py-16 md:py-32 border-y border-blue-300/50">
                <AnimatedSection className="max-w-7xl mx-auto px-6 mb-16 md:mb-24">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Table Area */}
                        <div>
                            <span className="text-green-600 font-bold tracking-widest text-xs uppercase mb-4 block">Proven Performance</span>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 md:mb-6">Pilot-validated results</h2>
                            <p className="text-base md:text-lg text-slate-600 mb-6 md:mb-8">
                                Demonstrating a sub-$2/kg production trajectory under realistic power conditions.
                            </p>

                            {/* Mobile Data Cards (< md) */}
                            <div className="md:hidden space-y-4 mb-6">
                                {/* Item 1: Electricity */}
                                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                                    <h4 className="font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2">Electricity</h4>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Conventional</div>
                                            <div className="text-slate-600 font-medium">50–55 kWh/kg</div>
                                        </div>
                                        <div>
                                            <div className="text-green-600 text-xs uppercase tracking-wider font-bold mb-1">HELIONYX</div>
                                            <div className="text-green-700 font-bold bg-green-50 inline-block px-2 py-0.5 rounded">30–35 kWh/kg</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Item 2: Cost */}
                                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                                    <h4 className="font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2">Cost (LCOH)</h4>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Conventional</div>
                                            <div className="text-slate-600 font-medium">$3.5–4.5/kg</div>
                                        </div>
                                        <div>
                                            <div className="text-green-600 text-xs uppercase tracking-wider font-bold mb-1">HELIONYX</div>
                                            <div className="text-green-700 font-bold bg-green-50 inline-block px-2 py-0.5 rounded">&lt; $2/kg</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Item 3: Materials */}
                                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                                    <h4 className="font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2">Materials</h4>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Conventional</div>
                                            <div className="text-slate-600 font-medium">PGMs Required</div>
                                        </div>
                                        <div>
                                            <div className="text-green-600 text-xs uppercase tracking-wider font-bold mb-1">HELIONYX</div>
                                            <div className="text-green-700 font-bold bg-green-50 inline-block px-2 py-0.5 rounded">None</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Desktop Table (>= md) */}
                            <div className="hidden md:block w-full rounded-xl overflow-hidden shadow-lg border border-slate-200 mb-6 bg-white">
                                <table className="w-full text-left text-sm min-w-[500px]">
                                    <thead className="bg-slate-800 text-slate-200">
                                        <tr>
                                            <th className="p-4 font-semibold">Metric</th>
                                            <th className="p-4 font-semibold opacity-70">PEM / Alkaline</th>
                                            <th className="p-4 font-bold text-green-400">HYFUX SOFC</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        <tr>
                                            <td className="p-4 font-medium text-slate-900">Electrical Demand</td>
                                            <td className="p-4 text-slate-500">50–55 kWh/kg</td>
                                            <td className="p-4 font-bold text-green-700 bg-green-50">&lt; 35 kWh/kg</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium text-slate-900">System Efficiency</td>
                                            <td className="p-4 text-slate-500">60–70% (LHV)</td>
                                            <td className="p-4 font-bold text-green-700 bg-green-50">&gt; 90% (LHV)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium text-slate-900">Materials</td>
                                            <td className="p-4 text-slate-500">Platinum / Iridium (Low Supply)</td>
                                            <td className="p-4 font-bold text-green-700 bg-green-50">Ceramics / Nickel (Abundant)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-xs text-slate-400 italic">Comparison based on standard industrial electrolysis vs. HYFUX heat-integrated SOFC.</p>
                        </div>

                        {/* India Strategy Visual */}
                        <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl bg-white border border-slate-200 group">
                            <Image
                                src="/images/home page/India-Focused Clean Energy Visual.png"
                                alt="India First Strategy"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* TODO: image missing: /images/home page/India-Focused Clean Energy Visual.png */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent p-6 md:p-10 flex flex-col justify-end">
                                <span className="text-orange-400 font-bold uppercase tracking-widest text-xs mb-2">India-First Deployment</span>
                                <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">Aligned with National Ambitions</h3>
                                <p className="text-slate-200 text-xs md:text-sm leading-relaxed max-w-sm">
                                    Enabling scalable green hydrogen without crippling renewable overbuild requirements.
                                </p>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>

            {/* 🔹 INDUSTRIAL APPLICATIONS (Bento Grid Gallery) */}
            <AnimatedSection className="bg-white py-16 md:py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-10 md:mb-16">
                        <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-3 block">Industrial Applications</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">Where economics matter most</h2>
                        <p className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto">
                            Designed for sectors where hydrogen cost, reliability, and availability directly determine feasibility.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">

                        {/* 1. STEEL (Large) */}
                        <div className="md:col-span-2 relative group overflow-hidden rounded-2xl cursor-default">
                            <Image src="/images/home page/Steel, Construction & Infrastructure.png" alt="Steel" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            {/* TODO: image missing: /images/home page/Steel, Construction & Infrastructure.png */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-8 flex flex-col justify-end">
                                <h3 className="text-white text-2xl font-bold mb-2">Green Steel & DRI</h3>
                                <p className="text-slate-200 text-sm max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    Providing low-cost Syngas and Hydrogen for Direct Reduced Iron (DRI) processes.
                                </p>
                            </div>
                        </div>

                        {/* 2. Mobility (Tall/Standard) */}
                        <div className="relative group overflow-hidden rounded-2xl cursor-default">
                            <Image src="/images/home page/Clean Fuels & Energy Distribution.png" alt="Mobility" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            {/* TODO: image missing: /images/home page/Clean Fuels & Energy Distribution.png */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-8 flex flex-col justify-end">
                                <h3 className="text-white text-xl font-bold mb-1">e-Fuels</h3>
                                <p className="text-slate-200 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Feedstock for synthetic aviation and marine fuels.
                                </p>
                            </div>
                        </div>

                        {/* 3. Agriculture (Large - with stacked images if needed, mostly just fertilizer here) */}
                        <div className="md:col-span-1 relative group overflow-hidden rounded-2xl cursor-default">
                            <Image src="/images/home page/Fertilizers & Food Production.png" alt="Fertilizers" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            {/* TODO: image missing: /images/home page/Fertilizers & Food Production.png */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-8 flex flex-col justify-end">
                                <h3 className="text-white text-xl font-bold mb-1">Ammonia</h3>
                                <p className="text-slate-200 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Decarbonizing fertilizer production with scalable H₂.
                                </p>
                            </div>
                        </div>

                        {/* 4. Tractor (Standard) */}
                        <div className="relative group overflow-hidden rounded-2xl cursor-default">
                            <Image src="/images/home page/tractor-spreading-fertilizer.jpg" alt="Ag" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            {/* TODO: image missing: /images/home page/tractor-spreading-fertilizer.jpg */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-8 flex flex-col justify-end">
                                <h3 className="text-white text-xl font-bold mb-1">Agri-Power</h3>
                                <p className="text-slate-200 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Sustainable power for heavy farm machinery.
                                </p>
                            </div>
                        </div>

                        {/* 5. Soybeans (Standard) */}
                        <div className="relative group overflow-hidden rounded-2xl cursor-default">
                            <Image src="/images/home page/Bloomberg_20soybeans_20into_20grain_20truck.jpeg" alt="Grains" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            {/* TODO: image missing: /images/home page/Bloomberg_20soybeans_20into_20grain_20truck.jpeg */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-8 flex flex-col justify-end">
                                <h3 className="text-white text-xl font-bold mb-1">Logistics</h3>
                                <p className="text-slate-200 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Clean supply chains for global food security.
                                </p>
                            </div>
                        </div>

                        {/* 6. Chemicals (Wide) */}
                        <div className="md:col-span-2 relative group overflow-hidden rounded-2xl cursor-default">
                            <Image src="/images/home page/Chemicals & Everyday Materials.png" alt="Chemicals" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            {/* TODO: image missing: /images/home page/Chemicals & Everyday Materials.png */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-8 flex flex-col justify-end">
                                <h3 className="text-white text-2xl font-bold mb-1">Petrochemicals</h3>
                                <p className="text-slate-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Refining and upgrading hydrocarbons with low-carbon hydrogen.
                                </p>
                            </div>
                        </div>

                        {/* 7. Extra Chemical Image */}
                        <div className="relative group overflow-hidden rounded-2xl cursor-default">
                            <Image src="/images/home page/Picture1.jpg" alt="Materials" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            {/* TODO: image missing: /images/home page/Picture1.jpg */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-8 flex flex-col justify-end">
                                <h3 className="text-white text-xl font-bold mb-1">Materials</h3>
                                <p className="text-slate-200 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Next-gen polymers and plastics.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 FINAL CTA BANNER */}
            <div className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/home page/ACCELERATING THE ECONOMICS OF GREEN HYDROGEN (FINAL CTA).png"
                    alt="Accelerating Economics"
                    fill
                    className="object-cover"
                />
                {/* TODO: image missing: /images/home page/ACCELERATING THE ECONOMICS OF GREEN HYDROGEN (FINAL CTA).png */}
                <div className="absolute inset-0 bg-black/20 md:bg-black/5" /> {/* Subtle tint */}

                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-16 rounded-2xl md:rounded-3xl shadow-2xl">
                        <h2 className="text-2xl md:text-5xl font-bold text-white mb-6 md:mb-8 drop-shadow-md">Ready to Scale?</h2>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
                            <Link href="/partnership" className="px-6 py-3 md:px-10 md:py-5 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1 text-sm md:text-base">
                                Partner With Us
                            </Link>
                            <Link href="/contact" className="px-6 py-3 md:px-10 md:py-5 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-50 transition-all shadow-lg hover:shadow-white/30 transform hover:-translate-y-1 text-sm md:text-base">
                                Request Brief
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}

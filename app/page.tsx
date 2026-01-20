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
                        {/* MetricCards */}
                        {[
                            { val: "~70%", label: "Lower Energy Input", sub: "Compared to conventional electrolysis", icon: Zap },
                            { val: "$1.5–2.0", label: "/ kg LCOH", sub: "Target production economics at scale", icon: BarChart3 },
                            { val: "30–35", label: "kWh / kg H₂", sub: "Pilot-validated energy input range", icon: CheckCircle2 },
                            { val: "Modular", label: "by Design", sub: "Built for distributed industrial deployment", icon: Layers },
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
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                                <h4 className="font-bold text-lg">Industrial-Grade Performance</h4>
                            </div>
                        </div>
                        <div className="relative h-[250px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
                            <Image
                                src="/images/home page/Economics & Efficiency Visual.png"
                                alt="Economics Efficiency"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                                <h4 className="font-bold text-lg">Economics & Efficiency</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 🔹 THE STRUCTURAL CONSTRAINT */}
            <AnimatedSection className="bg-white py-16 md:py-32">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div>
                        <span className="text-red-600 font-bold tracking-widest text-xs uppercase mb-4 block">The Structural Constraint</span>
                        <h2 className="text-3xl md:text-6xl font-extrabold mb-6 md:mb-10 text-slate-900 leading-[1.1]">Green hydrogen is still <br className="hidden lg:block" /> too expensive.</h2>
                        <div className="space-y-6 md:space-y-8 text-base md:text-lg text-slate-600 leading-relaxed font-light">
                            <p>
                                Despite falling electrolyzer costs, <span className="text-slate-900 font-semibold">electricity consumption remains the dominant driver of hydrogen production cost.</span> As a result, most green hydrogen projects remain above $3–4/kg, limiting adoption at industrial scale.
                            </p>
                            <p>
                                Incremental improvements to PEM and alkaline electrolyzers have not changed this reality.
                                <br /><span className="italic text-red-500 font-medium">Marginal efficiency gains cannot overcome a thermodynamic constraint.</span>
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
                        </div>
                        <div className="relative h-[250px] md:h-[300px] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-100 transform hover:scale-[1.02] transition-transform duration-500 delay-100">
                            <Image
                                src="/images/home%20page/new.png"
                                alt="Hydrogen Costs"
                                fill
                                className="object-contain bg-white p-4"
                            />
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 WHY EXISTING APPROACHES FALL SHORT */}
            <AnimatedSection className="bg-slate-50 py-16 md:py-32 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
                        <span className="text-slate-500 font-bold tracking-widest text-xs uppercase mb-4 block">Why Existing Approaches Fall Short</span>
                        <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 text-slate-900">Optimization is not transformation</h2>
                        <p className="text-base md:text-xl text-slate-600">While valuable, improvements like better membranes and catalysts do not materially reduce system-level energy input.</p>
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
                        </div>

                        {/* Right: Premise Box */}
                        <div className="bg-slate-100 text-slate-900 p-6 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden group">
                            {/* Abstract Background */}
                            {/* Abstract Background - REMOVED for cleaner look */}
                            <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 mix-blend-overlay"></div>

                            <div className="relative z-10">
                                <p className="text-blue-600 text-xs md:text-sm font-bold uppercase tracking-widest mb-4 md:mb-6">HELIONYX Premise</p>
                                <h3 className="text-2xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight text-slate-900">Lower energy input is the breakthrough.</h3>
                                <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mb-6 md:mb-8"></div>
                                <p className="text-slate-700 text-base md:text-lg">
                                    HELIONYX is built on a different premise. We don't just optimize components; we fundamentally change the energy equation.
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
                            <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-4 block">Our Approach</span>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 text-slate-900">A new way to split water</h2>
                            <div className="space-y-6 md:space-y-8 text-base md:text-lg text-slate-600 leading-relaxed">
                                <p>
                                    HELIONYX uses a non-electrolytic hydrogen production pathway, combining controlled plasma activation with metal-assisted reactions to dissociate water molecules.
                                </p>
                                <p>
                                    Rather than forcing higher current through fixed electrodes, the platform rethinks how water molecules are activated at a fundamental level.
                                </p>
                                <div className="border-l-4 border-blue-600 pl-6 py-2">
                                    <p className="font-semibold text-slate-900 text-lg md:text-xl">
                                        Significantly lower energy input than conventional electrolysis.
                                    </p>
                                </div>
                                <p className="font-serif italic text-slate-500 text-base md:text-lg">
                                    "This is not an optimization of existing systems. It is a new process architecture."
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
                            </div>
                            <div className="relative h-[200px] md:h-[250px] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-white">
                                <Image
                                    src="/images/home page/green-hydrogen-for-industry-decarbonization-process-infographics.jpg"
                                    alt="Process Infographic"
                                    fill
                                    className="object-contain p-4"
                                />
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
                        <span className="text-green-600 font-bold tracking-widest text-xs uppercase mb-4 block">Positioning</span>
                        <h2 className="text-3xl md:text-7xl font-extrabold mb-6 md:mb-8 tracking-tight text-slate-900">This is not an <br />electrolyzer.</h2>
                        <p className="text-lg md:text-2xl text-slate-600 font-light max-w-3xl mx-auto leading-relaxed">
                            HELIONYX redefines the energy economics of hydrogen production by addressing the core constraint limiting scale.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 md:gap-8 text-left">
                        {[
                            { title: "No Precious Metals", desc: "Eliminating PGM supply chain risks", icon: ShieldCheck },
                            { title: "No Mega-Plants", desc: "No huge centralized facilities required", icon: Factory },
                            { title: "No Overbuild", desc: "Reduced renewable capacity needs", icon: Zap },
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
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-all duration-700 flex items-center justify-center">
                            <h3 className="text-2xl md:text-4xl font-bold text-white tracking-widest uppercase text-center drop-shadow-2xl">Engineered for<br />Industrial Reality</h3>
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
                                            <th className="p-4 font-semibold opacity-70">Conventional</th>
                                            <th className="p-4 font-bold text-green-400">HELIONYX</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        <tr>
                                            <td className="p-4 font-medium text-slate-900">Electricity</td>
                                            <td className="p-4 text-slate-500">50–55 kWh/kg</td>
                                            <td className="p-4 font-bold text-green-700 bg-green-50">30–35 kWh/kg</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium text-slate-900">Cost (LCOH)</td>
                                            <td className="p-4 text-slate-500">$3.5–4.5/kg</td>
                                            <td className="p-4 font-bold text-green-700 bg-green-50">&lt; $2/kg</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium text-slate-900">Materials</td>
                                            <td className="p-4 text-slate-500">PGMs Required</td>
                                            <td className="p-4 font-bold text-green-700 bg-green-50">None</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-xs text-slate-400 italic">Performance based on pilot-scale validation.</p>
                        </div>

                        {/* India Strategy Visual */}
                        <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl bg-white border border-slate-200 group">
                            <Image
                                src="/images/home page/India-Focused Clean Energy Visual.png"
                                alt="India First Strategy"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent p-6 md:p-10 flex flex-col justify-end">
                                <span className="text-orange-400 font-bold uppercase tracking-widest text-xs mb-2">India-First Deployment</span>
                                <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">Aligned with National Ambitions</h3>
                                <p className="text-slate-200 text-xs md:text-sm leading-relaxed max-w-sm">
                                    Reducing renewable overbuild and enabling project viability under real industrial tariffs in India.
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
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-8 flex flex-col justify-end">
                                <h3 className="text-white text-2xl font-bold mb-2">Steel & Infrastructure</h3>
                                <p className="text-slate-200 text-sm max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    Enabling distributed hydrogen supply near steel clusters, lowering power infrastructure requirements.
                                </p>
                            </div>
                        </div>

                        {/* 2. Mobility (Tall/Standard) */}
                        <div className="relative group overflow-hidden rounded-2xl cursor-default">
                            <Image src="/images/home page/Clean Fuels & Energy Distribution.png" alt="Mobility" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-8 flex flex-col justify-end">
                                <h3 className="text-white text-xl font-bold mb-1">Mobility & Fuels</h3>
                                <p className="text-slate-200 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    On-site production for refueling infrastructure.
                                </p>
                            </div>
                        </div>

                        {/* 3. Agriculture (Large - with stacked images if needed, mostly just fertilizer here) */}
                        <div className="md:col-span-1 relative group overflow-hidden rounded-2xl cursor-default">
                            <Image src="/images/home page/Fertilizers & Food Production.png" alt="Fertilizers" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-8 flex flex-col justify-end">
                                <h3 className="text-white text-xl font-bold mb-1">Green Ammonia</h3>
                                <p className="text-slate-200 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Cost-competitive feedstock for fertilizer production.
                                </p>
                            </div>
                        </div>

                        {/* 4. Tractor (Standard) */}
                        <div className="relative group overflow-hidden rounded-2xl cursor-default">
                            <Image src="/images/home page/tractor-spreading-fertilizer.jpg" alt="Ag" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-8 flex flex-col justify-end">
                                <h3 className="text-white text-xl font-bold mb-1">Sustainable Food</h3>
                                <p className="text-slate-200 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Decarbonizing heavy agricultural machinery.
                                </p>
                            </div>
                        </div>

                        {/* 5. Soybeans (Standard) */}
                        <div className="relative group overflow-hidden rounded-2xl cursor-default">
                            <Image src="/images/home page/Bloomberg_20soybeans_20into_20grain_20truck.jpeg" alt="Grains" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-8 flex flex-col justify-end">
                                <h3 className="text-white text-xl font-bold mb-1">Global Supply Chain</h3>
                                <p className="text-slate-200 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Reducing the carbon intensity of food logistics.
                                </p>
                            </div>
                        </div>

                        {/* 6. Chemicals (Wide) */}
                        <div className="md:col-span-2 relative group overflow-hidden rounded-2xl cursor-default">
                            <Image src="/images/home page/Chemicals & Everyday Materials.png" alt="Chemicals" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-8 flex flex-col justify-end">
                                <h3 className="text-white text-2xl font-bold mb-1">Specialty Chemicals</h3>
                                <p className="text-slate-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Enabling incremental adoption without oversized upfront investment.
                                </p>
                            </div>
                        </div>

                        {/* 7. Extra Chemical Image */}
                        <div className="relative group overflow-hidden rounded-2xl cursor-default">
                            <Image src="/images/home page/Picture1.jpg" alt="Materials" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-8 flex flex-col justify-end">
                                <h3 className="text-white text-xl font-bold mb-1">Everyday Materials</h3>
                                <p className="text-slate-200 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Essential feedstock for plastics and polymers.
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

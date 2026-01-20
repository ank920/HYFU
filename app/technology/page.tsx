"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    Zap, Activity, Minimize2, Maximize2, Thermometer,
    CheckCircle2, Layers, Globe2, ArrowRight
} from "lucide-react";
import { fadeUp } from "@/lib/animations";

export default function TechnologyPage() {
    return (
        <main className="bg-white min-h-screen text-slate-900 selection:bg-blue-100">
            <Navbar />

            {/* 🔹 HERO SECTION (VIDEO + DARK OVERLAY) */}
            <div className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-800">
                {/* Background Video */}
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-80"
                    >
                        <source src="/video/technology.mp4" type="video/mp4" />
                    </video>
                    {/* Dark gradient overlay per user request */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />

                    {/* Subtle abstract wave animation (CSS only for performance) */}
                    <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 md:mb-8"
                    >
                        A New <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-green-400">Hydrogen Production</span> Pathway
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto"
                    >
                        <span className="text-cyan-200">HELIONYX</span> is developing a <span className="text-green-300">next-generation, non-electrolytic</span> hydrogen production platform designed to <span className="text-blue-300">fundamentally improve the energy economics</span> of <span className="text-green-400 font-semibold">green hydrogen</span> for industrial-scale deployment.
                    </motion.p>
                </div>
            </div>

            {/* 🔹 TECHNOLOGY OVERVIEW */}
            <AnimatedSection className="py-12 md:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-4 block">Technology Overview</span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-slate-900">Beyond Electrolysis</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-12">
                        HELIONYX has developed a novel green hydrogen production approach that operates without conventional electrolyzers.
                        The system is fully emissions-free at point of production and engineered for:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="text-green-600 w-5 h-5 flex-shrink-0" />
                            <span className="text-slate-800 font-medium">Industrial reliability</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="text-green-600 w-5 h-5 flex-shrink-0" />
                            <span className="text-slate-800 font-medium">Modular scalability</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="text-green-600 w-5 h-5 flex-shrink-0" />
                            <span className="text-slate-800 font-medium">Distributed deployment</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="text-green-600 w-5 h-5 flex-shrink-0" />
                            <span className="text-slate-800 font-medium">Real-world operation</span>
                        </div>
                    </div>
                    <div className="mt-12 p-6 bg-slate-50 border border-slate-200 rounded-lg inline-block">
                        <p className="text-slate-700 italic font-medium">
                            "This is not a laboratory concept. The architecture is designed with commercial deployment constraints in mind."
                        </p>
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 CORE INNOVATION */}
            <AnimatedSection className="py-12 md:py-24 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div>
                        <span className="text-green-600 font-bold tracking-widest text-xs uppercase mb-4 block">Core Innovation</span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 text-slate-900 leading-tight">Pulsed Plasma-Assisted Water Activation</h2>
                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                            <p>
                                Unlike traditional electrolysis, which relies on continuous DC voltage across fixed electrodes, the HELIONYX platform uses <strong className="text-slate-900">pulsed electrical energy within a controlled non-thermal plasma environment.</strong>
                            </p>
                            <p>
                                This approach exploits electromagnetic frequency ranges where water molecule excitation is more efficient, reducing the total energy required for dissociation.
                            </p>

                            <h4 className="font-bold text-slate-900 mt-6 mb-4">Why this matters:</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                <li className="flex gap-2 items-center"><Zap className="w-4 h-4 text-blue-600" /> Lower energy losses</li>
                                <li className="flex gap-2 items-center"><Thermometer className="w-4 h-4 text-blue-600" /> Reduced heat generation</li>
                                <li className="flex gap-2 items-center"><Maximize2 className="w-4 h-4 text-blue-600" /> Higher effective reaction area</li>
                                <li className="flex gap-2 items-center"><Activity className="w-4 h-4 text-blue-600" /> Improved system efficiency</li>
                            </ul>
                        </div>
                    </div>
                    {/* Core Innovation Visual */}
                    <div className="relative h-[250px] md:h-[400px] w-full bg-slate-800 rounded-lg overflow-hidden shadow-2xl flex items-center justify-center border border-slate-700">
                        <Image
                            src="/images/techno/high-voltage-electrical-arcs-experiment.png"
                            alt="Pulsed Plasma Experiment"
                            fill
                            className="object-cover opacity-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                        <div className="absolute bottom-6 left-6 text-white z-10">
                            <h4 className="font-bold text-lg mb-1">Non-Thermal Plasma</h4>
                            <p className="text-xs text-slate-300">High-frequency molecular excitation</p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 KEY PERFORMANCE SNAPSHOT */}
            <AnimatedSection className="py-12 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-6 md:mb-8 block">Performance Snapshot</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {[
                            { val: "30–35", unit: "kWh/kg H₂", label: "Pilot-validated energy input range" },
                            { val: "~70%", unit: "Reduction", label: "vs conventional electrolysis" },
                            { val: "Sub-$2", unit: "/kg LCOH", label: "Trajectory under industrial tariffs" },
                            { val: "25–50", unit: "kg/hr", label: "Linear, modular scale architecture" },
                        ].map((item, i) => (
                            <div key={i} className="p-6 md:p-8 bg-white border border-slate-100 rounded-xl shadow-lg hover:shadow-xl transition-all border-b-4 border-b-blue-500">
                                <h3 className="text-4xl font-bold text-slate-900 mb-1">{item.val}</h3>
                                <p className="text-blue-600 text-sm font-bold uppercase tracking-wider mb-4">{item.unit}</p>
                                <p className="text-slate-500 text-sm leading-snug">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 HOW IT WORKS */}
            <AnimatedSection className="py-12 md:py-24 bg-slate-50 border-y border-slate-200">
                <div className="max-w-4xl mx-auto px-6 text-center mb-10 md:mb-16">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900">Distributed Reaction Architecture</h2>
                    <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        The HELIONYX system incorporates a proprietary catalytic medium dispersed within the water volume, creating millions of microscopic reaction sites.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6 md:gap-12 mb-10 md:mb-16">
                    {/* Diagram 1 */}
                    <div className="relative h-[250px] md:h-[300px] w-full bg-white rounded-lg border border-slate-200 overflow-hidden shadow-lg p-2">
                        <Image
                            src="/images/techno/Hydrogen-Diagram.jpg"
                            alt="Hydrogen Process Diagram"
                            fill
                            className="object-contain"
                        />
                    </div>
                    {/* Diagram 2 */}
                    <div className="relative h-[250px] md:h-[300px] w-full bg-white rounded-lg border border-slate-200 overflow-hidden shadow-lg p-2">
                        <Image
                            src="/images/techno/renewable-energy-hydrogen-fuel-cycle-diagram.jpg"
                            alt="Fuel Cycle Diagram"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
                    {[
                        { title: "1. Cold Plasma Generation", desc: "Pulsed electrical fields generate a non-thermal plasma environment, optimized to activate water molecules without excessive heat." },
                        { title: "2. Catalytic-Assisted Dissociation", desc: "Metal-enhanced microstructures act as distributed reaction centers, intensifying local electric fields and facilitating hydrogen release." },
                        { title: "3. Hydrogen Separation", desc: "High-purity hydrogen (up to 99.99%) is separated with minimal downstream processing requirements." }
                    ].map((step, i) => (
                        <div key={i} className="relative p-8 bg-white rounded-lg shadow-sm border border-slate-200">
                            <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 text-white font-bold flex items-center justify-center rounded-full shadow-lg">
                                {i + 1}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 mt-2">{step.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </AnimatedSection>

            {/* 🔹 TECHNICAL ADVANTAGES */}
            <AnimatedSection className="py-12 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">Technical Advantages</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Energy Efficiency", desc: "30–35 kWh/kg versus 50–55 kWh/kg for conventional electrolysis." },
                            { title: "No Precious Metals", desc: "Avoids platinum-group metals, reducing cost volatility and supply-chain risk." },
                            { title: "Modular by Design", desc: "25–50 kg/hour units scale linearly. A 500 kg/hour system uses multiple identical modules." },
                            { title: "Near-Ambient Operation", desc: "Atmospheric pressure and moderate operating temperatures reduce safety and cooling complexity." },
                            { title: "High Purity Output", desc: "Hydrogen purity suitable for industrial and chemical applications without extensive polishing." },
                            { title: "Fast Dynamic Response", desc: "Rapid startup and shutdown enable better coupling with intermittent renewable power." },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 items-start p-6 rounded-lg hover:bg-slate-50 transition-colors">
                                <div className="mt-1 w-2 h-2 rounded-full bg-green-500 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                                    <p className="text-slate-600 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 TECHNOLOGY COMPARISON TABLE */}
            <AnimatedSection className="py-12 md:py-24 bg-slate-50 border-t border-slate-200">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-slate-900">Conventional Electrolysis vs HELIONYX</h2>
                    <div className="overflow-x-auto bg-white rounded-xl shadow-xl border border-slate-200">
                        <table className="w-full text-left text-sm md:text-base">
                            <thead className="bg-slate-100 border-b border-slate-200">
                                <tr>
                                    <th className="py-5 px-6 font-semibold text-slate-700">Metric</th>
                                    <th className="py-5 px-6 font-semibold text-slate-500">Conventional Electrolysis</th>
                                    <th className="py-5 px-6 font-bold text-blue-700 bg-blue-50/50">HELIONYX Platform</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {[
                                    { metric: "Energy Input", conv: "50–55 kWh/kg", hel: "30–35 kWh/kg" },
                                    { metric: "Typical CAPEX", conv: "$1,000–1,500 / kW", hel: "Comparable, lower LCOH" },
                                    { metric: "Catalysts", conv: "Platinum-group metals", hel: "Common materials" },
                                    { metric: "Architecture", conv: "Centralized", hel: "Modular / Distributed" },
                                    { metric: "Cooling Needs", conv: "High", hel: "Minimal" },
                                    { metric: "LCOH Potential", conv: "$3.5–4.5/kg", hel: "Sub-$2/kg trajectory" },
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                                        <td className="py-4 px-6 font-medium text-slate-900">{row.metric}</td>
                                        <td className="py-4 px-6 text-slate-500">{row.conv}</td>
                                        <td className="py-4 px-6 font-bold text-blue-700 bg-blue-50/30">{row.hel}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-center text-xs text-slate-400 mt-6 italic">Performance based on pilot-scale validation and ongoing optimization.</p>
                </div>
            </AnimatedSection>

            {/* 🔹 DEPLOYMENT & APPLICATIONS */}
            <AnimatedSection className="py-12 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
                    {/* Deployment */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-slate-900 flex items-center gap-3">
                            <Layers className="text-blue-600" /> Deployment Model
                        </h3>
                        {/* Deployment Image */}
                        <div className="relative h-64 w-full rounded-lg overflow-hidden mb-8 shadow-lg">
                            <Image
                                src="/images/techno/hydrogen-electrolyzer-stack-industrial-equipment.webp"
                                alt="Industrial Equipment"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <p className="text-slate-600 mb-6">HELIONYX is engineered for deployment, not demonstration.</p>
                        <ul className="space-y-3 text-slate-700">
                            <li className="flex gap-3"><span className="text-green-500">✓</span> Modular production units</li>
                            <li className="flex gap-3"><span className="text-green-500">✓</span> Pilot systems operational</li>
                            <li className="flex gap-3"><span className="text-green-500">✓</span> Roadmap toward TRL 7–8</li>
                        </ul>
                    </div>

                    {/* Applications */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-slate-900 flex items-center gap-3">
                            <Globe2 className="text-blue-600" /> Target Applications
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                { title: "Refineries", desc: "On-site hydrogen for hydroprocessing", img: "/images/techno/green-hydrogen-industrial-pipeline-infrastructure.jpg" },
                                { title: "Ammonia & Methanol", desc: "Cost-competitive green feedstock", img: "/images/techno/green-ammonia-production-process-chart.png" },
                                { title: "Steel & DRI", desc: "Low-carbon steel pathways", img: "/images/techno/green-hydrogen-adoption-stands-by-industry.png" },
                                { title: "Mobility", desc: "Distributed refueling infrastructure", img: "/images/techno/EV Charging Close-up.jpg" },
                            ].map((app, i) => (
                                <div key={i} className="group bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all">
                                    <div className="relative h-32 w-full">
                                        <Image
                                            src={app.img}
                                            alt={app.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h4 className="font-bold text-slate-900 text-sm mb-1">{app.title}</h4>
                                        <p className="text-xs text-slate-600 leading-snug">{app.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 DESIGNED FOR INDIA (Callout) */}
            <AnimatedSection className="py-20 bg-slate-50 border-t border-slate-200">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-8 text-slate-900">Designed for India</h2>
                    <p className="text-slate-600 mb-12">HELIONYX is optimized for India’s hydrogen deployment realities:</p>
                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        <div className="bg-white p-6 rounded shadow-sm">
                            <h4 className="font-bold text-slate-900 mb-2">Grid Compatibility</h4>
                            <p className="text-sm text-slate-600">Operates efficiently with India’s grid mix and renewable integration targets.</p>
                        </div>
                        <div className="bg-white p-6 rounded shadow-sm">
                            <h4 className="font-bold text-slate-900 mb-2">Local Manufacturing</h4>
                            <p className="text-sm text-slate-600">High local content potential aligned with Make-in-India priorities.</p>
                        </div>
                        <div className="bg-white p-6 rounded shadow-sm">
                            <h4 className="font-bold text-slate-900 mb-2">Climate Resilience</h4>
                            <p className="text-sm text-slate-600">Designed to operate reliably across high temperatures, humidity, and variable conditions.</p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 FINAL CTA */}
            <div className="py-24 bg-gradient-to-br from-sky-100 to-blue-100 text-slate-900 text-center px-6 border-t border-blue-300/50">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Ready to learn more?</h2>
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                    <Link href="/contact" className="px-6 py-3 md:px-8 md:py-4 bg-blue-600 text-white font-bold rounded hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/50 text-sm md:text-base">
                        Request Technical Brief
                    </Link>
                    <Link href="/partnership" className="px-6 py-3 md:px-8 md:py-4 bg-transparent border border-slate-400 text-slate-900 font-bold rounded hover:bg-slate-200/50 transition-colors text-sm md:text-base">
                        Partner With Us
                    </Link>
                </div>
            </div>

            <Footer />
        </main >
    );
}

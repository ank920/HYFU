"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Globe2, Building2, ArrowRight, CheckCircle2, Factory } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="bg-white min-h-screen text-slate-900 selection:bg-blue-100">
            <Navbar />

            {/* 🔹 HERO SECTION */}
            <div className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-800">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/contact/attractive-businesswoman-working-desk-with-laptop-phone.jpg"
                        alt="Contact Helionyx"
                        fill
                        className="object-cover opacity-80"
                        priority
                    />
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white mt-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-blue-400 font-bold tracking-widest text-xs uppercase mb-6 block"
                    >
                        Contact
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight"
                    >
                        Let’s Start the <span className="text-blue-500">Conversation</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto"
                    >
                        Connect with HELIONYX to discuss technology, partnerships, pilot opportunities, and deployment pathways for industrial-scale hydrogen solutions.
                    </motion.p>
                </div>
            </div>

            {/* 🔹 SECTION 1: WHY REACH OUT */}
            <AnimatedSection className="py-12 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">Purpose-driven conversations</h2>
                        <p className="text-lg text-slate-600 mb-6">
                            HELIONYX works with organizations and stakeholders who are actively shaping the future of clean energy and industrial decarbonization.
                        </p>
                        <h4 className="font-bold text-slate-900 mb-4">We welcome inquiries related to:</h4>
                        <ul className="space-y-3 mb-8">
                            <li className="flex gap-3 items-center text-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                <span>Hydrogen technology and system architecture</span>
                            </li>
                            <li className="flex gap-3 items-center text-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                <span>Pilot projects and demonstration deployments</span>
                            </li>
                            <li className="flex gap-3 items-center text-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                <span>Strategic partnerships and joint ventures</span>
                            </li>
                            <li className="flex gap-3 items-center text-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                <span>Industrial offtake and deployment discussions</span>
                            </li>
                            <li className="flex gap-3 items-center text-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                <span>Policy, research, and ecosystem collaboration</span>
                            </li>
                        </ul>
                        <p className="text-slate-600 font-medium italic border-l-4 border-blue-500 pl-4 py-2 bg-slate-50">
                            Every engagement is approached with technical rigor, commercial clarity, and long-term intent.
                        </p>
                    </div>
                    <div className="relative h-[300px] md:h-[500px] w-full rounded-lg overflow-hidden shadow-xl bg-white border border-slate-100">
                        <Image
                            src="/images/contact/pexels-yankrukov-7693736.jpg"
                            alt="Why Reach Out"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 SECTION 2 & 3: HOW WE ENGAGE & OPTIONS */}
            <AnimatedSection className="py-12 md:py-24 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">Structured, focused engagement</h2>
                        <p className="text-lg text-slate-600 mb-8">
                            To ensure productive discussions, HELIONYX follows a structured engagement approach:
                        </p>
                        <div className="grid md:grid-cols-3 gap-6 text-left">
                            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm relative">
                                <div className="absolute -top-3 left-6 px-2 bg-blue-600 text-white text-xs font-bold uppercase rounded">Step 1</div>
                                <h4 className="font-bold text-slate-900 mt-2">Initial Discussion</h4>
                                <p className="text-sm text-slate-600 mt-1">To understand objectives and context.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm relative">
                                <div className="absolute -top-3 left-6 px-2 bg-blue-600 text-white text-xs font-bold uppercase rounded">Step 2</div>
                                <h4 className="font-bold text-slate-900 mt-2">Alignment Review</h4>
                                <p className="text-sm text-slate-600 mt-1">Technical and commercial feasibility check.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm relative">
                                <div className="absolute -top-3 left-6 px-2 bg-blue-600 text-white text-xs font-bold uppercase rounded">Step 3</div>
                                <h4 className="font-bold text-slate-900 mt-2">Pathway ID</h4>
                                <p className="text-sm text-slate-600 mt-1">Identification of suitable collaboration models.</p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">Get in Touch</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-400 transition-colors group">
                            <Building2 className="w-10 h-10 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Partnership & Strategic</h3>
                            <p className="text-slate-600 text-sm">For energy companies, infrastructure partners, investors, and government-backed entities.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-400 transition-colors group">
                            <MessageSquare className="w-10 h-10 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Technology & Pilot</h3>
                            <p className="text-slate-600 text-sm">For discussions related to system capabilities, pilot programs, and technical evaluation.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-400 transition-colors group">
                            <Factory className="w-10 h-10 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Industrial & Offtake</h3>
                            <p className="text-slate-600 text-sm">For industrial customers exploring hydrogen deployment at scale.</p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 SECTION 4 & 5: FORM & GLOBAL PRESENCE */}
            <AnimatedSection className="py-12 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <div className="bg-slate-50 p-6 md:p-8 rounded-xl border border-slate-200">
                        <h2 className="text-2xl font-bold mb-6 text-slate-900">Send an Inquiry</h2>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Organization</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Company Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="john@company.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Inquiry Type</label>
                                <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white">
                                    <option>Select Type...</option>
                                    <option>Partnership</option>
                                    <option>Technology / Pilot</option>
                                    <option>Industrial Deployment</option>
                                    <option>General Inquiry</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="How can we collaborate?"></textarea>
                            </div>
                            <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-colors shadow-lg shadow-blue-200">
                                Submit Inquiry
                            </button>
                            <p className="text-xs text-center text-slate-500">Our team reviews all inquiries and responds where alignment exists.</p>
                        </form>
                    </div>

                    {/* Global Presence & What To Expect */}
                    <div className="space-y-8">
                        <div className="relative h-[200px] md:h-[300px] w-full rounded-lg overflow-hidden shadow-xl bg-white border border-slate-100">
                            <Image
                                src="/images/contact/pexels-yankrukov-8867374.jpg"
                                alt="Global Presence"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex flex-col justify-end p-8 text-white">
                                <h3 className="text-xl font-bold flex items-center gap-2 mb-2"><Globe2 className="w-5 h-5 text-blue-400" /> Global Presence</h3>
                                <p className="text-sm text-slate-300">
                                    HELIONYX operates within a broader clean-energy ecosystem with technology roots and collaboration across <span className="text-white font-bold">North America, Europe, and India</span>.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">What happens next?</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold shrink-0">1</div>
                                    <span className="text-slate-600 text-sm mt-1">Your message is reviewed by the HELIONYX team.</span>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold shrink-0">2</div>
                                    <span className="text-slate-600 text-sm mt-1">Relevant technical or commercial stakeholders are looped in.</span>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold shrink-0">3</div>
                                    <span className="text-slate-600 text-sm mt-1">Follow-up discussions are scheduled where alignment exists.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 🔹 FINAL STATEMENT & CTA */}
            <div className="py-16 md:py-24 bg-slate-800 text-white text-center px-6">
                <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                    <span className="block text-white font-bold text-2xl mb-4">HELIONYX values clarity, seriousness, and execution.</span>
                    If you are exploring real-world hydrogen deployment, we look forward to connecting.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="px-6 py-3 md:px-8 md:py-4 bg-blue-600 text-white font-bold rounded hover:bg-blue-500 transition-colors text-sm md:text-base">
                        Submit an Inquiry
                    </button>
                    <button className="px-6 py-3 md:px-8 md:py-4 bg-transparent border border-white/20 text-white font-bold rounded hover:bg-white/10 transition-colors text-sm md:text-base">
                        Explore the Technology
                    </button>
                </div>
            </div>

            <Footer />
        </main>
    );
}

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative border-t border-slate-200 text-slate-600 bg-gradient-to-br from-white via-slate-50 to-blue-50/20">
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-green-400" />

            <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24">
                {/* Brand Column */}
                <div className="col-span-1 md:col-span-2 space-y-6">
                    <div className="space-y-3">
                        <Link href="/" className="inline-flex items-center gap-3 group">
                            <Image
                                src="/images/logo.jpeg"
                                alt="HYFUX Logo"
                                width={160}
                                height={50}
                                className="h-12 w-auto object-contain"
                            />
                            <div className="flex flex-col justify-center h-12 border-l border-slate-300 pl-3 ml-1 py-0.5">
                                <span className="font-bold tracking-[0.1em] text-[0.5rem] leading-none mb-[1px] text-slate-500 group-hover:text-slate-700 transition-colors">
                                    HYFUX
                                </span>
                                <span className="font-bold tracking-[0.15em] text-[0.6rem] uppercase leading-none mb-[1px] text-slate-600 group-hover:text-slate-900 transition-colors">
                                    Hydrogen
                                </span>
                                <span className="font-bold tracking-[0.15em] text-[0.6rem] uppercase leading-none mb-[1px] text-slate-600 group-hover:text-slate-900 transition-colors">
                                    Energy
                                </span>
                                <span className="font-bold tracking-[0.15em] text-[0.6rem] uppercase leading-none text-blue-600">
                                    Systems
                                </span>
                            </div>
                        </Link>
                    </div>
                    <p className="text-lg leading-relaxed max-w-sm text-slate-500 theme-transition">
                        Industrial-scale green hydrogen production engineered for the <span className="text-slate-900 font-semibold">next cost curve</span>.
                    </p>
                    <div className="flex gap-4 pt-4">
                        {/* Social Placeholders or just simple badges if needed, or leave empty for clean look */}
                    </div>
                </div>

                {/* Platform Column */}
                <div>
                    <h3 className="text-slate-900 font-bold mb-6 tracking-wide text-sm uppercase">Platform</h3>
                    <ul className="space-y-4 text-sm font-medium">
                        <li>
                            <Link href="/technology" className="flex items-center group hover:text-blue-600 transition-colors">
                                Technology
                                <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all text-blue-400" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/market" className="flex items-center group hover:text-blue-600 transition-colors">
                                Markets & Scale
                                <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all text-blue-400" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/sustainability" className="flex items-center group hover:text-green-600 transition-colors">
                                Sustainability
                                <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all text-green-500" />
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Company Column */}
                <div>
                    <h3 className="text-slate-900 font-bold mb-6 tracking-wide text-sm uppercase">Company</h3>
                    <ul className="space-y-4 text-sm font-medium">
                        <li>
                            <Link href="/about" className="hover:text-blue-600 transition-colors">About Us</Link>
                        </li>
                        <li>
                            <Link href="/partnership" className="hover:text-blue-600 transition-colors">Partnership</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500">
                    <p>&copy; {currentYear} HYFUX. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-slate-900 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

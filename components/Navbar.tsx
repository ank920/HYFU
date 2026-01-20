"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
    { name: "Technology", href: "/technology" },
    { name: "Market Opportunity", href: "/market" },
    { name: "Partnership", href: "/partnership" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "About Us", href: "/about" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out",
                isOpen
                    ? "bg-transparent py-2 lg:py-3"
                    : scrolled
                        ? "bg-white/90 backdrop-blur-md border-b border-helionyx-border py-2 lg:py-3 shadow-sm"
                        : "bg-transparent py-4 lg:py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo - Image that adapts to scroll state */}
                <Link href="/" className={cn(
                    "z-50 transition-all h-10 lg:h-14 flex items-center gap-2",
                    scrolled || isOpen ? "opacity-100" : "opacity-100"
                )}>
                    <Image
                        src="/images/logo.jpeg"
                        alt="Helionyx Logo"
                        width={160}
                        height={50}
                        priority
                        className="h-8 lg:h-12 w-auto object-contain"
                    />
                    <div className={cn(
                        "flex flex-col justify-center h-full border-l pl-3 ml-1 py-0.5",
                        scrolled || isOpen ? "border-slate-300" : "border-white/30"
                    )}>
                        <span className={cn(
                            "font-bold tracking-[0.1em] text-[0.45rem] lg:text-[0.55rem] leading-none mb-[1px]",
                            scrolled || isOpen ? "text-slate-500" : "text-slate-400"
                        )}>
                            Next Gen
                        </span>
                        <span className={cn(
                            "font-bold tracking-[0.15em] text-[0.55rem] lg:text-[0.65rem] uppercase leading-none mb-[1px]",
                            scrolled || isOpen ? "text-slate-600" : "text-slate-300"
                        )}>
                            Clean
                        </span>
                        <span className={cn(
                            "font-bold tracking-[0.15em] text-[0.55rem] lg:text-[0.65rem] uppercase leading-none mb-[1px]",
                            scrolled || isOpen ? "text-slate-600" : "text-slate-300"
                        )}>
                            Energy
                        </span>
                        <span className={cn(
                            "font-bold tracking-[0.15em] text-[0.55rem] lg:text-[0.65rem] uppercase leading-none",
                            scrolled || isOpen ? "text-blue-600" : "text-blue-400"
                        )}>
                            Tech
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-base font-medium transition-colors tracking-wide",
                                scrolled ? "text-slate-600 hover:text-helionyx-accent" : "text-gray-300 hover:text-white"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="ml-6 px-5 py-2.5 bg-helionyx-accent hover:bg-sky-600 text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow-md hover:shadow-lg"
                    >
                        Contact Us
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={cn("lg:hidden z-50 p-2 transition-colors",
                        isOpen ? "text-slate-900" : (scrolled ? "text-slate-900" : "text-white")
                    )}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay - Clean & Compact */}
            <AnimatePresence>
                {/* Mobile Menu Backdrop & Floating Card */}
                <AnimatePresence>
                    {isOpen && (
                        <>
                            {/* Dark Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="fixed inset-0 bg-black/40 z-[99]"
                                onClick={() => setIsOpen(false)}
                            />

                            {/* Premium Floating Menu Card */}
                            <motion.div
                                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className="absolute top-[calc(100%+0.5rem)] left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl z-[101] overflow-hidden border border-white/20"
                            >
                                <nav className="flex flex-col py-6 px-2">
                                    {NAV_ITEMS.map((item, i) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className="text-center py-3 text-lg font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors mx-2 rounded-xl"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}

                                    <div className="mt-4 px-4">
                                        <Link
                                            href="/contact"
                                            className="block w-full text-center py-3.5 bg-helionyx-accent text-white font-bold tracking-wide rounded-xl shadow-lg shadow-blue-500/25 active:scale-[0.98] transition-all"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Contact Us
                                        </Link>
                                    </div>
                                </nav>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </AnimatePresence>
        </header>
    );
}

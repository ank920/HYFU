"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
    { name: "Home", href: "/" },
    { name: "Technology", href: "/technology" },
    { name: "Applications", href: "/applications" },
    { name: "Markets & Scale", href: "/market" },
    { name: "Partnerships", href: "/partnerships" },
    { name: "About Us", href: "/about" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const isLightHero = pathname === "/" || pathname === "/market" || pathname === "/partnerships" || pathname === "/about"; // Home, Market, Partnerships, and About pages have light hero images

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
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out border-b",
                isOpen
                    ? "bg-white/100 border-slate-100 py-0"
                    : scrolled
                        ? "bg-white/90 backdrop-blur-md border-slate-200/50 py-0 shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
                        : "bg-transparent border-transparent py-4"
            )}
        >
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between gap-8 h-20 md:h-24">
                {/* Logo Area */}
                <Link href="/" className="relative z-50 flex items-center gap-4 group">
                    <div className="flex flex-col">
                        <span className={cn(
                            "font-black text-2xl md:text-3xl tracking-tighter leading-none transition-colors duration-500",
                            isOpen || scrolled || isLightHero ? "text-slate-900" : "text-white"
                        )}>
                            HYFUX
                        </span>
                        <div className="h-0.5 w-full bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </div>
                    <div className={cn(
                        "hidden md:flex flex-col justify-center h-8 border-l pl-4 transition-colors duration-500",
                        isOpen || scrolled || isLightHero ? "border-slate-300" : "border-white/30"
                    )}>
                        <span className={cn(
                            "font-bold tracking-[0.2em] text-[0.6rem] uppercase leading-tight transition-colors duration-500",
                            isOpen || scrolled || isLightHero ? "text-slate-500" : "text-white/70"
                        )}>
                            Hydrogen
                        </span>
                        <span className={cn(
                            "font-bold tracking-[0.2em] text-[0.6rem] uppercase leading-tight transition-colors duration-500",
                            isOpen || scrolled || isLightHero ? "text-slate-900" : "text-white"
                        )}>
                            Energy Systems
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-xs font-bold uppercase tracking-widest transition-all duration-300 relative group whitespace-nowrap",
                                isOpen || scrolled || isLightHero ? "text-slate-600 hover:text-blue-600" : "text-white/90 hover:text-white"
                            )}
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className={cn(
                            "hidden lg:flex px-8 py-3 text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5",
                            isOpen || scrolled || isLightHero ? "bg-slate-900 text-white hover:bg-blue-600" : "bg-white text-slate-900 hover:bg-white/90"
                        )}
                    >
                        Contact Us
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={cn(
                        "lg:hidden z-50 p-2 transition-colors rounded-lg",
                        isOpen || scrolled || isLightHero ? "text-slate-900 hover:bg-slate-100" : "text-white hover:bg-white/10"
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
        </header >
    );
}

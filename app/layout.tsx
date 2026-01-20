import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "HYFUX | Next-Gen Hydrogen Platform",
    description: "HYFUX is pioneering Solid Oxide Fuel Cell (SOFC) technology for efficient, scalable, and sustainable hydrogen production.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={cn(inter.variable, "font-sans min-h-screen flex flex-col pt-0")}>
                {children}
            </body>
        </html>
    );
}

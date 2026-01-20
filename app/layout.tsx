import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "HELIONYX | Industrial-Scale Green Hydrogen",
    description: "Engineered for the Next Cost Curve. Next-generation hydrogen production platform.",
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

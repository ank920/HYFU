import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                helionyx: {
                    dark: "#0F172A", // Slate 900 (Footer/Contrast)
                    main: "#FFFFFF", // White (Main Background)
                    secondary: "#F8FAFC", // Slate 50 (Secondary Background)
                    accent: "#0EA5E9", // Sky Blue (Primary Action)
                    green: "#10B981", // Light Green (Success/Eco)
                    text: "#020617", // Slate 950 (Main Text)
                    muted: "#64748B", // Slate 500 (Secondary Text)
                    border: "#E2E8F0", // Slate 200 (Borders)
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            transitionTimingFunction: {
                'premium': 'cubic-bezier(0.22, 1, 0.36, 1)',
            }
        },
    },
    plugins: [],
};
export default config;

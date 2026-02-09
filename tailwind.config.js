/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Configure the content for all of your component files
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                // Paleta de colores basada en web-misti
                // Modo claro (valores por defecto)
                background: '#ffffff',
                foreground: '#1f2937',
                card: '#ffffff',
                'card-foreground': '#1f2937',
                popover: '#ffffff',
                'popover-foreground': '#1f2937',
                primary: '#0e6749', // Color principal Jewel verde
                'primary-foreground': '#ffffff',
                secondary: '#6ba68a', // Color secundario
                'secondary-foreground': '#ffffff',
                muted: '#f5f5f5',
                'muted-foreground': '#6b7280',
                accent: '#f5f5f5',
                'accent-foreground': '#1f2937',
                destructive: '#ef4444',
                'destructive-foreground': '#ffffff',
                border: '#e5e7eb',
                input: '#e5e7eb',
                ring: '#9ca3af',
                chart: {
                    "1": "#f59e0b",
                    "2": "#10b981",
                    "3": "#3b82f6",
                    "4": "#f97316",
                    "5": "#8b5cf6",
                },
            },
            borderRadius: {
                lg: "0.625rem",
                md: "0.5rem",
                sm: "0.375rem",
            },
        },
    },
    plugins: [],
}

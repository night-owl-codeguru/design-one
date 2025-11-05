import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // TJ's Master Brand Colors
        'golden-pour': '#F4A825',        // Fresh Golden Pour - main typography
        'burnt-copper': '#C86928',        // Full-Bodied Burnt Copper - shadow/secondary
        'soft-wheat': '#F5E6D3',          // Soft Wheat - beer head/tagline
        'dark-roast': '#2D1B12',          // Intense Grounded Dark Roast - base
        
        // Additional brutalist palette
        'brutal-orange': '#FF6B35',
        'brutal-brown': '#3E2723',
        'brutal-tan': '#D7CCC8',
        'brutal-amber': '#FFB74D',
      },
      fontFamily: {
        'din': ['var(--font-din)', 'sans-serif'],
        'optima': ['Optima', 'serif'],
      },
      fontSize: {
        'brutal-hero': 'clamp(3rem, 10vw, 8rem)',
        'brutal-sub': 'clamp(1.5rem, 4vw, 3rem)',
        'brutal-heading': 'clamp(2rem, 5vw, 4rem)',
      },
      letterSpacing: {
        'brutal-wide': '0.15em',
        'brutal-wider': '0.25em',
      },
      boxShadow: {
        'brutal': '8px 8px 0px rgba(200, 105, 40, 0.8)',
        'brutal-lg': '12px 12px 0px rgba(200, 105, 40, 0.8)',
        'brutal-xl': '16px 16px 0px rgba(200, 105, 40, 0.8)',
        'morph': '20px 20px 60px rgba(200, 105, 40, 0.3), -20px -20px 60px rgba(245, 230, 211, 0.3)',
      },
      backgroundImage: {
        'brutal-gradient': 'linear-gradient(135deg, #F4A825 0%, #C86928 100%)',
        'brutal-dark': 'linear-gradient(135deg, #2D1B12 0%, #3E2723 100%)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

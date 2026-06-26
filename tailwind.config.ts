import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand - extracted from logo
        primary: {
          DEFAULT: "#00C8E8",
          50: "#E6FAFE",
          100: "#B3F2FC",
          200: "#80E9FA",
          300: "#4DE1F7",
          400: "#22D3EE",
          500: "#00C8E8",
          600: "#00A5C2",
          700: "#007F96",
          800: "#005A6B",
          900: "#003540",
        },
        // Dark backgrounds
        dark: {
          base: "#050A0F",
          card: "#0A1628",
          elevated: "#0F1E35",
          border: "rgba(0,200,232,0.12)",
          "border-hover": "rgba(0,200,232,0.28)",
        },
        // Light backgrounds
        light: {
          base: "#F8FBFF",
          card: "#EEF4FF",
          elevated: "#E4EEFF",
          border: "rgba(0,150,200,0.15)",
          "border-hover": "rgba(0,150,200,0.35)",
        },
        // Semantic
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        arabic: ["var(--font-cairo)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.875rem" }],
        "display-sm": ["2.25rem", { lineHeight: "2.5rem", letterSpacing: "-0.012em" }],
        "display-md": ["3rem", { lineHeight: "3.25rem", letterSpacing: "-0.015em" }],
        "display-lg": ["3.75rem", { lineHeight: "4rem", letterSpacing: "-0.018em" }],
        "display-xl": ["4.5rem", { lineHeight: "4.75rem", letterSpacing: "-0.02em" }],
        "display-2xl": ["6rem", { lineHeight: "6.25rem", letterSpacing: "-0.025em" }],
      },
      spacing: {
        "4.5": "1.125rem",
        "13": "3.25rem",
        "15": "3.75rem",
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "128": "32rem",
        "144": "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "glow-sm": "0 0 16px rgba(0,200,232,0.12)",
        "glow-md": "0 0 32px rgba(0,200,232,0.20)",
        "glow-lg": "0 0 64px rgba(0,200,232,0.28)",
        "glow-xl": "0 0 100px rgba(0,200,232,0.35)",
        "card-dark": "0 4px 32px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.03)",
        "card-light": "0 4px 24px rgba(0,100,150,0.08), 0 1px 0 rgba(255,255,255,0.8)",
        "inner-glow": "inset 0 0 32px rgba(0,200,232,0.06)",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #00C8E8 0%, #22D3EE 50%, #00A5C2 100%)",
        "gradient-dark": "linear-gradient(180deg, #050A0F 0%, #0A1628 100%)",
        "gradient-card": "linear-gradient(135deg, rgba(0,200,232,0.08) 0%, rgba(0,200,232,0.02) 100%)",
        "gradient-hero-dark": "radial-gradient(ellipse 80% 80% at 50% -10%, rgba(0,200,232,0.15) 0%, transparent 60%)",
        "gradient-hero-light": "radial-gradient(ellipse 80% 80% at 50% -10%, rgba(0,200,232,0.08) 0%, transparent 60%)",
        "grid-dark": "linear-gradient(rgba(0,200,232,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,232,0.04) 1px, transparent 1px)",
        "grid-light": "linear-gradient(rgba(0,100,150,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,100,150,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid": "64px 64px",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "float-slow": "float 8s ease-in-out 1s infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0,200,232,0.2)" },
          "50%": { boxShadow: "0 0 60px rgba(0,200,232,0.5)" },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      transitionTimingFunction: {
        "spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
        "expo-out": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      screens: {
        "xs": "480px",
        "3xl": "1920px",
      },
    },
  },
  plugins: [animate],
};

export default config;

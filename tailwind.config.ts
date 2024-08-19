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
        title: "#0EA5E9",
        placeholder: "#94A3B8",
        border: "#94A3B8",
        btnColor: "#F1F5F9",
        btnBackground: "#10B981",
        link: "#0EA5E9",
        backgroundHome: "#f3f4f6",
        btnColorExit: "#ef4444",
        btnBackgroundPost: "#0ea5e9",
        formLeagth: "#16A34A",
        textPost: "#6b7280",
      },
    },
  },
  plugins: [],
};
export default config;

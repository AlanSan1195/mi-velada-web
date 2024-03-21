import animations from "@midudev/tailwind-animations";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#222",
        secundary: " #ddd",
        twitch: "#6441A4",
        verde: "#D5FF00"
      },
    },
  },
  plugins: [animations],
};

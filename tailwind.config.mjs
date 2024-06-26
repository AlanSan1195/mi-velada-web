import animations from "@midudev/tailwind-animations";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secundary: "var(--color-secundary)",
        twitch: "var(--color-twitch)",
        verde: "var(--color-verde)",
      },
      fontFamily: {
        cholo: ["Rock Salt"],
        Atomic: ["inhabits"]
      },
    },
  },
  plugins: [animations],
};

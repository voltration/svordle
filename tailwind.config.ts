import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        svelte: "#F96743",
        bg: "#141411"
      }
    }
  },

  plugins: []
} as Config;

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     colors: {
        bg: "#1f242d",        // --bg-color
        "bg-second": "#323946", // --second-bg-color
        text: "#ffffff",      // --text-color
        main: "#0ef",         // --main-color
      },
    },
  },
  plugins: [],
}
export default config

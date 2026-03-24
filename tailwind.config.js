/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // This line fixes your error:
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        // Verby / Zernio Colors
        coral: {
          DEFAULT: '#EB3514',
          muted: 'rgba(235, 53, 20, 0.1)',
        },
        cream: {
          DEFAULT: '#FDFCF8',
          muted: '#F1F0EC',
        },
        charcoal: {
          DEFAULT: '#333333',
          muted: '#666666',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

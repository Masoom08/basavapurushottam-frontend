export default{
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      primary: "#1E2D3D",   // Deep Slate Blue
        secondary: "#8FB2C9", // Muted Steel Blue
        accent: "#E7B79F",    // Warm Peach
        bgSoft: "#F4F6F7",    // Soft Mist Grey
        textDeep: "#2E2E2E",  // Deep Charcoal
    },
    fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};

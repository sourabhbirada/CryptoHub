/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#212A31', // Charcoal Black
        darkSlate: '#2E3944', // Dark Slate Gray
        deepTeal: '#124E66', // Deep Teal
        slateBlueGray: '#748D92', // Slate Blue-Gray
        lightSeafoam: '#D3D9D4', // Light Seafoam Gray
        softLavender: '#C5CBE3',
      },
      fontFamily: {
        merriweather: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
};
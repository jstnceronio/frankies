module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {},
    fontFamily: {
      LuxuriousRoman: ["'Luxurious Roman', cursive"],
      ultra: ["'Ultra', serif"],
      playfair: ["'Playfair Display', serif"],
      canada: ["'Radio Canada', sans-serif"]
    },
    container: {
      center: true,
    }
  },
  plugins: [],
}

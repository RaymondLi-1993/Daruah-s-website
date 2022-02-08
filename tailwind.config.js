module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        earth:"#B59275",
        peach:"#E6CEB5",
        pineMist:"#E5ECE0",
        irogonBlue:"#DEC796",
        sandal:"#AC8C73"
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

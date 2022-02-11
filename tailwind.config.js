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
        wood:"#DES368",
        sandal:"#AC8C73"
      },
      fontFamily:{
        "Nanum":["Nanum Myeong", "san-serif"]
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

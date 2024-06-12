/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'heading': ['"Poetsen One"'],
      'logoHeading': ['Allura'],
      'nav': ['"Tenor Sans"'],
      'paragraph': ['Assistant'],
      'paragraph1': ['Montserrat'],
      'paragraph2': ['"Noto Sans"'],
      'paragraph3': ['"Tenor Sans"'],
    }
  },
  plugins: [],
}


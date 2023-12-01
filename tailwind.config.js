/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        button: '#4A54D1',
        buttonHover: '#3A45D1',
        textNavbar: '#292929',
        topicHover: '#E6E6E6',
        topic: '#f2f2f2',
        title: 'rgba(0, 0, 0, 0.8)',
        titleHover: 'rgba(0, 0, 0, 0.6)',
        textBio: '#757575',
        borderColor: '#dcdfe6',
        borderHoverColor: '#c0c4cc',
      },
    },
  },
  plugins: [],
}

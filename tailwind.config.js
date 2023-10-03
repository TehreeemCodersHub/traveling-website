/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm:'480px',
      md:"768px",
      lg:"976px",
      xl:"1280px"
    },
    extend: {
            colors:{
              brightOrange: 'hsl(6, 85%, 56%)'
            }
    },
  },
  plugins: [],
}


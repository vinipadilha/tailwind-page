/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['selector', '[data-mode="dark"]'],
  content: ["./home.html"],
  theme: {
    extend: {},
  },
  plugins: [ 
    require('tailwind-scrollbar') ({ nocompatible: true }),

  ],
};


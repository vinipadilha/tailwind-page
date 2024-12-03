/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['selector', '[data-mode="dark"]'],
  content: ["./index.html"],
  theme: {
    extend: {},
  },
  plugins: [ 
    require('tailwind-scrollbar') ({ nocompatible: true }),

  ],
};


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'banner': [
          'Fira Mono', 'Monaco', 'Lucida Console', 'Courier New', 'monospace'
        ],
        'content': [ // ? Are there better fonts?
          'Arial', 'Helvetica', 'sans-serif'
        ]
      }
    },
  },
  plugins: [],
}


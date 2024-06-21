// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Path to all JavaScript/TypeScript files in the pages directory
    "./components/**/*.{js,ts,jsx,tsx}", // Path to all JavaScript/TypeScript files in the components directory
    "./layout/**/*.{js,ts,jsx,tsx}" // Include additional directories as needed
  ],
  theme: {
    extend: {
      colors: {
        peach: '#EF9C66',
        lemon: '#FCDC94',
        sage: '#C8CFA0',
        teal: '#78ABA8',
      },
      boxShadow: {
        'xl': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      transitionProperty: {
        'all': 'all',
      },
    },
  },
  plugins: [],
};

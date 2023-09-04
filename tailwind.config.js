/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    // './<custom directory>/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        Primary: ['Shrikhand-Regular'],
        Secondary: ['Rochester-Regular.ttf'],
      },
      colors: {
        darkColor: '#000',
        redColor: '#F53920',
        blueColor: '#53A0F4',
        greenColor: '#00AA13',
        yellowColor: '#FBA83C',
      },
    },
  },
  plugins: [],
};

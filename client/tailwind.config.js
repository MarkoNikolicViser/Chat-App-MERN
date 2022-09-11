module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,jsx,ts,js}',
  ],
  plugins: [require('daisyui')],
  theme:{
    extend:{
      colors:{
        primary:'#dbeafe',
        secondary:'#93c5fd'
      }
    }
  }
  // ... 
}
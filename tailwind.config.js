module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark-text': 'hsl(229, 25%, 31%)',
        'score-text': 'hsl(229, 64%, 46%)',
        'header-outline': 'hsl(217, 16%, 45%)',
        'gradient-color-1': 'hsl(214, 47%, 23%)',
        'gradient-color-2': 'hsl(237, 49%, 15%)',
        'scissors-color-1': 'hsl(39, 89%, 49%)',
        'scissors-color-2': 'hsl(40, 84%, 53%)',
        'paper-color-1': 'hsl(230, 89%, 62%)',
        'paper-color-2': 'hsl(230, 89%, 65%)',
        'rock-color-1': 'hsl(349, 71%, 52%)',
        'rock-color-2': 'hsl(349, 70%, 56%)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}

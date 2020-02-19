import React, { createContext } from 'react'
import fire from '../images/fire.jpg'

const bg = require('../images/fire.jpg')

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
    BGImage: fire,

  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
    BGImage: `ulr(${bg})`,
  },
};

const ThemeContext = React.createContext({
  settings: {
    theme: themes.dark,
    toggleTheme: () => {},
  }
});

  export default ThemeContext
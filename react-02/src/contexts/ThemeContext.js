import React, { createContext } from 'react'

const ThemeContext = createContext();

const A = (props) => (
    <ThemeContext.Provider value="green">
      {props.children}
    </ThemeContext.Provider>
  );

  export default ThemeContext
import React, { createContext } from 'react'


const GameContext = React.createContext({
    history: [
      {
        squares: Array(9).fill(null)
      }
    ],
    stepNumber: 0,
    xIsNext: true
    
});

  export default GameContext
import React from 'react'
import ThemeContext from '../contexts/ThemeContext';
import ThemedButton from './ThemeButton'

const Settings = () => {

    return (
        <ThemeContext.Consumer>
            {value => (
                    <div>

                    <p style={{ color: value.theme.foreground, background: value.theme.background }}>
                        Choose a Theme
                    </p>
                    <button onClick={value.toggleTheme}> Toggle Theme</button>
                </div>
        
            )}
            
            </ThemeContext.Consumer>
    )
}


export default Settings
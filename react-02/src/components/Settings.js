import React from 'react'
import ThemeContext from '../contexts/ThemeContext';
// import ThemedButton from './ThemeButton'
import fire from '../images/fire.jpg'

const Settings = () => {

    return (
        <ThemeContext.Consumer>
            {value => (
                // try changing className to assign a new background Image
                    <div style={{ color: value.theme.foreground, background: value.theme.background }}>
                        <p>Choose a Theme</p>
                        <button onClick={value.toggleTheme}> Toggle Theme </button>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}


export default Settings
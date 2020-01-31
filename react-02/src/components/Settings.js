import React from 'react'
import ThemeContext from '../contexts/ThemeContext';

const Settings = () => {

    const color = React.useContext(ThemeContext)
    return (
        <div>
            <p style={{ color }}>
                Choose a Theme
            </p>
            {/* <input type="radio" name= 'coolBlue' value = {false}>Cool Blue</input> */}
           
        </div>
    )
}


export default Settings
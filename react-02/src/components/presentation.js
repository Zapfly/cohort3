import React from 'react'


class PresentationPage extends React.Component {
    constructor(props) {
        super(props)
        this.slide = [
            <Slide1 />,
        ]
    
        this.state = {
            currentSlide: <Slide1 />             
        }
    }
    
    render() {
        return (
            <div>
                {this.state.currentSlide}                
            </div>
        )
    }
}

class Slide1 extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render() {
        return (
            <div>
                Why are we here??                
            </div>
        )
    }
    
}

export default PresentationPage
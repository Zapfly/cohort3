import React from 'react'
import greenArrow from '../images/green-arrow.svg'


class PresentationPage extends React.Component {
    constructor(props) {
        super(props)
        this.counter = 0
        this.slide = [
            <Slide1 />,
            <Slide2 />
        ]
    
        this.state = {
            currentSlide: <Slide1 />             
        }
    }

    previousSlide = () => {
        this.counter --
        this.setState({currentSlide: this.slide[this.counter]})
    }

    nextSlide = () => {
        this.counter ++
        this.setState({currentSlide: this.slide[this.counter]})
    }
    
    render() {
        return (
            <div className="presentation">
                <header></header>
                {this.state.currentSlide}
                <footer>
                <img id="previous-slide" src={greenArrow} onClick={this.previousSlide}/>
                <img id="next-slide" src={greenArrow} onClick={this.nextSlide}/>
                </footer>                
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
                <h1>How to Network Effectively</h1>          
            </div>
        )
    }
    
}

class Slide2 extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render() {
        return (
            <div>
                <h1>It's Really Important</h1>          
            </div>
        )
    }
    
}

export default PresentationPage
import React from 'react'
import greenArrow from './green-arrow.svg'
import './presentation.css'


class PresentationPage extends React.Component {
    constructor(props) {
        super(props)
        this.counter = 0
        this.slide = [
            <Slide1 />,
            <Slide2 />,
            <Slide3 />,
            <Slide4 />,
            <Slide5 />,
            <Slide6 />,
            <Slide7 />,
            <Slide8 />,
            <Slide9 />,
            <Slide10 />,
            <Slide11/>,
            <Slide12 />,
            <Slide13 />,
            <Slide14 />,
            <Slide15 />,
            <Slide16 />,
            <Slide17 />,
            <Slide18 />,
            <Slide19 />,
            <Slide20 />,
            <Slide21 />,
            <Slide22 />,
            <Slide23 />,
            <Slide24 />,

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
                <img alt="arrow" id="previous-slide" src={greenArrow} onClick={this.previousSlide}/>
                <img alt="arrow" id="next-slide" src={greenArrow} onClick={this.nextSlide}/>
                </footer> 
                {document.addEventListener('keypress', this.nextSlide)}               
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
            <div className="container">
                <h1 className='solo-statement'>WELCOME!</h1>          
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
            <div className="container">
                <h1 className='solo-statement'>Networking Tips and Tricks</h1>          
            </div>
        )
    }
    
}

class Slide3 extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render() {
        return (
            <div className="container">
                <h1 className='solo-statement'>Why Me?</h1>          
            </div>
        )
    }
    
}

class Slide4 extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render() {
        return (
            <div className='list-slide container'>
                <h1 className='medium-size tight-frame'>So what are the tips?</h1>
                <ul>
                    <li>What to talk about</li>
                    <li>Making them feel important</li>
                </ul>          
                <ul>
                    <li>When to follow up</li>
                    <li>What to say when following up</li>
                </ul>
            </div>
        )
    }
    
}

class Slide5 extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render() {
        return (
            <div className="container">
                <h1 className='solo-statement'>Things to Remember That Apply to All These Tips</h1>          
            </div>
        )
    }
    
}

class Slide6 extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render() {
        return (
            <div className="container">
                <h1 className='solo-statement'>Stop Networking! Start Making Connections!</h1>          
            </div>
        )
    }
    
}

class Slide7 extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render() {
        return (
            <div className="container">
                <h1 className='slide-header'>How to talk to people: </h1>
                <h2>Tip # 1 Networking Begins Before the Event!</h2>        
            </div>
        )
    }
    
}

class Slide8 extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render() {
        return (
            <div className="container">
                <h1 className='solo-statement'>How do I Know Who I Want to Research?</h1>          
            </div>
        )
    }
    
}

class Slide9 extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render() {
        return (
            <div className="container">
                <h1>How to make someone feel important.</h1>   
                <h2>Start by remembering their name.</h2>       
            </div>
        )
    }
    
}

class Slide10 extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render() {
        return (
            <div className="container">
                <h1 className='solo-statement'>You can’t RE-member, what you never “membered”</h1>          
            </div>
        )
    }
    
}

class Slide11 extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render() {
        return (
            <div className="container">
                <h1 className='solo-statement'>Remember ANYTHING Else About Them</h1>          
            </div>
        )
    }
    
}

class Slide12 extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render() {
        return (
            <div className="container">
                <h1 className='medium-size'>You Can’t Say You’ve Officially Met
                    Someone Unless You Can Remember:
                </h1>    
                <ul className='small-list'>
                    <li className='small-size'>Their Name,</li>
                    <li className='small-size'>Their Place of Work, </li>
                    <li className='small-size'>and One Interesting Fact/Hobby</li>
                </ul>      
            </div>
        )
    }
    
}

class Slide13 extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render() {
        return (
            <div className="container">
                <h1 className='solo-statement'>The More Someone Sees Your Face, The More They Think They Know You.
</h1>          
            </div>
        )
    }
    
}

class Slide14 extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render() {
        return (
            <div className="container">
                <h1 className='solo-statement'>Follow-up with Fibonacci </h1>          
            </div>
        )
    }
    
}

class Slide15 extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render() {
        return (
            <div className="container">
                <h1 className='solo-statement'>But What do I SAAAAAYYY???</h1>          
            </div>
        )
    }
    
}

class Slide16 extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render() {
        return (
            <div  className='letter container'>
                <h3 className='letter-font'>Hello SuchAndSuch,</h3>

                <h3 className='letter-font'>I had a great time talking to you at the [Specific Networking Event] today! I wish you the best of luck with [The person’s unique hobby]! If you need any help with [Your Specialty] I’d love to be of assistance however I can. </h3>

                <h3 className='letter-font'>Let’s talk again soon,</h3>

                <h3 className='letter-font'>[Your Name]
                </h3>          
            </div>
        )
    }
    
}

class Slide17 extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render() {
        return (
            <div className='letter container'>
                <h3 className='letter-font'>Hello SuchAndSuch,</h3>

                <h3 className='letter-font'>How are you? I hope you’re well. I was reminded of our conversation that we had at [Specific Networking Event] and thought I’d drop you a line. What are your thoughts on [topic pertaining to their expertise and/or specific conversation you had]?</h3>

                <h3 className='letter-font'>Take care and all the best!</h3>

                <h3 className='letter-font'>[Your Name]</h3>

            </div>
        )
    }
    
}

class Slide18 extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render() {
        return (
            <div className='letter container'>
                <h3 className='letter-font'>(What not to do)</h3>

                <h3 className='letter-font'>Yo sup bitch!</h3>

                <h3 className='letter-font'>We should grab coffee. I’d like to ask you how you win thos dolla dolla billz!</h3>

                <h3 className='letter-font'>Peace,</h3>

                <h3 className='letter-font'>Ya homie</h3>

                <h3 className='letter-font'>(PS What kind of dog you have? I could just take it home!)</h3>
            </div>
        )
    }
    
}

class Slide19 extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render() {
        return (
            <div className='container'>
                <h3 className='medium-size'>Email Follow-up should have:</h3>
                <ul className='small-list'>
                    <li className='small-size'>Relaxed yet formal tone</li>
                    <li className='small-size'> Remind them of who you are</li>
                    <li className='small-size'>Build off of previous conversations</li>
                    <li className='small-size'>An offer of your services (your strengths)</li>
                    <li className='small-size'>Continue to build rapport</li>
                    <li className='small-size'>Lead to coffee and in depth conversations 
                        (not on the first message. Feel it out and ask at an appropriate time)</li>
                </ul>                        
            </div>
        )
    }
    
}

class Slide20 extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render() {
        return (
            <div className='solo-statement container'>
                <h3 className='medium-size'>Email Follow-up Should NOT:</h3>   
                <ul className='small-list'>
                    <li className='small-size'>Ask for a job</li>       
                    <li className='small-size'>Immediately ask for coffee (or anything for that matter)</li>
                    <li className='small-size'>Be too casual or disrespectful</li>  
                    <li className='small-size'>Imply that you want to steal their dog</li>           
                </ul>  
            </div>
        )
    }
    
}

class Slide21 extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render() {
        return (
            <div className='solo-statement'>
                <h3 className='medium-size'>Final tips for Networking:</h3>  
                <ol className='small-list'>
                    <li className='small-size'>Networking begins before the event</li>
                    <li className='small-size'>Stop Networking. Start Connecting</li>
                    <li className='small-size'>You can’t RE-member what you never “membered” in the first place.</li>
                    <li className='small-size'>Remember their name, occupation, and one interesting fact (kids, pets, or hobbies)</li>
                    <li className='small-size'>Follow-up with Fibonacci</li>
                    <li className='small-size'>Be of service and close with coffee!</li>
                </ol>                       
            </div>
        )
    }
    
}

class Slide22 extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render() {
        return (
            <div className='container'>
                <h1 className='solo-statement'>Your Job Isn't Over</h1>                 
            </div>
        )
    }
    
}

class Slide23 extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render() {
        return (
            <div className='container'>
                <h1 className='solo-statement'>Rule The World</h1>                     
            </div>
        )
    }
    
}

class Slide24 extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render() {
        return (
            <div className='container'>
                <h1 className='solo-statement'>Thank You</h1>                     
            </div>
        )
    }
    
}




export default PresentationPage
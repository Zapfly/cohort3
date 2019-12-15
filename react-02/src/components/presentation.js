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
                <h1>WELCOME!</h1>          
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
                <h1>Networking Tips and Tricks</h1>          
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
            <div>
                <h1>Why Me?</h1>          
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
            <div>
                <h1>So what are the tips?</h1>
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
            <div>
                <h1>Things to Remember That Apply to All These Tips</h1>          
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
            <div>
                <h1>Stop Networking! Start Making Connections!</h1>          
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
            <div>
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
            <div>
                <h1>How do I Know Who I Want to Research?</h1>          
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
            <div>
                <h1>How to make someone feel important.</h1>   
                <h1>Start by remembering their name.</h1>       
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
            <div>
                <h1>You can’t RE-member, what you never “membered”</h1>          
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
            <div>
                <h1>Remember ANYTHING Else About Them</h1>          
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
            <div>
                <h1>You Can’t Say You’ve Officially Met
                    Someone Unless You Can Remember:
                </h1>    
                <ul>
                    <li>Their Name,</li>
                    <li>Their Place of Work, </li>
                    <li>and One Interesting Fact/Hobby</li>
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
            <div>
                <h1>The More Someone Sees Your Face, The More They Think They Know You.
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
            <div>
                <h1>Follow-up with Fibonacci </h1>          
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
            <div>
                <h1>But What do I SAAAAAYYY???</h1>          
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
            <div>
                <h3>Hello SuchAndSuch,

                I had a great time talking to you at the [Specific Networking Event] today! I wish you the best of luck with [The person’s unique hobby]! If you need any help with [Your Specialty] I’d love to be of assistance however I can. 

                Let’s talk again soon,

                [Your Name]
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
            <div>
                <h3>
                Hello SuchAndSuch,

                How are you? I hope you’re well. I was reminded of our conversation that we had at [Specific Networking Event] and thought I’d drop you a line. What are your thoughts on [topic pertaining to their expertise and/or specific conversation you had]?

                Take care and all the best!

                [Your Name]

                </h3>         
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
            <div>
                <h3>
                (What not to do)

                Yo sup bitch!

                We should grab coffee. I’d like to ask you how you win thos dolla dolla billz!

                Peace,

                Ya homie

                (PS What kind of dog you have? I could just take it home!)


                </h3>         
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
            <div>
                <h1>Email Follow-up should have:</h1>
                <ul>
                    <li>Relaxed yet formal tone</li>
                    <li>Remind them of who you are</li>
                    <li>Build off of previous conversations</li>
                    <li>An offer of your services (your strengths)</li>
                    <li>Continue to build rapport</li>
                    <li>Lead to coffee and in depth conversations 
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
            <div>
                <h1>Email Follow-up Should NOT:</h1>   
                <ul>
                    <li>Ask for a job</li>       
                    <li>Immediately ask for coffee (or anything for that matter)</li>
                    <li>Be too casual or disrespectful</li>  
                    <li>Imply that you want to steal their dog</li>           
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
            <div>
                <h3>Final tips for Networking:</h3>  
                <ol>
                    <li>Networking begins before the event</li>
                    <li>Stop Networking. Start Connecting</li>
                    <li>You can’t RE-member what you never “membered” in the first place.</li>
                    <li>Remember their name, occupation, and one interesting fact (kids, pets, or hobbies)</li>
                    <li>Follow-up with Fibonacci</li>
                    <li>Be of service and close with coffee!</li>
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
            <div>
                <h1>Your Job Isn't Over</h1>                 
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
            <div>
                <h1>Rule The World</h1>                     
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
            <div>
                <h1>Thank You</h1>                     
            </div>
        )
    }
    
}




export default PresentationPage
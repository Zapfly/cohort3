import React from 'react'
import  {LinkedList} from './linkPSC'

class CurrentNode extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render () {
        return (
            <div>
                <p>Subject = {this.props.subject}</p>
                <p>Amount = {this.props.amount}</p>
            </div>
        )
    }
    
}



export class LinkListComp extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
            list: new LinkedList()            
        }
    }

    componentDidMount= () => {
        this.state.list.insert("Starting Node", 0)
    }

    insert = () => {
        console.log("button works");
        
    }


    render() {
        return <div>
        <p onClick = {this.insert}>Sample text{/*this.state.list.current.subject*/}</p>
    </div>

                

    }
    
}


import React from 'react'
import { LinkedList } from './linkPSC'

class CurrentNode extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <p>Subject = {this.props.subject}</p>
                <p>Amount = {this.props.amount}</p>
            </div>
        )
    }

}



export class LinkListComp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            list: new LinkedList(),
            subInput: "",
            amountInput: ""
        }
    }

    componentDidMount = () => {
    }

    insert = () => {
        console.log(this.state.list.current.subject);
        this.state.list.insert()
        console.log(this.state.list.current.forwardNode.subject);
    }

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        this.setState({ [name]: event.target.value });
    }

    render() {
        this.state.list.insert("Starting Node", 0)

        return (
            <div>
                <p >Node List{/*this.state.list.current.subject*/}</p>
                <CurrentNode 
                    subject = {this.state.list.current.subject} 
                    amount = {this.state.list.current.amount}
                />
                <input type="text" name="subInput" value={this.state.subInput} onChange={this.handleChange}></input>
                <input type="number" name="amountInput" value={this.state.amountInput} onChange={this.handleChange}></input>
                <button onClick={this.insert}>Insert</button>
                <button>Delete</button>
            </div>
        )




    }

}


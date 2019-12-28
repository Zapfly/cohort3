import React from 'react'
import { LinkedList } from './linkPSC'

class Node extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className={this.props.type}>
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
            amountInput: "",
            nextNode: ["No Node Here", "N/A"],
            previousNode:["No Node Here", "N/A"],
        }
    }

    componentDidMount = () => {
    }

    insert = () => {
        console.log(this.state.list.current.subject);
        this.state.list.insert(this.state.subInput, this.state.amountInput)
        console.log(this.state.list.current);
        this.setState({subInput : "", amountInput :""})
        
    }

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        this.setState({ [name]: event.target.value });
    }

    render() {
        this.state.list.insert("Starting Node", 0)

        return (
            <div className = "linked-list">
                <p >Node List{/*this.state.list.current.subject*/}</p>
                <Node 
                    subject = {this.state.previousNode[0]} 
                    amount = {this.state.previousNode[1]}
                    type = {"previous node"}
                />
                <Node 
                    subject = {this.state.list.current.subject} 
                    amount = {this.state.list.current.amount}
                    type = {"current node"}
                /><Node 
                subject = {this.state.nextNode[0]} 
                amount = {this.state.nextNode[1]}
                type = {"next node"}
            />
                <div className="submission">
                    Subject
                    <input type="text" name="subInput" value={this.state.subInput} onChange={this.handleChange}></input>
                    Amount
                    <input type="number" name="amountInput" value={this.state.amountInput} onChange={this.handleChange}></input>
                    <button onClick={this.insert}>Insert</button>
                    <button>Delete</button>
                </div>
            </div>
        )




    }

}


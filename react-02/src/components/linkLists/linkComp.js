import React from 'react'
import { LinkedList } from './linkPSC'

class Node extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount(){
        let thisNode = this.props.subject
        console.log(thisNode)
        if (thisNode == null) {
            console.log("node is null")
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
        this.list = new LinkedList();
        this.state = {
            subInput: "",
            amountInput: "",
            showCurrent: "",
            currSub: this.list.current,
        }

        
    }



    componentWillMount() {
            this.list.insert("Starting Node", 0)
            let sub = this.list.current.subject
            console.log(sub)
            this.setState({currSub: sub})
            console.log(this.state.currSub)
            this.currentNode()
            // console.log(this.list.current.subject)
            // console.log(this.state.currSub)
            this.total()
    }

    // nextNode = () => {
    //     this.setState({showNext: this.current.next})
    // }

    currentNode = () => {
        this.setState({showCurrent: this.list.current})
    }

    insert = () => {
        this.list.insert(this.state.subInput, this.state.amountInput)
        this.setState({ subInput: "", amountInput: "" })
        this.total()
    }

    moveForward = () => {
        this.list.next()
        this.setState({currSub : this.list.current})
    }

    moveBackward = () => {
        this.list.previous()
        this.setState({currSub : this.list.current})
    }

    delete = () => {
        console.log(this.list.current)
        this.list.delete()
        this.setState({currSub : this.list.current})
        this.total()
    }

    total = () =>  {
        this.setState({total: `Total = ${this.list.total()}`})
    }



    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        this.setState({ [name]: event.target.value });
    }

    render() {

        return (
            <div className="linked-list">
                <p >Node List</p>
                <button class="previous node" onClick={this.moveBackward}>Previous</button>
                <Node
                    subject={this.list.current.subject}
                    amount={this.list.current.amount}
                    type={"current node"}
                />
                <button class="next node" onClick={this.moveForward}>Next</button>                
                <div className="submission">
                    Subject
                    <input type="text" name="subInput" value={this.state.subInput} onChange={this.handleChange}></input>
                    Amount
                    <input type="number" name="amountInput" value={this.state.amountInput} onChange={this.handleChange}></input>
                    <button onClick={this.insert}>Insert</button>
                    <button onClick={this.delete}>Delete</button>
                    <div>{this.state.total}</div>
                </div>
            </div>
        )




    }

}


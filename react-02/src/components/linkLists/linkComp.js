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
    }

    // nextNode = () => {
    //     this.setState({showNext: this.current.next})
    // }

    currentNode = () => {
        this.setState({showCurrent: this.list.current})
    }

    insert = () => {
        console.log(this.list.current.subject);
        this.list.insert(this.state.subInput, this.state.amountInput)
        console.log(this.list.current);
        this.setState({ subInput: "", amountInput: "" })
    }

    moveForward = () => {
        this.list.next()
        this.setState({currSub : this.list.current})
    }


    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        this.setState({ [name]: event.target.value });
    }

    render() {

        return (
            <div className="linked-list">
                <p >Node List{/*this.state.list.current.subject*/}</p>
                <button class="previous node">Previous</button>
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
                    <button>Delete</button>
                </div>
            </div>
        )




    }

}


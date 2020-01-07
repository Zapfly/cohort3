import React, { useState,useEffect } from 'react'
import {LinkedList} from './linkPSC'



const Node = (props) => {


    return (
            <div className="current node">
                <p>Subject = {props.subject}</p>
                <p>Amount = {props.amount}</p>
            </div>
    )
}

const list = new LinkedList()
list.insert("Starting Node", 0)

const LinkList = () => {

    const [node, setNode] = useState(list.current)
    const [subInput, setSubInput] = useState("")
    const [amountInput, setamountInput] = useState(0)
    const [subject, setSubject] = useState(list.current.subject)
    const [amount, setAmount] = useState(list.current.amount)


    const insert = () => {
        list.insert(subInput, amountInput);
        console.log(list)
        // setSubInput("");
        // setamountInput(0)

    }

    const moveBackward = () => {
        console.log("previous")

        list.previous()
        setNode(list.current)
        setSubject(list.current.subject)
        setAmount(list.current.amount)
    }

    const moveForward = () => {
        console.log("next")
        list.next()
        console.log(list.current)

        setNode(list.current)
        setSubject(list.current.subject)
        setAmount(list.current.amount)

    }

    const handleChange = (e) => {

        if (e.target.name === "amountInput") {

            setamountInput(e.target.value) 
        } else if (e.target.name === "subInput") {
            setSubInput(e.target.value)
        } 
    }


    return (
        <div className="linked-list">
                <p>Node List</p>
                <button className="previous node" onClick={moveBackward}>Previous</button>
                <Node
                    subject={subject}
                    amount={amount}
                    type={"current node"}
                />
                <button className="next node" onClick={moveForward}>Next</button>        
                <div className="submission">
                    Subject
                    <input 
                        type="text" 
                        name="subInput" 
                        value={subInput} 
                        onChange={handleChange}>
                    </input>
                    Amount
                    <input 
                        type="number"
                        name="amountInput" 
                        value={amountInput} 
                        onChange={handleChange}>
                    </input>
                    <button onClick={insert}>Insert</button>
                    {/* <button onClick={this.delete}>Delete</button> */}
                    {/* <div>{this.state.total}</div> */}
                </div>
            </div>
    )
}

export default LinkList

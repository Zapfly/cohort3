import React, { useState,useEffect } from 'react'

function Node (props) {
    return (
            <div className={this.props.type}>
                <p>Subject = {this.props.subject}</p>
                <p>Amount = {this.props.amount}</p>
            </div>
    )
}

function linkList () {

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
                    <input 
                        type="text" 
                        name="subInput" 
                        value={this.state.subInput} 
                        onChange={this.handleChange}>
                    </input>
                    Amount
                    <input 
                        type="number"
                        name="amountInput" 
                        value={this.state.amountInput} 
                        onChange={this.handleChange}>
                    </input>
                    <button onClick={this.insert}>Insert</button>
                    <button onClick={this.delete}>Delete</button>
                    <div>{this.state.total}</div>
                </div>
            </div>
    )
}

export default linkList

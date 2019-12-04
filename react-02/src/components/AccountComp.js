import React from 'react';
import { AccountController, Account } from './account';
import {functions} from '../scripts/card-functions'

const bankAccounts = new AccountController("bankAccounts")


class AccountContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            // counter: 0,
            accountArray: bankAccounts.listArray,

        }
    }

    addAccount = () => {

        bankAccounts.addAccount(
            document.getElementById("idAccountNameInput").value,
            Number(document.getElementById("idAccountBalanceInput").value)
        )
        this.setState({
            accountArray: bankAccounts.listArray.map((x, i) => {
                return(
                <div className="account-card" key={i}>
                <span className="account-name">{x.accountName}</span>
                <span> $ {x.startingBalance} </span>
                <input type="number"></input>
                <button >Deposit</button>
                <button>Withdraw</button>
                <button onClick={(e)=>{
                    
                    // (e) => {
                    //     return e.target.parentNode.parentNode.removeChild(e.target.parentNode)
                    // }
                    // (e) => {
                    //     const search = e.target.getAttribute("class")
                    //     return bankAccounts.deleteAccount(search)           
                    // }
                    // console.log(bankAccounts.listArray) 
                }}>Delete</button>
                </div>   
                )             
            })
        })
        document.getElementById("idAccountNameInput").value = ""
        document.getElementById("idAccountBalanceInput").value = ""
    }

    render() {
        console.log(this.state.controller1)
        return (
            <div className="wrapper">
                <div className="container left">
                    <span className="create-card-display-header">Create New Account</span>
                    <div className="create-card-display">
                        <span className="create-card-text">Account Name:</span>
                        <input type="text" className="create-card-input" id="idAccountNameInput"></input>
                        <span className="create-card-text">Opening Balance:</span>
                        <input type="number" className="create-card-input" id="idAccountBalanceInput"></input>
                        <input type="submit" value="Create Account" className="button create-card-button"
                            id="idCreateAcctButton" onClick={this.addAccount}></input>
                    </div>
                </div>
                <div className="container middle" id="idMiddleContainer">
                    <div>
                        <span className="display-header">Accounts</span>
                        <div className="display" id="idAccountDisplay">
                            {/*///////////////////*/}
                            {this.state.accountArray}
                            {/*///////////////////*/}

                        </div>
                    </div>
                </div>
                <div className="container right">
                    <span className="container-right-display-header">Accounts Information</span>
                    <div className="balances-display top-display" id="idHighestDisplay">
                        <span className="container-right-display-text">Highest Account Balance:</span>
                        <br></br>
                        <span className="container-right-display-output" id="idHighest">Value Display</span>
                    </div>
                    <div className="balances-display bottom-display" id="idLowestDisplay">
                        <span className="container-right-display-text">Lowest Account Balance:</span>
                        <br></br>
                        <span className="container-right-display-output" id="idLowest">Value Display</span>
                    </div>
                </div>
            </div>

        )
    }

}

class AccountCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            accountBalance: this.props.balance,
            accountName: this.props.name,
            key: this.props.key
        }
    }
    render() {
        console.log(this.state.account)
        return (
            <div className="account-card" key={this.props.key}>
                <span className="account-name">{this.props.name}</span>
                <span> $ {this.props.balance} </span>
                <input type="number"></input>
                <button>Deposit</button>
                <button>Withdraw</button>
                <button>Delete</button>
            </div>
        )
    }
}



class Footer extends React.Component {
    render() {
        return (
            <footer>
                Give us All Your Money
            </footer>
        )
    }
}



class AccountsPage extends React.Component {
    render() {
        return (
            <div>
                <div className="header">
                    <h1>Welcome to Calgary Domestic Bank</h1>
                </div>
                <AccountContainer />
                <Footer />
            </div>

        );
    }

}

export default AccountsPage
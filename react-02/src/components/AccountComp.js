import React from 'react';
import { AccountController } from './account';

const bankAccounts = new AccountController("bankAccounts")


class AccountContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            controller: bankAccounts,
            counter: 0,
            value: null,

        }
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
      }



    addAccount = () => {
        let a = this.state.controller
        console.log("Add")
        a.addAccount(
            document.getElementById("idAccountNameInput").value,
            Number(document.getElementById("idAccountBalanceInput").value)
        )
        console.log(a);

        this.setState({ message: "Hi" })
        document.getElementById("idAccountNameInput").value = ""
        document.getElementById("idAccountBalanceInput").value = ""
        this.highest()
        this.state.counter ++
    }

    deleteCard = (e) => {
        const search = e.target.parentNode.childNodes[0].value
        this.state.controller.deleteAccount(search)
        console.log(this.state.controller)
        this.setState({
            message: "hi"
        })
        this.highest()

    }

    find = (event) => {
        const search = event.target.parentNode.childNodes[0].textContent
        // this.highest()

        return this.state.controller.findAccount(search)

    }

    deposit = (event) => {
        const index = this.find(event)
        const obj = this.state.controller.listArray[index]
        const depositAmount = event.target.parentNode.childNodes[2].value
        obj.accountDeposit(Number(depositAmount))
        // console.log(obj)
        this.setState({ message: "mid" })

    }


    withdraw = (event) => {
        const index = this.find(event)
        const obj = this.state.controller.listArray[index]
        const withdrawal = event.target.parentNode.childNodes[2].value
        obj.accountWithdraw(withdrawal)
        // console.log(obj)
        this.setState({ message: "low" })
    }

    highest = () => {
        this.setState({highest:this.state.controller.highestBalance()
        })
        }





    render() {
        console.log(this.state.controller)
        let cards = this.state.controller.listArray.map((object, i) => {
            return (
                <AccountCard
                    key={i}
                    account={object}
                    delete={this.deleteCard}
                    deposit={this.deposit}
                    withdraw={this.withdraw}
                />
            )
        })

        return (
            <div className="wrapper">
                <div className="container left">
                    <span className="create-card-display-header">Create New Account</span>
                    <div className="create-card-display">
                        <span className="create-card-text">Account Name:</span>
                        <input type="text" className="create-card-input" id="idAccountNameInput" name={this.state.value} onChange={ this.handleChange}></input>
                        <span className="create-card-text">Opening Balance:</span>
                        <input type="number" className="create-card-input" id="idAccountBalanceInput" name={this.state.value} onChange={ this.handleChange}></input>
                        <input type="submit" value="Create Account" className="button create-card-button"
                            id="idCreateAcctButton" onClick={this.addAccount}></input>
                    </div>
                </div>
                <div className="container middle" id="idMiddleContainer">
                    <div>
                        <span className="display-header">Accounts</span>
                        <div className="display" id="idAccountDisplay">
                            {/*///////////////////*/}
                            {cards}
                            {/*///////////////////*/}

                        </div>
                    </div>
                </div>
                <div className="container right">
                    <span className="container-right-display-header">Accounts Information</span>
                    <div className="balances-display top-display" id="idHighestDisplay">
                        <span className="container-right-display-text">Highest Account Balance:</span>
                        <br></br>
        <span className="container-right-display-output" id="idHighest">{this.state.highest}</span>
                    </div>
                    <div className="balances-display middle-display" id="idLowestDisplay">
                        <span className="container-right-display-text">Lowest Account Balance:</span>
                        <br></br>
                        <span className="container-right-display-output" id="idLowest">Value Display</span>
                    </div>
                    <div className="balances-display bottom-display" id="idTotalDisplay">
                        <span className="container-right-display-text">Total Account Balance:</span>
                        <br></br>
                        <span className="container-right-display-output" id="idTotal">Value Display</span>
                    </div>
                </div>
            </div>

        )
    }

}

class AccountCard extends React.Component {
    render() {
        console.log(this.props.name)
        return (
            <div className="account-card" >
                <span className="account-name">{this.props.account.accountName}</span>
                <span> $ {this.props.account.startingBalance} </span>
                <input type="number"></input>
                <button onClick={(event) => {
                    this.props.deposit(event)
                    console.log(this.props.account)

                }
                }>Deposit</button>

                <button onClick={(event) => {
                    this.props.withdraw(event)
                    console.log(this.props.account)
                }}>Withdraw </button>

                <button onClick={(e) => {
                    this.props.delete(e)
                }}>Delete</button>
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
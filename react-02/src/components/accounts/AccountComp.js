import React from 'react';
import { AccountController } from './account-react';
import './accounts.css'
import ThemeContext from '../../contexts/ThemeContext'

// import { conditionalExpression } from '@babel/types';

const bankAccounts = new AccountController("bankAccounts")


class AccountContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            controller: bankAccounts,
            counter: 0,
            newAccountName: '',
            newAccountBallance: '',

        }
    }

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        this.setState({ [name]: event.target.value });
    }



    addAccount = () => {
        const isTaken = this.state.controller.findAccount(this.state.newAccountName)
        let accountList = this.state.controller

        isTaken === -1
            ? accountList.addAccount(this.state.newAccountName, this.state.newAccountBallance)
            : alert("That account name is already in use. Please choose another.")
        this.setState({
            newAccountName: "",
            newAccountBallance: "",
        })
        this.highest()
        this.lowest()
        this.total()


        // this.state.counter++
        this.setState({
            counter: this.state.counter + 1
        })
    }

    deleteCard = (e) => {
        const search = e.target.parentNode.childNodes[0].textContent
        console.log(e.target.parentNode.childNodes[0].textContent)
        this.state.controller.deleteAccount(search)
        this.setState({
            message: "hi"
        })
        this.highest()
        this.lowest()
        this.total()


    }

    find = (event) => {
        const search = event.target.parentNode.childNodes[0].textContent
        this.highest()
        this.lowest()
        this.total()
        return this.state.controller.findAccount(search)

    }

    deposit = (event) => {
        const index = this.find(event)
        const obj = this.state.controller.listArray[index]
        const depositAmount = event.target.parentNode.childNodes[2].value
        obj.accountDeposit(Number(depositAmount))
        this.setState({ message: "mid" })
        this.highest()
        this.lowest()
        this.total()
    }


    withdraw = (event) => {
        const index = this.find(event)
        const obj = this.state.controller.listArray[index]
        const withdrawal = event.target.parentNode.childNodes[2].value
        obj.accountWithdraw(withdrawal)
        this.setState({ message: "low" })
        this.highest()
        this.lowest()
        this.total()

    }

    highest = () => {
        this.setState({
            highest: this.state.controller.highestBalance()
        })
    }

    lowest = () => {
        this.setState({
            lowest: this.state.controller.lowestBalance()
        })
    }

    total = () => {
        this.setState({
            accountTotal: this.state.controller.totalBalances()
        })
    }





    render() {
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
            <div className="account account-wrapper wrapper">
                <div className="container left">
                    <span className="create-card-display-header">Create New Account</span>
                    <div className="create-card-display">
                        <span className="create-card-text">Account Name:</span>
                        <input
                            type="text"
                            className="create-card-input"
                            id="idAccountNameInput"
                            value={this.state.newAccountName}
                            onChange={this.handleChange}
                            name="newAccountName"></input>
                        <span className="create-card-text">Opening Balance:</span>
                        <input type="number" className="create-card-input" id="idAccountBalanceInput" value={this.state.newAccountBallance} onChange={this.handleChange} name="newAccountBallance"></input>
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
                        <span className="container-right-display-output" id="idLowest">{this.state.lowest}</span>
                    </div>
                    <div className="balances-display bottom-display" id="idTotalDisplay">
                        <span className="container-right-display-text">Total Account Balance:</span>
                        <br></br>
                        <span className="container-right-display-output" id="idTotal">{this.state.accountTotal}</span>
                    </div>
                </div>
            </div>

        )
    }

}

class AccountCard extends React.Component {
    constructor() {
        super()
        this.state = {
            changeBalance: '',
        }
    }

    handleChange = (event) => {
        this.setState({ changeBalance: event.target.value });
    }

    handleClick = () => {
        this.setState({ changeBalance: '' })
    }

    render() {
        return (
            <div className="account-card" >
                <span className="account-name">{this.props.account.accountName}</span>
                <span> $ {this.props.account.startingBalance} </span>
                <input type="number" name="changeBalance" onChange={this.handleChange} value={this.state.changeBalance}></input>
                <button onClick={(event) => {
                    this.props.deposit(event)
                    console.log(this.props.account)
                    this.handleClick()
                }
                }>Deposit</button>

                <button onClick={(event) => {
                    this.props.withdraw(event)
                    // console.log(this.props.account)
                    this.handleClick()

                }}>Withdraw</button>

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
            <ThemeContext.Consumer>
                {value => (
                    <div style={{ color: value.theme.foreground, background: value.theme.background }}>
                        <div className="header">
                            <h1>Welcome to Calgary Domestic Bank</h1>
                        </div>
                        <AccountContainer />
                        {/* <Footer /> */}
                    </div>
                )}
            </ThemeContext.Consumer>

        );
    }

}

export default AccountsPage
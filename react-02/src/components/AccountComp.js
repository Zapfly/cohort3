import React from 'react';

class LeftContainer extends React.Component {
    render() {
        return (
            <div className="container left">
                <span className="create-card-display-header">Create New Account</span>
                <div className="create-card-display">
                    <span className="create-card-text">Account Name:</span>
                    <input type="text" className="create-card-input" id="idAccountNameInput"></input>
                    <span className="create-card-text">Opening Balance:</span>
                    <input type="number" className="create-card-input" id="idAccountBalanceInput"></input>
                    <input type="submit" value="Create Account" className="button create-card-button"
                        id="idCreateAcctButton"></input>
                </div>
            </div>
        )
    }
}

class MiddleContainer extends React.Component {
    render() {
        return (
            <div className="container middle" id="idMiddleContainer">
                <div>
                    <span className="display-header">Accounts</span>
                    <div className="display" id="idAccountDisplay">

                    </div>
                </div>
            </div>

        )
    }

}

class RightContainer extends React.Component {
    render (){
        return(
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
            <div className="wrapper">
                <div className="header">
                    <h1>Welcome to Calgary Domestic Bank</h1>
                </div>
                <LeftContainer />
                <MiddleContainer />
                <RightContainer />
                <Footer />
            </div>

        );
    }

}

export default AccountsPage
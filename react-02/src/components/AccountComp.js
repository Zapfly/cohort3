import React from 'react';

class LeftContainer extends React.Component {
    render() {
        return (
            <div className="container left">
                <span className="create-account-display-header">Create New Account</span>
                <div className="create-account-display">
                    <span className="create-account-text">Account Name:</span>
                    <br></br><input type="text" class="create-account-input" id="idAccountNameInput"></input>
                    <br></br><span className="create-account-text">Opening Balance:</span>
                    <br></br><input type="number" className="create-account-input" id="idAccountBalanceInput"></input>
                    <br></br><input type="submit" value="Create Account" className="button create-account-button"
                        id="idCreateAcctButton"></input>
                </div>
            </div>
        )
    }
}

class MiddleContainer extends React.Component {
    render() {
        return (
            <div>
                <div className="container middle" id="idMiddleContainer">
                    <span className="display-header">Accounts</span>
                    <div className="display" id="idAccountDisplay">

                    </div>
                </div>
            </div>

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
            </div>

        );
    }

}

export default AccountsPage
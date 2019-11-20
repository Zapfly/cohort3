import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import EvenComponent from './components/EvenComponent';
import OddComponent from './components/OddComponent';

class App extends React.Component {

  constructor() {
    super();
    this.counter = 21;
    this.state = {
      myState: "TBD"
    };
  }

  onPushMe = () => {
    this.counter ++
    this.setState({
      myState: "now:" + this.counter
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>I am in control of this app and my name is Luke 21 {this.state.myState}</h1>
          <button onClick={this.onPushMe}>
            Push Me
          </button>
          <MyComponent whatToSay="What Ever" 
          />
          { this.counter %2===0
        ? <EvenComponent />
        : <OddComponent />
          }
          <EvenComponent num={this.counter}/>
                    
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  

  }

}

export default App;

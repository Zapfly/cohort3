import React from 'react';
import logo from './logo.svg';
import './App.css';
import Image from "./components/image"
import Game from "./components/tick-tack-toe"


let counter = 0

let imgArr = [
    "https://publicdomainvectors.org/photos/nicubunu-RPG-map-symbols-Round-Tower-2.png",
    "https://publicdomainvectors.org/photos/nicubunu-RPG-map-symbols-Windmill-1.png",
    "https://publicdomainvectors.org/photos/nicubunu-RPG-map-symbols-Tower-Square-2.png",
    "https://publicdomainvectors.org/photos/nicubunu-RPG-map-symbols-Statue-1.png",
    "https://publicdomainvectors.org/photos/nicubunu-RPG-map-symbols-Fortress-2.png",
    "https://publicdomainvectors.org/photos/nicubunu-RPG-map-symbols-Cathedral-2.png"
]




class App extends React.Component {

  constructor() {
    super()
    this.imgCounter = 0

    this.page = {
      startPage: (
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
        </div>
      ),
      gamePage: (
        <Game />
      )
    }
      this.state = { page: this.page.startPage }

  }

  gameStart = () => {
    console.log("heyo")
    this.setState({page: this.page.gamePage }) 
  }

  renderImages = () => {
    return (

      imgArr.map((x, index) => {
      return (
        <Image 
        imageId={index}
        src={imgArr[index]} 
      />
      )
    })
      

    )
  }

  render() {
    Image.counter = 0

    return (
      <div className="App">
        <header>
          {this.renderImages()}
          {/* <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image /> */}
        </header>

        <div>{this.state.page}</div>
      </div>
    );
  }
}

export default App;

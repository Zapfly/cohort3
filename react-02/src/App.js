import React from 'react';
import logo from './logo.svg';
import './App.css';
import Image from "./components/image"
import Game from "./components/Game"




class App extends React.Component {

  constructor() {
    super()
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

      this.imgArr = [
        {key:1, src:"https://publicdomainvectors.org/photos/nicubunu-RPG-map-symbols-Round-Tower-2.png", action:this.startPage},
        {key:2, src:"https://publicdomainvectors.org/photos/nicubunu-RPG-map-symbols-Windmill-1.png", action:this.gameStart},
        {key:3, src:"https://publicdomainvectors.org/photos/nicubunu-RPG-map-symbols-Tower-Square-2.png",action:null},
        {key:4, src:"https://publicdomainvectors.org/photos/nicubunu-RPG-map-symbols-Statue-1.png", action: null},
        {key:5, src:"https://publicdomainvectors.org/photos/nicubunu-RPG-map-symbols-Fortress-2.png", action: null},
        {key:6, src:"https://publicdomainvectors.org/photos/nicubunu-RPG-map-symbols-Cathedral-2.png", action: null}
    ];
    this.state = { page: this.page.startPage };
  }

  gameStart = () => {
    this.setState({page: this.page.gamePage });
  }

  startPage = () => {
    this.setState({page: this.page.startPage });
  }

  renderImages = () => {
    return (

      this.imgArr.map((x, index) => {
      return (
        <Image 
        key={index}
        imageId={index}
        src={x.src}
        onClick={x.action} 
      />
      )
    })
      

    )
  }

  render() {
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

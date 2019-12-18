import React from 'react';
import logo from './logo.svg';
import './App.css';
import Image from "./components/image"
import Game from "./components/Game"
import house from './images/House14.svg'
import money from './images/accounts.svg'
import map from './images/city-map.svg'
import play from './images/joystick_black_red_petri_01.svg'
import link from './images/link.svg'
import presentation from './images/playbutt.svg'
import AccountsPage from './components/accounts/AccountComp'
import CityPage from './components/cities/cityPage'
import PresentationPage from './components/presentation'
// import Linklist from './components/link-lists/linkPages'

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
      ),
      accountPage: (
        <AccountsPage />
      ),
      cityPage: (
        <CityPage />
      ),
      presentationPage: (
        <PresentationPage />
      ),
      // linkPage: (
      //   <Linklist />
      // )
    }
      this.imgArr = [
        {key:1, src:house, action:this.startPage},
        {key:2, src:play, action:this.gameStart},
        {key:3, src:money,action:this.accountPage},
        {key:4, src:map, action: this.cityPage},
        {key:5, src:presentation, action: this.presentationPage},
        {key:6, src:link, action: null/*this.linkPage*/}
    ];

    //*********
    this.state = { 
      page: this.page.startPage,
    };
    //******

  }

  gameStart = () => {
    this.setState({page: this.page.gamePage });
  }

  startPage = () => {
    this.setState({page: this.page.startPage });
  }

  accountPage = () => {
    this.setState({page: this.page.accountPage})
  }

  cityPage = () => {
    this.setState({page: this.page.cityPage})
  }
  presentationPage = () => {
    this.setState({page: this.page.presentationPage})
  }

  linkPage = () => {
    this.setState({page: this.page.linkPage})
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
        </header>

        <div>{this.state.page}</div>
      </div>
    );
  }
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Image from "./components/image"
import Game from "./components/game/Game"
import house from './images/House14.png'
import money from './images/accounts.png'
import map from './images/city-map.png'
import play from './images/joystick_black_red_petri_01.png'
import link from './images/link.png'
import presentation from './images/playbutt.png'
import AccountsPage from './components/accounts/AccountComp'
import CityPage from './components/cities/cityPage'
import PresentationPage from './components/presentation/presentation'
import { LinkListComp } from './components/linkLists/linkComp'
import LinkList from './components/linkLists/hookedLists'
import FifoLifoApp from './components/fifo-lifo/fifo-lifo-Comp'
import Settings from './components/Settings'
import HomePage from './components/home/Home'
import ThemeContext, { themes } from './contexts/ThemeContext';
import GameContext from './contexts/GameContext'
import pro from './images/pro.png'




class App extends React.Component {

  constructor() {
    super()
    this.imgArr = [
      { key: 1, src: house, action: this.startPage },
      { key: 2, src: play, action: this.gameStart },
      { key: 3, src: money, action: this.accountPage },
      { key: 4, src: map, action: this.cityPage },
      { key: 5, src: presentation, action: this.presentationPage },
      { key: 6, src: link, action: this.hookedLists },
      { key: 7, src: link, action: this.FifoLifo },
      { key: 8, src: pro, action: this.Settings }
    ];
    this.page = {
      homePage: (
        <HomePage
        images={this.imgArr}
        />
      ),
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
        <GameContext.Provider
          // history={this.state.history}
          // stepNumber = {this.state.stepNumber}
          >
          <Game />
        </GameContext.Provider>
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
      linkPage: (
        <LinkListComp />
      ),
      hookedLists: (
        <LinkList />
      ),
      FifoLifo: (
        <FifoLifoApp />
      ),
      Settings: (
        <Settings />
      ),

    }

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };

    //*********
    this.state = {
      page: this.page.homePage,
      theme: themes.light,
      toggleTheme: this.toggleTheme,
      // history: [
      //   {
      //     squares: Array(9).fill(null)
      //   }
      // ],
      // stepNumber: 0,
      // xIsNext: true
    };
    //******
  }

  gameStart = () => {
    this.setState({ page: this.page.gamePage });
  }

  startPage = () => {
    this.setState({ page: this.page.startPage });
  }

  accountPage = () => {
    this.setState({ page: this.page.accountPage })
  }

  cityPage = () => {
    this.setState({ page: this.page.cityPage })
  }

  presentationPage = () => {
    this.setState({ page: this.page.presentationPage })
  }

  linkPage = () => {
    this.setState({ page: this.page.linkPage })
  }

  hookedLists = () => {
    this.setState({ page: this.page.hookedLists })
  }

  FifoLifo = () => {
    this.setState({ page: this.page.FifoLifo })
  }

  Settings = () => {
    this.setState({ page: this.page.Settings })
  }

  renderImages = () => {
    return (
      this.imgArr.map((x, index) => {
        return (
          <Image
          imageClassName={'navbarImg'}
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
      <ThemeContext.Provider value={this.state}>
        <div className="App" 
        style={{
          color: this.state.theme.foreground,
          background: this.state.theme.background,
          borderStyle: this.state.theme.foreground
        }}
        >
          <header>
            {this.renderImages()}
          </header>
          <div>{this.state.page}</div>
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;

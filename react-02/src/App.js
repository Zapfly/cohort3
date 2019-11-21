import React from 'react';
import logo from './logo.svg';
import './App.css';
import Image from "./components/image"

function App() {
  return (
    <div className="App">
      <div>
        <header>
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
        </header>
        {/* <img id="idImg0" src="https://publicdomainvectors.org/photos/nicubunu-RPG-map-symbols-Round-Tower-2.png"></img>
        <img id="idImg1" src="https://publicdomainvectors.org/photos/nicubunu-RPG-map-symbols-Windmill-1.png"></img>
        <img id="idImg2" src="https://publicdomainvectors.org/photos/nicubunu-RPG-map-symbols-Tower-Square-2.png"></img>
        <img id="idImg3" src="https://publicdomainvectors.org/photos/nicubunu-RPG-map-symbols-Statue-1.png"></img>
        <img id="idImg4" src="https://publicdomainvectors.org/photos/nicubunu-RPG-map-symbols-Fortress-2.png"></img>
        <img id="idImg5" src="https://publicdomainvectors.org/photos/nicubunu-RPG-map-symbols-Cathedral-2.png"></img> */}

      </div>
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;

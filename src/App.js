import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FlashCardApp from './FlashCardApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Jace's React Flash Card App</h1>
        </header>
        <h2>This is where the cards will show</h2>
        <FlashCardApp />
      </div>
    );
  }
}

export default App;

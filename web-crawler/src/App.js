import React, { Component } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import MainDisplayer from './Components/MainDisplayer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <img
            id="logo"
            src="https://pbs.twimg.com/media/Dc6Z6GbWkAELnoS.png"
            alt="NClogo"
          />
        </div>
        <SearchBar />
        <MainDisplayer />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <SearchBar />
      </div>
    );
  }
}

export default App;
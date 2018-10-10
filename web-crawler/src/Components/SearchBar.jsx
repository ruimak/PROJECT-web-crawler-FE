import React, { Component } from 'react';
import '../App.css';

class SearchBar extends Component {
  state = {
    input: ''
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} />

        <button type="button">hello</button>
      </form>
    );
  }
  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(e);
    // make axios get request to the url thats on this.state.input
  };
}

export default SearchBar;

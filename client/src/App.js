import React, { Component } from 'react';
import Header from './components/header/Header';
import SearchBar from './components/search/SearchBar';

class App extends Component {
  render() {
    return (
      <div>
        <Header text='Toronto Waste Lookup'/>
        <SearchBar />
      </div>
    )
  }
}

export default App;

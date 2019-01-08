import React, { Component } from 'react';
import Header from './components/header/Header';
import List from './components/list/List';
import SearchBar from './components/search/SearchBar';
import axios from "axios";
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { dataItems: [] };
  }

  componentWillMount(){
    this.fetchData();
  }

  async fetchData() {
    const req = await axios.get(
      "https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000"
    );
    this.setState({dataItems: req.data});
  }

  render() {
    return (
      <div>
        <Header text='Toronto Waste Lookup'/>
        <SearchBar />
        <List items={this.state.dataItems}/>
      </div>
    )
  }
}

export default App;

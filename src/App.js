import React, { Component } from 'react';
import Header from './components/header/Header';
import List from './components/list/List';
import SearchBar from './components/search/SearchBar';
import axios from "axios";
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { dataItems: [], filteredList: [], favouritesList: [] };

    this.filterData = this.filterData.bind(this);
  }

  componentWillMount(){
    this.fetchData();
  }

  async fetchData() {
    const req = await axios.get(
      "https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000"
    );
    req.data = req.data.map(item => {
      item.favourite = false;
      return item;
    })
    this.setState({dataItems: req.data});
  }

  filterData(value) {
    if(value === '' || value === ' '){
      this.setState({filteredList: []});
      return false;
    }
    const newArray = this.state.dataItems.filter(item => {
      if (item.keywords.indexOf(value) !== -1) {
        return true;
      } else {
        return false;
      }
    });

    this.setState({filteredList: newArray});
  }
  
  getFavourites(){
    const newArray = this.state.dataItems.filter(item => {
      return item.favourite;
    });

    this.setState({favouritesList: newArray});
  }

  render() {
    const favouritesMarkup = this.state.favouritesList.length ? (
      <div className='favourites'>
      <h1>Favourites</h1>
      <List onFavourite={()=>this.getFavourites()} items={this.state.favouritesList}/>
      </div>
    ) : null;
    return (
      <div>
        <Header text='Toronto Waste Lookup'/>
        <SearchBar filterData={this.filterData}/>
        <List onFavourite={()=>this.getFavourites()} items={this.state.filteredList}/>
        {favouritesMarkup}
      </div>
    )
  }
}

export default App;

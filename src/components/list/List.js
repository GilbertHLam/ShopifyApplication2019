import React, { Component } from "react";
import ListItem from "./ListItem";
import "./List.css"

class List extends Component {
  render() {
    const listMarkup = this.props.items.map((item) => {
      return <ListItem onFavourite={this.props.onFavourite} item={item} key={item.id} selected={item.favourite}/>;
    });
    return <div className="list">{listMarkup}</div>;
  }
}

export default List;

import React, { Component } from "react";
import ListItem from "./ListItem";
import "./List.css"

class List extends Component {
  render() {
    const listMarkup = this.props.items.map(item => {
      return <ListItem item={item} key={item.id} selected={false}/>;
    });
    return <div className="list">{listMarkup}</div>;
  }
}

export default List;

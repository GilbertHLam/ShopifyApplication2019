import React, { Component } from "react";
import './Header.css';

class Header extends Component {
  render() {
    return (
        <div className='header'>
            {this.props.text}
        </div>
    );
  }
}

export default Header;
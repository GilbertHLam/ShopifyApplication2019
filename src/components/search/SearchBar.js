import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="searchBar">
        <form
          onSubmit={e => {
            this.props.filterData(this.state.value);
            e.preventDefault();
          }}
        >
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <label>
            <svg
              onClick={e => {
                this.props.filterData(this.state.value);
                e.preventDefault();
              }}
              className="search-icon"
              viewBox="-3 -4 32 32"
            >
              <path 
                fill="none"
                d="M 19 3 C 13.488281 3 9 7.488281 9 13 C 9 15.394531 9.839844 17.589844 11.25 19.3125 L 3.28125 27.28125 L 4.71875 28.71875 L 12.6875 20.75 C 14.410156 22.160156 16.605469 23 19 23 C 24.511719 23 29 18.511719 29 13 C 29 7.488281 24.511719 3 19 3 Z M 19 5 C 23.429688 5 27 8.570313 27 13 C 27 17.429688 23.429688 21 19 21 C 14.570313 21 11 17.429688 11 13 C 11 8.570313 14.570313 5 19 5 Z "
              />
            </svg>
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;

import React, { Component } from "react";
import "./ListItem.css";
class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: this.props.selected };
    this.onClick = this.onClick.bind(this);
  }
  render() {
    const leftSide = this.renderLeftSection();
    const rightSide = this.renderRightSection();
    return (
      <div className="listItem">
        {leftSide}
        {rightSide}
      </div>
    );
  }

  onClick() {
    this.props.item.favourite = !this.props.item.favourite;
    this.props.onFavourite();
  }

  renderLeftSection() {
      const classes = this.props.item.favourite ? 'svg-icon selected' : 'svg-icon';
    return (
      <div className="leftSide">
        <svg onClick={this.onClick} className={classes} viewBox="0 0 20 20">
        <path d="m10.201,.758l2.478,5.865 6.344,.545c0.44,0.038 0.619,0.587 0.285,0.876l-4.812,4.169 1.442,6.202c0.1,0.431-0.367,0.77-0.745,0.541l-5.452-3.288-5.452,3.288c-0.379,0.228-0.845-0.111-0.745-0.541l1.442-6.202-4.813-4.17c-0.334-0.289-0.156-0.838 0.285-0.876l6.344-.545 2.478-5.864c0.172-0.408 0.749-0.408 0.921,0z"/>
        </svg>
        <h2>{this.props.item.title}</h2>
      </div>
    );
  }

  renderRightSection() {
    return (
      <div
        className="rightSide"
        dangerouslySetInnerHTML={{
          __html: this.parseHtml(this.props.item.body)
        }}
      />
    );
  }

  parseHtml(html) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }
}

export default ListItem;

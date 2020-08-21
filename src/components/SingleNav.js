import React, { Component } from "react";

import "../stylesheets/Navbar.css";

class SingleNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleHover = (e) => {
    e.currentTarget.classList.add("single-nav-expanded");
  };

  handleBlur = (e) => {
    e.currentTarget.classList.remove("single-nav-expanded");
  };

  handleClick = (e) => {
    const allNavs = document.querySelectorAll(".single-nav");
    for (let i = 0; i < allNavs.length; i++) {
      allNavs[i].classList.remove("single-nav-active");
    }
    e.currentTarget.classList.add("single-nav-active");
  };

  render() {
    return (
      <div
        className="single-nav"
        onMouseOver={this.handleHover}
        onMouseOut={this.handleBlur}
        onClick={this.handleClick}
      >
        {this.props.svg}
        <div className="title">{this.props.title}</div>
      </div>
    );
  }
}

export default SingleNav;

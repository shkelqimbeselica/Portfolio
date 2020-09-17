import React, { Component } from "react";

import "../stylesheets/Navbar.css";

class SingleNav extends Component {
  constructor(props) {
    super(props);
    this.state = { className: "" };
  }

  componentDidMount() {
    if (this.props.title === "Home") {
      this.setState({ className: "single-nav-active" });
    }
  }

  handleHover = (e) => {
    this.props.handleHover(e);
  };

  handleBlur = (e) => {
    e.currentTarget.classList.remove("single-nav-expanded");
  };

  handleClick = (e) => {
    this.props.handleClick(e);
  };

  render() {
    return (
      <div
        className={`single-nav ${
          this.state.className !== "" ? this.state.className : null
        }`}
        style={{ marginBottom: this.props.margin }}
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

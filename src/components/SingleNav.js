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
    this.props.handleBlur(e);
  };

  handleClick = (e) => {
    this.props.handleClick({
      event: e,
      title: e.currentTarget.children[1].textContent,
    });
  };

  render() {
    return (
      <div
        className={`single-nav ${
          this.state.className !== "" ? this.state.className : ""
        }`}
        style={{
          marginBottom: this.props.margin,
          backgroundColor:
            this.props.title === this.props.getActive ? "#96ffbc" : "#222234",
        }}
        onMouseOver={this.handleHover}
        onMouseOut={this.handleBlur}
        onClick={this.handleClick}
      >
        <div
          className={this.props.type === "Nav" ? "static" : "footer-static"}
          style={{ left: this.props.title === "Contact" ? "18px" : "16px" }}
        >
          {this.props.svg}
        </div>
        <div className="title-holder">
          <p
            className="title-p"
            style={{
              color:
                this.props.title === this.props.getActive ? "#222234" : "white",
            }}
          >
            {this.props.title}
          </p>
        </div>
      </div>
    );
  }
}

export default SingleNav;

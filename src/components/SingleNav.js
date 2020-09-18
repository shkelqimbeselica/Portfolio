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
    // let navs = document.querySelectorAll(".single-nav:not(.single-nav-active)");
    // for (let l = 0; l < 4; l++) {
    //   let Ppaths = navs[l].querySelectorAll("path");
    //   let Ppolygons = navs[l].querySelectorAll("polygon");
    //   this.loop(Ppaths, Ppolygons, "#8989A3");
    // }
  }

  loop = (conditional, secondConditional, color) => {
    for (let i = 0; i < conditional.length; i++) {
      if (this.props.title !== this.props.getActive) {
        conditional[i].style.fill = color;
      }
    }

    for (let i = 0; i < secondConditional.length; i++) {
      if (this.props.title !== this.props.getActive) {
        secondConditional[i].style.fill = color;
      }
    }
  };

  // console.log(navs[l]);
  giveColorToSvg = (e, activeColor, pasiveColor, type) => {
    const target = e.currentTarget;
    let Apaths = target.querySelectorAll("path");
    let Apolygons = target.querySelectorAll("polygon");

    let navs = document.querySelectorAll(".single-nav");

    if (type === "click") {
      for (let l = 0; l < 4; l++) {
        let Ppaths = navs[l].querySelectorAll("path");
        let Ppolygons = navs[l].querySelectorAll("polygon");

        this.loop(Ppaths, Ppolygons, pasiveColor);
      }
    }

    this.loop(Apaths, Apolygons, activeColor);
  };

  handleHover = (e) => {
    this.props.handleHover(e);

    if (this.props.type === "Nav") this.giveColorToSvg(e, "white", "#8989A3");
  };

  handleBlur = (e) => {
    e.currentTarget.classList.remove("single-nav-expanded");
    this.giveColorToSvg(e, "#8989A3", "#8989A3");
  };

  handleClick = (e) => {
    this.props.handleClick({
      event: e,
      title: e.currentTarget.children[1].textContent,
    });

    // this.giveColorToSvg(e, "#181824", "#8989A3", "click");
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
          className="static"
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

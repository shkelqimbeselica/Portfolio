import React, { Component } from "react";
import Letter from "./Letter";
import Cursor from "./Cursor";

import "../stylesheets/Header.css";
// import "../stylesheets/Responsive.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderedThings: [],
      itemsRendered: 0,
    };

    this.name = [
      "s",
      "h",
      "k",
      "e",
      "l",
      "q",
      "i",
      "m",
      "",
      "b",
      "e",
      "s",
      "e",
      "l",
      "i",
      "c",
      "a",
    ];
  }

  componentDidMount() {
    setTimeout(() => {
      this.scheduleNextUpdate();
    }, 1000);
  }

  scheduleNextUpdate = () => {
    this.timer = setTimeout(this.updateRenderedThings, 100);
  };

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  updateRenderedThings = () => {
    const itemsRendered = this.state.itemsRendered;
    const updatedState = {
      renderedThings: this.state.renderedThings.concat(
        this.name[this.state.itemsRendered]
      ),
      itemsRendered: itemsRendered + 1,
    };
    this.setState(updatedState);
    if (updatedState.itemsRendered < this.name.length) {
      this.scheduleNextUpdate();
    }
  };

  render() {
    return (
      <>
        <div className="scroll-to-home" style={{ height: "1px" }}></div>
        <div className="header">
          {this.state.renderedThings.map((letter, index) => (
            <Letter key={index} letter={letter} />
          ))}
          <Cursor />
        </div>
      </>
    );
  }
}

export default Header;

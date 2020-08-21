import React, { Component } from "react";
import Header from "./Header";
import Navbar from "./Navbar";

import "../stylesheets/Main.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main">
        <Header />
        <div className="main-intro">
          <Navbar />
          <div className="intro">
            <h1 className="title">
              Welcome <br /> to my portfolio
            </h1>
            <div className="border-left">
              <div className="lines">
                <div className="square"></div>
                <div className="square"></div>
              </div>
              <p className="description">
                I am Shkëlqim Beselica, a versatile front-end developer from
                Kosovo experienced in JavaScript, specialized in React.
              </p>
              <button className="see-work">See work</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;

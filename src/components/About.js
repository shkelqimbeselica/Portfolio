import React, { Component } from "react";
import "../stylesheets/About.css";

import profile from "../img/Shkelqim.jpg";

import "../stylesheets/About.css";
// import "../stylesheets/Responsive.css";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div id="scroll-to-about" style={{ height: "180px" }}></div>
        <div className="about-me" id="about">
          <div className="container">
            <div className="avatar">
              <img src={profile} alt="Shkëlqim" width="339" height="450" />
              <div className="about-intro">
                <h1>About me</h1>
                <p>
                  I am a front-end developer, <br /> ambitious and a code
                  enthusiast! <br /> <br />
                  My main focus is building pixel-perfect, <br /> interactive
                  websites that are complex and yet easy to use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;

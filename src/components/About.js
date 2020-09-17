import React, { Component } from "react";
import "../stylesheets/About.css";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="about-me">
        <div className="container">
          <div className="avatar">
            <img src="/img/Shkëlqim.jpg" width="339" height="450" />
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
    );
  }
}

export default About;

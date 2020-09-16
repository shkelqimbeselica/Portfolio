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
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg"
              width="349"
              height="414"
            />
            <div className="about-intro">
              <h1>About me</h1>
              <p>
                I am a developer
                <br />
                <br />I am a developer
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

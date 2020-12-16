import React, { PureComponent } from "react";

import "../stylesheets/Header.css";

class Letter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <span
        className="letter"
        style={{ marginRight: this.props.letter === "m" ? "8px" : "0" }}
      >
        {this.props.letter}
      </span>
    );
  }
}

export default Letter;

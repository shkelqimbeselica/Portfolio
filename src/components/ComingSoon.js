import React, { Component } from "react";

class ComingSoon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={style.comingSoon}>The mobile version is coming soon!</div>
    );
  }
}

const style = {
  comingSoon: {
    position: "absolute",
    width: "100%",
    top: "50%",
    bottom: "50%",
    transform: "translate(0%, -50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "30px",
    textAlign: "center",
  },
};

export default ComingSoon;

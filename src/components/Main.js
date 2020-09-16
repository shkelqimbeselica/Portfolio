import React, { Component } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import StyledButton from "./StyledButton";

import "../stylesheets/Main.css";

const slideData = [
  {
    index: 0,
    headline: "Balkan Cuisine",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg",
  },
  {
    index: 1,
    headline: "Portfolio",
    button: "Book travel",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg",
  },
  {
    index: 2,
    headline: "Listify",
    button: "Listen",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg",
  },
];

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.carouselRef = React.createRef();
  }

  handleButtonClick = (e) => {
    this.carouselRef.current.scrollIntoView();
  };

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
              <div className="title-and-button">
                <p className="description">
                  I am Shkëlqim Beselica, a versatile front-end developer from
                  Kosovo experienced in JavaScript, specialized in React.
                </p>
                <StyledButton
                  title="See work"
                  root="button"
                  background="button-background"
                  button="see-work clicked-button"
                  handleButtonClick={this.handleButtonClick}
                />
              </div>
            </div>
          </div>
        </div>
        <Carousel ref={this.carouselRef} heading="My work" slides={slideData} />
      </div>
    );
  }
}

const style = {
  button: {
    position: "relative",
    color: "red",
  },
};

export default Main;

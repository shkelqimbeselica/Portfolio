import React, { Component } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import StyledButton from "./StyledButton";

import portfolio from "../img/Portfolio.png";
import listify from "../img/Listify.png";
import balkanCuisine from "../img/Balkan Cuisine.webp";

import "../stylesheets/Main.css";

const slideData = [
  {
    index: 0,
    headline: "Portfolio",
    src: portfolio,
  },
  {
    index: 1,
    headline: "Listify",
    src: listify,
  },
  {
    index: 2,
    headline: "Balkan Cuisine",
    src: balkanCuisine,
  },
];

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.carousel = null;
  }

  handleButtonClick = (e) => {
    this.carousel.scrollIntoView();
  };

  render() {
    return (
      <div className="main" id="main">
        <Header />
        <div className="main-intro">
          <Navbar />
          <div className="intro">
            <h1 className="title">
              {/* Welcome <br /> to my portfolio */}
              Front-End <br /> Developer
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
                  button="see-work" // Shtoja clicked-button klasen nese don me kon inverted
                  handleButtonClick={this.handleButtonClick}
                />
              </div>
            </div>
          </div>
        </div>
        <Carousel
          instance={(i) => (this.carousel = i)}
          heading="My work"
          slides={slideData}
        />
      </div>
    );
  }
}

export default Main;

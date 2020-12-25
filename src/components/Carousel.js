import React, { Component } from "react";
import Slide from "./Slide";

import { ViewportContext } from "../context/ViewportContext";

import "../stylesheets/Main.css";
import "../stylesheets/Body.css";
// import "../stylesheets/Responsive.css";

const SliderControl = ({
  type,
  title,
  handleClick,
  handleHover,
  handleMouseOut,
}) => {
  return (
    <button
      className={`btn btn--${type}`}
      title={title}
      onClick={handleClick}
      onMouseOver={handleHover}
      onMouseOut={handleMouseOut}
    >
      <svg className="icon" viewBox="0 0 24 24">
        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </svg>
    </button>
  );
};

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = { current: 0 };
    // this.handlePreviousClick = this.handlePreviousClick.bind(this);
    // this.handleNextClick = this.handleNextClick.bind(this);
    // this.handleSlideClick = this.handleSlideClick.bind(this);

    this.slidesRef = React.createRef();
    this.props.instance(this);
  }

  handlePreviousClick = () => {
    const previous = this.state.current - 1;

    this.setState({
      current: previous < 0 ? this.props.slides.length - 1 : previous,
    });
  };

  handleNextClick = () => {
    const next = this.state.current + 1;

    this.setState({
      current: next === this.props.slides.length ? 0 : next,
    });
  };

  handleSlideClick = (index) => {
    if (this.state.current !== index) {
      this.setState({
        current: index,
      });
    }
  };

  handleHover = (e) => {
    const target = e.currentTarget;
    target.style.backgroundColor = "#96ffbc";
    target.children[0].children[0].style.fill = "#181824";
  };

  handleMouseOut = (e) => {
    const target = e.currentTarget;
    target.style.backgroundColor = "transparent";
    target.children[0].children[0].style.fill = "#6b7a8f";
  };

  scrollIntoView = () => {
    const element = this.slidesRef.current;
    // const headerOffset = 120;
    // const elementPosition = element.getBoundingClientRect().top;
    // const offsetPosition = elementPosition - headerOffset;

    element.scrollIntoView();

    // document.body.scrollTo(0, offsetPosition);
  };

  render() {
    const { current } = this.state;
    const { slides, heading } = this.props;
    const headingId = `slider-heading__${heading
      .replace(/\s+/g, "-")
      .toLowerCase()}`;

    // Qikjo posht duhet per pc, laptops etc
    let wrapperTransform;
    if (this.context === "PC") {
      wrapperTransform = {
        transform: `translateX(-${current * (88 / slides.length)}%)`,
      };
    } else {
      wrapperTransform = {
        transform: `translateX(-${current * (80 / slides.length)}%)`,
      };
    }

    // Qikjo posht duhet per per telefona

    return (
      <>
        <div
          id="scroll-to-main"
          style={{ height: "290px" }}
          ref={this.slidesRef}
        ></div>
        <div
          className="slider"
          id="slider"
          aria-labelledby={headingId}
          ref={this.props.ref}
        >
          <div className="my-work" style={{ position: "relative" }}>
            <span className="check-out-my">Check out my</span>{" "}
            <span className="work">work</span>
          </div>
          <ul className="slider__wrapper" style={wrapperTransform}>
            <h3 id={headingId} className="visuallyhidden">
              {heading}
            </h3>

            {slides.map((slide) => {
              return (
                <Slide
                  key={slide.index}
                  slide={slide}
                  current={current}
                  handleSlideClick={this.handleSlideClick}
                />
              );
            })}
          </ul>

          <div className="slider__controls">
            <SliderControl
              type="previous"
              title="Go to previous slide"
              handleHover={this.handleHover}
              handleClick={this.handlePreviousClick}
              handleMouseOut={this.handleMouseOut}
            />

            <SliderControl
              type="next"
              title="Go to next slide"
              handleHover={this.handleHover}
              handleClick={this.handleNextClick}
              handleMouseOut={this.handleMouseOut}
            />
          </div>
        </div>
      </>
    );
  }
}

Carousel.contextType = ViewportContext;
export default Carousel;

import React, { Component } from "react";
import Slide from "./Slide";

const SliderControl = ({ type, title, handleClick }) => {
  return (
    <button className={`btn btn--${type}`} title={title} onClick={handleClick}>
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
    this.handlePreviousClick = this.handlePreviousClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleSlideClick = this.handleSlideClick.bind(this);

    this.slidesRef = React.createRef();
  }

  handlePreviousClick() {
    const previous = this.state.current - 1;

    this.setState({
      current: previous < 0 ? this.props.slides.length - 1 : previous,
    });
  }

  handleNextClick() {
    const next = this.state.current + 1;

    this.setState({
      current: next === this.props.slides.length ? 0 : next,
    });
  }

  handleSlideClick(index) {
    if (this.state.current !== index) {
      this.setState({
        current: index,
      });
    }
  }

  scrollIntoView = () => {
    this.slidesRef.current.scrollIntoView();
  };

  render() {
    const { current, direction } = this.state;
    const { slides, heading } = this.props;
    const headingId = `slider-heading__${heading
      .replace(/\s+/g, "-")
      .toLowerCase()}`;
    const wrapperTransform = {
      transform: `translateX(-${current * (100 / slides.length)}%)`,
    };

    return (
      <div className="slider" aria-labelledby={headingId} ref={this.props.ref}>
        <div className="my-work" style={{ position: "relative" }}>
          <span className="check-out-my">Check out my</span>{" "}
          <span className="work">work</span>
        </div>
        <ul className="slider__wrapper" style={wrapperTransform}>
          <h3 id={headingId} ref={this.slidesRef} class="visuallyhidden">
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
            handleClick={this.handlePreviousClick}
          />

          <SliderControl
            type="next"
            title="Go to next slide"
            handleClick={this.handleNextClick}
          />
        </div>
      </div>
    );
  }
}

export default Carousel;

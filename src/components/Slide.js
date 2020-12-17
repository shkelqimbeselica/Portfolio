import React, { Component } from "react";
import StyledButton from "./StyledButton";

class Slide extends Component {
  constructor(props) {
    super(props);

    this.handleSlideClick = this.handleSlideClick.bind(this);
    this.imageLoaded = this.imageLoaded.bind(this);
    this.slide = React.createRef();
  }

  handleSlideClick(event) {
    this.props.handleSlideClick(this.props.slide.index);
  }

  imageLoaded(event) {
    event.target.style.opacity = 1;
  }

  handleButtonClick = (e) => {
    const link = document.createElement("a");
    link.setAttribute("target", "_blank");
    switch (this.props.slide.headline) {
      case "Balkan Cuisine": {
        link.href = "http://perpetual-agreement.surge.sh/";
        break;
      }
      case "Listify": {
        link.href = "https://shkelqimbeselica.github.io/React-to-do-list/";
        break;
      }
      case "Portfolio": {
        link.href = "http://perpetual-doctor.surge.sh/";
        break;
      }
      default:
        break;
    }

    link.click();
  };

  render() {
    const { src, headline, index } = this.props.slide;
    const current = this.props.current;
    let classNames = "slide";

    if (current === index) classNames += " slide--current";
    else if (current - 1 === index) classNames += " slide--previous";
    else if (current + 1 === index) classNames += " slide--next";

    return (
      <li
        ref={this.slide}
        className={classNames}
        onClick={this.handleSlideClick}
        onMouseMove={this.handleMouseMove}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className="slide__image-wrapper">
          <img
            className="slide__image"
            alt={headline}
            src={src}
            onLoad={this.imageLoaded}
          />
        </div>

        <article className="slide__content">
          <div className="slide__content__container">
            <div className="content__container__left">
              <h2 className="slide__headline">{headline}</h2>
              <p className="role">Front end developer</p>
            </div>
            <div className="content__container__right">
              <StyledButton
                title="View project"
                root="slide-button"
                background="slide-background"
                button="view-project"
                handleButtonClick={this.handleButtonClick}
              />
            </div>
          </div>
        </article>
      </li>
    );
  }
}

export default Slide;

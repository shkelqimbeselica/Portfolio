import React, { Component } from "react";
import SingleNav from "./SingleNav";

import "../stylesheets/Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { active: "Home" };
  }

  scrollToElement = (el) => {
    const element = document.getElementById(el);
    const headerOffset = 120;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;

    document.body.scrollTo(0, offsetPosition);
  };

  handleHover = (e) => {
    e.currentTarget.classList.add("single-nav-expanded");
  };

  loop = (conditional, color) => {
    for (let i = 0; i < conditional.length; i++) {
      conditional[i].style.fill = color;
    }
  };

  handleClick = (obj) => {
    const target = obj.event.currentTarget;
    this.setState({ active: obj.title });

    switch (target.children[1].textContent) {
      case "Home": {
        this.scrollToElement("main");
        break;
      }
      case "Work": {
        this.scrollToElement("slider");
        break;
      }
      case "About": {
        this.scrollToElement("about");
        break;
      }
      case "Contact": {
        this.scrollToElement("contact");
        break;
      }
      default:
        break;
    }
  };

  render() {
    let home = (
      <svg
        width="32px"
        height="32px"
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <title>Artboard</title>
        <g
          id="Artboard"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="Icon-00"
            transform="translate(3.000000, 3.000000)"
            fill="#8989A3"
            fill-rule="nonzero"
          >
            <path
              d="M12.921371,0 L26,10 L26,26 L0,26 L0,10 L12.921371,0 Z M12.928,2.523 L2,10.98 L2,24 L24,24 L24,10.988 L12.928,2.523 Z"
              id="Rectangle"
            ></path>
            <polygon
              id="Path-14-Copy"
              points="11.5 16 11.5 24 9.5 24 9.5 16"
            ></polygon>
            <polygon
              id="Path-14"
              points="17.5 16 17.5 24 15.5 24 15.5 16"
            ></polygon>
            <polygon id="Path" points="16 16 16 18 11 18 11 16"></polygon>
          </g>
        </g>
      </svg>
    );

    let pc = (
      <svg
        width="32px"
        height="32px"
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <title>Artboard</title>
        <g
          id="Artboard"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="Icon-01"
            transform="translate(0.000000, 4.000000)"
            fill="#8989A3"
            fill-rule="nonzero"
          >
            <g
              id="Group-4"
              transform="translate(15.500000, 12.000000) rotate(90.000000) translate(-15.500000, -12.000000) translate(3.500000, -3.500000)"
            >
              <g id="Group-3-Copy" transform="translate(0.000000, 0.024117)">
                <g
                  id="Group"
                  transform="translate(12.000000, 15.000000) rotate(-90.000000) translate(-12.000000, -15.000000) translate(-2.500000, 3.500000)"
                >
                  <path
                    d="M27.5241168,0.5 L27.5241168,17.5 L1.52411684,17.5 L1.52411684,0.5 L27.5241168,0.5 Z M25.5241168,2.5 L3.52411684,2.5 L3.52411684,16.5 L25.5241168,16.5 L25.5241168,2.5 Z"
                    id="Rectangle"
                  ></path>
                  <path
                    d="M29,16.4814815 L29,23 L0,23 L0,16.4814815 L29,16.4814815 Z M27,18.481 L2,18.481 L2,20.999 L27,20.999 L27,18.481 Z"
                    id="Rectangle-Copy-3"
                  ></path>
                  <polygon
                    id="Path-11"
                    points="11 5.58578644 12.4142136 7 9.415 10 12.4142136 13 11 14.4142136 6.58578644 10"
                  ></polygon>
                  <polygon
                    id="Path-11-Copy"
                    transform="translate(19.500000, 10.000000) rotate(-180.000000) translate(-19.500000, -10.000000) "
                    points="21 5.5857864 22.4142136 6.99999996 19.415 9.99999996 22.4142136 13 21 14.4142136 16.5857864 9.99999996"
                  ></polygon>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    );

    let about = (
      <svg
        width="32px"
        height="32px"
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <title>Artboard</title>
        <g
          id="Artboard"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="Icon-02"
            transform="translate(0.500000, 5.000000)"
            fill="#8989A3"
            fill-rule="nonzero"
          >
            <path
              d="M26.5,0 L4.5,0 L4.5,22 L26.5,22 L26.5,0 Z M24.5,2 L24.5,20 L6.5,20 L6.5,2 L24.5,2 Z"
              id="Rectangle"
            ></path>
            <polygon
              id="Path-13-Copy-4"
              points="2.5 7 2.5 14 0.5 14 0.5 7"
            ></polygon>
            <polygon id="Path-13-Copy" points="12 6 12 13 10 13 10 6"></polygon>
            <polygon
              id="Path-13-Copy-2"
              points="21 6 21 13 19 13 19 6"
            ></polygon>
            <polygon
              id="Path-13-Copy-3"
              points="30.5 7 30.5 14 28.5 14 28.5 7"
            ></polygon>
          </g>
        </g>
      </svg>
    );

    let contact = (
      <svg
        width="28px"
        height="21px"
        viewBox="0 0 28 21"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <title>Combined Shape</title>
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="Artboard"
            transform="translate(-2.000000, -6.000000)"
            fill="#8989A3"
            fill-rule="nonzero"
          >
            <g id="Icon-03" transform="translate(2.000000, 6.000000)">
              <path
                d="M27.125,0 L27.125,21 L5.32907052e-15,21 L5.32907052e-15,0 L27.125,0 Z M2,5.431 L2,19 L25.124,19 L25.124,5.549 L13.6363694,13.4647529 L2,5.431 Z M25.124,2 L2,2 L2,3.001 L13.637,11.035 L25.124,3.121 L25.124,2 Z"
                id="Combined-Shape"
              ></path>
            </g>
          </g>
        </g>
      </svg>
    );

    return (
      <div className="navbar">
        <SingleNav
          svg={home}
          handleHover={this.handleHover}
          getActive={this.state.active}
          handleClick={this.handleClick}
          title="Home"
          type="Nav"
        />
        <SingleNav
          svg={pc}
          handleHover={this.handleHover}
          getActive={this.state.active}
          handleClick={this.handleClick}
          title="Work"
          type="Nav"
        />
        <SingleNav
          svg={about}
          handleHover={this.handleHover}
          getActive={this.state.active}
          handleClick={this.handleClick}
          title="About"
          type="Nav"
        />
        <SingleNav
          svg={contact}
          handleHover={this.handleHover}
          getActive={this.state.active}
          handleClick={this.handleClick}
          title="Contact"
          type="Nav"
        />
      </div>
    );
  }
}

export default Navbar;

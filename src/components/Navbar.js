import React, { Component } from "react";
import SingleNav from "./SingleNav";

import "../stylesheets/Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let home = (
      <svg
        width="26px"
        height="26px"
        viewBox="0 0 239 239"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Icon 00</title>
        <g
          id="Icon-00"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="Group-3"
            transform="translate(120.000000, 120.000000) rotate(-360.000000) translate(-120.000000, -120.000000) translate(106.000000, 107.000000)"
            fill="#181824"
            fill-rule="nonzero"
          >
            <g id="Group-17" transform="translate(0.229167, 0.000000)">
              <g id="Group-18" transform="translate(0.770833, 0.000000)">
                <path
                  d="M12.921371,0 L26,10 L26,26 L0,26 L0,10 L12.921371,0 Z M12.928,2.523 L2,10.98 L2,24 L24,24 L24,10.988 L12.928,2.523 Z"
                  id="Rectangle"
                ></path>
                <polygon
                  id="Path-14-Copy"
                  transform="translate(10.500000, 20.000000) rotate(360.000000) translate(-10.500000, -20.000000) "
                  points="11.5 16 11.5 24 9.5 24 9.5 16"
                ></polygon>
                <polygon
                  id="Path-14"
                  transform="translate(16.500000, 20.000000) rotate(360.000000) translate(-16.500000, -20.000000) "
                  points="17.5 16 17.5 24 15.5 24 15.5 16"
                ></polygon>
                <polygon id="Path" points="16 16 16 18 11 18 11 16"></polygon>
              </g>
            </g>
          </g>
        </g>
      </svg>
    );

    return (
      <div className="navbar">
        <SingleNav svg={home} title="Home" />
        <SingleNav svg={home} title="Work" />
        <SingleNav svg={home} title="About" />
        <SingleNav svg={home} title="Contact" />
      </div>
    );
  }
}

export default Navbar;

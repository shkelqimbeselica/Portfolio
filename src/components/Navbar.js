import React, { Component } from "react";
import SingleNav from "./SingleNav";

import "../stylesheets/Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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

  handleClick = (e) => {
    const target = e.currentTarget;
    const allNavs = document.querySelectorAll(".single-nav");
    for (let i = 0; i < allNavs.length; i++) {
      allNavs[i].classList.remove("single-nav-active");
    }
    target.classList.add("single-nav-active");

    // target.children[0].children[0].style.fill = "#181824 !important";

    let link = document.createElement("a");
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
    }
  };

  render() {
    let home = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 26 26"
      >
        <g id="Group_3" data-name="Group 3" transform="translate(-1)">
          <g id="Group_17" data-name="Group 17" transform="translate(0.229)">
            <g id="Group_18" data-name="Group 18" transform="translate(0.771)">
              <g id="Rectangle" fill="none" stroke-miterlimit="10">
                <path d="M0,10,12.921,0,26,10V26H0Z" stroke="none" />
                <path
                  d="M 12.92874622344971 2.523273468017578 L 2 10.98115825653076 L 2 24 L 24 24 L 24 10.98842144012451 L 12.92874622344971 2.523273468017578 M 12.9213695526123 0 L 26 10 L 26 26 L 0 26 L 0 10 L 12.9213695526123 0 Z"
                  stroke="none"
                  fill="#181824"
                />
              </g>
              <path
                id="Path_14_Copy"
                data-name="Path 14 Copy"
                d="M.5,0V8"
                transform="translate(10 16)"
                fill="none"
                stroke="#181824"
                stroke-miterlimit="10"
                stroke-width="2"
              />
              <path
                id="Path_14"
                data-name="Path 14"
                d="M.5,0V8"
                transform="translate(16 16)"
                fill="none"
                stroke="#181824"
                stroke-miterlimit="10"
                stroke-width="2"
              />
              <path
                id="Path"
                d="M0,.5H5"
                transform="translate(11 16.5)"
                fill="none"
                stroke="#181824"
                stroke-miterlimit="10"
                stroke-width="2"
              />
            </g>
          </g>
        </g>
      </svg>
    );

    let pc = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29"
        height="22"
        viewBox="0 0 29 22"
      >
        <g
          id="Group_4"
          data-name="Group 4"
          transform="translate(29.524 -0.5) rotate(90)"
        >
          <g
            id="Group_3_Copy"
            data-name="Group 3 Copy"
            transform="translate(0 0.024)"
          >
            <g id="Group" transform="translate(0.5 29.5) rotate(-90)">
              <g
                id="Rectangle"
                transform="translate(1.657 0)"
                fill="none"
                stroke="#8989a3"
                stroke-miterlimit="10"
                stroke-width="2"
              >
                <rect width="25.686" height="19.556" stroke="none" />
                <rect x="1" y="1" width="23.686" height="17.556" fill="none" />
              </g>
              <g
                id="Rectangle_Copy_3"
                data-name="Rectangle Copy 3"
                transform="translate(0 15.481)"
                fill="#222234"
                stroke="#8989a3"
                stroke-miterlimit="10"
                stroke-width="2"
              >
                <rect width="29" height="6.519" stroke="none" />
                <rect x="1" y="1" width="27" height="4.519" fill="none" />
              </g>
              <path
                id="Path_11"
                data-name="Path 11"
                d="M3,0,0,3,3,6"
                transform="translate(8 6)"
                fill="none"
                stroke="#8989a3"
                stroke-linecap="square"
                stroke-miterlimit="10"
                stroke-width="2"
              />
              <path
                id="Path_11_Copy"
                data-name="Path 11 Copy"
                d="M3,0,0,3,3,6"
                transform="translate(21 12) rotate(-180)"
                fill="none"
                stroke="#8989a3"
                stroke-linecap="square"
                stroke-miterlimit="10"
                stroke-width="2"
              />
            </g>
          </g>
        </g>
      </svg>
    );

    let about = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="22"
        viewBox="0 0 30 22"
      >
        <g id="Group_8" data-name="Group 8" transform="translate(0.5)">
          <g id="Group_6" data-name="Group 6">
            <g
              id="Rectangle"
              transform="translate(3.5)"
              fill="none"
              stroke="#8989a3"
              stroke-miterlimit="10"
              stroke-width="2"
            >
              <rect width="22" height="22" stroke="none" />
              <rect x="1" y="1" width="20" height="20" fill="none" />
            </g>
            <path
              id="Path_13_Copy_4"
              data-name="Path 13 Copy 4"
              d="M.5,0V7"
              transform="translate(0 7)"
              fill="none"
              stroke="#8989a3"
              stroke-miterlimit="10"
              stroke-width="2"
            />
            <path
              id="Path_13_Copy"
              data-name="Path 13 Copy"
              d="M.5,0V7"
              transform="translate(9.5 6)"
              fill="none"
              stroke="#8989a3"
              stroke-miterlimit="10"
              stroke-width="2"
            />
            <path
              id="Path_13_Copy_2"
              data-name="Path 13 Copy 2"
              d="M.5,0V7"
              transform="translate(18.5 6)"
              fill="none"
              stroke="#8989a3"
              stroke-miterlimit="10"
              stroke-width="2"
            />
            <path
              id="Path_13_Copy_3"
              data-name="Path 13 Copy 3"
              d="M.5,0V7"
              transform="translate(28 7)"
              fill="none"
              stroke="#8989a3"
              stroke-miterlimit="10"
              stroke-width="2"
            />
          </g>
        </g>
      </svg>
    );

    let contact = (
      <svg
        id="Group_3"
        data-name="Group 3"
        xmlns="http://www.w3.org/2000/svg"
        width="27.125"
        height="21"
        viewBox="0 0 27.125 21"
      >
        <g
          id="Rectangle"
          fill="none"
          stroke="#8989a3"
          stroke-miterlimit="10"
          stroke-width="2"
        >
          <rect width="27.125" height="21" stroke="none" />
          <rect x="1" y="1" width="25.125" height="19" fill="none" />
        </g>
        <path
          id="Path_10"
          data-name="Path 10"
          d="M0,0,12.674,8.75,25.375,0"
          transform="translate(0.962 3.5)"
          fill="none"
          stroke="#8989a3"
          stroke-miterlimit="10"
          stroke-width="2"
        />
      </svg>
    );

    return (
      <div className="navbar">
        <SingleNav
          svg={home}
          handleHover={this.handleHover}
          handleClick={this.handleClick}
          title="Home"
        />
        <SingleNav
          svg={pc}
          handleHover={this.handleHover}
          handleClick={this.handleClick}
          title="Work"
        />
        <SingleNav
          svg={about}
          handleHover={this.handleHover}
          handleClick={this.handleClick}
          title="About"
        />
        <SingleNav
          svg={contact}
          handleHover={this.handleHover}
          handleClick={this.handleClick}
          title="Contact"
        />
      </div>
    );
  }
}

export default Navbar;

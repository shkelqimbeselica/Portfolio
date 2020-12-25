import React, { useState } from "react";
import SingleNav from "./SingleNav";

import style from "../stylesheets/Footer.module.css";
import "../stylesheets/Body.css";

const Footer = (props) => {
  const [hover, setHover] = useState("");

  const handleHover = (e) => {
    e.preventDefault();
    setHover(e.currentTarget.children[1].textContent);
    return;
  };

  const handleClick = (e, data) => {
    const link = document.createElement("a");
    link.setAttribute("target", "_blank");
    switch (data) {
      case "LinkedIn": {
        link.href =
          "https://www.linkedin.com/in/shk%C3%ABlqim-beselica-17935b15a/";
        link.click();
        break;
      }
      case "Email": {
        link.href = "mailto:beselicashkelqim@gmail.com";
        link.click();
        break;
      }
      case "Instagram": {
        link.href = "https://www.instagram.com/chimche/";
        link.click();
      }
      default:
        break;
    }
  };

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
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Artboard"
          transform="translate(-2.000000, -6.000000)"
          fill={hover === "Email" ? "white" : "#8989A3"}
          fillRule="nonzero"
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

  let linkedin = (
    <svg
      width="28px"
      height="28px"
      viewBox="0 0 18 18"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>logo-linkedin</title>
      <desc>Created with Sketch.</desc>
      <g
        id="Page-1-Copy"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Desktop-Copy-15"
          transform="translate(-643.000000, -3217.000000)"
          fill={hover === "LinkedIn" ? "white" : "#8989A3"}
          fillRule="nonzero"
        >
          <g id="Footer" transform="translate(90.000000, 3090.000000)">
            <g id="Social" transform="translate(266.000000, 120.000000)">
              <g id="Group-9" transform="translate(280.000000, 0.000000)">
                <g id="logo-linkedin" transform="translate(7.000000, 7.000000)">
                  <path
                    d="M17.5,17.5 L13.9,17.5 L13.9,11.9 C13.9,10.6 13.9,8.9 12.1,8.9 C10.2,8.9 10,10.3 10,11.8 L10,17.5 L6.4,17.5 L6.4,6 L9.8,6 L9.8,7.6 L9.8,7.6 C10.3,6.7 11.4,5.8 13.2,5.8 C16.8,5.8 17.5,8.2 17.5,11.3 L17.5,17.5 Z"
                    id="Path"
                  ></path>
                  <polygon
                    id="Path"
                    points="4.1 17.5 0.6 17.5 0.6 6 4.2 6 4.2 17.5"
                  ></polygon>
                  <path
                    d="M2.3,4.4 C1.2,4.4 0.2,3.5 0.2,2.3 C0.2,1.2 1.1,0.2 2.3,0.2 C3.4,0.2 4.4,1.1 4.4,2.3 C4.4,3.5 3.5,4.4 2.3,4.4 Z"
                    id="Path"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );

  let instagram = (
    <svg
      width="28px"
      height="28px"
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <title>logo-instagram</title>
      <desc>Created with Sketch.</desc>
      <g
        id="Page-1-Copy"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Desktop-Copy-15"
          transform="translate(-474.000000, -3216.000000)"
          fill={hover === "Instagram" ? "white" : "#8989A3"}
          fillRule="nonzero"
        >
          <g id="Footer" transform="translate(90.000000, 3090.000000)">
            <g id="Social" transform="translate(266.000000, 120.000000)">
              <g id="Group-6" transform="translate(112.000000, 0.000000)">
                <g
                  id="logo-instagram"
                  transform="translate(6.000000, 6.000000)"
                >
                  <path
                    d="M10,1.80166667 C12.67,1.80166667 12.9866667,1.81166667 14.0408333,1.86 C15.1791667,1.91166667 16.235,2.14 17.0475,2.9525 C17.86,3.765 18.0883333,4.82083333 18.14,5.95916667 C18.1883333,7.01333333 18.1983333,7.33 18.1983333,10 C18.1983333,12.67 18.1883333,12.9866667 18.14,14.0408333 C18.0883333,15.1791667 17.86,16.235 17.0475,17.0475 C16.235,17.86 15.1791667,18.0883333 14.0408333,18.14 C12.9866667,18.1883333 12.67,18.1983333 10,18.1983333 C7.33,18.1983333 7.01333333,18.1883333 5.95916667,18.14 C4.82083333,18.0883333 3.765,17.86 2.9525,17.0475 C2.14,16.235 1.91166667,15.1791667 1.86,14.0408333 C1.81166667,12.9866667 1.80166667,12.67 1.80166667,10 C1.80166667,7.33 1.81166667,7.01333333 1.86,5.95916667 C1.91166667,4.82083333 2.14,3.765 2.9525,2.9525 C3.765,2.14 4.82083333,1.91166667 5.95916667,1.86 C7.01333333,1.81166667 7.33,1.80166667 10,1.80166667 L10,1.80166667 Z M10,0 C7.28416667,0 6.94333333,0.0116666667 5.87666667,0.06 C4.25166667,0.134166667 2.82416667,0.5325 1.67833333,1.67833333 C0.5325,2.82416667 0.134166667,4.25166667 0.06,5.87666667 C0.0116666667,6.94333333 0,7.28416667 0,10 C0,12.7158333 0.0116666667,13.0566667 0.06,14.1233333 C0.134166667,15.7483333 0.5325,17.1758333 1.67833333,18.3216667 C2.82416667,19.4675 4.25166667,19.8658333 5.87666667,19.94 C6.94333333,19.9883333 7.28416667,20 10,20 C12.7158333,20 13.0566667,19.9883333 14.1233333,19.94 C15.7483333,19.8658333 17.1758333,19.4675 18.3216667,18.3216667 C19.4675,17.1758333 19.8658333,15.7483333 19.94,14.1233333 C19.9883333,13.0566667 20,12.7158333 20,10 C20,7.28416667 19.9883333,6.94333333 19.94,5.87666667 C19.8658333,4.25166667 19.4675,2.82416667 18.3216667,1.67833333 C17.1758333,0.5325 15.7483333,0.134166667 14.1233333,0.06 C13.0566667,0.0116666667 12.7158333,0 10,0 L10,0 Z"
                    id="Shape"
                  ></path>
                  <path
                    d="M10,4.865 C7.16416667,4.865 4.865,7.16416667 4.865,10 C4.865,12.8358333 7.16416667,15.135 10,15.135 C12.8358333,15.135 15.135,12.8358333 15.135,10 C15.135,7.16416667 12.8358333,4.865 10,4.865 Z M10,13.3333333 C8.15916667,13.3333333 6.66666667,11.8408333 6.66666667,10 C6.66666667,8.15916667 8.15916667,6.66666667 10,6.66666667 C11.8408333,6.66666667 13.3333333,8.15916667 13.3333333,10 C13.3333333,11.8408333 11.8408333,13.3333333 10,13.3333333 Z"
                    id="Shape"
                  ></path>
                  <circle
                    id="Oval"
                    cx="15.3383333"
                    cy="4.66166667"
                    r="1.2"
                  ></circle>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );

  return (
    <>
      <footer className={style.footer} id="contact">
        <div className={style.container}>
          <div className={style.main}>
            <div className={style.name}>
              <h1 className={style.heading}>
                Shkëlqim <span style={{ color: "#8989A3" }}>beselica</span>
              </h1>
            </div>
            <div className={style.socialMedias}>
              <SingleNav
                margin="0px"
                title="Email"
                type="Footer"
                className="footer-single-nav"
                svg={contact}
                handleClick={(e) => handleClick(e, "Email")}
                handleHover={handleHover}
                handleBlur={(e) => {
                  e.preventDefault();
                  setHover("");
                }}
              />
              <SingleNav
                margin="0px"
                svg={linkedin}
                title="LinkedIn"
                type="Footer"
                className="footer-single-nav"
                handleClick={(e) => handleClick(e, "LinkedIn")}
                handleHover={handleHover}
                handleBlur={(e) => {
                  e.preventDefault();
                  setHover("");
                }}
              />
              <SingleNav
                margin="0px"
                svg={instagram}
                title="Instagram"
                type="Footer"
                className="footer-single-nav"
                handleClick={(e) => handleClick(e, "Instagram")}
                handleHover={handleHover}
                handleBlur={(e) => {
                  e.preventDefault();
                  setHover("");
                }}
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

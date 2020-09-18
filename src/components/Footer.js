import React from "react";
import SingleNav from "./SingleNav";

import style from "../stylesheets/Footer.module.css";

const Footer = (props) => {
  const handleHover = (e) => {
    e.preventDefault();
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
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="Artboard"
          transform="translate(-2.000000, -6.000000)"
          fill="#181824"
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
                svg={contact}
                handleHover={handleHover}
                handleClick={(e) => handleClick(e, "FB")}
                title="Contact"
              />
              <SingleNav
                margin="0px"
                title="Fb"
                handleClick={(e) => handleClick(e, "FB")}
                handleHover={handleHover}
              />
              <SingleNav
                margin="0px"
                title="Fb"
                handleClick={(e) => handleClick(e, "MSG")}
                handleHover={handleHover}
              />
            </div>
          </div>
        </div>
      </footer>
      {/* <div className={style.footerSvg}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1956"
          height="1843.124"
          viewBox="0 0 1956 1843.124"
        >
          <path
            id="Polygon_Copy_5"
            data-name="Polygon Copy 5"
            d="M838.674,0,1956,1162.538l-542.749,680.586h-870.5L0,1162.538,193.7,313.861Z"
            fill="#0a0a14"
            opacity="0.6"
          />
        </svg>
      </div> */}
    </>
  );
};

export default Footer;

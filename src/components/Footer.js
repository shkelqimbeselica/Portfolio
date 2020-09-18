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
                // type="footer"
                handleClick={(e) => handleClick(e, "LinkedIn")}
                handleHover={handleHover}
              />
              <SingleNav
                margin="0px"
                // type="footer"
                handleClick={(e) => handleClick(e, "FB")}
                handleHover={handleHover}
              />
              <SingleNav
                margin="0px"
                // type="footer"
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

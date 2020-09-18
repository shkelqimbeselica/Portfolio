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
      }
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
    </>
  );
};

export default Footer;

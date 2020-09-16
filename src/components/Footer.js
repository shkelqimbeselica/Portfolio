import React from "react";
import SingleNav from "./SingleNav";

import style from "../stylesheets/Footer.module.css";

const Footer = (props) => {
  const handleHover = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <footer className={style.footer}>
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
                handleClick={handleHover}
                handleHover={handleHover}
              />
              <SingleNav
                margin="0px"
                handleClick={handleHover}
                handleHover={handleHover}
              />
              <SingleNav
                margin="0px"
                handleClick={handleHover}
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

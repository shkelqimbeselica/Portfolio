import React from "react";

import "../stylesheets/Main.css";

const StyledButton = (props) => {
  const handleButtonClick = (e) => {
    let target = e.currentTarget;
    target.classList.add("clicked-button");
    setTimeout(() => {
      target.classList.remove("clicked-button");
    }, 100);
    props.handleButtonClick(e);
  };

  const onMouseOver = (e) => {
    const target = e.currentTarget;
    // target.classList.remove("clicked-button");
  };

  const onMouseOut = (e) => {
    const target = e.currentTarget;
    // target.classList.add("clicked-button");
  };

  return (
    <div className={props.root}>
      <div className={props.background}></div>
      <button
        className={props.button}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        onClick={handleButtonClick}
      >
        {props.title}
      </button>
    </div>
  );
};

export default StyledButton;

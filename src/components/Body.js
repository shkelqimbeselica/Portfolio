import React from "react";
import "../stylesheets/Body.css";

const Body = (props) => {
  return <div className="body">{props.children}</div>;
};

export default Body;

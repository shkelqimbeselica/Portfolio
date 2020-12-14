import React, { useState, useEffect } from "react";
import Body from "./components/Body";
import Main from "./components/Main";
import About from "./components/About";
import Footer from "./components/Footer";

import "./stylesheets/Responsive.css";

function App() {
  const [size, setSize] = useState("PC");

  // useEffect(() => {
  //   if (window.innerHeight <= 480 || window.innerWidth <= 640) {
  //     setSize("Mobile");
  //   }
  // }, []);

  const render = () => {
    // if (size === "Mobile") {
    //   return <ComingSoon />;
    // }

    return (
      <>
        <Main />
        <About />
        <Footer />
      </>
    );
  };

  return (
    <div className="App" style={{ height: "100%" }}>
      <Body size={size}>{render()}</Body>
    </div>
  );
}

export default App;

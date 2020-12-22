import React, { useState, useEffect, useContext } from "react";
import Body from "./components/Body";
import Main from "./components/Main";
import About from "./components/About";
import Footer from "./components/Footer";

import { ViewportContext } from "./context/ViewportContext";

// Stylesheets

import "./stylesheets/Responsive.css";
import "./stylesheets/About.css";
import "./stylesheets/Body.css";
import "./stylesheets/Header.css";
import "./stylesheets/Main.css";
import "./stylesheets/Navbar.css";

function App() {
  const [size, setSize] = useState("PC");
  // const ViewportContext = useContext("Desktop");

  useEffect(() => {
    if (window.innerHeight <= 480 || window.innerWidth <= 640) {
      setSize("Mobile");
    }
  }, []);

  const render = () => {
    return (
      <>
        <ViewportContext.Provider value={size}>
          <Main />
          <About />
          <Footer />
        </ViewportContext.Provider>
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

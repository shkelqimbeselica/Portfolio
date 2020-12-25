import React, { useState, useEffect, useContext, Component } from "react";
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

class App extends Component {
  state = { size: "PC" };

  componentDidMount() {
    if (window.innerHeight <= 480 || window.innerWidth <= 640) {
      this.setState({ size: "Mobile" });
    }
  }

  renderLayout() {
    return (
      <>
        <ViewportContext.Provider value={this.state.size}>
          <Main />
          <About />
          <Footer />
        </ViewportContext.Provider>
      </>
    );
  }

  render() {
    return (
      <div className="App" style={{ height: "100%" }}>
        <Body size={this.state.size}>{this.renderLayout()}</Body>
      </div>
    );
  }
}

export default App;

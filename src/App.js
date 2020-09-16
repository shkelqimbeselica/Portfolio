import React from "react";
import Body from "./components/Body";
import Main from "./components/Main";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Body>
        <Main />
        <About />
        <Footer />
      </Body>
    </div>
  );
}

export default App;

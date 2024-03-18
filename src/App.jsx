import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Wrapper from "./components/Wrapper";
// import Starred from "./components/Starred/starred";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Wrapper />}></Route>
          {/* <Route exact path="/starred" element={<Starred />}></Route> */}
          {/* <Route exact path="/contact" element={<Contact />}></Route> */}
        </Routes>
      </Router>
    );
  }
}

export default App;

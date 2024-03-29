import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Starred from "./components/starred/Starred";
import Test from "./components/test";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Wrapper />} />
          <Route exact path="/starred" element={<Starred />} />
          <Route exact path="/next-page" element={<Test />} />
          {/* <Route exact path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    );
  }
}

export default App;
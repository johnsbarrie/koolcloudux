import React from "react";
import { Component } from "react";
import logo from '../image/kool-cloud-logo.png';

class Signin extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
          <h1 className="App-title">Signin</h1>
      </div>
    );
  }
}

export default Signin

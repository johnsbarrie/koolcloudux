import React from "react";
import { Component } from "react";
import logo from '../image/kool-cloud-logo.png';

class Project extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Project Breadcrumb</h1>
        </header>
      </div>
    );
  }
}

export default Project

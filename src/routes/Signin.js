import React from "react";
import { Component } from "react";
import logo from '../image/kool-cloud-logo.png';
import ProjectsTable from "../component/ProjectsTable"

class Signin extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Signin</h1>
        </header>
        <ProjectsTable/>
      </div>
    );
  }
}

export default Signin

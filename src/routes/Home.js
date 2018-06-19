import React from "react";
import { Component } from "react";
import logo from '../image/kool-cloud-logo.png';
import ProjectsTable from "../component/ProjectsTable"
import ProjectInfo from "../component/ProjectInfo"
import ProjectSearch from "../component/ProjectSearch"

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Kool Cloud</h1>
        </header>
        <ProjectSearch/>
        <ProjectsTable/>
        <ProjectInfo/>
      </div>
    );
  }
}

export default Home

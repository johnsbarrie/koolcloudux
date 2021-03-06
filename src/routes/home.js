import React from "react";
import { Component } from "react";
import logo from '../image/kool-cloud-logo.png';
import ProjectsTable from "../component/projects-table"
import ProjectInfo from "../component/project-info"
import ProjectSearch from "../component/project-search"

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

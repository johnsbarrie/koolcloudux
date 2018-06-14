import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './page/Home'
import Project from './page/Project'
import NotFound from './page/NotFound'
import './App.css';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/project/:id" component={Project} />
      <Route path="/signin" component={Home} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);

export default App;

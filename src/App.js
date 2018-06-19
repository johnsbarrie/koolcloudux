import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from 'semantic-ui-react'
import Home from './routes/Home'
import Project from './routes/Project'
import NotFound from './routes/NotFound'
import './App.css';

const App = () => (
  <Container>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/project/:id" component={Project} />
        <Route path="/signin" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  </Container>
);

export default App;

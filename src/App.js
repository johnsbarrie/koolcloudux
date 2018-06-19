import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Container } from 'semantic-ui-react'
import Home from './routes/Home'
import Project from './routes/Project'
import Signin from './routes/Signin'
import Signup from './routes/Signup'

import NotFound from './routes/NotFound'
import './App.css';

const loggedIn = () => {
  return false;
}

const loginSwitch = () => (
  loggedIn() ? (
    <Home/>
  ) : (
    <Redirect to="/signin"/>
  )
)

const App = () => (
  <Container>
    <Router>
      <Switch>
        <Route exact path="/" 
        render={ loginSwitch }/>
        <Route path="/project/:id" component={Project} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  </Container>
);

export default App;

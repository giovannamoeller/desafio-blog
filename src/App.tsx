import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import Description from './pages/Details';
import Users from './pages/Users';
import GlobalStyle from './globalStyle';

function App() {
  return (
    <>
    <GlobalStyle/>
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/details/:id" component={Description}/>
        <Route path="/users" component={Users}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;

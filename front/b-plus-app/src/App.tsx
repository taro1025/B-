import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { TopPage } from "./containers/TopPage";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
        >
          <TopPage></TopPage>
        </Route>

        <Redirect to="/" />

      </Switch>
    </Router>
  );
}

export default App;

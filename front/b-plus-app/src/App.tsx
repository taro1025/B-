import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { Layout } from "./containers/Layout"
import { TopPage } from "./containers/TopPage";


const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route
            exact
            path="/"
          >
            <TopPage></TopPage>
          </Route>

          <Redirect to="/" />

        </Switch>
      </Layout>
    </Router>
  );
}

export default App;

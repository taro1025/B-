import React, { useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { Layout } from "./containers/Layout"
import { TopPage } from "./containers/TopPage";
import { Login } from "./containers/Login"
import { Search } from "./containers/Search"
import { DetailBook } from "./containers/DetailBook"
import { BookManager } from "./containers/BookManager"
import { IState } from "./interfaces"

import { checkLoginStatus } from "./apis/checkLoginStatus"


export const User = React.createContext({})


const App: React.FC = () => {

  const [loggedInStatus, setLoggedInStatus] = useState(false)
  const [user, setUser] = useState<IState | undefined>()
  const [books, setBooks] = useState<any>()

  const loginAction = (props: any, data: any) => {
    //set State of Login
    setLoggedInStatus(true)
    setUser(data.user)
    //jump to top
    props.history.push("/")
  }

  useEffect(() => {
    checkLoginStatus(loggedInStatus, setLoggedInStatus, setUser);
  })

  console.log("user", user)
  return (
    <Router>
      <Layout>
        <Switch>

          <Route exact path="/">
            <TopPage
              user={user}
            //setUser={setUser}
            ></TopPage>
          </Route>

          <Route exact path="/book_manager">
            <BookManager></BookManager>
          </Route>

          <Route
            exact
            path="/search"
            render={props =>
              <Search
                {...props}
                books={books}
                setBooks={setBooks}
              />
            }
          />


          <Route
            exact
            path="/book/:id"
            render={props =>
              <User.Provider value={{ user }}>
                <DetailBook
                  {...props}
                  books={books}
                  setBooks={setBooks}
                />
              </User.Provider>
            }
          />

          <Route
            exact
            path="/login"
            render={props =>
              <Login
                {...props}
                loginAction={loginAction}
                loggedInStatus={loggedInStatus}
              />
            }
          />

          <Redirect to="/" />

        </Switch>
      </Layout >
    </Router >
  );
}

export default App;

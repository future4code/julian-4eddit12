import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";
import { Feed } from "./pages/Feed";
import { SignUp } from "./pages/SignUp";
import { Comments } from "./pages/Comments";
import ErrorScreen from "./pages/Error";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/home">
            <Feed />
          </Route>
          <Route exact path="/">
            <Feed />
          </Route>
          <Route exact path="/comment/:postID">
            <Comments />
          </Route>
          <Route path="/">
            <ErrorScreen />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

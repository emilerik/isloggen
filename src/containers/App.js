import React, { Component } from "react";
import Header from "../components/Header/Header";
import HeaderAuth from "../components/Header/HeaderAuth";
import Posts from "../components/Posts/Posts";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Profile from "../components/Profile/Profile";
// eslint-disable-next-line
import TestComponent from "./TestComponent";
import "./App.css";
import "tachyons";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="avenir App flex flex-column items-center">
      <BrowserRouter>
        <HeaderAuth />
        <Switch>
          <Route path="/" exact render={() => <Posts />} />
          <PrivateRoute path="/profile" render={() => <Profile />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

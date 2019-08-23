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

const initialState = {
  isLoggedIn: false,
  user: {
    id: "",
    name: "",
    email: "",
    postcount: 0
  },
  route: "home"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  onLogin = user => {
    this.setState({
      isLoggedIn: true,
      user: user
    });
  };

  onLogout = () => {
    this.setState(initialState);
  };

  onRouteChange = route => {
    this.setState({ route: route });
  };

  render() {
    return (
      <div className="avenir App flex flex-column items-center">
        <BrowserRouter>
          <HeaderAuth
            onLogin={this.onLogin}
            onLogout={this.onLogout}
            onRouteChange={this.onRouteChange}
            user_id={this.state.user.id}
          />
          <Switch>
            <Route path="/" exact render={() => <Posts user_id="7" />} />
            <PrivateRoute
              path="/profile"
              render={() => <Profile user={this.state.user} />}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

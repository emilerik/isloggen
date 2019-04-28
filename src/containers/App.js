import React, { Component } from "react";
import Header from "../components/Header/Header";
import Posts from "../components/Posts/Posts";
// eslint-disable-next-line
import TestComponent from "./TestComponent";
import "./App.css";
import "tachyons";

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
        <Header
          onLogin={this.onLogin}
          onLogout={this.onLogout}
          onRouteChange={this.onRouteChange}
          isLoggedIn={this.state.isLoggedIn}
          user_id={this.state.user.id}
        />
        {this.state.route === "home" ? (
          <div className="w-50 pa2">
            <Posts />
          </div>
        ) : this.state.route === "profile" ? (
          <div />
        ) : null}
      </div>
    );
  }
}

export default App;

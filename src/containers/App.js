import React, { Component } from "react";
import Header from "../components/Header/Header";
import Posts from "../components/Posts/Posts";
import NewPost from "../components/NewPost/NewPost";
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
  route: "loggedOut"
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

  onRouteChange = route => {
    this.setState({ route: route });
    if (route === "logout") {
      this.setState(initialState);
    }
  };

  render() {
    return (
      <div className="App flex flex-column items-center">
        <Header
          onLogin={this.onLogin}
          isLoggedIn={this.state.isLoggedIn}
          onRouteChange={this.onRouteChange}
        />
        <div className="w-50 pa2">
          {this.state.isLoggedIn ? (
            //console.log(this.state)
            <NewPost user_id={this.state.user.id} />
          ) : null}
          <Posts />
          <TestComponent user_id={this.state.user.id} />
        </div>
      </div>
    );
  }
}

export default App;

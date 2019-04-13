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
  }
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

  render() {
    return (
      <div className="App flex flex-column items-center">
        <Header onLogin={this.onLogin} />
        <div className="w-40 pa2">
          {this.state.isLoggedIn ? (
            //console.log(this.state)
            <NewPost user_id={this.state.user.id} />
          ) : null}
          <Posts />
          <TestComponent />
        </div>
      </div>
    );
  }
}

export default App;

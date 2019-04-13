import React, { Component } from "react";
import Header from "../components/Header/Header";
import Posts from "../components/Posts/Posts";
import NewPost from "../components/NewPost/NewPost";
import TestComponent from "./TestComponent";
import "./App.css";
import "tachyons";
import { Form } from "semantic-ui-react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    });
  };

  render() {
    return (
      <div className="App flex flex-column items-center">
        <Header onLogin={this.onLogin} />
        <div className="w-40 pa2">
          {this.state.isLoggedIn ? <NewPost /> : null}
          <Posts />
          <TestComponent />
        </div>
      </div>
    );
  }
}

export default App;

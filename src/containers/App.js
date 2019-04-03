import React, { Component } from "react";
import Header from "../components/Header/Header";
import Posts from "../components/Posts/Posts";
import NewPost from "../components/NewPost/NewPost";
import "./App.css";
import "tachyons";

class App extends Component {
  render() {
    return (
      <div className="App flex flex-column items-center">
        <Header />
        <div className="w-40 pa2">
          <NewPost />
          <Posts />
        </div>
      </div>
    );
  }
}

export default App;

import React, {Component} from "react";
import HeaderAuth from "../components/Header/HeaderAuth";
import Home from "../components/Home/Home";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Profile from "../components/Profile/Profile";
// eslint-disable-next-line
import TestComponent from "./TestComponent";
import "./App.css";
import "tachyons";
import {BrowserRouter, Route, Switch} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div className="avenir App flex flex-column items-center">
                <BrowserRouter>
                    <HeaderAuth/>
                    <Switch>
                        <Route path="/" exact render={() => <Home/>}/>
                        <PrivateRoute path="/profile" render={() => <Profile/>}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
};

export default App;

import React from "react";
import SignIn from "../SignIn/SignIn";
import Register from "../Register/Register";
import "./Header.css";

const Header = ({ onLogin, isLoggedIn, onRouteChange }) => {
  console.log(onRouteChange);
  return (
    <header className="w-100 white pa3 ph5 pv2 mh2 mt2">
      <div>
        {isLoggedIn ? (
          <p
            className="w-third fr f4 pointer white pa3 tr"
            onClick={() => onRouteChange("logout")}
          >
            Logga ut
          </p>
        ) : (
          <div className="w-third fr flex flex-wrap justify-end pa3 ma0">
            <SignIn onLogin={onLogin} onRouteChange={onRouteChange} />
            <Register />
          </div>
        )}
      </div>
      <div className="w-third fr f1 pa3 tc">❄ Isinfo ❄</div>
    </header>
  );
};

export default Header;

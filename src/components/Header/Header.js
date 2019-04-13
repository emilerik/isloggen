import React from "react";
import SignIn from "../SignIn/SignIn";
import Register from "../Register/Register";
import "./Header.css";

const Header = ({ onLogin, isLoggedIn, onRouteChange }) => {
  console.log(onRouteChange);
  return (
    <header className="flex justify-between items-center w-100 white">
      <div className="f1 pa3 pl5">❄ Isinfo ❄</div>
      {isLoggedIn ? (
        <p
          className="f4 pointer white ma0 pa3 pr5"
          onClick={() => onRouteChange("logout")}
        >
          Logga ut
        </p>
      ) : (
        <div className="flex flex-wrap ma0 pa3 pr5 fns">
          <SignIn onLogin={onLogin} onRouteChange={onRouteChange} />
          <Register />
        </div>
      )}
    </header>
  );
};

export default Header;

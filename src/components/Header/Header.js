import React from "react";
import SignIn from "../SignIn/SignIn";
import Register from "../Register/Register";
import "./Header.css";

const Header = ({ onLogin }) => {
  return (
    <header className="flex justify-between items-center w-100 white">
      <div className="f1 pa3 pl5">❄ Isinfo ❄</div>
      <div className="flex flex-wrap ma0 pa3 pr5 fns">
        <SignIn onLogin={onLogin} />
        <Register />
      </div>
    </header>
  );
};

export default Header;

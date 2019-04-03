import React from "react";
import SignIn from "../SignIn/SignIn";
import Register from "../Register/Register";
import "./Header.css";

const Header = () => {
  return (
    <header className="flex justify-between items-center w-70 white">
      <div className="f2 ph4 pv2">❄ Isinfo ❄</div>
      <div className="flex flex-wrap ma0 ph2">
        <SignIn />
        <Register />
      </div>
    </header>
  );
};

export default Header;

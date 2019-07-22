import React from "react";
import SignIn from "../SignIn/SignIn";
import Register from "../Register/Register";
import "./HeaderAuth.css";
import NewPost from "../NewPost/NewPost";
import Nav from "react-bootstrap/Nav";
import { useAuth0 } from "../../react-auth0-wrapper";

const Header = ({ onLogout, onLogin, isLoggedIn, onRouteChange, user_id }) => {
  console.log(onRouteChange);

  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <header
      className="w-100 white pa3 ph5 mh2 mt0 mb2 h-ns"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
    >
      <div>
        {isAuthenticated ? (
          <div className="w-third fr flex items-center justify-end ph3 ma0">
            <NewPost user_id={user_id} />
            <p className="ph3 f4 pointer" onClick={() => logout()}>
              Logga ut
            </p>
          </div>
        ) : (
          <div className="w-third fr flex justify-end pa3 ma0">
            <button onClick={() => loginWithRedirect({})}>Log in</button>
            <Register />
          </div>
        )}
      </div>
      <div
        className="w-third fr f2 pa3 tc pointer"
        onClick={() => onRouteChange("home")}
      >
        ❄ Isinfo ❄
      </div>
      {isAuthenticated && (
        <div className="w-third fr flex items-center justify-start pa3 ma0">
          <p
            href="/#"
            className="ph3 f4 pointer ma0"
            onClick={() => onRouteChange("home")}
          >
            Hem
          </p>
          <p
            className="ph3 f4 pointer ma0"
            onClick={() => onRouteChange("profile")}
          >
            Min profil
          </p>
        </div>
      )}
    </header>
  );
};

export default Header;

import React from "react";
import SignIn from "../SignIn/SignIn";
import Register from "../Register/Register";
import "./HeaderAuth.css";
import NewPost from "../NewPost/NewPost";
import Nav from "react-bootstrap/Nav";
import { useAuth0 } from "../../react-auth0-wrapper";
import { Link } from "react-router-dom";

const Header = () => {
  const { isAuthenticated, loginWithRedirect, loginWithPopup, logout, loading, user } = useAuth0();

  console.log("USEAUTH0: ");
  console.log(useAuth0());

  if (isAuthenticated) {
    console.log(user);
  }

  return (
    <header
      className="w-100 white pa3 ph5 mh2 mt0 mb2 h-ns"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
    >
      <div>
        {(isAuthenticated && !loading) ? (
          <div className="w-third fr flex items-center justify-end ph3 ma0">
            <NewPost user_email={user.email} />
            <p className="ph3 f4 pointer" onClick={() => logout()}>
              Logga ut
            </p>
          </div>
        ) : (
          <div className="w-third fr flex justify-end pa3 ma0">
            <p
              className="ph3 f4 pointer ma0"
              onClick={() => loginWithRedirect({})}
            >
              Logga in
            </p>
            <Register />
          </div>
        )}
      </div>
      <Link to="/">
        <div className="w-third fr f2 pa3 tc white ma0">❄ Isinfo ❄</div>
      </Link>
      {isAuthenticated && (
        <div className="w-third fr flex items-center justify-start pa3 ma0">
          <Link to="/">
            <p className="ph3 f4 ma0 white">Hem</p>
          </Link>
          <Link to="/profile">
            <p className="ph3 f4 ma0 white">Min profil</p>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;

import React, { useState, useEffect } from "react";
import LoginOrRegister from "../LoginOrRegister/LoginOrRegister";
import "./HeaderAuth.css";
import NewPost from "../NewPost/NewPost";
import Nav from "react-bootstrap/Nav";
import { useAuth0 } from "../../react-auth0-wrapper";
import { Link } from "react-router-dom";
import MenuSymbol from "../../assets/menu-icon.png";

const LoggedinMenu = () => {
  const { logout, user } = useAuth0();
  return (
    <div className="fr items-center ma0">
      <Link to="/profile" className="ph3 f4 ma0 white">
        Min profil
      </Link>
      <NewPost user_email={user.email} />
      <div className="ph3 f4 pointer" onClick={() => logout()}>
        Logga ut
      </div>
    </div>
  );
};

const LoggedoutMenu = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="flex justify-end pa3 ma0">
      {/* Show Login and Register buttons if user signed out*/}
      {/* <p className="ph3 f4 pointer ma0" onClick={() => loginWithRedirect({})}>
        Logga in
      </p> */}
      <LoginOrRegister type="login" />
      <LoginOrRegister type="signUp" />
    </div>
  );
};

const Menu = () => {
  const { loading, isAuthenticated } = useAuth0();

  if (loading) {
    return <div className="ph3 f4 ma0">Loading...</div>;
  }

  return (
    <div className="menu">
      {/*Show "Ny rapport" and logout buttons if user is logged in*/}
      {isAuthenticated ? <LoggedinMenu /> : <LoggedoutMenu />}
    </div>
  );
};

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const toggleIsMenuVisible = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const showMenu = isMenuVisible || !isSmallScreen;

  return (
    <header className="mh2 mt0">
      <div className="nav">
        <Link
          to="/"
          className="ph3 ma0 f2 white logo"
          onClick={() => setIsMenuVisible(false)}
        >
          ❄ Isloggen ❄
        </Link>
        <button onClick={toggleIsMenuVisible} className="menubutton">
          <img src={MenuSymbol} alt="menubutton" />
        </button>
      </div>
      {showMenu && <Menu />}
    </header>
  );
};

export default Header;

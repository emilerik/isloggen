import React, {useState, useEffect} from "react";
import SignIn from "../SignIn/SignIn";
import Register from "../Register/Register";
import "./HeaderAuth.css";
import NewPost from "../NewPost/NewPost";
import Nav from "react-bootstrap/Nav";
import {useAuth0} from "../../react-auth0-wrapper";
import {Link} from "react-router-dom";
import MenuSymbol from "../../assets/menu-icon.png";


const Header = () => {
    const {loading, isAuthenticated, loginWithRedirect, loginWithPopup, logout, user} = useAuth0();
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

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    return (
        <header className="mh2 mt0">
            <div className="nav">
                <Link to="/" className="ph3 ma0 f2 white logo" onClick={() => setIsMenuVisible(false)}>
                    ❄ Isinfo ❄
                </Link>
                <button onClick={toggleIsMenuVisible} className="menubutton">
                    <img src={MenuSymbol} alt="menubutton"/>
                </button>
            </div>
            {(isMenuVisible || !isSmallScreen) && (
                <div className="menu">
                    {/*Show "Ny rapport" and logout buttons if user is logged in*/}
                    {(isAuthenticated && !loading) ? (
                        <div className="fr items-center ma0">
                            <Link to="/profile" className="ph3 f4 ma0 white">
                                Min profil
                            </Link>
                            <NewPost user_email={user.email}/>
                            <a className="ph3 f4 pointer" onClick={() => logout()}>
                                Logga ut
                            </a>
                        </div>
                    ) : (
                        <div className="flex justify-end pa3 ma0">
                            {/* Show Login and Register buttons if user signed out*/}
                            <p
                                className="ph3 f4 pointer ma0"
                                onClick={() => loginWithRedirect({})}
                            >
                                Logga in
                            </p>
                            <Register/>
                        </div>
                    )}
                </div>
            )}
            {/* Show Home and Profile button if user logged in*/}
        </header>
    );
};

export default Header;

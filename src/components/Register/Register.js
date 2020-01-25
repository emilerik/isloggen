import React from "react";
import {Auth0Lock} from "auth0-lock";

var options = {
    initialScreen: 'signUp',
    allowLogin: false,
    theme: {
        logo: 'https://projecthydro.org/wp-content/uploads/2019/01/snowflake-300x300.png',
        primaryColor: '#1394FF'
    },
    languageDictionary: {
        emailInputPlaceholder: "din emailadress",
        title: "Isinfo",
        loginLabel: 'Logga in',
        loginSubmitLabel: 'Logga in',
        databaseAlternativeSignUpInstructions: 'eller',
        signUpWithLabel: 'Registrera dig med %s',
        signUpTitle: 'Isinfo',
        signUpLabel: 'Registrera dig',
        signUpTerms: '',
        signUpSubmitLabel: 'Registrera nu',
        usernameInputPlaceholder: 'ditt användarnamn',
        passwordInputPlaceholder: 'ditt lösenord',
        usernameOrEmailInputPlaceholder: 'användarnamn/email'
    },
};

const lock = new Auth0Lock('XEx3hV9bQPknS835BgW07rZ6qdCaPzEb', 'isinfo.eu.auth0.com', options, {

    auth: {
        redirectUrl: 'http://localhost:3000',
        responseType: 'code',
        params: {
            scope: 'openid email' // Learn about scopes: https://auth0.com/docs/scopes
        }
    }
});

function Register() {
    return (
        <div className="dropdown ph3">
            <p
                className="ph3 f4 pointer ma0"
                onClick={() => lock.show()}>
                Registrera
            </p>
        </div>
    );
}

export default Register;

import React from "react";
import { useAuth0 } from "../../react-auth0-wrapper";
import { Auth0Lock } from "auth0-lock";
import Snowflake from "../../assets/snowflake.png";

function LoginOrRegister({ type }) {
  console.log();
  const options = {
    additionalSignUpFields: [
      {
        name: "name",
        placeholder: "ditt namn",
        source: "root",
      },
    ],
    initialScreen: type,
    allowLogin: true,
    loginAfterSignUp: true,
    theme: {
      logo: Snowflake, // TODO: replace with own
      primaryColor: "#1394FF",
    },
    language: "sv",
    languageDictionary: {
      emailInputPlaceholder: "din emailadress",
      signUpTitle: "Isloggen",
      title: "Isloggen",
      signUpTerms:
        "OBS! Utgå alltid från din egen kunskap och bedömning när du åker på naturisar. " +
        "Isloggen tar inget ansvar för rapporterna du skriver eller läser på forumet.",
    },
  };

  const lock = new Auth0Lock(
    "XEx3hV9bQPknS835BgW07rZ6qdCaPzEb",
    "isinfo.eu.auth0.com",
    options,
    {
      auth: {
        redirectUrl: "http://localhost:3000",
        responseType: "token",
        params: {
          scope: "openid email", // Learn about scopes: https://auth0.com/docs/scopes
        },
      },
    }
  );

  const { loginWithRedirect } = useAuth0();

  return (
    <div className="dropdown">
      <p
        className="ph3 f4 pointer ma0"
        //onClick={() => loginWithRedirect({ initialScreen: type })}
        onClick={() => lock.show()}
      >
        {type === "signUp" ? "Registrera" : "Logga in"}
      </p>
    </div>
  );
}

export default LoginOrRegister;

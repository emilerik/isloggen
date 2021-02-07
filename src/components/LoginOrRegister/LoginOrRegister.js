import React from "react";
import { Auth0Lock } from "auth0-lock";

function LoginOrRegister({ type }) {
  console.log();
  const options = {
    additionalSignUpFields: [
      {
        name: "namn",
        placeholder: "ditt namn",
        source: "root",
      },
    ],
    initialScreen: type,
    allowLogin: true,
    theme: {
      logo: "http://pngimg.com/uploads/snowflakes/snowflakes_PNG7545.png", // TODO: replace with own
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
        responseType: "code",
        params: {
          scope: "openid email", // Learn about scopes: https://auth0.com/docs/scopes
        },
      },
    }
  );

  return (
    <div className="dropdown">
      <p className="ph3 f4 pointer ma0" onClick={() => lock.show()}>
        {type === "signUp" ? "Registrera" : "Logga in"}
      </p>
    </div>
  );
}

export default LoginOrRegister;

import React from "react";
import {Form, Button} from "semantic-ui-react";
import { Auth0Lock } from "auth0-lock";

var options = {
    initialScreen: 'signUp',
    allowLogin: false,
    theme: {
        logo: 'https://projecthydro.org/wp-content/uploads/2019/01/snowflake-300x300.png',
        primaryColor: '#1394FF'
    },
    languageDictionary: {
        emailInputPlaceholder: "exempel@email.se",
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

var lock = new Auth0Lock('XEx3hV9bQPknS835BgW07rZ6qdCaPzEb', 'isinfo.eu.auth0.com', options, {

    auth: {
        redirectUrl: 'http://localhost:3000',
        responseType: 'code',
        params: {
            scope: 'openid email' // Learn about scopes: https://auth0.com/docs/scopes
        }
    }
});

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            name: "",
            password: "",
            missingField: false,
            incorrectSubmission: false
        };
    }

    onSubmitRegister = () => {
        //console.log(this.state);
        const {name, email, password} = this.state;
        //console.log(Boolean(name && email && password));
        if (name && email && password) {
            this.setState({missingField: false});
            fetch("http://localhost:3001/register", {
                method: "post",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password
                })
            })
                .then(response =>
                    response.ok
                        ? response.json()
                        : this.setState({incorrectSubmission: true})
                )
                .then(user => {
                    //console.log(user);
                    this.setState({incorrectSubmission: false});
                })
                .catch(err => {
                    console.log(err);
                    console.log("error raised");
                    this.setState({missingField: true});
                });
        } else {
            this.setState({missingField: true});
        }
        //console.log(this.state);
    };

    render() {
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
}

export default Register;

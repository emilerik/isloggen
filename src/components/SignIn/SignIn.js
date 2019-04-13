import React from "react";
import { Dropdown, Form, Button, Input } from "semantic-ui-react";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onSubmitSignin = () => {
    fetch("http://localhost:3000/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        incorrectCredentials: false
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.onLogin(user);
          this.setState({
            incorrectCredentials: false
          });
        } else {
          this.setState({
            incorrectCredentials: true
          });
        }
      })
      .catch(err => console.log(err));
  };

  onEmailChange = event => {
    this.setState({
      email: event.target.value
    });
  };
  onPasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  };

  render() {
    return (
      <div className="dropdown pt2 pr3 mr2 mt2 ma0">
        <p
          className="f4 pointer white"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Logga in
        </p>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <Form className="pa3" direction="left">
            <Form.Input
              type="email"
              name="email-address"
              id="email-address"
              onChange={this.onEmailChange}
              label="Email"
              placeholder=""
            />
            <Form.Input
              onChange={this.onPasswordChange}
              type="password"
              name="password"
              id="password"
              label="Lösenord"
              placeholder=""
            />
            <Button onClick={this.onSubmitSignin} primary>
              Logga in
            </Button>
            {this.state.incorrectCredentials ? (
              <p className="red tc">Fel e-post eller lösenord</p>
            ) : null}
          </Form>
        </div>
      </div>
    );
  }
}

export default SignIn;

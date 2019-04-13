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
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(user => {
        console.log(user);
      })
      .catch(err => console.log);
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
    return <div />;
  }
}

export default SignIn;

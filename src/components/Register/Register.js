import React from "react";
import { Dropdown, Form, Button } from "semantic-ui-react";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: ""
    };
  }

  onSubmitRegister = () => {
    fetch("http://localhost:3000/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.name,
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
  onNameChange = event => {
    this.setState({
      name: event.target.value
    });
  };
  onPasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  };

  testButton = () => {
    console.log(this.state);
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
          Registrera
        </p>
        <div
          className="dropdown-menu dropdown-menu-right"
          aria-labelledby="dropdownMenuButton"
        >
          <Form className="pa3" direction="left">
            <Form.Input
              type="name"
              name="name"
              id="name"
              label="Användarnamn"
              placeholder=""
              onChange={this.onNameChange}
            />
            <Form.Input
              type="email"
              name="email-address"
              id="email-address"
              label="Email"
              placeholder=""
              onChange={this.onEmailChange}
            />
            <Form.Input
              label="Lösenord"
              placeholder=""
              type="password"
              name="password"
              id="password"
              onChange={this.onPasswordChange}
            />
            <Button onClick={this.onSubmitRegister} primary>
              Registera nu
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Register;

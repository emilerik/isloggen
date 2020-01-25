import React from "react";
import { Form, Button } from "semantic-ui-react";

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
    const { name, email, password } = this.state;
    //console.log(Boolean(name && email && password));
    if (name && email && password) {
      this.setState({ missingField: false });
      fetch("http://localhost:3000/register", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password
        })
      })
        .then(response =>
          response.ok
            ? response.json()
            : this.setState({ incorrectSubmission: true })
        )
        .then(user => {
          //console.log(user);
          this.setState({ incorrectSubmission: false });
        })
        .catch(err => {
          console.log(err);
          console.log("error raised");
          this.setState({ missingField: true });
        });
    } else {
      this.setState({ missingField: true });
    }
    //console.log(this.state);
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

  render() {
    return (
      <div className="dropdown ph3">
        <p
          className="f4 pointer white ma0"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Registrera
        </p>
        <div
          className="dropdown-menu dropdown-menu-right ma3"
          aria-labelledby="dropdownMenuButton"
        >
          <Form className="pa3 ma2 mt0" direction="left">
            <Form.Input
              type="name"
              name="name"
              id="name"
              label="Användarnamn"
              onChange={this.onNameChange}
            />
            <Form.Input
              type="email"
              name="email-address"
              id="email-address"
              label="Email"
              onChange={this.onEmailChange}
            />
            <Form.Input
              label="Lösenord"
              type="password"
              name="password"
              id="password"
              onChange={this.onPasswordChange}
            />
            <Button onClick={this.onSubmitRegister} primary>
              Registera nu
            </Button>
            {this.state.missingField ? (
              <p className="red tc">Fyll i alla fält</p>
            ) : this.state.incorrectSubmission ? (
              <p className="red tc">Det gick inte att registrera</p>
            ) : null}
          </Form>
        </div>
      </div>
    );
  }
}

export default Register;

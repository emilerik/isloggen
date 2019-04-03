import React from "react";
import { Dropdown, Form, Button } from "semantic-ui-react";

const SignIn = () => (
  <Dropdown className="pa2" text="Logga in" floating icon="">
    <Dropdown.Menu>
      <Form className="pa3" direction="left">
        <Form.Input label="Email" placeholder="" />
        <Form.Input label="Lösenord" placeholder="" />
        <Button primary>Logga in</Button>
      </Form>
    </Dropdown.Menu>
  </Dropdown>
);

export default SignIn;

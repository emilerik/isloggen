import React from "react";
import {
  Image,
  Dropdown,
  Form,
  Modal,
  Button,
  Header
} from "semantic-ui-react";

const Register = () => (
  <Dropdown className="pa2" text="Registrera" floating icon="" direction="left">
    <Dropdown.Menu>
      <Form className="pa3" direction="left">
        <Form.Input label="Användarnamn" placeholder="" />
        <Form.Input label="Lösenord" placeholder="" />
        <Form.Input label="Upprepa Lösenord" placeholder="" />
        <Button primary>Registera nu</Button>
      </Form>
    </Dropdown.Menu>
  </Dropdown>
);

export default Register;

import React from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  TextArea,
  Select
} from "semantic-ui-react";

const NewPost = () => (
  <Form className="pa4 ma2 ba w-100">
    <Form.Field>
      <label>First Name</label>
      <input placeholder="First Name" />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder="Last Name" />
    </Form.Field>
    <Form.Field>
      <Checkbox label="I agree to the Terms and Conditions" />
    </Form.Field>
    <Button type="submit">Submit</Button>
  </Form>
);

export default NewPost;

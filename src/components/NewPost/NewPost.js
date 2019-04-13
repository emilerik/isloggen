import React from "react";
import {
  Button,
  Checkbox,
  Form,
  Dropdown,
  Menu,
  // eslint-disable-next-line
  Input,
  // eslint-disable-next-line
  TextArea,
  // eslint-disable-next-line
  Select
} from "semantic-ui-react";

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: 0,
      kommentar: "",
      betyg: "",
      plats: ""
    };
  }

  onChangeUserId = event => {
    this.setState({ user_id: event.target.value });
  };

  onChangeBetyg = event => {
    this.setState({ betyg: event.target.value });
  };

  onChangePlats = event => {
    const platsNum = event.target.value;
    let plats = "";
    switch (platsNum) {
      case "1":
        plats = "Drevviken";
        break;
      case "2":
        plats = "Norrviken";
        break;
      default:
        plats = "Null";
    }
    this.setState({ plats: plats });
  };

  onChangeKommentar = event => {
    this.setState({ kommentar: event.target.value });
  };

  onSubmitPost = () => {
    fetch("http://localhost:3000/post", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: this.state.user_id,
        content: this.state.content
      })
    })
      .then(res => res.json())
      .then(console.log)
      .catch(err => console.log(`There was an error: ${err}`));
  };
  render() {
    return (
      <Form className="pa4 ma2 ba w-100">
        <Form.Field>
          <label>User ID</label>
          <input placeholder="user id..." onChange={this.onChangeUserId} />
        </Form.Field>
        <Form.Field>
          <label>Plats</label>
          <select
            name="location"
            className="ui dropdown"
            onChange={this.onChangePlats}
          >
            <option value="1">Drevviken</option>
            <option value="2">Norrviken</option>
          </select>
        </Form.Field>
        <Form.Field>
          <label>Betyg</label>
          <select
            name="location"
            className="ui dropdown"
            onChange={this.onChangeBetyg}
          >
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>
        </Form.Field>
        <Form.Field>
          <label>Kommentar</label>
          <textarea placeholder="" onChange={this.onChangeKommentar} />
        </Form.Field>
        <Button type="submit" onClick={this.onSubmitPost}>
          Submit
        </Button>
      </Form>
    );
  }
}

export default NewPost;

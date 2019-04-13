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
      betyg: "5",
      plats: "Drevviken"
    };
  }

  // onChangeUserId = event => {
  //   this.setState({ user_id: event.target.value });
  // };

  onChangeBetyg = event => {
    this.setState({ betyg: event.target.value });
  };

  onChangePlats = event => {
    this.setState({ plats: event.target.value });
  };

  onChangeKommentar = event => {
    this.setState({ kommentar: event.target.value });
  };

  onSubmitPost = () => {
    console.log(this.state);
    fetch("http://localhost:3000/post", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: this.props.user_id,
        kommentar: this.state.kommentar,
        betyg: this.state.betyg,
        plats: this.state.plats
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
          <label>Plats</label>
          <select
            name="plats"
            className="ui dropdown"
            onChange={this.onChangePlats}
          >
            <option value="drevviken">Drevviken</option>
            <option value="norrviken">Norrviken</option>
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

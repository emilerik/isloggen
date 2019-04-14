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
      plats: "Drevviken",
      showForm: false,
      incorrectSubmission: false
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

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  onSubmitPost = () => {
    if (this.state.kommentar) {
      this.props.updateTable();
      this.setState({ showForm: false, incorrectSubmission: false });
      const datum = new Date();
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
          plats: this.state.plats,
          datum: datum.toLocaleDateString()
        })
      })
        .then(res => res.json())
        .then(console.log)
        .catch(err => console.log(`There was an error: ${err}`));
    } else {
      this.setState({ incorrectSubmission: true });
    }
  };
  render() {
    return (
      <div className="pv3 tc">
        {this.state.showForm ? (
          <div className="">
            <Button className="f4 pointer white" onClick={this.toggleForm}>
              Stäng
            </Button>
            <Form className="pa4 br3 ba b--white mv3" direction="left">
              <Form.Field>
                <label>Plats</label>
                <select
                  name="plats"
                  className="ui dropdown"
                  onChange={this.onChangePlats}
                >
                  <option value="Drevviken">Drevviken</option>
                  <option value="Norrviken">Norrviken</option>
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
                <textarea
                  rows="4"
                  placeholder=""
                  onChange={this.onChangeKommentar}
                />
              </Form.Field>
              <Button primary onClick={this.onSubmitPost}>
                Skicka
              </Button>
              {this.state.incorrectSubmission ? (
                <p className="red">Vänligen lämna en kommentar</p>
              ) : null}
            </Form>
          </div>
        ) : (
          <Button
            primary
            type="submit"
            className="f4 pointer white ma0"
            onClick={this.toggleForm}
          >
            Nytt inlägg
          </Button>
        )}
      </div>
    );
  }
}

export default NewPost;

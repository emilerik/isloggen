import React from "react";
import {
  Button,
  Checkbox,
  Form,
  // eslint-disable-next-line
  Input,
  // eslint-disable-next-line
  TextArea,
  // eslint-disable-next-line
  Select
} from "semantic-ui-react";

const betygOptions = ["1", "2", "3", "4", "5"].map(betyg => ({
  key: betyg,
  text: betyg,
  value: betyg
}));

const platsOptions = ["Drevviken", "Norrviken"].map(plats => ({
  key: plats,
  text: plats,
  value: plats
}));

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

  onChangeBetyg = (e, { value }) => {
    this.setState({ betyg: value });
  };

  onChangePlats = (e, { value }) => {
    this.setState({ plats: value });
  };

  onChangeKommentar = (e, { value }) => {
    this.setState({ kommentar: value });
  };

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  onSubmitPost = () => {
    if (this.state.kommentar) {
      //this.props.updateTable();
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
              <Form.Group widths="equal">
                <Form.Select
                  onChange={this.onChangePlats}
                  label="Plats"
                  options={platsOptions}
                />
                <Form.Select
                  label="Betyg"
                  onChange={this.onChangeBetyg}
                  options={betygOptions}
                />
              </Form.Group>

              <Form.TextArea
                label="Kommentar"
                onChange={this.onChangeKommentar}
              />
              <Form.Button primary onClick={this.onSubmitPost}>
                Skicka
              </Form.Button>
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

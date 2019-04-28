import React from "react";
import { Modal } from "react-bootstrap";
import {
  Button,
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
      betyg: "",
      plats: "",
      showForm: false,
      incorrectSubmission: false,
      showModal: false
    };
  }

  toggleShow = () => {
    this.setState({
      showModal: !this.state.showModal,
      incorrectSubmission: false
    });
  };

  onChangeBetyg = (e, { value }) => {
    this.setState({ betyg: value });
  };

  onChangePlats = (e, { value }) => {
    this.setState({ plats: value });
  };

  onChangeKommentar = (e, { value }) => {
    this.setState({ kommentar: value });
  };

  onSubmitPost = () => {
    const { kommentar, betyg, plats } = this.state;
    if (kommentar && plats && betyg) {
      //this.props.updateTable();
      this.toggleShow();
      const datum = new Date();
      fetch("http://localhost:3000/post", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user_id: this.props.user_id,
          kommentar: kommentar,
          betyg: betyg,
          plats: plats,
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
        <Button primary onClick={this.toggleShow}>
          Nytt inlägg
        </Button>

        <Modal show={this.state.showModal} onHide={this.toggleShow}>
          <Modal.Body>
            <h1 className="tc pa0 ma0 f3">Nytt Inlägg</h1>
            <Form className="pa2 ma2" direction="left">
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
              {this.state.incorrectSubmission ? (
                <p className="red">Vänligen fyll i alla fält</p>
              ) : null}
              <div className="tr">
                <Button variant="secondary" onClick={this.toggleShow}>
                  Avbryt
                </Button>
                <Button variant="primary" primary onClick={this.onSubmitPost}>
                  Skicka
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default NewPost;

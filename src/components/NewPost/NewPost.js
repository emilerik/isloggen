import React from "react";
import {Modal} from "react-bootstrap";
import "./NewPost.css";
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
            kommentar: "",
            betyg: "",
            plats: "",
            showForm: false,
            incorrectSubmission: false,
            showModal: false,
            showConfirmation: false
        };
    }

    toggleShow = () => {
        this.setState({
            showModal: !this.state.showModal,
            incorrectSubmission: false
        });
    };

    toggleShowConfirmation = () => {
        this.setState({
            showConfirmation: !this.state.showConfirmation,
        });
    };

    onChangeBetyg = (e, {value}) => {
        this.setState({betyg: value});
    };

    onChangePlats = (e, {value}) => {
        this.setState({plats: value});
    };

    onChangeKommentar = (e, {value}) => {
        this.setState({kommentar: value});
    };

    onSubmitPost = () => {
        const {kommentar, betyg, plats} = this.state;
        if (kommentar && plats && betyg) {
            //this.props.updateTable();
            this.toggleShow();
            const datum = new Date();
            fetch("https://isinfo.herokuapp.com/post", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    user_email: this.props.user_email,
                    kommentar: kommentar,
                    betyg: betyg,
                    plats: plats,
                    datum: datum.toLocaleDateString()
                })
            })
                .then(res => this.toggleShowConfirmation())
                .catch(err => console.log(`There was an error: ${err}`));
        } else {
            this.setState({incorrectSubmission: true});
        }
    };

    render() {
        return (
            <div>
                <button
                    className="tc br-pill temp pa3 pointer blue f4 bg-white"
                    onClick={this.toggleShow}
                >
                    Ny rapport
                </button>

                <Modal show={this.state.showModal} onHide={this.toggleShow}>
                    <Modal.Body>
                        <h1 className="tc pa2 mb2 f3">Skriv ett nytt inlägg</h1>
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

                <Modal show={this.state.showConfirmation} onHide={this.toggleShowConfirmation}>
                    <Modal.Header>
                        <h1 className="tc pa2 mb2 f3">Tack för ditt inlägg!</h1>
                    </Modal.Header>
                  <Modal.Body>
                    <p>Plats: {this.state.plats}</p>
                    <p>Betyg: {this.state.betyg}</p>
                    <p>Kommentar: {this.state.kommentar}</p>
                  </Modal.Body>
                  <Modal.Footer>
                        <Button variant="primary" primary>
                            <a href="/">
                                Gå tillbaka
                            </a>
                        </Button>
                  </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default NewPost;

import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./NewPost.css";
import { usePosts } from "../../postsState";
import {
  Button,
  Form,
  // eslint-disable-next-line
  Input,
  // eslint-disable-next-line
  TextArea,
  // eslint-disable-next-line
  Select,
} from "semantic-ui-react";
import { useAuth0 } from "../../react-auth0-wrapper";

const betygOptions = ["1", "2", "3", "4", "5"].map((betyg) => ({
  key: betyg,
  text: betyg,
  value: betyg,
}));

const platsOptions = ["Drevviken", "Norrviken"].map((plats) => ({
  key: plats,
  text: plats,
  value: plats,
}));

const NewReportModal = ({ showModal, setShowModal }) => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");
  const [location, setLocation] = useState("");
  const [incorrectSubmission, setIncorrectSubmission] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { user } = useAuth0();
  console.log(user);
  const addPost = usePosts((state) => state.addPost);

  const onSubmitPost = () => {
    if (comment && location && rating) {
      setShowModal(false);
      const date = new Date();
      fetch("https://isinfo.herokuapp.com/post", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: user.sub,
          comment,
          rating,
          location,
        }),
      })
        .then((res) => {
          setShowConfirmation(true);
          addPost({ comment, rating, location });
        })
        .catch((err) => console.log(`There was an error: ${err}`));
    } else {
      setIncorrectSubmission(true);
    }
  };

  return (
    <div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Body>
          <h1 className="tc pa2 mb2 f3">Skriv ett nytt inlägg</h1>
          <Form className="pa2 ma2" direction="left">
            <Form.Group widths="equal">
              <Form.Select
                onChange={(e, { value }) => setLocation(value)}
                label="Plats"
                options={platsOptions}
              />
              <Form.Select
                label="Betyg"
                onChange={(e, { value }) => setRating(value)}
                options={betygOptions}
              />
            </Form.Group>

            <Form.TextArea
              label="Kommentar"
              onChange={(e, { value }) => setComment(value)}
            />
            {incorrectSubmission && (
              <p className="red">Vänligen fyll i alla fält</p>
            )}
            <div className="tr">
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Avbryt
              </Button>
              <Button variant="primary" primary onClick={onSubmitPost}>
                Skicka
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      {showConfirmation && (
        <ConfirmationModal
          setShowConfirmation={setShowConfirmation}
          comment={comment}
          rating={rating}
          location={location}
        />
      )}
    </div>
  );
};

const ConfirmationModal = ({
  setShowConfirmation,
  comment,
  rating,
  location,
}) => {
  return (
    <Modal show={true} onHide={() => setShowConfirmation(false)}>
      <Modal.Header>
        <h1 className="tc pa2 mb2 f3">Tack för ditt inlägg!</h1>
      </Modal.Header>
      <Modal.Body>
        <p>Plats: {location}</p>
        <p>Betyg: {rating}</p>
        <p>Kommentar: {comment}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" primary>
          <a href="/">Gå tillbaka</a>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const NewPost = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button
        className="tc br-pill temp pa3 pointer blue f4 bg-white"
        onClick={() => setShowModal(true)}
      >
        Ny rapport
      </button>

      <NewReportModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default NewPost;

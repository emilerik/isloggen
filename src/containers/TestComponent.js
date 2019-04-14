import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

const TestComponent = () => (
  <div className="ui modal">
    Hasdad
    <i className="close icon" />
    <div className="header">Profile Picture</div>
    <div className="image content">
      <div className="description">
        <div className="ui header">
          We've auto-chosen a profile image for you.
        </div>
        <p>
          We've grabbed the following image from the{" "}
          <a href="https://www.gravatar.com" target="_blank">
            gravatar
          </a>{" "}
          image associated with your registered e-mail address.
        </p>
        <p>Is it okay to use this photo?</p>
      </div>
    </div>
    <div className="actions">
      <div className="ui black deny button">Nope</div>
      <div className="ui positive right labeled icon button">
        Yep, that's me
        <i className="checkmark icon" />
      </div>
    </div>
  </div>
);

export default TestComponent;

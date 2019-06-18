import React from "react";
import { Card, Image } from "semantic-ui-react";
import Posts from "../Posts/Posts";

const Profile = ({ user }) => (
  <div className="">
    <div className="fl w-30 flex justify-center">
      <Card className="">
        <Image src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Default-avatar.jpg" />
        <Card.Content className="">
          <h1 className="ma1">{user.name}</h1>
          <p className="gray">Gick med April 2019</p>
          <p>{user.postcount} inlägg</p>
        </Card.Content>
      </Card>
    </div>
    <div className="fl w-40">
      <Posts user_id={user.id} />
    </div>
  </div>
);

export default Profile;

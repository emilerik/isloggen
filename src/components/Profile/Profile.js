import React from "react";
import { Card, Image } from "semantic-ui-react";
import Posts from "../Posts/Posts";
import { useAuth0 } from "../../react-auth0-wrapper";
import "./Profile.css";

const Profile = () => {
  const { loading, user } = useAuth0();
  if (loading || !user) {
    return <p>Hämtar information...</p>;
  }

  console.log(user);

  return (
    <div className="profile">
      <div className="profile-card">
        <Card className="tc">
          <img src={user.picture} alt="profile" className="profile-pic"/>
          <Card.Content className="">
            <h1 className="ma1">{user.nickname}</h1>
            <p className="gray">Gick med Februari 2020</p>
            {/*<p>{user.postcount} inlägg</p>*/}
          </Card.Content>
        </Card>
      </div>
        <Posts user_email={user.email} />
    </div>
  );
};

export default Profile;

import React from "react";
import Post from "../Post/Post";
import "./Posts.css";

const Posts = () => {
  return (
    <table class="ui celled table">
      <thead>
        <tr>
          <th class="center aligned">Plats</th>
          <th class="center aligned">Betyg</th>
          <th class="center aligned">Kommentar</th>
          <th class="center aligned">Användare</th>
          <th class="center aligned">Datum</th>
        </tr>
      </thead>

      <Post />
    </table>
  );
};

export default Posts;

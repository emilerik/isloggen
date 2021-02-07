import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import { Table } from "react-bootstrap";
import "./Posts.css";
import { config } from "../../config";
import { usePosts } from "../../postsState";
import fs from "fs";

const Posts = (user_email = "") => {
  const posts = usePosts((state) => state.posts);
  const setPosts = usePosts((state) => state.setPosts);
  const [serverStatus, setServerStatus] = useState("pending");

  useEffect(() => {
    const url = user_email
      ? config.url + "/getposts/" + user_email
      : config.url + "/getposts";

    fetch(url)
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
        setServerStatus("online");
      })
      .catch((err) => {
        setServerStatus("offline");
        console.log(err);
      });

    return () => {};
  }, [setPosts, user_email]);

  return (
    <div className="posts">
      {posts[0] ? (
        <Table responsive>
          <thead>
            <tr>
              <th className="">Plats</th>
              <th className="">Betyg</th>
              <th className="">Kommentar</th>
              <th className="">Användare</th>
              <th className="">Datum</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => {
              return <Post post={post} />; // TODO add post id as keys
            })}
          </tbody>
        </Table>
      ) : serverStatus === "pending" ? (
        <h1 className="white tc">Hämtar israpporter...</h1>
      ) : serverStatus === "offline" ? (
        <h1 className="white tc">Inga israpporter att visa</h1>
      ) : (
        <h1 className="white tc">Ingen kontakt med servern</h1>
      )}
      {}
    </div>
  );
};

export default Posts;

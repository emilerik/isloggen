import React from "react";
import Post from "../Post/Post";
import "./Posts.css";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: {}, serverStatus: "pending" };
  }

  componentDidMount() {
    fetch(`http://localhost:3001/getposts/${this.props.user_id}`)
      .then(response => response.json())
      .then(posts => {
        this.setState({ posts: posts, serverStatus: "online" });
      })
      .catch(err => {
        //console.log(err);
        this.setState({ serverStatus: "offline" });
      });
  }

  render() {
    const { posts, serverStatus } = this.state;
    return (
      <div classname="w-50 pa4">
        {posts[0] ? (
          <table className="ui table">
            <thead>
              <tr>
                <th className="center aligned">Plats</th>
                <th className="center aligned">Betyg</th>
                <th className="center aligned">Kommentar</th>
                <th className="center aligned">Användare</th>
                <th className="center aligned">Datum</th>
              </tr>
            </thead>
            {posts.map(post => {
              return <Post post={post} />;
            })}
          </table>
        ) : serverStatus === "pending" ? (
          <h1 className="white">Retreiving posts...</h1>
        ) : serverStatus === "offline" ? (
          <h1 className="white">No connection to server</h1>
        ) : (
          <h1 className="white">An unknown error occurred</h1>
        )}
        {}
      </div>
    );
  }
}

export default Posts;

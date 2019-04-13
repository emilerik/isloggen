import React from "react";
import Post from "../Post/Post";
import "./Posts.css";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: {} };
  }

  componentDidMount() {
    fetch("http://localhost:3000/getposts")
      .then(response => response.json())
      .then(posts => this.setState({ posts: posts }))
      .catch(err => console.log(err));
  }
  // {posts.map(post => {
  //   return <Post post={post} />;
  // })}

  render() {
    const { posts } = this.state;
    return (
      <div>
        {posts[0] ? (
          <table className="ui celled table">
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
        ) : null}
        {}
      </div>
    );
  }
}

export default Posts;

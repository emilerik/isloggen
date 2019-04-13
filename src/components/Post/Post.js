import React from "react";
import "./Post.css";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: ""
    };
  }

  // componentDidMount() {
  //   fetch("http://localhost:3000/getposts")
  //     .then(response => response.json())
  //     .then(post => this.setState({ post: post }));
  // }

  render() {
    const { plats, betyg, kommentar } = this.props.post;
    return (
      <tbody>
        <tr>
          <td className="center aligned">{plats}</td>
          <td className="center aligned">{betyg}</td>
          <td className="center aligned">{kommentar}</td>
          <td className="center aligned">emilerik</td>
          <td className="center aligned">31/03</td>
        </tr>
      </tbody>
    );
  }
}

export default Post;

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
  //   fetch("https://isinfo.herokuapp.com/getposts")
  //     .then(response => response.json())
  //     .then(post => this.setState({ post: post }));
  // }

  render() {
    const { plats, betyg, kommentar, datum, name } = this.props.post;
    return (
      <tbody>
        <tr>
          <td className="center aligned">{plats}</td>
          <td className="center aligned">{betyg}</td>
          <td className="center aligned">{kommentar}</td>
          <td className="center aligned">{name}</td>
          <td className="center aligned">{datum}</td>
        </tr>
      </tbody>
    );
  }
}

export default Post;

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
        <tr>
          <td className="">{plats}</td>
          <td className="">{betyg}</td>
          <td className="">{kommentar}</td>
          <td className="">{name}</td>
          <td className="">{datum}</td>
        </tr>
    );
  }
}

export default Post;

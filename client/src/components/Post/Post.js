import React from "react";
import "./Post.css";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: "",
    };
  }

  // componentDidMount() {
  //   fetch("https://isinfo.herokuapp.com/getposts")
  //     .then(response => response.json())
  //     .then(post => this.setState({ post: post }));
  // }

  render() {
    const {
      location_id,
      rating,
      comment,
      observation_timestamp,
      name,
    } = this.props.post;
    return (
      <tr>
        <td className="">{location_id}</td>
        <td className="">{rating}</td>
        <td className="">{comment}</td>
        <td className="">{name}</td>
        <td className="">{observation_timestamp}</td>
      </tr>
    );
  }
}

export default Post;

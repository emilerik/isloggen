import React from "react";
import "./Post.css";

const Post = id => {
  return (
    <tbody>
      <tr>
        <td class="center aligned">Drevviken</td>
        <td class="center aligned">3</td>
        <td class="center aligned">Grym is!</td>
        <td class="center aligned">emilerik</td>
        <td class="center aligned">31/03</td>
      </tr>
      <tr>
        <td class="center aligned">Norrviken</td>
        <td class="center aligned">5</td>
        <td class="center aligned">Jättefint</td>
        <td class="center aligned">torsten</td>
        <td class="center aligned">29/03</td>
      </tr>
    </tbody>
  );
};

export default Post;

import React from "react";
import Post from "../Post/Post";
import {Table} from "react-bootstrap";
import "./Posts.css";

class Posts extends React.Component {
    constructor(props) {
        super(props);
        //Pending server status until posts are retrieved
        this.state = {posts: {}, serverStatus: "pending"};
    }

    componentDidMount() {
        //console.log(this.props.user_email);
        let promise;
        //Check if all posts should be retrieved or user specific posts
        //console.log("Email retrieved? " + Boolean(this.props.user_email))
        this.props.user_email ?
            promise = fetch(`https://isinfo.herokuapp.com/getposts?email=${this.props.user_email}`)
            : promise = fetch(`https://isinfo.herokuapp.com/getposts`);
        //Get posts
        promise.then(response => response.json())
            .then(posts => {
                this.setState({posts: posts, serverStatus: "online"});
            })
            .catch(err => {
                this.setState({serverStatus: "offline"});
            });
    }

    render() {
        const {posts, serverStatus} = this.state;
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
                        {posts.map(post => {
                            return <Post post={post}/>;
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
    }
}

export default Posts;

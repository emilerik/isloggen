import React from "react";
import Post from "../Post/Post";
import "./Posts.css";

class Posts extends React.Component {
    constructor(props) {
        super(props);
        //Pending server status until posts are retrieved
        this.state = {posts: {}, serverStatus: "pending"};
    }

    componentDidMount() {
        console.log(this.props.user_email);
        var promise;
        //Check if all posts should be retrieved or user specific posts
        this.props.user_email ?
            promise = fetch(`https://isinfo.herokuapp.com/${this.props.user_email}`)
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
            <div className="w-50 pa4">
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
                            return <Post post={post}/>;
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

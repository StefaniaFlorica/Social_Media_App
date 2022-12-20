import React, { Component } from "react";
import "./PostContainer.css";
import Post from "./Post";

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  getData = () => {
    //calling the rest from our backend
    // let json=[
    //     {
    //         "post_ID": 1,
    //         "user_id": 12345678,
    //         "user_img": "url....",
    //         "user_name": "Anindya Sankar Dasgupta",
    //         "description": "Loved this wallpaper...",
    //         "post_img" : post_img,
    //         "like": "25"
    //     },
    //     {
    //         "post_ID": 2,
    //         "user_id": 12345678,
    //         "user_img": "",
    //         "user_name": "Technical Interview",
    //         "description": "this is a dummy description for testing purpose",
    //         "post_img" :"",
    //         "like": "125"
    //     }
    // ]
    const thisContext = this;
    fetch("http://localhost:8080/api/postService/getAllPosts")
      .then((response) => response.json())
      .then((json) => {
        thisContext.setState({ data: json });
      })
      .catch((error) => {});
  };

  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <div>
        {this.state.data.map((item) => (
          <Post object={item} />
        ))}
      </div>
    );
  }
}

export default PostContainer;

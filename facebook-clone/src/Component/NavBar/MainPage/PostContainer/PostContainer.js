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
          <Post refresh={this.getData} object={item} />
        ))}
      </div>
    );
  }
}

export default PostContainer;

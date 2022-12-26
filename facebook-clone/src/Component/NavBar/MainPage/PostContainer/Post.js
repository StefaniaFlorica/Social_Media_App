import React, { Component } from "react";
import "./PostContainer.css";
import { Paper, Avatar } from "@material-ui/core";
// import post from "../../../../images/post.jpeg";
import like from "../../../../images/like.png";
import likebutton from "../../../../images/likebutton.png";
import commentbutton from "../../../../images/comment.png";
import sharebutton from "../../../../images/share.png";
import { getImage } from "../../../../GetImage.js";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      comment: null,
    };
  }
  getData = () => {
    const thisContext = this;
    fetch(
      "http://localhost:8080/api/commentService/getAllComments/" +
        this.props.object.postID
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(this.props.object.postID)
        thisContext.setState({ comments: json });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  componentDidMount() {
    this.getData();
  }
  isImageAvailable = (data) => {
    return data === "" ? false : true;
  };
  submitComment = (event) => {
    if (event.key === "Enter") {
      const thisContext = this;
      let obj = JSON.parse(localStorage.getItem("user"));
      console.log(obj);
      let payload = {
        postID: this.props.object.postID,
        userID: obj.userId,
        userImage: obj.userImageURL,
        userName: obj.userName,
        comment: this.state.comment,
      };

      console.log(payload);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      };

      fetch("http://localhost:8080/api/commentService/save", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          thisContext.getData();
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };
  render() {
    return (
      <div>
        <Paper className="post__container">
          {/* header */}
          <div className="post__header">
            <div className="post__header_img">
              <Avatar src={getImage(this.props.object.imageURL)} className="post_img" />
            </div>
            <div className="post__header_text">
              {this.props.object.userName}
            </div>
          </div>

          {/* description */}
          <div className="post__description">
            {this.props.object.description}
          </div>
          {/* image */}
          <div className="post__image">
            {this.isImageAvailable(this.props.object.postImgURL) ? (
              <img src={this.props.object.postImgURL} width="600px" alt="post" />
            ) : (
              <span></span>
            )}
          </div>
          {/* like count */}
          <div className="post__likeCountContainer">
            <div className="post__like">
              <img className="post__img" src={like} alt="like" />
            </div>
            <div className="post__likecount">{this.props.object.likes}</div>
            <div className="post__commentcount">
              {this.state.comments.length} comments
            </div>
          </div>
          {/* like share box */}
          <div className="post__likeShare">
            <div className="post__tab">
              <div className="post__tabfirst">
                <img className="post__tabimg" src={likebutton} alt="like button"/>
              </div>
              <div className="post__tabtext">Like</div>
            </div>

            <div className="post__tab">
              <div className="post__tabfirst">
                <img className="post__tabimg" src={commentbutton} alt="comment button"/>
              </div>
              <div className="post__tabtext">Comment</div>
            </div>

            <div className="post__tab">
              <div className="post__tabfirst">
                <img className="post__tabimg" src={sharebutton} alt="share button" />
              </div>
              <div className="post__tabtext">Share</div>
            </div>
          </div>
          {/* comment box */}
          <div className="upload__comment">
            <div className="comment__section">
              {this.state.comments.map((item, index) =>
                index > this.state.comments.length - 4 ? (
                  <div className="comment">
                    <Avatar
                      src={getImage(item.userImage)}
                      className="comment_img"
                    />
                    <div className="comment_text">{item.comment}</div>
                  </div>
                ) : (
                  <span></span>
                )
              )}
            </div>
            <div className="upload__top">
              <div>
                <Avatar
                  src={getImage(
                    JSON.parse(localStorage.getItem("user")).userImageURL
                  )}
                  className="upload_img"
                />
              </div>
              <div>
                <input
                  onKeyDown={this.submitComment}
                  onChange={(event) => {
                    this.setState({
                      comment: event.currentTarget.value
                    })
                    // this.state.comment = event.currentTarget.value;
                  }}
                  className="upload__box"
                  placeholder="Write a comment"
                  type="text"
                />
              </div>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default Post;

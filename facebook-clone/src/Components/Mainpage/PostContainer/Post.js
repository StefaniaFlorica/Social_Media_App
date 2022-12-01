import { Avatar, Paper } from "@mui/material";
import React, { Component } from "react";
import "./PostContainer.css";
import like from "../../../images/like.png";
import likeButton from "../../../images/likebutton.png";
import commentButton from "../../../images/comment.png";
import shareButton from "../../../images/share.png";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  isImageAvailable=(data)=>{
    return data==="" ? false : true;
  }
  render() {
    return (
      <div>
        <Paper className="post_container">
          {/* header */}
          <div className="post_header">
            <div className="post_header_img">
              <Avatar
                src="https://scontent-otp1-1.xx.fbcdn.net/v/t39.30808-1/313026305_2327429857405052_3500018415428297930_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=03DP-8UpKrYAX_6emfM&_nc_oc=AQnzzhayb2jyHDbgG1--f63nd25tMvmbW-MancdmaMnPvbHdkrdxk0e4b1eiYbgZr10&_nc_ht=scontent-otp1-1.xx&oh=00_AfCqr2ZVv16v4YWz2iOVyCGQJgnXrguzdj53a67IohBykQ&oe=63825078"
                className="post_img"
              />
            </div>
            <div className="post_header_text">
              {this.props.object.user_name}
            </div>
          </div>

          {/* description */}
          <div className="post_description">
            {this.props.object.description}
          </div>
          {/* image */}
          <div className="post_image">
            {this.isImageAvailable(this.props.object.post_img) ? (
              <img src={this.props.object.post_img} width="600px" />
            ) : (
              <span></span>
            )}
          </div>
          {/* like count */}
          <div className="post_like_container">
            <div className="post_like">
              <img className="post_like_img" src={like} />
            </div>
            <div className="post_like_count">{this.props.object.like}</div>
          </div>
          {/* like share box */}
          <div className="post_likeShare">
            <div className="post_tab">
              <div className="post_tabfirst">
                <img className="post_tabimg" src={likeButton} />
              </div>
              <div className="post_tabtext">Like</div>
            </div>

            <div className="post_tab">
              <div className="post_tabfirst">
                <img className="post_tabimg" src={commentButton} />
              </div>
              <div className="post_tabtext">Comment</div>
            </div>

            <div className="post_tab">
              <div className="post_tabfirst">
                <img className="post_tabimg" src={shareButton} />
              </div>
              <div className="post_tabtext">Share</div>
            </div>
          </div>
          {/* comment box */}
          <div className="upload_comment">
            <div className="upload_top">
              <div>
                <Avatar
                  src="https://scontent-otp1-1.xx.fbcdn.net/v/t39.30808-1/313026305_2327429857405052_3500018415428297930_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=03DP-8UpKrYAX_6emfM&_nc_oc=AQnzzhayb2jyHDbgG1--f63nd25tMvmbW-MancdmaMnPvbHdkrdxk0e4b1eiYbgZr10&_nc_ht=scontent-otp1-1.xx&oh=00_AfCqr2ZVv16v4YWz2iOVyCGQJgnXrguzdj53a67IohBykQ&oe=63825078"
                  className="upload_img"
                />
              </div>
              <div>
                <input
                  className="upload_box"
                  placeholder="Write a comment..."
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

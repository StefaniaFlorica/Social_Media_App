import { Paper, Avatar } from '@mui/material';
import React, { Component } from 'react';
import "./UploadSection.css";
import live from "../../../images/video.png";
import image from "../../../images/image.png";
import feeling from "../../../images/feelings.png";

class UploadSection extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
          <div>
            <Paper className="upload_container">
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
                    placeholder="What's on your mind?"
                    type="text"
                  />
                </div>
              </div>
              <div className="upload_bottom">
                <div className="upload_tabs">
                  <img src={live} width="35px" />
                  <div className="upload_text">Live Video</div>
                </div>
                <div className="upload_tabs">
                  <img src={image} width="35px" />
                  <div className="upload_text">Photo/Video</div>
                </div>
                <div className="upload_tabs">
                  <img src={feeling} width="35px" />
                  <div className="upload_text">Feeling/Activity</div>
                </div>
              </div>
            </Paper>
          </div>
        );
    }
}
 
export default UploadSection;
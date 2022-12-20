import React, { Component } from "react";
import { Avatar } from "@material-ui/core";
import "./Mainpage.css";
import Badge from "@material-ui/core/Badge";
import { getImage } from "../../../GetImage.js";

class ImageLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="imageLayout__container">
        <div className="imageLayout__imglay">
          {this.props.status ? (
            <Badge
              color="secondary"
              overlap="circle"
              badgeContent=" "
              variant="dot"
            >
              <Avatar
                className="imageLayout__img"
                src={getImage(this.props.image)}
              />
            </Badge>
          ) : this.props.status == false ? (
            <Avatar
              className="imageLayout__img"
              src={getImage(this.props.image)}
            />
          ) : (
            <Avatar className="imageLayout__img" src={this.props.image} />
          )}
        </div>
        <div className="imageLayout__text">{this.props.text}</div>
      </div>
    );
  }
}

export default ImageLayout;

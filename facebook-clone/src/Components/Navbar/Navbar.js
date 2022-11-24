import React, { Component } from "react";
import "./Navbar.css";
import { Grid, Avatar } from "@mui/material";
import applogo from "../../images/logo3.png";
import home from "../../images/home.svg";
import page from "../../images/pages.svg";
import watch from "../../images/watch.svg";
import group from "../../images/groups.svg";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <Grid container className="navbar_main">
          <Grid item xs={3}>
            <div className="navbar_leftbar">
              <img className="navbar_logo" src={applogo} width="40px"></img>
              <input
                className="navbar_search"
                type="text"
                placeholder="Search Talkie"
              ></input>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="navbar_container">
              <div className="navbar_tabs active">
                <img src={home} height="35px" width="35px"></img>
              </div>
              <div className="navbar_tabs">
                <img src={page} height="35px" width="35px"></img>
              </div>
              <div className="navbar_tabs">
                <img src={watch} height="35px" width="35px"></img>
              </div>
              <div className="navbar_tabs">
                <img src={group} height="35px" width="35px"></img>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="navbar_right">
              <div className="navbar_righttab">
                <Avatar
                  className="navbar_rightimg"
                  src="https://scontent-otp1-1.xx.fbcdn.net/v/t39.30808-1/313026305_2327429857405052_3500018415428297930_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=03DP-8UpKrYAX_6emfM&_nc_oc=AQnzzhayb2jyHDbgG1--f63nd25tMvmbW-MancdmaMnPvbHdkrdxk0e4b1eiYbgZr10&_nc_ht=scontent-otp1-1.xx&oh=00_AfCqr2ZVv16v4YWz2iOVyCGQJgnXrguzdj53a67IohBykQ&oe=63825078"
                />
                <div className="navbar_profilename">Mihai</div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Navbar;

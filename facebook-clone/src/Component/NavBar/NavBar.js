import React, { Component } from "react";
import "./NavBar.css";
import Grid from "@material-ui/core/Grid";
import fblogo from "../../images/logo.png";
import home from "../../images/home.svg";
import page from "../../images/pages.svg";
import watch from "../../images/watch.svg";
import market from "../../images/market.svg";
import group from "../../images/groups.svg";
import { Avatar } from "@material-ui/core";
import { getImage } from "../../GetImage";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: JSON.parse(localStorage.getItem("user")).userImageURL,
    };
  }
  render() {
    return (
      <div>
        <Grid container className="navbar__main">
          <Grid item xs={3}>
            <div className="navbar__leftbar">
              <img className="navbar__logo" src={fblogo} width="40px" />
              <input
                className="navbar__search"
                type="text"
                placeholder="Search Facebook"
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="navbar__container">
              <div className="navbar__tabs active">
                <img src={home} height="35px" width="35px" />
              </div>
              <div className="navbar__tabs">
                <img src={page} height="35px" width="35px" />
              </div>
              <div className="navbar__tabs">
                <img src={watch} height="35px" width="35px" />
              </div>
              <div className="navbar__tabs">
                <img src={market} height="35px" width="35px" />
              </div>
              <div className="navbar__tabs">
                <img src={group} height="35px" width="35px" />
              </div>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="navbar__right">
              <div className="navbar__righttab">
                <Avatar
                  className="navbar__rightimg"
                  src={getImage(this.state.image)}
                />
                <div className="navbar__profilename">
                  {JSON.parse(localStorage.getItem("user")).userName}
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default NavBar;

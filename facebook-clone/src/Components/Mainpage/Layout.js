import React, { Component } from  'react';
import "./MainPage.css";
import { Grid } from "@mui/material";
import LeftSide from './leftsidepanel/LeftSide';
import StatusBar from './statusbar/StatusBar';
import UploadSection from './uploadsection/UploadSection';
import PostContainer from './postcontainer/PostContainer';
import RightSide from './rightsidepanel/RightSide';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return (
          <div className="mainpage_container">
            <Grid container>
              <Grid item xs={3}>
                <LeftSide />
              </Grid>
              <Grid item xs={6} className="middleContainer">
                <StatusBar />
                <UploadSection />
                <PostContainer />
              </Grid>
              <Grid item xs={3}>
                <RightSide />
              </Grid>
            </Grid>
          </div>
        );
    }
}

export default Layout;
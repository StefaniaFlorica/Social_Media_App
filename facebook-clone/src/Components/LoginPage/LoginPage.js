import React, { Component } from 'react';
import './LoginPage.css'
import Grid from '@mui/material/Grid';
//import { Grid } from '@material-ui/core';
// import inst_image from '../../images/9364675fb26a.svg';
// import inst_image from '../../images/fbLeft.jpg';
// import fb_logo from '../../images/logo.png';
// import fb from '../../images/fb.png';
// import appstore from '../../images/app.png';
// import playstore from '../../images/play.png';
import SignIN from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLogin: true
         }
    }

    changeLogin=()=>{
        if(this.state.isLogin)
            this.setState({isLogin: false});     
        else    
            this.setState({isLogin: true});
    }

    render() { 
        return ( 
            <div>
                <Grid container>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={6}>
                       <div className="loginpage__main">
                         <div className="loginpage_leftcomponent">
                             <span style={{"fontWeight":"bold", "fontSize": "70px", "color":"#0395F6"}}>facebook</span>
                             <div>
                                <span style={{"fontSize": "20px", "color":"black", "textAlign": "right"}}>Connect with friends and 
                                the world around you on Facebook.
                                </span>
                            </div>
                        </div>
                        </div>
                           <div>
                               <div className="loginpage_rightcomponent">
                                   <div className="loginPage__signin">

                                     {
                                         this.state.isLogin ? <SignIN/> : <SignUp/>
                                     }

                                        <div className="login_forgt"> 
                                        Forgot password?
                                        </div>

                                        <div className="login__ordiv">
                                            <div className="login__dividor"></div>
                                        </div>

                                        <div>
                                        {this.state.isLogin ?
                                        <div className="loginPage__signin">
                                                 <span onClick={this.changeLogin} style={{ "fontWeight":"bold", "color":"white", "backgroundColor": "#1AD15F", "border": "5px solid #1AD15F", "borderRadius": "5px"}}>Sign up</span>
                                        </div> :
                                        <div className="loginPage__signup">
                                                Have an account? <span onClick={this.changeLogin}  style={{ "fontWeight":"bold", "color":"white", "backgroundColor": "#1AD15F", "border": "5px solid #1AD15F", "borderRadius": "5px"}}>Sign in</span>
                                        </div>}
                                        </div>
                                   </div>
                               </div>
                               
                                <div className="loginPage__downSection">
                                    <div>
                                        <span style={{"fontWeight":"bold", "color":"black"}}>Create a page </span>for a celebrity, brand or company.
                                </div>
                                </div>
                           </div>
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                </Grid>
            </div>
         );
    }
}
 
export default LoginPage;
import React, { Component } from 'react';
import './LoginPage.css'
import Grid from '@mui/material/Grid';
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
                             <span style={{"fontWeight":"bold", "fontSize": "70px", "color":"#0B9082"}}>Talkie.</span>
                             <div>
                                <span style={{"fontSize": "20px", "color":"black", "textAlign": "right"}}>Connect with friends and 
                                the world around you.
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
                                                 <span onClick={this.changeLogin} style={{ "fontWeight":"bold", "color":"white", "backgroundColor": "#2CD2BC", "border": "5px solid #2CD2BC", "borderRadius": "5px"}}>Sign up</span>
                                        </div> :
                                        <div className="loginPage__signup">
                                               <div onClick={this.changeLogin}>
                                                <span style={{"fontWeight":"bold", "color":"white", "backgroundColor": "#2CD2BC", "border": "5px solid #2CD2BC", "borderRadius": "5px", "marginTop": "-70px"}}>
                                                    Sign in</span>
                                                </div>
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
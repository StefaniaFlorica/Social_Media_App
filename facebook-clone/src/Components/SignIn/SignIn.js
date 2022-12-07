import React, { Component } from "react";
import "../LoginPage/LoginPage.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

class SignIN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: null,
      password: null,
    };
  }

  newLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(
      auth,
      this.state.emailId,
      this.state.password
    )
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;

        let payload = {
            "userId": user.uid
        }

        const requestOptions ={
            method: "GET",
            headers: { 'Content-Type': 'application/json' },
            body : JSON.stringify(payload),
            mode : 'no-cors'
        }

        fetch("http://localhost:8080/api//getUserById/" + user.uid,requestOptions)
          .then((response) => response.json())
          .then((data) => {
            localStorage.setItem("user", JSON.stringify(data));
            window.location.reload();
          })
          .catch((error) => {});
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };

  render() {
    return (
      <div>
        <input
          className="logipage__text"
          onChange={(event) => {
            this.state.emailId = event.currentTarget.value;
          }}
          type="text"
          placeholder="Phone number, username, or email"
        />
        <input
          className="logipage__text"
          onChange={(event) => {
            this.state.password = event.currentTarget.value;
          }}
          type="password"
          placeholder="Password"
        />
        <button className="login__button" onClick={this.newLogin}>
          Log In
        </button>
      </div>
    );
  }
}

export default SignIN;

import React, { Component } from 'react';
import firebase from 'firebase';
import firebaseui from'firebaseui';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { currentUser } from "./redux/action-creators.js";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
    var self = this;
    var uiConfig = {
    callbacks: {
      signInSuccess: (currentUser, credential, redirectUrl) => {
        var CurrentUser = {};
        CurrentUser["uid"] = currentUser.uid;
        CurrentUser["photoURL"] = currentUser.photoURL;
        CurrentUser["displayName"] = currentUser.displayName;
        CurrentUser["email"] = currentUser.email;
        CurrentUser["phoneNumber"] = currentUser.phoneNumber;
        console.log("you are a geek if you saw this message");
        var UserRef = firebase.database().ref("user/" + CurrentUser.uid);
        UserRef.once("value", dataSnap => {
          if (dataSnap.val()) {
            self.props.currentUser(CurrentUser);
          } else {
            UserRef.set(true).then(result => {
              console.log("user type set");
              console.log(result);
              CurrentUser["user_type"] = "student";
              self.props.currentUser(CurrentUser);
            });
          }
        });
        self.props.history.push("/dashboard");
        return true;
      }
    },
    signInFlow: "popup",
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,

        //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,

        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // firebase.auth.PhoneAuthProvider.PROVIDER_ID
      ],
      // Terms of service url.
      tosUrl: "<your-tos-url>"
    };
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);
  }

  render() {
    return (
      <div style={{margin: 'auto'}}>
        <div id="firebaseui-auth-container" />
      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ currentUser: currentUser }, dispatch);
}
export default connect(null, matchDispatchToProps)(Login);

import React, { Component } from 'react';

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
  }

  render() {
    return (
      <div style={{margin: 'auto',textAlign: 'center'}}>
        <h1>Dashboard</h1>
      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ currentUser: currentUser }, dispatch);
}
export default connect(null, matchDispatchToProps)(Login);

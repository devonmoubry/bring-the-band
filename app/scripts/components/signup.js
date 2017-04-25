import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";
import container from "../containers/all.js"

import signupNewUser from "../actions/signup_new_user.js"

class Signup extends React.Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    const signupFullName = this.refs.signupFullName.value;
    const signupEmail = this.refs.signupEmail.value
    const signupPassword = this.refs.signupPassword.value
    console.log('button click');
    console.log('firstName', signupFullName);
    console.log('email', signupEmail);
    console.log('password', signupPassword);
    this.props.dispatch(signupNewUser(signupFullName, signupEmail, signupPassword));
  }

  render() {
    return (
      <main>
        <h1>Sign up</h1>
        <form id="signup">
          <input className="text-input" type="text" ref="signupFullName" placeholder="FULL NAME" defaultValue="Connor"></input>
          <input className="text-input" type="text" ref="signupEmail" placeholder="VALID EMAIL" defaultValue="connor@example.com"></input>
          <input className="text-input" type="password" ref="signupPassword" placeholder="CREATE PASSWORD" defaultValue="password"></input>
          <input onClick={this.handleSubmit} className="submit-input" type="submit" value="SIGNUP"></input>
        </form>
      </main>
    );
  }
}

export default connect(container.allState)(Signup);

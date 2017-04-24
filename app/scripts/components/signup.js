import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";

class Signup extends React.Component {
  render() {
    return (
      <main>
        <h1>Sign up</h1>
        <form id="signup">
          <input className="text-input" type="text" id="firstName" placeholder="FIRST NAME" value="Connor"></input>
          <input className="text-input" type="text" id="lastName" placeholder="LAST NAME" value="Mowberry"></input>
          <input className="text-input" type="text" id="signup-email" placeholder="VALID EMAIL" value="connor@example.com"></input>
          <input className="text-input" type="password" id="signup-password" placeholder="CREATE PASSWORD" value="password"></input>
          <input className="submit-input" type="submit" value="SIGNUP"></input>
        </form>
      </main>
    );
  }
}

export default Signup;

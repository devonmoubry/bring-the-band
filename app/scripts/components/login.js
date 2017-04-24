import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <main className="login-container">
        <h1>Login</h1>
        <form id="user-login-form" className="login-form-container">
          <input className="text-input" type="text" id="login-username" placeholder="@example.com" value="connor@example.com"></input>
          <input className="text-input" type="password" id="login-password" placeholder="password" value="password"></input>
          <input className="submit-input" type="submit" value="LOGIN"></input>
        </form>
      </main>
    );
  }
}

export default Login;

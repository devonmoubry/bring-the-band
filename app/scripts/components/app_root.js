import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";

class AppRoot extends React.Component {
  render() {
    return (
      <main>
        <h1>Bring the Band!</h1>
        <p>Hey. Thank you for visiting our webpage.</p>
        <Link className="link-button" to="/login">Please login.</Link>
        <Link className="link-button" to="/signup">New User? Please sign up!</Link>
      </main>
    );
  }
}

export default AppRoot;

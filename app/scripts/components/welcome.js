import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";

class Welcome extends React.Component {
  render() {
    return (
      <main>
        <h1>Welcome!</h1>
        <p>You’re in.</p>
      </main>
    );
  }
}

export default Welcome;

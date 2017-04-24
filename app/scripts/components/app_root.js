import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";

class AppRoot extends React.Component {
  render() {
    return (
      <main>
        <h1>Bring the Band!</h1>
        <p>Thank you for visiting our webpage. Please come again.</p>
      </main>
    );
  }
}

export default AppRoot;

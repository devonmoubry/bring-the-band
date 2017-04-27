import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";
import container from '../containers/all.js';

class NavBar extends React.Component {
  render() {
    return (
      <nav className="logged-in-navigation">
        <NavLink to="/search">Search</NavLink>
        <br />
        <NavLink to="/votes">Votes</NavLink>
      </nav>
    )
  }
}

export default connect(container.allState)(NavBar);

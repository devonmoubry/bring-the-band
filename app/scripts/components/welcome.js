import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";

class Welcome extends React.Component {
  render() {
    return (
      <main>
        <h1>Welcome to Liberty Lunch!</h1>
        <p>You’re in.</p>
        <p>Want a band to come play the venue? Vote now.</p>
        <Link className="link-button" to="/search">Bring the Bands!</Link>
        <p>Click below to see the bands you’ve already voted for.</p>
        <Link className="link-button" to="/votes">VOTES</Link>
      </main>
    );
  }
}

export default Welcome;

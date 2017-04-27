import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";
import container from "../containers/all.js";
//actions
import getVotes from "../actions/get_votes.js";
//components
import VotesList from "./votes_list.js";
import NavBar from './nav_bar.js';

class Votes extends React.Component {
  render() {
    return (
      <main>
        <NavBar />
        <VotesList />
      </main>
    );
  }
}

export default connect(container.allState)(Votes);

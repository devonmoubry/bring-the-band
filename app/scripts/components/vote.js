import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";
import container from "../containers/all.js";
//actions
import getVotes from "../actions/get_votes.js"

class Vote extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return(
      <li className="vote">
        <img tabIndex="0" src="#" />
        <p tabIndex="0">Jukebox the Ghost</p>
      </li>
    )
  }
}

export default connect(container.allState)(Vote);

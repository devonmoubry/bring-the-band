import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";
import container from "../containers/all.js";
//components
import Vote from './vote.js'

class VotesList extends React.Component {
  constructor(props) {
    super(props)

  }

  getTheVote() {
    return (<Vote />)
  }

  render() {

    return(
      <div className="votes-list">
        <h1 tabIndex="0">Votes</h1>
        <ul>
          {this.getTheVote()}
        </ul>
      </div>
    )
  }
}

export default connect(container.allState)(VotesList)

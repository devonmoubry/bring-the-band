import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";
import container from "../containers/all.js";
//actions
import saveVote from "../actions/save_vote.js"

class SearchResult extends React.Component {
  constructor(props) {
    super(props)

    this.getImageURL = this.getImageURL.bind(this)
    this.handleVoting = this.handleVoting.bind(this)
  }

  getImageURL(images) {
    if (images.length === 0) {
      return 'http://herniamovers.com/assets/boxes_packages/large/image_not_available.gif'
    } else {
      return images[0].url
    }
  }

  handleVoting(event) {
    event.preventDefault();
    const id = this.props.artist.id;
    const name = this.props.artist.name;
    const image = this.props.artist.images;
    this.props.dispatch(saveVote(id, name, image));
  }

  render() {

    return(
      <li className="search-result">
        <img tabIndex="0" src={this.getImageURL(this.props.artist.images)} alt={this.props.artist.name} />
        <p tabIndex="0">{this.props.artist.name}</p>
        <input className="submit-input" onClick={this.handleVoting} type="submit" value="VOTE"></input>
      </li>
    )
  }
}

export default connect(container.allState)(SearchResult);

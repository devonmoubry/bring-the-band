import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";
import container from "../containers/all.js";
//actions
import searchArtists from "../actions/search_artists.js";

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(event) {
    event.preventDefault();
    const inputSearch = this.refs.inputSearch.value;
    this.props.dispatch(searchArtists(inputSearch));
  }

  render() {
    return (
      <main>
        <h1>Search</h1>
        <input className="text-input" type="text" ref="inputSearch" placeholder="ARTIST" defaultValue="My Pretty Pony"></input>
        <input onClick={this.handleSearch} className="submit-input" type="submit" value="SEARCH"></input>
      </main>
    );
  }
}

export default connect(container.allState)(Search);

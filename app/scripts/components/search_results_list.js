import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";
import container from "../containers/all.js";
//components
import SearchResult from "./search_result.js"

class SearchResultsList extends React.Component {
  constructor(props) {
    super(props)

    this.handleSearchResults = this.handleSearchResults.bind(this)
  }

  handleSearchResults(artists) {
    return artists.map(function(artist) {
      return (
        <SearchResult key={artist.id} artist={artist} role="alert"/>
      )
    })
  }
  render() {
    let artists = this.props.searchResults;
    if (artists === null) {
      return (<span />)
    } else if (artists.length > 0) {
      return(
        <div className="results-div">
          <h1 tabIndex="0">Results</h1>
          <ul>
            {this.handleSearchResults(artists)}
          </ul>
        </div>
      )
    } else {
      return (
        <p>Bummer, no artists found.</p>
      );
    }
  }
}

export default connect(container.allState)(SearchResultsList);

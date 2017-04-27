export default function searchArtists (inputSearch) {
  return (dispatch) => {
    return $.ajax({
      type: 'GET',
      url: 'https://api.spotify.com/v1/search?q='+inputSearch+'&type=artist',
      dataType: 'JSON'
    }).then(function(data) {
      console.log(data);
      dispatch({ type: "LOADED_RESULTS", artists: data.artists.items});
    });
  }
}

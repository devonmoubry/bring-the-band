import searchArtists from '../components/search.js'

export default function AppReducer(state, action) {
  if (state === undefined) {
    return {
      searchResults: null,
      usertoken: null
    };
  }

  switch(action.type) {
    case "LOADED_RESULTS":
      console.log('LOADED_RESULTS');
      var newState = {
        searchResults: action.artists
      };
      return Object.assign({}, state, newState);

    case "LOGGED_IN":
      console.log("LOGGED_IN");
      console.log("action.usertoken", action.usertoken);
      var newState = {
        usertoken: action.usertoken
      }
      return Object.assign({}, state, newState);
  }

  console.log("Unhandled State!");
  return state;
}

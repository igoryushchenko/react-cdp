import constants from '../../shared/constants';
import {getMovies} from '../../api';

const defaultState = {
  searchString: '',
  searchResults: {
    data: [],
    total: 0,
    offset: 0,
    limit: 0
  },
  selectedMovie: {},
  showMovieDetails: false
}

const rootReducer = ({ type, payload }, state = defaultState ) => {
  switch (type) {
    case constants.SHOW_MOVIE_DETAILS:
      return {
        ...state,
        showMovieDetails: true,
        selectedMovie: state.searchResults.data.find(m => m.id === payload.id)
      }

    case constants.HIDE_MOVIE_DETAILS:
      return {
        ...state,
        showMovieDetails: false,
        selectedMovie: {}
      }

    case constants.SEARCH_MOVIES:
      state.searchResults = getMovies(state.searchString);
      return {
        ...state,
        searchString: payload.searchString
      }

    default:
      return state;
  }

}

export {
  rootReducer
}

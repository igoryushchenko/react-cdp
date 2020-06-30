import constants from '../../shared/constants';

const showMovieDetailsAction = (id) => ({
    type: constants.SHOW_MOVIE_DETAILS,
    payload: {
      id
    }
});

const hideMovieDetailsAction = () => ({
    type: constants.HIDE_MOVIE_DETAILS
});

const searchMoviesSuccessAction = (searchResults) => ({
    type: constants.SEARCH_MOVIES_SUCCESS,
    payload: {
      searchResults
    }
});

const searchMoviesStartAction = (searchQuery) => ({
  type: constants.SEARCH_MOVIES_START,
  payload: {
    searchQuery
  }
});

export {
  searchMoviesStartAction,
  searchMoviesSuccessAction,
  showMovieDetailsAction,
  hideMovieDetailsAction,
}

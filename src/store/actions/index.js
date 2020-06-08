import constants from '../../shared/constants';

const showMovieDetailsAction = (id) => ({
    type: constants.SHOW_MOVIE_DETAILS,
    payload: {
      id
    }
})

const hideMovieDetails = () => ({
    type: constants.HIDE_MOVIE_DETAILS
})

const searchMovies = (searchResults) => ({
    type: constants.SEARCH_MOVIES,
    payload: {
      searchResults
    }
});

export {
  searchMovies,
  showMovieDetailsAction,
  hideMovieDetails
}

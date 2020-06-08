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

const searchMovies = (searchString) => ({
    type: constants.SEARCH_MOVIES,
    payload: {
      searchString
    }
});

export {
  searchMovies,
  showMovieDetailsAction,
  hideMovieDetails
}

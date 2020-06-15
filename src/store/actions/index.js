import constants from '../../shared/constants';
import {getMovies} from '../../api';

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

const searchMoviesStartAction = (searchQuery) => {
  return dispatch => {
    return getMovies({searchQuery})
      .then(response => response.json())
      .then(data => {
        dispatch(searchMoviesSuccessAction(data))
      });
  };
};

export {
  searchMoviesStartAction,
  searchMoviesSuccessAction,
  showMovieDetailsAction,
  hideMovieDetailsAction,
}

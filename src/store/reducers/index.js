import { fromJS } from 'immutable';
import constants from '../../shared/constants';

const defaultState = fromJS({
  searchString: '',
  searchResults: {
    data: [],
    total: 0,
    offset: 0,
    limit: 0,
  },
  selectedMovie: {},
  showMovieDetails: false,
});

const rootReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case constants.SHOW_MOVIE_DETAILS:
      return state
        .set('showMovieDetails', true)
        .set('selectedMovie', state.toJS().searchResults.data.find((m) => m.id === payload.id));

    case constants.HIDE_MOVIE_DETAILS:
      return state
        .set('showMovieDetails', false)
        .set('selectedMovie', {});

    case constants.SEARCH_MOVIES_SUCCESS:
      return state
        .set('searchResults', payload.searchResults);

    default:
      return state;
  }
};

export {
  rootReducer,
  defaultState,
};

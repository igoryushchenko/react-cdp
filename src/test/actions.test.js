import constants from '../shared/constants';
import {hideMovieDetailsAction, searchMoviesSuccessAction, showMovieDetailsAction} from '../store/actions';

describe('actions', () => {
  it('should create a show movie details action', () => {
    const id = '123id';
    const expectedAction = {
      type: constants.SHOW_MOVIE_DETAILS,
      payload: {
        id
      }
    };
    expect(showMovieDetailsAction(id)).toEqual(expectedAction);
  });

  it('should create a hide movie details action', () => {
    const expectedAction = {
      type: constants.HIDE_MOVIE_DETAILS
    };
    expect(hideMovieDetailsAction()).toEqual(expectedAction);
  });

  it('should create a search movies action', () => {

    const searchResults = {
      data: [],
      total: 0,
      offset: 0,
      limit: 0
    };

    const expectedAction = {
      type: constants.SEARCH_MOVIES_SUCCESS,
      payload: {
        searchResults
      }
    };
    expect(searchMoviesSuccessAction(searchResults)).toEqual(expectedAction);
  });
});

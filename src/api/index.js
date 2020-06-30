import { call, put, takeLatest } from 'redux-saga/effects';
import {searchMoviesSuccessAction} from '../store/actions';
import constants from '../shared/constants';

const baseUrl = 'https://reactjs-cdp.herokuapp.com/movies';

// searchBy:  title, genres
// sortBy: release_date, vote_average
// sortOrder: 'desc' or 'asc'

// https://reactjs-cdp.herokuapp.com/movies?sortBy=vote_average&sortOrder=desc&search=war&searchBy=title

const getMovies = ({searchQuery = '', sortBy = 'vote_average', searchBy = 'title'}) => {
  const url = `${baseUrl}?sortBy=${sortBy}&sortOrder=desc&search=${searchQuery}&searchBy=${searchBy}`;
  return fetch(url);
};

// Sagas
const getMoviesAsync = function* (action) {
  const {
    payload: {
      searchQuery = '',
      sortBy = 'vote_average',
      searchBy = 'title'
    }
  } = action;
  const url = `${baseUrl}?sortBy=${sortBy}&sortOrder=desc&search=${searchQuery}&searchBy=${searchBy}`;
  const response = yield call(fetch, url);
  yield put(searchMoviesSuccessAction(response.json()))
}

const watchGetMovies = function* () {
  yield takeLatest(constants.SEARCH_MOVIES_START, getMoviesAsync);
}

export {
  getMovies,
  getMoviesAsync,
  watchGetMovies
};

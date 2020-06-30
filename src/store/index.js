import { createStore, applyMiddleware } from 'redux';
// import { createStore } from 'redux';

import createSagaMiddleware, { END } from 'redux-saga';

import { rootReducer, defaultState as initialState } from './reducers';
import { watchGetMovies } from '../api';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchGetMovies);
store.runSaga = () => sagaMiddleware.run(watchGetMovies);
store.close = () => store.dispatch(END);

export { store };

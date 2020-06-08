// import { createStore, applyMiddleware } from 'redux';
import { createStore } from 'redux';
// import thunk from 'redux-thunk';

import { rootReducer } from './reducers';

// const middleWare = [thunk];

// const store = createStore(rootReducer, applyMiddleware(...middleWare));
const store = createStore(rootReducer);

export default store;

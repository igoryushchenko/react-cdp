import { createStore, applyMiddleware } from 'redux';
// import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import thunk from 'redux-thunk';

import { rootReducer } from './reducers';

// const middleWare = [thunk];

// const store = createStore(rootReducer, applyMiddleware(...middleWare));

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store)

export { store, persistor };

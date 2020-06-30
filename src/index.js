import React from 'react';
import { hydrate } from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './store';

hydrate(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

import React from 'react';
import { hydrate } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import store from './store';
import App from './App';

hydrate(
  <Provider store={store}>
      <ErrorBoundary>
        <App
          Router={BrowserRouter}
          store={store}
        />
      </ErrorBoundary>
  </Provider>,
  document.getElementById('root'),
);

import React from 'react';
import { hydrate } from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { Provider } from "react-redux";
import { store } from './store';

hydrate(
  <Provider store={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);

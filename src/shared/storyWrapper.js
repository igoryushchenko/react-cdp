import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import store from '../store';

const storyWrapper = (story) => (
  <Provider store={store}>
    <BrowserRouter>
      { story() }
    </BrowserRouter>
  </Provider>
);

export default storyWrapper;

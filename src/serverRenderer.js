import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

const renderHTML = (html) => (
  `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8"/>
            <title>React CDP</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
        </head>
        <body>
            <div id="root">${html}</div>
        <script src="/js/index.js"></script></body>
    </html>`
);

const serverRenderer = () => (req, res) => {
  // This context object contains the results of the render
  const context = {};

  const app = () => (
    <Provider store={store}>
      <App
        context={context}
        location={req.url}
        Router={StaticRouter}
      />
    </Provider>
  );

  store.runSaga().toPromise().then(() => {
    const htmlString = renderToString(app());

    // context.url will contain the URL to redirect to if a <Redirect> was used
    if (context.url) {
      res.writeHead(302, {
        Location: context.url,
      });
      res.end();
      return;
    }

    const preloadedState = store.getState();

    res.send(renderHTML(htmlString, preloadedState));
  });

  // Do first render, starts initial actions.
  renderToString(app());
  // When the first render is finished, send the END action to redux-saga.
  store.close();
};

export default serverRenderer;

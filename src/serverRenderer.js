import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';

const renderHTML = (html) => (
  `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8"/>
            <title>React CDP</title>
        </head>
        <body>
            <div id="root">${html}</div>
        <script src="/js/index.js"></script></body>
    </html>`
);

const serverRenderer = (req, res) => {

  // This context object contains the results of the render
  const context = {};

  const app = (
      <App
        context={context}
        location={req.url}
        Router={StaticRouter}
      />
  );

  // context.url will contain the URL to redirect to if a <Redirect> was used
  if (context.url) {
    res.writeHead(302, {
      Location: context.url,
    });
    res.end();
    return;
  }

  const htmlString = renderToString(app);
  res.send(renderHTML(htmlString));
};

export { serverRenderer };

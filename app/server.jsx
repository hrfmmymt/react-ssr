import React from "react";
import { renderToString } from "react-dom/server";
import App from "App";

const renderFullPage = renderedContent => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>React - Server Side Rendering</title>
    </head>
    <body>
      <div id="app">${renderedContent}</div>
      <script charset="utf-8" src="/app.js"></script>
    </body>
  </html>
  `;
};

export default function render(req, res) {
  const renderedContent = renderToString(<App />);
  const renderedPage = renderFullPage(renderedContent);
  res.status(200).send(renderedPage);
};

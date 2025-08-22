const React = require("react");
const ReactDOMServer = require("react-dom/server");
const fs = require("fs");
const path = require("path");
const App = require("../serverHelpers/app");

exports.ssrRender = (req, res) => {
  console.log("Hit at /file");
  const htmlTemplate = fs.readFileSync(
    path.resolve(__dirname, "../public/index.html"),
    "utf8"
  );
  const reactApp = ReactDOMServer.renderToString(React.createElement(App));

  const html = htmlTemplate.replace(
    '<div id="root"><!-- SSR React here --></div>',
    `<div id="root">${reactApp}</div>`
  );

  res.send(html);
};

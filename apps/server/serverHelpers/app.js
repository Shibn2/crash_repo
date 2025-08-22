const React = require("react");

function App() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello from Server-Side Rendered React!")
  );
}

module.exports = App;

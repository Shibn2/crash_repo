import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import featureFalgs from "./utils.js/featureFlagManager";
import store from "./store";
import { Provider } from "react-redux";
import App2 from "./app2";

featureFalgs.load({
  newDashboard: true,
  betaSearch: true,
});

const root = document.getElementById("root");
const reactRoot = createRoot(root);

reactRoot.render(
  <Provider store={store}>
    <App />
  </Provider>
);

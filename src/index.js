import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import store from "./store/configureStore.js";
import App from "./components/App/App.js";
import "./App.css";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
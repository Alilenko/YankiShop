import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import "./i18next";
import { BrowserRouter as Router } from "react-router-dom";

import "./styles/index.scss";

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <Provider store={store}>
      <Router basename="/YankiShop">
        <App />
      </Router>
    </Provider>
  </Suspense>,
  document.getElementById("root")
);

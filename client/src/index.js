import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.scss";

import store from "./app/store";
import { StartingContainer } from "./components";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <React.Suspense fallback={<StartingContainer />}>
          <App />
        </React.Suspense>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();

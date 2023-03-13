import React from "react";
import "./style.css";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import configStore from "./configStore";
import App from "./pages/App";

const container = document.getElementById("root");
const root = createRoot(container);

const store = configStore();

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

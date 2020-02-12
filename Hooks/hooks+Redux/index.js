import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";
import App from "./App";
 
const vehicle = createStore(reducer);
 
const rootElement = document.getElementById("root");
 
ReactDOM.render(
  <Provider store={vehicle}>
    <App />
  </Provider>,
  rootElement
);
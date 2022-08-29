import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
// actions => increment,decrement
const increment = () => {
  return {
    type: "INCREMENT",
  };
};
const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

// store
let store = createStore(counterReducer);

// コンソールに新しい状態を出力
store.subscribe(() => console.log(store.getState()));
// dispatch
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

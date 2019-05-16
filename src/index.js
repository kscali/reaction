import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import PubSub from "./pubsub";
import App from "./components/App";
import "./index.css";

let store = createStore(rootReducer);

console.log("store.getState", store.getState());

store.subscribe(() => console.log("store.getState", store.getState()));

const pubsub = new PubSub();

pubsub.addListener({
  message: messageObject => {
    const { message, channel } = messageObject;
    console.log("Received message:", message, "chanel:", channel);
    store.dispatch(message);
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

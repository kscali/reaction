import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import PubSub from "./pubsub";
import App from "./components/App";
import { newMessage } from "./actions/messages";
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

setTimeout(() => {
  pubsub.publish(newMessage("Dat ass...."));
}, 1000);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

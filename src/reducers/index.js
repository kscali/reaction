import { combineReducers } from "redux";
import messagesReducer from "./message_reducer";
import usernameReducer from "./username_reducer";

export default combineReducers({
  messages: messagesReducer,
  username: usernameReducer
});

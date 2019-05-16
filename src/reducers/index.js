import { combineReducers } from "redux";
import messagesReducer from "./message_reducer";

export default combineReducers({
  messages: messagesReducer
});

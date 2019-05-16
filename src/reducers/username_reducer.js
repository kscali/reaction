import { SET_USERNAME } from "../actions/types";

const DEFAULT_NAME = "anonymous";

const usernameReducer = (state = DEFAULT_NAME, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return action.username;
    default:
      return state;
  }
};

export default usernameReducer;

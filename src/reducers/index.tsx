import { combineReducers } from "redux";

import greeting from "./greetingReducer";

export default combineReducers({
  greeting,
  // Could have more reducers in here
});
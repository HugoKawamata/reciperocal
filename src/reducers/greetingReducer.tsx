import { Greeting, Action } from "./reducerTypes";

export default function greetingReducer(
    state: Greeting = {greeting: "Hello", language: "English"}, 
    action: Action) {
  switch (action.type) {
    case "CHANGE_GREETING": {
      state = {...state, greeting: action.payload};
      break;
    }
    case "CHANGE_LANGUAGE": {
      state = {...state, language: action.payload};
      break;
    }
    default: {
      break;
    }
  }
  return state;
};


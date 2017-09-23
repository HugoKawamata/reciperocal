import { combineReducers } from "redux";

import greeting from "./greetingReducer";
import recipeList from "./myRecipesReducer";

export default combineReducers({
  greeting,
  recipeList
});